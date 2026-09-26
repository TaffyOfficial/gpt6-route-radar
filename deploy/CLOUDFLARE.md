# Cloudflare Pages 与私有 R2

网站：https://route-radar.pages.dev

浏览器仅请求本站页面和 `/api/snapshot`。页面使用 Cloudflare 的 `pages.dev` 域名；R2 没有自定义域名，`r2.dev` 公共访问也关闭。通过 Pages 的 R2 binding 在 Cloudflare 内部读取快照，不暴露自有域名或采集服务器地址。

## 两条独立路径

1. 服务器每 10 分钟采集七个模型的全部来源，通过带专用凭证的上传入口覆盖 R2 桶 `gpt6-route-radar-data` 的 `latest.json.gz`。每次只写一份数据，不构建或部署网站。
2. 网页每 60 秒请求同站 `/api/snapshot`。Pages Function 读取私有 R2 并解压 JSON，使用 60 秒共享缓存；忽略查询字符串，随机参数不会产生独立 R2 缓存键。

`_routes.json` 只让 `/api/snapshot` 调用函数；HTML、JS、CSS 等静态请求不调用函数。数据端点计入 Pages Functions / Workers 请求额度，缓存减少 R2 读取，不能消除函数调用计数。R2 存储及操作额度单独计算，不能把它等同于页面构建额度或无限免费访问。

## 页面发布

```sh
python3 build_pages.py --pages
npx wrangler@4.24.0 pages deploy dist --project-name route-radar --branch main
```

采集环境在服务器时，可将服务器构建的 `dist/` 传回已登录 Cloudflare 的维护电脑，再执行上传。`--pages` 会将同站数据函数和路由声明加入白名单产物，浏览器运行配置只包含相对地址 `/api/snapshot`。

固定使用上述 Pages 部署命令；新版 CLI 的新项目创建流程可能改为 Workers 静态托管。不要在仓库根目录直接创建静态资产 Worker，也不要把根目录作为 assets 目录。

## 服务器与上传入口

服务器的 systemd 服务和 timer 见 [运维说明](README.md)。服务器只发出上传请求，不接收访客流量。服务继续使用 `/opt/gpt6-route-radar/collect.py` 和 `publish_r2.py`；改采集器后需要同步服务器文件。

专用上传 Worker 只接受带 `UPLOAD_TOKEN` 的 PUT，验证格式、完整性和采集时间，只能覆盖本项目快照。服务器只有对应的专用上传令牌，没有 Cloudflare 账号管理凭证。上传代码更新使用：

```sh
node test-r2-upload.mjs
npx wrangler@4.24.0 deploy --config deploy/r2-upload/wrangler.jsonc
```

## 旧入口

旧 Workers 网站地址只跳转到新 Pages 站点。自有数据域名绑定已移除；不要重新公开 R2 或绑定自有域名。原 GitHub 采集 Action 保持禁用，旧 GitHub Pages 不再同步刷新。

网站 origin 改变后，旧站 localStorage 中的个人报价和黑名单不会自动转移到新站。
