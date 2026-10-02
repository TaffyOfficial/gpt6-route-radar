import unittest
from unittest.mock import patch
from intelligence import passed, transition, check, run_batch

class Checks(unittest.TestCase):
    def setUp(self):
        self.rule_patch = patch('intelligence.rules', return_value={'firstPattern': 'mock-pass', 'secondPattern': 'mock-backup'})
        self.rule_patch.start()
        self.addCleanup(self.rule_patch.stop)

    def test_answers(self):
        self.assertTrue(passed(1, ' MOCK-PASS '))
        self.assertFalse(passed(1, 'other'))
        self.assertTrue(passed(2, 'result: mock-backup'))
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

    def test_short_circuit_and_incomplete_request(self):
        class Client:
            calls = []
            def channel_key(self, row): return 'private'
            def answer(self, token, question):
                self.calls.append(question)
                return 'mock-pass', {}, 'gpt-6-astra'
        c = Client()
        self.assertEqual(check(c, {})[0], 'normal')
        self.assertEqual(c.calls, [1])
        c.answer = lambda *args: ('No', {}, 'gpt-6-astra')
        self.assertEqual(check(c, {})[0], 'severe')

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
