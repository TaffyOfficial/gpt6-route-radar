# 服务器数据更新

采集任务运行于私有配置指定的服务器。原主机定时器已停用，保留配置用于回滚。

模型包含 GPT6.1 Sol（`gpt-6.1-sol`）和 Opus 5.5（`claude-opus-5-5`）；所有模型采集全部来源，由页面筛选来源，选择会保存在 URL 的 `source` 参数中。

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

代码更新由 GitHub Actions 的 ARM64 self-hosted runner 自动处理：推送 `main` 后，runner 测试并同步 `/opt/gpt6-route-radar`，然后重启采集服务。服务成功后自动上传 R2；Cloudflare Pages 的静态文件保持不变，只通过 `/api/snapshot` 读取 R2。

页面发布与数据上传分开，详见 [Cloudflare 说明](CLOUDFLARE.md)。

## 智力测试运维

安装 `intelligence.py`、`rank.js`、`prices.js` 与新版 `collect.py` 至 `/opt/gpt6-route-radar/`。安装本目录的 intelligence service/timer 到 `/etc/systemd/system/`，运行 `systemctl daemon-reload` 和 `systemctl enable --now gpt6-route-radar-intelligence.timer`。

`/etc/gpt6-route-radar/codego.env`（root:root，0600）配置 `CODEGO_USERNAME` / `CODEGO_PASSWORD`。账户秘密不进入仓库或快照。测试需要 Python 3.10+ 和 Node.js。状态 `/var/lib/gpt6-route-radar/intelligence.json`、完整 JSONL 日志同目录；目录归 route-radar 所有。

`systemctl start gpt6-route-radar-intelligence.service` 手动执行当前时段；同一香港日期和小时的批次幂等，不重复扣费。手动调用归当前香港时间小时，定时器每小时整点运行。首次部署首轮在部署时执行，此后由 timer 定时运行。`journalctl -u gpt6-route-radar-intelligence.service` 查看进度。每渠道完成即原子保存状态，10 分钟行情上传会带上新结果，整轮完成再发布一次。

人工解除自动黑名单：先停止测试 service，对状态文件按固定 `channel:<编号>` 删除该条记录（保留 JSONL 日志），再启动行情刷新。后续重新进入推荐范围时会再测；不要通过浏览器本地“恢复”按钮假装解除服务器黑名单。

测试题及判定表达式通过服务器私有文件 `intelligence-rules.json` 配置，权限 root:route-radar 0640。公网只发布状态和时间，原始回答仅存服务器日志。

每批按公开默认榜单综合分顺序选取最多 10 条；先补齐前 7 名的有效测试结果，每批完成后重新排名。正常数达到 8 也不能跳过尚未测完的前 7 名。请求异常不算覆盖，写入 top7Pending，并保持批次未完成。个人报价、自定义权重或行情后续变化可能改变访客榜单，下一轮按新公开榜单复查。
