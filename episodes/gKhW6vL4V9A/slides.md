---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'OpenAI’s Vision for the AI Super App — Akshay Nathan, OpenAI'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 超级应用的产品路线

### Akshay Nathan · OpenAI

<div class="mt-6 text-sm opacity-70">
Latent Space · ChatGPT Work · Codex · Agents
</div>

<div class="mt-10 text-xs opacity-50 leading-relaxed">
从共享 harness 到通用知识工作<br/>
从一次对话到持久上下文与可扩展工具
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 超级应用不是大菜单
核心不是把功能堆进一个入口，而是让同一套 agent 能力承接不同工作意图。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Codex 如何外溢
非开发者也开始用 coding agent，促使团队重新思考谁需要 agent 的完整能力。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Harness 与 UX 分层
底层能力共享，表层根据代码、知识工作和安全默认值做有立场的取舍。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Artifact 正在改写办公
表格、幻灯片、文档与 Sites 不再只是输出，而成为人与 agent 共同迭代的工作面。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Context 是复利资产
文件、插件、记忆和持续任务让每次使用不再从零开始，但也带来权限与信任问题。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 生产力指标失灵
代码行、PR 数和 token 数更容易增长，真正稀缺的却变成想法、品味与高质量反馈循环。

</div>

</div>

---

# 从 no-code 到自然语言编程

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 自动化测试创业
在视觉 LLM 之前，Akshay 就尝试用 AI 做自动化测试；当时的工具链仍然笨重。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Airtable 阶段
目标是把数据库背后的能力交给更多非工程师，让结构化信息更可操作。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### LLM 补上接口层
自然语言把代码能力暴露给普通人，同时隐藏底层实现细节；这条职业路径因此闭环。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>访谈脉络：</strong>超级应用的起点不是功能聚合，而是降低表达意图与调用计算能力之间的门槛。
</div>

---

# 企业 AI 没有统一用例

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 表面共识

- 公司都想把内部数据与上下文接入 AI
- 专门团队成立，并获得可观预算
- 员工已熟悉通用对话式 AI

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 真实分化

- 一问到离散任务，答案立刻出现巨大差异
- 同一个输入框既是魔法，也是空白画布
- 产品必须在用户当前工作流里教会他下一步

</div>

</div>

<div class="mt-6 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-center text-sm">
通用模型解决能力供给；产品仍要解决任务发现、上下文准备与采用路径。
</div>

---

# Adoption gap：会聊天，不等于会委派

<div class="grid grid-cols-3 gap-4 mt-5 text-sm text-center">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-700 mb-2">已普及</div>
大量用户已经理解如何与 ChatGPT 对话，也愿意把 AI 带进日常工作。
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-700 mb-2">刚解锁</div>
Agents 需要正确上下文、工具连接与监督，使用心智从回答问题变成完成任务。
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-700 mb-2">仍待触达</div>
真正理解任意任务可被拆解、执行与验证的人，仍只是更大市场中的早期采用者。
</div>

</div>

<div class="mt-6 text-sm opacity-70">
ChatGPT Work 要扩大的不是对话入口，而是可委派任务的想象边界。
</div>

---

# 转折信号：非开发者开始用 Codex

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 内部观察
战略财务、市场等非开发团队开始把 Codex 用于自己的任务。最引人注意的不是用例本身，而是使用者对掌握新能力的自豪感。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 产品推论
Coding agent 提供的不是职业专属工具，而是一台可被自然语言驱动、可以行动的计算机。它的适用面比团队原先预计得更早、更广。

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>关键判断：</strong>既然 ChatGPT 已有广泛分发，下一步就是把 Codex 的 agent 能力呈现给原本不会主动寻找 coding 工具的人。
</div>

---

# 为什么选择合并体验

<div class="space-y-3 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>被放弃的方向：</strong>按职业把代码、策略、营销、运营拆成彼此隔离的应用或模式。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>现实变化：</strong>AI 让工作边界每几个月都在重画；会写代码的人也做研究，做运营的人也开始构建工具。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>设计原则：</strong>产品可以建议更合适的体验，但不能依据用户当前身份限制他能调用的能力。
</div>

</div>

<div class="mt-6 text-center text-lg font-semibold text-purple-700">
统一的是 primitive；保留差异的是工作界面与安全默认值。
</div>

---
layout: two-cols
---

# 一套 agent，多种任务

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
代码、研究、策略、营销和个人事务都需要读上下文、调用工具、产出可验证结果。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
用户不必先学习产品架构，再决定自己属于哪一种角色。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
ChatGPT Work 的任务，是把共享能力压缩成一个连贯入口。
</div>

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

# 同一 harness，不同产品意见

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 共享底层
Plugins、computer use、artifacts 与面向知识工作的 harness 改进，在两种体验里都可用。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Codex 视图
面向 Git 仓库与文件编辑，diff、agent 思考过程和工程状态更靠前。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Work 视图
隐藏不必要的仓库细节，强调 artifact、工具来源与普通知识工作者能理解的结果。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
差异还包括 sandbox 默认值。能力一致不等于界面完全相同；安全与可理解性需要有立场的抽象。
</div>

---
layout: two-cols
---

# Shared harness 分层

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
底层统一，让能力进步可以同时进入 Codex 与 ChatGPT Work。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
中间层提供插件、计算机使用、文件与持久状态。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
顶层界面决定用户看到多少过程、哪些对象最突出、何时要求确认。
</div>

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

# Harness 会不断分化，再收敛

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Chat 路线长期优化

- 更低延迟
- 更自然的人格与交流感
- 搜索、学习、写消息、创作等高频任务

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Codex 路线揭示的新能力

- 给 agent 一台灵活计算机
- 允许读写文件、运行工具、持续执行
- 在复杂任务里以环境承载中间状态

</div>

</div>

<div class="mt-6 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm text-center">
知识工作先借用 Codex 的计算机环境，再逐步把工程细节抽象掉；长期目标仍是让能力在各入口收敛。
</div>

---

# Router 的工作：在意图发生时切换

<div class="grid grid-cols-3 gap-4 mt-5 text-sm text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-700 mb-2">Chat</div>
快速交流、搜索、学习、生成内容
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-2xl font-bold text-yellow-700 mb-2">Intent signal</div>
当模型识别到创建表格等任务，更适合进入带 sandbox 的工作环境
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-700 mb-2">Work</div>
文件、工具、artifact 与持续执行
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
这不是要求用户先选择某个版本的智能，而是让产品根据任务形态提供更合适的执行环境，同时保留手动切换。
</div>

---

# 默认值必须承担复杂性

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 对大多数人

- 从默认模型与默认 reasoning effort 开始
- 默认配置要覆盖多数任务
- 失败时再调整成本、速度或质量

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 对 power user

- Goal 适合可验证、可持续推进的任务
- Ultra 适合复杂探索或高度并行工作
- 高级模式消耗更多 limits，因此被放入 advanced settings

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
产品把多维模型选择投影到更易理解的速度—质量轴；精细控制仍在，但不应该成为入门门槛。
</div>

---
layout: two-cols
---

# 任务模式是一架梯子

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
先用默认值，让系统承担初始选择成本。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
当质量、成本或协作节奏不合适，再增加 steering 或进入 Goal。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
Ultra 与多 agent 适合复杂、开放或可并行问题，不应成为所有任务的默认模板。
</div>

</div>

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

# Artifacts：从回答走向可操作结果

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型质量
访谈把 5.4、5.5 到 5.6 的 artifact 质量提升视为重要变化。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 产品容器
表格可在界面内查看、修改与比较，而不是只交付一段文本或一组文件链接。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 用户协作
退休计算器示例表明，用户能先看到接近真实交付物的结构，再继续迭代。

</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
Artifact 的价值不只是生成速度，而是把需求澄清、结果检查与修改意见放在同一个可见对象上。
</div>

---

# 为什么可见 artifact 会提高信任

<div class="grid grid-cols-4 gap-3 mt-6 text-sm text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-700 mb-2">意图</div>
用户描述需要的结果
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold text-purple-700 mb-2">生成</div>
Agent 创建工作对象
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold text-yellow-700 mb-2">对照</div>
用户看到同事会看到的高保真结果
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700 mb-2">迭代</div>
修改发生在对象本身，而非重新解释上下文
</div>

</div>

<div class="mt-8 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>产品含义：</strong>信任来自可检查的中间物与连续迭代，不只是模型在最后一次回答里表现得更聪明。
</div>

---

# Sites 正在成为新的 canonical artifact

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 旧容器的边界
PowerPoint 与 Excel 很灵活，但能力被产品功能和使用者掌握程度共同限制；复杂信息常被压成静态页面。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Site 的带宽
HTML 可以把图表、交互、数据库视图与说明放在一个对象里。企业财务团队已把部分月度协作从幻灯片和表格迁到 Sites。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
模型选择滑杆本身也几乎完全在一个 Site 中完成设计、工程与产品协作：产品在生成自己的原型。
</div>

---

# 现场案例：30 张照片变成研究环境

<div class="grid grid-cols-3 gap-4 mt-4 text-sm text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-700 mb-2">30</div>
桌游照片被一次性放进 ChatGPT
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-700 mb-2">1.7B</div>
现场叙述中的 token 消耗量
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-700 mb-2">Site</div>
产出可玩的 3D 棋盘，并进一步承载 self-play、benchmark 与参数分析
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>案例意义：</strong>研究输出从长 Markdown 变成可操作界面；但信息过长、数字过载与持久数据库能力仍然暴露出 Sites 的边界。
</div>

---

# 设计一个用来做产品的产品

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 能力过度暴露
每个工具、每条执行轨迹、每种对象都直接展示，用户会在开始任务前先被界面淹没。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 能力过度隐藏
界面过于简化，用户无法确认 agent 是否用了正确工具、数据来源与权限范围。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>平衡点：</strong>给用户足够的表达与验证表面，然后让 UI 退到后面；系统通过当下任务展示下一种能力。
</div>

---

# Show, don’t tell 是采用机制

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 低效方式
用文章、功能列表和一次性 onboarding 解释所有可能用例。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 更自然的方式
在用户当前任务里呈现一个可完成的新动作，让结果本身扩大他的想象力。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 模型优势
展示可以针对个人历史、当前上下文与采用阶段动态变化，不必使用统一教程。

</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">
增长来自用户亲自感受到能力，并把这个新用法展示给同事或朋友。
</div>

---
layout: two-cols
---

# 分发路线：开发者只是起点

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>开发者：</strong>愿意承受配置摩擦，是 Codex 最早验证 agent 能力的市场。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>通用知识工作：</strong>需要 artifacts、computer use 与更容易理解的产品表面。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>每个人：</strong>把知识工作的学习迁移到个人生活，让 agent 覆盖更广泛的目标。
</div>

</div>

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

# Context flywheel：投入越多，复利越强

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 输入层

- 电脑上的文件与历史 artifacts
- ChatGPT 记忆与跨会话上下文
- Slack、代码、插件和其他连接数据

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 回报层

- 搜索不只命中关键词，还能补回遗漏背景
- Agent 主动关联旧项目与当前任务
- 一次性任务逐步累积成个人工作模型

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
复利的前提是授权：模型只有先获得相关工具与上下文，才可能在之后产生出乎意料但有用的连接。
</div>

---

# 用 AI 写绩效：搜索可以，判断不能外包

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 合适的角色
从代码、评审、Slack 等位置收集贡献证据，帮助管理者发现自己漏掉的工作。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 必须保留的人类环节
理解影响、写出评价、承担关系责任；AI 产出的完整评语不能直接伪装成人的判断。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 相对基准
Agent 可能遗漏，人也会遗漏。价值不要求全知，而在于找回管理者本来不会看到的证据。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
这是一种可 steering 的 agentic search，而不是自动化的人事决策。
</div>

---

# OpenClaw 带来的家庭实验

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 亲身尝试
Akshay 和妻子搭建了一个 OpenClaw 来管理家庭事务，给它日历，让它创建事件。后来承载它的笔记本坏了，实验才中断。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 迁移到 ChatGPT Work
团队成员已把锻炼计划和饮食追踪从 OpenClaw 迁入 Work；持续文件、scheduled tasks 与跨会话引用构成相似 primitive。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
OpenClaw 仍有独立的开源价值。OpenAI 的产品机会，是把类似的持久 agent 体验交给更多已经使用 ChatGPT 的人。
</div>

---
layout: two-cols
---

# 超级应用的最小核心

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一个会话：</strong>用户先表达目标，不必先进入垂直功能页。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>可扩展工具：</strong>插件连接财务、科学与其他专业系统。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>持久状态：</strong>文件、任务与个人记忆让工作可以跨会话延续。
</div>

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

# Subagents：展示力量，也要控制噪声

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 为什么展示
复杂任务可以拆成多条并行轨道。让用户看到 subagents，能解释为什么系统适合开放探索与大任务。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 为什么隐藏细节
完整轨迹、模型选择与每个子任务状态会制造信息洪水。多数用户只需要确认计划与结果是否可信。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Ultra 后来被放进 advanced settings 并要求主动开启：它更适合理解并行成本和 limits 的 power user。
</div>

---
layout: two-cols
---

# Subagent UX 的平衡点

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
透明度越高，越方便工程用户干预与调试。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
抽象越强，越能让普通用户聚焦目标而非执行机制。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
最佳位置随任务风险、用户经验与并行规模变化，不是一个固定开关。
</div>

</div>

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

# Memory：从熟悉感到正确时机

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Continuity
ChatGPT Work 默认继承 ChatGPT 的记忆，也能把新信息写回同一套 Memory V3 系统。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Retrieval
挑战不只是记住什么，还包括何时取回、取回多少，以及是否误把无关历史放大。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### EQ
真正好的体验要在合适时刻主动呈现信息，让惊喜保持正向，而不是显得冒犯或诡异。

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
短会话并不等于低价值：许多 one-off 累积后，会形成持久而深的个人表征。
</div>

---

# Chronicle：给记忆增加环境输入

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 它做什么
从用户如何使用电脑中学习，成为记忆系统的另一种输入源；目前在访谈中被描述为实验性功能。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 它可能带来的价值
不保证捕获所有动作和意图，但能发现用户自己没注意到的模式，并在相关任务中主动补充上下文。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
难点不是把电脑活动全部记录下来，而是把环境痕迹压缩成能提高未来任务质量的记忆。
</div>

---

# AI 把产品循环压得更紧

<div class="grid grid-cols-4 gap-3 mt-6 text-sm text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-700 mb-2">Idea</div>
提出更大胆的可验证假设
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold text-purple-700 mb-2">Build</div>
个人或小团队完成更宽的 MVP
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-700 mb-2">Talk</div>
更早让用户与内部试用者接触真实对象
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700 mb-2">Learn</div>
快速验证或推翻，再进入下一轮
</div>

</div>

<div class="mt-8 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
更小团队能完成过去需要更多人的任务，但工作并没有减少：可做的事情变多，团队因此追求更大范围的目标。
</div>

---

# 团队角色正在变成 T 型

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 横向：通才能力
工程、产品、设计与管理边界变模糊。AI 让人跨过原本不会使用的工具，并参与更多环节。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 纵向：专业深度
每个人仍需要一项真正关心、愿意长期深入的 specialty；AI 同时帮助他在该方向走得更深。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
通才不是取消专业，而是让专业者能覆盖更完整的创造链条。新的差异来自深度、判断与组合能力。
</div>

---

# 新瓶颈：ideas 与 taste

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Build 变便宜
个人与小团队能把更多想法变成可运行对象，执行不再是唯一稀缺资源。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Taste 仍稀缺
AI 可以给出多个方案，但选择什么、组合什么、什么值得继续，仍依赖人的判断。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Idea 来自闭环
有用想法通常来自用户对话、摩擦与反馈。通才的价值，是把这些信号带回构建过程。

</div>

</div>

<div class="mt-6 text-center text-lg font-semibold text-purple-700">
当执行能力扩张，最大的浪费就变成做了很多，却没有学到什么。
</div>

---
layout: two-cols
---

# 高质量 at-bats

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
一次 at-bat 必须走完整：提出想法、构建、拿反馈、验证或推翻，再进入下一轮。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
速度之外，还要观察团队是否保持谦逊、能否接受无效假设并继续尝试。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
数量不能替代质量；真正要锻炼的是持续完成学习闭环的团队肌肉。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./at-bats-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Motion 更容易，Progress 更难

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Motion

- 更多 token 消耗
- 更多 PR、代码与 artifact
- 更多 dashboard 与自动化
- 看起来每个人都很忙

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Progress

- 团队目标是否更接近
- 假设是否被验证或推翻
- 用户是否真正完成目标
- 下一轮是否基于新证据

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
代码行、story points、PR 数等代理指标在 AI 环境中开始失去相关性。团队必须先明确自己要达成什么，才有资格谈生产力。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">全部逐字回查自本期 transcript · 标签说明对应语境</div>

<div class="grid grid-cols-2 gap-3 text-[13px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“The power was not only for developers.”
<div class="text-[10px] opacity-60 mt-1 not-italic">Codex 在非开发者中的采用</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“We should enable users to choose, but we shouldn't box them in.”
<div class="text-[10px] opacity-60 mt-1 not-italic">为什么合并产品体验</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“So the harness is the same the harness is shared.”
<div class="text-[10px] opacity-60 mt-1 not-italic">Codex 与 ChatGPT Work 的共同底层</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“We want the default to be the best possible.”
<div class="text-[10px] opacity-60 mt-1 not-italic">如何处理模型与 reasoning 选项</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“The vision is like bring useful agents to everyone.”
<div class="text-[10px] opacity-60 mt-1 not-italic">从开发者扩展到所有人</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“All of these one-offs add up over time into something like quite durable.”
<div class="text-[10px] opacity-60 mt-1 not-italic">Chat 与 Work 的长期记忆</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“Are we as a team building the muscle to have not just quantity of at-bats, but quality?”
<div class="text-[10px] opacity-60 mt-1 not-italic">管理者该观察什么</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“The trap is like conflating motion and progress.”
<div class="text-[10px] opacity-60 mt-1 not-italic">AI 时代的生产力陷阱</div>
</div>

</div>

---
layout: end
---

# “Our mission is to make it possible for people to do things that they weren't able to do before.”

<div class="mt-8 text-sm opacity-70">
— Akshay Nathan · OpenAI
</div>

<div class="mt-10 text-xs opacity-50">
能力扩张之后，真正的产品问题变成：<br/>
用户能否理解、信任，并把这种能力转化为自己的进步。
</div>
