"""Local read-only dashboard server. No account credentials or paid API requests."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
import json
import threading
import time
from datetime import datetime, timezone
from urllib.parse import urlparse
from collect import collect_all as collect, save, get_json

ROOT = Path(__file__).resolve().parent
LOCK = threading.Lock()
LAST_REFRESH = 0.0
LIVE_LOCK = threading.Lock()
LIVE_CACHE = None
LIVE_FETCHED = 0.0


def live_status():
    global LIVE_CACHE, LIVE_FETCHED
    with LIVE_LOCK:
        if LIVE_CACHE is not None and time.monotonic() - LIVE_FETCHED < 60:
            return LIVE_CACHE
        result = get_json('/api/group-status')
        if not isinstance(result.get('data'), list):
            raise ValueError('Unexpected group-status response')
        LIVE_CACHE = {'capturedAt': datetime.now(timezone.utc).isoformat(), 'source': 'https://shu26.cfd/api/group-status', 'data': result['data']}
        LIVE_FETCHED = time.monotonic()
        return LIVE_CACHE


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_json(self, data, status=200):
        content = json.dumps(data, ensure_ascii=False, allow_nan=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(content)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(content)

    def valid_host(self):
        host = self.headers.get('Host', '')
        return host in {f'127.0.0.1:{self.server.server_port}', f'localhost:{self.server.server_port}'}

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_GET(self):
        if not self.valid_host():
            return self.send_json({'error': 'Invalid host'}, 403)
        path = urlparse(self.path).path
        if path == '/api/snapshot':
            return self.send_json(json.loads((ROOT / 'snapshot.json').read_text('utf-8')))
        if path == '/api/health':
            return self.send_json({'ok': True, 'readOnly': True, 'version': 2})
        if path == '/api/live-status':
            try:
                return self.send_json(live_status())
            except Exception as error:
                return self.send_json({'error': '官方状态读取失败：' + str(error)}, 502)
        if path not in {'/', '/index.html', '/app.js', '/rank.js', '/blacklist.js', '/style.css', '/runtime.js', '/snapshot.js', '/snapshot.json', '/favicon.ico'}:
            return self.send_json({'error': 'Not found'}, 404)
        return super().do_GET()

    def do_POST(self):
        global LAST_REFRESH
        origin = self.headers.get('Origin')
        allowed_origins = {f'http://127.0.0.1:{self.server.server_port}', f'http://localhost:{self.server.server_port}'}
        if not self.valid_host() or (origin is not None and origin not in allowed_origins):
            return self.send_json({'error': 'Invalid origin'}, 403)
        if self.path != '/api/refresh':
            return self.send_json({'error': 'Not found'}, 404)
        if not LOCK.acquire(blocking=False):
            return self.send_json({'error': '正在刷新，请稍后再试'}, 409)
        try:
            if time.monotonic() - LAST_REFRESH < 60:
                return self.send_json({'error': '距上次刷新不足 60 秒'}, 429)
            LAST_REFRESH = time.monotonic()
            snapshot = collect()
            save(snapshot)
            return self.send_json(snapshot)
        except Exception as error:
            return self.send_json({'error': '刷新失败，保留旧快照：' + str(error)}, 502)
        finally:
            LOCK.release()

    def log_message(self, fmt, *args):
        pass


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8765)
    args = parser.parse_args()
    print(f'Dashboard: http://127.0.0.1:{args.port}', flush=True)
    ThreadingHTTPServer(('127.0.0.1', args.port), Handler).serve_forever()
