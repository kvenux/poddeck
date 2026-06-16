---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Satya Nadella on AI — NoPriors x Latent Space Crossover @ Microsoft Build 2026'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Satya Nadella on AI

<div class="text-xl opacity-70 mt-2">NoPriors × Latent Space Crossover @ Microsoft Build 2026</div>

<div class="mt-8 text-sm opacity-60">
With Sarah Guo, Elad Gil, swyx — 30-minute on-stage conversation
</div>

<div class="mt-10 text-base opacity-50 italic">
"Can everybody operate at the frontier with their frontier intelligence?"
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-60 mb-4">Satya 把整个 Build 2026 的发布浓缩成一个核心问题：每家公司怎么在 AI 平台之上长出自己的智能层？</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 平台 vs 单点模型
"ecosystem play as opposed to a single model or even a single platform"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Harness 时代
模型 + 数据 + 工具 + 上下文构成"束缚架"——评估是真 IP
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Frontier 加上时间
GPT-5.5 + traces → 5B 推理模型，反超基线
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### SaaS 重新洗牌
数据模型 / 业务逻辑 / UI 三层要 unbundle 再 re-bundle
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Meta 工作
Azure 网络团队不做网络，做"自动做网络的 agent"——Miles
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 社区许可
数据中心扩张要换来电价下降、税基增加，否则不会有 permission
</div>

</div>

---

# 平台的定义：上面比里面多

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

Satya 一开口就把这次 Build 框死：

- 不是一次"我们发布了一个模型"的发布会
- 不是一次"我们发布了一个 stack"的发布会
- 是一次"我们怎么让别人在我们上面长东西"的发布会

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"a platform is defined by fundamentally its ability to create more value above the platform versus what's captured in the platform."

<div class="text-xs opacity-60 mt-2 not-italic">
— 判断一个公司是不是真平台的硬指标
</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**Why this matters**: 同样一笔 GPU 投资，如果只是支撑自家 Copilot，是 first-party 公司；如果让 AI-native 创业公司、传统企业、SaaS 厂商都能在上面长出 own AI，才算 platform play。Microsoft 在自己选第二条路。
</div>

---

# MAI：先做"血统干净"的预训练

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Clean lineage**
"it's become even harder to build a clean lineage model... because there's so much stuff out there that you truly need to ablate out"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**追求 cognitive core**
不是单 benchmark 高分，是 reasoning + 通用能力的核
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Hill-climb scaffold**
让客户能围绕 MAI 加 RL、收 traces、用 private email 做特化
</div>

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 对开放权重模型的批评

> "a lot of the open weight models is they look great on one benchmark or two, but they're not great on practice."

**作者概括**：榜单饱和并不等于落地能用——这是 Satya 给"frontier"概念加的第一层 caveat。

</div>

</div>

---
layout: two-cols
---

# 新 frontier：把时间维度加进去

左侧 = 旧定义、右侧 = 新定义。

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**旧 frontier**
你今天用的模型在 today's benchmark 上最强
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**新 frontier**
"if you add a little temporality to it" — 拿大模型跑业务，收集 traces，再回训小推理模型，反超基线
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Land O'Lakes demo**
GPT-5.5 → traces → 5B 推理模型 → "achieved higher"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./temporality-frontier.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 两年前的我，我会告诉自己什么

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 已被验证的判断

> "intelligence is log of compute kind of works"

scaling laws 论文 + OpenAI 合作 + transformer 全押注 — 这条赌赢了。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 低估了的东西

> "the real world complexity of deploying these so that they actually deliver the value in the real world"

benchmark 跑分 ≠ 客户真在做"only they can value"的事情。
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs italic">

"when people say, 'Wow, I don't want a token max.' It's an artifact of us not having thought ourselves as an industry that we are using tokens to create value every step of the way."

<div class="text-xs opacity-60 mt-1 not-italic">

**作者概括**：token cap 让用户抱怨，是因为行业还没把"每一个 token 都换成 value"的链路想清楚。

</div>

</div>

---

# 编码 agent 太成功了，反而要重写 IDE

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Satya 听到的客户反馈

> "I have these 100 agent sessions. I the cognitive load it transfers back to me as a human is so excessive that now I need a new UI."

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 这意味着什么？

- chat-only 做不下去了——"the chat as the only artifact is also impossible"
- 需要 **canvas**：并行 session 的可视化
- 需要新 ADE：审查 agent 做过什么——"I'll need my new ADE to say, 'What did you do?'"
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**反直觉**：full-agentic 不会消灭 UI。当 100 个 agent 在你"被授权身份"下做事，你需要 *更多* 软件来理解它们做了什么——只是软件长得跟以前不一样。

</div>

---
layout: two-cols
---

# Harness = 模型 + 数据 + 工具的回路

把 model / data / tools 绑到一起 **跟把它们解耦** 是两种截然不同的押注。Microsoft 选了解耦：

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Frontier lab 的押注**：harness + 模型 + 工具一起训 → 给你最好的 eval
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Microsoft 的押注**：开放 harness，让客户带自己的模型、工具、上下文进来
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**Existence proof**: M-Dash 用 multimodal harness，找到了 Mythos 没找到的漏洞
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./harness-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Private evals = 公司最重要的 IP

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"having private evals maybe the biggest IP. Right? I think about it. Like, what's that private eval that you can then use even a frontier model to hill climb on and not leak the traces maybe one of the biggest drivers of IP."

<div class="text-xs opacity-60 mt-2 not-italic">
— 在 Satya 的世界观里，eval 不是工具，是资产
</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Acid test
> "you have an eval that's private. You're using a model A. Can you switch it to model B and... climb up?"
- 能切：you're in control
- 不能切：you're not in control
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 推论
- 开放 harness 才能让 model A → B 切换不疼
- private eval + 不泄漏 traces = 公司的 moat
- AI-native startup / SaaS 公司 / enterprise 都需要这套技能
</div>

</div>

---
layout: two-cols
---

# Microsoft 的第三幕：从 OS 到 Cloud 到 Harness

<div class="text-sm">swyx 给 Satya 抛了一个总结：</div>

<div class="mt-2 space-y-2 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**Act 1** — Operating Systems company
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**Act 2** — Cloud / SaaS company
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**Act 3** — Harness / Evals company
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

Satya 回应：
> "if there was one tagline for this entire developer conference is can everybody operate at the frontier with their frontier intelligence"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-acts.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Agents 上资产负债表：训练"公司元老 agent"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 旧世界
- 公司价值 = 人的 tenure + 团队经验
- 但 "human capital was never possible to go put on a balance sheet" — 你抓不住 tacit knowledge

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 新世界
- 每个公司 = "lots of tokens and lot of human capital"
- 人和 agent 之间的 **traces** 是怎么创造价值的上下文
- 用这些 traces 训练的不是 generalist 模型，是 "the company veteran agent"

</div>

</div>

<div class="mt-6 p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">

"it should in fact go on to the balance sheet... whereas now I think you can with the agents that have learned through the through time, through all the traces."

<div class="text-xs opacity-60 mt-2 not-italic">
swyx 接话："SEC is going to have to have accounting standards for token expertise."
</div>

</div>

---
layout: two-cols
---

# SaaS 三层栈：哪层留、哪层重写？

<div class="text-sm mt-2">

每个 SaaS 公司当年是这么搭的：数据模型 + 业务逻辑 + UI。agent 时代要 re-litigate 这种纵向堆叠。Satya 的判断：

</div>

<div class="mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

**Data Model 留** — "general ledger better be a general ledger. I don't need new schema creation"
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**Business Logic 留** — Power BI dashboards 背后的语义模型很值钱
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">

**UI 重写** — agent 接管交互，UI 长成 canvas
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./saas-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Work IQ：M365 里那个从未被当数据库用的数据库

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 历史平行
Exchange + SharePoint 上云后："the number of people who will use servers in the cloud is 10x 100x" — 不再是买服务器，是订阅。现在 M365 加 Work IQ 在重演这一幕。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 新场景
> "I go to a GitHub repo and I say, 'Hey, I attended a bunch of design meetings last week related to this repo. Can you capture all that and tell me what changes I should make?'"
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**架构含义**："what I used to serve an inbox or a mailbox cannot be used to serve an agent." — 同一份数据，给人服务和给 agent 服务访问模式不同，需要重新架构。Work IQ 暴露的是过去只被 M365 应用内部消费的私有 DB。

</div>

---

# 三种定价并存，但人对"outcome"是叶公好龙

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Per-user
> "an artifact of someone creating a budget needing certainty"

人是因为预算确定性才要 per-user，本质是"a set of entitlements to usage"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Consumption
GitHub Copilot 最近就加了 consumption meter：原本是 dev 用 code complete，现在是"launched 10,000 agents going on all day"——必须按用量。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Outcome
> "most people love outcomes until they have an outcome. Because once you have an outcome it's like giving away royalty."

客户反水：no no no, give me per-user。
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**关键判断**：不存在 one-to-rule-them-all。SaaS / 平台厂商必须给自己留 *定价灵活性* —— "there will always be a per user, but there will have to be a consumption meter."

</div>

---

# Build-vs-buy 的新算式：边际成本

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"if you should always acquire something if the marginal cost of building and maintaining... something on your own is higher."

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 现在很多企业的状态
**Agent euphoria**：一堆团队兴奋地说"我们能自己 rebuild 所有 SaaS"，跟 vendor 提分手。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Satya 的预测
> "I think we have gone through the excitement that I can generate a lot of software. I think the next thing would be what software do I really want to generate?"

6-9 个月回头评估：自建的**维护成本**——安全补丁、code agent 烧的 token、责任归属。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

**结论**：要走过 *一个完整的预算周期* 才能看出 equilibrium。"there'll be very little tolerance for anybody who's inflexible at the vendor level."

</div>

---

# Satya 自己也在 build：Chief of Staff Autopilot

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 他上周自己拼的 agent
1. 拿 **Work IQ** 当上下文源
2. 在 **Foundry** 上跑 long-running agent
3. 用 **Raven** 做 memory 后端
4. 一键 publish 到 **Teams**

> "lo and behold, it built it and... I could say publish to Teams and it published the damn thing to Teams"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 自嘲

> "Building software has made it possible for even the incompetence of a CEO of a company like ours, you can build."

CEO 现在也能 full-stack 上下走通——但问题是："how do you then have the ability to inspect things, learn things, see things?"

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs italic">

"that doesn't mean every one of us should be doing the same thing." — 能做 ≠ 应该做。新问题是 inspect / review。

</div>

---

# 工程角色：LinkedIn 的"full stack builder"实验

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Elad 的假说
未来工程师可能只剩 4 类：
- 管理 agent 的人
- Forward-deployment / FDE
- Security engineer
- 大规模 infra 工程师

其它都坍缩进 agentic 世界。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Satya：先看 LinkedIn 实验
"they did structurally change... basically built up a new discipline called full stack builder"

把 design + PM + frontend 合并，但保留各自的 edge——"you can give yourself bigger scope in role so that you're not confined to one role."
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**Infra 反而变更重要**：连 Excel 团队都要做"building the RLE in which a reward can be learned"——end-user app 团队里也要塞 distributed systems 工程师。

</div>

---

# Generalist 的 leverage 上限被打开了

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Satya 看到的迁移

> "I'm coding. I'm now a general like what I've basically translated knowledge work... where I created a Word document or a spreadsheet... and now I can build an app, right? It's in the same sentence."

写文档 → 写 app 是 *同一个动作*。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 推论

> "generalist skills have gotten a higher leverage."

idea 人的黄金时代——但要带 agency：

> "Idea people with a lot of agency."

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-center">

"Golden age for idea people."
<div class="text-xs opacity-60 mt-1 not-italic">— Elad 的总结，Satya 接受</div>

</div>

---
layout: two-cols
---

# 真 ambition：把工作 meta 化

Satya 推荐的 Kevin Scott 一句话：

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-xs">

"when you can make the impossible like when you're making hard things easier that's sort of one point of leverage but true ambition is about making the impossible possible."

</div>

**例子**：Azure 网络团队最近的 reconceptualization。

<div class="mt-3 space-y-2 text-xs">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**旧 framing**："我们做 Azure networking" — 容量翻倍就要 head count 翻倍
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**新 framing**："我们造一个 agentic system，它做 Azure networking" — 取名叫 Miles
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

> "We need tokens in order to be able to manage our operation"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meta-work.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 别犯"4 billion typists"那种错

Satya 把它当成历史的镜子：

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"In the '80s, if somebody had come to us and said, '4 billion people are going to get up in the morning and start typing.' My model would have been, 'We need 4 billion typists.' But we're not doing typing. We're doing knowledge work."

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**自我提醒**：当一个工具放大了规模，第一反应往往是 "we need more of the old role"。但真正的杠杆在于 *换一个 role 的定义*——meta cognition / meta work。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./typists.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据中心扩张：永续许可来自社区，不来自 PPT

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 规模
> "we built in the last 15 months more Azure capacity than we built in the first 15 years"

> "it's pretty wild. And it's the same team."
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 永续条件（不是 campaign）
- 长期电价要降，不是涨
- water replenishment, close-loop 系统
- 建设 + 运营双阶段就业
- 当地税基
- 否则 "we won't have permission"
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic text-xs">

"if you do have a token economy that drives productivity, that drives economic growth, that drives broad-spread participation, better health outcomes, then I think we will be in a great place."

<div class="text-xs opacity-60 mt-1 not-italic">

**作者概括**：人类历史上 *用能量 + 创造社会价值* 的组合都成功了；只用能量不创造的没有。AI 这次要走对那条线。

</div>

</div>

---

# 我们最该更新的认知是什么？

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

Sarah 问"过去对 AI 社会影响你最大的认知更新是什么"。Satya 的回答：

> "the world is going to be way skeptical of tech and tech companies that say, 'Trust us. We've got it. The future is going to be glorious.' You kind of have to deliver tangible benefits."

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 教育是个明显的缺口
Elad 指出：财富、医疗（Open Evidence 一类）已经能看到 ROI；**教育的影响远低于预期**。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Satya 的 hypothesis
> "the next big startup and success story could be someone who builds a new university or a new pedagogy"

凭证 + 雇佣机会 + 自学路径都要重做。Alpha School 是他最近研究的样本。
</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期 30 分钟对谈里最值得记住的六条：</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"a platform is defined by fundamentally its ability to create more value above the platform versus what's captured in the platform."

<div class="opacity-60 mt-1 not-italic">— 开场对 Microsoft 平台战略的定义</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">

"intelligence is log of compute kind of works."

<div class="opacity-60 mt-1 not-italic">— 复盘两年押注 scaling laws</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">

"having private evals maybe the biggest IP."

<div class="opacity-60 mt-1 not-italic">— Eval 是 AI 时代的新护城河</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"most people love outcomes until they have an outcome."

<div class="opacity-60 mt-1 not-italic">— Outcome-based pricing 的真相</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"they basically took their work and made it meta. That meta work is now their new work."

<div class="opacity-60 mt-1 not-italic">— Azure 网络团队 → Miles agent</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">

"we're not doing typing. We're doing knowledge work."

<div class="opacity-60 mt-1 not-italic">— 4 billion typists 的反面教材</div>

</div>

</div>

---
layout: end
---

# Golden age for idea people.

<div class="mt-6 text-sm opacity-60">
— Elad Gil, summarizing where Satya thinks generalist leverage lands
</div>
