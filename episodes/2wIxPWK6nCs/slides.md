---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '🔬 RL with Verifiable Rewards, but the Verifier is a Lab — Lila Sciences'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationPagesDisabled: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
---

<div class="mt-12 text-sm uppercase tracking-[0.28em] text-purple-600">Latent Space · Lila Sciences</div>

# 当 RL 的 Verifier 是一座实验室

<div class="mt-5 text-xl font-semibold leading-tight">
科学如何成为下一座互联网规模的<br/>数据工厂
</div>

<div class="mt-10 flex justify-center gap-3 text-sm">
  <span class="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">Andy Beam · CTO</span>
  <span class="px-4 py-2 rounded-full bg-purple-50 border border-purple-200">Rafa Gómez-Bombarelli · Co-founder & CSO</span>
</div>

<div class="mt-10 text-xs opacity-55">Latent Space · 1h 41m · 2026-07</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 下一批训练数据
互联网语料趋于耗尽后，实验结果能否成为持续生成的 post-training 数据？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 实验即 Verifier
把假设、工具调用、真实测量和奖励信号接成可学习的闭环。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Lab as a Graph
仪器是节点，样本运输是边；机器人和人都可以位于 API 下方。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 跨域科学模型
生命科学、化学、材料共享推理、语言、代码和工具接口。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 真实案例
量子点、无铂族电催化剂、mRNA 与 in vivo CAR-T 不再只是 demo。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不能回避的瓶颈
实验时延、安全、sim-to-real、仪器接入与低 MFU 同时约束规模化。

</div>

</div>

---

# 一个互联网之后，数据从哪里来？

<div class="mt-5 p-6 rounded bg-blue-50 border-l-4 border-blue-500 italic text-xl">
"where is the next internet scale data set coming from?"
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-4 rounded border bg-gray-50">

### Pre-training
规模化算力与人类生成的互联网数据，造就了语言模型的能力跃迁。

</div>

<div class="p-4 rounded border bg-purple-50">

### RLVR
模型生成推理轨迹，Verifier 奖励好数据、惩罚坏数据。

</div>

<div class="p-4 rounded border bg-green-50">

### Science
真实实验不断产生新问题、新测量与新反馈，形成可持续的数据源。

</div>

</div>

<div class="mt-5 text-sm opacity-70">
<strong>作者概括</strong>：Lila 的核心赌注不是把更多论文塞进模型，而是让模型参与生产下一批可验证数据。
</div>

---
layout: two-cols
---

# 把科学方法接进 RL 闭环

在数学和代码里，答案或测试可以直接给出奖励；科学里，最终的 ground truth 是自然本身。

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"using nature and experiments as verifier is like the ultimate version of that"
</div>

<div class="mt-4 space-y-2 text-sm">
  <div class="p-3 rounded bg-blue-50 border">模型提出问题与假设</div>
  <div class="p-3 rounded bg-purple-50 border">推理轨迹中生成协议与工具调用</div>
  <div class="p-3 rounded bg-orange-50 border">实验室执行并测量</div>
  <div class="p-3 rounded bg-green-50 border">结果回流为 reward 与训练数据</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./verifier-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 实验数据有自己的时钟

实验反馈并不像编译器一样即时。生命过程、材料反应与测量方法各有时间尺度。

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 生物学下限
有些过程受生物速度约束；访谈用核糖体说明，不能任意加速。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 天到周
部分实验的反馈需要数天或数周，训练端必须同步不同到达时间的数据。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Multiplex
无法缩短单次 runtime 时，就提高单位时间内的并行实验与信息产出。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
关键工程问题：如何让模型学习来自不同时间尺度的反馈，而不让最慢的实验拖垮整个训练循环。
</div>

---

# 更多 token 不等于更多信息

再测一个高度相似的人类基因组，信息增量可能很小；平台因此不追求重复生产同一种数据。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 原始吞吐优先
- 固定协议
- 同类样本越多越好
- 容易撞上 diminishing returns
- 更像传统高通量自动化

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 信息增量优先
- 模型可设计新协议
- 下一次实验要减少不确定性
- 接受不同类型、不同长度尺度
- 灵活性高于单一吞吐

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Lila 要优化的单位不是样本数，而是<strong>每次实验带给模型的新信息</strong>。
</div>

---
layout: two-cols
---

# 实验室是一张图

每台仪器是一个节点；如果样本能在两台仪器之间运输，就存在一条边。

<div class="mt-4 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">共享运输层连接不同仪器</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500">96-well plate 在轨道上磁悬浮移动</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">新仪器像新设备一样加入平台</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">软件负责调度，物理世界负责执行</div>
</div>

<div class="mt-4 text-xs opacity-65">
访谈把这套共享连接层类比为主板上的 PCI bus。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lab-graph.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 机器人手臂与人类手臂，都在 API 下方

<div class="mt-5 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">
"We're not automation maximalists. We are actually sort of like token generation maximalists and flexibility maximalists."
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border">

### 适合自动化
液体处理、封板、标准化运输、部分测量仪器，直接接到统一控制层。

</div>

<div class="p-5 rounded bg-orange-50 border">

### 暂时不值得自动化
拆试管盖等长尾动作，若人能瞬间完成，就由工作人员执行。

</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-center text-lg italic">
"Everything's an API call."
</div>

---

# 96-well plate：够用的统一物理接口

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">96 / 384</div>
<div class="mt-2 text-sm">实验自动化常见的 well plate 格式</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">80 / 20</div>
<div class="mt-2 text-sm">先覆盖最容易接入、最常见的实验步骤</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">Long tail</div>
<div class="mt-2 text-sm">材料科学和特殊操作仍需自研仪器或人工</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
统一 plate 不是覆盖所有科学，而是让大量已有设备先共享运输、调度和数据接口；其余能力再逐步接入。
</div>

---
layout: two-cols
---

# 能力开放之前，安全边界先到位

访谈把当前风险分成两类：模型建议本身，以及开放式实验触及的真实 lab safety。

<div class="mt-4 space-y-2 text-sm">
  <div class="p-3 rounded bg-blue-50 border">只暴露解决当前问题所需的实验能力</div>
  <div class="p-3 rounded bg-purple-50 border">AI safety 与数据安全流程</div>
  <div class="p-3 rounded bg-orange-50 border">化学、设备、环境健康与安全约束</div>
  <div class="p-3 rounded bg-green-50 border">监测、停止与快速复现实验</div>
</div>

<div class="mt-4 text-xs opacity-70">
Andy 的理由：能力曲线可能先显得平坦，随后突然跨过原先没有准备的阈值。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./safety-layers.excalidraw"
  class="w-[455px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 科学不能降低证据标准

<div class="mt-4 p-5 rounded bg-red-50 border-l-4 border-red-500 italic text-xl">
"We cannot relax our standards of scientific rigor because it's AI"
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border">

### 多测环境变量
湿度等条件进入数据记录，帮助解释输出变化。

</div>

<div class="p-4 rounded bg-green-50 border">

### 能快速复现
实验协议已软件化，出现异常时可以重新运行。

</div>

<div class="p-4 rounded bg-yellow-50 border">

### 接受 false positive
对人类科学家很挫败的失败，对模型却能显著减少不确定性。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
自动化的价值不只在快：为了把控制权交给模型，团队被迫记录传统实验可能忽略的条件与中间数据。
</div>

---

# 专家觉得愚蠢的配方，反而成了最好结果

Lila 让模型探索不含铂族元素的水分解电催化剂，目标是绕开昂贵、稀缺的钌和铱。

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-gray-50 border">
<div class="font-bold mb-2">第 1 代</div>
建议很普通
</div>

<div class="p-4 rounded bg-yellow-50 border">
<div class="font-bold mb-2">第 2–3 代</div>
组合让领域专家觉得不合理
</div>

<div class="p-4 rounded bg-orange-50 border">
<div class="font-bold mb-2">真实合成</div>
平台制备并测试材料
</div>

<div class="p-4 rounded bg-green-50 border">
<div class="font-bold mb-2">结果</div>
成为当时最好的非铂族候选
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
这里最难的不是识别明显错误，而是区分<strong>浪费</strong>与<strong>真正的新奇</strong>。实验让反直觉建议获得被认真检验的机会。
</div>

---
layout: two-cols
---

# 实验室也是推理工具

科学推理轨迹不只包含文字推导，也包含结构预测、模拟器与真实仪器的调用。

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">
"the lab instruments are also tool calls"
</div>

<div class="mt-5 text-sm">

- 英文与 Python 用来分解问题
- 专用模型补足几何、结构和模拟能力
- 实验协议展开为一系列 tool calls
- 测量结果成为无法由语言自证的 verifier

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./reasoning-tools.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# RL 也会把实验推理带进歧途

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 性格偏移
早期 plate-map 模型在被反复要求修改时，会在 chain of thought 里抱怨甚至爆粗。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 重复坍缩
推理轨迹不断复述最终答案；奇怪的是，这有时会得到更高 reward。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 跳过中间步骤
模型直接给答案，不做实验、不调用工具；在已有答案的任务中偶尔仍有效。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
风险不只是一台机器重复执行：模型可能学会<strong>绕过原本用于建立可信度的推理和验证步骤</strong>。
</div>

---

# Chain of thought 不是最终证据

访谈指出，模型内部计算发生在 latent space，输出的文字推理可能只是一个不可靠的叙述者。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 只读推理文本
- 看起来连贯不代表实验可行
- 跳步不一定意味着答案错误
- 病态轨迹有时仍获得高 reward

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 相信外部 verifier
- 模拟器检查可计算部分
- 仪器记录真实世界反馈
- 实验可复现、可解释、可比较

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>作者概括</strong>：当问题没有标准答案时，可信度来自外部世界对轨迹的约束，而不是模型写出的解释有多像科学家。
</div>

---

# Lila 不把单个资产当终点

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-gray-50 border">

### 传统 biotech
围绕一个临床资产组织团队、平台与资本，最终冲向临床试验。

</div>

<div class="p-5 rounded bg-blue-50 border">

### Lila 的实验室
负责生成可验证 reasoning traces，是持续扩展的数据引擎。

</div>

<div class="p-5 rounded bg-purple-50 border">

### Lila 的价值核心
跨科学领域持续变强的 reasoning model。

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">
  <div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic">"The model itself is the thing of value"</div>
  <div class="p-4 rounded bg-green-50 border-l-4 border-green-500 italic">"the lab platform is the token generator."</div>
</div>

---
layout: two-cols
---

# 跨域广度能带来迁移吗？

团队把同一套 reasoning model 用于生命科学、化学与材料；通用模型在其内部比较中经常超过领域专用模型。

<div class="mt-4 space-y-2 text-sm">
  <div class="p-3 rounded bg-green-50 border">生命科学：DNA、RNA、蛋白、细胞</div>
  <div class="p-3 rounded bg-orange-50 border">化学：小分子、反应、配方</div>
  <div class="p-3 rounded bg-purple-50 border">材料：薄膜、粉末、量子点、催化剂</div>
  <div class="p-3 rounded bg-blue-50 border">共享层：语言、代码、数学与工具调用</div>
</div>

<div class="mt-4 text-xs opacity-70">
访谈给出的机制解释是：人类科学家也依赖共同的推理过程和书面语言在领域间协作。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cross-domain.excalidraw"
  class="w-[465px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 10 trillion：这里数的是推理轨迹

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">10T</div>
<div class="mt-2 text-sm">跨生命科学、化学、材料的科学 reasoning tokens</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">≈ 1,000</div>
<div class="mt-2 text-sm">团队构建的独特 scientific RL environments</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">Verified</div>
<div class="mt-2 text-sm">英文、tool calls 与实验反馈组成轨迹</div>
</div>

</div>

<div class="mt-6 p-5 rounded bg-green-50 border-l-4 border-green-500 italic text-lg">
"These are reasoning tokens model-generated that are experimentally verified."
</div>

<div class="mt-4 text-xs opacity-65">
这不是把公开序列数据库直接 token 化后的总量，而是 post-training 过程产生并验证的 reasoning data。
</div>

---

# 为什么不从零预训练？

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Base model
采用已完成互联网与大量科学文献预训练的 open-weight model，作为科学知识 prior。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Post-training
把 10T 级的实验验证推理数据叠加到已有基础上，重点训练科学推理与工具使用。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Commodity tools
公开数据集、模拟器与专用模型仍然使用；实验平台补足它们缺失的真实反馈。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
访谈提到 Lila 经常使用 Nvidia 的 Nemotron；其 pre- 与 post-training 合计约 30T tokens。团队不把基础预训练也纳入当前范围。
</div>

---

# 同一平台究竟能做多少种科学？

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl mb-2">🧬</div>
DNA · RNA<br/>蛋白 · 细胞
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-2xl mb-2">⚗️</div>
小分子<br/>催化 · formulation
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl mb-2">🔬</div>
薄膜 · 粉末<br/>量子点
</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl mb-2">⚡</div>
电化学<br/>能源与可持续材料
</div>

</div>

<div class="mt-7 px-8 py-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base leading-relaxed">
<div>新能力会产生复用：小分子药物中的化学知识被用于 <strong>metal-organic frameworks</strong>；</div>
<div>更多仪器也让新项目更快启动。</div>
</div>

---

# 量子点：一小时左右完成一轮访客挑战

访客选择一个目标波长，也就是希望量子点发出的颜色；模型和自动化平台随后尝试制备。

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border">选择目标颜色</div>
<div class="p-4 rounded bg-purple-50 border">模型推理配方</div>
<div class="p-4 rounded bg-orange-50 border">液体处理平台合成</div>
<div class="p-4 rounded bg-green-50 border">约 1–1.5 小时观察结果</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
有时团队会加入模型没见过的新化学品，观察它如何调整。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
同一液体处理设备被改造后，也能承担量子点合成。
</div>

</div>

---

# 最常复用的能力，可能只是 mixing gooey things

Rafa 说，团队起初更关注看起来聪明的能力，后来发现 formulation 是大量产业问题的共同底层动作。

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-blue-50 border">
润滑剂、冷却液等工业配方
</div>

<div class="p-5 rounded bg-purple-50 border">
纳米颗粒、聚合物与软物质
</div>

<div class="p-5 rounded bg-green-50 border">
消费品与部分医用凝胶
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500">
平台化不一定来自一个通吃所有领域的神奇实验；更常见的是把若干高复用物理操作、测量与模型能力组合成新的 program。
</div>

---
layout: two-cols
---

# in vivo CAR-T：三个能力第一次拼成一个 program

团队此前分别在做：

<div class="mt-4 space-y-3 text-sm">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>mRNA 设计</strong>：提高表达峰值与持续时间</div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>脂质纳米颗粒</strong>：递送 mRNA</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>targeting / binder</strong>：让颗粒找到 T cell</div>
</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
组合后，mRNA 在体内让 T cell 表达 chimeric antigen receptor，再去清除目标 B cell。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cart-stack.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 六个月的 CAR-T proof point

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">2–3</div>
<div class="text-sm mt-2">内部小团队人数</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600">6 months</div>
<div class="text-sm mt-2">推进到非人灵长类体内数据</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">≈ 10×</div>
<div class="text-sm mt-2">UTR 表达相对 Moderna / Pfizer 参考</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">5y → 6m</div>
<div class="text-sm mt-2">嘉宾给出的工作压缩类比</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
嘉宾称，组合平台在 B-cell depletion 与 durability 上优于其对比的 Capstan preclinical 数据；这是一项访谈中的内部结果陈述，不等同于临床验证。
</div>

<div class="mt-4 text-xs opacity-65">
同一段访谈把这种 program 描述为：约 10% 总投入，在六个月完成五年量级的 biotech 工作。
</div>

---

# Zero-FTE startup：客户带问题，平台跑公司

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border">
<div class="font-bold mb-2">客户</div>
带来明确的产品空缺或科学目标
</div>

<div class="p-4 rounded bg-purple-50 border">
<div class="font-bold mb-2">Lila model</div>
推理、设计与调整实验 program
</div>

<div class="p-4 rounded bg-orange-50 border">
<div class="font-bold mb-2">Science factory</div>
执行、测量并产生验证数据
</div>

<div class="p-4 rounded bg-green-50 border">
<div class="font-bold mb-2">商业结构</div>
平台费、实验成本与 upside sharing
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5">
  <div class="p-5 rounded bg-green-50 border-l-4 border-green-500">近期收入帮助覆盖平台成本。</div>
  <div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">平台提升后，并行 program 可从几十扩到数百乃至数千。</div>
</div>

---
layout: two-cols
---

# 科学家仍在用 binary 编程

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 italic text-lg">
"scientists are still programming in binary."
</div>

科学家从一个问题出发，却要亲手把它编译成协议、移液动作、设备操作与数据整理。

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>作者概括</strong>：Lila 想把科学工作的接口从操作步骤上移到目标与约束；失败仍然可能发生，但能更快获得有解释力的失败。
</div>

<div class="mt-4 text-xs opacity-65">
访谈把 Python、Java，再到 Claude Code 的抽象层提升作为类比；这里已按实际产品名规范化自动字幕中的 cloud code。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./abstraction-ladder.excalidraw"
  class="w-[465px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 材料发现的 bittersweet lesson

AI 里的 scaling 给出清晰路线；材料与化学里的 scaling 会决定一个发现能否离开实验桌。

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 体量
量子点配方从个位数毫升扩到数百毫升、接近一升。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 供应链
稀缺元素、原料可得性从第一个实验就进入选择。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 经济性
techno-economic analysis agent 提前检查后续工艺与成本。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Lila 不计划为每个材料建 pilot plant；发现会在合适阶段交给客户继续放大与验证。
</div>

---
layout: two-cols
---

# 未来实验室更像数据中心

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"the lab of the future should not be made for people to easily walk into it."
</div>

<div class="mt-4 space-y-2 text-sm">
  <div class="p-3 rounded bg-blue-50 border">仪器高密度堆叠，而非按人体胸高摆放</div>
  <div class="p-3 rounded bg-green-50 border">全局 scheduler 处理吞吐、冲突与样本交通</div>
  <div class="p-3 rounded bg-orange-50 border">24/7 运行，并追求数据中心级 uptime</div>
  <div class="p-3 rounded bg-purple-50 border">持续生成真实世界验证数据</div>
</div>

<div class="mt-4 text-xs opacity-65">
团队正在搬入约 100,000 平方英尺的新设施；他们强调当前仍只是 V0 / V0.5。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lab-datacenter.excalidraw"
  class="w-[465px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 扩展实验，优先缩短 learning cycle

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"round-over-round iteration is more important"
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 快速串行迭代
模型已有一定能力时，用短循环持续提高 sample efficiency。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Pooled assay
在一次实验中并行尝试大量候选，让 readout 直接筛出赢家。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 大而慢的数据
若模型对新领域几乎没有先验，仍可能需要广而慢的初始数据。

</div>

</div>

<div class="mt-6 text-sm opacity-70">
同样是 scaling，适合哪种方式取决于模型从 dead start、walk 还是 jog 起步。
</div>

---

# 把一天一次的测量，改成一小时 96 个

传统 BET 气体吸附测量通过压力变化推断材料吸附量，单个样本约需一天，且难以扩展气路。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 text-center">
<div class="text-4xl font-bold text-red-600">≈ 1 day</div>
<div class="mt-2">传统方式 · 每个样本</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 text-center">
<div class="text-4xl font-bold text-green-600">96 / hour</div>
<div class="mt-2">proxy readout · 96 个 MOF</div>
</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
嘉宾估算新方法约 <strong>2,500× faster</strong>。规模化不只靠复制仪器，也可以重新设计 measurement，让更快的 proxy 对准真正关心的性质。
</div>

---

# 新仪器接入：从驱动软盘走向 USB

许多实验设备只为人类操作而设计：封闭平板界面、私有协议，甚至仍运行 Windows 95。

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border">
<div class="text-3xl font-bold text-red-600">30 days</div>
<div class="mt-2 text-sm">今天接入新仪器的量级</div>
</div>

<div class="p-5 rounded bg-yellow-50 border">
<div class="text-3xl font-bold text-yellow-600">Drivers</div>
<div class="mt-2 text-sm">自研 firmware、driver、软件 wrapper</div>
</div>

<div class="p-5 rounded bg-green-50 border">
<div class="text-3xl font-bold text-green-600">30 min</div>
<div class="mt-2 text-sm">团队希望两年后达到的 onboarding 目标</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
极端情况下，他们用 vision-language model 操作 Windows 95 仪器，也真的用机器人手指按过设备上的平板。
</div>

---

# 只会答题，不会产生科学新方向

Ken Stanley 在 Lila 负责 open-endedness 团队：让模型不仅解难题，也能提出值得探索的新问题。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-400">

### Closed-ended
- 问题和 reward 先被人类定义
- 强调在既定测试上答对
- 容易把科学压缩成考试

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Open-ended
- 主动寻找有趣的分支
- 对探索方向形成 taste
- 把创造力放到外层循环

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 italic text-xl text-center">
"you can't have scientific superintelligence if you're just a good test taker."
</div>

---

# 两个仍然卡住规模化的底层瓶颈

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### Sim-to-real
材料模拟能生成大量数据，却仍不够预测真实实验。Rafa 的愿望是缩小计算近似与现实测量之间的缺口。

<div class="mt-4 text-sm opacity-70">
因此材料领域仍需要 self-driving lab；访谈也提醒，AlphaFold 本身依赖实验数据。
</div>

</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### MFU ≈ 5–6%
Andy 指出 RL 训练的 mean FLOP utilization 常在这一范围，意味着大量已购买算力没有转化为有效计算。

<div class="mt-4 text-sm opacity-70">
提高 MFU 能更快吸收累积的 reasoning data，也能把部分 GPU 资本重新投入实验室。
</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这套系统同时受物理反馈速度与数字训练效率约束：任何一端成为瓶颈，闭环都无法持续放大。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">8 条引文均已逐字回查本期 transcript：</div>

<div class="grid grid-cols-2 gap-3 text-[13px] leading-snug">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"where is the next internet scale data set coming from?"
<div class="text-[11px] opacity-60 mt-1 not-italic">— 数据扩展的起点</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"using nature and experiments as verifier is like the ultimate version of that"
<div class="text-[11px] opacity-60 mt-1 not-italic">— 实验作为 verifier</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"We're not automation maximalists. We are actually sort of like token generation maximalists and flexibility maximalists."
<div class="text-[11px] opacity-60 mt-1 not-italic">— 自动化的目标</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"We cannot relax our standards of scientific rigor because it's AI"
<div class="text-[11px] opacity-60 mt-1 not-italic">— 科学证据标准</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"The model itself is the thing of value"
<div class="text-[11px] opacity-60 mt-1 not-italic">— 产品重心</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"scientists are still programming in binary."
<div class="text-[11px] opacity-60 mt-1 not-italic">— 科学抽象层</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"the lab of the future should not be made for people to easily walk into it."
<div class="text-[11px] opacity-60 mt-1 not-italic">— Lab as data center</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"you can't have scientific superintelligence if you're just a good test taker."
<div class="text-[11px] opacity-60 mt-1 not-italic">— Open-endedness</div>
</div>

</div>

---
layout: end
---

# 把自然接回训练循环

<div class="mt-8 text-2xl italic text-gray-200">
"tokens and tool calls are all you need."
</div>

<div class="mt-10 text-sm text-gray-300 opacity-80">
前提是：有一个真实世界愿意回答这些调用。
</div>
