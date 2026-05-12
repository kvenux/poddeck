---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How Anthropic''s product team moves faster than anyone else | Cat Wu (Head of Product, Claude Code)'
info: |
  Cat Wu 在 Lenny's Podcast 的对谈：
  Claude Code 与 Cowork 的产品负责人讲 AI 改变 PM 角色的方式、
  在模型还没准备好时就开始建产品、Anthropic 的 launch room 流程，
  以及为什么"speed 比 strategy 更重要"。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Cat Wu

<div class="text-xl opacity-80 mt-2">on Lenny's Podcast</div>

<div class="text-lg opacity-60 mt-6">
How Anthropic's product team moves faster than anyone else
</div>

<div class="mt-8 text-sm opacity-60">
~1h 25min · 2026-04 · Claude Code · AI-native PM · launch room
</div>

<div class="mt-3 text-xs opacity-50">
Head of Product, Claude Code & Cowork · Anthropic
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 节奏被压缩到天

Anthropic 的 shipping cadence "from months to weeks to days"。这不只是更快，是另一种工作方式。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 在模型还没准备好时就开始建

"build products that don't yet fully work, so you're ready when the next model closes the gap" —— 嘉宾把这个当作 AI PM 的核心姿态。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 最被低估的 AI 技能

"asking the model to introspect on its own mistakes" —— Cat 自己说这是她最被低估的一项 AI 技能。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Claude 的 personality 是核心成功因素

不是性能、不是 benchmark —— 嘉宾点名 "Claude's personality is core to its success"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Mission alignment 消除组织摩擦

Anthropic 的 mission alignment "eliminates the friction that slows most large organizations"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一句口令式原则

"just do things" —— 嘉宾把这条放在 AI-native 公司"最重要的工作原则"位置。

</div>

</div>

---

# 嘉宾的视角

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Cat Wu

<div class="text-sm opacity-80 mt-2 leading-relaxed">
Head of Product, <strong>Claude Code & Cowork</strong> · Anthropic
</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"years as an engineer and briefly worked in VC" —— 在加入 Anthropic 之前的两段履历。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
她正在面试 <strong>"hundreds of product managers"</strong> 想转 AI 的候选人，因此对"谁在 AI 时代 thrive vs. fall behind"有第一手观察。
</div>

</div>

</div>

<div>

### 这一期的取景框

<div class="text-xs opacity-70 mt-2 mb-3">
副标题（show notes 原话）：
</div>

<div class="p-4 italic text-sm border-l-4 border-purple-400 bg-purple-50 bg-opacity-30 rounded">
"how AI is changing the PM role, building products before the model is ready, inside Claude Code's launch room process, and why speed matters more than strategy now"
</div>

<div class="mt-4 text-xs opacity-60">
四个相互咬合的题面：<br/>
角色 · 时序 · 流程 · 节奏
</div>

</div>

</div>

---

# Topic 1 · 节奏

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-2xl border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">
"How Anthropic's shipping cadence went from <strong>months to weeks to days</strong>"
</div>

<div class="grid grid-cols-3 gap-3 mt-8 text-xs">

<div class="p-3 rounded bg-red-50 border border-red-200">

### months
<div class="opacity-70 mt-1">传统 SaaS / 季度路线图节奏。一次大改动跨多个 sprint，到发布日才回看是否还有意义。</div>

</div>

<div class="p-3 rounded bg-yellow-50 border border-yellow-200">

### weeks
<div class="opacity-70 mt-1">敏捷团队的双周迭代。能更快收用户反馈，但仍要 spec → build → ship → measure 几轮才完一个版本。</div>

</div>

<div class="p-3 rounded bg-green-50 border border-green-200">

### days
<div class="opacity-70 mt-1">AI-native 的实际工作节拍。新模型能力随时降临，产品和 prompt 要在天的尺度上跟上。</div>

</div>

</div>

<div class="mt-6 text-xs opacity-60">
<strong>作者概括</strong>：这不只是"做得快"，是把规划、决策、发布拆开重组的另一种工作方式 —— 也是后面几个话题的底层背景。
</div>

---
layout: two-cols
---

# 节奏可视化

把"months → weeks → days"看成一条压缩曲线：

<div class="space-y-2 text-sm mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>每一格压缩</strong>要求的不是 "更努力"，而是删掉一些以前必须做的环节。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>每一格压缩</strong>要求新的工具栈：从 doc 到 prompt，从 review 到 prototype，从 sprint 到 launch room。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>每一格压缩</strong>改变 PM 该花精力的位置 —— 在 "days" 节拍下，半个月写完的 spec 是负资产。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：原话只说了三个时间单位；这页是基于这条线索做的解读。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./shipping-cadence.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Topic 2 · 在模型准备好之前建

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-xl border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded leading-relaxed">
"Why you need to build products that <strong>don't yet fully work</strong>, so you're ready when the <strong>next model closes the gap</strong>"
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

### 看起来反直觉
做一个"目前还做不到的产品"听起来像在卖空气 —— 在传统 SaaS 思路里这是 disqualifier。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 但模型每隔几周变强
"next model closes the gap" —— 等到模型真能做到再开始，已经晚了一个版本。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
<strong>作者概括</strong>：把"产品 spec"和"模型能力曲线"分开看 —— 产品要在曲线之上预留，等模型追上来。下一页用图。
</div>

---
layout: two-cols
---

# 模型曲线 vs. 产品 spec

<div class="space-y-3 text-sm mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>蓝线 = 模型能力</strong>，每隔几周上一个台阶。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded">
<strong>红虚线 = 产品 spec 目标</strong>，是嘉宾建议团队画的 "今天还做不到" 的那条线。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>橙色 gap = 当下不能交付的部分</strong> —— 工作量花在准备好那一刻，而不是等那一刻。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>绿点 = 模型追上的瞬间</strong> —— 同步发布。如果起点画得太低，等于和模型一起原地踏步。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：曲线和虚线都是为了把原话视觉化，嘉宾没有给出具体数字。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./build-ahead-of-model.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Topic 3 · 最被低估的 AI 技能

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-2xl border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded leading-snug">
"Cat's most underrated AI skill: asking the model to <strong>introspect on its own mistakes</strong>"
</div>

<div class="grid grid-cols-3 gap-3 mt-8 text-xs">

<div class="p-3 rounded bg-red-50 border border-red-200">

### 常见做法
模型答错 → PM 修 prompt → 再试 → 错 → 再修 prompt。把模型当黑盒。

</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">

### Cat 推荐的做法
模型答错 → 让模型自己解释 "why did you do that" → 拿它的解释当线索。

</div>

<div class="p-3 rounded bg-green-50 border border-green-200">

### 为什么有用
模型是 prompt 和工具的最直接观察者，它的自我归因往往比 PM 的猜测更准。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
<strong>作者概括</strong>：右边两栏的展开是把 show notes 那一句 "introspect on its own mistakes" 落地成一个工作回路 —— 嘉宾的原话只说了这是她"most underrated"的技能。
</div>

---
layout: two-cols
---

# Introspection 是个反馈回路

<div class="space-y-3 text-sm mt-4">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>1 观察失败</strong> — 工具被错用、答非所问、循环。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>2 让模型解释</strong>  — "为什么你刚才选了这条路？" 不要假设你已经知道答案。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>3 模型暴露原因</strong>  — 通常是 prompt 歧义、工具描述不清、上下文里有干扰。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>4 修原因，不修症状</strong>  — 改 prompt / 改工具 / 改 system context，再回到 1。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：四步分解是基于 show notes 的一句话推断出的"如何做"。嘉宾原话仅给出了核心动作。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./introspect-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Topic 4 · PM 该长出的新技能

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-xl border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">
"The <strong>emerging skills PMs need to develop right now</strong>"
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div>

### 她为什么有发言权
<div class="p-3 mt-2 bg-blue-50 border-l-4 border-blue-500 rounded">
她正在面 <strong>"hundreds of product managers"</strong> 想转 AI 的候选人 —— 这是 show notes 原文。
</div>
<div class="p-3 mt-2 bg-orange-50 border-l-4 border-orange-500 rounded">
她可以直接看到 "what separates those who thrive from those who fall behind"。
</div>

</div>

<div>

### 这一题的钩子
<div class="p-3 mt-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
副标题里第一个题面就是 "how AI is changing the PM role"。
</div>
<div class="p-3 mt-2 bg-green-50 border-l-4 border-green-500 rounded">
所以这不是 "新增技能列表"，而是 PM 这一职位的内部重新分布。
</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60">
下一页：作者基于全集主题给出的一个 PM 技能拆解框架（<strong>作者概括，非嘉宾原话</strong>）。
</div>

---

# Topic 4 续 · 一个落地框架（作者概括）

<div class="text-xs opacity-60 mb-3">基于整期主题做的拆解，<strong>不是嘉宾原话</strong>：</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### 1. 模型直觉
直接面对模型而不是中间产物。能在 chat 里把一个想法快速捏成原型。<br/>
<span class="opacity-60">→ 对应 "build products that don't yet fully work"</span>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

### 2. Introspection 工具箱
把 "让模型自我归因" 当作日常 debug 手段。<br/>
<span class="opacity-60">→ 对应 "most underrated AI skill"</span>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

### 3. 节奏感
能在 days 的尺度上做决定，知道哪些 artefact 在新节拍下是浪费。<br/>
<span class="opacity-60">→ 对应 "months to weeks to days"</span>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded">

### 4. 偏行动的姿态
更愿意先做出来再讨论，而不是反过来。<br/>
<span class="opacity-60">→ 对应 "just do things"</span>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

### 5. 品味与人格判断
对 "personality is core to its success" 的敏感度 —— 能感知一个 AI 产品的语气是不是对的。<br/>
<span class="opacity-60">→ 对应 Topic 5</span>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 6. Mission 黏度
对 mission alignment 有感受，能在没有 ownership 拉扯的环境里做事。<br/>
<span class="opacity-60">→ 对应 Topic 6</span>

</div>

</div>

---

# Topic 5 · Claude 的 personality 是核心

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-2xl border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">
"Why Claude's <strong>personality is core to its success</strong>"
</div>

<div class="grid grid-cols-3 gap-3 mt-8 text-xs">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是分数高
benchmark 排行榜上的差距大多在 noise 范围，但用户对"和我合作得好"的判断很稳。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 是性格落点对
"good Claude" 不是某项能力，而是 verbose / lazy / sycophant / rude / over-cautious / reckless 各个失败模式之间的那个交集。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 这是产品决定
把 personality 当 product surface 来设计、而不是当 "出厂默认值" —— 是嘉宾把这一题列进核心讨论的原因。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
<strong>作者概括</strong>：右边两栏对失败维度的拆解来自下一页配图的 character space，嘉宾原话只点了 "personality is core"。
</div>

---
layout: two-cols
---

# Character Space

把 "good Claude" 想成多维空间的一个<strong>靶心</strong>，周围都是失败模式：

<div class="space-y-2 text-xs mt-3">

<div class="p-2 bg-red-50 border-l-4 border-red-300 rounded">
<strong>verbose</strong> vs. <strong>lazy coder</strong>  ——  写太多 vs. 偷工。
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-300 rounded">
<strong>over-cautious</strong> vs. <strong>reckless</strong>  ——  什么都拒绝 vs. 什么都做。
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-300 rounded">
<strong>sycophant</strong> vs. <strong>rude</strong>  ——  无条件附和 vs. 居高临下。
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
中心的 <strong>good</strong> 是六个失败维度之间动态的平衡点。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：六个失败维度是常见的 AI personality 评估词，用来把 "personality is core" 这句话落地。
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

# Topic 6 · Mission alignment 消除摩擦

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-xl border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded leading-snug">
"Why Anthropic's <strong>mission alignment</strong> eliminates the <strong>friction</strong> that slows most large organizations"
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 bg-red-50 border-l-4 border-red-400 rounded">

### 大公司常见的摩擦
团队 ownership 拉扯、跨组排期、目标错位、政治账户 —— 这些往往不是因为人不努力，而是因为目标方向不一致。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 嘉宾的论点
当 mission 真的对齐时，"谁该做这件事" 的扯皮被自动消解 —— 因为答案不再取决于 ownership，而取决于谁离 mission 最近。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

<strong>为什么放进这期</strong>：和 Topic 1 的 "days 节拍" 是绑在一起的 —— 没有 mission alignment，"days" 节奏会被 "谁来 own 这件事" 的会议吞掉。<span class="text-xs opacity-60">（作者概括的因果，嘉宾原话只点了 "eliminates the friction"）</span>

</div>

---

# Topic 7 · "Just do things"

<div class="text-sm opacity-70 mb-4">嘉宾原话（show notes）：</div>

<div class="p-6 italic text-2xl border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40 rounded">
"Why <strong>'just do things'</strong> is <strong>the most important principle</strong> for working at AI-native companies"
</div>

<div class="grid grid-cols-3 gap-3 mt-8 text-xs">

<div class="p-3 rounded bg-red-50 border border-red-200">

### 它针对的反面
"discuss things"、"plan things"、"escalate things"、"document things" —— 都是 days 节拍下的奢侈品。

</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">

### 它不是反智
不是 "不要想"，是 "想完 30 分钟之内动手" —— 把一段讨论转成一个能 ship 的原型。

</div>

<div class="p-3 rounded bg-green-50 border border-green-200">

### 它是上面所有的合成
days 节拍 + build ahead + introspect + mission alignment 一起，才让 "just do things" 不变成莽撞。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
<strong>作者概括</strong>：右边三栏的展开是基于嘉宾对这条原则的强调 —— 原话仅给出 "most important principle"。
</div>

---
layout: two-cols
---

# 两条路径

<div class="space-y-3 text-sm mt-4">

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded">
<strong>Path A · deliberate</strong> —— meeting → spec → review → ship。<br/>
<span class="text-xs opacity-60">到 ship 的那一刻，模型可能已经换代，前面写的 spec 一半作废。</span>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Path B · just do things</strong> —— prototype → ship → learn。<br/>
<span class="text-xs opacity-60">省掉了 "可能被扔掉的中间产物" —— 这是 days 节拍下最贵的部分。</span>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>配合 Topic 2</strong>：path B 不是没有 spec，而是把 spec 直接做进原型 —— "products that don't yet fully work" 本身就是一种 spec。
</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：左右两条路径是把 "just do things" 与传统流程做的对照，嘉宾原话只强调了原则本身。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./just-do-things.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 七个主题怎么彼此咬合

<div class="text-xs opacity-60 mb-3"><strong>作者概括</strong>：把 show notes 的 7 个 bullet 串成一条因果链。</div>

<div class="grid grid-cols-1 gap-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>① 节奏从 months → weeks → days</strong> —— 整张图的底层时钟。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>② 在模型准备好之前建</strong>  —— 配合 days 节拍，否则模型一更新你就被甩在后面。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>③ 让模型 introspect</strong>  —— 在 days 节拍下，PM 没时间猜原因，必须让模型自己说。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>④ PM 角色重新分布</strong>  —— 旧技能（PRD / Roadmap）的权重下降，新技能（prompt / introspect / 直接出原型）上升。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded">
<strong>⑤ Personality 是产品决定</strong>  —— "好用" 不再是性能问题，是 personality 问题。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>⑥ Mission alignment 移除摩擦</strong>  —— 是 days 节拍能跑起来的组织前提。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
<strong>⑦ "Just do things"</strong>  —— 上面六条的工作姿态合集。
</div>

</div>

---

# 这一期没说但建议对照听

<div class="text-xs opacity-60 mb-3">show notes 的 Referenced 区把这一期放在一个更大的对谈群里：</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Boris Cherny
<div class="text-xs opacity-70 mt-1">Head of Claude Code：<em>"What happens after coding is solved"</em></div>
<div class="text-xs mt-2">和 Cat 同一个产品线的另一面。show notes 第一条 Referenced 链接。</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Amol Avasare
<div class="text-xs opacity-70 mt-1">Anthropic Head of Growth：<em>"Claude is growing itself at this point"</em></div>
<div class="text-xs mt-2">同公司的增长侧视角，和 Cat 的产品侧互补。</div>

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Ben Mann
<div class="text-xs opacity-70 mt-1">Anthropic co-founder：AGI 预测、"$100M talent wars"、20% unemployment 等话题</div>
<div class="text-xs mt-2">同公司的创始人侧视角，和这一期的 mission alignment 题目互相印证。</div>

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Hamel Husain & Shreya Shankar
<div class="text-xs opacity-70 mt-1">Eval 课程作者：<em>"Why AI evals are the hottest new skill"</em></div>
<div class="text-xs mt-2">和 Topic 3（让模型 introspect）紧密相关 —— evals 是 introspect 的下游工程化。</div>

</div>

</div>

<div class="mt-3 text-xs opacity-60">
所有链接均来自 Cat 这一期的 show notes "Referenced" 区。
</div>

---

# 核心要点

<div class="text-sm opacity-60 mb-4">这一期把要讨论的 7 件事写在 show notes 的 "We discuss" 区，原文如下：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
1 · "How Anthropic's shipping cadence went from <strong>months to weeks to days</strong>"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
2 · "The <strong>emerging skills PMs need to develop</strong> right now"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
3 · "Why you need to <strong>build products that don't yet fully work</strong>, so you're ready when the next model closes the gap"
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
4 · "Cat's most underrated AI skill: <strong>asking the model to introspect on its own mistakes</strong>"
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded">
5 · "Why <strong>Claude's personality is core to its success</strong>"
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
6 · "Why Anthropic's <strong>mission alignment eliminates the friction</strong> that slows most large organizations"
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
7 · "Why <strong>'just do things'</strong> is the most important principle for working at AI-native companies"
</div>

</div>

<div class="mt-3 text-xs opacity-60">
（show notes 原文，可在 Lenny's Podcast 主页核对。）
</div>

---

# 一句话总结

<div class="mt-12 text-center">

<div class="text-lg opacity-70 mb-6">
这一期的副标题已经把整集压缩成一句话 ——
</div>

<div class="text-2xl italic leading-relaxed px-12">
"how AI is changing the PM role, building products before the model is ready, inside Claude Code's launch room process,
<br/><br/>
and <strong>why speed matters more than strategy now</strong>"
</div>

<div class="mt-10 text-sm opacity-60">
— Cat Wu · Lenny's Podcast · 2026-04-23
</div>

</div>

---
layout: end
---

# Thanks

<div class="mt-6 text-base opacity-70">
Cat Wu —— Head of Product, Claude Code & Cowork, Anthropic
</div>

<div class="mt-4 text-sm opacity-60">
Lenny's Podcast · ~1h 25min · 2026-04-23
</div>
