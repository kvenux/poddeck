---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Jensen Huang: NVIDIA — The $4 Trillion Company & the Future of AI'
info: |
  Lex Fridman · Jensen Huang
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Jensen Huang
## NVIDIA · The $4 Trillion Company & the Future of AI

<div class="text-sm opacity-70 mt-6">Lex Fridman Podcast · 长对谈</div>

<div class="mt-10 text-xs opacity-60">
黄仁勋谈 extreme co-design、四条 scaling law、agentic 时代、<br>
供应链、TSMC、中国、护城河、工作的未来、以及"how hard could it be?"
</div>

---

# 为什么这期特别

<div class="text-sm opacity-60 mb-4">一次难得把 Jensen 的"推理链路"完整展开的长谈。</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs font-bold text-blue-900">co-design</div>
<div class="text-xs mt-1 opacity-70">从 chip 到 rack 到整个数据中心，NVIDIA 怎么把 7 种芯片 / 1.3M 零件拧成一个"factory"</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs font-bold text-green-900">四条 scaling law</div>
<div class="text-xs mt-1 opacity-70">pre-train / post-train / test-time / agentic —— 它们串成一个闭环</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs font-bold text-orange-900">agentic 时代</div>
<div class="text-xs mt-1 opacity-70">Jensen 称 Open Claw 为 "the iPhone of tokens"</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs font-bold text-red-900">存在主义时刻</div>
<div class="text-xs mt-1 opacity-70">CUDA on GeForce 的赌博 —— 市值一度掉到 ~$1.5B</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs font-bold text-purple-900">warehouse → factory</div>
<div class="text-xs mt-1 opacity-70">计算机从"存储文件"变成"生成 token"，单位经济学彻底翻转</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs font-bold text-yellow-900">工作与 AI</div>
<div class="text-xs mt-1 opacity-70">intelligence 是 commodity；工作的 purpose ≠ tasks</div>
</div>

</div>

---
layout: two-cols
---

# Extreme co-design · 它指什么

Jensen 的定义：不止是芯片，而是整条栈的**同时优化**。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500">
问题已经装不进一台机器 —— 你要让 10,000 台机器跑出一百万倍的速度
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500">
算法要切分、pipeline 要 shard、data 要 shard、model 要 shard
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500">
CPU / GPU / switch / NVLink / 光互联 / 铜缆 / 供电 / 散热 —— 每层都是瓶颈
</div>

</div>

<div class="mt-4 text-xs opacity-60">
"every technology to bear otherwise we scale up linearly"
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
layout: two-cols
---

# 为什么不得不 co-design

Jensen 直接把这个问题叫 **"Amdahl's law problem"**。

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-sm">
如果 compute 只占总 workload 的 50%，哪怕把 compute 加速到无限快，总加速也只有 2 倍。
</div>

<div class="mt-4 text-sm">
所以 NVIDIA 不能只把 GPU 造得更快 —— 必须同时攻：
</div>

<div class="mt-2 grid grid-cols-2 gap-2 text-xs">
<div class="p-2 bg-gray-50 rounded">networking</div>
<div class="p-2 bg-gray-50 rounded">switching</div>
<div class="p-2 bg-gray-50 rounded">distribution</div>
<div class="p-2 bg-gray-50 rounded">scheduling</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./amdahl.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 60 个直接汇报，不做 one-on-one

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Jensen 说他直接汇报的人大约有 **60 位**，几乎都是工程背景的专家。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
"I don't have one-on-ones with them because it's impossible."
</div>

<div class="mt-4 text-sm opacity-80">
他的做法是反过来的：把问题放到桌面上，所有相关的人都可以听，想插话就插话，听腻了就走。
</div>

</div>

<div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-sm">
"no conversation is ever one person … the company is doing extreme co-design all the time"
</div>

<div class="mt-4 text-xs opacity-60">
组织架构本身就是一次 co-design —— 架构要反映它要生产的东西。NVIDIA 在生产的是一个跨硬件、软件、算法的系统，所以领导层必须是个"会议里什么专家都在"的结构。
</div>

</div>

</div>

---

# CUDA on GeForce · 公司最接近 existential 的一次决定

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 代价

- CUDA 让消费级 GPU 的成本上涨约 **50%**
- 当时 NVIDIA 的毛利率只有 35%
- 赌注被 Jensen 称为"接近 existential threat"
- 市值一度从大约 $8B **跌到 $1.5B**，花了十年才爬回来

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么做

- 一个 computing platform 的核心是 **developer**
- developer 只会来到 **install base 最大**的那个平台
- GeForce 已经一年卖几百万片 —— 是把新架构推到世界上最快的载体
- 教授、学生、实验室里的 gamer 正好就是 CUDA 的种子用户

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">
Jensen 的原话：<strong>"Nvidia is the house that GeForce built"</strong> —— GeForce 把 CUDA 推到了所有人手里。
</div>

---
layout: two-cols
---

# Install base is everything

一个 Jensen 反复强调的信念 —— 架构的优雅不重要，**用户基数**才重要。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500">
他举 <strong>x86</strong> 为反例：被嘲笑了几十年"不够优雅"，但因为 install base 巨大，它定义了今天的计算
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500">
同期"漂亮"的 RISC 架构全都失败了
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500">
所以 CUDA 的策略是：把它塞进每一台 PC，让开发者"撞上"它，而不是等他们主动来
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">
"install base defines an architecture, not everything else is secondary"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./install-base.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Leadership is shaping belief systems

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
Jensen 说他做重大决策的方式<strong>不是</strong>年度 manifesto + layoff + 新 logo 那一套。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
而是平时就在向董事会、管理层、员工、partner 一点点"布设砖块"：每次学到新东西，立刻拿出来讲。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
等到真的宣布"我们 all in deep learning / 买 Mellanox / 押 Open Claw"时，所有人反应都是 —— <strong>"what took you so long?"</strong>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">
<strong>作者概括</strong>：他说 GTC 的真实作用不是产品发布会，而是提前两三年在外部世界 "manifest a future"，等到产品做出来时整个生态已经准备好了。
</div>

</div>

---
layout: two-cols
---

# 四条 scaling law

pre-training 不够了 —— Jensen 说 AI 的 scaling law 其实变成了四条，每一条都消耗算力。

<div class="mt-4 space-y-2 text-xs">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500">
<strong>pre-training</strong>：海量数据 + 大模型 —— 但高质量人类数据有限，未来大量是 synthetic
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500">
<strong>post-training</strong>：模型自己 augment 数据、生成经验，再回来 fine-tune
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500">
<strong>test-time</strong>：推理 / 推理 / 搜索 —— Jensen 说 <em>"inference is thinking"</em>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500">
<strong>agentic</strong>：一个 agent 生成 sub-agents，相当于把 AI 员工数量复制
</div>

</div>

<div class="mt-3 text-xs opacity-60">
这四条最后汇成一个闭环，再把数据反哺回 pre-training。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-loops.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Inference 很简单" —— 对 Jensen 从来都不 make sense

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 bg-red-50 border-l-4 border-red-500">

### 当年的共识

- pre-training 是大系统，很难
- inference 一定是"小芯片就够"的市场
- 谁都能做 inference 芯片，会被 commoditize
- NVIDIA 的路径会被 inference 绕过

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### Jensen 的反推

- pre-training 只是 **memorization + generalization**
- inference 是 thinking、reasoning、planning、search
- 按他的原话：<em>"thinking is hard, thinking is way harder than reading"</em>
- 所以 test-time scaling 一定极度算力密集

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>结果</strong>：test-time scaling 把 inference 从"小芯片"的故事彻底翻了过来，反而成了 NVIDIA 最大的增长曲线。
</div>

---

# 为什么要在硬件里赌一个两年后才出现的 workload

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
<strong>节奏不同步</strong>：模型架构每 6 个月换一次，硬件架构是每 3 年一代 —— 你必须预测 2-3 年后会流行什么。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
<strong>mixture-of-experts 来了</strong>，所以 NVIDIA 上了 NVLink <strong>72</strong> 而不是 NVLink 8 —— 让一整个 4 trillion / 10 trillion 参数的模型像跑在一块 GPU 上一样。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
<strong>Grace Blackwell 机架</strong>：专为 LLM inference 设计。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">
<strong>Vera Rubin 机架</strong>：一年后就变了 —— 加了 storage accelerator、Vera CPU、还有一个叫 Grok(?) 的新机架，整套完全重构，为 <strong>agents</strong> 的 workload 而设计。
</div>

</div>

<div class="mt-3 text-xs opacity-60">
设计时点：在 Claude Code / Codex / Open Claw 火起来之前。按 Jensen 的说法 —— "you just reason about it"。
</div>

---

# Agents = the iPhone of tokens

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

Jensen 把这一波 agentic 应用直接比作 **iPhone 时刻**。

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 italic">
"the iPhone of tokens arrived"
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 italic">
"the fastest growing application in history"
</div>

<div class="mt-3 text-xs opacity-70">
他说他 2 年前在 GTC 上画的 agentic schematic —— 和今天 Open Claw 的架构几乎一模一样。
</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500">

### agent 的组成（reasoning 得出）

- 访问 ground truth → **file system**
- 不知道就查 → **research**
- 想做事就得用工具 → **tool use**
- spawn sub-agents → **teams of AI**

Jensen 的比喻：humanoid 进你家不会把手变成锤子，它会走到微波炉前、读说明书、然后用你已经有的工具。

</div>

</div>

---

# 真正的 blocker 不是算力，是能源

<div class="mt-4 text-sm space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500">
电网被设计成"应付最糟糕的几天" —— 夏天几天、冬天几天、极端天气。<strong>99% 的时间</strong>电网运行在大约 60% 峰值附近，剩下的容量就那样闲置。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
Jensen 的提议不是"多盖电厂"，而是 —— 让 <strong>data center 签一种 gracefully degrade 的合同</strong>：极端时刻可以被 utility 拉到 80%，data center 把 workload 转移或减速，反正用户只会感到 latency 稍长一点。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
这就能直接使用已经存在的 idle power —— "just use their excess, it's just sitting there"。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
Jensen 认为阻碍这件事发生的是 CEO 和 customer 之间的脱节：大家谈合同时都要求"六个 9"的 uptime，而真正的 CEO 可能根本不知道自己被捆死了。
</div>

</div>

---

# Vera Rubin · 一个 pod 里到底装了什么

<div class="mt-4 grid grid-cols-4 gap-3 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-700">7</div>
<div class="text-xs opacity-70">chip types</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-700">40</div>
<div class="text-xs opacity-70">racks per pod</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-2xl font-bold text-orange-700">~20k</div>
<div class="text-xs opacity-70">NVIDIA dies</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-2xl font-bold text-red-700">1100+</div>
<div class="text-xs opacity-70">Rubin GPUs</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl font-bold text-purple-700">60</div>
<div class="text-xs opacity-70">exaflops</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-2xl font-bold text-yellow-700">1.3M</div>
<div class="text-xs opacity-70">parts / rack</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-700">200</div>
<div class="text-xs opacity-70">suppliers</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-700">~200</div>
<div class="text-xs opacity-70">pods / week</div>
</div>

</div>

<div class="mt-4 p-3 bg-gray-50 border-l-4 border-gray-400 text-xs">
NVLink 72 把"supercomputer 集成"这个动作从数据中心搬回了供应链本身 —— 一个 rack 就是 4000 磅的 supercomputer，直接拎上车。
</div>

---

# Jensen 的另一项工作 · manifesting 整条供应链

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
他大约 3 年前去说服几位 <strong>DRAM CEO</strong>：虽然当时 HBM 在数据中心用得很少，但未来会变成 mainstream memory。有几位信了，开始扩建 HBM 产能。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
他还去说服他们把手机上的 <strong>LPDDR5</strong> 适配进数据中心 —— 对方最初的反应是 "cell phone memory for supercomputers?"。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
结果：这些做了几十年生意的 DRAM 公司都拿到了 record years。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">
<strong>作者概括</strong>：Jensen 对 supply chain 的态度和他对员工是一样的 —— 不是下订单，是长期地"重塑他们对未来的信念"，等真正需要的时候他们已经在建了。
</div>

</div>

---

# TSMC · 三十年的生意，没有合同

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

Jensen 说外界最大的误解是以为 TSMC 只有**技术**。技术当然关键，但真正让他们无可替代的是：

<div class="mt-3 space-y-2">
<div class="p-2 bg-blue-50 border-l-4 border-blue-500 text-xs">
在成百上千家客户的波动中，调度 wafer start / stop / 紧急插单
</div>
<div class="p-2 bg-green-50 border-l-4 border-green-500 text-xs">
顶尖技术 + 顶级客户服务 —— 两件事同时做到极致的公司很少
</div>
<div class="p-2 bg-orange-50 border-l-4 border-orange-500 text-xs">
承诺的 wafer 就在承诺的时间到 —— 这件事让他们可以"被放在公司之上"
</div>
</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500">

### 最极端的一句

"Three decades. I don't know how many tens, hundreds of billions of dollars of business we've done through them and **we don't have a contract**."

<div class="mt-3 text-xs opacity-70">
Jensen 说 2013 年 Morris Chang 曾邀请他出任 TSMC 的 CEO —— 他拒绝了，不是因为 offer 不好，而是因为他已经"看到 NVIDIA 会变成什么"。
</div>

</div>

</div>

---
layout: two-cols
---

# 速度的语言 · speed of light

Jensen 说他 30 年前开始用的方法 —— 不是"continuous improvement"。

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 bg-red-50 border-l-4 border-red-500">
× 别人说"今天要 74 天，我们可以做到 72 天"
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500">
✓ 他的反应："把它归零。用 physics 告诉我今天重新做的极限是多少 —— 也许是 <strong>6 天</strong>。"
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500">
然后从 6 到 74 的差距，才是那个值得讨论的 reasoned gap
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500">
他说 Elon 在 Colossus / Memphis 的做法几乎一模一样：minimalism at system scale + 站在问题发生的地方
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./speed-of-light.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 中国 · a builder nation

<div class="mt-4 grid grid-cols-2 gap-6 text-sm">

<div class="p-4 bg-red-50 border-l-4 border-red-500">

### Jensen 给出的"fact"

- "50% of the world's AI researchers are Chinese" —— 大多数人还在中国
- 他们的 tech 产业刚好诞生在 mobile + cloud 时代，天然熟悉现代软件栈
- 不是单一经济体 —— 省市之间 mayors 之间互相竞争，所以 EV / AI / 每种公司都有无数家

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### 文化 → open source

- "family first, friends second, company third"
- 工程师的兄弟、同学都在对手公司 —— 技术本来就 leak，那不如 open source
- 惨烈内卷 → 活下来的都是世界级

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
"it's a builder nation" —— 他的对比是美国的领导层主要是 lawyer，中国的领导层大多数是 engineer。
</div>

---

# NVIDIA 也在大规模 open source ——  这不是慈善

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
<strong>理由一</strong>：要做好 AI 计算公司就得懂模型演化。Jensen 举 Nemotron 3 为例 —— 它是 transformer + SSM 的混合，NVIDIA 自己做基础研究，是为了让 <strong>下一代硬件看得见下一代 workload</strong>。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
<strong>理由二</strong>：如果什么都 proprietary，研究者、学生、小国家、小公司无法真正进入 AI 革命。Open source 是让 AI 扩散到每个行业的必要条件。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
<strong>理由三</strong>：AI 不只是语言。生物、化学、物理、流体 —— 这些 modality 没人兜底就没人做。Jensen 说："我们不造车，但希望每个车厂都能用上最好的 AI；我们不做药，但 Lilly 应该拿到世界上最好的 biology AI"。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">
Neotron 3：120B 参数，权重、训练数据、制作流程 全部开放。Jensen 原话 —— "we open source the data, we open source how we created it"。
</div>

</div>

---

# 真正的护城河

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

### #1 · CUDA install base

Jensen 说这才是 NVIDIA "最核心的一个优势"。

- 不是三个人做出来的 —— 是 **43,000** 员工加几百万 developer 十几年堆出来的
- developer 的逻辑：明天 CUDA 就好 10 倍，只要再等 6 个月
- 他们信 NVIDIA 会"keep CUDA around and maintain it for as long as they shall live"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### #2 · 横向无处不在的 ecosystem

- 每个 cloud：GCP / Azure / AWS / CoreWeave / Nscale
- 每个行业：车、机器人、卫星、radio base station
- edge 在手机信号塔，远端在太空
- 一套架构覆盖所有地方

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">
"if I were a developer today, I would target CUDA first. I would target CUDA most."
</div>

---
layout: two-cols
---

# 计算机从 warehouse 变成 factory

Jensen 的"经济学推导"：computer 的**用途**变了。

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 bg-gray-50 border-l-4 border-gray-400">
过去：计算机是 <strong>warehouse</strong> —— 存 file，用 recommender 去捞
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500">
现在：计算机是 <strong>factory</strong> —— 实时生成 context-aware 的 token
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500">
Jensen 的一句话："<em>warehouses don't make much money. factories directly correlate with a company's revenues</em>"
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500">
所以 AI 数据中心的估值逻辑和老的 storage 中心完全不一样 —— 它生产的东西本身是 revenue-bearing 的商品
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./warehouse-factory.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Token 像 iPhone 一样分层

<div class="mt-4 grid grid-cols-3 gap-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### free tokens
日常问答、娱乐、闲聊 —— 量大、单价极低
<div class="text-xs mt-2 opacity-60">token cost 每年掉一个数量级</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### mid tokens
生产力、coding、agents
<div class="text-xs mt-2 opacity-60">多数企业场景</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### premium tokens
专业场景 —— 科研、医疗、金融
<div class="text-xs mt-2 opacity-60">Jensen：<strong>"$1,000 per million tokens"</strong> 不是 if，只是 when</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Jensen 把 token 和 iPhone 做类比：你愿意为不同级别的 intelligence 付不同的钱 —— 因为不同的 intelligence 对不同的人价值完全不同。
</div>

---

# "Imagination is the hard part"

<div class="mt-4 grid grid-cols-2 gap-6 text-sm">

<div>

Jensen 谈 NVIDIA 未来能不能到 10 万亿市值 / 3 万亿营收时说：

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500">
"there's nothing that I see that says $3 trillion is not possible"
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-xs">
理由：NVIDIA 不是在抢市场份额 —— 它在创造的市场里几乎没有既有玩家可以"分一块"。
</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500">

### 历史对照

- 过去有 CEO 告诉他："fabless 半导体公司理论上不可能超过 10 亿美金"
- 后来又有人说："你们不可能超过 250 亿"
- Jensen 的回答：这些都**不是** first principles reasoning

<div class="mt-3 text-xs italic opacity-70">
"one of the challenges for the world is the imagination of the future"
</div>

</div>

</div>

---

# 放射科的教训 · 工作的"目的"≠ 工作的"任务"

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500">
AI 研究者早就预测过：computer vision 会超越人类，放射科医生会消失。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
CV 确实在 2019-2020 左右就做到了 superhuman —— 每一个 radiology platform 今天都是 AI 驱动的。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
<strong>但是</strong>：放射科医生的数量<strong>增加</strong>了，现在世界上还在短缺 radiologist。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
原因：放射科医生的 <strong>purpose</strong> 是"诊断疾病、帮助病人"，不是"盯屏幕"。AI 让每人能看更多片，医院能收更多病人，于是需要更多医生。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 text-xs italic">
Jensen 的推论："the number of software engineers at NVIDIA is going to grow, not decline" —— 同样的道理。
</div>

</div>

---

# 从 3000 万 coder 到 10 亿 coder

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500">

Jensen 对"coding"重新定义：

它现在不是写某种语言 —— 它是 **specification + optional architecture**。

<div class="mt-3 text-xs">
换句话说：告诉计算机你想要什么、多精确、多 prescriptive —— 这件事变成了 "coding" 的本体。
</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500">

<div class="text-3xl font-bold text-green-700 text-center">30M → 1B</div>
<div class="text-xs text-center opacity-70 mt-1">能 "coding" 的人</div>

<div class="mt-3 text-xs">
"every carpenter in the future will be a coder. except a carpenter with AI is also an architect."
</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">
Jensen 的建议非常直接：<strong>"every college student should graduate and be an expert in AI"</strong>。如果他要在两个新毕业生里选一个，他会选精通 AI 的那个 —— 不管岗位是销售、法务还是会计。
</div>

---

# Intelligence is a commodity

<div class="mt-4 grid grid-cols-2 gap-6 text-sm">

<div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
"intelligence is a commodity"
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 text-xs">
他说他身边 60 个直接汇报，"every single one of them is superhuman to me" —— 受教育程度更高、专业领域更深。
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-xs">
Jensen 的原话是问："what is it about a dishwasher that allows that dishwasher to sit in the middle of superhumans?" —— 他第一份工作就是在 Denny's 洗碗/刷厕所。
</div>

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500">

### Intelligence ≠ humanity

他想传达的意思：社会把 intelligence 当成了单一最高指标，但这个词是**功能性的**。

值得真正被捧高的词是 —— **humanity, character, compassion, generosity**。

<div class="mt-3 text-xs opacity-70">
所以 intelligence 被 commoditize 不该是焦虑的来源，它应该是"解放"—— 让人类专注于 intelligence 之外的事。
</div>

</div>

</div>

---

# "How hard could it be?"

<div class="mt-6 text-center">

<div class="p-6 bg-blue-50 border-l-4 border-blue-500 italic text-xl">
"How hard could it be?"
</div>

<div class="mt-4 text-sm opacity-70 not-italic">
Jensen 说他看任何新事物的第一反应都是这句话 —— 他把它叫作"the mind of a child"。
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-4 bg-green-50 border-l-4 border-green-500">

### 为什么有用

不去 simulate 所有的失败、羞辱、setback，你才有可能**真的开始**。simulate 太多会让你根本不出门。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500">

### 怎么过下去

- 进去时当它很美、很容易
- 进去之后：endurance + grit
- 出问题时一件事：forget it, keep moving
- 把焦虑分解成"可以做什么 / 不可以做什么"，剩下的告诉别人

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">
Jensen 曾说过：如果知道建 NVIDIA 有多难，他不会去做 —— 但他紧接着补了一句，"that's probably true about everything worth doing, right?"
</div>

---

# "Die on the job" · 他的继任计划

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">
Jensen 说他 <strong>不信 succession planning</strong> —— 这不是因为他觉得自己不会死，而是因为"如果你真的担心它，你应该每天都在做一件事：<strong>传授知识</strong>"。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">
他形容自己的每一次会议都是一次"reasoning meeting"：他在人前 out loud 地推理，让团队随时可以截断他任意一个推理 step。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">
"nothing I learn ever sits on my desk longer than a fraction of a second" —— 他学到一点东西就立刻转发给下一个人。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 italic">
"I hope I die on the job, you know, and hopefully I die on the job instantaneously."
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">全部经过 transcript 校对。</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"install base is everything"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 x86 和 CUDA 的长期胜出逻辑</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"thinking is hard, thinking is way harder than reading"
<div class="text-xs opacity-60 mt-1 not-italic">— 反驳"inference 很简单、会被 commoditize"的共识</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"the iPhone of tokens arrived"
<div class="text-xs opacity-60 mt-1 not-italic">— 评价 Open Claw / agentic 时代</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"warehouses don't make much money. factories directly correlate with a company's revenues"
<div class="text-xs opacity-60 mt-1 not-italic">— warehouse → factory 的经济学推导</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"we need things to be as complex as necessary but as simple as possible"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 Vera Rubin pod 的 1.3M 零件</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"it's a builder nation"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈中国科技行业的底层结构</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"intelligence is a commodity"
<div class="text-xs opacity-60 mt-1 not-italic">— 他希望社会重新推崇 humanity, character, compassion</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"how hard could it be?"
<div class="text-xs opacity-60 mt-1 not-italic">— 面对任何大事的第一反应</div>
</div>

</div>

---
layout: end
---

# "How hard could it be?"

<div class="text-sm opacity-60 mt-4">
—— Jensen Huang, on Lex Fridman Podcast
</div>
