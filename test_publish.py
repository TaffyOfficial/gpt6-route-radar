import os
from pathlib import Path
import tempfile
import unittest

from deploy.publish_pages import git, publish


class PublishTests(unittest.TestCase):
    def test_first_publish_and_update_preserve_main_and_remove_old_files(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            remote = root / 'remote.git'
            remote.mkdir()
            env = {**os.environ, 'GIT_AUTHOR_NAME': 'Test', 'GIT_AUTHOR_EMAIL': 'test@example.com',
                   'GIT_COMMITTER_NAME': 'Test', 'GIT_COMMITTER_EMAIL': 'test@example.com'}
            git(remote, 'init', '--bare', env=env)
            source = root / 'source'
            source.mkdir()
            git(source, 'init', '-b', 'main', env=env)
            (source / 'private.txt').write_text('source only')
            git(source, 'add', '.', env=env)
            git(source, 'commit', '-m', 'source', env=env)
            git(source, 'push', str(remote), 'main', env=env)
            main = git(remote, 'rev-parse', 'main', env=env)
            site = root / 'site'
            site.mkdir()
            (site / 'index.html').write_text('first')
            (site / 'obsolete.js').write_text('old asset')
            first = publish(site, str(remote), root / 'publish1', env)
            (site / 'index.html').write_text('second')
            (site / 'obsolete.js').unlink()
            second = publish(site, str(remote), root / 'publish2', env)
            self.assertNotEqual(first, second)
            self.assertEqual(git(remote, 'rev-parse', 'gh-pages^', env=env), first)
            self.assertEqual(git(remote, 'rev-parse', 'main', env=env), main)
            self.assertEqual(git(remote, 'ls-tree', '--name-only', 'gh-pages', env=env), 'index.html')
            self.assertEqual(git(remote, 'show', 'gh-pages:index.html', env=env), 'second')
            self.assertIsNone(publish(site, str(remote), root / 'publish3', env))


if __name__ == '__main__':
    unittest.main()
