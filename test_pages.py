import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
import build_pages


class PagesTests(unittest.TestCase):
    def test_only_public_allowlisted_assets_are_published(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary) / 'source'
            root.mkdir()
            for name in build_pages.PUBLIC_FILES:
                (root / name).write_text('{}', encoding='utf-8')
            (root / 'snapshot.json').write_text(json.dumps({'schemaVersion': 2, 'complete': True, 'count': 1, 'capturedAt': '2026-09-17T00:00:00Z'}))
            (root / 'server.py').write_text('private server source')
            (root / '.env').write_text('example secret')
            destination = Path(temporary) / 'public'
            with patch.object(build_pages, 'ROOT', root):
                build_pages.build(destination, refresh=False)
            self.assertEqual({p.name for p in destination.iterdir()}, set(build_pages.PUBLIC_FILES) | {'runtime.js', '.nojekyll'})
            self.assertIn('"mode": "static"', (destination / 'runtime.js').read_text())
            with patch.object(build_pages, 'ROOT', root):
                build_pages.build(destination, refresh=False, snapshot_url='https://data.example.com/snapshot.json', hosting='Cloudflare Pages')
            runtime = (destination / 'runtime.js').read_text()
            self.assertIn('https://data.example.com/snapshot.json', runtime)
            self.assertIn('Cloudflare Pages', runtime)
            self.assertNotIn('private server source', runtime)
            (root / 'deploy').mkdir()
            (root / 'deploy/pages-worker.mjs').write_text('export default {}')
            with patch.object(build_pages, 'ROOT', root):
                build_pages.build(destination, refresh=False, pages=True)
            self.assertEqual(json.loads((destination / '_routes.json').read_text())['include'], ['/api/snapshot'])
            self.assertIn('"snapshotUrl": "/api/snapshot"', (destination / 'runtime.js').read_text())
            self.assertNotIn('https://data.example.com', (destination / 'runtime.js').read_text())
            self.assertFalse((destination / '.env').exists())
            with patch.object(build_pages, 'ROOT', root):
                build_pages.build(destination, refresh=False)
            self.assertFalse((destination / '_worker.js').exists())
            self.assertFalse((destination / '_routes.json').exists())

    def test_reject_snapshot_urls_with_credentials_or_insecure_transport(self):
        for url in ('http://example.com/snapshot.json', 'https://secret@example.com/snapshot.json', 'https://example.com/snapshot.json?token=secret'):
            with self.subTest(url=url), self.assertRaises(ValueError):
                build_pages.build('unused', refresh=False, snapshot_url=url)

    def test_build_fails_closed_without_valid_snapshot(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            (root / 'snapshot.json').write_text('{"complete":false,"schemaVersion":2}')
            with patch.object(build_pages, 'ROOT', root):
                with self.assertRaisesRegex(ValueError, 'incomplete'):
                    build_pages.build(root / 'public', refresh=False)


if __name__ == '__main__':
    unittest.main()
