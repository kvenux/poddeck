---
theme: academic
colorSchema: light
themeConfig:
  paginationPagesDisabled: [1]
addons:
  - slidev-addon-excalidraw
title: 'The Future of AI Infra: from Kubernetes to Agent Sandboxes — Akshat Bubna, Modal CTO'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
coverDate: ''
---

# AI Infra 的下一层

<div class="text-3xl mt-5 font-semibold">从 Kubernetes 到 Agent Sandboxes</div>

<div class="text-xl mt-7 opacity-75">
Akshat Bubna · Modal CTO
</div>

<div class="text-base mt-3 opacity-55">
Latent Space · 2026.07 · 约 59 分钟
</div>

<div class="mt-12 mx-auto max-w-3xl p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
这期对谈把 AI 基础设施拆回最底层的 workload shape：为什么弹性推理、RL rollout、后台 agent 与传统常驻 Web 服务需要不同的计算、存储、网络和安全边界。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-7 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 从 workload 出发
Kubernetes 的稳态假设，遇上 AI 的 bursty、异构、跨区域需求。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### DX 正在变成 AX
agent 需要 typed interface、短反馈回路，也需要能从 CLI 读取运行状态。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Sandbox 不是附属品
它从 2023 年的实验 primitive，变成 production agent 的运行边界。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 推理优化看系统
speculative decoding、GPU snapshot、tail latency 与 autoscaling 必须一起看。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 网络重新成为核心
sidecar、私有 overlay、RDMA 与地域 pinning 都进入 agent runtime。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 安全边界不能变软
LLM 可以参与策略判断，但 sandbox 仍需要不可绕过的 hard guardrails。

</div>

</div>

---

# 问题不在容器，而在 workload shape

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 传统编排的默认形状

- 常驻服务，负载变化相对缓慢
- 配置与代码分离，依赖大量 YAML
- 通用镜像与稳定机器池优先

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### AI workload 的实际形状

- 推理、batch、rollout 会突然放大再归零
- GPU 型号、镜像、区域经常变化
- 冷启动和扩缩容直接影响产品体验

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-left text-lg italic">
"Kubernetes is hard to manage. It's not built for burstiness"
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 回顾 Modal 起点</div>
</div>

---
layout: two-cols
---

# 把基础设施放回代码旁边

<div class="text-sm opacity-60 mb-5">作者概括 · 右图压缩 decorator 驱动的 self-provisioning runtime</div>

Modal 的核心选择不是再加一层配置 UI，而是缩小配置表面积：

- 硬件、镜像、扩缩容写进 typed code interface
- agent 只改少量 decorator，不必遍历配置目录
- 运行时自行 provision，并让改动快速进入可观察状态
- 用户仍拥有业务代码；DSL 只描述运行环境

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base italic">
"why would you have an agent read through hundreds of Kubernetes files and like write YAML that's not even typed"
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 解释 AX 与 DX 的共同点</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./self-provisioning.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Modal 选择的边界：不是所有云 workload

<div class="grid grid-cols-4 gap-4 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Inference
自定义模型与 LLM endpoint，需要快速 cold start 与弹性扩缩。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### Training
on-demand training、post-training 与研究者的小规模弹性实验。

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### Batch
编码、数据准备、计算生物等可延迟但计算量很大的任务。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### Sandboxes
后台 agent、RL rollout、持久化文件系统与受控网络。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
访谈中的产品边界很明确：Modal 不把 always-on Web server 当作差异化重点；它押注需要 specialized compute、频繁 scale up/down 的负载。
</div>

---

# 先有 primitive，后有 AI 浪潮

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 起点：serverless container
最初服务 ETL、job queue 与各种 bursty processing；团队把 runtime 视为可复用 primitive。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 提前加入 GPU
GPU 在 ChatGPT 发布前一年进入产品，但团队当时没有预判它会成为如此大的机会。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### PMF：custom model inference
音频、视频、机器人与计算生物公司带来第一批明确需求：模型不同，流量更不可预测。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-xl italic">
"we added GPUs to the product a year before ChatGPT came out. We just didn't think it would be that big of a deal."
<div class="text-xs opacity-60 mt-2 not-italic">— transcript 中的 “Chat GPT” 已按专名规范写为 ChatGPT</div>
</div>

---
layout: two-cols
---

# 弹性要看整条曲线

<div class="text-sm opacity-60 mb-5">作者概括 · 右图对比 steady service 与 AI burst</div>

AI 推理的难点不只是找到一块 GPU：

- 发布日会突然放大流量，随后迅速回落
- 同一公司同时部署多个模型与多个区域
- 各区域峰值错开，局部容量不能简单平均
- GPU snapshot 保存模型运行状态，缩短下一次 cold start

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
关键判断：autoscaling 是产品能力，不是云厂商天然附送的属性；tail latency、交付语义和故障恢复仍要单独解决。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./workload-shapes.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 2023：Sandbox 比市场共识更早出现

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs font-bold text-blue-600">MAY 2023</div>

### 建出 sandbox API
团队同时接触到多位需要隔离执行环境的客户；当时还没人确定它会成为大品类。

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-xs font-bold text-orange-600">FIRST EXAMPLE</div>

### 把 coding agent 放进循环
第一个公开示例把早期 coding agent 放入 sandbox，让它在隔离环境里反复修改与执行。

</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

<div class="text-xs font-bold text-red-600">MODEL LIMIT</div>

### 大约 10 次后发散
当时的模型、tool calling 与 self-correction 都不够成熟，循环很快失去意义。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
这段历史的重点不是准确预测了 agent，而是先拥有一个通用隔离 primitive；模型能力跨过门槛后，旧能力突然获得新的 workload。
</div>

---

# 同一种形状，规模完全不同

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 早期 demo

- 临时拉起单个 GPU 环境
- 跑完模型再缩到零
- 几天后重启仍能继续演示
- 价值在于省掉部署摩擦

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 今天的 RL rollout

- 大量独立 sandbox 同时执行
- rollout 阶段极端 bursty
- 任务结束后容量快速释放
- 调度与故障隔离成为系统问题

</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 text-left text-2xl italic">
"you sometimes need 100,000 sandboxes."
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 谈 RL rollout 的 workload shape</div>
</div>

---

# 从 Developer Experience 到 Agent Experience

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 可生成
typed decorator 比松散 YAML 更容易被模型一次写对，也更容易静态检查。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可迭代
agent 修改配置后，runtime 自动 provision；反馈回路不必等待人工拼装环境。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 可诊断
日志、指标和运行状态进入 CLI，让 agent 能自己调查失败原因。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
AX 不是把产品文档喂给 agent。Akshat 描述的是重新审视 interface：哪些能力应直接成为 CLI、哪些错误需要 benchmark、哪些配置表面积可以被删除。
</div>

---

# 人不读代码之后，更需要可观测性

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-center">

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 1 · Code becomes opaque
人可能把生成代码当成黑盒，只描述想看到的外部行为。

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 2 · Runtime emits evidence
CLI 暴露 logs、metrics、失败状态与部署结果，agent 先自行调查。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 3 · Human judges
人根据可观察结果决定是否接受、回滚或继续 prompt 修改。

</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left text-xl italic">
"you still need humans to go interpret what's going on"
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat：可观测性没有因 agent 消失，反而更重要</div>
</div>

---
layout: two-cols
---

# 一个平台，两条生命周期

<div class="text-sm opacity-60 mb-5">作者概括 · 右图依据 Akshat 对产品焦点的划分</div>

Modal 把未来产品边界概括成两条链：

### Model lifecycle
数据准备 → training / post-training → inference endpoint

### Agent lifecycle
目标与 harness → sandbox → persistent storage → networking

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
两条链共享同一底层需求：异构 compute、弹性调度、状态保存、区域选择与故障恢复。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./two-lifecycles.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# Speculative decoding：用小模型先猜

<div class="text-sm opacity-60 mb-5">机制图 · 只复述本集对 speculative decoding 的解释</div>

一次只生成一个 token 时，推理常受 memory bandwidth 限制。

- 小 draft model 先预测未来若干 tokens
- 大模型把这些候选一次性批量验证
- 只有与大模型结果一致的 token 才被接受
- accept length 越长，每次大模型计算推进得越远

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500">
质量边界没有放松：draft model 负责提案，大模型仍掌握最终接受权。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./speculative-decoding.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 性能差距不只在 kernel

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 局部优化

<div class="text-xl italic mt-3">"improving kernel only give you like a few percentage points of improvement"</div>

<div class="text-sm opacity-65 mt-4">单个 kernel 的改进仍有价值，但通常只移动局部常数。</div>

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### Accept length

<div class="text-xl italic mt-3">"increasing accept length literally is a multiplicative decrease in like 2 to 4x"</div>

<div class="text-sm opacity-65 mt-4">一次验证接受更多 token，改变的是每轮大模型计算换来的有效进度。</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
转录边界：2–4x 是 Akshat 在讨论 accept length 时给出的量级；本页不把它推广为所有模型、硬件和流量模式下的保证。
</div>

---

# Auto Endpoints：先给默认性能，再保留逃生舱

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### Start high-level
用户可以从 UI 或 CLI 创建 endpoint，不必先触碰模型服务代码。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### Optimizations included
团队把 speculative decoding 等优化预先装进默认 endpoint，并提供弹性扩缩。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### Eject to code
平台把代码交给用户；需要微调模型或改变架构时，可以退出默认层继续深改。

</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
产品意图：frontier-level performance 不应只靠 deployed engineer 手工服务。随着流量分布变化，draft model 也可以跟着演化，同时保持代码透明。
</div>

---
layout: two-cols
---

# 跨 17 家云调度

<div class="text-sm opacity-60 mb-5">作者概括 · 17 家供应商是 transcript 中的明确数字</div>

Modal 选择资本轻、软件重的路径：

- 容量池跨越 17 家 cloud providers
- 不拥有自己的 data center
- 软件层在不同 GPU、区域和供应商间调度
- reliability layer 吸收底层设备与供应商波动

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
这条路线的经济前提：外部世界持续建设数据中心，Modal 用更强的软件与容量管理把碎片化供给变成统一产品。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./supercloud.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Reliability 与 locality 是同一调度问题

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Provider variance
不同 NeoCloud 的可靠性水平不同；单块 GPU 可能掉线，底层网络也会失败。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Reliability layer
平台在上层重试、迁移或隔离故障，让用户 workload 不直接暴露给底层波动。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Local placement
CPU、GPU 与 sandbox 需要 pin 到特定区域：有时为数据驻留，有时为端到端 latency。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
访谈里的 collocation 不只是 GPU 靠近 CPU。它还意味着 agent 的 sandbox、数据与推理 endpoint 必须被放在合适的地理和网络位置。
</div>

---

# Sandbox 已经是一个小型 pod

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Sidecar 组合

- 一个 sandbox 可包含多个 containers
- 可以组合类似 Docker Compose 的服务
- 额外容器承担 proxy、logging 或辅助服务

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### Egress 控制

- 记录 RL 环境的外部请求
- 限制允许访问的 domain
- 在代理层注入 credentials
- 为不同 workload 定义网络策略

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-2xl italic">
"a sandbox is actually a pod of containers"
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 解释 sidecar 能力</div>
</div>

---
layout: two-cols
---

# 从私有 IPv6 到 RDMA

<div class="text-sm opacity-60 mb-5">机制图 · 区分 TCP overlay 与其上建立的 RDMA 网络</div>

Modal 的 I6PN 为同一 workspace 内的 containers 分配私有 IPv6 地址：

- eBPF 在 Linux kernel 中允许或拒绝 TCP 连接
- TCP overlay 完成节点发现与 key exchange
- 其上再建立 RDMA，绕开普通 TCP 数据路径
- 最初服务 distributed training，后来被用户用于其他通信

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"This is literally not even in our docs page. People somehow found it and they're using it."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./network-stack.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Multi-node 的目标不是大规模预训练

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 一行配置拿到 cluster
给 function 增加 decorator，就能获得多节点 GPU cluster 与 RDMA networking。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 适配 post-training
重点是中等规模模型的 post-training，用更高质量支持后续 inference。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### 让小实验弹性化
即使公司已有大 cluster，研究者仍持续做小 runs；这时按需弹性比固定配额更重要。

</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
系统视角：post-training 不只是训练框架问题，还包括权重与 KV cache 的搬运、节点间通信、容量调度，以及训练与推理之间的衔接。
</div>

---

# Auto research：agent 成为 infra operator

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Guided sweep
Akshat 观察到的形态更接近由模型直觉指导的 hyperparameter sweep，而不是改变网络架构的 neural architecture search。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### Auto Inference
Modal 内部 agent 会启动多组实验、运行 NVIDIA profiler、调整 configs，甚至比较 H200 与 B200。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-2xl italic">
"the agent will just spin up a sweep of different things."
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 描述内部 Auto Inference repo</div>
</div>

---

# Modal Bench：把 agent 失败变成产品信号

<div class="grid grid-cols-4 gap-4 mt-8 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Benchmark
记录 agent 在较难 Modal 任务上的具体失败。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Skill
补上日志定位、失败解释与正确修改路径。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Interface
把原本只在 UI 的 logs 与 metrics 移到 CLI。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Product
agent 反复伸手找某个能力，可能说明产品就该提供它。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-xl italic">
"if they're reaching for this thing it's product feedback like give it to them"
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 对 agent hallucinated features 的反向解读</div>
</div>

---

# Compute strategy：云成本也是系统设计

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 供给侧模型

- 一年与三年 reservation 如何混合
- 不同 GPU type 与 region 如何互换
- 如何预测客户增长与峰值容量
- 对未来 supply chain 做什么赌注

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 需求侧调度

- latency-sensitive 请求优先抢占近端资源
- 不在乎 latency 的 batch 使用闲置容量
- 客户接受约 24 小时返回，可换更低价格
- 调度效率同时改善 unit economics 与售价

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
作者概括：Modal 的产品包含容量组合与 scheduler。控制全栈后，价格层级本身也能成为新的 API 能力。
</div>

---
layout: two-cols
---

# Agent 权限：软判断外面必须有硬边界

<div class="text-sm opacity-60 mb-5">作者概括 · 右图区分 LLM policy 与 sandbox enforcement</div>

访谈对 LLM-mediated permission 保持怀疑：

- 模型可以参与是否应该做的上下文判断
- allow list、network egress、filesystem 与 credentials 仍需系统强制
- hard guardrail 定义不可跨越的边界
- soft guardrail 只在边界内帮助做更细的策略选择

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500 text-2xl italic">
"you always need hard guard rails"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./guardrails.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Production sandbox 才是控制面

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 起步阶段

- foundation lab 的 managed agent 易于开始
- harness、模型与默认工具已经组合好
- 产品团队先验证 agent 是否有用

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Production 阶段

- 精确控制 agent 可处理哪些文件
- snapshot / restore 执行状态
- 定义网络与 egress policy
- workload 需要时挂接 GPU

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
Modal 对 harness 保持中立：它可以运行在 managed agent 外部，也可以运行在 sandbox 内部。平台押注的是可控的 compute primitive，而不是唯一的 agent framework。
</div>

---

# Coding agents 会把 CI 变成新一轮弹性计算

<div class="grid grid-cols-3 gap-5 mt-8 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 浪费在哪里
大量时间耗在准备 artifacts、恢复 dependencies 与重新搭环境，而不是执行测试本身。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可复用什么
memory snapshot 与 restore 可以把环境准备从每次重建变成状态恢复。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 市场为何变化
coding agents 生成更多变更，也会触发更多隔离、并行、短时的 CI workloads。

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-xl italic">
"runtime sandboxes have a different configuration surface"
<div class="text-xs opacity-60 mt-2 not-italic">— Akshat 区分 build-time 与 agent runtime sandbox</div>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">8 条原句均已逐条回查 transcript；标签说明它们在对谈中的语境。</div>

<div class="grid grid-cols-2 gap-3 text-left text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Kubernetes is hard to manage. It's not built for burstiness"
<div class="text-xs opacity-60 mt-1 not-italic">— 起点：传统编排与 AI workload shape</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"why would you have an agent read through hundreds of Kubernetes files and like write YAML that's not even typed"
<div class="text-xs opacity-60 mt-1 not-italic">— AX：缩小 agent 的配置表面积</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"you still need humans to go interpret what's going on"
<div class="text-xs opacity-60 mt-1 not-italic">— Observability：人仍负责判断</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"you sometimes need 100,000 sandboxes."
<div class="text-xs opacity-60 mt-1 not-italic">— RL rollout：极端 burstiness</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"improving kernel only give you like a few percentage points of improvement"
<div class="text-xs opacity-60 mt-1 not-italic">— Inference：局部优化的量级</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"a sandbox is actually a pod of containers"
<div class="text-xs opacity-60 mt-1 not-italic">— Sidecar：sandbox 的真实结构</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"you always need hard guard rails"
<div class="text-xs opacity-60 mt-1 not-italic">— Security：不可绕过的系统边界</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"if they're reaching for this thing it's product feedback like give it to them"
<div class="text-xs opacity-60 mt-1 not-italic">— Modal Bench：失败转化为产品信号</div>
</div>

</div>

---
layout: end
---

# "we have a long way to go."

<div class="text-xl mt-6 opacity-70">基础设施重新变得有趣，因为 agent 把计算、状态、网络与权限同时推到了前台。</div>

<div class="mt-10 text-sm opacity-50">Akshat Bubna · Latent Space</div>
