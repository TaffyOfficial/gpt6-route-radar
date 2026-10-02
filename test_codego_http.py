import io
import json
import unittest
import urllib.error
from unittest.mock import Mock, patch

from intelligence import CodeGo


def http_error(status, retry_after=''):
    return urllib.error.HTTPError('https://example.invalid/api/token/', status, 'error',
                                  {'Retry-After': retry_after}, io.BytesIO(b'private upstream details'))


class CodeGoHttpTests(unittest.TestCase):
    def client(self, side_effect):
        client = CodeGo.__new__(CodeGo)
        client.base = 'https://example.invalid'
        client.uid = 1
        client.opener = Mock()
        client.opener.open.side_effect = side_effect
        return client

    @patch('intelligence.time.sleep')
    def test_management_429_retries_and_recovers(self, sleep):
        client = self.client([http_error(429, '3'), io.BytesIO(json.dumps({'success': True}).encode())])
        self.assertEqual(client.api('/api/token/'), {'success': True})
        sleep.assert_called_once_with(3)
        self.assertEqual(client.opener.open.call_count, 2)

    @patch('intelligence.time.sleep')
    def test_exhausted_429_preserves_stage_without_body(self, sleep):
        client = self.client([http_error(429) for _ in range(3)])
        with self.assertRaisesRegex(RuntimeError, r'^management:/api/token/ HTTP 429$'):
            client.api('/api/token/?p=1')
        self.assertEqual([c.args[0] for c in sleep.call_args_list], [2, 4])

    @patch('intelligence.time.sleep')
    def test_inference_error_is_distinct_and_not_retried(self, sleep):
        client = self.client([http_error(403)])
        with self.assertRaisesRegex(RuntimeError, '^inference HTTP 403$'):
            client.api('/v1/chat/completions', {}, bearer='private-token')
        sleep.assert_not_called()

    @patch('intelligence.time.sleep')
    def test_long_backoff_is_not_retried_early(self, sleep):
        client = self.client([http_error(429, '120')])
        with self.assertRaisesRegex(RuntimeError, 'retry deferred'):
            client.api('/api/token/')
        sleep.assert_not_called()
        self.assertEqual(client.opener.open.call_count, 1)


class StreamTests(CodeGoHttpTests):
    def test_completed_stream_is_parsed(self):
        event = {'type':'response.completed','response':{'status':'completed','error':None,'output':[]}}
        response = io.BytesIO(('data: '+json.dumps(event)+chr(10)+chr(10)).encode())
        response.headers = {'Content-Type':'text/event-stream'}
        client = self.client([response])
        self.assertEqual(client.api('/v1/responses',{},bearer='secret')['status'],'completed')

    def test_truncated_stream_is_not_graded(self):
        response = io.BytesIO(('data: '+json.dumps({'type':'response.created'})+chr(10)+chr(10)).encode())
        response.headers = {'Content-Type':'text/event-stream'}
        client = self.client([response])
        with self.assertRaisesRegex(RuntimeError, 'Incomplete'): client.api('/v1/responses',{},bearer='secret')

class ProtocolTests(unittest.TestCase):
    @patch('intelligence.rules', return_value={'questions': ['private mock', 'other']})
    def test_protocol_fallback(self, rules):
        from intelligence import ProtocolUnavailable
        client = CodeGo.__new__(CodeGo)
        client.api = Mock(side_effect=[ProtocolUnavailable(), {'status':'completed','output':[{'type':'message','role':'assistant','content':[{'type':'output_text','text':'mock answer'}]}]}])
        self.assertEqual(client.answer('secret',1)[0], 'mock answer')
        self.assertEqual([c.args[0] for c in client.api.call_args_list], ['/v1/chat/completions','/v1/responses'])
        client.api = Mock(side_effect=RuntimeError('inference HTTP 400'))
        with self.assertRaises(RuntimeError): client.answer('secret',1)
        self.assertEqual(client.api.call_count,1)

if __name__ == '__main__':
    unittest.main()
