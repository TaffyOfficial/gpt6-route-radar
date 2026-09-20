# Cloudflare 静态页面与 R2 数据

- 页面：https://gpt6-route-radar.new-api-custom.workers.dev
- 数据：https://radar-data.viwo50when4.xyz/latest.json.gz
- R2 桶：`gpt6-route-radar-data`，Standard 存储。

Wrangler 4.135.0 创建新 Pages 项目时转为 Workers 静态资源托管。当前页面没有动态处理程序，访客请求由静态资源服务响应；数据读取直接走 R2 自定义域名与 CDN，不经过采集服务器或上传 Worker。

## 日常数据更新

服务器每 10 分钟运行 `publish_r2.py`，调用现有采集器收集全部模型，压缩后以 HTTPS PUT 发送到专用上传 Worker。上传 Worker 校验凭证、格式、模型完整性、大小和新鲜度，只能覆盖桶内 `latest.json.gz`。采集或校验失败不覆盖旧数据。一次成功刷新只写一个对象，不调用网站部署接口。

`.gz` 属于 Cloudflare 默认可缓存扩展名；对象设置 `Content-Type: application/json`、`Content-Encoding: gzip` 和 `Cache-Control: public, max-age=60`，浏览器自动解压。实测域名将浏览器缓存 TTL 提升到 4 小时，因此网页按 UTC 分钟追加统一版本参数，同一分钟的访客共享相同 URL，避免浏览器继续使用数小时前的数据；CDN 对象本身使用 60 秒缓存。不会为每个访客产生随机参数。CORS 只允许本站和原 GitHub Pages origin 读取。

上传入口只接受带专用令牌的 PUT，不提供公共数据读取。服务器没有 Cloudflare 管理凭证；上传 Worker 的 R2 binding 只指向本项目桶。此 Worker 正常每月调用约 4320 次；R2 写入约 4320 次。静态页面请求、Worker 请求与 R2 存储/操作额度是不同项目，不能混算；R2 超额仍可能计费。

## 更新页面

在服务器构建，或在已配置采集环境的维护电脑执行：

```sh
python3 build_pages.py --hosting Cloudflare --snapshot-url https://radar-data.viwo50when4.xyz/latest.json.gz --refresh-minutes 10
npx wrangler@4.135.0 deploy
```

服务器没有维护电脑的 OAuth 登录。也可将服务器生成的 `dist/` 取回已登录 Cloudflare 的维护电脑，再执行部署命令。仅上传白名单静态产物。不要将仓库根目录设为 assets 目录。

上传入口代码修改时独立部署：

```sh
node test-r2-upload.mjs
npx wrangler@4.135.0 deploy --config deploy/r2-upload/wrangler.jsonc
```

`UPLOAD_TOKEN` 保存在 Worker secret 中，与服务器 root-only 环境文件中的专用令牌一致，不写入 wrangler 配置。

## 状态与限制

旧 GitHub 采集 Action 保持禁用，旧 GitHub Pages 不再同步刷新。服务器 timer 已改为 R2 数据更新，与页面部署完全独立。切换网站 origin 后浏览器 localStorage 不会自动迁移，因此原站保存的个人报价、黑名单需在新站重新设置。

公网 CDN 承担访客流量，不等于无限免费或绝对不会中断。随机查询参数等缓存未命中仍可能增加 R2 读取；需要结合 Cloudflare 用量观察。采集服务器不作为公开页面或数据源站。
