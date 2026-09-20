"""Create a static Pages artifact using an explicit public-file allowlist."""
import argparse
import json
import shutil
import time
from pathlib import Path
from urllib.parse import urlsplit
from collect import collect_all as collect, save

ROOT = Path(__file__).resolve().parent
PUBLIC_FILES = ('index.html', 'style.css', 'app.js', 'rank.js', 'blacklist.js', 'prices.js', 'snapshot.json', 'snapshot.js')


def build(destination, refresh=True, snapshot_url=None, hosting='GitHub Pages', refresh_minutes=None, pages=False):
    if snapshot_url:
        parsed = urlsplit(snapshot_url)
        if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password or parsed.query or parsed.fragment:
            raise ValueError('Snapshot URL must be an HTTPS URL without credentials, query or fragment')
    if refresh:
        for attempt in range(3):
            try:
                save(collect())
                break
            except Exception:
                if attempt == 2:
                    raise
                time.sleep(5 * (attempt + 1))
    snapshot = json.loads((ROOT / 'snapshot.json').read_text('utf-8'))
    if snapshot.get('complete') is not True or snapshot.get('schemaVersion') != 2:
        raise ValueError('Refusing to publish an incomplete snapshot')
    destination = Path(destination).resolve()
    if destination == ROOT:
        raise ValueError('Build destination must differ from the source folder')
    destination.mkdir(parents=True, exist_ok=True)
    unexpected = {p.name for p in destination.iterdir()} - set(PUBLIC_FILES) - {'runtime.js', '.nojekyll', '_worker.js', '_routes.json'}
    if unexpected:
        raise ValueError('Destination contains unexpected files; choose an empty build directory')
    for name in PUBLIC_FILES:
        shutil.copyfile(ROOT / name, destination / name)
    settings = {'mode': 'static', 'publication': 'manual', 'repository': 'https://github.com/TaffyOfficial/gpt6-route-radar'}
    settings['hosting'] = hosting
    if snapshot_url:
        settings['snapshotUrl'] = snapshot_url
        if refresh_minutes:
            settings['refreshMinutes'] = refresh_minutes
    if pages:
        settings['snapshotUrl'] = '/api/snapshot'
        settings['refreshMinutes'] = refresh_minutes or 10
        settings['hosting'] = 'Cloudflare Pages'
        shutil.copyfile(ROOT / 'deploy' / 'pages-worker.mjs', destination / '_worker.js')
        (destination / '_routes.json').write_text(json.dumps({'version': 1, 'include': ['/api/snapshot'], 'exclude': []}), encoding='utf-8')
    else:
        for name in ('_worker.js', '_routes.json'):
            (destination / name).unlink(missing_ok=True)
    (destination / 'runtime.js').write_text('window.ROUTER_RUNTIME = ' + json.dumps(settings) + ';\n', encoding='utf-8')
    (destination / '.nojekyll').write_text('', encoding='utf-8')
    print(f"Built {snapshot['count']} channels at {snapshot['capturedAt']}")
    return snapshot


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', default=str(ROOT / 'dist'))
    parser.add_argument('--no-refresh', action='store_true', help='Use an existing snapshot for local build tests')
    parser.add_argument('--snapshot-url', help='Public HTTPS snapshot served independently from the site')
    parser.add_argument('--hosting', default='GitHub Pages')
    parser.add_argument('--refresh-minutes', type=int, help='Actual independent collector timer interval')
    parser.add_argument('--pages', action='store_true', help='Read private R2 through a same-origin Pages Function')
    args = parser.parse_args()
    build(args.output, refresh=not args.no_refresh, snapshot_url=args.snapshot_url, hosting=args.hosting, refresh_minutes=args.refresh_minutes, pages=args.pages)
