"""Wake Pages from an independent timer, with a repository-scoped SSH deploy key."""
import argparse
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import shlex
import subprocess
import sys
import urllib.request

REPOSITORY = 'TaffyOfficial/gpt6-route-radar'
WORKFLOW = 'refresh-pages.yml'
BRANCH = 'server-refresh'
SNAPSHOT_URL = 'https://taffyofficial.github.io/gpt6-route-radar/snapshot.json'
FRESH_SECONDS = 8 * 60
ACTIVE_GRACE_SECONDS = 15 * 60


def timestamp(value):
    parsed = datetime.fromisoformat(value.replace('Z', '+00:00'))
    if parsed.tzinfo is None:
        raise ValueError('Missing timestamp timezone')
    return parsed.timestamp()


def needs_refresh(snapshot, now):
    if snapshot.get('complete') is not True:
        return True
    try:
        ages = [now - timestamp(snapshot.get(key, '')) for key in ('capturedAt', 'liveCapturedAt')]
    except (ValueError, TypeError, AttributeError):
        return True
    return any(age < -60 or age >= FRESH_SECONDS for age in ages)


def active_run(runs, now):
    for run in runs:
        if run.get('head_branch') not in ('main', BRANCH) or run.get('status') == 'completed':
            continue
        try:
            age = now - timestamp(run['created_at'])
        except (ValueError, TypeError, KeyError):
            continue
        if -60 <= age < ACTIVE_GRACE_SECONDS:
            return run.get('id')
    return None


def get_json(url):
    request = urllib.request.Request(url, headers={
        'User-Agent': 'gpt6-route-radar-server-timer',
        'Accept': 'application/json', 'Cache-Control': 'no-cache',
    })
    with urllib.request.build_opener(urllib.request.ProxyHandler({})).open(request, timeout=20) as response:
        return json.load(response)


def git(directory, *args, env=None, input_text=None):
    result = subprocess.run(['git', '-C', str(directory), *args], input=input_text,
                            text=True, capture_output=True, timeout=45, env=env, check=True)
    return result.stdout.strip()


def trigger(directory, remote, env, now):
    """Only the dedicated signal branch moves; every signal has current main as parent."""
    directory = Path(directory)
    directory.mkdir(parents=True, exist_ok=True)
    if not (directory / 'HEAD').exists():
        git(directory, 'init', '--bare', env=env)
    git(directory, 'fetch', '--no-tags', '--depth=1', remote,
        '+refs/heads/main:refs/remotes/origin/main', env=env)
    main = git(directory, 'rev-parse', 'refs/remotes/origin/main', env=env)
    tree = git(directory, 'rev-parse', main + '^{tree}', env=env)
    target = 'refs/heads/' + BRANCH
    previous = git(directory, 'ls-remote', '--refs', remote, target, env=env)
    expected = previous.split()[0] if previous else ''
    commit_env = {**env, 'GIT_AUTHOR_NAME': 'Route Radar Timer',
                  'GIT_AUTHOR_EMAIL': 'route-radar@users.noreply.github.com',
                  'GIT_COMMITTER_NAME': 'Route Radar Timer',
                  'GIT_COMMITTER_EMAIL': 'route-radar@users.noreply.github.com'}
    message = 'Refresh market snapshot from server ' + datetime.fromtimestamp(now, timezone.utc).isoformat()
    commit = git(directory, 'commit-tree', tree, '-p', main, env=commit_env, input_text=message + '\n')
    git(directory, 'push', '--force-with-lease=' + target + ':' + expected,
        remote, commit + ':' + target, env=env)
    return commit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--state-dir', default='/var/lib/gpt6-route-radar')
    parser.add_argument('--key', default='/etc/gpt6-route-radar/deploy_key')
    parser.add_argument('--known-hosts', default='/etc/gpt6-route-radar/known_hosts')
    parser.add_argument('--force', action='store_true', help='Ignore snapshot age; active-run guard still applies')
    args = parser.parse_args()
    now = datetime.now(timezone.utc).timestamp()
    try:
        snapshot = get_json(SNAPSHOT_URL + '?timer=' + str(int(now)))
    except Exception as error:
        print('Snapshot unavailable; attempt recovery:', type(error).__name__, flush=True)
        snapshot = {}
    if not args.force and not needs_refresh(snapshot, now):
        print('Fresh snapshot; no trigger needed:', snapshot.get('capturedAt'), flush=True)
        return
    # Read-only, public API: credentials are not needed for this check.
    # If this guard fails, exit instead of repeatedly triggering unknown work.
    runs = get_json(f'https://api.github.com/repos/{REPOSITORY}/actions/workflows/{WORKFLOW}/runs?per_page=20')
    running = active_run(runs['workflow_runs'], now)
    if running is not None:
        print('Recent workflow already queued/running:', running, flush=True)
        return
    import fcntl  # Linux timer only; core logic is also tested on Windows.
    state = Path(args.state_dir)
    state.mkdir(parents=True, exist_ok=True)
    with (state / 'trigger.lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        ssh = shlex.join(['ssh', '-i', args.key, '-o', 'IdentitiesOnly=yes', '-o', 'BatchMode=yes',
                         '-o', 'StrictHostKeyChecking=yes', '-o', 'UserKnownHostsFile=' + args.known_hosts,
                         '-o', 'ConnectTimeout=15'])
        commit = trigger(state / 'repo.git', f'git@github.com:{REPOSITORY}.git',
                         {**os.environ, 'GIT_SSH_COMMAND': ssh}, now)
        (state / 'last-trigger.json').write_text(json.dumps({'commit': commit, 'at': now}) + '\n')
        print('Triggered', BRANCH, commit, flush=True)


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('Refresh trigger failed:', type(error).__name__, str(error), file=sys.stderr)
        sys.exit(1)
