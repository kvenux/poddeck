---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '对话Vincent Koc：OpenClaw的反思与进化，中国的“小龙虾”狂热，与Agent的下一步'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<!-- 01 -->

<div class="text-sm tracking-[0.24em] uppercase text-pink-600 mb-5">硅谷101 · PodDeck</div>

# 对话 Vincent Koc

<div class="text-3xl mt-5 font-semibold leading-tight">
OpenClaw 的反思与进化
</div>

<div class="text-xl mt-5 opacity-80">
中国的 小龙虾 狂热，与 Agent 的下一步
</div>

<div class="mt-9 text-base opacity-70">
OpenClaw Foundation Chief Architect
</div>

<div class="mt-10 inline-flex gap-3 text-xs">
  <span class="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">Personal AI</span>
  <span class="px-3 py-1 rounded-full bg-orange-50 border border-orange-200">Agentic Engineering</span>
  <span class="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">Open Source</span>
</div>

---

<!-- 02 -->

# 为什么值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 热潮之后看采用
声量降温不等于需求消失；npm 周下载反而从约 250–300 万升至 400 万以上。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 公开承认做错
团队用 Agent 高速开发，却因稳定性失去用户；反思落到了工具链与验证系统。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 个人 Agent 的边界
它不只生成代码，还拥有记忆、技能、工具，并能修改自己的实现。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 安全不是一个开关
凭据、容器、操作系统权限、意图判断与模型护栏共同构成边界。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 组织不能照搬旧图
多 Agent 设计若只是复制旧部门结构，可能把历史低效一起自动化。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 基金会的战略位置
OpenClaw 想做跨模型、跨公司、跨国家的中立 Agent 基础层。
</div>

</div>

---

<!-- 03 -->

# 半年，从贡献者到 Chief Architect

<div class="grid grid-cols-4 gap-4 mt-8 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-600">12 月初</div>
<div class="mt-3">在 X 上看到交易者使用项目，开始测试</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-600">12 月末</div>
<div class="mt-3">开始向项目贡献代码</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-2xl font-bold text-orange-600">1 月</div>
<div class="mt-3">贡献滚成维护者角色</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl font-bold text-purple-600">现在</div>
<div class="mt-3">负责基金会产品与工程架构</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<div class="text-xl italic">“think like a child”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 谈 Peter Steinberger 的创造态度，转写 03:52</div>
</div>

---

<!-- 04 -->

# 病毒式传播的临界点

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧金山：排队成为信号
2 月的一场活动原定 19:00 开始；Vincent 说如果 17:00 才到，已经算晚，队伍绕到楼外。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 中国：跨圈层扩散
团队在 Discord 里看到深圳办公室外的阿姨们使用 OpenClaw，也看到说唱艺人在社交媒体讨论它。
</div>

</div>

<div class="mt-6 p-5 rounded bg-purple-50 border border-purple-200 text-left">
热度让团队第一次面对一个错位：原本给开发者和折腾者的开源软件，突然被企业、普通用户和生态厂商当成基础设施。
</div>

<div class="mt-4 text-xs opacity-60">事实来源：转写 02:20–04:55</div>

---
layout: two-cols
---

<!-- 05 -->

# 中国速度形成采用回路

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
开放源码降低了本地可用门槛，成为扩散催化剂。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
用户和企业先部署、先实验，再把问题带回社区。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
本地厂商快速在 OpenClaw 之上做产品，进一步扩大触达。
</div>

<div class="text-xs opacity-60">
<strong>作者概括：</strong>中国市场在这段访谈里更像提前发生的压力测试，而不只是销量市场。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./china-adoption-loop.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 06 -->

# 同一种技术，两种默认动作

<div class="grid grid-cols-2 gap-7 mt-7 text-sm">

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### Vincent 观察到的中国模式

- 先采用，再在使用中理解
- 有企业给员工设置自动化数量 KPI
- 开源与本地可访问性帮助产品进入市场
- 更快暴露规模、成本与安全问题
</div>

<div class="p-6 rounded bg-red-50 border-2 border-red-200">

### 他对其他市场的对照

- 先将高权限 Agent 视为风险
- 企业担心安全后选择封锁
- 等待理解、治理与组织流程跟上
- 最终仍可能回到采用，但速度更慢
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
这是受访者的市场观察，不是对所有中国或西方组织的普遍定律。
</div>

---

<!-- 07 -->

# 热度降了，采用反而更高

<div class="grid grid-cols-3 gap-5 mt-7 text-center">

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-sm font-semibold">热潮高点</div>
<div class="text-4xl font-bold text-orange-600 my-3">250–300 万</div>
<div class="text-xs opacity-70">npm 周下载，Vincent 的约数</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-sm font-semibold">中间阶段</div>
<div class="text-4xl font-bold text-blue-600 my-3">降温</div>
<div class="text-xs opacity-70">讨论热度与产品稳定性都经历回撤</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-sm font-semibold">几周前</div>
<div class="text-4xl font-bold text-green-600 my-3">400 万+</div>
<div class="text-xs opacity-70">npm 周下载；未含中国镜像等来源</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500 text-left">
<div class="text-xl italic">“we did mess it up a little bit”</div>
<div class="text-xs opacity-60 mt-1">— Vincent 复盘高速开发造成的不稳定，转写 10:59</div>
</div>

---

<!-- 08 -->

# Agent 写得快，不代表系统长得稳

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 出错链条
团队想用 Agent 把开发速度推到前沿 → 软件不够稳定 → 用户流失 → 热潮退去时暴露真实产品质量。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 修复链条
把用户挫败转成工程目标 → 补测试、审查、运行环境与证据 → 稳定性和功能改善 → 下载继续增长。
</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border border-blue-200 text-left">
<strong>作者概括：</strong>这不是一次速度与质量的抽象争论，而是团队发现 Agentic Engineering 需要新的生产基础设施。
</div>

<div class="mt-4 text-xs opacity-60">事实来源：转写 10:59–11:59、41:29–43:00</div>

---

<!-- 09 -->

# 13,000 个 PR：人类工作流先撞墙

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600">13,000</div>
<div class="mt-3">某一时点积压的开放 PR</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">AI Review</div>
<div class="mt-3">团队为自己的审查负载造工具</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">约 100</div>
<div class="mt-3">生态仓库，覆盖库、自动化和测试设施</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<div class="text-xl italic">“designed for our scale”</div>
<div class="text-xs opacity-60 mt-1">— Vincent 解释现有工具为何失效，转写 05:55</div>
</div>

---
layout: two-cols
---

<!-- 10 -->

# 扩展问题催生新的工程栈

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
入口不是路线图，而是无法处理的 PR 和跨平台回归。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Agent review、自动化仓库和测试基础设施逐层补齐。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
每个内部工具都像一间小型创业公司，却共同支撑主项目。
</div>

<div class="text-xs opacity-60">
<strong>作者概括：</strong>社区规模把 OpenClaw 从单一产品推成了一组协同运行的系统。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scale-infrastructure.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 11 -->

# OpenClaw 不想只是一只个人 Agent

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 产品层
个人 Agent 可以服务开发者、企业、小商家、普通家庭，也能在家里连接本地模型。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 生态层
基金会希望让 Agent 技术保持开放、独立、可访问，并允许不同公司在其上构建。
</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">

### 边界选择
现阶段团队更愿意把精力放在软件与生态，而不是自己搭服务器、托管所有用户并直接控制分发。
</div>

<div class="mt-4 text-xs opacity-60">事实来源：转写 06:25–07:27、14:59–16:01</div>

---

<!-- 12 -->

# Coding Agent 与 Personal Agent 的分水岭

<div class="grid grid-cols-2 gap-7 mt-6 text-sm">

<div class="p-6 rounded bg-slate-50 border-2 border-slate-200">

### Coding Agent

- 以终端或应用中的对话线程为中心
- 目标通常是生成或修改代码
- 行为被既定 harness 限定
- 工作完成后把结果交还给人
</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### OpenClaw 的 Personal Agent

- 拥有持续记忆与可积累技能
- 能连接消息、网页、电话与外部工具
- 需要时可生成代码完成现实任务
- 还能调整自己的实现来接入新能力
</div>

</div>

<div class="mt-6 text-xs opacity-60">
事实来源：转写 09:28–10:59；分类是对受访者描述的结构化整理。
</div>

---
layout: two-cols
---

<!-- 13 -->

# 自修改：跨出工具边界

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
当购物网站有 API，它可以生成所需代码完成任务。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
当新模型尚未被框架支持，它可以修改自身代码加入支持。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
代码不再只是输出物，也成为 Agent 扩展行动空间的手段。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-lg italic">“The agent can modify itself”</div>
<div class="text-xs opacity-60 mt-1">转写 10:28</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./personal-agent-loop.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 14 -->

# 从个人助手到团队成员

<div class="mt-7 p-7 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
<div class="text-2xl italic">“It's an agent but it lives with the team”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 对比个人 coding assistant 与项目 Agent，转写 13:29</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-4 rounded bg-slate-50 border border-slate-200">
过去：工程师独自使用助手，再把结果分享给同事。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
现在：Agent 驻留在项目中，能直接与多位同事沟通。
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
变化：协作对象从个人工具变成团队可共同访问的参与者。
</div>

</div>

---

<!-- 15 -->

# Always-on Gateway：让 Agent 持续存在

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-slate-50 border-l-4 border-slate-400">

### 传统线程
对话是轮次式的：人发出消息，Agent 回答，线程等待下一次输入。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Gateway 服务
它常驻在机器上，连接消息渠道、模型、记忆和工具，并能在后台推进任务。
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
<div class="p-4 rounded bg-green-50 border border-green-200"><strong>Heartbeat</strong><br><span class="text-xs">每 10 或 30 分钟触发</span></div>
<div class="p-4 rounded bg-orange-50 border border-orange-200"><strong>Check</strong><br><span class="text-xs">判断是否需要行动</span></div>
<div class="p-4 rounded bg-purple-50 border border-purple-200"><strong>Act</strong><br><span class="text-xs">调度任务并在后台执行</span></div>
</div>

<div class="mt-4 text-xs opacity-60">事实来源：转写 23:39–24:40</div>

---
layout: two-cols
---

<!-- 16 -->

# Gateway：主动性与风险同源

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
所有消息、记忆、模型与工具通过一个常驻服务汇合。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
Heartbeat 让它能主动检查和推进任务，而不只是等待提问。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
同一结构也集中了承载凭据、文件访问和跨系统执行的风险。
</div>

<div class="text-xs opacity-60">
<strong>作者概括：</strong>主动性与攻击面来自同一架构选择，不能分开评估。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gateway-heartbeat.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 17 -->

# 安全问题不能全推给 OpenClaw

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 高权限现实
如果任何 coding agent 拿到管理员权限，它同样能删文件、联网和执行高风险操作。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 意图依赖
删除文件在个人电脑上可能危险，在一次性测试机上却可能完全合理。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 产业协作
模型、操作系统、Agent harness 与外部服务都要共同提供可验证的边界。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-left">
结论不是降低警惕，而是把安全责任拆到真实控制点：凭据、权限、执行环境、批准逻辑和服务接口。
</div>

---
layout: two-cols
---

<!-- 18 -->

# 安全是一组同心防线

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
凭据不以明文存储，而进入 vault 类机制。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
容器限制文件和网络；操作系统层进一步验证边界。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
Auto Mode 依据对话意图判断何时继续、何时请求批准。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
本地模型可负责推理，前沿模型只承担安全判断，形成混合方案。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./layered-safety.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 19 -->

# Agent 能力 = 模型 × Harness

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型贡献
基础智能、长任务能力、工具使用习惯，以及是否针对 OpenClaw 环境做过后训练。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Harness 贡献
记忆、工具、上下文、执行环境、权限系统，以及让模型持续工作的运行时。
</div>

</div>

<div class="mt-7 p-6 rounded bg-green-50 border-l-4 border-green-500 text-left">
<div class="text-2xl italic">“the combination of the two”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 解释模型与 harness 的共同作用，转写 30:13</div>
</div>

---

<!-- 20 -->

# 模型中立，不等于体验自动一致

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 接入原则
支持不同提供方的新模型，争取首日兼容，不把产品能力只押在某一家模型上。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 真实差异
有些模型无法稳定工作，说明基础智能、规模和对工具的训练仍有门槛。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 当时的评测计划
团队正与研究团队、模型实验室准备约 100–120 项任务的公开评测。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 优化方向
评测失败后再判断：应改模型、上下文、记忆，还是为小模型调整架构。
</div>

</div>

<div class="mt-5 text-xs opacity-60">
时间边界：这是访谈时仍在推进的计划，不代表评测已经发布。事实来源：转写 28:43–31:46。
</div>

---

<!-- 21 -->

# 记忆仍是个人 Agent 的硬骨头

<div class="mt-6 p-7 rounded bg-red-50 border-l-4 border-red-500 text-left">
<div class="text-3xl italic">“this is like 100% not a solved problem”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 谈 persistent memory，转写 32:16</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
换模型后，新模型是否能正确理解旧模型写下的记忆？
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
团队共用一个 Agent 时，哪些记忆可以被哪些成员看到？
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
个性化越强，隐私、错误累积和错误假设的代价也越高。
</div>

</div>

---
layout: two-cols
---

<!-- 22 -->

# 记忆的本质是边界

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
个人记忆需要跨会话持续，却不能无限积累错误。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
共享记忆需要支持多租户，也要知道谁能读、谁能写。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
模型切换要求记忆具有可迁移的语义，而不是依赖单一模型习惯。
</div>

<div class="text-xs opacity-60">
<strong>作者概括：</strong>记忆不是多存一些文本，而是身份、权限、版本与解释权的交叉点。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-boundaries.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 23 -->

# 长任务：OpenClaw 更像总管，不是万能模型

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型侧
更新一代模型正在改善长周期任务能力，模型公司会继续提供新的方法与系统。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 工具侧
自优化、计划、检查点等能力可以作为工具或功能交给 Agent 调用。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### OpenClaw 侧
保持对整体工作的掌握，选择模型、组织工具并协调任务，而非独自解决所有长任务难题。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-left">
Vincent 在加入 OpenClaw 前研究 self-optimizing agents；他的判断仍是把能力带入系统，而不是让框架重复发明模型研究。
</div>

---

<!-- 24 -->

# 多 Agent 的起点不是数量，而是上下文

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
<div class="text-2xl italic">“one single agent is like more than sufficient”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 对大多数人的判断，转写 34:49</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-green-50 border border-green-200">

### 适合保持一个 Agent
任务共享大量背景、需要连续记忆，或只是偶发的复杂工作。
</div>

<div class="p-5 rounded bg-orange-50 border border-orange-200">

### 适合拆出专门 Agent
任务高度重复、拥有独立 system prompt，并且会定期运行。
</div>

</div>

---

<!-- 25 -->

# Conway 定律陷阱：把旧组织复制成 Agent

<div class="grid grid-cols-2 gap-7 mt-6 text-sm">

<div class="p-6 rounded bg-red-50 border-2 border-red-200">

### 旧路径
营销有增长组和留存组，于是 Agent 系统也照着建经理、规划者、子 Agent 和层层团队。
</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### 重新提问
如果从一张白纸开始，最理想的任务拆分、记忆边界与协作关系究竟是什么？
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括：</strong>自动化旧组织，可能只会让旧组织的沟通成本跑得更快。
</div>

<div class="mt-4 text-xs opacity-60">事实来源：转写 35:52–37:27</div>

---

<!-- 26 -->

# Agent-first 不是加一个助手，而是重画工作

<div class="grid grid-cols-4 gap-4 mt-7 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-600">01</div>
<div class="mt-2">从空白问题开始</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-2xl font-bold text-orange-600">02</div>
<div class="mt-2">一天内做出可运行版本</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-2xl font-bold text-red-600">03</div>
<div class="mt-2">接受它不会完美</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-600">04</div>
<div class="mt-2">从实际失败继续迭代</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
Vincent 认为 2026 年的 Agentic Engineering 已不同于此前的 AI 开发：模型本身能参与设计 Agent，不必先手工搭满所有小技能。
</div>

---
layout: two-cols
---

<!-- 27 -->

# 先设计工作，再定 Agent 结构

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
直接复制部门图，会继承审批、交接与信息孤岛。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
从目标、上下文和验证方式出发，重新画任务流。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
只有在重复工作自然分离时，才增加专门 Agent。
</div>

<div class="text-xs opacity-60">
<strong>作者概括：</strong>Agent 架构应映射问题，而不是映射旧职位。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-first-org.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 28 -->

# Agentic Engineering 需要一座工厂

<div class="mt-5 p-6 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
<div class="text-3xl italic">“We call it a factory”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 描述规模化 Agent 工程，转写 42:30</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
Agent 可在多数云上启动不同操作系统与硬件环境，受访者给出的速度约为 20 秒。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
进入环境后自动截图、录屏、点击与验证，让变化留下可检查证据。
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
维护者可以接管测试机，亲自复核 Agent 证明，而不是只相信文字报告。
</div>

</div>

---
layout: two-cols
---

<!-- 29 -->

# 一条传送带不等于工厂

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Agent 负责实现，只是传送带。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
测试机、跨平台环境与自动操作提供生产设备。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
截图、视频、前后对比和人工接管形成质量保证。
</div>

<div class="text-xs opacity-60">
<strong>作者概括：</strong>速度来自整个验证系统，而不是某个模型单独写代码的速度。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-factory.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 30 -->

# 消费者与企业，形成双向飞轮

<div class="grid grid-cols-2 gap-7 mt-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 消费者 → 企业
个人用户把熟悉的 Agent 带进工作场景，推动组织思考内部部署、权限与协作。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 企业 → 消费者
企业规模要求带来稳定性、安全与扩展改进，又让普通用户获得更可靠的产品。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括：</strong>开源与可扩展性削弱了传统 B2C、B2B 的产品分界，让两类采用共同打磨同一底层。
</div>

<div class="mt-4 text-xs opacity-60">事实来源：转写 43:00–44:31</div>

---

<!-- 31 -->

# 五六人的核心工程团队，为什么还做原生 App

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 早就存在
iOS 与 Android 代码在 1、2 月已在代码库；基金会实体成立后才正式申请开发者账号发布。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 提供可选入口
有些用户需要第一方体验，发布 App 让他们不必依赖第三方包装。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 先交付再吸收反馈
发布后的两周内快速迭代，产品外观和体验发生明显变化。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 选择原生实现
团队分别使用原生 Android 与 iOS 代码，并依靠 Agent 降低多端维护成本。
</div>

</div>

<div class="mt-5 text-xs opacity-60">
团队规模来自 Vincent 的说法：主工程团队约五六人，另有维护者与生态贡献者。事实来源：转写 44:31–47:37。
</div>

---

<!-- 32 -->

# 基金会要做 Agent 世界的中立层

<div class="mt-6 p-7 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<div class="text-3xl italic">“essentially want to become Switzerland for AI agents”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 描述基金会使命，转写 52:12</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
美国注册的非营利组织，收入若产生会回到社区、产品与生态。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
支持既包括产业伙伴捐助，也包括 GitHub 上小到 5 美元的个人捐赠。
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
衡量重点不是融资倍数与收入目标，而是对个人、企业和 AI 社区的影响。
</div>

</div>

---

<!-- 33 -->

# 下一步：从人人有 Agent，到 Agent 彼此协作

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 更广的入口
大量人只有手机，没有传统电脑；on-device、agent-first 的移动体验会决定普及速度。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 新的互操作问题
个人 Agent、工作 Agent、不同模型公司与企业系统需要像不同手机一样彼此连接。
</div>

</div>

<div class="mt-7 p-6 rounded bg-green-50 border-l-4 border-green-500 text-left">
<div class="text-2xl italic">“most people's computer is their phone”</div>
<div class="text-xs opacity-60 mt-2">— Vincent 谈 AI 普及入口，转写 1:00:23</div>
</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border border-yellow-200 text-left text-sm">
<strong>作者概括：</strong>下一个瓶颈可能不再是单 Agent 是否聪明，而是异构 Agent 能否在权限清晰的前提下互相调用。
</div>

---

<!-- 34 -->

# 核心金句

<div class="text-xs opacity-60 mb-3">以下 8 句均已按转写原文逐字检索；标签给出语境。</div>

<div class="grid grid-cols-2 gap-2 text-[11px] leading-snug text-left">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“we did mess it up a little bit”
<div class="text-[10px] opacity-60 mt-1 not-italic">稳定性反思 · 10:59</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“The agent can modify itself”
<div class="text-[10px] opacity-60 mt-1 not-italic">自修改能力 · 10:28</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“It's an agent but it lives with the team”
<div class="text-[10px] opacity-60 mt-1 not-italic">团队协作 · 13:29</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“this is like 100% not a solved problem”
<div class="text-[10px] opacity-60 mt-1 not-italic">持久记忆 · 32:16</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“one single agent is like more than sufficient”
<div class="text-[10px] opacity-60 mt-1 not-italic">多 Agent 取舍 · 34:49</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“We call it a factory”
<div class="text-[10px] opacity-60 mt-1 not-italic">Agentic Engineering · 42:30</div>
</div>

<div class="p-3 rounded bg-pink-50 border-l-4 border-pink-500 italic">
“essentially want to become Switzerland for AI agents”
<div class="text-[10px] opacity-60 mt-1 not-italic">基金会定位 · 52:12</div>
</div>

<div class="p-3 rounded bg-teal-50 border-l-4 border-teal-500 italic">
“it's a positive sum game for everyone”
<div class="text-[10px] opacity-60 mt-1 not-italic">开源价值 · 1:02:25</div>
</div>

</div>

---
layout: end
---

<!-- 35 -->

# 开放不是增长策略，而是分配未来的方式

<div class="mt-10 text-3xl italic leading-relaxed">
“it's a positive sum game for everyone”
</div>

<div class="mt-6 text-sm opacity-60">
Vincent Koc · OpenClaw Foundation
</div>

<div class="mt-10 text-xs opacity-50">
硅谷101 · 1:05:26 · PodDeck
</div>
