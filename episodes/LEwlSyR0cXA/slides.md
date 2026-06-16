---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "GitHub's Agent Era — Kyle Daigle"
info: |
  Kyle Daigle (COO GitHub, CMO Microsoft Developer) talks 14× commit growth,
  200M developers, the scaling crisis nobody saw coming, and what Copilot
  becomes after coding agents win.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# GitHub 的 Agent 元年

## 14 倍 commit · 2 亿开发者 · Copilot 的下一幕

<div class="mt-10 text-lg opacity-80">

Kyle Daigle — COO @ GitHub · CMO @ Microsoft Developer

</div>

<div class="mt-3 text-sm opacity-60">

Latent Space Podcast · 与 Sean Wang 对谈

</div>

---

# 这期为什么值得听

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 内部 AI 工作流
不是"写博客帮我"，而是把 **CLI 发到每个非技术员工手上**，向后追述本周做了什么

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 14 倍增长的代价
1 年 10 亿 commit 涨到周 2.75 亿，**MySQL 1** 顶不住了

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Copilot 的转身
代码补全 → fine-tuning →"被模型 Sherlock 了" → 统一 SDK + 多形态 harness

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 信任是社会问题
PR、stars、vouch system —— 工具能解决吗？Kyle 说**最后还是人**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 现在的 AI 太"近视"
背景里所有 agent 都在跑，**但对你之外的世界一无所知**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 操作系统得重新设计
"不再只是你一个人在用它了"——给 agent 留下沙箱位置

</div>

</div>

---
layout: two-cols
---

# Kyle 是谁

13 年泡在 GitHub。从写 webhooks 的工程师，到 Microsoft 全 Developer 的 CMO。

- **2013 加入**：写 webhooks、API、平台层
- **2018**：作为工程负责人发布 **Actions v1**
- **后 Microsoft 收购**：转向业务侧，做 COO
- **现在**：COO @ GitHub + CMO @ Microsoft Developer

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm rounded">

"I joined GitHub as a developer. I built webhooks and worked with teams building the API, built the platform layer."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 他的 commit 图

主持人翻出 Kyle 的 GitHub contribution 图：2014 年高峰，然后变管理层、commit 沉寂多年，**最近一年又疯狂亮起来**。

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2013-2017
**Dev era**：每天写代码

</div>

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-400">

### 2018-2023
**Management era**：commit 几乎归零

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2024-now
**AI era**：又一次绿油油

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic rounded">

"What you see there is me really getting back to coding thanks to AI. … some of it's writing software, a lot of it is like connecting a ton of different data sources to help me out."

</div>

---

# 他给非技术员工发 CLI

GitHub 内部用 AI 的方式：**不让任何人改变工作习惯**。直接把 CLI 发下去，让 AI 自己读所有人写过的东西。

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 给所有人 (包括非技术)
- 一个 CLI 工具
- 一组共享的 skills
- 只读权限：GitHub / Teams / Slack / email

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 然后 AI 自己来
- 翻所有 PR、消息、transcript
- 拼出"本周做了什么"
- 写回 GitHub issues 或 discussions
- 继续对话

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic rounded text-sm">

"I don't want to have to teach you a tool. I don't want to have to teach you something new. … we're just giving it access to read about everything that we're writing."

</div>

---

# 反直觉：最有用的是"向后看"

大多数人想 AI 帮自己**做下周的事**。Kyle 发现真正提效的是**回看上一周**。

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 italic rounded">

"I find AI in like what most of this … is actually like less building forward. It's actually like a recursive loop backwards. I'm always looking at what had happened first."

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 翻 PR
本周合了什么

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 翻消息 / transcript
团队聊了什么

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 翻 Obsidian
我自己想过什么

</div>

</div>

<div class="mt-5 text-sm opacity-70">

**作者概括**：LLM 在"模式识别 + 回看总结"上比"前瞻规划"擅长得多。这个见解适配非技术 leader 尤其有效。

</div>

---
layout: two-cols
---

# Mega Skill 时代结束了

社交媒体上每天都有人发"我做了个 mega skill 包揽整个工作流"——Kyle 说他们团队**反着来**。

- 一个 skill 只做**一件小事**：找 PR、抓 Slack、读 Obsidian……
- 把它们当 **Lego 积木**串起来
- 说明书（指令）就是英语描述
- 一行响应不对？直接打开 skill 改

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm rounded">

"We're ending the era of these like massive beautiful perfect skills that are just like not any of those things."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./legos.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 mega skill 必死

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### Mega skill
- 一个 skill 包揽多步工作流
- 几周后世界变了想改它
- 哪里都不敢动 → **screwed**

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Micro skill (Lego)
- 一个 skill 只识别"最重要的营销信息"
- 输入变了？只改这一块
- 拼装靠英语描述，不靠代码

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 italic rounded text-sm">

"Weeks go by, months go by, things change and you want to tweak your mega skill and you're screwed. … now we're really just talking about the Legos we're using and just letting the instruction book be something we're all putting together."

</div>

<div class="mt-3 text-xs opacity-70">

主持人 Sean 类比 Postel's law：be liberal in what you accept, strict in what you output。一个 skill 就是一个"原子能力"。

</div>

---

# 同一个词在不同角色里不一样

"Summarize"对工程师、对营销、对销售、对分析师——产出**完全不同**。

<div class="grid grid-cols-4 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 给 analyst
要数据、对比、引用

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 给客户会
要解决方案、行动项

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 给营销
要叙事、金句、版位

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 给销售
要 ROI、价格点

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 italic rounded text-sm">

"It's the difference between someone reading this and going, did AI make this? You know what I mean? Or like this makes total sense, and I would expect this when I'm giving a briefing to Gartner or like whatever else."

</div>

<div class="mt-3 text-sm opacity-70">

**作者概括**：所谓 "matrix mess" —— 每个职业的 skill 都是基础原子能力 × 该职业的偏好的排列组合。

</div>

---

# 整套 slide 全是 AI 做的，没人发现

Kyle 内部分享的故事。每年 revenue planning 都要做一大堆 PPT。这次他**全用 AI 做**，然后没告诉任何人。

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

**他做了什么**：

- 写了 skill 让 AI 把 Obsidian 笔记 + 历史规划数据进 SQLite
- 写了**第二个 skill** —— 让 PPT 风格"明显不是 AI 做的"
- 直接发给 CRO、CFO 和他们的团队

</div>

<div class="mt-5 p-5 bg-green-50 border-l-4 border-green-500 italic rounded">

"I built a skill to make it look very much not AI driven. … not pretty, just like very clearly not AI."

"Never came up once it was AI generated."

</div>

<div class="mt-4 text-sm opacity-70">

要点：用 AI 不等于看起来像 AI。让产物服务于**沟通效率**，而不是炫技。

</div>

---

# 这是 ex-dev leader 的黄金时代

Sean 提出的命题，Kyle 同意但加了一层：不只是"会代码"，是"会找模式 + 懂业务 + 现在又能 ship"。

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 你过去十年练的
- 找模式
- 解人的问题
- 推业务前进的判断力

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 给你接回的
- 实际写代码、做应用
- 不需要从零学新栈
- 周六起 15 个 agent 边带孩子边干

</div>

</div>

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 italic rounded text-sm">

"The secret has always been your ability to identify patterns and solve problems. … now I have access to Git and write code, I'm now applying that pattern finding and problem solving."

</div>

---
layout: quote
---

# "I can crank up 15 agents on Saturday while my kids are doing lacrosse."

<div class="mt-6 text-base opacity-70 not-italic">

—— Kyle Daigle，开篇 cold open

</div>

<div class="mt-4 text-sm opacity-60 not-italic">

这是整期访谈的精神核心：creation 的感觉回到 dev 身上。"It's very hard to replicate that in most other senses."

</div>

---

# 简短的 GitHub 大事记

不是 Kyle 主导讲，但他亲历了每个节点。

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2008 / 2018
GitHub 创立 / Microsoft 收购

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Oct 2018
Kyle 作为 eng lead 发布 **Actions v1**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 收购潮
**npm / Dependabot / Semmle** 等

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 早期遗产
Hookshot、GitHub services（任意 Ruby 在我们服务器上执行）、Pages

</div>

</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 italic text-sm rounded">

"Back in the old days … we had a repository that was Ruby code and you could write any Ruby code in there and then we would execute that on your behalf as a service. And of course no containers because it was 2014."

</div>

---

# npm：维护互联网的合同

npm 一直在 scale 的边缘。GitHub 收购它**不是为了变现，是为了不让它倒**。

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Kyle 的视角
"npm was basically powering the internet then **and way more so now**"

→ keep it running. 投资 backend、manifest、安全。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 真正难的事
**任何提升安全的动作都会 break 一堆人**：改 2FA、改 token、自动 invalidate 暴露的 token……

</div>

</div>

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 italic rounded text-sm">

"Every move that we make to make it more secure will break a lot of people. … any time we have a problem with GitHub where we make a change that makes us more secure but hurts there's like a snow day for developers or a really bad fire that they have to go put out."

</div>

---

# "Slop forks" / 让 AI 来 vendor

Sean 抛出的极端想法：干掉 npm 这个概念，**只发源代码**，让 coding agent 看着你的需要"AI vendor"进项目。

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Mitch Hashimoto 也在聊
依赖最小化、把源码 vendor 进来、自己负责。Kyle 提到 2013 年大家**就在 vendor 一切**——old is new again。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 但解决不了根本问题
"There's a million different ways in which we can convince an agent that this thing is like secure or not." → 静态分析 / 运行时测试还是要做。

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">

**GitHub 自我定位**：不强推。等开源社区自己**RFC 出共识**，再 cement 进平台。"That's why pull requests became standardized."

</div>

---

# Trust 是一个社会问题

Sean 问"Prompt request"、Mitchell 的 vouch system 这些方案够不够。Kyle 答：**最后还是人在信人**。

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 italic rounded">

"We're trying to codify trust. … right now when we are working in a flow where an agent writes code and another agent reviews code and then Kyle goes and looks at it, **the trust is kind of diffuse**."

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 大部分新工具
是 verification flows：让我看更多资料判断 PR 好不好

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 真正要解的
人对"我能信这段代码吗"的**社会感**——Mitchell approved / Kyle approved

</div>

</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 italic text-sm rounded">

"It's a social problem ultimately. It's a human problem to review it and agree, or you fully trust the tool and you're imbuing that tool with full trust."

</div>

---

# Stars 坏了吗？

Sean："时间到 100k stars 的速度史无前例，但谁知道几个真。"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Kyle 一半坦白
是有 spam / 刷星—— GitHub 用 AI 在 whack-a-mole

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但更多是**真的**
GitHub 已经超过 **200 million 开发者**（从 80M 涨上来），新人涌入，**zeitgeist 在 swarm**

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm rounded">

"Stars or commit counts … are all like not active social signals, they're passive ones that are ultimately gamifiable. And you may trust me but another open source maintainer may not."

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm rounded">

**Kyle 的方向**：与其找一个完美的 trust 数字，**给 maintainer 工具**让他们用 agentic workflow 自己定义规则（账户年龄、其他项目 PR 接受率、社交身份绑定……）

</div>

---

# 200M "开发者" 是个新东西

Sean 印象里"80 million developers"是老数字。Kyle 直接报：**over 200 million now**。

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

但这 2 亿里很多人**不是传统意义上的 developer**——他们注册账号、push 个小项目、给别人 star。GitHub 内部为此吵翻了：要不要细分？

</div>

<div class="mt-5 p-5 bg-green-50 border-l-4 border-green-500 italic rounded text-sm">

"I wasn't a developer when I started writing code. I made a like cloned the thing like seven years before I learned to code … people called me a fraud cuz I had a GitHub account."

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">

**Kyle 的立场**：在 software dev 的早期阶段做"门卫"是没意义的。"Everyone should be able to go and say this freaking app doesn't do what I want."

</div>

---

# 类比：换灯泡 vs. 拆电箱

Kyle 给孩子们想的不是"赶紧学编程"，是"对 software 不害怕"。

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 你可以做的
换灯泡 — change a light switch  
**(每个人都该能做)**

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 你不必做的
开电箱 — break into the breaker  
**(留给专业人)**

</div>

</div>

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic rounded text-sm">

"Everyone should be able to go and say this freaking app doesn't do what I want. I want it to work like this. … That I think is what's kind of kept us all connected with GitHub through the years."

</div>

<div class="mt-3 text-sm opacity-70">

这是 Kyle 13 年没走的真正原因——"home for all developers"的承诺。

</div>

---
layout: two-cols
---

# 现在的问题：14× 涨

2024 Universe 时 Kyle 说这是**史上增速最快的一年**。半年后，**一个月做完去年一年的量**。

<div class="mt-3 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
2025 年内：**1B commits**
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
4 月：**275M commits / week**
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
线性外推：年化 **14B commits**
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
而且**还在加速**（"it's still speeding up"）
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./growth-chart.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Sean："14× 没出大事的人也有。你为什么挂？"

Kyle 罕见地拆解出来——这是 infra 人会爱的部分。

<div class="grid grid-cols-2 gap-5 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Actions 侧
更多 agent → 更多 PR → 更多 build → 更多 CPU。**不只是 GPU**，CPU 也成了瓶颈。所以接 Azure dev compute。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 权限层
很多 permissioning 还在一个叫 **"MySQL 1"** 的库里 ——
"old GitHub-ers know what I'm talking about"。Vitess 当年就是从这个问题里诞生的。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 数据驻留 / on-prem
同样的服务还要在 GitHub Enterprise Server、单地数据驻留场景跑——**故障会跨多面板出现**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Monorepo 反转
业界十几年都在拆 repo，现在 **agent 时代反着来**——大 monorepo 越来越多，git infra 全要重做。

</div>

</div>

---
layout: two-cols
---

# 垂直 + 水平 = 不够，要"对角线"

历史上 GitHub 的 scale 二选一：

- **Vertical**：DB 加大
- **Horizontal**：加机器

现在两个**都不够**了——CPU/GPU 全球都紧，老服务里写死的"管道大小"假设也错了。

唯一的办法：**打开 10–15 年没动的服务，重写**。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./diagonal.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 单个 git push 都变大了

最容易被忽视的点：以前一个 push 大小是稳定的，**现在不是**。

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Push 变大
agent batch 提交 vs 人手敲

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### PR 变大
agent 生成的 PR 体量不同

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Repo 变大
monorepo 反潮流，blob 巨大

</div>

</div>

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 italic rounded text-sm">

"We built everything in a way that assumed in some ways that the size of the pipe of work was going to remain the same. There's just going to be more people coming through each of those pipes. But instead now in places where a git push was generally a certain size for example is **now no longer true**."

</div>

---

# Kyle 的"contract with the community"

为什么过去几周 GitHub 不停挂、又拒绝完全沉默？答案藏在 GitHub 的早期文化里。

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 italic rounded">

"It's our it's our uptime, it's down. … we weren't trying to hide anything from you in that. That well, that's our problem because you expect us to be up. And I think that's really baked into the core origins of GitHub."

</div>

<div class="mt-5 p-5 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**做法转变**：不再只默默修。修完之后让工程师**写出来 / 写博客 / 上播客讲清楚发生了什么**。

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic rounded text-sm">

"That's the contract that we want to bring back to the community."

</div>

---

# Copilot 状态：被模型"Sherlock"了

为什么 Copilot 看起来"沉了一段时间"？Kyle 自己讲：

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一年 (2021-22)
**code completion** 大爆发

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 接下来一年半
赌**fine-tuning**：通用 + 客户专属 fine-tune 模型，next-edit suggestions

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 然后
**模型自己爆发**式提升，Copilot 一边被"Sherlocked"，一边竞品涌入

</div>

</div>

<div class="mt-5 p-5 bg-purple-50 border-l-4 border-purple-500 italic rounded text-sm">

"We were on an era of going okay, we want to improve everyone's results, so let's focus in on fine-tuning because that'll give us these better results. **And then the models got better.** … models sherlocking us a little bit."

</div>

---

# Copilot 的新形状：一个 SDK，多个外壳

走出 fine-tuning 时代，GitHub 现在的策略：**统一一个 coding agent SDK + harness**，外面套各种产品形态。

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 入口
- Coding agent (PR-style)
- 新 **CLI**
- 新 **desktop app**（Kyle 现在的 daily driver）
- Cloud agents (fleet, autopilot)

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 底层共享
- 同一个 SDK / harness
- 多模型（含自家 post-trained）
- BYO-key

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm rounded">

**外延**：每个 GitHub issue 进来就丢个 agent 试一下；security remediation；文档对齐；多 agent 多任务 multiplex —— 都跑同一套底座。

</div>

---

# AI 现在太"近视"了

Kyle 对未来的判断：当前所有 AI 工具的根本毛病。

<div class="mt-5 p-5 bg-red-50 border-l-4 border-red-500 italic rounded">

"We're all still in such this like **hyper myopic era of AI** where the reality is … why is my coding agent even if it's all background agents background running not like losing all the context that's available to it across everything that I'm doing outside of coding."

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 现在的样子
工具尝试 capture → codify → recall。每个工具都自己造 context。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Kyle 想要的
"ambient AI"——webhooks v2 实现时，**所有 spec doc / email / 历史对话**自动进决策。

</div>

</div>

---
layout: two-cols
---

# 真正的 Copilot v2：Ambient

写代码不是单线任务。它依赖**周围人都在做什么、业务现在押什么、最近流行什么**。

把这些都灌进 agent 之前，coding agent 再强也"只是知道怎么写代码"，**不知道为什么写**。

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm rounded">

"It's all the context of the other team members, what the business is doing, what's popular right now. And I think that's this huge opportunity for us to go much broader than really really excellent coding agents."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ambient.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个有点吓人的转向

Sean 抛出来：在框架的意义上，是不是会出现 **inversion of control**？

> Don't call me, I'll call you. —— AI 告诉你该做什么，不是你告诉它。

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Nat Friedman 的实验
把 agent 接到摄像头上，让它"指挥他的 Uber"（Sean 复述）

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Kyle 的接受度
"I actually would love [it] to tell me to **drink water**. I don't know that I want it to be changing where my car goes."

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic rounded text-sm">

"It needs to have so much more information at its disposal for it to be helpful to me. And I still don't think we're anywhere near talking about AGI."

</div>

---

# Microsoft 为什么有 CVP 专门管"开源桌面 agent"？

Kyle 提到：**Microsoft 有一个 CVP（Corporate Vice President）级别的角色专门负责一个不属于 Microsoft 的开源 agent 项目**。Sean 问"why"。

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Kyle 的解释**：这个开源 agent 把"能访问你所有资源 + 能用电脑"这件事**做出了人设**。如果想把这种东西放进**企业工作环境**——

</div>

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Windows 沙箱
让我能用这个 agent 而不会被开除

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Cloud sandbox
托管 / 隔离的 agent 运行环境

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### OS 层让位
不能再假设"只有用户在操作系统"

</div>

</div>

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 italic text-sm rounded">

"I need to be able to use that … and not like get fired."

</div>

---

# 操作系统得重新设计

Sean 框架："Microsoft 是最早的 OS 公司——这是 AI 时代的 OS。" Kyle 接住：

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 italic rounded">

"Operating systems need to look different than they looked 5 years ago because **it's not just you using them anymore**."

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 不工作的
"我的 agent 进来要不要先给它建个 user account？" —— **doesn't work like that**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 要重看的
一直到 silicon / Azure 层：inference 类型、agent 的 compute 形状、agentic flow 的资源画像

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm rounded">

"We're at physics. … We're at physics problems."

</div>

---

# 工作时也要能"周末 vibe coding"

Kyle 在 Microsoft Build 想推的一个口号：

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 italic rounded text-xl">

"How I build on the weekend should be how I build at work."

</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 周末
vibe-code 一个 app → 直接 ship 到某 service

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Fortune 500 工作日
合规、安全审查、流程……拖死

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm rounded">

**对应的 Microsoft 押注**：Work IQ（M365 内的 context engine）+ Foundry IQ（跨已有存储的 context engine）——**不需要换工具**，连接即可。"Your boss is still not going to get fired and it's not going to turn it off because it's leaking all this private information."

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"I can crank up 15 agents on Saturday while my kids are doing lacrosse."
<div class="text-xs opacity-60 mt-1 not-italic">— 开篇，ex-dev leader 找回 creation 感的方式</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"It's actually like a recursive loop backwards. I'm always looking at what had happened first."
<div class="text-xs opacity-60 mt-1 not-italic">— 反直觉的 AI 用法：先回看，再展望</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"We're ending the era of these like massive beautiful perfect skills."
<div class="text-xs opacity-60 mt-1 not-italic">— Mega skill 已死，Lego micro skill 当道</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"Every move that we make to make it more secure will break a lot of people."
<div class="text-xs opacity-60 mt-1 not-italic">— npm 收购后做安全的核心张力</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"It's a social problem ultimately. … the trust is kind of diffuse."
<div class="text-xs opacity-60 mt-1 not-italic">— Agent 写、agent 审、人最后看——信任怎么落地</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"Operating systems need to look different than they looked 5 years ago because it's not just you using them anymore."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 Microsoft 押"OS 给 agent 留位置"</div>
</div>

</div>

---
layout: end
---

# "We're at physics problems."

<div class="mt-6 text-base opacity-70">

Kyle Daigle · Latent Space Podcast · 2025

</div>

<div class="mt-3 text-sm opacity-50">

← 返回 PodDeck

</div>
