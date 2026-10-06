"""Scheduled, channel-bound CodeGo checks. Credentials never enter public snapshots."""
import json
from concurrent.futures import ThreadPoolExecutor
import threading
import os
import re
import subprocess
import time
import urllib.request
import urllib.error
import http.cookiejar
from email.utils import parsedate_to_datetime
from datetime import datetime, timezone, timedelta
from pathlib import Path

MODEL = 'gpt-6-astra'
SOURCE = 'Codex Pro'
TOOL_PROBE_COMMAND = 'printf TOOL_PROBE_OK'
TOOL_PROBE_PROMPT = ('Can you actually use the provided command tool? Call exec_command with the exact command supplied below. '
                     'Only after receiving its real TOOL_PROBE_OK result, answer Yes. If the tool is unavailable or fails, answer No. '
                     'Answer only Yes or No. Do not simulate a tool call or invent its output.\n\n' + TOOL_PROBE_COMMAND)
ROOT = Path(__file__).resolve().parent
STATE = Path(os.environ.get('RADAR_INTELLIGENCE_STATE', '/var/lib/gpt6-route-radar/intelligence.json'))
RULES = Path(os.environ.get('RADAR_INTELLIGENCE_RULES', '/etc/gpt6-route-radar/intelligence-rules.json'))

class ProtocolUnavailable(RuntimeError):
    pass

def rules():
    return json.loads(RULES.read_text('utf-8'))

def now():
    return datetime.now(timezone.utc).isoformat()

def scheduled_batch(timestamp=None):
    hk = (timestamp or datetime.now(timezone.utc)).astimezone(timezone(timedelta(hours=8)))
    return hk.strftime('%Y-%m-%dT%H')

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

def public_error(message):
    """Allowlisted explanations only; never publish provider response bodies."""
    message = str(message)
    if message == 'inference protocol unavailable':
        return '该渠道不支持请求的模型 API 协议'
    if message.startswith('tool probe'):
        return '无法调用工具'
    stage = '模型调用' if message.startswith('inference') else '管理接口' if message.startswith('management:') else '请求'
    if message.startswith('management:') and '/key' in message:
        stage = '获取 Key'
    elif message.startswith('management:') and '/token/' in message:
        stage = '令牌管理'
    elif message.startswith('management:') and '/login' in message:
        stage = '账户登录'
    code = re.search(r'HTTP (\d{3})', message)
    if code:
        labels = {'429': '被限流', '401': '认证失败', '403': '访问被拒绝', '402': '额度不足', '500': '服务内部错误', '502': '上游网关错误', '503': '服务暂不可用', '504': '网关超时'}
        return stage + labels.get(code[1], '失败') + '（HTTP ' + code[1] + '）' + ('；旧日志未记录接口阶段' if stage == '请求' else '')
    if 'Incomplete or empty model answer' in message:
        return '模型回答为空或被截断，未进行智力判定'
    if 'Timeout' in message or 'timed out' in message:
        return stage + '超时'
    if message == 'PermissionError':
        return '测试服务读取私有配置权限不足，未调用模型'
    if message == 'URLError':
        return '网络连接失败'
    if 'rejected request' in message:
        return stage + '被平台拒绝，未取得有效回答'
    if 'No usable channel-bound key' in message:
        return '未取得可用的渠道专属 Key'
    return '请求失败，未取得有效结果（详细原因仅保留在服务器）'

def completed_history(record, timestamp=None):
    reference = timestamp or datetime.now(timezone.utc)
    cutoff = reference - timedelta(hours=24)
    history = []
    for event in record.get('qualityHistory', record.get('history', [])):
        if event.get('outcome') not in ('normal', 'mild', 'severe'):
            continue
        try:
            at = datetime.fromisoformat(event['at'].replace('Z', '+00:00'))
            if cutoff < at <= reference:
                history.append({'at': event['at'], 'outcome': event['outcome']})
        except (KeyError, TypeError, ValueError):
            continue
    return history


def attach(snapshot):
    state = load_state()
    for data in [snapshot, *snapshot.get('modelSnapshots', {}).values()]:
        for row in [*data.get('rows', []), *data.get('lookupRows', [])]:
            record = state['channels'].get(key(row))
            if record:
                row['intelligence'] = {k: record[k] for k in ('status', 'blacklist', 'checkedAt', 'model', 'toolUnavailable') if k in record}
            if record:
                row['intelligence']['qualityHistory'] = completed_history(record)
                row['intelligence']['history'] = [{**{k: h[k] for k in ('at', 'outcome') if k in h}, **({'error': public_error(h['error'])} if h.get('error') else {})} for h in record.get('history', [])]
                if record.get('lastError'):
                    row['intelligence']['lastError'] = {'at': record['lastError']['at'], 'message': public_error(record['lastError']['message'])}
        data['intelligenceSchedule'] = {'timezone': 'Asia/Hong_Kong', 'hours': list(range(24)), 'normalLimit': 8, 'stabilityWindowHours': 24}
    return snapshot

def passed(question, answer):
    config = rules()
    if question == 1:
        return bool(re.fullmatch(config['firstPattern'], answer.strip(), re.IGNORECASE))
    return bool(re.search(config['secondPattern'], answer))

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
        self.key_lock = threading.Lock()
        self.key_cache_path = STATE.with_name('codego-keys.json')
        self.key_cache = json.loads(self.key_cache_path.read_text()) if self.key_cache_path.exists() else {}

    def api(self, path, data=None, bearer=None):
        headers = {'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json'}
        if bearer:
            headers['Authorization'] = 'Bearer ' + bearer
        elif self.uid:
            headers['New-Api-User'] = str(self.uid)
        req = urllib.request.Request(self.base + path, data=None if data is None else json.dumps(data).encode(), headers=headers)
        stage = 'inference' if bearer else 'management:' + re.sub(r'/\d+/', '/:id/', path.split('?')[0])
        for attempt in range(3):
            try:
                with self.opener.open(req, timeout=180) as response:
                    if '/v1/responses' == path and 'text/event-stream' in response.headers.get('Content-Type', ''):
                        result = None
                        for line in response:
                            if not line.startswith(b'data:'):
                                continue
                            payload = line[5:].strip()
                            if payload == b'[DONE]':
                                break
                            event = json.loads(payload)
                            if event.get('type') in ('response.completed', 'response.incomplete', 'response.failed'):
                                result = event.get('response', {})
                                break
                            if event.get('type') == 'error':
                                raise RuntimeError('inference rejected request')
                        if result is None:
                            raise RuntimeError('Incomplete or empty model answer')
                    else:
                        result = json.load(response)
                break
            except urllib.error.HTTPError as exc:
                # Preserve the failing API stage without persisting response bodies,
                # which may contain upstream addresses or account information.
                retry_after = exc.headers.get('Retry-After', '') if exc.headers else ''
                status = exc.code
                protocol_unavailable = False
                if status == 400 and bearer:
                    try:
                        body = json.loads(exc.read(16384))
                        protocol_unavailable = body.get('error', {}).get('code') == 'gateway_provider_protocol_unavailable'
                    except (ValueError, AttributeError):
                        pass
                exc.close()
                if protocol_unavailable:
                    raise ProtocolUnavailable('inference protocol unavailable') from None
                if status != 429 or attempt == 2:
                    raise RuntimeError(stage + ' HTTP ' + str(status)) from None
                try:
                    delay = float(retry_after)
                except ValueError:
                    try:
                        delay = (parsedate_to_datetime(retry_after) - datetime.now(timezone.utc)).total_seconds()
                    except (ValueError, TypeError, OverflowError):
                        delay = 2 ** (attempt + 1)
                # A very long server backoff is deferred to the next run instead
                # of holding the batch indefinitely or retrying prematurely.
                if delay > 60:
                    raise RuntimeError(stage + ' HTTP 429; retry deferred') from None
                time.sleep(max(1, delay))
        if result.get('success') is False or result.get('error') is not None:
            raise RuntimeError(stage + ' rejected request')
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
        missing = [t['id'] for t in tokens if t.get('status') == 1 and str(t['id']) not in self.key_cache]
        for offset in range(0, len(missing), 100):
            found = self.api('/api/token/batch/keys', {'ids': missing[offset:offset+100]})['data']['keys']
            self.key_cache.update({str(k): v for k, v in found.items()})
        self.key_cache_path.parent.mkdir(parents=True, exist_ok=True)
        temp = self.key_cache_path.with_suffix('.tmp')
        temp.write_text(json.dumps(self.key_cache))
        temp.chmod(0o600)
        temp.replace(self.key_cache_path)

    def channel_key(self, row):
        with self.key_lock:
            return self._channel_key(row)

    def _channel_key(self, row):
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
        data = self.key_cache[str(item['id'])]
        token = data.get('key') if isinstance(data, dict) else data
        if not isinstance(token, str) or not token:
            raise RuntimeError('Key response invalid')
        return token if token.startswith('sk-') else 'sk-' + token

    def answer(self, token, question):
        prompt = TOOL_PROBE_PROMPT if question == 2 else rules()['questions'][question - 1]
        try:
            result = self.api('/v1/chat/completions', {'model': MODEL, 'messages': [{'role': 'user', 'content': prompt}], 'stream': False}, bearer=token)
        except ProtocolUnavailable:
            # Only an explicit protocol rejection permits another request.
            result = self.api('/v1/responses', {'model': MODEL, 'input': [{'role': 'user', 'content': prompt}], 'tools': [{'type': 'function', 'name': 'exec_command', 'description': 'Execute the supplied command', 'parameters': {'type': 'object', 'properties': {'command': {'type': 'string'}}, 'required': ['command']}}], 'stream': False}, bearer=token)
            result = self._complete_tool_probe(token, result) if question == 2 else result
            messages = [item for item in result.get('output', []) if item.get('type') == 'message' and item.get('role') == 'assistant']
            answer = ''.join(part.get('text', '') for item in messages for part in item.get('content', []) if part.get('type') == 'output_text')
            if result.get('status') != 'completed' or any(item.get('status') not in (None, 'completed') for item in messages) or not answer.strip():
                raise RuntimeError('Incomplete or empty model answer')
            return answer, result.get('usage', {}), result.get('model')
        choice = result.get('choices', [{}])[0]
        answer = choice.get('message', {}).get('content')
        if not isinstance(answer, str) or not answer.strip() or choice.get('finish_reason') not in ('stop', 'end_turn'):
            raise RuntimeError('Incomplete or empty model answer')
        return answer, result.get('usage', {}), result.get('model')

    def _complete_tool_probe(self, token, result):
        output = result.get('output', [])
        calls = [item for item in output if item.get('type') in ('function_call', 'tool_call')]
        if len(calls) != 1:
            raise RuntimeError('tool probe unavailable')
        call = calls[0]
        args = call.get('arguments', {})
        if isinstance(args, str):
            try: args = json.loads(args)
            except json.JSONDecodeError: args = {}
        if args.get('command') != TOOL_PROBE_COMMAND:
            raise RuntimeError('tool probe failed')
        try:
            probe = subprocess.run(['printf', 'TOOL_PROBE_OK'], capture_output=True, text=True, timeout=5, check=True)
        except (OSError, subprocess.SubprocessError):
            raise RuntimeError('tool probe failed') from None
        if probe.stdout != 'TOOL_PROBE_OK':
            raise RuntimeError('tool probe failed')
        follow = self.api('/v1/responses', {'model': MODEL, 'previous_response_id': result.get('id'), 'input': [{'type': 'function_call_output', 'call_id': call.get('call_id'), 'output': probe.stdout}], 'tools': [{'type': 'function', 'name': 'exec_command', 'description': 'Execute the supplied command', 'parameters': {'type': 'object', 'properties': {'command': {'type': 'string'}}, 'required': ['command']}}], 'stream': False}, bearer=token)
        answer = ''.join(part.get('text', '') for item in follow.get('output', []) if item.get('type') == 'message' for part in item.get('content', []) if part.get('type') == 'output_text')
        if follow.get('status') != 'completed' or not re.fullmatch(r'Yes', answer.strip(), re.IGNORECASE):
            raise RuntimeError('tool probe failed')
        return follow

def check(client, row):
    tests = []
    try:
        token = client.channel_key(row)
        for question in (1, 2):
            started = time.monotonic()
            answer, usage, returned_model = client.answer(token, question)
            ok = passed(question, answer)
            tests.append({'question': question, 'promptVersion': 1, 'answer': answer, 'passed': ok, 'durationMs': round((time.monotonic()-started)*1000), 'usage': usage, 'returnedModel': returned_model})
            if question == 2 and not ok:
                raise RuntimeError('tool probe failed')
            if question == 2:
                return ('mild' if ok else 'error'), tests, None if ok else 'tool probe failed'
            if not ok:
                return 'severe', tests, None
        return 'severe', tests, None
    except Exception as exc:
        # Only controlled errors are exposed, never credential-bearing request objects.
        error = str(exc) if isinstance(exc, RuntimeError) else type(exc).__name__
        if error.startswith('tool probe'):
            tests.append({'question': 2, 'promptVersion': 2, 'passed': False, 'toolUnavailable': True})
        return 'error', tests, error

def candidates(snapshot):
    script = "const fs=require('fs');const R=require('./rank.js');const s=JSON.parse(fs.readFileSync(0,'utf8'));process.stdout.write(JSON.stringify(R.rank(s,{source:'Codex Pro',model:'gpt-6-astra',freshnessProfile:'scheduled'}).rows));"
    run = subprocess.run(['node', '-e', script], cwd=ROOT, input=json.dumps(snapshot), text=True, encoding='utf-8', capture_output=True, check=True)
    return json.loads(run.stdout)

def run_batch(snapshot, client, batch, state, persist=save_state, checker=check, top7_only=False):
    def ranked_rows():
        for row in snapshot['rows']:
            row['intelligence'] = state['channels'].get(key(row), {})
        return [r for r in candidates(snapshot) if not state['channels'].get(key(r), {}).get('blacklist')]
    def covered(row):
        record = state['channels'].get(key(row), {})
        return record.get('status') in ('normal', 'mild') and not record.get('lastError')
    initial = ranked_rows()
    print('Current top 7: ' + ', '.join(str(r.get('channelId')) for r in initial[:7]), flush=True)
    if state['batches'].get(batch, {}).get('completedAt') and all(covered(r) for r in initial[:7]):
        return state
    rows = {key(r): r for r in snapshot['rows'] if r['source'] == SOURCE}
    due = [] if top7_only else [r for k, r in rows.items() if state['channels'].get(k, {}).get('blacklist') == 'temporary' and state['channels'][k].get('batch') != batch]
    normal = sum(v.get('batch') == batch and v.get('status') == 'normal' and not v.get('lastError') for v in state['channels'].values())
    attempted = set()
    def waves():
        with ThreadPoolExecutor(max_workers=10) as pool:
            while True:
                ranked = ranked_rows()
                missing = [r for r in ranked[:7] if not covered(r)]
                ordinary = [r for r in ranked if r.get('eligible', True)] if normal < 8 and not top7_only else []
                queue = {key(r): r for r in [*missing, *ordinary, *due]}
                wave = [(k, r) for k, r in queue.items() if k not in attempted and state['channels'].get(k, {}).get('blacklist') != 'permanent' and (state['channels'].get(k, {}).get('batch') != batch or state['channels'].get(k, {}).get('lastError'))][:10]
                if not wave:
                    break
                attempted.update(k for k, _ in wave)
                print(f'Starting wave: {len(wave)} channels; normal={normal}; top7 pending={len(missing)}', flush=True)
                print('Wave channels: ' + ', '.join(str(r.get('channelId')) for _, r in wave), flush=True)
                futures = [(k, r, pool.submit(checker, client, r)) for k, r in wave]
                for k, r, future in futures:
                    yield k, r, future.result()
    for k, row, checked in waves():
        previous = state['channels'].get(k, {})
        if previous.get('blacklist') == 'permanent':
            continue
        outcome, tests, error = checked
        timestamp = now()
        record = transition(previous, outcome, timestamp)
        event = {'at': timestamp, 'batch': batch, 'groupId': row['id'], 'channelId': row.get('channelId'), 'model': MODEL, 'outcome': outcome, 'tests': tests}
        if error:
            event['error'] = error
            record['lastError'] = {'at': timestamp, 'message': error}
        record.update(batch=batch, name=row['name'], groupId=row['id'], history=[event, *previous.get('history', [])][:6])
        history = ([{'at': timestamp, 'outcome': outcome}] if outcome in ('normal', 'mild', 'severe') else []) + previous.get('qualityHistory', previous.get('history', []))
        record['qualityHistory'] = completed_history({'qualityHistory': history}, datetime.fromisoformat(timestamp))
        state['channels'][k] = record
        persist(state)
        if persist is save_state:
            with STATE.with_suffix('.jsonl').open('a', encoding='utf-8') as log:
                log.write(json.dumps(event, ensure_ascii=False) + '\n')
        normal += outcome == 'normal'
        print(f"Channel {row.get('channelId')}: {outcome}", flush=True)
    top = ranked_rows()[:7]
    missing = [str(r.get('channelId')) for r in top if not covered(r)]
    if top7_only:
        state['coverage'] = {'checkedAt': now(), 'top7Covered': not missing, 'top7Pending': missing}
        print('Top 7 coverage: ' + ('complete' if not missing else 'pending ' + ', '.join(missing)), flush=True)
        persist(state)
        return state
    state['batches'][batch] = {'finishedAt': now(), 'normal': normal, 'top7Covered': not missing, 'top7Pending': missing, 'stopReason': 'top7_incomplete' if missing else 'normal_limit' if normal >= 8 else 'candidates_exhausted'}
    if not missing:
        state['batches'][batch]['completedAt'] = now()
    print('Top 7 coverage: ' + ('complete' if not missing else 'pending ' + ', '.join(missing)), flush=True)
    state['batches'] = dict(list(state['batches'].items())[-30:])
    persist(state)
    return state

def main():
    import fcntl
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--top7-only', action='store_true')
    args = parser.parse_args()
    from collect import collect_all
    STATE.parent.mkdir(parents=True, exist_ok=True)
    with STATE.with_suffix('.lock').open('w') as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            if args.top7_only:
                print('Quality test already running; coverage will be checked on next refresh', flush=True)
                return
            raise
        batch = scheduled_batch()
        state = load_state()
        config = rules()
        if len(config.get('questions', [])) != 2:
            raise ValueError('Invalid private question configuration')
        re.compile(config['firstPattern'])
        re.compile(config['secondPattern'])
        snapshot = collect_all()
        client = CodeGo()
        client.login()
        run_batch(snapshot, client, batch, state, top7_only=args.top7_only)

if __name__ == '__main__':
    main()
