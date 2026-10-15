# ScrewGame.io

![Screw Game Logo](logo.svg)

正式域名：[screwgame.io](https://screwgame.io/)。自研浏览器螺丝解谜网站：Screw Puzzle、Screw Sort、Screw Jam，每种模式两个随机可解难度模板。

## 实现与运行

- Next.js App Router 静态主站、Phaser 3 独立游戏 Runtime、TypeScript 共享规则引擎。
- 原创 SVG Logo、程序化机械插图、可折叠侧栏、攻略、信任页面及 Sitemap。
- Cloudflare Worker + Durable Object（持久对象）结算代码；未配置服务时只有浏览器练习，不伪造可信积分。
- 本地依赖实际存放于 `D:\99_tool\sources\screwgame-web\node_modules`，项目通过目录联接引用。

```powershell
npm run test
npm run typecheck
npm run lint
npm run build-preserve-git
```

用户本地预览可以使用 `npm run dev`。本次开发不自动启动浏览器。生产静态文件位于 `out/`，独立 Runtime 产物位于 `runtime-dist/`。构建保留既有 `out/.git` 和 `out/README.md`，不会自动提交、推送或部署。GitHub 地址尚未提供，因此不初始化虚构远程仓库。

统计主站使用 `screwgame.io`、独立 Runtime 使用 `game.screwgame.io`，脚本为 `https://data.1back.link/js/app.js`。正式分域发布需设置游戏与 API Origin，配置服务端密钥、持久对象及域名；不能仅上传静态目录就宣称服务端积分可用。

![游戏机制插图](art/screw-puzzle.svg)

图片为实际随站分发的机制插图，并非浏览器实测截图。浏览器及生产验证状态见源码交接与审查记录。
