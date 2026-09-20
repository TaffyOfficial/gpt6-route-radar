# Cloudflare Pages 与独立行情快照

页面和数据使用不同的更新通道，不能把 R2 写入额度当成 Pages 构建额度。

- 当前静态站：https://gpt6-route-radar.new-api-custom.workers.dev 。Wrangler 4.135.0 创建新 Pages 项目时实际转为 Workers 静态资源托管；仓库明确配置仅上传 `dist/`。
- 页面：服务器运行 `python3 build_pages.py --hosting 'Cloudflare Pages'`，仅将生成的 `dist/` 传回已登录 Cloudflare 的维护电脑，在仓库运行 `npx wrangler@4.135.0 deploy`。R2 接通后仅修改页面代码时需要部署。
- 数据：服务器采集后仅覆盖 R2 的 `snapshot.json`。每 10 分钟一次，30 天约 4320 次对象写入，不调用 Pages 部署接口。
- 页面使用 `python build_pages.py --hosting 'Cloudflare Pages' --snapshot-url https://<数据域名>/snapshot.json` 构建即可读取独立快照。内置快照作为加载和网络失败时的备用，过期保护继续生效。

## R2 开通后配置

1. 创建 Standard 存储桶，仅存放公开快照；服务器凭证只允许访问该桶。
2. 使用 R2 自定义域名接入 CDN，不使用仅供开发的 `r2.dev`。
3. 配置 CORS：允许页面的 HTTPS origin、GET/HEAD；不允许浏览器写入。
4. 为 `snapshot.json` 设置 `Content-Type: application/json`、`Cache-Control: public, max-age=60`，配置 CDN 缓存规则让 JSON 可缓存。缓存键忽略查询字符串，避免随机参数导致回源。不要把数据域名指向采集服务器。
5. 所有模型采集完整后再上传一个 JSON 对象；失败保留上一份对象。验证内容、CORS、缓存和更新时间后，才启用服务器数据更新定时器。

目前账号 R2 尚未开通，线上暂时读取本次构建附带的快照，独立快照读取功能已准备但未启用。开通可能涉及付款方式和按量计费授权；免费额度不是零费用上限。未完成 R2 配置时不要启用定时部署。GitHub 采集工作流和旧服务器 timer 保持禁用，现有手动 systemd 服务仍是 GitHub 发布入口，不代表已经改为 Cloudflare 上传。
