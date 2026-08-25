---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Omnigent: Composition, Control, and Collaboration for AI Agents'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Omnigent

## AI Agent 的组合、控制与协作

<div class="mt-10 text-base opacity-70">

Denny Lee × Demetrios · AAIF Live / MLOps.community

2026-07 · 58 分钟

</div>

<div class="mt-12 text-xs opacity-50">
从台湾抹茶研究一路谈到 meta-harness、Tokenomics、模型路由与数据库状态层
</div>

---

# 为什么这一期值得看

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 组合 Composition
模型与 harness 都在快速变化；上下文、记忆与配置必须能跨系统迁移。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 控制 Control
审批、命令策略、预算与模型选择，不该只藏在提示词里。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 协作 Collaboration
团队成员不只看结果，还能接手同一会话、补问题并继续运行。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Agent 研究法
让两个 Agent 互相辩论，发现自己原本不知道该问的问题。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Tokenomics
成本可见性正在从中央团队下沉到每一位开发者。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 状态回归
Agent 需要便宜、可靠、可持久化的状态，数据库重新站到舞台中央。

</div>

</div>

---

# 故事从一片抹茶叶开始

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 一个真实目标
Denny 想研究台湾南投能否种出高质量抹茶：海拔、土壤酸碱度、茶叶氧化速度、蒸制与干燥基础设施，都需要进入判断。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 两个 Agent 的角色
一个提出地区与供应链判断，另一个持续质疑；讨论不是决定做不做，而是提前看清会撞上多厚的墙。

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-base italic">

“It also introduces a way for us to rediscover things that we forgot”

</div>

<div class="mt-3 text-sm opacity-65">从工具替代叙事，转向知识重新连接：Agent 帮他找到原本无法接触的老农与小型加工者。</div>

---
layout: two-cols
---

# 辩论的价值：暴露未知问题

单 Agent 往往沿着首个答案继续补全；双 Agent 辩论把隐含假设变成可见冲突。

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>输入</strong>：目标、个人偏好、历史研究、技能与记忆。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>交锋</strong>：地区、工艺、供应链与风险逐项反驳。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>输出</strong>：不只是答案，而是一组更好的下一步问题。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-debate-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Fork：聊天界面缺失的基本动作

研究途中，Denny 想同时追踪日本、韩国的产区经验，又不想污染南投主线。Fork 让两个分支继承相同起点，然后各自深入。

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">

“Omni has the ability for me to fork.”

</div>

<div class="mt-5 text-sm opacity-70">
这不是复制一段文字，而是复制当时的上下文、记忆与决策位置。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./conversation-fork.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Fork 解决的是注意力污染

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 单线聊天
- 临时问题挤进主任务
- 每次追问都改变后续上下文
- 回来时很难记得最初为什么提问
- 多个终端与浏览器窗口进一步割裂线索

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可分叉会话
- 保留共同起点
- 旁支可以无限深入
- 主线继续服务原始决策
- 每条线都能独立保存、分享与继续运行

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>作者概括</strong>：Fork 把研究中的脚注，升级为第一等的交互对象。
</div>

---
layout: two-cols
---

# 人能直接管理多少 Agent？

Denny 把 Agent 类比为需要管理的初级开发者，并借用军事组织与两张披萨团队的跨度经验：直接线程一多，人就会丢失理由、状态与依赖。

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">

“Once you go with seven, you're losing track of everything”

</div>

<div class="mt-4 text-sm opacity-70">
问题不是模型能不能并行，而是人类管理者能否保持全局心智模型。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-span-control.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Fleet 自治之前，先解决可观察性

<div class="grid grid-cols-3 gap-4 mt-7">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 看得见
每个 Agent 当前在做什么、用了哪些上下文、花了多少成本。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 管得住
命令、预算、审批与失败重试可以在统一层施加策略。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 接得上
会话能分叉、移交、共享；模型或 harness 更换后，工作不必归零。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
研究 Agent fleet 是否能自我管理很重要；但在那之前，团队先需要一个不会随着供应商变化而消失的控制面。
</div>

---
layout: two-cols
---

# Meta-harness：稳定层放在哪里

模型会变，模型厂商自带的 inner harness 会变，开发者选择的 outer harness 也会变。Omnigent 把可迁移资产放在更上层。

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-lg italic">

“I don't want to rebuild it”

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">

“whatever harness you're using, whatever model you're using, it'll flow through”

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./meta-harness-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 抽象不是抹平差异

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 错误理解
所有模型与 harness 都被压成最低公分母；各家的审批、工具调用与配置差异被假装不存在。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Omnigent 的方向
在统一控制面下，为不同集成保留其擅长的行为；代码和配置层都显式处理差异。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
开源的意义也在这里：模型与 harness 的创建者可以直接指出集成误差，补上项目团队尚未掌握的细节。
</div>

---

# 三个能力，不是一句口号

<div class="grid grid-cols-3 gap-5 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Composition
组合不同模型与 harness；携带上下文、记忆、配置与任务历史。

<div class="mt-4 text-sm font-bold text-blue-700">换底座，不换工作</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### Control
把命令审批、预算、策略与模型路由放到可检查的控制面。

<div class="mt-4 text-sm font-bold text-orange-700">能力开放，边界显式</div>

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### Collaboration
共享完整会话；同事可以继续运行、补测试、追问遗漏条件。

<div class="mt-4 text-sm font-bold text-purple-700">交付可继续的过程</div>

</div>

</div>

---

# 组合：按任务选择模型与 harness

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 初始构建
复杂代码与高风险决策可以交给能力更强的模型，并让另一个模型负责挑战方案。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 后续维护
模板明确、变更简单、测试机械化时，便宜模型往往足够，也更少把简单任务做复杂。

</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-lg italic">

“try to find the right model or the right harness for the job.”

</div>

---

# Benchmark 不能替代真实工作负载

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 实验室排名
给出统一题目上的能力信号，便于大规模比较；但很难覆盖特定代码库、团队规范与集成约束。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 真实场景
同一组织、甚至同一团队里的不同任务，可能适合完全不同的模型与 harness。

</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">

“the real world scenarios often do not match benchmarks.”

</div>

<div class="mt-3 text-sm opacity-65">一次模型服务不可用时，流程自动切到 Codex，说明可替换性也是可靠性能力。</div>

---

# 控制：策略不只用于安全

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 命令边界
危险或影响外部环境的 shell 操作，需要明确批准。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 预算边界
单次运行超过设定金额或 token 规模时，先停下申请批准。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型边界
根据任务复杂度、成本与可用性选择允许的模型集合。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 组织边界
开发者保留操作空间，中央团队仍能看到整体风险与支出。

</div>

</div>

---
layout: two-cols
---

# 协作：共享的不是一份截图

Omnigent 把会话做成接近协作文档的界面。接收者不仅能阅读结果，还能在原会话上继续执行。

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic">

“you're actually sharing the workload together”

</div>

<div class="mt-5 text-sm opacity-70">
团队负责人可以追问遗漏条件、运行额外测试；上下文与执行能力一起被移交。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./shared-session.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 人类仍然拥有最终责任

开源社区讨论 `created by` 与 `assisted by` 时，核心不是署名格式，而是谁为提交的代码负责。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Agent 提供
实现、测试、反驳、替代方案、依赖分析与执行记录。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 人类承担
选择问题、提供上下文、接受结果、提交变更，以及成功或失败的后果。

</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 text-xl italic">

“The onus has to be on me alone”

</div>

---

# 零样本失败，通常先检查输入

<div class="grid grid-cols-3 gap-4 mt-7">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 没有上下文
Agent 不知道代码库、业务目标、质量边界与历史决策。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 没有思考结构
没有辩论、验证、重试或升级路径，一次输出就被当成最终答案。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 没有责任闭环
人类把生成交给 Agent，却没有定义什么算好，也没有检查结果。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">

“there's only so much context you can compress before the thing blows up”

</div>

---
layout: two-cols
---

# Tokenomics 正在重演 CapEx → OpEx

云时代把基础设施成本从中央采购推向开发团队：写代码的人开始理解自己启动了什么资源、花了多少钱。

Agent 时代重复同一动作：token 支出需要在使用点可见，但不能放弃组织级治理。

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>关键变化</strong>：成本管理从事后财务报表，进入每一次 Agent 运行的即时决策。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-governance.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 可见支出，不等于压低支出

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 浪费
简单改名仍调用最强模型；无效循环持续烧 token；同一低价值问题被重复追问。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 投资
复杂重构、关键测试或高价值研究消耗很高，但产出足以覆盖成本。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
真正困难的问题是价值归因：同样的消耗，对不同工程师、不同任务可能分别是有效投资与纯粹浪费。
</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
因此需要两层视角：个人看到本次决策，组织看到跨团队分布与长期模式。
</div>

---

# 为什么开发者总会选更大的模型

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 不确定性
不知道任务中途会不会突然需要更强推理。

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 时间成本
从小模型逐级失败，比一开始多花钱更令人厌烦。

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 费用错觉
单次只多一点，累计后才变成数额可观的团队支出。

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
手动下拉框只是提供选择，不会自动改变默认行为。真正的控制面要减少选择负担，并保留可解释的升级路径。
</div>

---
layout: two-cols
---

# 自动路由：先选便宜的，再允许升级

Denny 提到，任务复杂度判断未必需要再调用一个 LLM；传统机器学习可能更便宜、更快，也足以支持路由。

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">

“we're going to switch to Model X”

</div>

<div class="mt-4 space-y-2 text-sm">

- 运行前说明选择了什么模型、为什么
- 结果未通过评估时，自动升级到更强模型
- 把成本优化从开发者的手动判断变成系统能力

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-routing-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 辩论、循环与 Eval 是一套系统

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Debate
另一个 Agent 主动找反例、遗漏与错误假设。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Loop
未达标就重试、补上下文或切换模型，而不是把失败直接交给人。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Eval
把什么算好变成可计算或至少可检查的判据。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">

“you can walk away, let the two agents fight each other out”

</div>

---

# 当模型都足够好，差异转移到系统层

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 只问模型能力
哪个排行榜更高？哪个参数更多？哪个是最新版本？

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 开始问系统能力
数据是否充分？上下文是否准确？配置是否可迁移？循环、评估与失败升级是否存在？

</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-xl italic">

“the big thing is did I set up the correct loops”

</div>

---
layout: two-cols
---

# Agent 的最后一层，仍然是数据库

模型与 harness 可以热切换，但上下文、记忆、配置、历史与权限必须保持连续。可移植 Agent 的底座因此是便宜、可信、持久的状态层。

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-base italic">

“that is an old-fashioned business database problem that we've been doing since the 60s”

</div>

<div class="mt-4 text-sm opacity-70">作者概括：AI Agent 的新交互，最终落回一个几十年未消失的工程问题——如何可靠保存并恢复状态。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stateful-agent-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-[12px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“Omni has the ability for me to fork.”
<div class="mt-1 opacity-60 not-italic">— 会话分叉</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“I don't want to rebuild it”
<div class="mt-1 opacity-60 not-italic">— 上下文可迁移</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“try to find the right model or the right harness for the job.”
<div class="mt-1 opacity-60 not-italic">— 任务匹配</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“the real world scenarios often do not match benchmarks.”
<div class="mt-1 opacity-60 not-italic">— 真实工作负载</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“The onus has to be on me alone”
<div class="mt-1 opacity-60 not-italic">— 人类责任</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“you're actually sharing the workload together”
<div class="mt-1 opacity-60 not-italic">— 团队协作</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“you can walk away, let the two agents fight each other out”
<div class="mt-1 opacity-60 not-italic">— Agent 辩论</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“the big thing is did I set up the correct loops”
<div class="mt-1 opacity-60 not-italic">— 闭环设计</div>
</div>

</div>

---
layout: end
---

# “The best thing is a database.”

<div class="mt-8 text-lg opacity-70">
当 Agent 进入真实团队，最重要的不再只是模型能力，<br/>而是能否组合、控制、协作，并在变化中保住状态。
</div>

<div class="mt-10 text-sm opacity-50">Denny Lee · Omnigent</div>
