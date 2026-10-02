"""Scheduled, channel-bound CodeGo checks. Credentials never enter public snapshots."""
import json
import os
import re
import subprocess
import time
import urllib.request
import urllib.error
import http.cookiejar
from datetime import datetime, timezone, timedelta
from pathlib import Path

MODEL = 'gpt-6-astra'
SOURCE = 'Codex Pro'
ROOT = Path(__file__).resolve().parent
STATE = Path(os.environ.get('RADAR_INTELLIGENCE_STATE', '/var/lib/gpt6-route-radar/intelligence.json'))
Q1 = "don't search the internet, do you know Thibault Sottiaux on X. answer yes or no"
Q2 = """在一个黑色的袋子里放有三种口味的糖果，每种糖果有两种不同的形状（圆形和五角星形，不同的形状靠手感可以分辨）。现已知不同口味的糖和不同形状的数量统计如下表。参赛者需要在活动前决定摸出的糖果数目，那么，最少取出多少个糖果才能保证手中同时拥有不同形状的苹果味和桃子味的糖？（同时手中有圆形苹果味匹配五角星桃子味糖果，或者有圆形桃子味匹配五角星苹果味糖果都满足要求）
          苹果味 桃子味 西瓜味
圆形        7      9      8
五角星形    7      6      4"""

def now():
    return datetime.now(timezone.utc).isoformat()

def key(row):
    return 'channel:' + str(row['channelId']) if row.get('channelId') is not None else 'group:' + row['id']

def load_state():
    if not STATE.exists():
        return {'channels': {}, 'batches': {}}
    return json.loads(STATE.read_text('utf-8'))

def save_state(state):
    STATE.parent.mkdir(parents=True, exist_ok=True)
    tmp = STATE.with_suffix('.tmp')
    tmp.write_text(json.dumps(state, ensure_ascii=False), encoding='utf-8')
    tmp.replace(STATE)

def attach(snapshot):
    state = load_state()
    for data in [snapshot, *snapshot.get('modelSnapshots', {}).values()]:
        for row in [*data.get('rows', []), *data.get('lookupRows', [])]:
            record = state['channels'].get(key(row))
            if record:
                row['intelligence'] = {k: record[k] for k in ('status', 'blacklist', 'checkedAt', 'model', 'history', 'lastError') if k in record}
        data['intelligenceSchedule'] = {'timezone': 'Asia/Hong_Kong', 'hours': [8, 14], 'normalLimit': 8}
    return snapshot

def passed(question, answer):
    if question == 1:
        return bool(re.fullmatch(r'yes[.!。！]?', answer.strip(), re.IGNORECASE))
    return bool(re.search(r'(?<![\d.])21(?!\d|\.\d)', answer))

def transition(previous, outcome, timestamp):
    result = dict(previous)
    if outcome == 'error':
        return result  # Neither forgive a previous failure nor blacklist an untested channel.
    streak = previous.get('severeStreak', 0) + 1 if outcome == 'severe' else 0
    result.update(status=outcome, severeStreak=streak, checkedAt=timestamp, model=MODEL,
                  blacklist=('permanent' if streak >= 2 else 'temporary') if outcome == 'severe' else None)
    result.pop('lastError', None)
    return result

class CodeGo:
    def __init__(self):
        self.base = 'https://shu26.cfd'
        self.uid = None
        self.jar = http.cookiejar.CookieJar()
        class NoRedirect(urllib.request.HTTPRedirectHandler):
            def redirect_request(self, req, fp, code, msg, headers, newurl):
                return None
        self.opener = urllib.request.build_opener(urllib.request.ProxyHandler({}), urllib.request.HTTPCookieProcessor(self.jar), NoRedirect())
        self.tokens = None

    def api(self, path, data=None, bearer=None):
        headers = {'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json'}
        if bearer:
            headers['Authorization'] = 'Bearer ' + bearer
        elif self.uid:
            headers['New-Api-User'] = str(self.uid)
        req = urllib.request.Request(self.base + path, data=None if data is None else json.dumps(data).encode(), headers=headers)
        try:
            with self.opener.open(req, timeout=180) as response:
                result = json.load(response)
        except urllib.error.HTTPError as exc:
            raise RuntimeError('CodeGo HTTP ' + str(exc.code)) from None
        if result.get('success') is False or 'error' in result:
            raise RuntimeError('CodeGo rejected request')
        return result

    def login(self):
        result = self.api('/api/user/login', {'username': os.environ['CODEGO_USERNAME'], 'password': os.environ['CODEGO_PASSWORD']})
        self.uid = result['data']['id']
        self.refresh_tokens()

    def refresh_tokens(self):
        tokens, page = [], 1
        while True:
            data = self.api(f'/api/token/?p={page}&size=100')['data']
            items = data['items']
            tokens.extend(items)
            if len(tokens) >= data['total'] or not items:
                break
            page += 1
        self.tokens = tokens

    def channel_key(self, row):
        group = 'market:' + row['id'].removeprefix('market:')
        usable = [t for t in self.tokens if t.get('group') == group and t.get('status') == 1
                  and (t.get('expired_time', -1) == -1 or t['expired_time'] > time.time())
                  and (t.get('unlimited_quota') or t.get('remain_quota', 0) > 0)
                  and not t.get('allow_ips')
                  and (not t.get('model_limits_enabled') or MODEL in t.get('model_limits', '').split(','))]
        if not usable:
            self.api('/api/token/', {'name': 'route-radar-test-' + str(row.get('channelId', row['id'])),
                    'group': group, 'expired_time': -1, 'remain_quota': 500000,
                    'unlimited_quota': False, 'model_limits_enabled': True, 'model_limits': MODEL})
            self.refresh_tokens()
            usable = [t for t in self.tokens if t.get('group') == group and t.get('status') == 1 and t.get('name') == 'route-radar-test-' + str(row.get('channelId', row['id']))]
        if not usable:
            raise RuntimeError('No usable channel-bound key')
        item = usable[0]
        data = self.api(f"/api/token/{item['id']}/key", {})['data']
        token = data.get('key') if isinstance(data, dict) else data
        if not isinstance(token, str) or not token:
            raise RuntimeError('Key response invalid')
        return token if token.startswith('sk-') else 'sk-' + token

    def answer(self, token, question):
        result = self.api('/v1/chat/completions', {'model': MODEL, 'messages': [{'role': 'user', 'content': Q1 if question == 1 else Q2}], 'stream': False, 'max_completion_tokens': 4096}, bearer=token)
        choice = result.get('choices', [{}])[0]
        answer = choice.get('message', {}).get('content')
        if not isinstance(answer, str) or not answer.strip() or choice.get('finish_reason') not in ('stop', 'end_turn'):
            raise RuntimeError('Incomplete or empty model answer')
        return answer, result.get('usage', {}), result.get('model')

def check(client, row):
    tests = []
    try:
        token = client.channel_key(row)
        for question in (1, 2):
            started = time.monotonic()
            answer, usage, returned_model = client.answer(token, question)
            ok = passed(question, answer)
            tests.append({'question': question, 'promptVersion': 1, 'answer': answer, 'passed': ok, 'durationMs': round((time.monotonic()-started)*1000), 'usage': usage, 'returnedModel': returned_model})
            if ok:
                return ('normal' if question == 1 else 'mild'), tests, None
        return 'severe', tests, None
    except Exception as exc:
        # Only controlled errors are exposed, never credential-bearing request objects.
        return 'error', tests, str(exc) if isinstance(exc, RuntimeError) else type(exc).__name__

def candidates(snapshot):
    script = "const fs=require('fs');const R=require('./rank.js');const s=JSON.parse(fs.readFileSync(0,'utf8'));for(const r of s.rows)delete r.intelligence;process.stdout.write(JSON.stringify(R.rank(s,{source:'Codex Pro',model:'gpt-6-astra',freshnessProfile:'scheduled'}).eligible));"
    run = subprocess.run(['node', '-e', script], cwd=ROOT, input=json.dumps(snapshot), text=True, encoding='utf-8', capture_output=True, check=True)
    return json.loads(run.stdout)

def run_batch(snapshot, client, batch, state, persist=save_state, checker=check):
    if state['batches'].get(batch, {}).get('completedAt'):
        return state
    rows = {key(r): r for r in snapshot['rows'] if r['source'] == SOURCE}
    due = [rows[k] for k, v in state['channels'].items() if v.get('blacklist') == 'temporary' and k in rows]
    ranked = candidates(snapshot)
    queue = {key(r): r for r in [*due, *ranked]}
    normal = sum(v.get('batch') == batch and v.get('status') == 'normal' and not v.get('lastError') for v in state['channels'].values())
    for k, row in queue.items():
        previous = state['channels'].get(k, {})
        if previous.get('blacklist') == 'permanent' or previous.get('batch') == batch:
            continue
        if normal >= 8 and previous.get('blacklist') != 'temporary':
            continue
        outcome, tests, error = checker(client, row)
        timestamp = now()
        record = transition(previous, outcome, timestamp)
        event = {'at': timestamp, 'batch': batch, 'groupId': row['id'], 'channelId': row.get('channelId'), 'model': MODEL, 'outcome': outcome, 'tests': tests}
        if error:
            event['error'] = error
            record['lastError'] = {'at': timestamp, 'message': error}
        record.update(batch=batch, name=row['name'], groupId=row['id'], history=[event, *previous.get('history', [])][:6])
        state['channels'][k] = record
        persist(state)
        if persist is save_state:
            with STATE.with_suffix('.jsonl').open('a', encoding='utf-8') as log:
                log.write(json.dumps(event, ensure_ascii=False) + '\n')
        normal += outcome == 'normal'
        print(f"Channel {row.get('channelId')}: {outcome}", flush=True)
    state['batches'][batch] = {'completedAt': now(), 'normal': normal, 'stopReason': 'normal_limit' if normal >= 8 else 'candidates_exhausted'}
    state['batches'] = dict(list(state['batches'].items())[-30:])
    persist(state)
    return state

def main():
    import fcntl
    from collect import collect_all
    STATE.parent.mkdir(parents=True, exist_ok=True)
    with STATE.with_suffix('.lock').open('w') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        hk = datetime.now(timezone(timedelta(hours=8)))
        batch = hk.strftime('%Y-%m-%d') + ('T14' if hk.hour >= 14 else 'T08')
        state = load_state()
        if state['batches'].get(batch, {}).get('completedAt'):
            print('Batch already completed')
            return
        snapshot = collect_all()
        client = CodeGo()
        client.login()
        run_batch(snapshot, client, batch, state)

if __name__ == '__main__':
    main()
