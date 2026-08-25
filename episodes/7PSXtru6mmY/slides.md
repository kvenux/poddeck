---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Next 100x in AI: Inference, Networking, & Self-Optimizing Models — Philip Kiely & Ali Taha, Baseten'
info: |
  Philip Kiely 与 Ali Taha 从一次长上下文请求出发，拆解缓存路由、
  prefill/decode 解耦、投机解码、量化、并行与网络，并讨论视频推理、
  训练—推理闭环与模型优化自身推理系统的早期实践。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Next 100x in AI

<div class="text-xl opacity-80 mt-3">Inference · Networking · Self-Optimizing Models</div>

<div class="mt-8 text-lg">Philip Kiely & Ali Taha · Baseten</div>

<div class="mt-3 text-sm opacity-60">Latent Space · 1h 43m · 2026-08</div>

<div class="mt-10 inline-block px-5 py-2 rounded-full bg-purple-50 border border-purple-200 text-sm">
从一条请求，走到整个推理系统
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 请求不是一次 forward pass
路由、缓存命中、prefill、KV 传输、decode 与流式输出共同决定体验。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 速度来自优化叠加
量化、投机解码、PD 解耦、运行时和硬件共同累乘，不是单点魔法。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 质量是硬约束
更快必须尽量保持原始模型的行为；量化是最主要的有损步骤。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 网络正在进入中心
KV cache 跨节点搬运，让推理工程从 kernel 问题扩成基础设施问题。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 视频有另一套瓶颈
短短 5 秒就可形成数万 latent tokens，注意力计算迅速膨胀。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 系统开始形成闭环
产品 traces 反过来训练模型；模型也已经能参与优化自己的推理路径。

</div>

</div>

---
layout: two-cols
---

# 一条 200,000-token 请求会经过什么

<div class="text-sm mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
先问历史：完整请求或前缀是否已经出现过？长上下文最先争取的是 **cache hit**。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
再找容量：把请求送到有可用 prefill worker、且已有相关 KV cache 的 replica。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
最后解耦：prefill 负责处理输入和首 token；decode 负责后续逐 token 生成并流式返回。
</div>

<div class="text-xs opacity-65 mt-4">
作者概括：长上下文推理首先是调度问题，其次才是单卡算力问题。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./request-path.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Cache-aware routing：先复用，再计算

<div class="grid grid-cols-3 gap-5 mt-8 text-center">

<div class="p-5 rounded border-2 border-blue-200 bg-blue-50">
<div class="text-3xl font-bold text-blue-600">1</div>

### 看前缀
请求是否复用了 coding agent、多轮会话里已经存在的上下文？
</div>

<div class="p-5 rounded border-2 border-purple-200 bg-purple-50">
<div class="text-3xl font-bold text-purple-600">2</div>

### 看位置
哪台 replica 已持有对应 KV cache，避免重新做长 prefill？
</div>

<div class="p-5 rounded border-2 border-green-200 bg-green-50">
<div class="text-3xl font-bold text-green-600">3</div>

### 看容量
哪组 prefill workers 当前可用，能把首 token 延迟压下来？
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
同一个模型、同一套权重，也会因为 cache hit rate 和调度策略得到完全不同的服务表现。
</div>

---
layout: two-cols
---

# Prefill 与 Decode：两种不同的工作

<div class="mt-5 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 mb-4">

### Prefill
一次性处理长输入，生成 KV cache，并尽快交付首 token。它更像**吞入上下文**。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

### Decode
读取 KV cache，逐步生成后续 token。它更像**持续输出**。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Disaggregation
把两类负载放到不同 GPU 组，分别调优资源、batch 与延迟目标；代价是要可靠搬运 KV cache。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./request-path.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 投机解码：小模型先猜，大模型批改

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
目标模型原本每次 forward pass 只确定下一个 token；draft model 先快速提出多个候选 token。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
目标模型一次验证这些候选：正确就接受，错误就拒绝，因此投机本身不必牺牲输出质量。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
draft model 越贴近真实流量，接受率越高；coding、特定领域与通用 shared endpoint 的最佳 speculator 不同。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
它并非免费：draft tokens 消耗计算资源，也增加同卡编排与推理引擎复杂度。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./optimization-stack.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 什么时候从 serverless 换到 dedicated

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 流量已经稳定
当每小时达到数百万 tokens，按 GPU 小时租用并主动提高利用率，可能比按 token 计费更便宜。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 需要可靠隔离
不必和别人的大规模 benchmark 流量共享 endpoint，延迟和容量更可控。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 需要定制优化
可针对真实 traffic 训练 speculator，固定 batch、parallelism、context 与 precision 选择。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 需要行为约束
后训练模型的 tool calling、量化质量与结构化输出要求，需要专属 benchmark 和上线标准。
</div>

</div>

<div class="mt-6 text-sm opacity-70">迁移信号不是模型变了，而是流量和可靠性目标已经足够确定。</div>

---

# Tool calling：LLM 只提出动作建议

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型负责什么

- 生成工具名与参数
- 按 JSON 或指定 schema 输出
- 在 agent loop 里依据返回结果继续推理

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 系统负责什么

- 解析格式并选择真正的执行器
- 校验、授权与运行工具
- 把工具结果重新送回模型

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
状态机或 grammar 能保证输出**符合结构**，但不能保证模型调用了正确工具，也不能替代权限控制。
</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
作者概括：MCP 仍是工具接口；行动来自模型之外的执行系统。
</div>

---

# 支持新模型，不等于能生成一个 token

<div class="grid grid-cols-4 gap-3 mt-6 text-xs">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### ① Runtime
让 VLLM、SGLang 或自有 stack 认识新架构与算子。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### ② Quant
为目标硬件生成 NVFP4 等权重，并校准是否出现能力回退。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### ③ Speculator
用基础模型的 hidden states 和代表性数据训练 draft model。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### ④ Production
装载、路由、监控、真实流量测试，持续修复长尾问题。
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">Day 0：能跑起来，只说明最短路径通了。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">Day 1–30：真实 prompts 才暴露 mode collapse、温度与集群差异。</div>
</div>

---

# 开放组件可以被重新组合

<div class="mt-4 text-sm opacity-70">节目中的实验：给没有 vision 的 GLM 5.2 接上视觉能力。</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl mb-2">👁</div>

### Kimi vision encoder
读取图像并产生 latent representation；保持冻结。
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl mb-2">↔</div>

### Projector
只训练连接视觉 latent 与语言模型空间的少量参数。
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl mb-2">🧠</div>

### GLM 5.2 weights
语言模型保持冻结，降低新增视觉能力时破坏原能力的风险。
</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
训练从图像描述转向围绕同一图像回答多类问题后，连接层学到的理解更完整。嘉宾把这看作开放模型可组合性的价值。
</div>

---

# 推理质量：尽量忠实地服务原模型

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 通常无损

- KV caching：避免重复计算相同值
- 投机解码：错误 draft token 会被拒绝
- 路由与 disaggregation：改变执行位置，不改权重

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 主要有损点

- 量化降低数值精度
- 风险取决于 data format
- 也取决于量化哪些 layers，以及如何校准 outliers

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border border-blue-200">
<strong>节目里的质量定义：</strong>相对于原始 full-precision 模型的理想实现，服务 API 能保持多少行为 fidelity。
</div>

---

# 量化误差也可能彼此抵消

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">

### 旧直觉
量化层越多，丢失的信息越多，模型必然越差。
</div>

<div class="p-4 rounded bg-yellow-50 border-t-4 border-yellow-500">

### 研究观察
不同层的量化误差可能方向相反；选择得当时，最终 logit distribution 更接近原模型。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 测量方式
不仅看任务 benchmark，也比较 quantized 与 full-precision logits 的 KL divergence。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
嘉宾描述的结果：通过选择可相互抵消误差的层，模型可做到约 **20% 更多层被量化**、吞吐也约高 **20%**，同时比对照量化版本更接近原模型。
</div>

<div class="mt-3 text-xs opacity-60">这是节目中对 Baseten 研究结果的概述，不是所有模型都会自动获得同样增益。</div>

---
layout: two-cols
---

# 速度不是一个开关，而是一串乘法

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
节目给出的普通起点：约 1T 参数模型、没有额外优化时，可能在 **30–50 tokens/s**。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
量化、投机解码、PD disaggregation、更新的 runtime 与 kernels 逐层叠加。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
在最佳硬件、小 batch、高 cache hit 等条件同时满足时，节目讨论了 **300–400 tokens/s** 的激进区间。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
同硬件归一化后，嘉宾更常见的判断是 **2–4×**；跨 provider 常见大幅差异可到 **4–6×**，10× 属于激进目标。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./optimization-stack.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# Benchmark 为什么很难公平

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Hardware
H100、B200 或其他设备；单节点还是多节点；显存和 interconnect 都会改变结果。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Traffic
系统当前负载、batch size、cache hit rate、输入/输出序列长度都会改变 TPS 与 ITL。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Objective
总吞吐 tokens/s 和单请求 token latency 是两个指标，优化方向可能冲突。
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border border-yellow-200">
<strong>作者概括：</strong>速度榜单没有脱离 traffic profile 的绝对冠军；先固定硬件、负载、序列长度和延迟/吞吐目标，再谈优化幅度。
</div>

---

# 线上怪问题：到底是权重、软件还是硬件

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Mode collapse
某些 prompts 与 temperature 组合下，模型可能重复同一 token。节目中描述的 endpoint 会在相同 token 连续出现四次以上时中止并重试，同时排除部分特殊字符。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Engine difference
同一份量化权重换一个 inference engine 后问题消失，说明不能立刻归咎于模型或 PTQ。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Kernel race
错误 barrier 或同步可能让线程在数据写入前读取 register；高性能 overlap 让测试更难。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Cluster exposure
更慢的节点间 interconnect 可能暴露某个 race；换集群后表面上恢复正常，但根因仍在软件路径。
</div>

</div>

---

# 本地 AI 与数据中心：目标函数不同

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-200">

### Local AI
先让模型**装得进设备**，再尽量保持能力。

- 内存容量与带宽更紧
- pruning、distillation、dynamic quantization 更重要
- batch size 常接近 1
- Mac / edge 的优化不必适用于数据中心 GPU

</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### Data-center inference
模型通常能装下，重点是让它**不要太慢**。

- 利用 batch 和高带宽互联
- 强调 tensor / expert parallelism
- 追求高吞吐、低延迟与可靠性
- 需要在多租户、集群和路由层优化

</div>

</div>

<div class="mt-5 text-sm opacity-70">共同原则仍是减少数据移动、选择合适精度、把并行策略匹配到真实硬件。</div>

---
layout: two-cols
---

# 三种并行，不是三选一

<div class="mt-5 text-sm space-y-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Tensor parallelism</strong> 把矩阵分片到多 GPU，每一步都要 all-gather / all-reduce，因此高度依赖 NVLink 一类高带宽互联。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Expert parallelism</strong> 把完整 experts 放在不同 GPU，router 复制到各卡；适用于 MoE，并减少部分资源竞争。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Pipeline parallelism</strong> 把不同 layers 放到不同节点；通常在单节点装不下模型时才被迫使用。
</div>

<div class="text-xs opacity-65">实际系统往往在节点内组合 TP + EP，跨节点再加 PP。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./parallelism-map.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 模型大小最终会撞上显存算术

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600">2.8T</div>

### 参数量示例
节目用最新 Kimi 的约 2.8T 参数说明超大模型的单节点压力。
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">≈1.4 TB</div>

### NVFP4 权重
按每个参数约半字节估算，仅权重就接近 1.4 TB。
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">+ KV</div>

### 还没算上下文
GPU 显存还要为 KV cache 留空间，context 越长，权重与缓存越抢容量。
</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500">
作者概括：大模型是否能跑，不只看权重能否塞进节点；还要看 KV cache、traffic profile 与跨节点传输成本。
</div>

---
layout: two-cols
---

# 推理工程正在变成系统工程

<div class="mt-5 text-sm space-y-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
过去的重点更像单 GPU 上写快 kernel；今天的性能越来越取决于 CPU↔GPU、GPU↔GPU 与 node↔node 的数据路径。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
KV offloading、cache-aware routing 与 PD disaggregation 把网络、存储和调度带进核心路径。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
要从 kernel 层一路推理到 rack、data center，再回到模型架构和训练目标。
</div>

<div class="text-xs opacity-65">本页图为 episode scaffold 自带的 co-design 模板，与节目中的系统化趋势直接吻合。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./co-design-stack.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# Dynamo：更像开发工具箱，不是自动加速按钮

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 它擅长

- 在 cluster 内移动信息
- 协调 KV cache 的位置与传输
- 支持 cache-aware routing、offloading、PD disaggregation
- 连接不同 inference frameworks 与硬件路径

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 它不保证

- 安装后立刻获得巨大性能提升
- 自动选出所有最佳策略
- 替你训练 speculator 或量化权重
- 替代真实 traffic 下的 tuning 与 benchmark

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border border-blue-200">
它提供移动 KV 与组合系统组件的基础能力；性能仍来自使用者如何设计并运行整套系统。
</div>

---
layout: two-cols
---

# 下一个大瓶颈，可能是网络

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
大规模 serving 中，KV cache 常先从一台 node 的内存传到另一台 node，再进入目标 GPU。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
HBM 带宽远高于 NIC 通信，导致 PD disaggregation 的跨节点 KV transfer 成为关键等待项。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
Ali 的假设：如果 NIC 快到可以直接高效搬运 KV，跨节点 serving 可能获得接近两个数量级的改进空间。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
边界：这是节目中的理论推演，不是已验证的产品 benchmark；嘉宾也明确说自己不了解更快 NIC 的具体工程障碍。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./request-path.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 视频推理不是把 LLM 技巧照搬一遍

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### LLM / autoregressive

- token 按序生成
- batching 与 KV cache 很关键
- 可投机、可流式输出
- 大模型常需 sharding 与并行

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Video diffusion

- 每个请求常占一张 GPU
- 模型参数量可比顶级 LLM 小很多
- 但时空 latent tokens 极多
- 双向 attention 让长视频成本迅速爆炸

</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500">
开放视频模型与闭源模型之间仍有明显质量差距；即使开放方案便宜很多，媒体工作流仍会优先选择质量更高的输出。
</div>

---
layout: two-cols
---

# 5 秒视频，约 35,000 个 attention tokens

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
节目示例从 **16 fps、480p、5 秒**出发，经过 latent compression 后仍得到大约 **35,000 tokens**。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
如果做 full attention，计算随 token 数量近似二次增长；时长从 5 秒延到 10、20、30 秒，成本不会线性增加。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
这也是一分钟级连续镜头难做的根因：模型不只要生成更多 frame，还要维持跨时空的一致性。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./video-attention.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 长视频的三难：质量、计算、连续性

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Full attention</strong>：全局一致性最好，但长序列的二次成本极高。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Sparse attention</strong>：只关注 top-K 时空邻域，省计算，却可能明显损伤画质。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Autoregressive video</strong>：可以边生成边播放，并复用更多 LLM 推理技术；当前开放模型质量仍落后。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Chunk stitching</strong>：逐段拿上一段末帧续写，会累积 drift；亮度、细节和主体身份可能越来越偏。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./video-attention.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 可能的终局：Autoregressive × Diffusion

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### Autoregressive 擅长

- 沿时间向前扩展
- 流式生成与播放
- 使用 KV cache、speculation 等顺序模型技巧
- 避免每次都重算完整未来

</div>

<div class="p-6 rounded bg-purple-50 border-2 border-purple-200">

### Diffusion 擅长

- 双向关注整段 latent sequence
- 回头修正过去，让未来与过去一致
- 保持空间与时间上的全局 coherence
- 适合需要整体约束的画面

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
节目提出的研究方向是混合两者：用 autoregressive 扩展长度，用 diffusion 处理需要全局一致性的部分。开放视频模型尚未给出成熟答案。
</div>

---
layout: two-cols
---

# Training for inference，Inference for training

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Inference for training</strong>：强化学习训练需要大量 rollouts；推理太慢会拖住训练，而且过旧 rollouts 会变得更 off-policy。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Training for inference</strong>：训练 speculator、做 quantization-aware post-training，或让低精度模型通过 distillation 接近 full precision。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
推理工程师因此越来越需要写训练 pipeline；训练团队也必须理解服务系统的真实 bottleneck。
</div>

<div class="text-xs opacity-65">作者概括：训练与推理不再是交接关系，而是共同优化一个持续运行的系统。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./feedback-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 模型已经开始优化自己的推理路径

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Baseten 团队把 **GLM 5.2** endpoint 接入 **Claude Code** harness，让它执行自己、读取 profile trace，并找出 bottleneck kernels。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
模型随后写新 kernels，再跑一次 profile；产出的 image 被上传、拉取并进入下一轮迭代。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
嘉宾说，GLM 5.2 服务中的一部分 GPU kernels 就来自这个循环；模型既是被优化对象，也是优化工具。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
准确性说明：字幕在该段把 GLM 5.2 误写作 JLM 52，并把 Claude Code 识别为 cloud code；本页按前文与产品名规范化。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./feedback-loop.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 但闭环还没有自动驾驶

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 已经可做

- 读取 inference engine 文档并生成基础 config
- 分析 profile trace
- 找 bottleneck 并写 GPU kernels
- 重新 benchmark，产出下一版 image

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 仍不可靠

- 对复杂工程目标做长期决策
- 正确权衡最便宜路径与最优路径
- 判断对另一个模型的优化是否同样有效
- 在没有人类 review 时安全上线

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border border-purple-200">
作者概括：自优化不是一个自主意识故事，而是一条可观测、可回滚的工程循环：trace → proposal → evaluation → deployment。
</div>

---

# 持续学习：改权重，还是延长记忆

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 路径 A：持续更新 weights
新知识直接写进模型参数，推理侧不断拉取新 weights。

<div class="mt-3 text-xs opacity-70">节目里的质疑：改掉一个事实，不代表模型会在派生问题里稳定使用它。</div>
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 路径 B：KV cache compaction
把越来越长的经历压进可持续使用的 KV memory，尽量不丢失已有知识。

<div class="mt-3 text-xs opacity-70">推理仍使用同一套 weights，变化集中在记忆更新与压缩步骤。</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
Ali 在节目里更看好 KV cache 方向，但这仍是开放研究判断；能否无限压缩而不损失知识，是关键假设。
</div>

---
zoom: 0.78
---

# 核心金句

<div class="text-xs opacity-60 mb-3">8 条逐字引语，均已按 transcript 原始换行做多行固定字符串检索。</div>

<div class="grid grid-cols-2 gap-3 text-[12px] text-left leading-snug">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"The thing I'm always like explaining to
people is the LLM is actually not
capable of doing anything. It's only
capable of making suggestions of what to
do."
<div class="text-[10px] opacity-60 mt-1 not-italic">— Tool calling：行动发生在模型之外</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"There was a
difference between support the model as
in like I can make a token out of this
model and support a model as in I have a
production ready API from this model."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 新模型上线：可运行不等于可生产</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"Most inference optimizations
are lossless."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 质量：量化才是主要有损步骤</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"We're trying
to make things substantially faster not
just go from like 70 to 90."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 性能目标：追求倍数级提升</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"It's a routing problem."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 递归 speculator 最后回到模型选择</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"it's a system entirely designed around
how do I move the KV cache to where it
needs to be when it needs to get there."
<div class="text-[10px] opacity-60 mt-1 not-italic">— Dynamo 与系统级推理</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"Which means that for attention, for just
5 seconds, you're running attention on
35,000
tokens, right?"
<div class="text-[10px] opacity-60 mt-1 not-italic">— 视频：时空 token 规模</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"get better signal, get better model, get
better product. That that loop is is
really promising."
<div class="text-[10px] opacity-60 mt-1 not-italic">— 训练与推理的反馈闭环</div>
</div>

</div>

---
layout: end
---

# 下一次回来，答案可能已经变了

<div class="mt-8 text-xl italic leading-relaxed">
"hopefully in a year everything
shifts and we can come back and say
everything we were wrong about."
</div>

<div class="mt-8 text-sm opacity-60">— Philip Kiely · episode closing</div>

<div class="mt-10 text-xs opacity-45">Inference engineering is still an unfinished field.</div>
