---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why AI Agents Don''t Actually Understand You — Danielle Perszyk, Amazon AGI Lab'
info: |
  Danielle Perszyk on collective intelligence, perception agents, user models, and human agency.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
date: 2026/07
---

<div class="text-xs tracking-[0.24em] uppercase text-purple-600 mb-5">Latent Space · Amazon AGI Lab</div>

# Why AI Agents Don't Actually Understand You

<div class="text-2xl mt-4 text-slate-600">从点击正确，到真正理解人的意图</div>

<div class="mt-10 text-lg font-semibold">Danielle Perszyk</div>
<div class="mt-1 text-sm opacity-65">认知科学 × 感知型 Agent × 集体智能</div>

<div class="mt-12 text-xs opacity-50">PodDeck · 49 min interview</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 可靠性换了定义
按钮点对只是动作层；真正的可靠，是理解用户的目标、偏好与变化中的意图。

</div>

<div class="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">

### 认知不是单机能力
人的智能来自互动。AI 的下一步也许不只是更强个体，而是加入集体认知。

</div>

<div class="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">

### Memory 不是仓库
记忆参与预测、学习、自我与情境化，不只是检索一段历史记录。

</div>

<div class="p-4 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### Multi-Agent 还很浅
固定编排和交接没有产生持续影响，更没有形成累积文化。

</div>

<div class="p-4 rounded-xl bg-red-50 border-l-4 border-red-500">

### AI 可能削弱能动性
个人产出提高的同时，写作与科学方向可能被同一批模型推向均值。

</div>

<div class="p-4 rounded-xl bg-yellow-50 border-l-4 border-yellow-500">

### 教育是压力测试
好 tutor 不替学生完成思考，而是识别认知卸载并主动制造必要的摩擦。

</div>

</div>

---

# 起点：智能本来就是集体的

<div class="mt-6 p-6 rounded-xl bg-blue-50 border-l-4 border-blue-500 text-2xl italic">
“human intelligence is collective.”
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-sm">

<div class="p-4 rounded border border-blue-200 bg-white">
<div class="text-blue-600 font-bold mb-2">生存</div>
没有任何个体能够完全独立生存；工具、知识和社会分工都属于扩展心智。
</div>

<div class="p-4 rounded border border-purple-200 bg-white">
<div class="text-purple-600 font-bold mb-2">创新</div>
新想法取决于群体内部的差异、参与者规模，以及彼此能否充分连接。
</div>

<div class="p-4 rounded border border-green-200 bg-white">
<div class="text-green-600 font-bold mb-2">AI 的位置</div>
目标不是替换一个孤立的人，而是让更多人进入集体对话并扩展协作。
</div>

<div class="col-span-3 text-xs opacity-55 text-right">原文事实与结构化转述</div>

</div>

---
layout: two-cols
---

# 集体脑的三个变量

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>多样性</strong>：同一群体里需要不同经验、偏见与观察角度。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>群体规模</strong>：让更多人能够参与，而不是只服务于 AI 工程师。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>连接度</strong>：智能从互动中涌现，孤立的个体能力不是全部。
</div>

<div class="mt-5 text-xs opacity-55">作者概括：三个变量共同决定集体能产生多少新适应与新知识。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-pillars.excalidraw" class="w-[320px]" :darkMode="false" :background="false" />
</div>

---

# Amazon AGI Lab 的任务，不止是语言

<div class="mt-5 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-lg">
从 Adept 延续而来的起点：让 AI 能完成任何人在计算机上能完成的事。
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-5 rounded-xl border-2 border-blue-200 bg-blue-50">

### Perception
像人一样看懂数字环境中的对象、状态与可操作性，而不是只接收文字描述。

</div>

<div class="p-5 rounded-xl border-2 border-green-200 bg-green-50">

### World model
数字界面建立在物理世界之上；Agent 需要理解环境和行动后果。

</div>

<div class="p-5 rounded-xl border-2 border-orange-200 bg-orange-50">

### Interaction
一边听、一边更新上下文、一边准备下一步，而不是轮流提交整批消息。

</div>

<div class="col-span-3 mt-1 text-center text-sm font-semibold text-slate-600">
能力必须协同工作，单独提高某个 benchmark 不能构成真正的感知型 Agent。
</div>

</div>

---
layout: two-cols
---

# Human-aligned Agent 是一整套系统

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
感知提供共同环境；世界模型提供对环境后果的理解。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
实时互动与多时间尺度记忆，让 Agent 能持续修正理解。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
用户模型把高层目标拆成偏好、意图、行动与反馈，而不只是步骤清单。
</div>

<div class="mt-5 text-xs opacity-55">作者概括：图中是访谈提到的能力关系，不代表实验室公布的正式架构。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./co-design-stack.excalidraw" class="w-[410px]" :darkMode="false" :background="false" />
</div>

---

# Chat 的轮次结构，限制了共同思考

<div class="mt-5 p-6 rounded-xl bg-red-50 border-l-4 border-red-500 text-xl italic">
“we're kind of trapped in this local attractor state of chatbots and coding agents and like turn-taking in batches.”
</div>

<div class="grid grid-cols-2 gap-6 mt-7 text-sm">

<div class="p-5 rounded-xl border border-red-200 bg-white">

### 当前交互

- 用户先组织完整请求
- 模型处理一批上下文
- 用户等待后再纠偏
- 人主动适应技术限制

</div>

<div class="p-5 rounded-xl border border-green-200 bg-white">

### 她设想的交互

- 持续更新共同上下文
- 听的同时准备下一步
- 行动与对话并行推进
- 双方实时协商意义

</div>

</div>

<div class="mt-6 text-sm text-center text-slate-600">范式变化不只是降低延迟，而是让理解本身成为一个连续过程。</div>

---

# Memory 不是外挂检索层

<div class="mt-6 p-6 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-2xl italic">
“Memory is everything. It's how we simulate the future.”
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-400">

### 业界常见隐喻
把记忆视为可存取的信息：写入、召回、塞回 context，再继续推理。

</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 人类认知中的记忆
它跨越多个时间尺度，参与学习、预测、自我形成，以及对当前信息的情境化。

</div>

</div>

<div class="mt-7 p-4 rounded border border-purple-200 text-sm">
访谈留下一个开放方向：系统侧存储仍有价值，但还需要推理时的重新情境化，以及更深层的学习机制。
</div>

---
layout: two-cols
---

# 多重时间尺度

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>此刻</strong>：实时互动中的上下文持续变化。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>经历</strong>：episodic memory 与个体视角、自我和高效检索相连。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>未来</strong>：记忆支持模拟接下来可能发生的事情。
</div>

<div class="mt-5 text-xs opacity-55">作者概括：时间尺度是功能关系，不是简单的冷热存储分层。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rsp-ladder.excalidraw" class="w-[435px]" :darkMode="false" :background="false" />
</div>

---

# Nova Act 之后：从动作原子走向意图

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500">

### 当时的问题
模型还不能稳定理解数字世界的 affordance，也缺少长程规划。团队先把点击、滚动等原子动作做可靠，再让开发者串成重复工作流。

</div>

<div class="p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500">

### 后来的发现
坐标正确只是底层条件。很多工作会在执行中反过来改变人对目标的理解，因此任务不能一次性完全分解。

</div>

</div>

<div class="mt-8 p-6 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-2xl italic text-center">
“the goal is unfolding over time.”
</div>

<div class="mt-6 text-sm text-center text-slate-600">
订机票时看到直飞、不同中转城市或停留机会，人会重新权衡旅程本身；界面不是被动工具，而是思考的一部分。
</div>

---
layout: two-cols
---

# 目标是在交互中被发现的

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>起点</strong>：用户只给出高层意图，细节尚未完整表达。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>环境反馈</strong>：新选项出现，激活此前没有说出的偏好。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>共同修正</strong>：Agent 需要随着情境变化更新目标，再决定是否行动或询问。
</div>

<div class="mt-5 text-xs opacity-55">作者概括：可信执行是一条表征逐步靠近的曲线，而不是一次 prompt 的直线。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-curve.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 可靠性缺的是用户模型

<div class="mt-5 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-lg italic">
“reliability has less to do with clicking in the same place and scrolling and more to do with modeling the user's mind.”
</div>

<div class="mt-6 space-y-3 text-sm">

<div class="p-3 rounded border border-blue-200"><strong>动作正确</strong>：点到正确控件，完成局部步骤。</div>
<div class="p-3 rounded border border-green-200"><strong>任务正确</strong>：知道最终要交付什么结果。</div>
<div class="p-3 rounded border border-purple-200"><strong>用户正确</strong>：理解这个人为何这样做、在意什么、何时会改变主意。</div>

<div class="text-xs opacity-55">作者概括：前两层可以成功，第三层仍然失败。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./character-space.excalidraw" class="w-[380px]" :darkMode="false" :background="false" />
</div>

---

# 为任务爬坡，不等于获得泛化

<div class="mt-5 p-5 rounded-xl bg-red-50 border-l-4 border-red-500 text-xl italic">
“It's kind of like whack-a-mole.”
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-4 rounded-xl border-2 border-red-200 bg-red-50">

### 单任务优化
强化学习能让模型在特定任务上表现更好，但换一个任务，能力未必迁移。

</div>

<div class="p-4 rounded-xl border-2 border-yellow-200 bg-yellow-50">

### 指标变目标
访谈借 Goodhart's law 指出：一旦 measure 成为目标，它就不再是好 measure。

</div>

<div class="p-4 rounded-xl border-2 border-green-200 bg-green-50">

### 机制优先
评估要逼近支撑泛化的底层机制，而不是让模型过拟合人类关心世界里的窄切片。

</div>

</div>

<div class="mt-7 text-center font-semibold text-slate-700">问题因此变成：人类究竟在优化什么，才获得了灵活认知？</div>

---

# 一个候选目标：对齐彼此的表征

<div class="mt-5 p-6 rounded-xl bg-blue-50 border-l-4 border-blue-500 text-xl italic">
“Humans are spontaneously constantly inferring the existence of other minds and we are optimizing for aligning them.”
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-sm text-center">

<div class="p-5 rounded-xl bg-purple-50 border border-purple-200">
<div class="text-3xl mb-2">①</div>
推断另一个心智存在
</div>

<div class="p-5 rounded-xl bg-orange-50 border border-orange-200">
<div class="text-3xl mb-2">②</div>
估计对方如何理解世界
</div>

<div class="p-5 rounded-xl bg-green-50 border border-green-200">
<div class="text-3xl mb-2">③</div>
修正自己的表征以形成共同基础
</div>

</div>

<div class="mt-8 p-4 rounded border border-blue-200 text-sm">
Danielle 的研究假设：如果 AI 也以缩小双方表征误差为基础目标，泛化、协作与人类增强可能来自同一机制。
</div>

---

# World model 从一开始就是社会性的

<div class="mt-6 p-6 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-2xl italic">
“our world models from the very beginning are social world models.”
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div class="p-5 rounded-xl border border-blue-200 bg-white">

### 不只重建外部世界
环境里有大量噪声，感知只能选取其中一小部分。完整复制一切，不会自动告诉系统什么值得关注。

</div>

<div class="p-5 rounded-xl border border-green-200 bg-white">

### 他人提供注意力信号
人会推断另一颗心智如何看同一环境，再利用对方的视角模拟新情境中的行动要求。

</div>

</div>

<div class="mt-7 text-center text-sm font-semibold text-slate-700">社会视角不是 world model 之外的附加层，而是选择相关信号的机制之一。</div>

---

# 好的模型，不需要复制全部世界

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded-xl bg-red-50 border-l-4 border-red-500">

### 全量复刻

- 内部世界与外部世界完全等量
- 信号和噪声一起被保留
- 生成能力不等于问题解决能力
- 难以解释为什么某个特征重要

</div>

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">

### 选择性表征

- 根据行动与他人视角选择信号
- 用有限结构模拟新的环境要求
- 把注意力放在可迁移的关系上
- 让 world model 服务于适应

</div>

</div>

<div class="mt-8 p-5 rounded-xl bg-yellow-50 border border-yellow-200 text-center">
<strong>作者概括</strong>：world model 的价值不只在生成得多逼真，更在能否压缩出与行动、他人和目标有关的结构。
</div>

---

# 为什么实验室要抵抗过早产品化

<div class="mt-5 p-6 rounded-xl bg-red-50 border-l-4 border-red-500 text-xl italic">
“the death of the lab would be to try to productize those things too early.”
</div>

<div class="grid grid-cols-3 gap-5 mt-8 text-sm">

<div class="p-5 rounded-xl border border-blue-200">

### 组织设计
从 Adept 加入 Amazon 后，团队保留更像 startup 的 operating model，以保护前沿研究的专注度。

</div>

<div class="p-5 rounded-xl border border-orange-200">

### 产品牵引
一旦大量用户依赖现有产品，研究资源就容易转向维护当前范式和追赶竞争者。

</div>

<div class="p-5 rounded-xl border border-green-200">

### 科学空间
新架构、新训练方式和新交互范式需要允许短期内无法直接产品化。

</div>

</div>

<div class="mt-7 text-center text-sm text-slate-600">研究机制本身决定团队是在优化今天的产品，还是寻找下一种通用机制。</div>

---

# 当 AI 只为工程师优化

<div class="mt-5 p-6 rounded-xl bg-orange-50 border-l-4 border-orange-500 text-xl italic">
“we're building AI again for the people who are building AI.”
</div>

<div class="grid grid-cols-2 gap-6 mt-7 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border border-blue-200">

### 为什么 coding agent 进步快
任务常有清晰的对错与可验证反馈，反馈回路转得很快，也与构建者自己的工作高度一致。

</div>

<div class="p-5 rounded-xl bg-purple-50 border border-purple-200">

### 为什么它不是全部
多数人的工作、关系和福祉没有同样清晰的验证信号；他们需要的是更贴近广义人类认知的 AI。

</div>

</div>

<div class="mt-8 p-5 rounded-xl border-2 border-purple-200 text-center">
Danielle 认为 chatbots 与 coding agents 仍会长期有用，但它们只是人机共同演化的开端。
</div>

---

# Multi-Agent 缺的不是更多 handoff

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded-xl bg-red-50 border-l-4 border-red-500">

### 现在的主流形态

- 精确 orchestration
- 固定 delegation
- 结构化 handoff
- 预先写入合作或竞争目标

</div>

<div class="p-5 rounded-xl bg-green-50 border-l-4 border-green-500">

### 更像人类群体的形态

- 角色随目标与语境流动
- 实时协商意义与策略
- Agent 真正改变彼此状态
- 从简单动机长出规范与制度

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm italic">
<div class="p-4 rounded bg-yellow-50 border border-yellow-200">“There's no like cumulative culture.”</div>
<div class="p-4 rounded bg-purple-50 border border-purple-200">缺口不是消息是否传递，而是互动是否留下可持续、可累积的改变。</div>
</div>

---

# 个人产出上升，整体搜索空间却变窄

<div class="mt-5 p-6 rounded-xl bg-red-50 border-l-4 border-red-500 text-2xl italic">
“science as a whole is narrowing.”
</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div class="p-5 rounded-xl border border-blue-200 bg-blue-50">

### 写作中的微小接受
人只感觉自己采纳了几条建议，但连续的小修改可能让论证在意识阈值之下换到另一个、甚至相反的方向。

</div>

<div class="p-5 rounded-xl border border-purple-200 bg-purple-50">

### 科学中的局部收益
她转述 Northwestern workshop 的结论：使用 AI 的科学家能产出更多论文、获得更多 grant，但整体研究方向在变窄。

</div>

</div>

<div class="mt-7 p-4 rounded border border-red-200 text-sm text-center">
同源训练数据与安全的均值答案，会把不同人的判断逐渐推向相似区域；这构成对 human agency 的结构性侵蚀。
</div>

---
layout: two-cols
---

# 反制方案：一整个多样化的 AI 社会

<div class="mt-5 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-500 text-xl italic">
“we need a diverse society of AIs”
</div>

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
不同模型保留不同 bias、preference 与 perspective，避免所有答案回归同一均值。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
人像与其他人互动一样，在多个 AI 视角之间比较、质疑、组合与形成自己的判断。
</div>

<div class="text-xs opacity-55">作者概括：多样性不是产品列表，而是扩大思想变异与连接度的认知基础设施。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./latent-demand.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

# Human-like，应该对齐在哪一层？

<div class="mt-4 text-sm opacity-60">Danielle 借 David Marr 1982 年的解释层级，区分目标、算法与实现。</div>

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="p-4 rounded-xl bg-blue-50 border-2 border-blue-200">

### Computational
系统究竟要解决什么问题、优化什么目标？

</div>

<div class="p-4 rounded-xl bg-purple-50 border-2 border-purple-200">

### Algorithmic
用什么表征和过程完成这个目标？

</div>

<div class="p-4 rounded-xl bg-orange-50 border-2 border-orange-200">

### Implementation
最终由什么硬件、神经元或物理机制实现？

</div>

</div>

<div class="mt-4 p-4 rounded-xl bg-green-50 border-l-4 border-green-500 text-lg italic">
“The goal is to build AI that is aligned in the right places with how human intelligence works.”
</div>

<div class="mt-2 text-xs text-center text-slate-600">她强调的 human-like 主要在 computational level：目标是缩小彼此表征误差，而不是复制人脑实现。</div>

---

# 教育暴露了认知卸载的代价

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded-xl bg-red-50 border-l-4 border-red-500">

### 回答机器
学生提问，chatbot 立刻给出结果；短期更顺滑，但系统无法判断学生是否理解，只看到任务完成。

</div>

<div class="p-6 rounded-xl bg-green-50 border-l-4 border-green-500">

### 理解伙伴
Agent 持续建模学生的知识缺口，发现反复卸载时，改变互动方式并要求学生重新组织理解。

</div>

</div>

<div class="mt-8 p-6 rounded-xl bg-yellow-50 border-l-4 border-yellow-500 text-xl italic text-center">
“cognitive friction that is a hallmark of actually encoding information”
</div>

<div class="mt-6 text-center text-sm text-slate-600">关键指标不再是更快给答案，而是对方的表征有没有真正改变。</div>

---

# 从 Oxford tutorial 到 AI tutor

<div class="grid grid-cols-3 gap-5 mt-5 text-sm">

<div class="p-5 rounded-xl bg-blue-50 border border-blue-200">

### 建立个人模型
她回忆 Oxford tutorial：专家在一学期中逐渐理解每个学生知道什么、缺什么。

</div>

<div class="p-5 rounded-xl bg-purple-50 border border-purple-200">

### 保留自主探索
学生拿着 syllabus 走进 39 座图书馆之一，自学后再用作品说服 tutor。

</div>

<div class="p-5 rounded-xl bg-orange-50 border border-orange-200">

### 改造学习产物
未来产物可以是丰富的多模态交互体验，让其他学生继续互动、学习并在其上构建。

</div>

</div>

<div class="mt-5 p-4 rounded-xl bg-green-50 border-l-4 border-green-500 text-xl italic text-center">
“They might spontaneously take on the Socratic method.”
</div>

<div class="mt-2 text-xs text-center text-slate-600">当系统的动机是理解你的心智，它就不会允许你只把思考外包出去。</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">8 句经过 transcript 逐条核验的原话</div>

<div class="grid grid-cols-2 gap-3 text-[12px] leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“human intelligence is collective.”
<div class="text-[10px] opacity-55 mt-1 not-italic">集体智能的出发点</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“Memory is everything. It's how we simulate the future.”
<div class="text-[10px] opacity-55 mt-1 not-italic">记忆不只是存储</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“reliability has less to do with clicking in the same place and scrolling and more to do with modeling the user's mind.”
<div class="text-[10px] opacity-55 mt-1 not-italic">可靠性的重新定义</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“our world models from the very beginning are social world models.”
<div class="text-[10px] opacity-55 mt-1 not-italic">社会世界模型</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“the death of the lab would be to try to productize those things too early.”
<div class="text-[10px] opacity-55 mt-1 not-italic">保护科学空间</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“science as a whole is narrowing.”
<div class="text-[10px] opacity-55 mt-1 not-italic">个体增益与整体收窄</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“The goal is to build AI that is aligned in the right places with how human intelligence works.”
<div class="text-[10px] opacity-55 mt-1 not-italic">对齐正确的认知层</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“They might spontaneously take on the Socratic method.”
<div class="text-[10px] opacity-55 mt-1 not-italic">AI tutor 的方向</div>
</div>

</div>

---
layout: end
---

<div class="text-xs tracking-[0.2em] uppercase text-purple-600 mb-8">Danielle Perszyk</div>

# “At a certain point we have to stop thinking about software.”

<div class="mt-8 text-lg opacity-70">先消灭 digital drudgery，再重新设计人与智能如何共同思考。</div>

<div class="mt-12 text-sm opacity-45">Why AI Agents Don't Actually Understand You · PodDeck</div>
