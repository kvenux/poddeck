---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Devin 的 80% 时刻：背景 Agent、7× PR、与手把手编码的终结'
info: |
  Latent Space · Walden Yan (Cognition) × Cole Murray (OpenInspect)
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Devin 的 80% 时刻

### 背景 Agent、7× PR、与手把手编码的终结

<div class="mt-10 text-base opacity-80">
Walden Yan · Cognition (Devin) co-founder, CPO<br/>
Cole Murray · OpenInspect creator<br/>
Latent Space Podcast
</div>

<div class="mt-8 text-xs opacity-50">
本期主题：当模型可以"从 spec 直接到 PR"，整个 agent 架构需要重写
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个标志性数字

Devin 在自己 repo 上的 commit 占比，从 1 月的 **16%** 涨到 3 月的 **80%**。同期 merged PR 涨 **7×**，工程团队只涨 10%。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一场架构辩论

Agent 跑在沙盒里（in-box）还是沙盒外（out-of-box）？Walden 押 out-of-box，Cole 一开始押 in-box，现在准备搬出来。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一个被低估的问题

测试不是 computer use。"我们大部分时间花在测试上"——orchestration、feature flag、admin、codebase context 全得 reason。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一个未解的问题

Memory 没人解决。Devin 的 knowledge 系统迭代了多年，仍然在 generation × retrieval 上两头难。

</div>

</div>

---

# 拐点：从手把手到背景执行

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Devin commit 占比

<div class="text-4xl font-bold text-blue-600 my-2">16% → 80%</div>
<div class="text-xs opacity-70">January → March，Devin 自己的 repo</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Merged PR 增速

<div class="text-4xl font-bold text-green-600 my-2">7×</div>
<div class="text-xs opacity-70">"like the last 2 months, 3 months"</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 工程团队增速

<div class="text-4xl font-bold text-orange-600 my-2">~10%</div>
<div class="text-xs opacity-70">Walden: "we were afraid to release this"</div>

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"It's a big shift right now."
</div>

---
layout: two-cols
---

# 这次拐点是模型推动的

December 2025 的一个并行事件：

- **Opus 4.5 / GPT 5.2** 达到一个新的能力台阶
- 从"handholding the model"到"more or less autonomously drive the model"
- 用 Walden 的话：从 spec 到一个完成的 PR，几乎没有摩擦——前提是 spec 够好

回看历史：

- Sonnet 3.7 那会儿"重写了 Devin 一晚"
- 当时主要工作是"剥掉 Devin 里不再需要的部分"
- 直到 12 月这一波，"是否完全把它扔到云上"才变成"严肃讨论"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./autonomy-ramp.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Spec → PR：一个看似简单的承诺

<div class="mt-6 p-6 text-xl border-l-4 border-blue-500 bg-blue-50">

"We could pretty much go from a specification to a completed pull request<br/>
assuming the spec was good enough — with very little friction."

</div>

<div class="mt-4 text-sm opacity-70">— Walden Yan</div>

<div class="mt-8 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 这个承诺其实有两个前提

1. spec 写得够清楚
2. 中间的 agent infra 不爆

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 但它真的能跑了

这个 paradigm 一通，"背景 agent"才从 demo 变成日常。Devin、Claude web、Codex、OpenInspect 都在做同样的事。

</div>

</div>

---

# 两个 Devin 克隆，从同一个起点分叉

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### Devin (Cognition)

- 商业产品，"卖 agent + agent infra"
- 从一开始就 **brain ⟂ machine**——架构上是 out-of-box
- 自己造了 VM、文件系统格式（block-diff）、测试编排
- 提供 VPC、on-prem、FedGov Cloud 部署
- 还卖"咨询服务"——帮大企业真的用起来

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### OpenInspect (Cole Murray)

- 开源项目，作者明确不打算商业化
- 起点：客户用 Claude web/Codex 时遇到"Slack session 只属于发起人"问题
- 跟着 RAMP 公开 blog post 写出来——live tweet 过整个搭建过程
- 让公司能 fork、塞自己的定制
- 当前是 **in-box** 架构，但作者说"长期会迁出去"

</div>

</div>

---
layout: two-cols
---

# 核心架构选择：In-box vs Out-of-box

> "Harness in the box or out of the box."<br/>
> — Cole Murray

**In-box（Cole 现在的方案）**：agent 进程跑在沙盒里。简单——所有 state 都本地。代价：所有 secret 也都在沙盒里，模型一旦"unintended behavior"，secret 就可能 x-filled。

**Out-of-box（Walden 从第一天就这么做）**：brain 跑在 worker control plane，sandbox 只做 hands，靠 tool call 操纵环境。State 复杂得多，但 secret 不暴露给 agent，可以多租户隔离。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./in-out-box.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Walden：从第一天就 brain ⟂ machine

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">

"From the start build Devin to what we called<br/>
**separate the brain from the machine**."

</div>

<div class="mt-8 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 复用现有 dev box 基础设施

不用为每种 agent 重新造一种"什么依赖都装好的"沙盒。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 权限边界自然分层

用户能在 machine 上做什么 = agent 能做什么。Brain 不可达，不用担心被串改。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
GitHub App 案例：一个 GitHub App 对应多个用户、不同权限。如果 brain 和 secret 都堆在沙盒里，权限分离非常难做；分离了 brain，就只在 machine 上挂"该用户能用的最小范围 secret"。
</div>

---

# Cole 也准备搬出去

Cole 的当前实现是 in-box，但他在播客里明确说：

<div class="mt-6 p-6 text-lg italic border-l-4 border-green-500 bg-green-50">

"Long term the architecture will eventually come back out of the box.<br/>
Some of the newer tools that I've added are calling back into the control plane<br/>
so that you don't have the secrets in the sandbox."

</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么以前选 in-box

简单、好 ship、social state 本地化、单租户 OK

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么必须迁出去

越来越多 tool 已经在 callback 控制面，secret 不能再随便扔进沙盒

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 怎么迁

中央化 control plane，沙盒只是 hands

</div>

</div>

---
layout: two-cols
---

# 真正的硬骨头：测试，不是 computer use

<div class="mt-2 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"I think they actually overindex on the computer use part of it<br/>
because computer use in my mind is the literal okay you want a button<br/>
you want to click — can you emit the right coordinates."
</div>

测试是真正难的：跨越 front-end + back-end + nested service 的修改怎么端到端跑？

- 哪些版本要拼在一起跑？
- 怎么触发这个 feature？要 admin 吗？要 flag 吗？
- 有时候单一前沿模型搞不定，得多个模型 orchestrate 起来

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./testing-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 测试是 codebase context 问题，不是视觉问题

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### Computer use 部分

emit 一个点击坐标。这个能力近期模型（包括 Opus 4.7）已经"way better"。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50">

### 测试的剩余部分

- 这次改动改了哪些服务？
- 怎么把这些服务以正确版本 orchestrate 起来？
- 触发条件是什么——admin？feature flag？两个 session 互发特定字符串？

这些**不出现在屏幕上**，必须从 codebase 里推出来。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">
Walden：有些任务"no one frontier model can actually do this full end to end task itself"——得多个前沿模型协作。
</div>

---

# Repo setup：从公司创立起就解不完的问题

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"Internally at Cognition we call this repo setup.<br/>
The hardest part of it's been a perennial problem since the start of the company."

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500">

**最常见的现实**：

"A lot of the times it's **go talk to Bob and get the secrets** — and that obviously doesn't work when the agent needs to actually set this up."

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border border-yellow-300">

**老 codebase**：越老越难——很多公司 Docker 出现前就建起来了

</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-300">

**微服务**：服务越多，agent 的运行环境就越难复现

</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-300">

**生产凭证**：你不想让 agent 拿真 prod 凭证跑测试

</div>

</div>

---

# Docker 不够：Docker-in-Docker、不是真隔离

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50">

### 为什么 Cognition 没用 Docker

> "Docker containers not really a true security boundary."

如果你要在沙盒里运行真实应用，而那些应用本身又用 Docker——你就掉进 Docker-in-Docker，"like really weird"。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### 为什么用 Firecracker VM

真 VM 才能跑包括 Docker 在内的任意应用。Devin 还在 beta 中支持 Android 开发——VM 里跑 emulator，需要嵌套虚拟化。

Cole 同样让 OpenInspect 走 sandbox provider 抽象层（modal / Daytona / E2B），由 provider 提供 VM-level 隔离。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">
Cole：Docker compose 仍然是好工具——但用来跑你的<strong>基础设施</strong>，不是用来跑 agent 本身。
</div>

---

# 一个非常具体的故事：grep 为什么慢

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500">

朋友们建自己的 coding agent 时反复遇到同一个问题：**grep 在 agent 机器上极慢**。很多人不知道根因——直接动手"我们造一个超快 GPU index"。

</div>

<div class="mt-6 p-5 bg-green-50 border-l-4 border-green-500">

Cognition 的 infra 团队当时（一年半前没 AI 帮忙的时候）查到真正的原因：

> "A lot of these virtual machines actually underlying them don't use real file systems.<br/>
> They use these like **network file systems** where things are actually cached over the network — actually in S3.<br/>
> So when you're grepping, you're actually making **network calls**."

</div>

<div class="mt-6 text-sm p-3 bg-yellow-50 border-l-4 border-yellow-500">
<strong>作者概括</strong>：deep infra 经验仍然有不可替代的价值——AI 会告诉你建 GPU index，不会告诉你换文件系统。
</div>

---
layout: two-cols
---

# Block-diff 文件系统：terabyte 磁盘秒级冷启

VM 冷启动慢的另一面：把 sandbox 关掉、再开回来。

**朴素方案**：盘多大就搬多少。1 TB 数据，就有 1 TB 的工作要做。Devin 早期"out cold for like 10 minutes"。

**Cognition 自造**：block-diff file storage format——保存 + 恢复的工作量正比于**自上次以来的 diff**，agent 只改了 100 行，恢复就只动那 100 行的 block。

> "Sells Devin AND Devin infra — not just the model."

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./block-diff.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# GitHub 体验：Devin 在自己 PR 上 review 自己

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### 不只是开 PR

Devin review 会在自己开的 PR 上 post comment，然后 Devin 自己又得回过去 address。

> "He answers his own comments which is really really loopy."

要防 infinite loop，需要两侧调：comment 要高 signal，agent 要 thoughtful 地判断哪些要修、哪些要 pushback。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### OpenInspect 的等价方案

也有 GitHub code reviewer，prompt 可控、能 post comment。当前需要手动 tag bot 触发；自动跑的能力在但没默认开。

合并冲突、改动追踪：在 GitHub 上 @bot 一下就能做。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"One of my favorite moments is when Devin tells me that I'm wrong — when I try to get it to do something different."
</div>

---
layout: statement
---

# "Devin tells me that I'm wrong."

<div class="mt-6 text-sm opacity-60">
Walden 把这个当作"multi-agent 终于可能"的标志——能 pushback 的 agent 才像协作者，而不只是工具。
</div>

---

# Slack 是主战场，不只是消息通道

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 italic">

"We actually use Devin like a <strong>coworker</strong> in Slack —<br/>
and that's how it's been built from the ground up."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 只有 MCP 是不够的

简单的 Slack MCP 只能 post message back。要做成 coworker，得支持 webhook 回流、自然回复节奏、不刷屏。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 落到代码：自建一手集成

Cognition 跳过 MCP，自己写了"first party Slack 集成"。Cole 看到类似趋势：核心依赖的集成最终要自己控制。

</div>

</div>

---

# MCP 的承诺和它的天花板

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### Walden 真想要的

> "Something that's more expressive than MCP that goes both ways<br/>—  not just a set of tools but a proper system that interacts back."

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50">

### 一个冷知识

> "There actually is sampling in the MCP spec — but nobody uses it."

Cole：当 MCP spec 开始复杂化，它就**失去了 one-step connect 的原始承诺**——回到看起来像每家自己写一手集成的状态。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
判据：如果一个集成"几乎每次 session 都要用"——值得自己 own 它，做 optimization。
</div>

---
layout: two-cols
---

# Memory：尚未解决的核心问题

<div class="mt-2 p-3 bg-red-50 border-l-4 border-red-500 italic text-sm">
"Memory as a whole is a pretty unsolved problem."
</div>

Cole 不急着加 memory——因为不是 retrieval 一个问题，**generation 也难**。

**Generation 难在哪**：
- 用户偶尔说"这次开成 draft PR"
- 不能就此推广成"以后所有 PR 都 draft"
- 但也不能完全忘——应该是"Cole 偏好 draft PR"

**Retrieval 难在哪**：
- 几千条 memory 怎么挑对的取
- 不爆 context、不带噪音

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-grid.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Devin 的 memory 历程：knowledge → 自动生成 → 也许变文件系统

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500">

**第一代**：叫 "knowledge"——理念是 Devin 主动问"要不要记下来"，用户秒批/秒拒，**95% 的 memory 都是这么自动累积的**，几乎没人愿意坐下来写大文档。

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500">

**改进点**：memory 现在可以被 edit、被推翻。但 Cognition 团队明说"我们不知道这是不是最终形态"。

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500">

**新方向**：agent 现在原生就很会用 file system——

> "Should we rebuild memories to feel more like a **file system** that we let the agent navigate on its own?"

</div>

<div class="mt-4 text-sm opacity-70">
（题外话：Cole 说他在客户那儿见到的常见折中是 Claude Code 的 skills 或 CLAUDE.md。）
</div>

---
layout: two-cols
---

# Multi-agent：兴奋点远大于实际收益

Walden 一年前写过《Don't build multi-agents》。一年后他的结论几乎没变。

- 已经给 Devin 一个 MCP，让它能任意调起新 Devin
- 实测大部分日常仍是 **单 agent + manager-style sub-agents**
- 真做 swarm 出来"会变得非常 chaotic"
- Cursor 团队 Wilson Lynn 做了同样的探索，最终落地是和 Devin 一样的形态

> "I think there will be a revision to that post at some point — about tell."

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./manager-subagents.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "You're absolutely right." → 真正的反对

Walden 真正乐观的不是"swarm of agents"，而是 agent 终于能 pushback。

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧世界

> "Claude used to just say 'you're absolutely right'."

Codex app 里 Anthropic 留了个 Easter egg——把主题颜色之一命名为 "absolutely"，颜色是 Anthropic 自家的色。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新世界

agent 能告诉你"actually I think you're wrong"——而这正是 Walden 认为 multi-agent 终于有戏的前提：两个 agent 看到不同信息时，能真的对齐。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"That demonstrates a level of maturity and communication today that makes a multi-agent world possible."
</div>

---

# 纯 vibe coding 的两周天花板

Cognition 内部做过实验：完全靠 agent 自我 merge、不做 code review，能跑多久？

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50">

### December state-of-the-art

> "You could probably run this for about <strong>two weeks</strong>."

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50">

### 两周末的破窗

> "Turns out this button is implemented in like 10 different places — and oh, you forgot one of them and actually it's a slightly different color in one spot."

到这个点上，团队还是得"actually try to do code review at the same time"。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：vibe coding 不是"永远不行"，而是"如果不做清理、就只能撑两周"。
</div>

---
layout: statement
---

# "Your codebase regresses to your worst engineer."

<div class="mt-8 text-sm opacity-70">
— Cole Murray，描述他在客户那儿看到的反模式
</div>

---

# Cole 的"AI native 反模式"

<div class="mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 italic">

"The engineer who is very gung-ho about AI and is not auditing their code —<br/>
their pattern starts cementing into the code,<br/>
and now the AI is referencing their patterns."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一个具体例子

> "Their if-else block that you know is **20 if-else's back and forth** — the AI is seeing that as the pattern of how things are done and starts to then exponentially grow this slop."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 解药

Scheduled cleanup——human 或 system 主动找重复

> "You'll end up with **like 12 helpers for how to format a date** and you need to address that."

</div>

</div>

---
layout: two-cols
---

# 主持人的修订：模块间画硬合同

swyx 加的一条架构原则：

> "Be very strict about the boundaries between modules. It's your job as an architect, as a CTO, to say:<br/>
> 'Here's the hard contract between you guys and you guys. Whatever you do inside this black box is your business. But between these guys, let's be really damn clear. Any movement must be signed off by a human.'"

把 AI 自由发挥的空间锁在每个黑盒**内部**——黑盒之间的 contract 由人监管。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hard-contract.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 写出来的代码有"指纹"

Cole 在大量客户 codebase 里看到的共通 pattern：

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### `hasattr` / `getattr` 的滥用

模型怕 fail，就用反射 wrap 所有对象访问——典型 reward hacking。

**Cole 的解法**：lint rule，任何 `getattr` 让 PR fail。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 强行 backward-compat

奇怪的 re-import / re-export，只为不改模块名。GPT 系列尤甚，Claude 4.6 也开始有。

**Cole 的解法**：semgrep 或 lint 容易识别。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 无类型 tuple / "dict, string, any"

懒省事——直接抛 any。Lint 抓得住。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Opus 4.7：写"PRD 长度"的注释

不再是 slop 注释——而是"为什么选这个方案 / 为什么不选另一个"的推理过程。讨厌；但可能是 self-maintaining 系统的雏形。

</div>

</div>

---

# 用例图鉴：背景 Agent 在做什么

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### SRE 自动 triage

Slack / Datadog / Sentry 的 alert 一进来，agent **first responder**——拉日志、读数据库、对照 playbook。"error → pull request → done."

OpenInspect 支持 Sentry 和 generic webhook。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### PM 直接开 PR

> "The PM is just prompting through Slack — and the pull request is then being created."

PM 不再写 issue，agent 直接出 PR。代码贡献者画像在变。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Customer Support

Bug report 一来，agent 自动带全 codebase context 回复——支持团队不再"can you get more info"打转。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 持续安全 scan / review

把"continual security review"作为常驻 agent 任务跑。

</div>

</div>

---

# 一年人均花多少钱在 agent 上

<div class="mt-6 p-6 text-xl border-l-4 border-blue-500 bg-blue-50">

"Common numbers that I hear are anywhere from <strong>$1,000 an engineer up to $5,000 an engineer</strong>.<br/>
I have not heard anywhere in the realm of like <strong>$50,000 an engineer</strong> — for a frame of reference."

</div>

<div class="mt-2 text-sm opacity-70">— Cole Murray</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 当前常见区间

<div class="text-3xl font-bold text-green-600 my-2">$1k–5k</div>
<div class="text-xs opacity-70">/ engineer / year</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 头部异常值

<div class="text-3xl font-bold text-orange-600 my-2">$50k+</div>
<div class="text-xs opacity-70">已经被看到，"we'll get there"</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 关键判据

<div class="text-lg font-semibold text-purple-700 my-2">价值 ≥ 花费</div>
<div class="text-xs opacity-70">"depends on how people are using it"</div>

</div>

</div>

---

# Windsurf 2.0：本地 + 云的 command center

Cognition 收购 Windsurf 后做的第一件事：让 IDE 成为所有 agent 的本地总控台。

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"Windsurf to just kind of be your local command center of all your agents —<br/>
your background ones, your local ones."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Local agent

> "A bit more fast and let the user make the call on things — don't try to autonomously go test things."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Background agent

> "Should just assume the next message I send the user should just have everything that the user needs — don't stop until you have the testing."

</div>

</div>

<div class="mt-4 text-sm opacity-70">
两个 prompt 不同，但底层逻辑（git provider、OS、VM 处理）尽量共享。
</div>

---

# Smart Friend 回来了：Frontier × Subfrontier 混搭

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"You basically have hybrid frontier and subfrontier systems<br/>—  use subfrontier to be really fast, really efficient,<br/>and call out to the frontier part of the system<br/>so that you can still get frontier performance for the most part."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么这件事正回来

Frontier 模型越来越贵；同时 subfrontier 已经"good enough for a lot of the work"。把 routing 做好，可以拿到 90% 的 frontier 质量、20% 的成本。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 行业认证

Walden：Anthropic 现在也"officially adopted"。Cole 表示要重写一篇 *Return of Smart Friend*。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Devin commit percentages on all Devin repos was 16% in January and now 80% in March."
<div class="text-xs opacity-60 mt-1 not-italic">— swyx，引用 Cognition 内部数据</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"We could pretty much go from a specification to a completed pull request — assuming the spec was good enough — with very little friction."
<div class="text-xs opacity-60 mt-1 not-italic">— Walden Yan，关于 December 2025 的拐点</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"From the start build Devin to what we called separate the brain from the machine."
<div class="text-xs opacity-60 mt-1 not-italic">— Walden Yan，Cognition 的架构原则</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"They actually overindex on the computer use part — testing is actually a really interesting problem solving challenge."
<div class="text-xs opacity-60 mt-1 not-italic">— Walden Yan，谈测试 vs computer use</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Your codebase regresses to your worst engineer."
<div class="text-xs opacity-60 mt-1 not-italic">— Cole Murray，AI-native 反模式</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"One of my favorite moments is when Devin tells me that I'm wrong."
<div class="text-xs opacity-60 mt-1 not-italic">— Walden Yan，关于 multi-agent 的前提</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Memory as a whole is a pretty unsolved problem."
<div class="text-xs opacity-60 mt-1 not-italic">— Cole Murray，关于尚未解决的核心问题</div>
</div>

</div>

---
layout: end
---

# "Autonomous coding factories."

<div class="mt-6 text-sm opacity-70">
"There's a real zeitgeist in the space right now for companies to want to drive themselves into these autonomous coding factories."<br/>
— Walden Yan
</div>
