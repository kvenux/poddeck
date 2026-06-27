---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Why AI Labs With Unlimited GPUs Still Fail — Anjney Midha, AMP'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 为什么很多 AI Lab<br/>有用不完的算力<br/>却仍然出不了产品

<div class="mt-8 text-xl opacity-70">Anjney Midha · Amp 创始人兼 CEO</div>

<div class="mt-6 text-sm opacity-60">Latent Space @ Periodic Labs</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 算力浪费的根因
不是算法、不是预算，而是 **alignment** 与 **culture**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Amp 的"电网"模型
ISO（独立系统运营商）思路，pooling + 调度，不持有资产

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Anthropic 为什么"起飞"
"luck favors a prepared mind"——4 年极致准备的复利

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Culture 是花园不是护城河
来自 A16Z 厕所外那句 Bushido 名言

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Net-positive 数据中心
$4 → $4.50/小时，把多出的钱给社区

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个被低估的赛道
End-of-life prediction，占美国医保 30%

</div>

</div>

---

# 开场诊断

<div class="mt-4 text-base opacity-70">嘉宾的开场白，几乎是整集的论题：</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30">

"there are so many AI labs today that have all the cash they need.<br/>
They have all the compute they need and they're still not able to ship anything"

</div>

<div class="mt-6 p-6 text-lg border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"my diagnosis it's the culture. If you stop taking the actions that demonstrate the mission alignment to what you've said to your team and to the world matters to you, then your culture starts to fray."

</div>

<div class="mt-4 text-sm opacity-60">Anjney Midha · 开场白</div>

---

# 第一组数字：集群利用率的"行业标准"

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Node 利用率（Google 标准）
<div class="text-4xl font-bold text-red-600 my-2">95%</div>
<div class="text-xs opacity-70">"95% at Google is considered an outage"</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Node 利用率（应该是的标杆）
<div class="text-4xl font-bold text-orange-600 my-2">96%</div>
<div class="text-xs opacity-70">"96% should be standard"</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### MFU（best in class）
<div class="text-4xl font-bold text-green-600 my-2">60-70%</div>
<div class="text-xs opacity-70">现今 best in class 的区间</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>关键判断</strong>：大多数"single-down"集群都到不了这个数字。原因不是技术能力，而是**资本方→集群部署方→产出衡量方**之间的人链路太长，alignment 出问题。

</div>

---
layout: two-cols
---

# Radian 比喻：起点偏一点，<br/>规模化后就崩

**作者的核心隐喻**：两条线在原点偏几度，<br/>到远端就拉开成完全不同的轨迹。

<div class="mt-6 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

**问题不是初始的"想做好"<br/>消失了**，团队最初都北极星明确

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">

被要求**快速 scale 而不是<br/>iterative bring-up**

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500">

于是"the wastage just<br/>compounds really fast at scale"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./radian-arcs.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 半导体行业的常识，AI 不该绕开

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### ❌ "AI 例外论"
"AI scaling 是新的、所以可以抛弃 common sense"<br/><br/>
盲目 scaling、不做 iterative bring-up、Zuck 时代<br/>
*"move fast, break things"*

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### ✅ Iterative bring-up
DSA / 半导体行业沉淀几十年的纪律<br/><br/>
**margin of error is lower, cost of wastage is higher**<br/>
AI 反而应该 put a premium on common sense

</div>

</div>

<div class="mt-6 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"Move fast with responsible infrastructure"

</div>

<div class="mt-2 text-sm opacity-60">
Anjney 重写 Zuckerberg 的口号——从 "move fast, break things" → "move faster, stable infrastructure" → 现阶段应是 <strong>responsible infrastructure</strong>
</div>

---

# 反面教材：Neo-cloud 的营销话术

<div class="mt-4 text-base opacity-70">嘉宾对所谓 "Neo-cloud" 这个新品类相当不客气：</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### Neo-clouds = marketing speak
"this whole idea of neo clouds being somehow this new category is a lot of marketing speak"<br/><br/>
判别"真功夫 vs 营销话术"，Anjney 列了三道反问——以下都不是好信号：

- sponsoring happy hours at NeurIPS
- "legibly bitter-lesson built"
- hanging out at "situationally aware" parties

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Amp 实际在合作的对象
"really good, reliable, trusted data center providers in America who've been around 20+ years"<br/><br/>
对上面三道反问的回答全是 <strong>No</strong>，但——

- <strong>"They're adults. I trust them."</strong>
- "They can run land. They can run power."
- 经历过互联网 boom & bust 周期

</div>

</div>

<div class="mt-6 text-sm opacity-60">
Procurement 的判断标准从来不是"懂不懂 AI"，是"能不能 run 一个稳定的 utility"。
</div>

---
layout: two-cols
---

# Amp 不是 Neo-cloud<br/>是 ISO（独立系统运营商）

类比来自美国东北部的电网 **PJM Interconnection**。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

**Pooling + 调度**：拉来一堆数据中心 supply

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">

**长期 anchor 客户**：互不重叠的 demand 形态

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">

**最关键**：ISO 自己**不持有资产**——历史上最持久的电网都是这样

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>嘉宾原话</strong>："Neo-clouds are suppliers... they are demand sort of off-takers of the grid. We see ourselves as what's called an independent system operator."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./amp-grid.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 电网历史：steel factory + shoe mill

<div class="mt-4 text-base opacity-70">为什么 ISO 模型 work？嘉宾给的类比来自电网早期的工业小镇：</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 工厂自建发电
每家工厂"半台发电机在后院 running at half capacity"——浪费严重。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Pooling 起来
**钢厂晚上 spike、鞋厂白天 spike**——错峰 demand 拼成连续负载。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 中立的协调者
独立的 ISO 协调发电、传输、工厂——这是 PJM Interconnection 的起点。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>类比到 AI 算力</strong>：研究 lab 之间 demand 形态不同（pre-training spike 长、推理 baseline 稳），如果有个中立的 ISO 把 supply pool 起来，每家都能拿到 base load + 弹性 spike。

</div>

---
layout: two-cols
---

# Amp 的具体数字

<div class="mt-4 space-y-3 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 当前 supply
**1.3 GW** over 4 years<br/>
≈ "$40 billion of cloud spend"<br/>
（"to be clear, we haven't secured all of it"）

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Steady state 设想
**1.3 GW base load** + <br/>
**~6 GW spike capacity** over 4 yrs

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 最近 6 周的现状
"we thought we'd have a bunch of<br/>
excess capacity by the end of this year.<br/>
**It's all gone**."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./base-spike.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Interruptible demand：从 Google Borg 学到的调度

<div class="mt-4 text-base opacity-70">3-4 年前 Google 在 infra 空间推出的关键创新：</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 机制
- 团队拿"credits"竞价 GPU 时间
- 高优先级 job 可以**抢占**低优先级 job
- 大家 base load 保证、spike 走 dynamic priority

</div>

<div class="p-5 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### Amp 在做的
- Scheduling layer 起步（Sab + Mihai 在 Google 做过 Borg/GQM）
- 经济层做长期 ISO
- 走向 open protocol：**any compute, any silicon**

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>有趣的副作用</strong>：嘉宾原话"this is a thing that has been tried internally within Google and **it led to Google missing GPT**"——credit/拍卖式调度让团队竞争，central command（要 All-in 一件事）就难做。

</div>

---

# Net-positive 数据中心：Scott Nolan 的 \$0.50 想法

<div class="mt-4 text-base opacity-70">在 Stanford CS183 课上，General Matter 创始人 Scott Nolan 提的：</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 当前 marginal 单价
<div class="text-4xl font-bold text-blue-600 my-2">$4 / hr</div>
<div class="text-xs opacity-70">每小时 compute 边际成本</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 上调后
<div class="text-4xl font-bold text-orange-600 my-2">$4.50 / hr</div>
<div class="text-xs opacity-70">客户每小时多付 50 cents</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 多出的 $0.50
<div class="text-4xl font-bold text-green-600 my-2">→ 社区</div>
<div class="text-xs opacity-70">直接现金返还给数据中心所在地</div>

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm italic">

"I can tell you as a customer of that compute, I would love that. I'd be happy to pay an additional 50 cents per hour. ... if that means the public benefit is so clear to the communities that the data centers are coming up in, I'm going to feel like that compute is much more reliable."

</div>

---

# 为什么这个 \$0.50 想法很关键

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 数字：今年 ≈20% 的美国新数据中心
"up to 20% of all data centers this year in in the US, my understanding is are at risk."<br/><br/>
**风险**：拿不到社区支持，建不起来。<br/>
（嘉宾自己也补充：这数字可能 overstated）

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 社区真正在意的不止是岗位
"they don't just care about jobs. They care about all the other stuff around it, right? Like they care about power grid, they care about environment, permitting and so on."

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>监管的暗影</strong>："There will be audits. There will be investigations. And when the regulators come, I don't know when it's going to be. The folks who are moving fast and breaking things in the name of AI progress better be prepared."

</div>

---

# 第二条主线：DeepMind 的 embargo 困局

<div class="mt-4 text-base opacity-70">嘉宾对 DeepMind / GDM 的不满是这集最锋利的部分之一：</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### 6-month embargo
"the paper is actually not even being published anymore cuz there's a six-month embargo inside of DeepMind ... if anybody on the business team says this could be interesting, it's embargoed for life."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 逆向选择
"the stuff that gets published is the stuff that's not good enough. So there's an adverse selection problem."<br/><br/>
NeurIPS 上的吐槽："well, why would I look at the papers that are the trash of GDM?"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>嘉宾的诊断</strong>："research being hoarded ... there's negative externalities ... there's a market failure. And somebody needs to unlock that research."

</div>

<div class="mt-3 text-xs opacity-60">
这是 Amp 旗下 Foundry 资本业务想解决的问题之一——从 DeepMind 这类大组织里"长出来"的研究员独立出去，Amp 提供资金 + 算力 + 团队。
</div>

---

# Foundry：Amp 的资本业务

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 text-sm">

### 结构（自比 Alphabet）
"we structured ourselves essentially very similarly to Google"<br/><br/>
- **Amp Holdings** = Alphabet Holdings
- **Infrastructure business** = ISO grid
- **Foundry** = 孵化 + 投资新 frontier labs

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30 text-sm">

### 公开的几笔
- 投了 Periodic Labs（这次录音地）
- "we put a few hundred million dollars into Anthropic from our fund earlier this year"
- 嘉宾长期帮 Anthropic、Mistral、Black Forest Labs、Arena 等团队

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>逻辑闭环</strong>：Foundry 投出的 lab → 在 Amp Grid 上拿 base load → 拉动 supply 端的长期合约 → 给 ISO 提供稳定流动性。这就是嘉宾说的"two-way protocol"。

</div>

---

# 一个"非典型"个人副线：End-of-life prediction

<div class="mt-4 text-base opacity-70">嘉宾说这是他"want to die on"的山头之一（笑称"I'd actually prefer not to die"）：</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Medicare 占比
<div class="text-4xl font-bold text-red-600 my-2">~30%</div>
<div class="text-xs opacity-70">美国 Medicare/Medicaid 花在 end-of-life care</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Stanford 病历数据集
<div class="text-4xl font-bold text-blue-600 my-2">12M+</div>
<div class="text-xs opacity-70">stride 数据集患者数（仅次于 VA）</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 嘉宾追了多少年
<div class="text-4xl font-bold text-orange-600 my-2">14 yr</div>
<div class="text-xs opacity-70">"haven't been able to get it out of my mind a single day"</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

技术不是瓶颈——"once you get the data set, like RL works. Honestly, even regression models work."<br/>
真正的瓶颈是**监管**：医生不敢把 clinical liability 转嫁给 AI 系统。

</div>

---

# 文化对比：死亡观与医疗系统

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 text-sm">

### 印度 / 佛教视角
"death is one step in a journey of many lives"<br/><br/>
嘉宾家乡 Chennai 的葬礼是"街上跳舞、有鼓点、家人庆祝"——逝者**从这一世的责任中解脱**，去下一段旅程。

</div>

<div class="p-5 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-sm">

### 美国 / 基督教视角
"frames death as this terminal point"<br/><br/>
医疗系统就从 <strong>"必须延后死亡"</strong> 这个文化默认出发，所有 incentive 朝向 prolong。患者末期常常被困在医院里。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>系统效应</strong>：医生因 medical malpractice 顾虑 → 不给清晰预后 → 患者"let's try it all" → 30% Medicare 烧在 end-of-life → 患者 quality of life 反而下降。<br/>
<strong>解药</strong>：AI 给出比人类更精确的预后区间，**empower 患者自己决定**怎么过最后这段。

</div>

---

# Output-maxing：嘉宾的"统一场论"

<div class="mt-4 text-base opacity-70">主持人追问"你做的所有事有没有一个总主题"，嘉宾的回答：</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

"from an engineering perspective it's basically <strong>output maxing</strong>. ... the department of output maxing."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 浪费什么都不行
"wasting GPUs, wasting human, and Medicare"——主持人替他总结。<br/>
所以"anti-waste"是这门学科的形容词。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 学术化的版本
"if I was starting a new department at Stanford ... I'd probably call it the **Department of Alignment**."<br/>
不是 AI safety 那个 alignment——是 LP / 创始人 / 公众的 full-stack alignment。

</div>

</div>

---
layout: two-cols
---

# 标准化：Matrox 选 Nvidia<br/>reference architecture

Reiner Pope（Matrox CEO）拜访嘉宾时的洞察：

<div class="mt-6 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

新芯片公司 **"can't fight on every front"**

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500">

直接用 Nvidia 公开的 reference architecture——**"the same footprint as an Nvidia rack"**

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500">

把全部创新预算砸在 **systems co-design** 上（logic die），数据中心层抄作业

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">

**Jensen 已经做完了所有 hard work**——开放标准让 Matrox 这种公司有空间存在

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
layout: two-cols
---

# 但独立芯片公司有个新瓶颈

**Trust boundary**：在 Google 内部时，<br/>
co-design 团队就坐在 Gemini / PaLM 团队旁边——<br/>
loop 极紧。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500">

独立创业后，你处于 <strong>"outside the trust boundary"</strong>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">

Tape-out 要 **2 年**——等芯片做出来，模型架构早变了

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

Amp 的"foundry play"：让独立芯片团队**进 Amp 系的 lab trust 圈**

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./trust-boundary.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 研究员→CEO 这件事，VC 普遍看错

<div class="mt-4 text-base opacity-70">主持人问"为什么 Anastasios（LM Arena）能当 CEO？他不是 researcher 吗"，嘉宾这段直接开火：</div>

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"venture capitalists suck at seeing human beings as dynamic agents. ... They want to put you in a box."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 反例榜单
- **Dario Amiodei** — scientist → trillion-dollar 公司路上
- **Anastasios Angelopoulos** — LM Arena 上百万用户
- **Robin Rombach** — Stable Diffusion → Black Forest Labs
- **Guillaume Lample** — Llama → Mistral

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 嘉宾的判断
"Being a CEO, nominally speaking, is not that hard. Being a good CEO is hard. Being a great CEO actually requires a level of performance that scientists who have already published at the top of their field have accomplished."

</div>

</div>

---

# "Athletes of the mind"

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"To publish in academia over the last 20, 30 years, to make it to the top of your discipline at a place like Berkeley, <strong>you were a star athlete. Like you are an athlete of the mind.</strong> And you perform at the highest levels."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 嘉宾的 default
"I would just fund researchers all day"——已经在领域里 put soda out 的 researcher，他们已经是 star athletes。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 真正的失败模式
不是"researcher 不会管理"——**而是他们不想当 CEO**："they primarily want to publish"。<br/>
这种就让他们安心 publish。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">

要当 great CEO 的代价：**"willing to be confrontational up and down the stack"**——对自己团队、对招聘、对客户、几乎对所有人。

</div>

---

# Anthropic 起飞 ≠ 运气好

<div class="mt-4 text-base opacity-70">主持人问"Anthropic 怎么把 coding 这件事做对的？是 lucky dice roll 然后 compound 吗？"</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"<strong>Luck favors a prepared mind.</strong> ... Anthropic has been the most prepared company for 4 years. And so then when the right context data comes in, the right developers start sending in the right context diffs, sure, you could say you got lucky, but if you ask me, they're pretty damn prepared with paranoia for 4 years."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### "起飞"时间点
"Anthropic basically achieved takeoff in **October of last year**. That training run..."<br/>
（社区内部知道的事，外界从 12 月 release 后才感受到。）

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Burn 效率
"There's numbers on their burn compared to OpenAI ... they are so much more efficient. <strong>Not even close.</strong>"

</div>

</div>

---

# Anthropic 的 P0 是 coding，从 day one

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"their P0 from day one was coding. The reason mechanism system there was: if we crack coding, then we will crack AGI. ... our mission is AGI. We want to get there safely. If we focus on coding, it's such a generally powerful capability that it can accelerate all kinds of work on a computer."

</div>

<div class="mt-6 grid grid-cols-3 gap-4 text-sm text-center">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 代价
对其他方向说 No——超长 list

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 选择标准
"the only thing when you have scarce resources you got to invest in"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 结果
P0 锁死 → mission 定义一切 → 文化收紧

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>对照 Periodic Labs</strong>："superconductivity is the mission. Coding is not the mission. So we use Claude. We'll use Claude. We don't care about that."

</div>

---
layout: two-cols
---

# Culture：不是 set of beliefs，<br/>是 set of actions

A16Z 内部那条嘉宾天天经过的厕所外标语：

<div class="mt-6 p-5 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

"<strong>Culture is not a set of beliefs.<br/>It's a set of actions.</strong>"

</div>

<div class="mt-3 text-sm opacity-70">
（嘉宾说出处是 "Bushido is a Japanese philosopher" —— 实际 Bushido 是武士道的统称，不是个人名字，但嘉宾原话如此。）
</div>

<div class="mt-6 space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500">

Culture 是**很脆的**——需要每天 tend，像花园

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

最难的是早期：**没有 hardship、没共渡难关，culture 就定义不锐**

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./culture-garden.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 太多钱、太早、太快 ≠ 好事

<div class="mt-4 text-base opacity-70">嘉宾对当前 AI 融资环境最大的担心：</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30 text-sm">

### 现在的问题
"so much money going to these labs, **there's no hardship**. There's no 21 nos."<br/><br/>
没人对你说不、没人逼你定义 P0、没人逼你定义 hill to die on——culture 没机会被淬炼。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30 text-sm">

### Anthropic 的反例
"the number of people who said no, the number of people who said 'sorry, we're already investors in OpenAI'—<strong>that is competitive defense</strong>. It forces you to really understand like what is the hill you want to die on at the expense of everything else."

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<strong>"21 nos"</strong> 是嘉宾用的口语——指 Anthropic 早期被很多 VC 拒掉。原话："there's no 21 nos. And that in hindsight was a **feature not a bug** for Anthropic."

</div>

---

# 关于 "winning" 这个词

<div class="mt-4 text-base opacity-70">主持人提到 Jensen 在 Dwarkesh 那期说的 "I didn't wake up with a loser mindset"，嘉宾接：</div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

"This idea of winning is so weird to me. ... I think you want to <strong>lead</strong>. ... You want to push the frontier. You want to push the state of the art. You want to do something that hasn't been done before. You want to capture value. But you don't want to capture so much value that people think you're not aligned with your mission."

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

<strong>关于 Jensen vs Dwarkesh 那期</strong>：嘉宾观察到他俩其实在说同一件事但 mental model 错位——Jensen 是 "5-layer cake" 抽象、Dwarkesh 是 "pre/mid/post-training systems loop"。这就是嘉宾整集反复强调的：**"so much of the problem in the world is reasoning by analogy ... and the assumptions that are held invisibly."**

</div>

---

# First principles 时代的小奖励

<div class="mt-4 text-base opacity-70">这一段是嘉宾对当前时刻最乐观的判断：</div>

<div class="mt-6 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30">

"this is actually the best time in human history for first principle thinkers because everything you think will happen is actually now coming true."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Heuristic vs Axiom
"it's very important to see the distinction between a heuristic and an axiom. An axiom can be proven from internal consistency. A heuristic is a shortcut."<br/><br/>
VC 圈最大的毛病：把 heuristic 当 axiom 来评判公司。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Real-time action prediction
嘉宾跟一个陌生人对话被问"what do you think about real-time action prediction models?"——而不是问"world models"——立刻判断对方"done the work"。<br/><br/>
**精确表述 = 信号**。

</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得带走的几句——全部对回了 transcript：</div>

<div class="grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"so many AI labs today that have all the cash they need ... and they're still not able to ship anything"
<div class="text-xs opacity-60 mt-1 not-italic">— 开场诊断</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"AI scaling should be putting a premium on the value of common sense ... margin of error is so much lower and the cost of wastage are so much higher."
<div class="text-xs opacity-60 mt-1 not-italic">— iterative bring-up</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"They're adults. I trust them. They can run land. They can run power."
<div class="text-xs opacity-60 mt-1 not-italic">— 传统 datacenter 提供商</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"Neo-clouds are suppliers ... we see ourselves as an independent system operator."
<div class="text-xs opacity-60 mt-1 not-italic">— Amp 的 ISO 定位</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Luck favors a prepared mind. ... Anthropic has been the most prepared company for 4 years."
<div class="text-xs opacity-60 mt-1 not-italic">— 解释 Anthropic 起飞</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Culture is not a set of beliefs. It's a set of actions."
<div class="text-xs opacity-60 mt-1 not-italic">— A16Z 厕所外的标语</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"there's no 21 nos. And that in hindsight was a feature not a bug for Anthropic."
<div class="text-xs opacity-60 mt-1 not-italic">— 钱太多反而毁文化</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"this is actually the best time in human history for first principle thinkers"
<div class="text-xs opacity-60 mt-1 not-italic">— 收尾乐观</div>
</div>

</div>

---
layout: end
---

# Output-max everything.

<div class="mt-8 text-lg opacity-70 italic">

"venture capitalists suck at seeing human beings as dynamic agents."

</div>

<div class="mt-2 text-sm opacity-50">
— Anjney Midha · Amp · Latent Space @ Periodic Labs
</div>
