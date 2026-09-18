# 服务器手动发布

采集和静态构建在服务器执行，产物推送到 `gh-pages`。Pages 配置为 **Deploy from a branch → gh-pages → / (root)**。原采集工作流已禁用并移除 push / schedule 触发，旧 systemd timer 保持 disabled / inactive；不再推送 `server-refresh`。

## 更新一次

在服务器执行：

```sh
systemctl start gpt6-route-radar-refresh.service
journalctl -u gpt6-route-radar-refresh.service -n 40 --no-pager
```

服务为 oneshot，成功后变为 inactive 属于正常状态。每次从当前 `main` 临时检出，使用 Python 3.10+ 和 Git 采集、构建并正常推送 `gh-pages`，不强制覆盖并发发布。采集或构建失败不推送；成功推送后应等待 Pages 发布，并检查线上快照时间。

也可直接运行（不要与服务同时执行）：

```sh
sudo -u route-radar python3 /opt/gpt6-route-radar/publish_pages.py --key /etc/gpt6-route-radar/deploy_key --known-hosts /etc/gpt6-route-radar/known_hosts
```

网页的「检查新快照」仅读取已发布数据，不会执行此命令。没有固定更新周期；20 分钟的线上快照过期保护仍然生效。

## 安装或更新脚本

沿用现有的 `route-radar` 用户和仓库专用可写 deploy key。私钥为 `/etc/gpt6-route-radar/deploy_key`，root:route-radar、0640；经核验的 GitHub SSH 主机公钥保存在同目录的 `known_hosts`。

将 `publish_pages.py` 复制到 `/opt/gpt6-route-radar/`，将 `gpt6-route-radar-refresh.service` 复制到 `/etc/systemd/system/`，然后执行：

```sh
systemctl disable --now gpt6-route-radar-refresh.timer
systemctl stop gpt6-route-radar-refresh.service
systemctl daemon-reload
systemctl start gpt6-route-radar-refresh.service
```

不要启用旧 timer。仓库中的 `trigger_refresh.py` 和 timer 文件仅为旧方案留档。发布脚本每次拉取当前 `main`，但 `/opt` 中的入口脚本和 systemd 服务定义需要维护者显式更新。

GitHub 仍会运行自带的 Pages 分支发布任务，它只发布已推送的静态文件。本项目的采集、测试工作流不会自动执行。
