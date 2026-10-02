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


if __name__ == '__main__':
    unittest.main()
