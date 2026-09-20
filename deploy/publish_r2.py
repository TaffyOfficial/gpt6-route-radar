"""Collect all models and upload one gzip JSON object, without deploying the site."""
import gzip
import json
import os
from pathlib import Path
import sys
import urllib.request
import urllib.error

# collect.py is installed alongside this entry point, or lives at the repository root.
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from collect import collect_all


def main():
    endpoint = os.environ['RADAR_UPLOAD_URL']
    if not endpoint.startswith('https://'):
        raise ValueError('Upload endpoint must use HTTPS')
    token = os.environ['RADAR_UPLOAD_TOKEN']
    print('Collecting all model snapshots...', flush=True)
    snapshot = collect_all()
    payload = gzip.compress(json.dumps(snapshot, ensure_ascii=False, allow_nan=False).encode('utf-8'), mtime=0)
    request = urllib.request.Request(endpoint, data=payload, method='PUT', headers={
        'Authorization': 'Bearer ' + token, 'Content-Type': 'application/gzip',
        'User-Agent': 'RouteRadarPublisher/1.0',
    })
    # Avoid forwarding the upload credential to another URL via redirects.
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, req, fp, code, msg, headers, newurl):
            return None
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}), NoRedirect())
    print(f'Collected snapshot; uploading {len(payload)} compressed bytes...', flush=True)
    try:
        with opener.open(request, timeout=60) as response:
            result = json.load(response)
    except urllib.error.HTTPError as error:
        detail = error.read(1000).decode('utf-8', errors='replace').replace(token, '[redacted]')
        raise RuntimeError(f'Upload HTTP {error.code}: {detail}') from None
    if result.get('ok') is not True or result.get('capturedAt') != snapshot['capturedAt']:
        raise ValueError('Upload was not confirmed')
    print(f"Published R2 snapshot: {snapshot['capturedAt']}; {snapshot['count']} default-model channels; {len(payload)} compressed bytes", flush=True)


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('R2 refresh failed:', type(error).__name__, str(error), file=sys.stderr)
        sys.exit(1)
