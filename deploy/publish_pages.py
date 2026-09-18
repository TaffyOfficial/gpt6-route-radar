"""Manually collect on the server and push static files to the gh-pages branch."""
import argparse
from datetime import datetime, timezone
import os
from pathlib import Path
import shlex
import shutil
import subprocess
import sys
import tempfile

REMOTE = 'git@github.com:TaffyOfficial/gpt6-route-radar.git'
BRANCH = 'gh-pages'


def git(directory, *args, env=None):
    return subprocess.run(['git', '-C', str(directory), *args], env=env,
                          text=True, capture_output=True, check=True, timeout=120).stdout.strip()


def publish(site, remote, directory, env):
    """Use a temporary checkout and a normal push; concurrent updates fail safely."""
    directory = Path(directory)
    directory.mkdir(parents=True, exist_ok=True)
    git(directory, 'init', env=env)
    target = 'refs/heads/' + BRANCH
    if git(directory, 'ls-remote', '--refs', remote, target, env=env):
        git(directory, 'fetch', '--depth=1', remote, target, env=env)
        git(directory, 'checkout', '-B', BRANCH, 'FETCH_HEAD', env=env)
        git(directory, 'rm', '-r', '-f', '--ignore-unmatch', '.', env=env)
    else:
        git(directory, 'checkout', '--orphan', BRANCH, env=env)
    shutil.copytree(site, directory, dirs_exist_ok=True)
    git(directory, 'add', '--all', env=env)
    if not git(directory, 'status', '--porcelain', env=env):
        print('Published files unchanged; nothing to push.', flush=True)
        return None
    commit_env = {**env, 'GIT_AUTHOR_NAME': 'Route Radar Publisher',
                  'GIT_AUTHOR_EMAIL': 'route-radar@users.noreply.github.com',
                  'GIT_COMMITTER_NAME': 'Route Radar Publisher',
                  'GIT_COMMITTER_EMAIL': 'route-radar@users.noreply.github.com'}
    git(directory, 'commit', '-m', 'Publish snapshot ' + datetime.now(timezone.utc).isoformat(), env=commit_env)
    git(directory, 'push', remote, 'HEAD:' + target, env=env)
    commit = git(directory, 'rev-parse', 'HEAD', env=env)
    print('Pushed gh-pages:', commit, flush=True)
    return commit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--remote', default=REMOTE)
    parser.add_argument('--key', help='SSH deploy key (otherwise use the current Git credentials)')
    parser.add_argument('--known-hosts', help='Verified GitHub SSH known_hosts file')
    args = parser.parse_args()
    env = dict(os.environ)
    if args.key:
        ssh = ['ssh', '-i', args.key, '-o', 'IdentitiesOnly=yes', '-o', 'BatchMode=yes',
               '-o', 'StrictHostKeyChecking=yes', '-o', 'ConnectTimeout=15']
        if args.known_hosts:
            ssh += ['-o', 'UserKnownHostsFile=' + args.known_hosts]
        env['GIT_SSH_COMMAND'] = shlex.join(ssh)
    with tempfile.TemporaryDirectory(prefix='route-radar-publish-') as temporary:
        source = Path(temporary) / 'source'
        git(temporary, 'clone', '--depth=1', '--branch', 'main', args.remote, str(source), env=env)
        # Collection and allowlist validation must succeed before touching the publishing branch.
        subprocess.run([sys.executable, 'build_pages.py'], cwd=source, env=env, check=True, timeout=600)
        publish(source / 'dist', args.remote, Path(temporary) / 'pages', env)
    print('GitHub Pages will publish the pushed branch. Check the live snapshot timestamp.', flush=True)


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('Publish failed:', error, file=sys.stderr)
        if isinstance(error, subprocess.CalledProcessError) and error.stderr:
            print(error.stderr, file=sys.stderr)
        sys.exit(1)
