---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI predictions — Dan Shipper'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 预言：工作的未来

### Dan Shipper · Every CEO

<div class="mt-6 text-sm opacity-70">
Lenny's Podcast · with Lenny Rachitsky
</div>

<div class="mt-10 text-xs opacity-50">
"上次他预测对了 Claude Code"——这次他押的是 Codex、超级 Agent、SaaS 的反向胜利<br/>
一年后我们对账：May 2027 见。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一年前他赌对了
Dan 在去年这档节目里押 Claude Code 用于"非编程工作"，结果一年间整个行业跟上来——所以他这次的赌注也值得听。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 三组预言
三大板块：① 工作"怎么做"会变；② 工作"形态"会变；③ 哪些角色会赢。一年后回来对账。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Codex 超过 Claude Code
这是最反直觉的翻转——这位最早期的 Claude Code 布道者，现在每天泡在 Codex 里。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### SaaS 没死，反而要起飞
"I would buy SaaS stocks right now." Agents 不会取代 SaaS——会把 SaaS 用量推到天上去。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### PM 和设计师是最大赢家
不是工程师不写代码后失业——而是 PM 和 full-stack 设计师终于可以一个人把东西做出来。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 自动化是个谎言
Every 公司一年内员工翻倍。"Every agent needs a human."

</div>

</div>

---

# 上一期的押注：Claude Code

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 一年前的 hot take
当时 Claude Code 还几乎没人讨论。Dan 提出了一个反直觉的论点：

非工程师也可以用它——整理硬盘、修文件、做杂活。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 一年后的现实
- Anthropic 的"非技术 Claude Code"成了 Anthropic 这一年增长的主轴
- Dan 的同名博客成了他第二受欢迎的文章
- OpenAI 跟上 Codex 也在做同样的事

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50">
"You were so unbelievably right about this. It's just like unreal what has happened since then." —— Lenny
</div>

<div class="mt-4 text-sm opacity-70">
所以这一期：我们让他再赌一次。一年后回来对账。
</div>

---
layout: two-cols
---

# 三组预言

Dan 把整场对话切成三块。每一块都有具体的、可在一年后验证的赌注。

**#1 工作怎么做** — 工作的物理表面会迁移到 Codex / Claude 这种 agent shell 里。

**#2 工作的形态** — Pull Request 爆炸、forward-deployed engineer 兴起、AI 写作不再禁忌。

**#3 谁会赢** — PM + full-stack 设计师 + "ride the model" 的人。

<div class="mt-4 text-sm opacity-70">
贯穿三块的同一根线：<strong>每个 agent 都需要一个真人</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-pillars.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 预言 #1：工作会分叉成两种

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg bg-blue-50 border-l-4 border-blue-500">

### 形态 A：Slack 里的超级 Agent
公司级别的"一个 agent，整个公司用"。

Shopify 有 (River)。Ramp 也有了。

你在 Slack 里 @ 它，它去查、去做、去答。

<div class="mt-3 text-xs opacity-70">
代表了"async delegation"——你扔出活，它后台处理。
</div>

</div>

<div class="p-5 rounded-lg bg-green-50 border-l-4 border-green-500">

### 形态 B：Codex / Claude 作为工作 OS
"Most of the work that you do is actually going to happen on your computer in an environment like Codex or Claude Co-work."

邮件、文档、研究、代码——全都在这个 agent shell 里。

<div class="mt-3 text-xs opacity-70">
代表了"live collaboration"——你和 agent 一起在同一份活上。
</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70">
**作者注**：这两种不是替代关系，是并存。Dan 的论点是一年内大多数人会同时拥有这两条工作路径。
</div>

---

# 形态 A：从"个人 agent"翻转到"超级 agent"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Dan 一开始押的是个人 Agent
受《黄金罗盘》影响，他觉得每个人都会有自己的"灵魂宠物"——一个反映自己的 agent。

Every 内部全员上线了 self-hosted 的个人 agent harness。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 半年后他完全翻转
个人 agent 太需要维护了——SSH、修 bug、添 context。大多数人**没时间也没意愿**做这件事。

赢的是 super-agent：一个 forward-deployed 工程师维护，全公司共享。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50">
"In order for an AI agent to be useful right now, it really needs a human who cares about it."
</div>

<div class="mt-3 text-sm opacity-70">
切断这个连接的瞬间，agent 就不再有用了。
</div>

---
layout: two-cols
---

# 形态 B：Codex 成为工作 OS

Dan 这一年发生的核心变化：他在 Codex 里**写文档、回邮件、做研究、查分析**——而不是开 Notion / Gmail / Linear。

**关键机制**：Codex 自带 in-app browser。你打开 Proof（他自己写的 markdown 编辑器），Codex 在边上"看着"你写、可以接手、可以查资料、可以用你计算机上一切。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"Take the AI agent that you use all the time on your computer and put a browser in it so it can see everything you're doing."
</div>

<div class="mt-3 text-sm opacity-70">
不是把 AI 嵌入 SaaS——是把 SaaS 嵌入 AI。方向反了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Inbox Zero 十天：一个具体例子

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dan 的工作流
1. 用 Cora（邮件 agent）把所有邮件拉到一个页面
2. 在 Codex 里打开这个页面
3. **对着每封邮件口述**："去研究这个"、"把过去 4 年的相关文档收齐发给律师"
4. Codex 直接去做

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 效果
> "I've been in inbox zero for like 10 days straight now which if you know me is crazy."

以前会拖延的事情现在不拖延了——因为做这事的成本降到了"对着屏幕说一句话"。

</div>

</div>

<div class="mt-6 p-3 italic border-l-4 border-orange-500 bg-orange-50 text-sm">
关键不是 Codex 多聪明——是工作流"从打开 N 个 tab"变成了"对着一个 agent 监工"。这是工作的物理形态在变。
</div>

---

# CLI 时代结束了

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 当 Claude Code 起飞时
大家以为：**"CLI 才是 agent 的真形态！终端归来！"**

Dan 自己也以为 CLI 是关键。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 一年后的看法
> "We speed ran the CLI era. It was nice while it lasted, but I think CLIs are over."

> "We made GUIs for a reason."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">

### Dan 看到的实际情况
Every 内部"绝大多数的技术员工都不再以 CLI 作为主工作界面"——他们要么在 Codex、要么在 Claude Code、要么在 Cursor 里。

CLI 不会消失。它会回到工具栏里，不再是工作的入口。

</div>

---
layout: two-cols
---

# SaaS 反转：SaaS 跑在 Agent 里

如果 Codex 是工作 OS，那 Proof / PostHog / Notion / 任何 web 应用都变成了**它内部浏览器里的一个 tab**。

**关键**：当 agent 调用 SaaS，用的是**你的** token，不是 SaaS 的 token。

所以 SaaS 的边际成本结构反而**变好**了：

- 不需要塞一个自家 LLM 进去烧 token
- 用户自带 AI 上门
- SaaS 公司专注做"人 + agent 一起协作的好工具"

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 italic text-sm">
"You don't need to think about having an AI surface that's primarily going to be the thing that users use."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "SaaS 末日是愚蠢的"

<div class="mt-6 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50">

"I think the SaaS apocalypse is dumb. I would buy SaaS stocks right now."

</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 反直觉论点 1
Agents **增加** SaaS 用户数——不是减少。每个 agent 都在替它的主人下单、查 dashboard、提 PR、发邮件。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 反直觉论点 2
Every 自己 SaaS 支出 **年同比上升**——尽管全员是 AI maxi。"我们不会 vibe code 每一个小东西。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 反直觉论点 3
SaaS 公司的 margin 反而**稳了**——因为不必自己出 LLM 的 token 钱。

</div>

</div>

<div class="mt-6 text-sm opacity-60">
"Not investment advice." —— Dan, with a wink.
</div>

---

# 两个 Agent 比一个好

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 直觉错觉
"我和一个 super-smart agent 对话——这就够了。"

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 实际更强的形态
**你**用 Codex；Codex 去和**另一个 agent** 对话；两个 agent 之间互通 context。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">

### Dan 的例子
Every 卖一款"hosted self-managed agent"。新用户 onboarding 不是填表单——而是：

1. 你把一段 prompt 粘进 Codex
2. Codex 把你过去几个月的活动、偏好、目标全部告诉那个 agent
3. 那个 agent 配置好就给你了

**因为 Codex 早就知道你是谁、想干嘛**——比任何 onboarding 表单都强。

</div>

<div class="mt-4 text-sm opacity-70">
关键洞察：人对 agent 表达 context 很慢；agent 对 agent 表达 context 飞快。
</div>

---

# 预言 #2：工作"长什么样"会变

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Pull Request 爆炸
非技术员工开始提 PR——咨询、运维、编辑都在提 PR。技术员工的角色变成"判断哪些 PR 该 merge"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Forward-deployed Engineer 兴起
新职业：维护公司 agent 的工程师。Dan 说"很真"。Every 内部已经设了这个角色。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 复审 > 创作
"data science friend 的整个团队现在大部分时间在复审别人写的 bad data science"。这是普遍现象。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### AI 写作不再禁忌
内部规划、邮件、策略文档——直接 AI 起草。**只要你站在它后面、愿意为每一行背书**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 通才更值钱
PM 写代码、工程师做设计、市场上线产品。一段时间内"角色边界很乱"，但通才反而更能跑通整条链。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 销售 / 中层 / CEO 反而变化小
角色越靠"人对人"和"上层判断"，越不被工具流革命。CEO 反而是高风险区——但**容易自己骗自己变化不大**。

</div>

</div>

---

# Pull Request 爆炸：Pete 的故事

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500">

### 在 self-hosted agent harness 这个项目上
Pete（主维护者）**每天收到上千 PR**。

他的应对方式：spin up 50,000 个 Codex 实例并行筛——最后 merge 大约 1,000 个。

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 第一性变化
代码不再稀缺。**判断**才稀缺。

"Should this go into the codebase?"  
"Does this fit with what else we've built?"  
"What do we delete to keep the whole coherent?"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 反面例子：Anthropic
Dan 注意到 Anthropic 在 Claude Code 上**做了很多删减**——保持产品不臃肿。

加东西容易，知道什么不加、什么删——这成了核心技能。

</div>

</div>

---

# Every Agent Needs a Human

<div class="mt-6 p-6 text-2xl italic border-l-4 border-red-500 bg-red-50">

"Automation is a lie. Every agent needs a human."

</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据点
Every 公司从 15 人涨到 30 人——**一年翻倍**。"对一家 AI maxi 的公司来说反直觉。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 类比 / 框架
人和 agent 的关系**像经理与员工**——"managers actually spend a lot of time working"，不是躺在沙滩上。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Dan 的悖论
> "We have so much automation, so much AI, and I also work way more."

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic">

"I'm simultaneously extremely AI pilled and very bullish on humans."

</div>

---
layout: two-cols
---

# 高级工程师基准：GPT-5.5 跳了 30 分

Dan 自己造了一个 benchmark，叫 **Senior Engineer Benchmark**。

起源：他用 vibe code 写了 Proof，结果上线后崩了——还崩出了 **"vibe coder elbow"**（"got bursitis on my elbow"）。

最后请了两位 senior engineer 各自独立重写，作为"满分参考答案"。

**结果**：
- 旧模型们 **~30/100**
- GPT-5.5 **62/100**——一次跳了 30 分
- 人类 senior engineer **high 80s–low 90s**

GPT-5.5 是唯一一个"敢"把代码全砍掉重写的——其他模型只会"在边缘打补丁"。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但是…… benchmark 升完也不等于失业

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### Benchmark 看上去能预测取代
Senior Engineer Benchmark 从 30 → 62。再来一年大概率破 80。

很容易得出结论："那 senior engineer 就完了。"

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### Dan 的反驳：benchmark 升的是**可框架化**的部分
"Benchmarks rise on problems that we've framed, that we can articulate, that we can score."

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500">

### 真实的 senior engineer 在做什么？
他不会接你"修 5 个 bug"的请求——他会**反过来跟你说**：

> "This is a piece of [bleep]. This guy doesn't know what he's doing. We're going to have to like actually rewrite a lot of this and it's going to be hard and risky."

这个"重新框架问题"的能力 —— benchmark 永远抓不到。

</div>

---
layout: two-cols
---

# 模型的本质：把昨日的能力商品化

> "What models do in general is they make yesterday's human competence cheap."

模型摄取所有已有的人类能力，再把它**便宜地、广泛地**释放给每个人。

**于是发生的事**：
1. 突然人人都会做这件事
2. 大家都用默认设置 → 输出全长一样 → "slop"
3. 它**商品化**了，价值掉到地板
4. 人类则跳上**新的一层**——把这些已经冻结的能力当原材料，去造下一个新东西

**所以 model 升级 ≠ 人类失业。**
每升一格，前沿就上移一格。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 写作不再禁忌：Notion Agents 做年度规划

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Every 怎么做 2025 年底季度规划
1. 顶层公司 strategy 喂给一个 Notion agent
2. 每个员工和这个 agent 对话
3. Agent 问：去年怎么样？今年的目标？指标？跟整体怎么对齐？
4. Agent 反推、追问、push back
5. 最终生成每个 team 的"plan + strategy"文档

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dan 收到的成品
> "Incredibly good AI generated strategy reports or quarterly plans for each part of each team."

然后他作为 CEO 主要做：
- 判断哪些 team 需要互相对齐
- 标出"质量低 / 质量高"
- 注意哪些 team 没意识到自己该协作

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
但是——"if you send me an AI generated document and you have no idea what's in it, like big no-no. Not allowed to do that."<br/>
**站在你的 AI 后面**，是新规则。
</div>

---

# 哪些角色变化最少？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 变化大的（已经变了）
- **Engineering**：100% 的代码经过 AI
- **Design**：传统"design process"几乎没时间走完
- **PM**：不写 PRD 了，直接发 ship
- **Data Science**：大部分时间审别人的烂分析
- **Customer Support**：完全重组

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 变化最小的
- **Sales**：核心还是"人对人"
  - AI 帮 BDR / 找潜在客户 / 调研
  - 但成交那一刻还是真人
- **CEO / 中层经理**：
  - **能装**作变化不大
  - "但其实你必须自己上手，公司只能走到 CEO 走到的地方"

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
Dan 招过一个 head of L&D：在 Codex 里随口说"我感觉 General Assembly 出来的人现在重新 AI-pilled 会很合适"——Codex 自己找到了一位前 General Assembly 讲师、follow Dan 的 Twitter、当晚就约上吃饭了。
</div>

---

# 预言 #3：谁会赢——PM 与全栈设计师

<div class="mt-6 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50">

"I am super super bullish on PMs and full-stack designers."

</div>

<div class="mt-6 text-sm opacity-70">
为什么是这两类？因为模型把<strong>执行</strong>变便宜了，于是<strong>判断力</strong>和<strong>审美</strong>成为唯一的稀缺资源——而这两个角色恰好以这两样东西吃饭。
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### PM 拥有
- 用户感知
- "下一步该建什么"的判断力
- 在一堆反馈里抽出主线的能力

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 全栈设计师拥有
- 审美 + 交互细节
- 终于不用再求工程师配合
- 自己就能从想法到 PR

</div>

</div>

---

# Marcus 的故事：PM 突然能一个人扛产品

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 背景
Marcus 之前在 Axios 做 PM，把那里的写作产品带到了数千万 ARR。

然后他**辞职一年，专攻 AI**——主要用 Cursor，现在主要用 Claude Code。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在
他在 Every 一个人负责 Spiral（写作产品）。Dan 说"a year ago we never could have hired him to do this job"。

> "He ships faster than almost anyone on the team."

PM sense 配上轻度技术 = 极强战斗力。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">

### 为什么这个组合"危险"
- **轻度技术**就够 —— 知道 database migration 是什么、能读代码就行
- **PM 的 spiky product sense** —— 模型代替不了
- **不需要协调一整个团队** —— 直接自己 ship

Dan 的判断：任何"AI-pilled 的 PM"未来都会变得这种状态。

</div>

---

# 全栈设计师：用创意对抗 slop

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### 设计师过去的痛
"我设计了这个超漂亮的交互，工程师不想做 / 做出来不对 / 排期到三个月后……"

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 现在
> "They don't need to hand it off as much. A lot of times they just make pull requests and it's like the thing is built and that's it."

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500">

### 为什么这件事会越来越重要

> "Creativity, it just feels like it's going to be more and more valuable to stand out from all the slop that people are shipping and launching constantly."

vibe code 的产物**看上去都长一样**——同一个模型、同一套默认 UI。设计师的"创造性差异化"反而成了护城河。

</div>

<div class="mt-3 text-sm opacity-60">
**作者注**：Lenny 提到一个反向数据——designer 招聘市场过去几个月并没增长。这个预言一年后能不能兑现，是值得对账的点。
</div>

---

# AI 工作末日不会来，但你必须改变

<div class="mt-6 p-6 text-2xl italic border-l-4 border-blue-500 bg-blue-50">

"The AI job apocalypse is not really a thing."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Dan 不否认的事
公司在重组、裁员——但他说很多其实是"过度招聘后的常规调整"，AI 只是个**好用的对外说法**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Dan 否认的事
"大规模失业"叙事。模型的结构性效应不会驱动这件事。

</div>

</div>

<div class="mt-6 p-5 bg-green-50 border-l-4 border-green-500">

### 但你必须做一件事
> "The only thing you need to do is **ride the models**."

每次新模型出，你都拿你最关心的事去**重新试一遍**。  
"Turn the rock over again"——也许半年前不行的事，这次就行了。

</div>

---

# AI 的边缘在哪？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 直觉认为
AI 的前沿在 **SF**——那里有 Anthropic、有 OpenAI、有最早拿到内测的人。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Dan 的反驳
> "I think the edge of AI is wherever AI meets like a real human doing something."

SF 的人**造**模型，但不**用**模型解决真实生活问题。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500">

### 含义
- Dan 在 Brooklyn，但他**自认领先 SF**——因为 Every 内部把模型用在了所有事上
- 不管你在哪、做什么，**你就是 AI 边缘的一部分**
- 新模型一出，你都是"全世界最早发现它能干啥"的几个人之一

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"If IBM had invented AI, it would not be like this. It would be like a bajillion dollars and only the top companies could use it."
</div>

---
layout: two-cols
---

# 边缘的几何形状

SF 是"造"模型的人。但是**模型的能力空间**比造它的人理解的更大——大很多。

边缘 = 两个圆相交的地方：
- **左圆**：会造模型的人
- **右圆**：知道一个真问题、且愿意把模型按上去试的人

只要你在**右圆**里，你就处在前沿。

模型变成了一种**广泛分发的力量**——不取决于钱、不取决于你在哪个公司。  
"Intelligence too cheap to meter"——SV 把这当默认目标了，这不是默认。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Ride The Model：具体怎么做

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 把全部工作流试一遍 Codex / Claude Code
邮件、文档、研究、调度——挑一个最痛苦的工作流，先全搬过去。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### "Reach test"
每天早上自然伸手去拿的工具——才是真正进入你工作生活的工具。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 新模型出，立刻"翻石头"
把你最关心的那个**仍然做不到**的任务，每次新模型出都再试一遍。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Find your "moment of joy"
"哇 AI 居然替我做了这个"——找到这个瞬间，你就停不下来了。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 让你的 SaaS 准备好被 agent 用
建公司？让你的 web 应用对 agent 友好——CLI、HTML 友好、状态可见、可回滚。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 公司 IT 不让用？业余时间用
"Some companies handicap their employees from even doing this."——别等它们解禁，自己玩。

</div>

</div>

---

# 闭幕的小提醒：从"空间感与力量感"出发

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 italic">

"When you're dealing with stuff that's hard, what you want to do is be able to relate to it from a position of spaciousness and strength."

—— Rob Brezsny（Dan 引用）

</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 常见反应
"AI 会让我失业，我必须马上学 ××、追每一个发布、做每一件事——FOMO 驱动。"

恐惧驱动学不深，也容易放弃。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dan 推荐的姿态
> "The best way to actually figure out interesting useful things to do with AI is to do something enjoyable."

从"我害怕落后"换成"我想玩玩看"——更可持续，也更可能发现真东西。

</div>

</div>

<div class="mt-6 text-sm opacity-70">
**一年后的对账日**：May 2027。预告片到此为止。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">每一句都来自 transcript 原文：</div>

<div class="space-y-1.5 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Most of the work that you do is actually going to happen on your computer in an environment like Codex or Claude Co-work."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 预言 #1 的总框架</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"We speed ran the CLI era. It was nice while it lasted, but I think CLIs are over."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 最快的"上山下山"</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"I think the SaaS apocalypse is dumb. I would buy SaaS stocks right now."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 最反直觉的押注</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Automation is a lie. Every agent needs a human."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 为什么 Every 一年从 15 人涨到 30 人</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"What models do in general is they make yesterday's human competence cheap."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 为什么 benchmark 升 ≠ 人类失业</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"I am super super bullish on PMs and full-stack designers."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 预言 #3 的核心</div>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I think the edge of AI is wherever AI meets like a real human doing something."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 给每一个不在 SF 的人</div>
</div>

</div>

---
layout: end
---

# Ride the models.

<div class="mt-6 text-lg opacity-80 italic">
"I'm simultaneously extremely AI pilled and very bullish on humans."
</div>

<div class="mt-10 text-xs opacity-50">
Lenny's Podcast × Dan Shipper (Every) · 一年后见: May 2027
</div>
