# 服务器数据更新

服务名保持 `gpt6-route-radar-refresh.service`，现在只采集并上传 R2 数据，不再推送 GitHub 分支或部署网页。

```sh
# 立即采集并上传一次
systemctl start gpt6-route-radar-refresh.service
journalctl -u gpt6-route-radar-refresh.service -n 30 --no-pager
# 检查每 10 分钟的定时器
systemctl list-timers gpt6-route-radar-refresh.timer
# 暂停自动数据更新
systemctl disable --now gpt6-route-radar-refresh.timer
# 恢复自动数据更新
systemctl enable --now gpt6-route-radar-refresh.timer
```

oneshot 服务成功后为 inactive 属于正常状态。程序位于 `/opt/gpt6-route-radar/collect.py` 和 `/opt/gpt6-route-radar/publish_r2.py`，由 root 部署、route-radar 用户运行。采集器或模型列表修改后需要同步更新服务器文件。

`/etc/gpt6-route-radar/r2-upload.env` 为 root:root、0600，仅由 systemd 读取后注入服务环境。包含 `RADAR_UPLOAD_URL` 和专用 `RADAR_UPLOAD_TOKEN`，不包含 Cloudflare 账号 OAuth 或管理 API 凭证。不要将文件内容粘贴到日志、仓库或网页。

旧 `publish_pages.py` 和 `trigger_refresh.py` 仅留档，正常更新不用它们。原 GitHub 采集工作流保持禁用。

页面发布与数据上传分开，详见 [Cloudflare 说明](CLOUDFLARE.md)。
