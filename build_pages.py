"""Create a static Pages artifact using an explicit public-file allowlist."""
import argparse
import json
import shutil
import time
from pathlib import Path
from collect import collect_all as collect, save

ROOT = Path(__file__).resolve().parent
PUBLIC_FILES = ('index.html', 'style.css', 'app.js', 'rank.js', 'blacklist.js', 'prices.js', 'snapshot.json', 'snapshot.js')


def build(destination, refresh=True):
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
    unexpected = {p.name for p in destination.iterdir()} - set(PUBLIC_FILES) - {'runtime.js', '.nojekyll'}
    if unexpected:
        raise ValueError('Destination contains unexpected files; choose an empty build directory')
    for name in PUBLIC_FILES:
        shutil.copyfile(ROOT / name, destination / name)
    settings = {'mode': 'static', 'publication': 'manual', 'repository': 'https://github.com/TaffyOfficial/gpt6-route-radar'}
    (destination / 'runtime.js').write_text('window.ROUTER_RUNTIME = ' + json.dumps(settings) + ';\n', encoding='utf-8')
    (destination / '.nojekyll').write_text('', encoding='utf-8')
    print(f"Built {snapshot['count']} channels at {snapshot['capturedAt']}")
    return snapshot


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', default=str(ROOT / 'dist'))
    parser.add_argument('--no-refresh', action='store_true', help='Use an existing snapshot for local build tests')
    args = parser.parse_args()
    build(args.output, refresh=not args.no_refresh)
