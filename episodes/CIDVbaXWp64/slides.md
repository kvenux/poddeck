---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '硅谷看 DeepSeek V4：模型大战、Token Efficiency、算力突围与 AGI 必经之路'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 硅谷看 DeepSeek V4

<div class="text-xl mt-4 opacity-80">模型大战、<strong>Token Efficiency</strong>、算力突围与 <strong>AGI 必经之路</strong></div>

<div class="mt-10 text-sm opacity-60">
硅谷101 · 陈茜 × 肖志斌（ZFLOW AI CEO） × Jenny Xiao（Leonis Capital）
</div>

<div class="mt-2 text-xs opacity-50">
当 Kimi K2.6、GPT-5.5、新一代 TPU 与 Anthropic 融资几乎同时出现，DeepSeek Moment 到底意味着什么？
</div>

---

# 这一期，到底在讲什么

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型大战的"同时发声"

DeepSeek V4 之外 —— Kimi K2.6、OpenAI GPT-5.5、Google 新一代 TPU、Anthropic 融资<strong>"几乎同时出现"</strong>。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Token Efficiency

节目把它称作<strong>"达到 AGI 或更强 agent system 的必备之路或基础条件"</strong>。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### "死亡地带"

DeepSeek 为美国基础模型公司<strong>划出了一条"死亡线"</strong>—— 被开源超越，业务价值就基本为零。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 100 万 token 上下文

V4 的特殊之处不只是"能力"，而是面向 <strong>agentic coding</strong> 与复杂多步任务的长上下文。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 算力突围

V4 被报道<strong>适配昇腾等芯片</strong>—— 中国 AI 与算力生态进一步追赶的信号。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 资本市场视角

Anthropic、OpenAI 今年都将上市 —— 而<strong>公开市场对二者胃口大不相同</strong>。

</div>

</div>

---

# 模型大战的"同时发声"

<div class="text-sm opacity-70 mb-4">几乎同一时间窗口，多个重磅同时落地：</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepSeek V4

> "比其他开源模型好太多了"

工程完成度<strong>"有非常大的惊喜"</strong>，在 Token Efficiency 上<strong>"继续一骑绝尘"</strong>。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Kimi K2.6

国内另一支开源主力，与 DeepSeek 同代发声。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### OpenAI GPT-5.5

闭源旗舰阵营的回应。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Google 新一代 TPU + Anthropic 新融资

算力栈 + 资本 —— 牌桌从模型扩到了基础设施。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
原话："在如此多的声音中，今年的 DeepSeek Moment 对 AI 市场来说，意味着什么呢"
</div>

---

# DeepSeek V4 的"工程惊喜"

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"工程的完成度有非常大的惊喜，在提高 token efficiency（词元效率）上<strong>继续一骑绝尘</strong>。"

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不是单点 benchmark 的胜利

节目把它定位成<strong>"系统竞争"</strong>—— 模型架构、token efficiency、芯片适配、软件栈、商业化、开源生态。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 而是"工程完成度"的全面提升

不是某一个 benchmark 跑分高，而是整个工程链路<strong>都打磨到位</strong>。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：这条"工程的完成度"是节目反复强调的关键词，区别于"参数堆得更大"的旧叙事。
</div>

---

# Token Efficiency：到底在比什么？

<div class="text-sm opacity-70 mb-4">节目里给出的定义直接、并不绕弯：</div>

<div class="mt-2 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"Token efficiency（词元效率）是达到 AGI 或者更强 agent system（智能体系统）的<strong>必备之路或者是基础条件</strong>。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 没有效率

> "没有效率，AGI 就只能是个 demo。"

跑得动一次，跑不起千万次 —— AGI 卡在演示阶段。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 有了效率

> "但是有了效率，AGI 才能成为<strong>真正的产品和基础设施</strong>。"

可以被规模化交付，才有"产品"和"基础设施"可言。

</div>

</div>

---

# 架构层面的"四件套"

<div class="text-sm opacity-70 mb-4">节目里提到 DeepSeek V4 在 Token Efficiency 上踩的四个关键技术：</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 混合注意力机制

主框架 —— 在不同注意力策略间取平衡。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### CSA · 压缩稀疏注意力

把"看哪些 token"做得更省。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### HCA · 重度压缩注意力

更激进的压缩策略。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### mHC · 流形约束超连接 + Muon 优化器

层与层之间的连接结构，以及训练侧的优化器配套。

</div>

</div>

<div class="mt-6 p-4 text-sm border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40 rounded">
<strong>作者概括</strong>：这一组合的特点不是任何单项最激进，而是 <strong>注意力机制 + 连接结构 + 优化器</strong> 同时做，把"每个 token 干多少活"系统性拉高。
</div>

---
layout: two-cols
---

# Demo 与基础设施的分水岭

<div class="text-sm opacity-70 mb-4">为什么节目反复强调 efficiency？</div>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Demo 侧**：跑通即可、单次调用、不计成本

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**产品侧**：千万级调用、毛利要算账、延迟可承诺

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**基础设施侧**：开发者拿来即用、随业务弹性扩展

</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
"没有效率 AGI 就只能是个 demo，但是有了效率 AGI 才能成为真正的产品和基础设施。"
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

# V4 的"特殊之处"：100 万 token

<div class="mt-4 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"DeepSeek V4 的特殊之处不只是模型能力，<strong>而是它支持 100 万 token 上下文</strong>，面向 agentic coding（智能体编程）和复杂多步任务。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 100 万 token 意味着什么

一次性塞下整个仓库级别的代码、文档、对话历史 —— 不再依赖"切片 + RAG"凑出长上下文。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么是 agentic coding

智能体一次任务往往展开几十轮工具调用、读上百个文件 —— 长上下文是<strong>"敢放手让 agent 做事"的前置条件</strong>。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：100 万 token 是"V4 之所以是 V4"的关键差异点，不是数字游戏，是 agent 路线的硬刚需。
</div>

---

# 适配昇腾：算力栈的另一只脚

<div class="mt-4 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"DeepSeek V4 ...... 被媒体报道<strong>已经适配昇腾等芯片</strong>，这被外界视为中国 AI 和算力生态<strong>进一步追赶的重要信号</strong>。"

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型侧

DeepSeek V4 提供"开源 + 高效率"的样本。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 算力侧

适配昇腾 —— 不再只依赖单一栈。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 信号侧

"算力突围"从口号变成有据可循的工程动作。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
节目强调这一点是<strong>"中国 AI 和算力生态进一步追赶的重要信号"</strong>—— 即"模型与算力"是同一场战争。
</div>

---
layout: two-cols
---

# 英伟达短期为什么不会被取代

<div class="mt-2 p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"短期看，<strong>英伟达并不会被取代</strong>，因为英伟达的优势并不仅仅是一个 GPU。"

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**GPU 本身**只是冰山一角

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**软件栈**：CUDA / 编译器 / 算子库

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**生态**：开发者熟悉度 / 训练习惯 / 互联协议

</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
节目把这三者并称 —— "护城河"不是单一的 die，而是它们的乘积。
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

# 但真正的风险，叫"死亡地带"

<div class="mt-4 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"我认为 DeepSeek 带来的最大风险在于，它为美国的基础模型公司<strong>划定了一个'死亡地带'或'死亡线'</strong>。"

</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded">

"如果你是一家基础模型公司，而你被开源公司超越了，<strong>你的业务价值基本上就是零</strong>。"

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：短期看，英伟达不会被取代 —— 但同样的话不适用于"做闭源模型的公司"。开源一旦追平或超越，闭源模型的<strong>商业溢价直接归零</strong>。
</div>

---

# "效率也是智能的一部分"

<div class="mt-4 p-6 text-2xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"我认为这里的教训是 —— <strong>效率也是智能的一部分</strong>。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧认知

"智能"是 benchmark 分数 —— 跑得对就行。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 新认知

"智能"还包含<strong>能不能省着跑、稳定跑、规模化跑</strong>。效率不是工程问题，是定义问题。

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"像 DeepSeek 这样的开源模型，是美国闭源商业模式面临的<strong>最大结构性威胁之一</strong>。"

</div>

---
layout: two-cols
---

# 从 benchmark 到"系统竞争"

<div class="text-sm opacity-70 mb-4">节目原话：</div>

<div class="p-3 text-sm italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"大模型竞争正在从单点 benchmark（基准测试）变成<strong>系统竞争</strong>。"

</div>

<div class="mt-4 space-y-2 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**模型架构** · 注意力机制 / 连接结构 / 优化器

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">

**Token efficiency** · 每个 token 干多少活

</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">

**芯片适配** · 不止 NVIDIA，还有昇腾、TPU

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">

**软件栈** · 编译、推理、调度

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

**商业化** · 谁能 mass 交付

</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

**开源生态** · 开发者的"默认选项"

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

# 两条路径，未必是两种命运

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 硅谷过去最强的路径

> "<strong>更多 GPU、更大模型、更强闭源产品。</strong>"

- 资本密集
- 闭源溢价
- 端到端控制

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 开源代表的另一条路径

> "<strong>更高效率、更低成本、更开放生态</strong>，以及对本土算力栈的适配。"

- 效率优先
- 成本可摊
- 算力栈多样化

</div>

</div>

<div class="mt-6 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

节目原话："这也许不是两种路线"

</div>

<div class="mt-2 text-xs opacity-60">
<strong>作者概括</strong>：节目并没有把两条路径对立 —— 更像是说"系统竞争"里同一个目标，可以用不同的姿势接近。
</div>

---

# 两位嘉宾：技术 × 资本两个视角

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 肖志斌

- **资深芯片架构师**
- **ZFLOW AI 创始人兼 CEO**
- **前华美半导体协会主席**

<div class="mt-3 text-xs opacity-70">
"在技术角度之外，我们也想从整个硅谷的角度，看看 DeepSeek 带来的影响和启示。"
</div>

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Jenny Xiao

- **OpenAI 前研究员**
- 如今从事**风险投资**
- **硅谷 Leonis Capital 合伙人**

<div class="mt-3 text-xs opacity-70">
"我们的对话以全英文进行。"
</div>

</div>

</div>

<div class="mt-6 text-xs opacity-60">
<strong>作者概括</strong>：一位看芯片栈与硅谷半导体生态，一位看模型公司与一级二级市场 —— 两个视角合起来才看得清"系统竞争"。
</div>

---
layout: two-cols
---

# "AGI 必经之路"是什么意思

<div class="mt-2 p-4 text-base italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"<strong>'模型与算力效率'这个关键技术突破点，可能是人类到达 AGI 的必经之路</strong>。"

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**模型效率** · 每个 token 干多少活

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**算力效率** · 每瓦特能跑多少 token

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**= AGI 的"基础条件"**

不是充分条件，是<strong>"绕不开"</strong>的条件

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

# Anthropic 与 OpenAI 的 IPO

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"我认为 <strong>Anthropic 和 OpenAI 今年将上市</strong>。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Anthropic 这边

> "公开市场对于 Anthropic 的<strong>胃口比对 OpenAI 的大得多</strong>。"

二级市场更愿意接 Anthropic 的故事。

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### OpenAI 这边

> "很多机构在试图<strong>在 IPO 前抛售 OpenAI</strong>。"

一级市场已经在重新调仓位。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
<strong>作者概括</strong>：同样是上市，资本市场对两家的预期差异本身就说明：模型公司的<strong>"业务价值"逻辑正在被重新定价</strong>。
</div>

---
layout: two-cols
---

# Agentic 时代，谁会赢？

<div class="text-sm opacity-70 mb-4">节目原话给出了一个直接答案：</div>

<div class="p-4 text-base italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded">

"随着 AI 的发展步入 Agentic 时代，未来的模型赢家可能<strong>不只取决于谁的模型最聪明</strong>。"

</div>

<div class="mt-4 p-4 text-base italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"而取决于<strong>谁能用最低成本，最稳定地把智能交付给最多开发者和企业</strong>。"

</div>

<div class="mt-4 text-xs opacity-60 italic">
聪明 ≠ 赢。赢家定义是"<strong>能交付</strong>"。
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

# 把这一期的逻辑串起来

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① DeepSeek V4 不是单点跑分

而是"<strong>工程完成度</strong>"与"<strong>Token Efficiency</strong>"上一骑绝尘 —— 把"高效"做到了产品级。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ② 效率不是工程问题

而是"<strong>效率也是智能的一部分</strong>"—— 智能的定义被重写。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ③ 系统竞争代替 benchmark 竞争

模型架构、token 效率、芯片适配、软件栈、商业化、开源生态<strong>同时较量</strong>。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ④ 闭源溢价被"死亡地带"压缩

被开源追平，闭源的"<strong>业务价值基本上就是零</strong>"。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ⑤ Agentic 时代的赢家定义

不是最聪明，而是<strong>最低成本最稳定交付</strong>智能的那家。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ⑥ 必经之路

"模型与算力效率"<strong>可能是到达 AGI 的必经之路</strong>。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期节目里最值得记住的几句（全部为节目原话）：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"在提高 token efficiency 上继续<strong>一骑绝尘</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— 评 DeepSeek V4 的工程惊喜</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"没有效率，AGI 就只能是个 demo；但是有了效率，AGI 才能成为<strong>真正的产品和基础设施</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— Token Efficiency 的意义</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic">
"如果你是一家基础模型公司而你被开源公司超越了，<strong>你的业务价值基本上就是零</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— DeepSeek 划出的"死亡地带"</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"<strong>效率也是智能的一部分。</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">— 重新定义"智能"</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"公开市场对于 Anthropic 的<strong>胃口比对 OpenAI 的大得多</strong>；很多机构在试图<strong>在 IPO 前抛售 OpenAI</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— 资本市场视角</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"谁能用最低成本最稳定地<strong>把智能交付给最多开发者和企业</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— Agentic 时代的赢家定义</div>
</div>

</div>

---
layout: end
---

# "模型与算力效率，可能是人类到达 AGI 的必经之路。"

<div class="mt-4 text-sm opacity-60">
硅谷101 · DeepSeek V4 视频播客
</div>
