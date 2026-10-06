#!/bin/sh
set -eu

source=/opt/actions-runner-radar/_work/gpt6-route-radar/gpt6-route-radar
target=/opt/gpt6-route-radar

test -f "$source/collect.py"
install -d -o route-radar -g route-radar "$target"
rsync -a --delete --exclude='.git' --exclude='snapshot.json' --exclude='snapshot.js' "$source/" "$target/"
chown -R route-radar:route-radar "$target"
systemctl daemon-reload
systemctl enable --now gpt6-route-radar-refresh.timer
systemctl restart gpt6-route-radar-refresh.service
