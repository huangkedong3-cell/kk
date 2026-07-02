# 律所介绍网站

这是一个参照亘盛所法律服务方案模板调整的律所介绍网站示例，位于 `/Users/dongdong/Documents/vibe coding/Project_001`。

## 内容

- 首屏品牌介绍与咨询入口
- 常年法律顾问服务内容
- 专项法律事务
- 本地化、产业化、专业化优势
- 服务流程
- 服务承诺
- 概括性服务场景
- 联系咨询区

当前电话、邮箱和地址为示例内容，正式发布前请替换为真实信息。人物介绍暂未放入页面。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## Cloudflare Pages 部署

已连接到 Cloudflare Pages 项目 `gensheng-law-firm`。

推荐设置：

- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js 版本：20 或更新版本

GitHub `main` 分支后续每次更新都会触发 Cloudflare Pages 自动构建。

## 图片来源

亘盛 logo 从用户提供的法律服务方案模板中提取，并在源码中内嵌为 `src/assets.ts`。网页主色使用 logo 中的商务蓝与深灰体系。