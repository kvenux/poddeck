---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How GPT, Claude, and Gemini are actually trained and served – Reiner Pope'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# How GPT, Claude, Gemini<br/>are actually trained and served

<div class="text-2xl mt-6 opacity-80">
A blackboard lecture with <strong>Reiner Pope</strong> (CEO, MatX)
</div>

<div class="text-lg mt-4 opacity-60">
Dwarkesh Podcast · Apr 2026
</div>

<div class="mt-12 p-4 mx-auto max-w-2xl bg-blue-50 border-l-4 border-blue-500 rounded text-left italic">
"It's shocking how much you can deduce about what the labs are doing from a handful of equations, public API prices, and some chalk."
<div class="text-xs opacity-60 mt-2 not-italic">— Dwarkesh, in the episode intro</div>
</div>

---

# 为什么这期值得看

<div class="text-base opacity-70 mb-4">用六张草稿纸推导出整个 frontier LLM 行业的形状</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Roofline 分析
两个常数 + 几个模型参数，就能算出最优 batch size、最优 context length

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Rack 拓扑
为什么 MoE 必须挤进一个 rack？为什么 pipelining "不智"？

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### API 价格倒推
Gemini 涨价点 = KV cache 大小；输入便宜 5× = decode 是 memory-bound

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Chinchilla 100×
为什么 GPT-5 时代模型被"过度训练" 100 倍？三项成本要等

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Memory Wall
50% 的 CapEx 砸在内存上，可 context length 还是卡在 200K

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 加密 ≈ 神经网络
都靠"搅拌"，但目标相反：一个要意义，一个要熵

</div>

</div>

---

# 两个原理：roofline + 两个时间

<div class="mt-4 text-base opacity-70">每次推导都只用这两件事</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. Roofline
取 **memory bandwidth** 和 **compute throughput** 的 max。

```
t ≥ max( t_mem , t_compute )
```

哪边大，就是 bottleneck。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 2. 只看两件事
- **t_weights**: 读全部参数的时间
- **t_kv**: 读 context (KV cache) 的时间

```
t_mem    = N_total/BW + B·L·bytes/BW
t_compute = B·N_active / FLOPs
```

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"We're not perfect here. We can't exactly predict the time, so instead we're going to approximate. We're going to say that the time must be greater than or equal to a certain quantity." — Reiner
</div>

---
layout: two-cols
---

# 单位成本曲线

<div class="text-base mt-2 opacity-70">cost per token = t / B</div>

把上一页的两个时间都除以 B：

- **weight fetch** → 1/B（双曲线，B 小时 cost 爆炸）
- **KV fetch** → 常数（每 token 都要拉自己的 cache）
- **compute** → 常数（B 抵消掉）

cost-per-token 最终被 compute floor 抠住。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"Eventually the compute time ends up driving the cost. So there is a limiting lower bound on cost." — Reiner
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./roofline-cost.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 神奇公式：B ≥ 300 × sparsity

<div class="text-base opacity-70 mb-4">这是整个 inference 经济学的锚点</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 推导

让 weight memory time = compute time：

```
N_total / BW  =  B · N_active / FLOPs
```

整理出 hardware-only 的常数：

```
FLOPs / BW · (bytes/FLOP)  ≈  300
```

(A100 → H100 → B100 几乎不变)

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 结论

```
B ≥ 300 × (N_active / N_total)
       = 300 × sparsity
```

DeepSeek V3：32/256 个专家激活 → sparsity = 8

```
B ≥ 300 × 8 ≈ 2,400
```

实际跑 2–3× 大一点，留余量。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"In DeepSeek I activate 32 out of 256 experts, so this would be 8 for DeepSeek." — Reiner
</div>

---

# DeepSeek V3 具体一点

<div class="text-base opacity-70 mb-4">用真实模型参数填进公式</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Active params
<div class="text-3xl font-bold text-blue-600 my-2">37B</div>
<div class="text-xs opacity-70">每 token 真正算的参数</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Total params
<div class="text-3xl font-bold text-purple-600 my-2">700B</div>
<div class="text-xs opacity-70">放在 HBM 里候着的</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Sparsity
<div class="text-3xl font-bold text-green-600 my-2">8×</div>
<div class="text-xs opacity-70">32 / 256 experts</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Optimal B
<div class="text-3xl font-bold text-orange-600 my-2">~2,400</div>
<div class="text-xs opacity-70">单 forward pass 里的 sequence 数</div>

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**反直觉**：B 只跟 sparsity 走，跟模型大小、跟硬件代际无关。

batch size 是个 model-shape 常数，不是 hardware-scaling 数字。

</div>

---
layout: two-cols
---

# "Trains depart every 20 ms"

把 batch size 翻译成时间：选定 B 之后，**每 20 ms 发一班车**。

- 新请求来了，进下一班车
- 车装不满也准时开
- 车装满了，等下一班

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**最坏情况延迟 = 40 ms**
（最多等 20 ms 上车 + 20 ms 跑完）

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs italic">
"The way to think about this is: when does the train depart, as a model?" — Reiner
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./train-schedule.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么是 20 ms 不是 5 ms 也不是 100 ms

<div class="text-base opacity-70 mb-4">HBM 的"排空时间"</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 单位换算

```
HBM 容量 ÷ HBM 带宽
   = bytes ÷ (bytes/s)
   = seconds
```

**Rubin 代**：288 GB ÷ 20 TB/s ≈ 15 ms

跨多个 HBM 代际，这个数字一直在 **15–20 ms**。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 物理直觉

一次 forward pass 把整张 HBM "读完一遍"。

- 比 20 ms 短 → 读不完 weights，浪费容量
- 比 20 ms 长 → 同一份 weights 读两次，浪费时间

权重是只读的，KV 也几乎只读 → **HBM 几乎全是 reads**

</div>

</div>

<div class="mt-6 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
B ≥ 300 × sparsity，配上 20 ms 的训练发车间隔 → 系统单 rack 大约 <strong>2,000 × 64 ≈ 128,000 tokens/s</strong>
</div>

---

# 一个 rack ≈ Gemini 流量的千分之一

<div class="text-base opacity-70 mb-4">把单位换成 token/s，规模感才出得来</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个 rack
<div class="text-3xl font-bold text-blue-600 my-2">128K t/s</div>
<div class="text-xs opacity-70">2,000 × (1/20ms) × 64</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Gemini 全球
<div class="text-3xl font-bold text-green-600 my-2">100M+ t/s</div>
<div class="text-xs opacity-70">"hundreds of millions"</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 比例
<div class="text-3xl font-bold text-red-600 my-2">1 / 1000</div>
<div class="text-xs opacity-70">单 rack = Gemini 的 0.1%</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">

"Gemini is big. One-thousandth of Gemini is a lot. To actually be competitive at scale, you need to be able to serve at least one-thousandth of Gemini."

<div class="text-xs opacity-60 not-italic mt-2">— Dwarkesh</div>

</div>

---
layout: two-cols
---

# MoE 在 rack 上长什么样

<div class="text-sm mt-2"><strong>expert parallelism</strong>：不同 expert 摊到不同 GPU。</div>

- DeepSeek 256 experts → 一个 Blackwell rack 64 GPUs（取 power-of-2）
- 每 GPU 4 个 expert
- Router 在每个 GPU 上都复制一份

**Traffic pattern = all-to-all**
任意 GPU 可能要把 token 发给任意其它 GPU。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">
NVLink 的 full-mesh 拓扑刚好长得就像 all-to-all。一个 rack 是 MoE 的天然容器。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moe-all-to-all.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Within rack vs. cross rack：8× 的鸿沟

<div class="text-base opacity-70 mb-4">scale-up 跟 scale-out 的本质区别</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Scale-up（NVLink）
- Rack 内部，每 GPU ↔ NVSwitch ↔ 任意 GPU
- 两跳之内任意点对点
- **基准带宽 = 1×**

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Scale-out（数据中心网络）
- Rack ↔ top-of-rack switch ↔ DC switch ↔ rack
- 跳数多，cable 长
- **大约 8× 慢**

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">

**MoE 跨 rack 灾难**：

如果 256 个 expert 摊到 2 个 rack 上，一半 token 想跨 rack → 用慢 8× 的网络 → all-to-all 直接 bottleneck。

**结论**：一个 rack 限定了一层 MoE 能做多大。

</div>

---

# 那为什么 rack 不能更大？

<div class="text-base opacity-70 mb-4">物理在和 Jensen 顶牛</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Scale-up 一直在涨
- **Hopper**: 8 GPUs / tray
- **Blackwell**: 72 GPUs / rack
- **Rubin**: 500+ GPUs / "rack"

Hopper → Blackwell 主要是 tray → rack 的产品决策。
Blackwell → Rubin 才是真的 4× 物理设计升级。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 物理在卡

- **线缆密度**：GPU 翻倍 → 线缆翻倍，弯曲半径有限
- **重量**：金属支撑 vs 自身重量在打架
- **功率 & 冷却**：每代都被推到极限

**作者概括**: rack 不是"再大一点就行"的问题，是工程上六个变量同时被压到极限。

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"Modern racks are pushing all of those to very extreme physical limits." — Reiner
</div>

---

# GPT-4 之后模型为什么"停滞"了 3 年

<div class="text-base opacity-70 mb-4">不是没人想做大，是装不下</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 时间线
- **2023**: GPT-4 发布，传 1T+ 参数
- **2023–2025**: 大家盘旋
- **2025**: Blackwell rack ≈ 10–20 TB
- **2025+**: 5T 级模型开始出现

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 为什么 Gemini 早跑出来
Google 的 TPU 早就有更大的 scale-up domain，所以更大的 sparse 模型早就能装下并 inference 出去。

DeepSeek 的"更细粒度专家"也压低了对 rack 大小的需求。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">

"You finally have a scale-up on the order of 10-20 terabytes, which is enough for a 5T model plus KV cache."

<div class="text-xs opacity-60 not-italic mt-2">— Dwarkesh</div>

</div>

---
layout: two-cols
---

# Pipeline parallelism 长这样

不同 **layer** 放到不同 **rack** 上：
rack 0 → rack 1 → rack 2 → rack 3 → loop。

每个 rack 一直在处理"上一个 batch 留下的中间结果"，pipeline 不停。

**关键发现**：micro-batch 数 = pipeline 阶段数。在 4-rack pipeline 里，至少需要 4 个 micro-batch 才能填满。

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs">
inference 里 micro-batch 是"自由参数"。training 里它和全局 batch 不一样，因为得攒够再做 backward。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pipeline-bubble.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bubble、Bitcoin、还有一个"诚实的"用途

<div class="text-base opacity-70 mb-4">pipeline 的空档要不要利用？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Training 里会出现 bubble
forward 排完之后必须停下来做 backward
→ 几个 rack 闲置 → "pipeline bubble"。

文献里发明各种调度技巧填这个洞：zero-bubble、one-forward-one-backward 之类。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Dwarkesh 段子

> "You can mine Bitcoin in that bubble."

Reiner 回敬：
> "More usefully, you can do the weight gradient step, **but you can also mine Bitcoin**."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**Inference 里没有 bubble**：纯 forward，没必要存中间状态等 backward。Pipeline 对 inference 是 capacity 工具，对 latency 完全中性。

</div>

---

# Ilya: "As we now know, pipelining is not wise"

<div class="text-base opacity-70 mb-4">问题不是 bubble，是 KV cache</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 看起来 pipeline 很美

每多一阶段，per-GPU 的 **weight memory** 摊薄一倍。

理论上 4 阶段 → 权重需求降 4×。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 但 KV 不摊薄

每多一阶段，必须同时跑更多 sequence 才能保持 rack 不闲。

**"那些 sequence 又各自带自己的 KV cache"** → 总量不变。

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"First, we established you can't amortize KV caches across batch size. Now we're saying you also can't shard it across pipeline stages. It sucks from both of those points of view." — Reiner
</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>结论</strong>：inference 不应该用 pipeline。优先把 scale-up domain 撑大、做 expert parallelism。
</div>

---
layout: two-cols
---

# 那 scale-up 到底有什么用

如果 pipeline 已经"解决"了容量问题，为什么还要把 rack 越做越大？

**答案：带宽**。

```
t_weight = N_total / (k · BW_per_GPU)
                       ↑
              k = scale-up size
```

- pipeline 不能并行加载权重（各阶段不同时）
- 一个 scale-up domain 里的 GPU 可以
- **Hopper → Blackwell：分母 ×8**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rack-stack.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Reiner 的总结：哪种并行解决哪个瓶颈

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Expert parallelism
- **解决什么**：sparsity 带来的 compute 分摊
- **要求**：all-to-all 通信
- **拓扑限制**：必须 within scale-up

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Pipeline parallelism
- **解决什么**：weight memory 容量
- **副作用**：KV cache 没法摊
- **拓扑限制**：scale-out 够用

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### Tensor parallelism
- **历史用途**：切开一个大 expert
- **现状**：experts 都很小，**不再划算**

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"It's interesting to me that the best parallelism strategy in practice ends up being one which physically resembles the actual architecture. It's not some galaxy brain thing." — Dwarkesh<br/>
"The cutting matches the model architecture." — Reiner
</div>

---

# Memory Wall

<div class="text-base opacity-70 mb-4">2026 年最贵的不是 compute，是 memory</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Hyperscaler CapEx
<div class="text-3xl font-bold text-red-600 my-2">~$1T</div>
<div class="text-xs opacity-70">高达"hundreds of billions, maybe a trillion"</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 花在 memory 上
<div class="text-3xl font-bold text-orange-600 my-2">50%</div>
<div class="text-xs opacity-70">Dylan Patel 引述</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 手机 / 笔记本
<div class="text-3xl font-bold text-purple-600 my-2">-30%</div>
<div class="text-xs opacity-70">智能手机销量预期跌幅</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">

"Hyperscalers are spending 50% of their CapEx this year on memory. … That's high hundreds of billions, maybe a trillion, and they're spending half of that on memory? That is a huge constraint. **That's why we're not going to get new laptops and phones this year.**"

<div class="text-xs opacity-60 not-italic mt-2">— Dwarkesh, quoting Dylan Patel</div>

</div>

---

# 但同时，Jensen 又"塞了太多"内存？

<div class="text-base opacity-70 mb-4">同一时间两条似乎矛盾的真相</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 视角 A：太少
- Memory 是 hyperscaler 的最大开支项
- 手机/笔记本被挤出 DRAM 供给
- KV cache 是 frontier model 的真正瓶颈

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 视角 B：太多
- 1T 参数模型只需要 ~1 TB
- Blackwell rack 提供 10-20 TB
- 容量过剩，**理论上**可以做更省内存的硬件

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">

**Reiner 给出的解释**：rack 大不是为了**装得下**，是为了**读得快**。

- 把 weight 摊到 64 个 GPU → memory bandwidth × 64
- 这是低 latency 的唯一路径
- "Pipelining totally solves the capacity problem, **but scale-up size helps solve the bandwidth problem**."

</div>

---
layout: two-cols
---

# RL 让模型被"过度训练"100 倍

> heuristic: cost = A + B is minimized when A ≈ B.

把训练 / RL / inference 三项 compute 拉平：

```
6 · N · D_pre  ≈  α · 6 · N · D_rl  ≈  2 · N · D_inf
```

N 全消掉，剩下：

```
D_pre  ≈  D_rl  ≈  D_inf
```

**模型生成的总 token 数 ≈ 预训练 token 数。**

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cost-triangle.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 把数字带进去：100×

<div class="text-base opacity-70 mb-4">用公开线索倒推 GPT-5 量级</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 推 inference token 数
- ~50M token/s/model
- 部署 2 个月 ≈ 5.2 × 10⁶ s
- → **~200 T inference tokens**

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 反推 pre-train
- 等价于 D_pre ≈ 150–200T tokens
- 假设 active params ≈ 100B
- Chinchilla 最优：D ≈ 20 × 100B = **2T tokens**

</div>

</div>

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded text-center">

### 200T / 2T

<div class="text-5xl font-bold text-red-600 my-3">≈ 100×</div>

over-trained relative to Chinchilla

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"This is why you should just approximate everywhere, because there are big error bars on this. But it's kind of empowering to just set A equal to B and figure it out." — Reiner
</div>

---

# 推理时代的奇怪结论

<div class="text-base opacity-70 mb-4">如果 Reiner 的等式成立……</div>

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"So for GPT to be trained optimally, every single user who uses GPT-5, the total amount of tokens that they stream should equal the total amount that has gone into pre-training. And the total amount of tokens that have gone into pre-training is the sum of all human knowledge. **Each model should generate the sum of human knowledge on the output that it gets on the input.**"

<div class="text-xs opacity-60 mt-2 not-italic">— Dwarkesh, working through the implication</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**作者概括**：每发布一代旗舰模型，它在被淘汰之前生成的 token 总量大约 = 人类历史上所有文本。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**修正项**：实际还要打折，因为有 model-family（蒸馏出多个尺寸）+ 失败率（万一不是 frontier 就扔了）。

</div>

</div>

---

# 从 API 价格读架构

<div class="text-base opacity-70 mb-4">价格表泄露太多信息了</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Gemini 3.1 的两档定价

> "Gemini 3.1 is 50% more expensive if you go over 200k tokens than if you're below 200k tokens."

200k 这个折点 = compute time 和 KV-memory time 交叉的位置。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 反推 bytes/token

设 200k 是临界点，用前面的 roofline：

```
bytes/token  =  N_active / (300 · L_ctx)
             ≈  100B / (300 · 200k)
             ≈  1,667 bytes  ≈  2 KB
```

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"It's funny that they would leak so much information through their API pricing."<br/>
"I mean, you are incentivized to price close to your costs because otherwise someone could scoop you." — Reiner
</div>

---

# Output 比 Input 贵 5×

<div class="text-base opacity-70 mb-4">price ratio 直接说明 prefill ≠ decode</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Prefill（input）
- 一次过 N 个 token
- 同样的 weight load 摊到 N 个 token
- **compute-limited**
- cost / token 很低

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Decode（output）
- 每次 forward 只产 1 token
- 必须把全部 weights + KV 都拉一次
- **memory bandwidth-limited**
- cost / token 高 5×

</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded italic">

"The result we want to work towards is that **prefill is compute-limited and decode is memory bandwidth-limited**." — Reiner

</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>含义</strong>：5× 这个数字直接告诉你 decode 离 memory wall 有多近。整个推理经济本质上是被 HBM 带宽勒住的。
</div>

---
layout: two-cols
---

# Cache hit 的折扣 = 存储分层

为什么 cache hit 便宜 10×？

因为 KV 不需要从 token id 重算，而是已经在某个 memory tier 里坐着。

OpenAI 的 5 分钟 vs 1 小时两档：
- **5 分钟** ≈ drain-time of some tier
- **1 小时** ≈ drain-time of slower tier

"Drain time" = 这层 memory 全跑完一遍要多久。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs italic">
"I'm kind of shocked to see spinning disk being used at all, because it's such an old technology." — Reiner, 看到 1 小时档时
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./memory-tiers.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么没人有 1M+ context

<div class="text-base opacity-70 mb-4">两年了，大家都卡在 200K 附近</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Context 历史
- GPT-3 时代：8K
- GPT-4 时代：128K
- 此后 1.5–2 年：**几乎所有 frontier 模型都停在 200K 上下**

不是大家不想做，是**经济上不划算**。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Sparse attention 能救吗？
- DeepSeek 的 sparse attn 在 KV term 里塞了个 √L → 巨大改进
- 但**不是无穷改进**：太 sparse → 漏注意力 → 质量崩

**作者概括**：sparse attention 已经被 priced in 到当前的 200K，再往上还需要新东西。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"It's because there is **no solution to the memory wall here**. Going too sparse just means you're attending to a very small subset of the tokens, and the quality will get worse." — Reiner

</div>

---

# 那 in-context learning 当 AGI 也悬

<div class="text-base opacity-70 mb-4">Dwarkesh 顺手问的一个大问题</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

> "There's this idea that Dario said on the podcast, and others have said, which is, 'We don't need continual learning for AGI, in-context learning is enough.' If you believe that, then you have to think that we have to get to a **hundred-million-token context length** to have an employee that is the equivalent of working with you for a month."
>
> <div class="text-xs opacity-60 mt-2">— Dwarkesh</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Reiner 的反应**：HBM 不会忽然变好。如果 in-context learning 真要替代 continual learning，就需要 100M+ token context，但 memory wall 没有清晰的破解路径。Sparse attention 帮了大忙但远远不够。

→ 这条 AGI 路径上有个**实际工程瓶颈**，不是研究品味问题。

</div>

---
layout: two-cols
---

# 神经网络 ≈ 加密协议？

Reiner 一篇 blog 的核心观察：

两边都在"把信息搅匀"。
- Hash function：让一比特扰动撼动整个输出
- Transformer：让每个 token 都"看"其它所有 token

但**目标完全相反**：
- Crypto: structure → noise
- NN: noise → structure

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nn-vs-crypto.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Avalanche vs. Gradient

<div class="text-base opacity-70 mb-4">同一个机制被两边各自利用</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### NN: gradient 必须有意义

```
small Δinput → small, useful Δoutput
```

residual + LayerNorm 都是为了"让微分有用"。

field = ℝ（连续）

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Crypto: avalanche 必须狂暴

```
small Δinput → huge Δoutput
```

整个 cipher 设计的目标就是**抗微分**。这就是 **differential cryptanalysis** 攻击的反面。

field = GF(2)（binary）

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**Adversarial examples 是两条曲线的交点**：图像分类里"加一点点噪声就完全改类"——正是 cipher 想要的 avalanche 在 NN 上变成了 bug。

</div>

---

# Feistel cipher → RevNets

<div class="text-base opacity-70 mb-4">2017 的一篇 NN 论文从密码学那边搬来的把戏</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Feistel 构造
给定一个不可逆函数 f，用两路输入做成可逆操作：

```
(x, y) → (x,  y + f(x))
```

反向：`y = z − f(x)`，因为 x 直接读出。

是 DES / Twofish 等几十年密码学的基础组件。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### RevNets（2017）
把这个 trick 套到 transformer layer 上 → **整个网络可逆**。

- 训练时不用存中间 activation
- backward pass 时一边算梯度，一边"反演" forward
- 显存大幅压缩

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
RevNets 用 <strong>compute 换 memory</strong>；KV cache 用 <strong>memory 换 compute</strong>。下一页把这类权衡都摆出来。
</div>

---

# 一个统一的画面：memory ↔ compute

<div class="text-base opacity-70 mb-4">所有 LLM 系统设计都在这条边上挪</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 用 compute 省 memory
- RevNets（不存中间 act）
- KV cache rematerialization（cache miss）
- gradient checkpointing

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 用 memory 省 compute
- KV cache（不重算注意力）
- weight cache（不重 load）
- prompt cache hit

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 用 bandwidth 省 latency
- 更大 scale-up domain
- 一个 rack 而不是多个
- 同样的 weight 分到更多 GPU 并行加载

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"Spending more memory to save compute is generally profitable given where hardwares are." — Reiner

→ 在 2026 年的硬件比例下，memory 一直是 cheaper side of the trade.

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">grep-verified · 直接引自 transcript</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"It's shocking how much you can deduce about what the labs are doing from a handful of equations, public API prices, and some chalk."
<div class="text-xs opacity-60 mt-1 not-italic">— Dwarkesh · 整期题眼</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"If you do not batch together many users, the cost and the economics you get can be a thousand times worse than if you do batch many users together."
<div class="text-xs opacity-60 mt-1 not-italic">— Reiner · batching 的杠杆</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Pipelining is a massive hassle, but it does give you some benefits. … We're just moving the memory time from one chip to another chip. There's no actual benefit in runtime."
<div class="text-xs opacity-60 mt-1 not-italic">— Reiner · 解释 Ilya 的话</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Pipelining totally solves the capacity problem, but scale-up size helps solve the bandwidth problem."
<div class="text-xs opacity-60 mt-1 not-italic">— Reiner · 一句话区分两种 parallelism</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"Billions of dollars worth of compute just flowed in the other direction."
<div class="text-xs opacity-60 mt-1 not-italic">— Dwarkesh · 中途修了一个算错的因子</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"It's kind of empowering to just set A equal to B and figure it out."
<div class="text-xs opacity-60 mt-1 not-italic">— Reiner · 整集方法论</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"You are incentivized to price close to your costs because otherwise someone could scoop you."
<div class="text-xs opacity-60 mt-1 not-italic">— Reiner · API 价格泄露架构</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"There is no solution to the memory wall here."
<div class="text-xs opacity-60 mt-1 not-italic">— Reiner · 为什么 1M context 还没出现</div>
</div>

</div>

---
layout: end
---

# "Set A = B and figure it out."

<div class="mt-8 text-lg opacity-70">

Reiner Pope · MatX CEO · ex-Google TPU

</div>

<div class="mt-12 text-sm opacity-50">

Dwarkesh Podcast · "How GPT, Claude, and Gemini are actually trained and served"

</div>
