from datetime import datetime, timezone
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

from deploy.trigger_refresh import active_run, needs_refresh, trigger, git


class TriggerTests(unittest.TestCase):
    now = datetime(2026, 9, 17, 10, tzinfo=timezone.utc).timestamp()

    def stamp(self, seconds):
        return datetime.fromtimestamp(self.now - seconds, timezone.utc).isoformat()

    def test_freshness_checks_both_market_and_model_status(self):
        snapshot = {'complete': True, 'capturedAt': self.stamp(470), 'liveCapturedAt': self.stamp(470)}
        self.assertFalse(needs_refresh(snapshot, self.now))
        for changes in ({'capturedAt': self.stamp(480)}, {'liveCapturedAt': self.stamp(480)},
                        {'capturedAt': self.stamp(-120)}, {'capturedAt': 'invalid'}, {'complete': False}):
            self.assertTrue(needs_refresh({**snapshot, **changes}, self.now))

    def test_active_work_suppresses_duplicates_but_stuck_old_runs_do_not(self):
        run = {'id': 123, 'created_at': self.stamp(60), 'status': 'queued', 'head_branch': 'server-refresh'}
        self.assertEqual(active_run([run], self.now), 123)
        for changes in ({'created_at': self.stamp(901)}, {'status': 'completed'}, {'head_branch': 'unrelated'}):
            self.assertIsNone(active_run([{**run, **changes}], self.now))

    def test_signals_never_change_main_or_accumulate_trigger_history(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            source, remote, state = root / 'source', root / 'remote.git', root / 'state'
            source.mkdir()
            remote.mkdir()
            env = {**os.environ, 'GIT_AUTHOR_NAME': 'Test', 'GIT_COMMITTER_NAME': 'Test',
                   'GIT_AUTHOR_EMAIL': 'test@example.invalid', 'GIT_COMMITTER_EMAIL': 'test@example.invalid',
                   'GIT_CONFIG_NOSYSTEM': '1', 'GIT_CONFIG_GLOBAL': os.devnull}
            git(source, 'init', '-b', 'main', env=env)
            (source / 'payload.txt').write_text('current main')
            git(source, 'add', '.', env=env)
            git(source, '-c', 'commit.gpgsign=false', 'commit', '-m', 'main', env=env)
            git(remote, 'init', '--bare', env=env)
            git(source, 'push', str(remote), 'main', env=env)
            main = git(remote, 'rev-parse', 'refs/heads/main', env=env)
            first = trigger(state, str(remote), env, self.now)
            second = trigger(state, str(remote), env, self.now + 600)
            self.assertNotEqual(first, second)
            self.assertEqual(git(remote, 'rev-parse', 'refs/heads/main', env=env), main)
            self.assertEqual(git(remote, 'rev-parse', 'server-refresh^', env=env), main)
            self.assertEqual(git(remote, 'rev-parse', 'server-refresh^{tree}', env=env),
                             git(remote, 'rev-parse', 'main^{tree}', env=env))
            self.assertEqual(git(remote, 'rev-list', '--count', 'main..server-refresh', env=env), '1')


if __name__ == '__main__':
    unittest.main()
