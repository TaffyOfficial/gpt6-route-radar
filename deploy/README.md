# 服务器数据更新

采集任务运行于甲骨文 ARM64 主机 `168.110.35.119`。原主机 `43.153.173.195` 的定时器已停用，保留原配置用于回滚。

模型包含 Opus 5.5（`claude-opus-5-5`）；所有模型采集全部来源，由页面筛选来源，选择会保存在 URL 的 `source` 参数中。

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

## 智力测试运维

安装 `intelligence.py`、`rank.js`、`prices.js` 与新版 `collect.py` 至 `/opt/gpt6-route-radar/`。安装本目录的 intelligence service/timer 到 `/etc/systemd/system/`，运行 `systemctl daemon-reload` 和 `systemctl enable --now gpt6-route-radar-intelligence.timer`。

`/etc/gpt6-route-radar/codego.env`（root:root，0600）配置 `CODEGO_USERNAME` / `CODEGO_PASSWORD`。账户秘密不进入仓库或快照。测试需要 Python 3.10+ 和 Node.js。状态 `/var/lib/gpt6-route-radar/intelligence.json`、完整 JSONL 日志同目录；目录归 route-radar 所有。

`systemctl start gpt6-route-radar-intelligence.service` 手动执行当前时段；同一日期和时段幂等，不重复扣费。08:00 前手动调用归当天 08 时段，14:00 后归 14 时段。首次部署首轮在部署时执行，此后由 timer 定时运行。`journalctl -u gpt6-route-radar-intelligence.service` 查看进度。每渠道完成即原子保存状态，10 分钟行情上传会带上新结果，整轮完成再发布一次。

人工解除自动黑名单：先停止测试 service，对状态文件按固定 `channel:<编号>` 删除该条记录（保留 JSONL 日志），再启动行情刷新。后续重新进入推荐范围时会再测；不要通过浏览器本地“恢复”按钮假装解除服务器黑名单。
