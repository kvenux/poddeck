# 分享按钮 + 访问计数 — 设计 spec

日期:2026-06-21 · 分支:`feat/share-pageviews`

## 目标

给 PodDeck 加两个面向访客的能力,不引入后端,适配 GitHub Pages 静态托管:

1. **逐页分享**:任意一页 slide 上点"分享",提取该页文本 + 生成能直接打开**那一页**的链接,组合成"文字 + link",通过系统分享面板(手机)或剪贴板(桌面)交付。
2. **公开访问计数**:用不蒜子(busuanzi)在 landing 页脚公开显示"本站总访问 / 访客数";deck 浏览也计入总数;每个 deck 角落显示该 deck 的浏览次数。

## 关键约束与已核实事实

- 站点是纯静态:landing(Astro)在根,每个 episode 是独立的 Slidev SPA(`--base /poddeck/episodes/<id>/`),GH Pages 托管。
- 部署 `deploy.yml` 在 push main 时触发,`PODDECK_BASE=/poddeck/`。
- **`@slidev/client` v52.14.2 导出 `useNav()`**,返回 `{ currentSlideNo: ComputedRef<number>, go(no), total, ... }`(已在 `node_modules` 验证)。组件内可 `import { useNav } from '@slidev/client'`。
- **`import.meta.env.BASE_URL`** 在 deck 内 = `--base` 值(本地 `/episodes/<id>/`,生产 `/poddeck/episodes/<id>/`)。
- **156 个 `episodes/*/global-bottom.vue` + 模板共 157 个文件 byte 完全一致**(单一 md5),可安全批量覆盖。
- Slidev `routerMode: hash` 在当前版本文档查不到 → **不依赖它**;改用我们自己的 `#slide=N` hash + `useNav().go()`,确定可行。
- 现有 `landing/public/404.html` 已保留 hash/search,只丢路径里的页号——本方案不需要它参与(见下)。

## 方案

### 单一核心文件:`global-bottom.vue`

这个组件被注入到**每一页**,是分享按钮 + deck 内计数 + hash 还原的唯一载体。重写它(保留现有"← PodDeck"返回按钮),新增 `<script setup>`。新 deck 自动继承(scaffold 自模板),所以**无需改生成 prompt**。

### A. 分享按钮

UI:在返回按钮旁(右上或右下角)加一个分享按钮(图标 + "分享")。点击:

1. **取页号**:`nav.currentSlideNo.value`(来自 `useNav()`)。
2. **取链接**:`location.origin + import.meta.env.BASE_URL + '#slide=' + 页号`。
   例:`https://kvenux.github.io/poddeck/episodes/<id>/#slide=7`
3. **取文本**:读当前可见 slide 的 `innerText` → 去掉 chrome(返回/分享按钮、角标计数)→ 折叠空白 → 截断 ~200 字 + 省略号。**选择器在实现时对真实 build 出的 DOM 验证后钉死**;取不到则回退 `document.title`。
4. **组合 payload**:`title`=`document.title`(deck 标题);`text`=页文本;`url`=步骤 2。
5. **交付(极简)**:
   - 若 `navigator.share` 存在 **且** 粗指针(`matchMedia('(pointer: coarse)').matches` 或 `navigator.maxTouchPoints > 0`)→ `navigator.share({ title, text, url })`,catch 掉用户取消。
   - 否则 → `navigator.clipboard.writeText(text + '\n\n' + url)` + 弹一个 1.5s 的 toast「已复制到剪贴板」。剪贴板需 secure context:GH Pages(HTTPS)、`localhost` 均满足。

### B. 分享链接在 GH Pages 上正确跳到那一页

- 用 `#slide=N` hash,**不碰 404.html / build / 服务端**:
- 冷启动 `/episodes/<id>/#slide=7` 的**路径部分是 deck 根**,GH Pages 有 `index.html` → **不会 404**;`#slide=7` 纯客户端。
- **还原**:`global-bottom.vue` 的 `onMounted`(必要时 `nextTick` / 等 router ready)读 `location.hash`,匹配 `^#slide=(\d+)$` 则 `nav.go(N)`,随后 `history.replaceState` 清掉 hash。冷启动会极短闪一下第 1 页再跳到第 N 页(可接受)。
- 副作用红利:分享链接是 hash 形式 → 冷启动 pathname 永远是 deck 根 → 不蒜子 page_pv 每个 deck 干净不碎片化。

### C. 不蒜子计数

**端点策略**:用一处可换的常量 `const COUNTER_SRC = '...'`。默认选当前可达、与不蒜子**同 ID** 的后端(实现时对 `#busuanzi_value_site_pv / site_uv / page_pv` 这套 ID 做可达性验证后钉死;候选:官方 busuanzi 或 busuanzi 兼容的可靠镜像)。所有计数 DOM **默认 `visibility:hidden` 或不占位,拿到数字才显示**——服务挂掉时页面无破洞、无"Loading…"。

- **C1 站点总访问(landing,公开核心)** — `landing/src/layouts/Base.astro` footer:
  - 注入 `<script defer src={COUNTER_SRC}>`(配 `is:inline`)。
  - 文案:`本站总访问 <span id="busuanzi_value_site_pv"/> 次 · 访客 <span id="busuanzi_value_site_uv"/> 人`,包在 `#busuanzi_container_*` 里默认隐藏。
- **C2 deck 浏览计入总数** — `global-bottom.vue` `onMounted` 注入同一 `COUNTER_SRC`(全局只注入一次,用 `document.getElementById('__poddeck_counter__')` 之类的 guard 防重复)。脚本加载即对当前 pathname(=deck 根)计一次 → 计入 site_pv 总数。
- **C3 deck 角落显示本 deck 浏览数(默认开启,轻量)** — 在 `global-bottom.vue` 右下角放极轻的「👁 <span id="busuanzi_value_page_pv"/>」,默认隐藏,有值才显示。因 hash 形式分享,page_pv 干净。

### 批量同步

- 新版写入 `episodes/_templates/global-bottom.vue`。
- 新增 `scripts/sync-global-bottom.ts`:把模板 `global-bottom.vue` 覆盖到所有 `episodes/*/global-bottom.vue`(以后改模板可复用)。先校验目标当前与旧模板一致(已确认 157 文件同 hash),覆盖前打印将改动的文件数。

## 不改的东西

`404.html` · `build-all.ts` · `deploy.yml` · `scripts/prompts/*`(生成 prompt)· 各 deck `slides.md` 的 frontmatter · Slidev 配置。

## 验证(必须执行)

1. `pnpm run build` 成功;改后随机抽 1-2 个 deck `shouldBuildEpisode` 触发重建。
2. `npx serve dist -p 4173`,用 playwright/headless 浏览器:
   - 打开某 deck → 点分享(桌面):剪贴板含"页文本 + 正确 `#slide=N` 链接";toast 出现。
   - 模拟 coarse pointer + stub `navigator.share` → 验证走系统面板分支。
   - 新标签**冷启动**分享出的 `#slide=7` 链接 → 落在第 7 页(不是第 1 页)。
   - landing footer:不蒜子数字出现(或服务不可用时优雅隐藏,无破洞)。
   - deck 角落:`👁 N` 出现或优雅隐藏。
3. 按 CLAUDE.md:对改动的 deck `npx slidev export --format png` 抽查 cover + 一页内容页,确认分享按钮 / 角标**不遮挡内容、不溢出**。
4. 验证 `scripts/sync-global-bottom.ts` 后 157 文件再次同 hash(=新模板)。

## 风险与回退

- **不蒜子服务不稳**:已用可换常量 + 优雅隐藏兜底;真彻底不可用,删 footer 文案即可,不影响站点。
- **文本提取选择器随 Slidev 版本漂移**:实现时钉死 + 回退 `document.title`;升级 Slidev 时纳入回归抽查。
- **`nav.go()` 与 router ready 竞态**:`onMounted` + `nextTick`,必要时 watch `currentSlideNo` 就绪后再跳。
- **覆盖 156 个 deck 的 `global-bottom.vue`**:它们当前 byte 一致,sync 脚本覆盖前会报数;若未来某 deck 自定义过该文件,需先排除(当前无)。
