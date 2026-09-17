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

    def test_mixed_windows_are_not_labeled_as_one_hour(self):
        fields = collect.status_fields({'models': [{'model':'gpt-6-astra','sample_window':1}, {'model':'x','sample_window':6}]}, ['gpt-6-astra','x'])
        self.assertIsNone(fields['groupWindowHours'])


if __name__ == '__main__':
    unittest.main()
