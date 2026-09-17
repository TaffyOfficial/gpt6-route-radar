# 独立服务器触发更新

服务器每小时第 03、13、23、33、43、53 分检查已发布快照。行情与成功率都不到 8 分钟时跳过；否则触发一次采集发布。近 15 分钟已有本工作流排队或运行时也跳过，避免重复。网页还是 GitHub Pages，数据采集和构建仍由 GitHub Actions 执行。

这里使用仅限本仓库的 SSH deploy key。私钥只在服务器，不使用个人账号令牌。触发方式是更新专用 `server-refresh` 分支，工作流始终 checkout 当前 `main`；每个触发提交的父提交都是当前 `main`，专用分支只比主分支多一个空提交，主分支和数据不产生定时提交。更新使用 force-with-lease，避免覆盖并发更新。

GitHub 原生 schedule 仍可触发更新，服务器根据数据新鲜度自动跳过。独立计时解决 schedule 不产生事件的问题，不能绕过 GitHub runner 或 Pages 本身的故障。服务器读取检查接口失败、SSH 失败会使服务失败，下一次定时重试；成功触发不等于成功发布，应结合 Actions 和页面采集时间确认。

## 安装约定

- 系统用户：`route-radar`，无交互登录。
- 程序：`/opt/gpt6-route-radar/trigger_refresh.py`，root 管理、服务用户只读。
- 凭证：`/etc/gpt6-route-radar/deploy_key`，root:route-radar，0640。
- GitHub SSH 主机公钥：`/etc/gpt6-route-radar/known_hosts`，通过官方 HTTPS `https://api.github.com/meta` 核验，启用严格主机检查。
- 状态与 Git 缓存：`/var/lib/gpt6-route-radar`，仅服务用户可写。
- 将公钥注册为本仓库的可写 deploy key；Pages 环境部署分支策略允许 `main` 和 `server-refresh`。
- 将本目录 `.service`、`.timer` 放入 `/etc/systemd/system/`，执行 `systemctl daemon-reload`，确认服务手动运行成功后启用 timer。

## 查看与控制

```sh
systemctl list-timers gpt6-route-radar-refresh.timer
systemctl status gpt6-route-radar-refresh.service
journalctl -u gpt6-route-radar-refresh.service -n 30 --no-pager
systemctl start gpt6-route-radar-refresh.service
systemctl enable --now gpt6-route-radar-refresh.timer
# 停止服务器触发，GitHub 原生定时仍保留
systemctl disable --now gpt6-route-radar-refresh.timer
```

修改已发布项目中的脚本不会自动更新服务器文件。更新时由维护者复制本目录脚本和服务定义，重新加载 systemd；不让服务器自动执行未经维护者部署的新脚本。
