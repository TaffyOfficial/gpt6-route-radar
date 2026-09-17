"""Read-only public CodeGo market collector. Python 3.10+, standard library only."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import json
import math
import os
import urllib.parse
import urllib.request

BASE = 'https://shu26.cfd'
MODEL = 'gpt-6-astra'
ROOT = Path(__file__).resolve().parent


def status_fields(status, models):
    by_model = {m['model']: m for m in status.get('models', [])}
    m = by_model.get(MODEL, {})
    windows = {item.get('sample_window') for item in by_model.values() if item.get('sample_window') is not None}
    return {
        'modelStatus': m.get('status', 'unknown'),
        'modelRequests': m.get('request_count', 0), 'modelWindowHours': m.get('sample_window'),
        'success': m.get('success_rate'), 'cache': m.get('cache_hit_rate'),
        'latestGroupSuccess': status.get('success_rate'), 'latestGroupRequests': status.get('request_count', 0),
        'latestGroupStatus': status.get('status', 'unknown'), 'groupWindowHours': next(iter(windows)) if len(windows) == 1 else None,
        'series': m.get('series', []), 'seriesWindowHours': m.get('series_window'),
        'modelStats': [{
            'model': name, 'status': by_model.get(name, {}).get('status', 'unknown'),
            'success': by_model.get(name, {}).get('success_rate'), 'requests': by_model.get(name, {}).get('request_count', 0),
            'windowHours': by_model.get(name, {}).get('sample_window'), 'cache': by_model.get(name, {}).get('cache_hit_rate'),
        } for name in models],
    }


def get_json(path):
    # Direct connections by default; opt into the machine proxy explicitly.
    handler = urllib.request.ProxyHandler() if os.environ.get('ROUTER_USE_PROXY') == '1' else urllib.request.ProxyHandler({})
    opener = urllib.request.build_opener(handler)
    request = urllib.request.Request(BASE + path, headers={'User-Agent': 'Mozilla/5.0', 'Referer': BASE + '/market', 'Accept': 'application/json'})
    with opener.open(request, timeout=25) as response:
        result = json.load(response)
    if not result.get('success', False):
        raise ValueError(result.get('message', 'Public API did not report success'))
    return result


def group_path(page):
    return '/api/marketplace/groups?' + urllib.parse.urlencode({'source': 'Codex Pro', 'model': MODEL, 'window_hours': 24, 'page': page, 'page_size': 20})


def normalize(groups, statuses, pricing, site, captured_at=None):
    status_map = {row['group_id']: row for row in statuses['data']}
    quota = site['data'].get('quota_per_unit')
    if not isinstance(quota, (int, float)) or quota <= 0:
        raise ValueError('Missing quota_per_unit; refusing to guess billing units')
    price = next((m for m in pricing.get('priced_model_details', []) if m['model_name'] == MODEL), None)
    result = []
    for g in groups:
        if g.get('source_label') != 'Codex Pro' or MODEL not in g.get('models', []) or g.get('multiplier', -1) < .22:
            continue
        status = status_map.get(g['id'], {})
        m = next((m for m in status.get('models', []) if m.get('model') == MODEL), {})
        tested = next((m for m in g.get('model_verification_results', []) if m.get('model') == MODEL), {})
        raw_cost = g.get('avg_consumer_amount_by_model', {}).get(MODEL)
        result.append({
            'id': g['id'], 'channelId': g.get('channel_id'), 'name': g['system_display_name'],
            'source': g['source_label'], 'model': MODEL, 'models': list(dict.fromkeys(g.get('models', []))), 'multiplier': g['multiplier'],
            'lifecycle': g.get('lifecycle_status'), 'verified': g.get('verification_status') == 'passed' and tested.get('status') == 'passed' and tested.get('listed') is True,
            'observing': g.get('observing', True), 'modelStatus': m.get('status', 'unknown'),
            'modelRequests': m.get('request_count', 0), 'modelWindowHours': m.get('sample_window'),
            'success': m.get('success_rate'), 'cache': m.get('cache_hit_rate'),
            'groupRequests': g.get('request_count', 0), 'groupSuccess': g.get('success_rate'),
            'ttftAvg': g.get('avg_ttft_ms'), 'ttftP50': g.get('attempt_ttft_p50_ms'), 'ttftP95': g.get('attempt_ttft_p95_ms'),
            'ttftSamples': g.get('latency_sample_count', 0), 'ttftScope': 'group_all_models_24h',
            'historicalCost': raw_cost / quota if isinstance(raw_cost, (int, float)) and raw_cost > 0 else None,
            'maxConcurrency': g.get('max_concurrency'), 'currentConcurrency': g.get('current_concurrency'),
            'series': m.get('series', []), 'seriesWindowHours': m.get('series_window'),
            **status_fields(status, list(dict.fromkeys(g.get('models', [])))),
        })
    timestamp = captured_at or datetime.now(timezone.utc).isoformat()
    return {
        'schemaVersion': 2, 'capturedAt': timestamp, 'liveCapturedAt': timestamp,
        'model': MODEL, 'source': 'Codex Pro', 'minMultiplier': .22,
        'marketTotal': len(groups), 'count': len(result), 'complete': True,
        'pricing': price, 'quotaPerUnit': quota, 'currency': 'USD platform quota',
        'sources': [BASE + group_path(1), BASE + '/api/group-status', BASE + '/api/pricing', BASE + '/api/status'],
        'rows': result,
    }


def collect():
    # All pages must succeed before replacing the last good snapshot.
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {name: pool.submit(get_json, path) for name, path in {
            'first': group_path(1), 'statuses': '/api/group-status', 'pricing': '/api/pricing', 'site': '/api/status'
        }.items()}
        responses = {name: future.result() for name, future in futures.items()}
        first = responses['first']['data']
        total, size = first['total'], first['page_size']
        if not isinstance(size, int) or size <= 0 or not isinstance(total, int) or total < 0:
            raise ValueError('Unexpected pagination response')
        groups = list(first['items'])
        # No channel-count ceiling; at most four page requests are in flight.
        pages = math.ceil(total / size)
        for start in range(2, pages + 1, 4):
            pending = [pool.submit(get_json, group_path(page)) for page in range(start, min(start + 4, pages + 1))]
            for future in pending:
                page = future.result()['data']
                if page['total'] != total:
                    raise ValueError('Market changed during pagination; refresh again')
                groups.extend(page['items'])
    if len(groups) != total or len({g['id'] for g in groups}) != total:
        raise ValueError('Incomplete or duplicate market pages; previous snapshot retained')
    return normalize(groups, responses['statuses'], responses['pricing'], responses['site'])


def save(snapshot):
    text = json.dumps(snapshot, ensure_ascii=False, indent=2, allow_nan=False)
    temporary = ROOT / 'snapshot.tmp'
    temporary.write_text(text, encoding='utf-8')
    temporary.replace(ROOT / 'snapshot.json')
    # Also works when index.html is opened without the local server.
    (ROOT / 'snapshot.js').write_text('window.ROUTER_SNAPSHOT = ' + text.replace('<', '\\u003c') + ';\n', encoding='utf-8')


if __name__ == '__main__':
    snapshot = collect()
    save(snapshot)
    print(f"Collected {snapshot['count']} matching channels at {snapshot['capturedAt']}")
