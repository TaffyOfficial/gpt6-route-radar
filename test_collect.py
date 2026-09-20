import unittest
from unittest.mock import patch
import collect


class CollectorTests(unittest.TestCase):
    def page(self, ids, total=3, size=2):
        return {'success': True, 'data': {'items': [{'id': x} for x in ids], 'total': total, 'page_size': size}}

    def api(self, second):
        def get(path):
            if 'page=1&' in path:
                return self.page(['a', 'b'])
            if 'page=2&' in path:
                return second
            return {'success': True, 'data': []}
        return get

    def test_uses_actual_page_size(self):
        with patch.object(collect, 'get_json', side_effect=self.api(self.page(['c']))), patch.object(collect, 'normalize', side_effect=lambda groups, *args: groups):
            self.assertEqual([r['id'] for r in collect.collect()], ['a', 'b', 'c'])

    def test_rejects_partial_pages(self):
        with patch.object(collect, 'get_json', side_effect=self.api(self.page([]))):
            with self.assertRaisesRegex(ValueError, 'Incomplete'):
                collect.collect()

    def test_rejects_duplicate_pages(self):
        with patch.object(collect, 'get_json', side_effect=self.api(self.page(['a']))):
            with self.assertRaisesRegex(ValueError, 'duplicate'):
                collect.collect()

    def test_rejects_changing_total(self):
        with patch.object(collect, 'get_json', side_effect=self.api(self.page(['c'], total=4))):
            with self.assertRaisesRegex(ValueError, 'changed'):
                collect.collect()

    def test_model_missing_does_not_fall_back_to_group_metrics(self):
        group = {'id': 'a', 'models': ['gpt-6-astra'], 'source_label': 'Codex Pro', 'multiplier': .22, 'system_display_name': 'test', 'cache_hit_rate': 99, 'success_rate': 100}
        out = collect.normalize([group], {'data': []}, {}, {'data': {'quota_per_unit': 500000}})['rows'][0]
        self.assertIsNone(out['cache'])
        self.assertIsNone(out['success'])
        self.assertEqual(out['modelRequests'], 0)

    def test_platform_observation_is_only_set_when_explicitly_reported(self):
        group = {'id': 'a', 'models': ['gpt-6-astra'], 'source_label': 'Codex Pro', 'multiplier': .22, 'system_display_name': 'test'}
        args = ({'data': []}, {}, {'data': {'quota_per_unit': 500000}})
        self.assertFalse(collect.normalize([group], *args)['rows'][0]['observing'])
        for value in [True, False, None]:
            self.assertEqual(collect.normalize([{**group, 'observing': value}], *args)['rows'][0]['observing'], value is True)

    def test_quota_conversion_and_zero_spend(self):
        group = {'id': 'a', 'models': ['gpt-6-astra'], 'source_label': 'Codex Pro', 'multiplier': .22, 'system_display_name': 'test', 'avg_consumer_amount_by_model': {'gpt-6-astra': 1000000}}
        args = ({'data': []}, {}, {'data': {'quota_per_unit': 500000}})
        self.assertEqual(collect.normalize([group], *args)['rows'][0]['historicalCost'], 2)
        group['avg_consumer_amount_by_model']['gpt-6-astra'] = 0
        self.assertIsNone(collect.normalize([group], *args)['rows'][0]['historicalCost'])

    def test_keeps_full_supported_models_and_distinct_success_windows(self):
        group = {'id': 'a', 'models': ['gpt-6-astra', 'gpt-5.6-sol'], 'source_label': 'Codex Pro', 'multiplier': .22, 'system_display_name': 'test', 'success_rate': 80}
        statuses = {'data': [{'group_id': 'a', 'success_rate': 92, 'request_count': 15, 'models': [
            {'model': 'gpt-6-astra', 'success_rate': 90, 'request_count': 10, 'sample_window': 1},
            {'model': 'gpt-5.6-sol', 'success_rate': 96, 'request_count': 5, 'sample_window': 1},
        ]}]}
        snapshot = collect.normalize([group], statuses, {}, {'data': {'quota_per_unit': 500000}})
        row = snapshot['rows'][0]
        self.assertEqual(row['models'], ['gpt-6-astra', 'gpt-5.6-sol'])
        self.assertEqual(row['success'], 90)
        self.assertEqual(row['latestGroupSuccess'], 92)
        self.assertEqual(row['groupSuccess'], 80)
        self.assertEqual(row['groupWindowHours'], 1)
        self.assertEqual(row['modelStats'][1]['success'], 96)
        self.assertEqual(snapshot['schemaVersion'], 2)

    def test_low_zero_and_missing_quotes_are_all_retained(self):
        group = {'id': 'a', 'channel_id': '153', 'models': ['gpt-6-astra'], 'source_label': 'Codex Pro', 'multiplier': .2, 'system_display_name': '153-Codex Pro-0.2x'}
        low = {**group, 'id': 'low', 'channel_id': '999', 'multiplier': .199999}
        out = collect.normalize([group, low, {**group, 'id': 'zero', 'multiplier': 0}, {**group, 'id': 'missing', 'multiplier': None}], {'data': []}, {}, {'data': {'quota_per_unit': 500000}})
        self.assertEqual(out['minMultiplier'], 0)
        self.assertEqual(out['count'], 4)
        self.assertEqual(out['rows'][0]['channelId'], '153')
        self.assertEqual(out['rows'][1]['channelId'], '999')
        self.assertEqual(out['rows'][2]['multiplier'], 0)
        self.assertIsNone(out['rows'][3]['multiplier'])
        self.assertEqual(out['lookupRows'], [])

    def test_historical_cost_uses_only_gpt6_and_never_group_or_other_models(self):
        group = {'id': 'a', 'models': ['gpt-6-astra'], 'source_label': 'Codex Pro', 'multiplier': .22, 'system_display_name': 'test', 'avg_consumer_amount': 9999999, 'avg_consumer_amount_by_model': {'gpt-5.6-sol': 8888888, 'gpt-6-astra': 175000}}
        args = ({'data': []}, {}, {'data': {'quota_per_unit': 500000}})
        self.assertEqual(collect.normalize([group], *args)['rows'][0]['historicalCost'], .35)
        del group['avg_consumer_amount_by_model']['gpt-6-astra']
        self.assertIsNone(collect.normalize([group], *args)['rows'][0]['historicalCost'])

    def test_selected_model_controls_source_verification_cost_and_status(self):
        models = ['claude-opus-5', 'claude-sonnet-5', 'claude-fable-5-1', 'gpt-5.6-sol']
        for model in models:
            with self.subTest(model=model):
                source = 'Codex Pro' if model.startswith('gpt') else 'CC-Max'
                group = {'id': 'a', 'models': [model, collect.MODEL], 'source_label': source,
                         'multiplier': .3, 'system_display_name': 'test', 'verification_status': 'passed',
                         'model_verification_results': [{'model': model, 'status': 'passed', 'listed': True}],
                         'avg_consumer_amount_by_model': {model: 1000000, collect.MODEL: 123}}
                statuses = {'data': [{'group_id': 'a', 'models': [
                    {'model': model, 'success_rate': 97, 'request_count': 60, 'cache_hit_rate': 75},
                    {'model': collect.MODEL, 'success_rate': 20, 'request_count': 1}]}]}
                out = collect.normalize([group], statuses, {}, {'data': {'quota_per_unit': 500000}}, model=model)
                row = out['rows'][0]
                self.assertEqual((row['model'], row['source'], row['success'], row['cache'], row['historicalCost']),
                                 (model, source, 97, 75, 2))
                self.assertTrue(row['verified'])
                self.assertIn('model=' + model, collect.group_path(1, model))
                self.assertEqual('source=' in collect.group_path(1, model), source == 'Codex Pro')
                group['model_verification_results'] = [{'model': collect.MODEL, 'status': 'passed', 'listed': True}]
                del group['avg_consumer_amount_by_model'][model]
                row = collect.normalize([group], statuses, {}, {'data': {'quota_per_unit': 500000}}, model=model)['rows'][0]
                self.assertFalse(row['verified'])
                self.assertIsNone(row['historicalCost'])

    def test_collect_all_reuses_shared_responses_and_includes_every_model(self):
        def one(model, shared):
            self.assertIn('statuses', shared)
            return {'model': model, 'complete': True, 'rows': []}
        with patch.object(collect, 'get_json', return_value={'data': []}) as get, patch.object(collect, 'collect', side_effect=one) as run:
            out = collect.collect_all()
            self.assertEqual(get.call_count, 3)
            self.assertEqual(run.call_count, 5)
            self.assertEqual(out['model'], collect.MODEL)
            self.assertEqual(set(out['modelSnapshots']), set(collect.MODELS) - {collect.MODEL})

    def test_mixed_windows_are_not_labeled_as_one_hour(self):
        fields = collect.status_fields({'models': [{'model':'gpt-6-astra','sample_window':1}, {'model':'x','sample_window':6}]}, ['gpt-6-astra','x'])
        self.assertIsNone(fields['groupWindowHours'])


if __name__ == '__main__':
    unittest.main()
