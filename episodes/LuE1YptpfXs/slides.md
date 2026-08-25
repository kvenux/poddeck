---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Coding Agents Are Secretly General Agents'
coverDate: '2026-07-23'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<div class="mt-14 text-sm tracking-[0.25em] uppercase text-teal-700">MLOps.community · 72 min</div>

# Coding Agents Are Secretly General Agents

<div class="mt-7 text-2xl font-semibold text-slate-700">为什么会写代码的 Agent，正在变成通用知识工作 Agent</div>

<div class="mt-10 flex justify-center gap-3 text-sm">
  <span class="px-3 py-1 rounded-full bg-teal-50 border border-teal-200">Jay Hack</span>
  <span class="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">Codegen → ClickUp</span>
  <span class="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">Agents · RLVR · Context · Safety</span>
</div>

<div class="mt-12 text-sm opacity-60">PodDeck · transcript-grounded edition</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### Coding 为什么先赢
编译、单测和运行时间把质量变成可验证反馈，训练与执行都能形成闭环。
</div>

<div class="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">

### 从代码到通用任务
会写并执行代码，意味着 Agent 能按需制造工具，能力边界不再由固定工具表决定。
</div>

<div class="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 工作入口会重做
Autocomplete、侧边栏对话、后台代理，可能会依次迁移到法律、金融和运营工作。
</div>

<div class="p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 真正稀缺的是上下文
模型越来越强，组织数据却被 Slack、文档、任务和权限切碎；上下文接入决定体验上限。
</div>

<div class="p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">

### 能力仍然尖峰化
高难数学与代码能做得惊人，常识题仍可能失手；世界模型和多模态经验是关键缺口。
</div>

<div class="p-4 rounded-xl bg-red-50 border-l-4 border-red-500">

### 安全不是删知识
知识可以被重学、复制和蒸馏；可解释性、意图对齐与现实执行权限必须一起讨论。
</div>

</div>

---

# 从 USB 数据集到 Agent 时代

<div class="grid grid-cols-4 gap-4 mt-8 text-center">

<div class="p-4 rounded-xl bg-slate-50 border-2 border-slate-200">
<div class="text-3xl font-bold text-slate-600">2008</div>
<div class="font-semibold mt-2">SIFT + SVM</div>
<div class="text-xs mt-2 opacity-70">Jay 开始做 AI；最大数据集可以装进 USB 盘。</div>
</div>

<div class="p-4 rounded-xl bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">2012</div>
<div class="font-semibold mt-2">AlexNet</div>
<div class="text-xs mt-2 opacity-70">GPU 专用 kernel 与深度学习规模化成为转折点。</div>
</div>

<div class="p-4 rounded-xl bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600">2020</div>
<div class="font-semibold mt-2">GPT-3 paper</div>
<div class="text-xs mt-2 opacity-70">Few-shot learning 让通用语言模型的潜力突然变得可见。</div>
</div>

<div class="p-4 rounded-xl bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">2022</div>
<div class="font-semibold mt-2">API 打开</div>
<div class="text-xs mt-2 opacity-70">Jay 进入密集做 demo 的阶段，开始寻找可产品化的反馈闭环。</div>
</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这条时间线的重点不是模型名，而是反馈速度：数据、算力、API 与开发入口依次到位。
</div>

---

# 太早，也可能等不到市场

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-400">

### 先见者的困境

- 访谈回顾了 Kite、Tabnine 等更早的代码生成尝试
- 愿景可以正确，产品体验和模型能力仍可能不够成熟
- 市场最终记住的，往往是把能力放进主流程的后来者
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### Happy path 的力量

- GitHub Copilot 把补全直接嵌进 VS Code
- Cursor 允许个人直接下载、个人付费，不必等组织批准
- Claude Sonnet 3.5 让 Composer 式侧边栏体验出现明显拐点
</div>

</div>

<div class="mt-7 p-5 text-xl italic rounded-xl bg-blue-50 border-l-4 border-blue-500">
“momentum begets momentum.”
<div class="text-xs not-italic opacity-60 mt-2">— Jay 对创业时机的总结</div>
</div>

---
layout: two-cols
---

# 交互范式先在代码里排练

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Autocomplete</strong><br>AI 不要求用户改变动作，只在原流程里补上下一步。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Chat / Composer</strong><br>从一行补全变成多文件、多步骤的意图表达与迭代。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Background Agent</strong><br>用户给任务，Agent 在沙箱执行并返回可审查结果。
</div>

<div class="text-xs opacity-60">作者概括：代码是新型人机交互的低风险试验场。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./interaction-evolution.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 自指：机器写出自己的工具

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-5 rounded-xl bg-purple-50 border-2 border-purple-200">

### Gödel
足够强的逻辑系统会出现关于自身可证明性的命题；自指让系统内部出现边界。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-2 border-orange-200">

### Escher
互相画出的双手、循环楼梯，把观察者与被观察对象折回同一幅图中。
</div>

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">

### Bach
音乐结构中的递归与变奏，和逻辑、图像共享同一种自我嵌套的骨架。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
Jay 说，《Gödel, Escher, Bach》让他很早就着迷于机器写自己、创造自己的递归过程。Codegen 的技术方向，由这个长期兴趣落到可执行产品。
</div>

---

# 2022：用 demo 寻找可验证的产品

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### Text → Figma
用户描述 iPhone 界面，模型一次生成 schema，再渲染到 Figma。成功与否可以从 schema 合法性和渲染结果检查。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### Text → Dashboard
用户描述数据面板，模型生成引用数据 schema 的界面。结构化输出让 lint、编译和错误定位成为可能。
</div>

</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
<div class="p-3 rounded bg-orange-50 border border-orange-200"><strong>生成</strong><br>把自然语言变成结构</div>
<div class="p-3 rounded bg-red-50 border border-red-200"><strong>检测</strong><br>发现非法 schema 或编译错误</div>
<div class="p-3 rounded bg-green-50 border border-green-200"><strong>反馈</strong><br>把残差交回模型修复</div>
</div>

---
layout: two-cols
---

# 可验证反馈，是 coding agent 的加速器

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
代码不是只靠主观偏好判断：它能编译、能运行、能通过单测，也能测 CPU 周期。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
失败结果可以原样返回 Agent；每次重试都带着明确、局部、机器可读的误差信号。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
成功轨迹又能成为训练数据，于是执行闭环和训练闭环互相增强。
</div>

<div class="text-xs opacity-60">作者概括：可验证性同时降低了产品评估与模型训练的成本。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./verifiable-loop.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 为什么代码是理想训练场

<div class="grid grid-cols-2 gap-5 mt-7 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 目标清楚
测试通过、schema 合法、程序可运行，目标函数不必先靠人类长篇解释。
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 反馈即时
模型写完即可执行；错误信息直接指出边界条件、类型或行为不符合预期。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 数据可合成
可以自动生成任务、候选实现、测试与失败轨迹，不只依赖互联网上的静态文本。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 低价值劳动很多
样板代码本身几乎不创造差异，却占据工程师时间；自动化收益立即可见。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这解释了一个关键顺序：Agent 不是因为程序员更爱新工具才先在代码里成熟，领域本身也提供了最密集的可验证奖励。
</div>

---

# RLVR：让 100 个候选自己赛跑

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-center">

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">1</div>
给定一个需要提速的函数与可执行测试。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">100</div>
访谈中的论文例子让模型尝试约 100 个不同变体。
</div>

<div class="p-5 rounded-xl bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">✓</div>
实际运行并测 wall time 或 CPU cycles，选更快的轨迹继续训练。
</div>

</div>

<div class="mt-8 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">
这里的奖励不是标注员说看起来更好，而是程序在同一约束下确实跑得更快。Jay 把它视为后来所谓 RLVR 的早期应用之一。
</div>

---

# 合成数据也会喝到自己的回水

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 为什么合成数据有用

- 新任务和新轨迹可以持续生成
- 失败能由验证器过滤
- 稀缺边界条件可以被有意覆盖
- 训练不只依赖有限的人类样本
</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 为什么循环会坍缩

- 访谈举例：网上许多西语页面本身来自 Google Translate
- 再把这些页面当人类平行语料，模型就在学习自己的旧输出
- 错误译法可能被反复确认，最终固化成闭环
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
作者概括：合成数据的关键不在合成，而在是否存在独立于模型输出的验证信号。
</div>

---
layout: two-cols
---

# Codegen 的产品跃迁：Ticket → PR

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
用户在 Linear 或 ClickUp 写清想要的改动，不必先打开 IDE。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
系统在隔离沙箱拉起 Agent，让它读取代码、执行工具、修改文件并验证。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
最终交付物是可审查的 Pull Request；人仍能拉回 IDE 继续迭代。
</div>

<div class="mt-5 p-4 italic rounded bg-orange-50 border-l-4 border-orange-500">
“so the idea was ticket to pull request.”
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./ticket-to-pr.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 早期瓶颈不是愿景，是上下文窗口

<div class="grid grid-cols-3 gap-4 mt-7 text-center text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">32K</div>
Codegen 起步时处在 GPT-4 32K 时代。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">≈ 15K</div>
Jay 在访谈中估算，一次 Claude Code 工具使用可能接近 15K。
</div>

<div class="p-5 rounded-xl bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600">≈ 2</div>
按这个估算，32K 只够容纳约两次完整工具使用。
</div>

</div>

<div class="mt-8 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">
背景代理必须同时装下任务、代码、工具输出、错误与修复历史。上下文太短时，系统会在真正理解仓库之前就耗尽预算。
</div>

<div class="mt-3 text-xs opacity-60">注：以上 15K 与两次工具使用是嘉宾在访谈中的粗略估算，不代表当前产品限制。</div>

---

# 当基础模型公司成为你的供应商，也是你的对手

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 采购压力
Jay 说，Codegen 在企业交易中开始遇到基础模型应用提供长达两年免费的竞争方案。创业公司很难在采购桌上对抗这种资本强度。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 供应风险
访谈提到 Windsurf 失去 Claude 接入；构建在他人模型上的产品，关键能力可能被上游重新定价或收回。
</div>

<div class="p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">

### 毛利压力
模型调用成本直接进入单位经济。Cursor 训练自有模型，被讨论为改善利润结构的一种方式。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 能力折叠
专用 coding model 的优势可能很快进入下一代通用模型，独立应用难以长期垄断底层能力差异。
</div>

</div>

---

# 为什么卖给 ClickUp

<div class="grid grid-cols-3 gap-4 mt-7 text-center text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">

### Context
任务、文档、聊天、白板与组织历史，是通用 Agent 完成工作的原料。
</div>

<div class="p-5 rounded-xl bg-green-50 border-2 border-green-200">

### Surfaces
用户已经在工作入口里表达意图、接收结果、审查和协作。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-2 border-purple-200">

### Unit economics
既有分发、供应商关系与客户规模，让 AI 能力更容易触达真实组织。
</div>

</div>

<div class="mt-8 p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500 text-sm">
Jay 的判断是：当模型可以处理多数知识工作，赢家未必是最早写出 coding agent 的团队，而是能把上下文、交互入口与分发同时握在一起的平台。
</div>

---
layout: two-cols
---

# 写代码，就是制造新工具

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
固定工具表只能覆盖设计者预先想到的动作；长尾知识工作永远会出现新系统、新格式和新 API。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
如果 Agent 能写脚本、安装包并在沙箱运行，它就能临时生成连接器、转换器和分析器。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“coding agents are generalist agents.”
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“it's like AGI complete.”
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./create-tool.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 编程工具在替整个世界试错

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 补全先出现
不改变用户动作，把模型无缝塞进已有流程；随后这种辅助会进入文档、邮件和内容生产。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 侧边栏先出现
用户从逐字符操作转向描述意图，再通过对话纠偏；这会迁移到更广泛的专业软件。
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 自主代理先出现
coding agent 最早形成任务、工具、沙箱、验证、交付的完整循环，并开始扩散到办公室工作。
</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
作者概括：程序员既是第一批用户，也是新交互方式的测试员；成熟模式随后才被打包给不写代码的人。
</div>

---

# Cursor for your whole job

<div class="mt-6 p-6 text-2xl italic rounded-xl bg-blue-50 border-l-4 border-blue-500">
“it's cursor for your whole job.”
<div class="mt-2 text-xs not-italic opacity-60">— 访谈对通用知识工作 Agent 的产品概括</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-4 rounded-xl bg-green-50 border border-green-200">
<strong>金融服务</strong><br>引用交易、客户、政策和市场上下文，生成分析并执行工作流。
</div>

<div class="p-4 rounded-xl bg-purple-50 border border-purple-200">
<strong>法律服务</strong><br>在文档、案例、任务和审查流程之间移动，而不是只回答孤立问题。
</div>

<div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
<strong>运营与管理</strong><br>人更多负责提出目标与审核结果，Agent 承担跨系统的中间步骤。
</div>

</div>

---

# 软件足够便宜后，默认可以只为一个人存在

<div class="grid grid-cols-3 gap-4 mt-7 text-center text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">40</div>
主持人转述：有人在过去 3 个月做了 40 个 app。
</div>

<div class="p-5 rounded-xl bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">3</div>
其中只有 3 个被开源并交给外部用户。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">1</div>
其余软件服务一个高度具体的个人需求，也已经足够有价值。
</div>

</div>

<div class="mt-7 p-5 text-xl italic rounded-xl bg-orange-50 border-l-4 border-orange-500">
“it's default local first.”
<div class="mt-2 text-xs not-italic opacity-60">— 主持人描述自己的新开发习惯</div>
</div>

---
layout: two-cols
---

# 生成式 UI：界面成为任务的临时投影

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
ClickUp 已有任务、文档、聊天等稳定数据模型；不同工作只是在这些原语上需要不同排列。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
访谈中的产品设想是：Agent 按当前目标生成安全的自定义 JavaScript 层，临时覆盖核心界面。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
同一份组织数据，可以在供应链、营销复盘或项目风险场景中投影为不同 dashboard。
</div>

<div class="text-xs opacity-60">作者概括：system of record 稳定，interaction layer 动态生成。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./generative-ui.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 动态软件仍有两道现实边界

<div class="grid grid-cols-2 gap-6 mt-7 text-sm">

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 用户必须知道自己要什么
从被 feed 内容变成主动点菜，用户承担更多意图表达。上下文引用能降低负担，但不能自动创造目标。
</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 动态不等于稳定体验
界面每次变化可能让人迷失。访谈用 Minority Report 的手势界面类比：概念很酷，实际操作会让手臂疲劳。
</div>

</div>

<div class="mt-7 p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">
Jay 预计未来推理速度会让完整前端几乎即时生成；他同时承认，最终产品大概率停在固定界面与完全动态之间的某个位置。
</div>

---

# 从代码仓库走向整个公司，上下文会爆炸

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 代码里的上下文相对可枚举

- 文件、类、函数
- Ticket 与 Pull Request
- Sentry issue 或 CI 结果
- 可能不到十几类核心对象
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 知识工作的长尾几乎无限

- PR、营销、金融服务各有专用数据
- 决策藏在聊天、会议、文档和个人记忆里
- 每个外部系统又有自己的权限与凭据
- 同一个任务往往跨越多个组织边界
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
模型能力可以通用，组织上下文却高度私有。通用 Agent 的难点因此从写工具，转成拿到正确、完整、可授权的数据。
</div>

---

# Agent 看起来笨，可能只是数据墙太高

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 请求
用户让 Slack 里的 Codegen 找到某项历史决策，再判断是否应修改代码。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 限制
Jay 说，受 Slack 对已验证应用搜索和索引的限制，Agent 有时只能看到约 3 小时内容。
</div>

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 表象
Agent 搜不到决策，于是像不会推理；真实失败发生在检索权限，而非模型智力。
</div>

</div>

<div class="mt-8 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">
对企业 Agent 而言，权限模型就是能力模型的一部分。没有历史记录，最强模型也只能在残缺世界里做合理猜测。
</div>

---

# 2020s 的网络效应：软件收敛

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 2010s：社区网络效应
一个朋友加入 Facebook、WhatsApp 或 Snapchat，会让下一个人加入更有价值。连接数量形成护城河。
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 2020s：数据收敛效应
软件越来越容易创建，替代品越来越多；真正难复制的是任务、聊天、文档与交易数据聚在同一处。
</div>

</div>

<div class="mt-6 p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500 text-sm">
主持人用巴西 iFood 举例：平台看见餐厅订单，因此能更好判断贷款风险。上下文不仅改善 Agent，也能创造新的业务能力。
</div>

---
layout: two-cols
---

# Agent 越多，工作碎片越需要收口

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
人已经同时被 Slack、邮件、任务系统和多个群聊打断；AI 员工会进一步放大通知与交接数量。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
平台若成为 system of record，Agent 就能迁移旧数据、整理结构，并围绕同一记录生成薄 UI。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
理想终点不是更多 Agent 窗口，而是一个能聚合结果、权限和人工审查的统一工作入口。
</div>

<div class="text-xs opacity-60">作者概括：Agent 扩容若没有入口收敛，只会把 work sprawl 自动化。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./context-convergence.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Evals 要测 harness，不必重复测整个前沿

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 值得长期保留

- 防止产品回归和工具链断裂
- 检查长上下文任务能否完整跑通
- 验证数据是否在多步骤之间正确流动
- 观察 Agent 是否在 harness 中迷路
</div>

<div class="p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">

### 可能很快过时

- 单纯证明下一代模型更聪明
- 已被前沿模型饱和的旧 benchmark
- 把基础模型能力问题误判为应用层问题
- 为三个月后的模型写死今天的阈值
</div>

</div>

<div class="mt-7 p-5 text-xl italic rounded-xl bg-blue-50 border-l-4 border-blue-500">
“you can kind of just ride that wave”
<div class="mt-2 text-xs not-italic opacity-60">— Jay 对基础模型持续变强的产品策略判断；访谈中的提升幅度与节奏是预期，不是保证</div>
</div>

---

# 同一个模型，开始跨进科学前沿

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 数学
Jay 引用 Google DeepMind 的结果：Putnam 试题达到 12/12；他还提到 Erdős 问题正持续被模型解决。
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 生物
对谈提到完整细胞模拟的方向：把病原体或干预放进模型，预演对细胞的影响。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 经济学
访谈转述一种判断：Agent 能从公开数据集出发，分析并连接理论，大批量生成实证论文候选。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 能力迁移
写 React 应用和解释相对论，可能由同一基础模型完成；coding 的正迁移正在变成跨领域迁移。
</div>

</div>

<div class="mt-4 text-xs opacity-60">以上均为访谈中引用或讨论的结果与方向，本 deck 不把它们扩写为独立事实核验报告。</div>

---

# 模型很强，但能力曲线仍有尖峰

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 高峰
能通过相对论课程考试、写应用、生成可视化，也能在数学与代码验证中快速迭代。
</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 凹陷
50 米外有洗车店，GPT-5.2 在访谈所述测试中建议步行，忽略了车必须一起过去；倒扣的杯子也只需翻转。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-7">
<div class="p-5 text-xl italic rounded-xl bg-orange-50 border-l-4 border-orange-500">“it is so spiky.”</div>
<div class="p-5 text-xl italic rounded-xl bg-blue-50 border-l-4 border-blue-500">“it's the world model.”</div>
</div>

<div class="mt-4 text-xs opacity-60">访谈同时指出：同一洗车问题中，Gemini 与 Claude 给出了正确答案。</div>

---
layout: two-cols
---

# Plato's cave：文字只是墙上的影子

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-slate-50 border-l-4 border-slate-500">
洞穴里的观察者只看见二维影子；语言模型也只直接接触 token 序列。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
为了预测下一帧影子，系统可能先构造三维物体的内部模拟，再把它投影回二维。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
同理，为了预测人会说什么，模型可能形成关于人物、物体、意图和因果关系的内部表征。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
视觉、机器人抓取等多模态经验，会继续约束并强化这套世界表征。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./platos-cave.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 可解释性：第一次可以给智能系统做脑外科

<div class="mt-6 p-6 text-2xl italic rounded-xl bg-purple-50 border-l-4 border-purple-500">
“you can actually do full brain surgery”
<div class="mt-2 text-xs not-italic opacity-60">— Jay 对 mechanistic interpretability 潜力的比喻</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
<strong>定位 circuit</strong><br>找出哪些内部路径与某次回答相关。
</div>

<div class="p-4 rounded-xl bg-green-50 border border-green-200">
<strong>追踪证据</strong><br>理解训练数据和表征如何共同推动结果。
</div>

<div class="p-4 rounded-xl bg-orange-50 border border-orange-200">
<strong>解释决策</strong><br>给人一个比黑箱输出更直观的因果说明。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Jay 明确说这种完整技术今天还不存在；他认为研究激励足够强，并肯定 Anthropic 在 mechanistic interpretability 上的推进。
</div>

---

# 安全难题：删掉知识，模型仍可能重新学会

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 朴素惩罚可能适得其反
如果每次出现危险知识就沿梯度强烈惩罚，反而可能给这块知识画出更清晰的边界，让模型更会识别它。
</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### Catastrophic forgetting 未解决
移除一块知识可能损伤相邻能力；对谈认为通用场景仍缺少可靠、无副作用的删除方法。
</div>

<div class="p-5 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">

### 聪明系统可以重学
即使预训练模型没有某个生物学知识，足够强的系统仍能读教材、访问旧模型或从公开材料重新建立它。
</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 目标可能应转向意图
Jay 提出的希望是让系统没有实施危险行为的意图；他也明确说这还没有被证明可行。
</div>

</div>

<div class="mt-5 p-4 italic rounded bg-blue-50 border-l-4 border-blue-500">“can eliminate the intention from it.”</div>

---

# 从传感器到实验室：Agent 已能触碰现实

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 传感器闭环
对谈提到用 pH、湿度等传感器让 Claude 管理植物。结构化状态让 Agent 可以持续观察与调节。
</div>

<div class="p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 实验闭环
访谈以 Ginkgo Bioworks 与 Periodic Labs 为例：把 run experiment 工具接给模型，执行材料与芯片相关实验并读取结果。
</div>

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 人类也是工具
遇到无法数字化的动作，Agent 可以请求人搬插头、操作设备或完成线下步骤。
</div>

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 权限放大风险
当 Agent 能调用资金、市场、域名和人类服务，错误参数与社会工程就不再只是文本问题。
</div>

</div>

<div class="mt-5 p-4 text-xl italic rounded bg-orange-50 border-l-4 border-orange-500">“you can just invoke the human tool.”</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">8 句均已逐字回查本期 transcript；大小写和标点按原文保留。</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“momentum begets momentum.”<div class="text-xs opacity-60 mt-1 not-italic">创业时机</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“so the idea was ticket to pull request.”<div class="text-xs opacity-60 mt-1 not-italic">Codegen 产品起点</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“coding agents are generalist agents.”<div class="text-xs opacity-60 mt-1 not-italic">核心判断</div></div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“it's like AGI complete.”<div class="text-xs opacity-60 mt-1 not-italic">会写工具的边界</div></div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“it's cursor for your whole job.”<div class="text-xs opacity-60 mt-1 not-italic">知识工作入口</div></div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“it's default local first.”<div class="text-xs opacity-60 mt-1 not-italic">个人软件</div></div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">“it is so spiky.”<div class="text-xs opacity-60 mt-1 not-italic">能力曲线</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“you can just invoke the human tool.”<div class="text-xs opacity-60 mt-1 not-italic">现实执行</div></div>

</div>

---
layout: end
---

# “coding agents are generalist agents.”

<div class="mt-8 text-xl opacity-75">代码不是终点。<br>它是 Agent 学会验证、制造工具、连接上下文并走向现实世界的起点。</div>

<div class="mt-12 text-sm opacity-50">Jay Hack · MLOps.community · 2026-07</div>
