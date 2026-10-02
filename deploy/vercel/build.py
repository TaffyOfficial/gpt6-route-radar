"""Build the allowlisted frontend for the additional Vercel address."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))
from build_pages import build

destination = Path(__file__).resolve().parent / 'public'
build(destination, refresh=False, hosting='Vercel')
runtime = {
    'mode': 'static', 'publication': 'manual',
    'repository': 'https://github.com/TaffyOfficial/gpt6-route-radar',
    'hosting': 'Vercel', 'snapshotUrl': '/api/snapshot', 'refreshMinutes': 10,
}
(destination / 'runtime.js').write_text(
    'window.ROUTER_RUNTIME = ' + json.dumps(runtime) + ';\n', encoding='utf-8')
