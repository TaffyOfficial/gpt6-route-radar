import unittest
from datetime import datetime, timezone, timedelta
from unittest.mock import patch
from intelligence import CodeGo, passed, transition, check, run_batch, completed_history, scheduled_batch

class Checks(unittest.TestCase):
    def test_hourly_batches_use_hong_kong_time(self):
        def batch(value):
            return scheduled_batch(datetime.fromisoformat(value).replace(tzinfo=timezone.utc))
        self.assertEqual(batch('2026-10-05T00:00:00'), '2026-10-05T08')
        self.assertEqual(batch('2026-10-05T00:59:59'), '2026-10-05T08')
        self.assertEqual(batch('2026-10-05T01:00:00'), '2026-10-05T09')
        self.assertEqual(batch('2026-10-05T15:59:59'), '2026-10-05T23')
        self.assertEqual(batch('2026-10-05T16:00:00'), '2026-10-06T00')

    def setUp(self):
        self.rule_patch = patch('intelligence.rules', return_value={'firstPattern': 'mock-pass', 'secondPattern': 'mock-backup'})
        self.rule_patch.start()
        self.addCleanup(self.rule_patch.stop)

    def test_completed_history_survives_errors(self):
        reference = datetime.now(timezone.utc)
        history = [{'at':(reference-timedelta(hours=i)).isoformat(), 'outcome':outcome} for i,outcome in enumerate(['normal','severe','mild','normal'])]
        self.assertEqual(completed_history({'qualityHistory':history,'history':[{'at':'x','outcome':'error'}]*6}),history)
        self.assertEqual(completed_history({'history':[{'at':'x','outcome':'error'},*history]}),history)

    def test_completed_history_uses_rolling_24_hours(self):
        reference = datetime(2026, 10, 5, 16, tzinfo=timezone.utc)
        events = [{'at':(reference-timedelta(hours=h)).isoformat(), 'outcome':'severe'} for h in (23, 24, 25, -1)]
        events += [{'at':'invalid', 'outcome':'mild'}, {'at':reference.isoformat(), 'outcome':'error'}]
        self.assertEqual(completed_history({'qualityHistory':events}, reference), events[:1])

    def test_answers(self):
        self.assertTrue(passed(1, ' MOCK-PASS '))
        self.assertFalse(passed(1, 'other'))
        self.assertTrue(passed(2, 'Yes'))
        self.assertFalse(passed(2, 'result: mock-backup'))
        self.assertFalse(passed(2, 'other'))

    def test_blacklist_recovery_and_errors(self):
        first = transition({}, 'severe', 't1')
        self.assertEqual(first['blacklist'], 'temporary')
        self.assertEqual(transition(first, 'error', 't2'), first)
        self.assertEqual(transition(first, 'severe', 't3')['blacklist'], 'permanent')
        for outcome in ['mild', 'normal']:
            recovered = transition(first, outcome, 't2')
            self.assertIsNone(recovered['blacklist'])
            self.assertEqual(recovered['severeStreak'], 0)
            self.assertNotIn('toolUnavailable', transition({'toolUnavailable': True}, outcome, 't2'))

    def test_short_circuit_and_incomplete_request(self):
        class Client:
            calls = []
            def channel_key(self, row): return 'private'
            def answer(self, token, question):
                self.calls.append(question)
                return 'mock-pass', {}, 'gpt-6-astra'
        c = Client()
        self.assertEqual(check(c, {})[0], 'error')
        self.assertEqual(c.calls, [1, 2])
        c.answer = lambda *args: ('No', {}, 'gpt-6-astra')
        self.assertEqual(check(c, {})[0], 'severe')

    def test_tool_probe_failure_is_explicit(self):
        class Client:
            def channel_key(self, row): return 'private'
            def answer(self, token, question):
                if question == 1: return 'mock-pass', {}, 'gpt-6-astra'
                raise RuntimeError('tool probe failed')
        outcome, tests, error = check(Client(), {})
        self.assertEqual(outcome, 'error')
        self.assertTrue(tests[-1]['toolUnavailable'])
        self.assertEqual(error, 'tool probe failed')

    def test_request_failure_is_not_a_tool_failure(self):
        class Client:
            def channel_key(self, row): return 'private'
            def answer(self, token, question):
                if question == 1: return 'mock-pass', {}, 'gpt-6-astra'
                raise RuntimeError('inference HTTP 429')
        outcome, tests, error = check(Client(), {})
        self.assertEqual(outcome, 'error')
        self.assertFalse(any(test.get('toolUnavailable') for test in tests))
        self.assertEqual(error, 'inference HTTP 429')

    def test_tool_probe_success_is_normal(self):
        class Client:
            def channel_key(self, row): return 'private'
            def answer(self, token, question):
                return ('mock-pass' if question == 1 else 'Yes'), {}, 'gpt-6-astra'
        with patch('intelligence.passed', side_effect=lambda question, answer: answer in ('mock-pass', 'Yes')):
            self.assertEqual(check(Client(), {})[0], 'normal')

    def test_tool_probe_uses_responses_with_a_real_tool_call(self):
        client = CodeGo()
        call = {'type': 'function_call', 'call_id': 'call-1', 'arguments': '{"command":"printf TOOL_PROBE_OK"}'}
        reply = {'status': 'completed', 'model': 'gpt-6-astra', 'output': [{'type': 'message', 'role': 'assistant', 'content': [{'type': 'output_text', 'text': 'Yes'}]}]}
        with patch.object(client, 'api', side_effect=[{'id': 'response-1', 'output': [call]}, reply]) as api, \
             patch('intelligence.subprocess.run') as run:
            run.return_value.stdout = 'TOOL_PROBE_OK'
            self.assertEqual(client.answer('private', 2)[0], 'Yes')
        self.assertEqual([c.args[0] for c in api.call_args_list], ['/v1/responses', '/v1/responses'])
        self.assertEqual(api.call_args_list[0].args[1]['tools'][0]['name'], 'exec_command')
        self.assertEqual(api.call_args_list[1].args[1]['input'][0]['output'], 'TOOL_PROBE_OK')

    def test_tool_probe_failure_is_persisted_on_record(self):
        row = {'id': 'x', 'channelId': 1, 'name': 'x', 'source': 'Codex Pro'}
        state = {'channels': {}, 'batches': {}}
        with patch('intelligence.candidates', return_value=[row]):
            run_batch({'rows': [row]}, None, 'b', state, persist=lambda s: None,
                      checker=lambda c, r: ('error', [{'toolUnavailable': True}], 'tool probe failed'))
        self.assertTrue(state['channels']['channel:1']['toolUnavailable'])

    def test_budget_blacklist_retest_and_idempotence(self):
        rows = [{'id': str(i), 'channelId': i, 'name': str(i), 'source': 'Codex Pro'} for i in range(12)]
        state = {'channels': {'channel:0': {'blacklist': 'temporary', 'severeStreak': 1}, 'channel:1': {'blacklist': 'permanent'}}, 'batches': {}}
        calls = []
        def checker(client, row):
            calls.append(row['channelId'])
            return ('severe' if row['channelId'] == 0 else 'normal'), [], None
        with patch('intelligence.candidates', return_value=rows):
            run_batch({'rows': rows}, None, 'batch1', state, persist=lambda s: None, checker=checker)
            self.assertEqual(len(calls), 11)
            self.assertNotIn(1, calls)
            self.assertEqual(state['channels']['channel:0']['blacklist'], 'permanent')
            run_batch({'rows': rows}, None, 'batch1', state, persist=lambda s: None, checker=checker)
            self.assertEqual(len(calls), 11)
        self.assertEqual(state['batches']['batch1']['normal'], 10)

class CoverageTests(unittest.TestCase):
    def test_refresh_follows_new_leaders_and_retries_failed_results(self):
        rows = [{'id':str(i),'channelId':i,'name':str(i),'source':'Codex Pro'} for i in range(12)]
        state = {'channels': {'channel:'+str(i):{'status':'normal','batch':'b'} for i in range(7)}, 'batches': {'b':{'completedAt':'old'}}}
        state['channels']['channel:11'] = {'blacklist':'temporary','batch':'old'}
        calls = []
        def checker(client, row):
            calls.append(row['channelId'])
            return ('error', [], 'inference HTTP 429') if len(calls) == 1 else ('normal', [], None)
        # A previously untested channel enters the leaders after a market refresh.
        ranked = [rows[7], *rows[:7], *rows[8:]]
        with patch('intelligence.candidates', return_value=ranked):
            run_batch({'rows':rows},None,'b',state,persist=lambda s:None,checker=checker,top7_only=True)
            self.assertEqual(calls, [7])
            self.assertFalse(state['coverage']['top7Covered'])
            run_batch({'rows':rows},None,'b',state,persist=lambda s:None,checker=checker,top7_only=True)
        self.assertEqual(calls, [7, 7])
        self.assertTrue(state['coverage']['top7Covered'])
        self.assertEqual(state['batches']['b'], {'completedAt':'old'})

    def test_eight_normal_does_not_skip_untested_leaders(self):
        rows = [{'id':str(i),'channelId':i,'name':str(i),'source':'Codex Pro'} for i in range(20)]
        state = {'channels': {'channel:'+str(i):{'status':'normal','batch':'b'} for i in range(10,18)}, 'batches': {'b':{'completedAt':'old'}}}
        calls=[]
        def checker(client,row):
            calls.append(row['channelId'])
            return 'normal',[],None
        with patch('intelligence.candidates',return_value=rows):
            run_batch({'rows':rows},None,'b',state,persist=lambda s:None,checker=checker)
        self.assertEqual(sorted(calls),list(range(7)))
        self.assertTrue(state['batches']['b']['top7Covered'])

    def test_errors_do_not_count_as_top_seven_coverage(self):
        row={'id':'x','channelId':1,'name':'x','source':'Codex Pro'}
        state={'channels':{},'batches':{}}
        with patch('intelligence.candidates',return_value=[row]):
            run_batch({'rows':[row]},None,'b',state,persist=lambda s:None,checker=lambda c,r:('error',[],'inference HTTP 429'))
        self.assertFalse(state['batches']['b']['top7Covered'])
        self.assertNotIn('completedAt',state['batches']['b'])

if __name__ == '__main__': unittest.main()
