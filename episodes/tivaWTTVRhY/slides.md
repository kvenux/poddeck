---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How Anthropic builds products like Claude Code before the AI models are ready | Dianne Penn'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<!-- 01 -->

<div class="text-sm tracking-[0.25em] uppercase text-orange-600 mb-5">Lenny's Podcast · PodDeck</div>

# 在模型准备好之前<br>先把产品造出来

<div class="text-xl mt-5 font-semibold">How Anthropic builds products like Claude Code before the AI models are ready</div>

<div class="mt-8 text-base opacity-70">
Dianne Penn · Anthropic AI Research & Labs 产品负责人
</div>

<div class="mt-10 inline-flex gap-3 text-xs">
  <span class="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">模型 × 产品</span>
  <span class="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">Evals × PM</span>
  <span class="px-3 py-1 rounded-full bg-orange-50 border border-orange-200">面向 2028</span>
</div>

---

<!-- 02 -->

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 产品不是包装
前沿模型需要前沿产品，用户才能真正感到能力跃迁。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Evals 改写 PM
从模糊反馈出发，把用户痛点压缩成研究团队可执行、可测量的问题。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为未来模型设计
不是只追当前能力，而是反问 Claude 8 出现时，今天的产品还能否成立。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Labs 的下注法
方向可以坚定，原型必须松动；失败也可以成为下一代模型的学习资产。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 人必须亲手做
管理者也要持续 shipping，靠真实使用维持对模型能力边界的判断。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 人类价值在判断
当生成越来越便宜，选择什么、何时反驳、由谁验证，反而更重要。
</div>

</div>

---

<!-- 03 -->

# 2023：一个极小的产品组织

<div class="grid grid-cols-3 gap-5 mt-8 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">2023</div>
<div class="mt-3 text-sm">Dianne 加入 Anthropic</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">5</div>
<div class="mt-3 text-sm">名产品工程师</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">1</div>
<div class="mt-3 text-sm">名工程师负责整个 API 业务</div>
</div>

</div>

<div class="mt-8 p-4 rounded bg-slate-50 border-l-4 border-slate-400 text-left">
<strong>作者概括：</strong>最初的问题不是如何扩张成熟产品，而是先回答 Claude 能为用户创造什么独特价值。
</div>

---

<!-- 04 -->

# Golden Gate Claude：24 小时的身份实验

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 研究起点
早期可解释性研究发现，模型内部存在与 Golden Gate Bridge 相关的特征；把特征调高后，Claude 会反复把答案拉回这座桥。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 产品动作
研究、工程、产品和设计一起在 Claude.ai 上做出体验，整个过程在 24 小时内完成。
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">
<div class="p-4 rounded bg-blue-50 border border-blue-200">
触达规模大约只有 <strong>2,000 人</strong>，但证明研究成果可以直接变成公众能感知的产品体验。
</div>
<div class="p-4 rounded bg-purple-50 border border-purple-200">
真正的收获不是流量，而是发现了一种属于 Anthropic 的表达方式。
</div>
</div>

---
layout: two-cols
---

<!-- 05 -->

# 从研究演示到产品身份

<div class="text-sm mt-5 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
研究不是后台供给，它可以成为产品体验的原点。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
24 小时原型让组织快速检验：公众是否能摸到研究的意义。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
这次小实验建立了产品、研究、设计和工程共同 shipping 的肌肉。
</div>

<div class="text-xs opacity-60">作者概括：小流量事件，也可能是组织能力的拐点。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./culture-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 06 -->

# Anthropic 找到自己的产品语气

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">
"We can actually bring new user experiences"
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
把研究成果转成普通用户可触摸的体验。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
允许工程师和设计师自下而上投入，而不是等完整路线图。
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
形成区别于竞争者的产品身份，而不只是再做一个聊天助手。
</div>

</div>

<div class="mt-5 text-xs opacity-60">Dianne 回看 Golden Gate Claude 带来的组织信心</div>

---

<!-- 07 -->

# Opus 3：先证明能造出前沿模型

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 组织目标
当时公司还不到 200 人，团队需要证明自己能够训练并发布 frontier model。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 用户问题
早期团队反复面对一个朴素问题：为什么用户要选择 Claude？
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 跨团队协作
预训练、微调、推理与产品团队围绕共同模型目标长期磨合。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 时间锚点
Dianne 回忆 Opus 3 在 2024 年 3 月初发布；她用的是带保留语气的回忆表述。
</div>

</div>

---

<!-- 08 -->

# Coding 当时并不是显然答案

<div class="mt-7 p-7 text-2xl italic border-l-4 border-orange-500 bg-orange-50">
"Nobody said Anthropic and Claude and coding in the same sentence."
</div>

<div class="mt-7 grid grid-cols-2 gap-6 text-sm text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">
2023 年，coding 只是通用模型的众多用例之一；市场认知仍主要停留在 code autocomplete。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
Dianne 观察到用户开始让模型写更长的代码，由此提出：是否应该专门把 Opus 3 往这个方向训练？
</div>

</div>

---

<!-- 09 -->

# 一次较小的训练改变，形成早期差异化

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-700 text-lg">观察行为</div>
<div class="mt-3">用户从补全转向更长的代码生成</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-700 text-lg">调整训练</div>
<div class="mt-3">Dianne 称它是相对较小的训练改变</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700 text-lg">获得拉力</div>
<div class="mt-3">开发者第一次感到模型给出了此前不认为可行的价值</div>
</div>

</div>

<div class="mt-8 p-4 rounded bg-slate-50 border-l-4 border-slate-400">
<strong>作者概括：</strong>优势未必来自宏大路线图，也可能来自比别人更早读懂用户已经开始做什么。
</div>

---
layout: two-cols
---

<!-- 10 -->

# Coding wedge 是怎样被发现的

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
先观察真实使用的变化，而不是从既有品类定义推演。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
把新的行为信号转成训练目标。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
模型改进进一步吸引更深度的开发者使用。
</div>
<div class="text-xs opacity-60">作者概括：行为 → 训练 → 差异化，而不是先写完整产品蓝图。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./coding-bet.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 11 -->

# 模型能力并不会自动变成用户价值

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 只有模型
能力可能已经存在，但用户不知道该问什么，也没有让模型端到端行动的环境。
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 有产品载体
产品把上下文、工具和交互方式组织起来，让更广泛的用户感到 frontier intelligence。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
在 Dianne 的叙述里，Opus 4.5 的跃迁与 Claude Code 的成熟几乎不可拆开讨论。
</div>

---

<!-- 12 -->

# Opus 4.5 × Claude Code：一次共同解锁

<div class="grid grid-cols-3 gap-4 mt-7 text-sm">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 更强模型
智能水平跨过阈值，能更广泛地完成端到端、agentic 的工作。
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 更好载体
Claude Code 把模型放进真实开发环境，让能力不再停留在聊天窗口。
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 更快采用
产品让模型被感知，模型又让产品的价值陡增。
</div>

</div>

<div class="mt-7 text-center text-lg font-semibold text-slate-700">
产品与模型不是先后关系，而是共同形成拐点。
</div>

---
layout: two-cols
---

<!-- 13 -->

# 双向飞轮：能力与载体互相放大

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
模型决定新的任务上限。
</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
产品决定用户是否能触达这个上限。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
采用与反馈又把下一轮训练问题送回研究团队。
</div>
<div class="text-xs opacity-60">作者概括：model → product → adoption → feedback。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-product-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 14 -->

# 前沿模型需要前沿产品

<div class="mt-7 p-7 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-semibold text-blue-800">Frontier products</div>
<div class="mt-3 text-base">Dianne 用这个概念解释：只有给模型一个合适的 vehicle，用户才会感到 frontier model 的魔力。</div>
</div>

<div class="mt-7 grid grid-cols-3 gap-4 text-sm text-left">
<div class="p-4 rounded bg-slate-50 border border-slate-200">模型能力是潜在供给</div>
<div class="p-4 rounded bg-orange-50 border border-orange-200">产品把能力变成可操作体验</div>
<div class="p-4 rounded bg-green-50 border border-green-200">用户采用验证价值是否真实</div>
</div>

<div class="mt-6 text-xs opacity-60">术语已按语境将字幕中的 cloud code 规范为 Claude Code。</div>

---

<!-- 15 -->

# 在指数变化中，计划本身会过期

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50">
"That agility is really important."
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
无法提前知道确切的模型或确切的能力出现时刻。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
新信息出现时，要敢于提前拉起原本几个月后的计划。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
第一性原理的作用，是重新判断现在最值得交付什么。
</div>
</div>

---

<!-- 16 -->

# Scaling law 很平滑，能力体验却很跳跃

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 训练视角
随着 compute 与 data 增加，next-token prediction loss 沿着相对平滑的曲线下降。
</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 用户视角
某项能力可能从不能可靠完成，突然跃迁为可以稳定完成。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border border-purple-200 text-center text-lg italic">
"The models get more intelligent as you scale them up."
</div>

<div class="mt-4 text-xs opacity-60 text-center">Dianne 对原始 scaling-law 图表的产品化解释</div>

---
layout: two-cols
---

<!-- 17 -->

# 平滑曲线之下，藏着能力开关

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Loss 的可预测性，不等于每一种行为都能被精确预测。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
能力跃迁可能先发生，组织稍后才通过 eval 或原型发现。
</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
这也解释了为什么 capability 与 safety 都需要持续测试。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./emergence.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 18 -->

# Evals 是发现能力跃迁的雷达

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Capability evals
确认新模型在哪些任务上已经跨过可靠性阈值，哪些产品计划可以提前。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Safety testing
确认新增能力是否带来新的风险，需要怎样的 safeguards 与 fallback。
</div>

</div>

<div class="mt-7 p-5 rounded bg-slate-50 border-l-4 border-slate-400">
<strong>作者概括：</strong>模型不是发布后才进入产品流程；evals、red teaming 与原型从研究阶段就共同决定怎样被使用。
</div>

---

<!-- 19 -->

# 现有模型也可能有两种 overhang

<div class="mt-7 grid grid-cols-2 gap-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xl font-semibold text-blue-700">Product overhang</div>
<div class="mt-3">模型会做，但产品还没有把上下文、工具或交互设计接上。</div>
</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xl font-semibold text-orange-700">User overhang</div>
<div class="mt-3">产品已经提供能力，但用户还不知道怎样提出任务、形成工作流。</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border border-purple-200 text-center text-xl italic">
"Product overhang and user overhang"
</div>

---
layout: two-cols
---

<!-- 20 -->

# 价值发现发生在模型发布之后

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
当前模型中仍可能存在尚未被产品捕捉的能力。
</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
原型帮助团队发现应该补怎样的 product surface。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
真实用户则会发明团队没有预先写进路线图的使用方式。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./overhang.excalidraw"
  class="w-[300px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 21 -->

# Token-maxing 不是目标，实验产出才是

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 输入
更多 token spend 能让团队更早体验未来工作方式，也提高试错密度。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 输出
Dianne 更愿意用 experimentation 衡量：是否产生更好的想法、原型与用户价值。
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50">
"You have to sweat the tokens as much as you sweat the pixels."
</div>

---

<!-- 22 -->

# Working in public：把个人试探变成集体发现

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
早期 Anthropic 在 Slack 里让几乎全公司测试研究版 Claude。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
一个人的提示与结果，会被其他人看到并做出不同变体。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
新用例不是某位 PM 独立发现，而是在组织内部连续改写出来。
</div>

</div>

<div class="mt-7 p-5 rounded bg-slate-50 border border-slate-200 text-center">
公开工作把孤立实验变成可复利的共同资产。
</div>

---

<!-- 23 -->

# 实验不是个人运动

<div class="mt-7 p-7 text-2xl italic border-l-4 border-green-500 bg-green-50">
"Experimentation is not an individual sport."
</div>

<div class="mt-7 grid grid-cols-2 gap-6 text-sm text-left">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
与兴奋的人配对，比独自寻找完美 use case 更容易进入深水区。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
分享原型既传播能力边界，也帮助更多人建立使用 AI 的乐趣。
</div>
</div>

---

<!-- 24 -->

# Labs 寻找非连续下注

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">10×</div>
<div class="mt-3">比已有体验更大一步</div>
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600">100×</div>
<div class="mt-3">进入核心路线图之外</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">1000×</div>
<div class="mt-3">追问真正的非连续价值</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-slate-50 border-l-4 border-slate-400">
Labs 的任务不是做更多小功能，而是抓住可能改变产品类别的 thread，验证那里是否真的有价值。
</div>

---

<!-- 25 -->

# 方向坚定，原型松动

<div class="grid grid-cols-2 gap-7 mt-7 text-sm">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xl font-semibold text-purple-700">Strongly held</div>
<div class="mt-3">对主题、用户变化和未来方向形成清晰判断。</div>
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xl font-semibold text-blue-700">Weakly held</div>
<div class="mt-3">对这一周采用的具体 prototype 保持可替换性。</div>
</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border border-orange-200 text-center">
当模型每代都在移动，固守实现比固守问题更危险。
</div>

---

<!-- 26 -->

# 还没成功，不等于方向错误

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 现在做不到
有些原型在当前模型上无法达到可靠体验，团队会选择停掉或不发布。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 未来再回来
Dianne 提到，团队可能在一到两代模型之后重新审视同一条 thesis。
</div>

</div>

<div class="mt-7 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50">
"Prototypes that actually end up just helping us learn"
</div>

---
layout: two-cols
---

<!-- 27 -->

# Labs 管的不是路线图，而是下注组合

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
一条强 thesis 可以衍生多个短周期原型。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
成功路径进入产品；失败路径沉淀学习。
</div>
<div class="p-4 rounded bg-slate-50 border-l-4 border-slate-400">
模型变强后，旧原型可能突然跨过可用阈值。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./labs-bets.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 28 -->

# 小团队需要 founder energy

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
Labs 的 pod 很小，有些想法从一名工程师开始。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
大团队处理高度模糊的新方向，反而可能被协调成本拖慢。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
成员要愿意承担 zero-to-one 的不确定性，也要接受下注被关闭。
</div>

</div>

<div class="mt-7 p-6 text-xl italic border-l-4 border-green-500 bg-green-50">
"Acting as a founder for a bet"
</div>

---

<!-- 29 -->

# 研究者同时活在两个时间尺度

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 中长期
形成技术会走向哪里的大胆愿景，例如让 Claude 使用电脑、理解屏幕和工具。
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 当下
紧贴训练 run、数据和 eval，持续改进今天用户已经遇到的失败。
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border border-orange-200 text-center text-lg italic">
"Strong first principles thinkers"
</div>

---

<!-- 30 -->

# 模糊反馈不能直接喂给研究团队

<div class="mt-6 p-6 rounded bg-red-50 border-l-4 border-red-500 text-xl font-semibold">
用户反馈：Claude hallucinated
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
该调用工具时没有调用？
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
查对文档，却抽错事实或综合错误？
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
是对齐、语气或过度自信问题？
</div>

</div>

<div class="mt-6 p-4 rounded bg-slate-50 border-l-4 border-slate-400">
研究型 PM 的关键工作，是把同一个表面抱怨拆成不同的可行动失败类型。
</div>

---
layout: two-cols
---

<!-- 31 -->

# 从症状走到研究动作

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
先回到用户的完整 trajectory，而不是只看 thumbs-down 标签。
</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
判断失败发生在 tool use、search、synthesis 还是 alignment。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
再决定问题是否足够大、能否稳定复现、怎样测量改进。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./feedback-decompose.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 32 -->

# Evals are the new PRDs

<div class="mt-7 p-7 text-3xl italic border-l-4 border-blue-500 bg-blue-50">
"Evals are the new PRDs."
</div>

<div class="mt-7 grid grid-cols-3 gap-4 text-sm text-left">
<div class="p-4 rounded bg-blue-50 border border-blue-200">
把用户痛点变成可重复的输入与判定标准。
</div>
<div class="p-4 rounded bg-orange-50 border border-orange-200">
让研究人员直接看到模型具体在哪里失败。
</div>
<div class="p-4 rounded bg-green-50 border border-green-200">
让新版本是否改善，不再只靠发布后的主观感受。
</div>
</div>

---

<!-- 33 -->

# JSON schema：一个 eval 如何长出来

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600">80%</div>
<div class="mt-3">早期用户所说的不遵循指令，Dianne 发现大约八成指向 JSON 输出错误</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">30–40</div>
<div class="mt-3">先收集可复现的失败样例，形成第一版 eval set</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">99.9%</div>
<div class="mt-3">后来版本在该项上接近完全通过，它也不再是主要用户痛点</div>
</div>

</div>

<div class="mt-7 text-center text-sm opacity-70">
用户语言 → 失败分类 → 样例集 → 训练与回归验证
</div>

---
layout: two-cols
---

<!-- 34 -->

# Eval-centered 产品循环

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
从用户痛点出发，读取完整交互轨迹。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
构造同时包含正例与边界条件的 eval。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
让研究训练与新模型回归拥有同一把尺子。
</div>
<div class="mt-4 text-lg italic">"You can't improve what you can't measure"</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eval-loop.excalidraw"
  class="w-[300px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 35 -->

# PRD 没死，只是职责边界变了

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Evals 更擅长
定义清楚、能从真实失败中复现，并且需要研究团队直接优化的模型问题。
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### PRD 更擅长
为大量工程、产品、安全、法律相关者建立共同目标；或探索尚无成熟用户痛点的新产品愿景。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
电脑使用等新方向，在技术还不能服务所有人时，仍需要 PRD 描绘先为哪一小群用户创造完整价值。
</div>

---

<!-- 36 -->

# 第一性原理：别把旧产物当成工作本身

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-400">

### Pattern matching
因为过去 PM 写 PRD，所以继续把写文档当成产品工作的核心证明。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### First principles
先问此刻、此技术、此用户群真正需要什么，再选择 eval、原型或 PRD。
</div>

</div>

<div class="mt-7 p-5 rounded bg-slate-50 border border-slate-200 text-center">
衡量产出，不衡量仪式；缩短用户问题到研究动作的距离。
</div>

---

<!-- 37 -->

# 管理者也必须亲自 shipping

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50">
"If you're a manager, you have to be hands-on."
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
高级 PM 与早期职业 PM 的 onboarding 基本一致。
</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
都要读用户反馈、谈客户、理解模型失败。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
Dianne 自己会保留一到两条 workstream，维持对模型变化速度的体感。
</div>
</div>

---

<!-- 38 -->

# 不要追遍所有工具，选一两件事做深

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-400">

### 浅层打卡
同时碰很多原型，每个都停留在半工作状态，AI 使用变成焦虑来源。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 深层交付
选择一到两个高价值问题，端到端 shipping，再读取真实反馈。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border border-blue-200 text-center text-xl italic">
"Go deep in one to two of them"
</div>

---

<!-- 39 -->

# 先形成自己的 POV，再让 Claude 进入

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50">
"Claude doesn't take over all of my thinking for me."
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
高判断任务：先写出自己的观点与直觉。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
把 Claude 当 sparring partner，要求补充、反驳与推演反应。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
低差异任务：让 Claude 起草标准化更新，人负责 review 与 sign-off。
</div>
</div>

---
layout: two-cols
---

<!-- 40 -->

# AI 的价值不是替你拥有观点

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
个人观点保留问题定义与责任归属。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
Claude 的反驳扩大备选解释，暴露尚未形成的部分。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
最终判断与验证仍然回到人。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./thinking-loop.excalidraw"
  class="w-[300px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 41 -->

# 会反驳，才可能成为真正的思考伙伴

<div class="mt-7 p-7 text-2xl italic border-l-4 border-orange-500 bg-orange-50">
"A thinking partner doesn't just agree with you."
</div>

<div class="mt-7 grid grid-cols-2 gap-6 text-sm text-left">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
Alignment 不只是限制行为；它也帮助 Claude 在适当时刻指出问题，而不是持续迎合。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
Proactivity 也不只是自动执行日程，而是知道何时提出新想法、何时要求重审方向。
</div>
</div>

---

<!-- 42 -->

# 写作归谁，不如验证归谁重要

<div class="grid grid-cols-2 gap-7 mt-7 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xl font-semibold">Who wrote it?</div>
<div class="mt-3">对标准化月报等任务，生成本身可以大幅委托给 Claude。</div>
</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xl font-semibold">Who verified it?</div>
<div class="mt-3">谁核查事实、承担判断并最终 sign off，成为更重要的问题。</div>
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border border-purple-200 text-center text-2xl italic">
"Who's verifying"
</div>

---

<!-- 43 -->

# 生成越便宜，判断越稀缺

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">
"There are so many things AIs can build."
</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Judgment</strong><br>在大量可行方向中选择什么值得做。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Persistence</strong><br>面对模型与市场变化，持续把想法推进到现实。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Inner voice</strong><br>在 AI 建议之外维持自己的立场与价值判断。
</div>
</div>

---
layout: two-cols
---

<!-- 44 -->

# 高性能不是单人硬扛

<div class="text-sm mt-5 space-y-4">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Radical ownership 让个人敢于对关键判断负责。
</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
共享第一性原理让同伴能快速接手、反驳或补位。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
低 ego 的协作让 PTO 真正可恢复，而不是回来面对三倍积压。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./team-hive.excalidraw"
  class="w-[300px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

<!-- 45 -->

# 更快的发布节奏，需要更强的团队互备

<div class="grid grid-cols-2 gap-7 mt-7 text-center text-sm">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">2024</div>
<div class="mt-3">全年发布四个模型或四个模型系列</div>
</div>

<div class="p-6 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">Q2</div>
<div class="mt-3">Dianne 称今年第二季度的发布量已经超过 2024 全年</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-sm">
发布前夜，即使不是该模型的直接负责人，队友也会留下来审博客、改 demo、补最后一公里。
</div>

<div class="mt-5 p-4 rounded bg-purple-50 border border-purple-200 text-center italic">
"Low ego team oriented."
</div>

---

<!-- 46 -->

# 当 building 变容易，PM 反而更需要深入用户

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 进入细节
理解用户到底想完成什么，以及失败发生在完整 trajectory 的哪一步。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 形成行动
把同理心压缩成研究人员、工程师能执行的 eval 或产品判断。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 持续验证
让 feedback 真正回到每个研究模型，而不是停在 feature request 列表。
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border border-purple-200 text-center text-xl font-semibold">
技术层越来越强，用户中心的产品工作不是减少，而是更具体、更近模型。
</div>

---

<!-- 47 -->

# 核心金句

<div class="text-xs opacity-60 mb-3">八句话，串起模型、产品、PM 与人的新分工：</div>

<div class="grid grid-cols-2 gap-2 text-[11px] leading-snug text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Evals are the new PRDs."
<div class="text-[9px] opacity-60 mt-1 not-italic">— 从用户痛点到研究动作</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"You have to sweat the tokens as much as you sweat the pixels."
<div class="text-[9px] opacity-60 mt-1 not-italic">— AI 产品的体验材料已经改变</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Experimentation is not an individual sport."
<div class="text-[9px] opacity-60 mt-1 not-italic">— 公开协作式能力发现</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"You can't improve what you can't measure"
<div class="text-[9px] opacity-60 mt-1 not-italic">— Eval-centered 产品循环</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"If you're a manager, you have to be hands-on."
<div class="text-[9px] opacity-60 mt-1 not-italic">— 管理者也要持续 shipping</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"A thinking partner doesn't just agree with you."
<div class="text-[9px] opacity-60 mt-1 not-italic">— 反驳是智能协作的一部分</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"There are so many things AIs can build."
<div class="text-[9px] opacity-60 mt-1 not-italic">— 判断成为更稀缺的能力</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"No matter how far you go, there's always another level"
<div class="text-[9px] opacity-60 mt-1 not-italic">— Dianne 从祖父那里继承的人生提醒</div>
</div>

</div>

---
layout: end
---

<!-- 48 -->

# 保留判断，继续向前

<div class="mt-8 text-3xl italic leading-relaxed">
"No matter how far you go, there's always another level"
</div>

<div class="mt-8 text-sm opacity-65">— Dianne Penn</div>

<div class="mt-12 text-xs opacity-45">PodDeck · tivaWTTVRhY</div>
