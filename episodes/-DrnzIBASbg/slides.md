---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Reading Group July 2026 - Loop Engineering'
info: |
  MLOps.community 的一次实战型读书会：从 prompt、context、harness 走向 loop engineering。
  Arthur、Val、Spar 与社区成员讨论生产 harness、可验证控制流、评估层、成本和自动化边界。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
---

# Reading Group July 2026<br/><span class="text-3xl">Loop Engineering</span>

<div class="mt-6 text-xl opacity-80">MLOps.community Reading Group</div>

<div class="mt-2 text-sm opacity-60">Arthur · Val · Spar · community round table</div>

<div class="mt-10 mx-auto max-w-3xl p-5 rounded-xl bg-blue-50 border border-blue-200 text-base opacity-85">
从会写 prompt，到会设计一个<strong>能观察、评估、纠错、停止并留下学习记录</strong>的工程系统。
</div>

---

# 为什么这一期值得看

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 范式迁移
prompt → context → harness → loop；重点从单次输出转向反馈系统。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 真实生产样本
一位非生产级程序员，用 Claude 生成 **109,895 行代码**，再为可靠性补齐 harness。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 控制论视角
把 coding agent 看成 controller：观察系统、采取行动、用测试反馈修正方向。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 双层闭环
内部循环完成任务；外部循环发现新问题、触发任务并沉淀过去的学习。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 评估先于规模
更多 agent 不会自动带来更好结果；系统必须先知道测什么、怎样判断变好。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 成本与失控
token、并发、停止条件和权限不是附属配置，而是 loop 的安全边界。

</div>

</div>

---
layout: two-cols
---

# 工程对象如何向外扩展

<div class="space-y-3 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Prompt engineering</strong>：描述输入，希望一次得到好输出。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Context engineering</strong>：补工具、指令和必要信息。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Harness engineering</strong>：补外部环境、脚手架与长任务执行能力。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Loop engineering</strong>：把验证、修复、优化和停止条件写进系统。
</div>

</div>

<div class="mt-4 text-xs opacity-65">作者概括：每一步都在减少人类逐轮检查的必要性。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./engineering-evolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 真正变化的不是模型，而是反馈回路

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 逐轮人工验收

1. agent 完成一轮
2. 人检查对错
3. 人给出修复指令
4. 从头重复

长任务的瓶颈仍然是人的注意力。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 系统内建反馈

1. 系统观察输出和环境
2. verifier 判定偏差
3. optimizer 提出修复
4. 达标或触发停止条件

工程重点转向 verifier、指标和 enforcement。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border border-blue-200 text-center">
<strong>作者概括：</strong>loop engineering 的产物不是更长的 prompt，而是可运行的质量控制系统。
</div>

---

# Arthur 的起点：规模已经很大，信任仍然很小

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm opacity-65">Claude 生成代码</div>
<div class="text-4xl font-bold text-blue-600 my-3">109,895</div>
<div class="text-sm">行 · 自 1 月 1 日起</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-sm opacity-65">投入时间</div>
<div class="text-4xl font-bold text-purple-600 my-3">1,233h</div>
<div class="text-sm">约 89 行 / 小时</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm opacity-65">目标系统</div>
<div class="text-3xl font-bold text-orange-600 my-3">生产级</div>
<div class="text-sm">SDK · API · 大规模用户</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left">
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">他有产品、工程管理和数据科学背景，但明确说自己不是生产级 enterprise coder。</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">稳定、可扩展、安全这些要求，不能只靠对 Claude 的信任，只能交给 harness 验证。</div>
</div>

---

# Harness 不是一次设计出来的，而是被失败逼出来的

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1 · Vibe coding
无 spec 的文件上传站点很快上线；下一次修改却会破坏已经完成的功能。

<strong>补丁：</strong>回归测试必须前置。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2 · Architecture plans
随着功能扩张，先写架构计划，避免局部改动破坏整体分层。

<strong>补丁：</strong>把架构意图变成可检查的文件。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3 · Validation tests
发现变量被硬编码后，开始用 Python 写验证测试。

<strong>补丁：</strong>检查的不只是行为，也包括工程约束。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 4 · Ticket discipline
epic 中途膨胀：遗漏项、错误和新依赖不断出现，破坏 lean 节奏。

<strong>补丁：</strong>显式管理 failure mode 和返工。

</div>

</div>

---

# 两周搭出的 QA 平台，差点把 push 流程压垮

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 初衷

- 列出要保证的质量属性
- 映射到开发流程的不同阶段
- 为每个阶段选择开源检查包
- 统一放进 push 前的质量门

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">
Arthur 花了 <strong>两周</strong>安装这些包和流程；绿色项已接入，黄色项仍待完成。
</div>

</div>

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 结果

push 阶段直接失效，完整 QA harness 不得不撤出自动路径，改为人工运行并继续调整。

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 关键教训

质量控制本身也是生产软件：它有延迟、耦合、失败模式和可运维性，不能只看规则覆盖率。

</div>

</div>

</div>

---

# 多模型审查提高质量，也放大了失控半径

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 有效的一面

Arthur 让 Gemini 以对抗方式审查 Claude 的实现，双方来回辩论直到形成共识。

他观察到代码在稳定性和可扩展性上变好；后来又加入另一个更擅长大局审查的模型。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 危险的一面

一次运行启动了 <strong>75 个并行 agent</strong>，大约 <strong>10 分钟</strong>耗尽 token。

这不是模型能力问题，而是编排器缺少并发、预算和停止边界。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-center">
更强的 reviewer 能减少错误；没有 guardrail 的 reviewer 群也能制造另一种事故。
</div>

---

# 14 步流程仍然痛苦：文档化不等于闭环化

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 已经拥有

- 14 步流程
- 详细架构文档
- code review
- push 前审查
- 返工路径

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 仍然发生

- review 后反复返工
- instrumentation 被遗漏
- epic 中途冒出关联问题
- 手工批准和整合

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 下一步诉求

- 识别 recurring issue
- 诊断根因
- 提议 harness 改进
- 测量效果并反馈

</div>

</div>

<div class="mt-7 p-4 rounded bg-red-50 border-l-4 border-red-500">
Arthur 追求的不是无人值守。他明确保留人工批准，因为暂时不信任 AI 完全独立修改 harness。
</div>

---
layout: two-cols
---

# 自演化 harness：证据进入回路

<div class="space-y-3 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>Signals</strong>：设计辩论、implementation plan、code review、telemetry 与反馈。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>Reasoning</strong>：识别问题、诊断原因、提出改进。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>Human gate</strong>：人工批准后才整合变更。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>Measurement</strong>：观察新规则是否减少返工，再把结果送回 signals。</div>

</div>

<div class="mt-4 text-xs opacity-65">本集边界：回路正在搭建中，还没有达到 harness 自动重写自己的阶段。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./self-evolving-harness.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 先定义质量，否则 verifier 只能验证空气

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>架构</strong><br/>行业最佳实践、hexagonal 分层、数据库/逻辑/展示层隔离。</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>一致性</strong><br/>遵循相关 architecture docs 与 implementation plan。</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>行为</strong><br/>功能按预期工作，关联问题应尽量在 epic 开始前识别。</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>可维护性</strong><br/>代码干净、文档充分、容易解释和接手。</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>自检</strong><br/>代码与测试一起交付，不能事后再补。</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><strong>可观察性</strong><br/>instrumentation 与监控规则必须随代码一起进入系统。</div>

</div>

<div class="mt-5 p-4 rounded bg-slate-50 border border-slate-200 text-center text-sm">
质量不是一个分数，而是一组能被 verifier 分别检查的约束维度。
</div>

---

# Failure mode 要进入账本，而不是留在聊天记录里

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### Problem
发生了什么？属于架构、实现、测试、集成还是运维？

</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">

### Cause
系统当前认为根因是什么？证据来自 review、telemetry 还是执行历史？

</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### Handling
下一次靠什么阻止复发：测试、规则、权限、模板、指标或人工 gate？

</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">Arthur 建议把每个失败分类保存，再反馈到 loop 的实现计划和成功指标中。</div>
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">现实代价：搭 loop 的两三天里，新开的 QA ticket 比功能代码 ticket 还多。</div>
</div>

---
layout: two-cols
---

# 一次只做一个闭环

<div class="space-y-3 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>1 · 选一个目标</strong><br/>例如减少 push 前的 code review 返工。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>2 · 列 failure modes</strong><br/>为每一种失败写实现方案和备选路径。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>3 · 设 success metric</strong><br/>清楚说明什么变化才算 loop 有效。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>4 · 建 enforcement</strong><br/>测试存在不够，还要确保它必定被执行。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./one-loop-at-a-time.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Val 的实验：把 human-in-the-loop 的工作拆出来

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 过去的人机分工

- 人发现 issue
- 人与 agent 一起计划
- agent 写实现
- 人验证结果
- 人决定是否重试

agent 只是执行器，人仍是控制器。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 实验中的新分工

- review agent 发现 issue
- permission-locked agent 准备计划
- implementation agent 写代码
- programmatic test + 独立 reviewer 验证
- 外层 audit agent 周期触发

控制逻辑被写成软件。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Val 明确把结果称为 tinkering，而不是可靠的科学实验；这里能借鉴的是系统结构，不是 benchmark 结论。
</div>

---
layout: two-cols
---

# 控制器模型：agent 不是魔法，是闭环中的一个部件

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>System</strong>：代码仓库及其当前状态。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Controller</strong>：coding agent，根据目标决定下一步行动。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Feedback</strong>：测试、review 和环境观察，告诉 controller 是否接近目标。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Boundary</strong>：权限与 retry 上限，限制可执行动作和循环次数。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./controller-loop.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Preparation：先建立机器可读地图

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Research agent

只读仓库、探索问题，不直接改实现。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Structured plan

把任务拆成机器可读步骤，并把每步的目标写得可验证。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Programmatic checks

尽可能把完成条件表达为可以运行的检查，而不是主观自评。

</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">OpenCode 可给 research、implementation、review agent 分配不同权限，缩小误操作空间。</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">控制器先获得系统地图再行动；Val 的小规模测试里，这一阶段带来了一些改善。</div>
</div>

---

# Inner loop：每一步都要实现、验证、观察、修复

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl font-bold text-blue-600 mb-2">01</div>
<strong>Implement</strong><br/>只处理计划中的当前步骤
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-2xl font-bold text-green-600 mb-2">02</div>
<strong>Verify</strong><br/>运行程序化测试
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl font-bold text-purple-600 mb-2">03</div>
<strong>Review</strong><br/>独立 agent 判断是否完成
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-2xl font-bold text-orange-600 mb-2">04</div>
<strong>Repair</strong><br/>修复偏差并再次验证
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500"><strong>必须有上限：</strong>限制 retry 次数，避免 agent 永久旋转。</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>必须独立：</strong>让 reviewer 与 implementation 分离，减少同一上下文的自我确认。</div>
</div>

---
layout: two-cols
---

# Outer loop：让系统自己发现下一项工作

<div class="space-y-3 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>事件入口</strong>：GitHub issue webhook 触发修复流程。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>计划入口</strong>：定时运行 audit agent，主动扫描 repo 的潜在问题。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>执行入口</strong>：把 issue 和过去的学习一起送入 inner loop。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>记忆出口</strong>：完成后保存本轮 learnings，供下一轮使用。</div>

</div>

<div class="mt-4 text-xs opacity-65">连续性来自显式持久化；仅仅重复调用 agent 不会自动积累经验。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nested-loops.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 生产栈的顺序：先看见，再判断，最后循环

<div class="space-y-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Observability</strong><br/>既能鸟瞰全局，也能下钻到单次执行，知道问题发生在哪里。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Evaluation</strong><br/>定义测什么、如何判定好坏、系统是否随时间改善。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Looping</strong><br/>在可观察、可评估的基础上自动选择动作并反馈结果。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./production-loop-stack.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么更多 agent 不会自动让结果变好

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 没有 eval layer

- 不知道该测哪个维度
- 不知道一次修改是改善还是退化
- 不会把结果表达成 agent 可消费的信号
- 多个 agent 只是在更快地产生变更

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 有 eval layer

- 目标拆成可比较的指标
- 每次运行留下 trace 和结果
- verifier 能判定是否继续
- outer loop 才能学习何时调整策略

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-center">
Spar 的核心提醒：规模不是 feedback；没有评价函数，循环只会重复。
</div>

---

# 成本问题：loop 的单位经济性必须可观测

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 便宜模型
Val 的 OpenCode 实验使用更便宜、当时可免费使用的 DeepSeek 版本，降低大规模 task run 的成本。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Run budgets
为每次执行设置 loop 次数、tick、tool call 和明确 breaking condition。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Stage metrics
Arthur 计划在每个阶段记录 token 使用，找出最昂贵的问题和 prompt，再逐段优化。

</div>

</div>

<div class="mt-7 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
圆桌没有给出统一成本答案：有人优先降低单次调用价格，也有人认为已完成的产出足以覆盖额外 token。共识是先让成本可测。
</div>

---

# 失控通常来自边界不清，而不是模型不够大

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 并发冲突
一位参与者建议前端、后端各不超过两个 coding agent；当多个 agent 同改文件，误解会快速放大。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 清晰分层
把前端、后端、数据库拆成边界明确的任务，尤其先固定数据库架构与业务语义。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 模板与 scaffolding
已有的前后端模板、组件和职责说明能减少 agent 自行补假设、重复造组件。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 任务边界
复杂法律或高风险判断需要人工介入；长 trace 也必须保留，否则错误报告仍可能显得可信。

</div>

</div>

<div class="mt-5 text-xs opacity-65 text-center">这些是圆桌参与者的经验判断，不是本集给出的通用 benchmark 结论。</div>

---

# 内置 goal / loop 命令：能帮忙，但不替你设计系统

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 适合直接使用

- 日常工作中的明确子任务
- 人暂时离开，回来再 review
- 简单目标可交给 verifier sub-agent
- 自动化或 schedule 触发的重复工作

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 仍需自行架构

- 跨轮保存状态
- 正式、程序化的完成判定
- 自定义成本与 retry 边界
- 多阶段权限和人工批准
- outer loop 的发现与学习机制

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>作者概括：</strong>内置命令是 loop 的一个产品化入口；loop engineering 决定入口背后的目标、状态、反馈、停止和责任边界。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">9 条直接引文中，本页收录 8 条；均已按 transcript 固定字符串核验。</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I don't write prompts anymore."
<div class="text-xs opacity-60 mt-1 not-italic">— 开场：工程对象从 prompt 转向 loop</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"what is quality"
<div class="text-xs opacity-60 mt-1 not-italic">— Arthur：先定义 verifier 要验证什么</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"it's multiple loops."
<div class="text-xs opacity-60 mt-1 not-italic">— Arthur：不要把所有优化目标塞进一个闭环</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"machine readable plan"
<div class="text-xs opacity-60 mt-1 not-italic">— Val：代码修改前先建立可执行计划</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"independent review"
<div class="text-xs opacity-60 mt-1 not-italic">— Val：把实现与验收拆开</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"millions and millions of tokens."
<div class="text-xs opacity-60 mt-1 not-italic">— 圆桌：长循环的成本不可忽略</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"it will create chaos"
<div class="text-xs opacity-60 mt-1 not-italic">— 圆桌：并发修改与状态混乱的后果</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"well worth the cost"
<div class="text-xs opacity-60 mt-1 not-italic">— Arthur：以已完成的产出来评价额外 token</div>
</div>

</div>

---
layout: end
---

# "built-in tool, why not?"

<div class="mt-8 text-base opacity-70">
先用现成工具；当目标、状态、验证与边界变复杂，再把 loop 当作一套系统来工程化。
</div>

<div class="mt-6 text-sm opacity-50">MLOps.community · Reading Group · 2026</div>
