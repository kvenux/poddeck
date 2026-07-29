---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The AI Frontier: from open weights to open research — Eiso Kant, Poolside AI'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 从开放权重，到开放研究

<div class="mt-4 text-xl opacity-80">
Eiso Kant 谈 Poolside 的模型工厂、开放路线与 AI 研究的下一道前沿
</div>

<div class="mt-12 text-base opacity-60">
Latent Space · 1:56:04 · 2026-07
</div>

<div class="mt-7 text-sm opacity-50">
一场关于模型如何被制造、如何被开放，以及谁有权制造智能的长对谈
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 开放不止是 weights

权重能让人使用模型，研究过程才能让后来者重新走一遍能力路径。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 模型其实是一座工厂

真正的竞争力不是某个 checkpoint，而是从数据到发布的端到端迭代系统。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 行为可以补足规模

持久、验证、回溯与不抢跑，会让较小模型在知识工作里释放更多能力。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Agent 开始反哺研究

研究员提出想法，agent 写代码、发任务、读结果；模型工厂逐渐成为自我改进的载体。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 工具接口会被代码吞掉

复杂任务需要循环、条件、状态与文件；极简 harness + 虚拟机比几十个工具描述更通用。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 开放也有治理边界

当能力继续增强，开放不是永远的二元答案；关键是把限制交给可问责的公共过程。

</div>

</div>

---
layout: two-cols
---

# 十一年，绕回同一个问题

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2015</strong> · Karpathy 的 RNN 文章让 Kant 连夜把创业方向转向 code models。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>2019</strong> · 四五年投入后失败；后来回看，方向对了，但没有持续 scale。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Poolside</strong> · 把 RL、工程系统、开放研究与全球人才重新拼成一条路径。
</div>

</div>

<div class="mt-5 text-xs opacity-60">
事实整理 · 时间与经历均来自本集字幕
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-timeline.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2015：一篇文章触发连夜转向

<div class="grid grid-cols-2 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 起点不是 Transformer

Kant 读到 Andrej Karpathy 关于 recurrent neural networks 的文章，开始钻研 RNN 与 LSTM。

随后，他把语言建模用于代码，早期甚至尝试把卷积网络用到代码结构上。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 当时的信念

神经网络应能泛化到更广的智能任务；语言也应能承载写代码所需的能力。

这份信念在当时并不时髦，甚至会被同行嘲笑。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：技术方向常常早于产业共识；真正难的不是先看到，而是知道该把哪一条轴持续放大。
</div>

---

# 失败不是方向错，而是没继续 scale

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600">$12M</div>
<div class="mt-2 text-sm">投资人资金</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">40</div>
<div class="mt-2 text-sm">人围绕问题投入多年</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">4–5 年</div>
<div class="mt-2 text-sm">直到 2019 年末</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-lg italic">“biggest failure of my career”</div>
<div class="mt-2 text-xs opacity-60 not-italic">— Kant 对这段创业经历的判断</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg italic">“we should have just kept scaling up”</div>
<div class="mt-2 text-xs opacity-60 not-italic">— 后来回看，真正漏掉的动作</div>
</div>

</div>

---

# ChatGPT 带来的不是惊喜，而是迟到的验证

<div class="mt-6 grid grid-cols-2 gap-6 text-left">

<div class="p-5 rounded bg-slate-50 border-l-4 border-slate-500">

### 两年离开语言模型

失败后，家庭成为重心；Kant 坦言自己随后两年几乎没有再看语言模型。

这让错过后续进展的感受更强烈。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### ChatGPT 出现

老同事与朋友重新发来旧 deck、旧演讲。曾经无人关心的 code models，突然成为主航道。

Poolside 由此继承两条前提：能力会持续复利，RL 会成为能力增长的重要驱动。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>作者概括</strong>：这不是英雄式先见，而是一段更有价值的路径依赖——看对、做错、退出，再带着失败形成的工程直觉回来。
</div>

---
layout: two-cols
---

# 开放，是世界观选择

Kant 用科幻小说来想象未来：如果少数几家公司垄断之后所有智能的生产，那更像反乌托邦的开篇。

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-base italic">
“I want to look at a world where there's lots of choice.”
</div>

<div class="mt-5 text-sm">
他给出的偏好不是自己成为少数赢家之一，而是让更多 foundation model companies 能够存在、竞争并被不同人信任。
</div>

<div class="mt-5 text-xs opacity-60">
事实整理 · 图中 5 与 100 对应本集对少数/多数模型公司的对照
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./open-fork.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么必须现在决定

<div class="grid grid-cols-2 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 越接近 frontier，转向越难

资本、承诺与外界预期会不断累积。一旦站到前沿，改变开放策略的组织成本会陡增。

Poolside 选择在仍然较小、仍可改变路线时完成这次价值判断。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 但答案并不完整

- 开放 foundation model 如何挣钱？
- 滥用风险在哪个能力点变得真实？
- 政府如何回应开放模型？

Kant 明确承认，这些问题还没有完整答案。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>作者概括</strong>：这是一种带着未解问题先做方向性承诺的策略，而不是把开放包装成没有成本的口号。
</div>

---

# Open weights 不是 open research

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 开放权重

- 可以下载、修改与部署
- 能观察一个训练结果
- 但无法据此重建产生结果的流程

权重是产物，不是能力形成的因果记录。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 开放研究

- 把怎么做、哪里失败、什么实验有效写出来
- 公开模型工厂里的原则与系统选择
- 让后来者少花成千上万次实验去重复踩坑

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>作者概括</strong>：开放权重降低使用门槛；开放研究降低成为新模型公司的门槛。后者才真正改变竞争结构。
</div>

---

# 接受过开放研究，就有责任回流

<div class="mt-6 grid grid-cols-3 gap-4 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 输入

Poolside 直接受益于其他实验室公开的论文、优化方法与训练经验。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 内化

团队把外部知识放进自己的实验系统，做验证、改造与规模化。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 输出

当自己学到可复用的东西，也应把经验再释放出去，帮助新的竞争者更快开始。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
Kant 特别肯定中国实验室分享研究的贡献：在知识流动中，拿到别人公开的成果之后，回馈不是营销，而是生态上的对称责任。
</div>

---

# 不从既有实验室脱胎，反而塑造了团队

<div class="grid grid-cols-2 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 全球人才而非湾区单点

Poolside 从一开始就是美国公司，但主动把招聘范围放到美国其他地区、欧洲、塞尔维亚、台湾、新加坡等地。

这在早期拖慢沟通，却在人才争夺变激烈后转为优势。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 从空白代码库开始

训练代码不是 fork 某个开源仓库。信息劣势迫使团队读论文、写系统、犯错，再建立自己的因果理解。

</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>作者概括</strong>：人才分布与技术路线是同一个组织选择——都拒绝现成中心，换取更慢但更独立的能力积累。
</div>

---

# 三周 optimizer bug：论文不是直觉的替代品

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 训练一直不稳定

公司当时只有约 5 人，却花了 3 周追一个 optimizer bug。

团队一度怀疑自己是否应该直接 fork 现成实现。

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
线索集中在 Adam 的 epsilon：公开方案使用了较高取值，但这和团队对避免除零的直觉冲突。
</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 解掉之后，获得的是方法

关键收获不是一个具体参数，而是团队确认：只要愿意把问题工作到底，就能不依赖权威配方建立自己的模型直觉。

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
模型训练是实验科学。最初的直觉会不断被数据击碎；价值来自追到为什么，而不是记住别人最后用了什么数。
</div>

</div>

</div>

---

# 实验科学：显然正确的东西，往往先被打脸

<div class="mt-7 grid grid-cols-3 gap-4 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 先有直觉

对 optimizer、数据、架构或行为形成可检验的判断。

</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">

### 再被实验推翻

训练曲线与模型轨迹不会尊重<strong>看起来应该如此</strong>。

</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 最后追因果

可复现的 ablation 才能把一次结果变成以后可用的理解。

</div>

</div>

<div class="mt-8 p-5 rounded bg-slate-50 border-l-4 border-slate-500 text-lg">
<strong>作者概括</strong>：模型公司的研究优势，不是拥有更多聪明猜测，而是能更快淘汰错误直觉、保留可信因果。
</div>

---

# 模型构建，90% 是工程

<div class="mt-7 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-2xl italic">
“model building is ultimately 90% engineering”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<strong>数据工程</strong><br/>抓取、过滤、清洗、变换、混合、分析
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
<strong>分布式系统</strong><br/>训练、网络、硬件可靠性、故障恢复
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
<strong>研究工程</strong><br/>实验追踪、评估、复现、快速并入下一次训练
</div>

</div>

<div class="mt-6 text-sm opacity-60">
— Kant 对 foundation model building 日常工作的归纳
</div>

---
layout: two-cols
---

# Model factory：持续系统

模型工厂不是一个训练脚本，而是一条持续运行的工业流程：

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">Web 与其他原始数据进入可追踪的数据层</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">过滤、清洗、混合与 curriculum 形成训练输入</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">分布式 pre-training 与 post-training 连续接力</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">评估、发布与下一轮实验形成闭环</div>

</div>

<div class="mt-5 text-xs opacity-60">
作者概括 · 右图按本集叙述重建
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-factory.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 工厂的优化目标只有一个：可信迭代速度

<div class="grid grid-cols-2 gap-5 mt-6 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是更快地跑起来

一次跑通不等于知道为什么有效。没有版本、数据 lineage 与一致评估，速度只会制造更多不可解释的结果。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 而是更快地可信并入

研究员的想法 → 实验结果 → 可信验证 → 进入下一次模型训练。

工厂的指标是缩短这条链路，而不牺牲可复现性。

</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
Foxconn 类比的重点不是规模，而是<strong>决策谱系</strong>：亲历每个系统选择的人，才知道复杂工厂为何长成今天的样子。
</div>

---

# 第一个关键选择：训练数据改为流式进入

<div class="grid grid-cols-2 gap-6 mt-5 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 传统打包路径

准备完整数据集 → tokenize / pack → 复制到训练集群 → 分发到每个节点 → 才能开始训练。

任何数据修正，都可能触发昂贵的重新物化与搬运。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Poolside 的流式路径

训练任务按 token 吞吐持续消费数据；数据管道可以一边物化，训练一边启动。

混合比例与重复轮次由配置决定，不必重新打包整个数据集。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>作者概括</strong>：流式不是单纯省复制时间，它把数据实验从一次重做资产变成一次改配置并验证。
</div>

---

# Blender：把数据混合变成可实验的配置

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">20%</div>
<div class="mt-2 text-sm">数据源 A</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600">10%</div>
<div class="mt-2 text-sm">数据源 B</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">N epochs</div>
<div class="mt-2 text-sm">重复与 shuffle 策略</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
训练开始时，剩余数据仍可继续物化；大数据管道与训练集群通过稳定接口解耦。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
数据层保持 immutable，任何一次 run 都能回到具体代码版本、cursor 与 token。
</div>

</div>

<div class="mt-5 text-xs opacity-60">事实整理 · 20% / 10% 是嘉宾用于解释配置机制的示例</div>

---
layout: two-cols
---

# 复现能力，必须是系统属性

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Immutable data</strong> · 数据资产不被就地覆盖
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Versioned code</strong> · 每次变更都能定位到具体版本
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Trusted result</strong> · 同一次实验可重跑、可比较、可进入模型配方
</div>

</div>

<div class="mt-5 p-3 rounded bg-slate-50 border-l-4 border-slate-400 italic text-sm">
“every experiment is truly an ablation”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./repro-stack.excalidraw"
  class="w-[475px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 从 YOLO runs，到严谨科学

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 第一年

人少、想法多，许多实验更像 YOLO runs。

团队先造出了很强的基础设施，却还没有把它完全用于严谨的科学进展。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 一年到一年半之后

immutable data、代码版本和完整 trace 汇合，实验开始真正成为可解释 ablation。

两年前的 run 仍可以重现，科学过程由此被系统承载。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>作者概括</strong>：基础设施只有在约束实验行为时才变成研究能力。否则，它只是更高效地生产无法解释的结果。
</div>

---

# 实验规模迫使研究变成平台问题

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">&lt; 70</div>
<div class="mt-2 text-sm">研究员</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">+ 35</div>
<div class="mt-2 text-sm">工程师</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">10–20k</div>
<div class="mt-2 text-sm">每月实验量级</div>
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-left text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
每个 run 都必须可信：数据、代码、硬件、评估和结果不能靠人脑对齐。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
平台使工程师也能低门槛进入研究；Kant 举例，一名 agent 工程师约 6 个月转成了 RL 研究员。
</div>

</div>

---

# 速度不是宣言，而是交付周期

<div class="grid grid-cols-2 gap-6 mt-7">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="text-5xl font-bold text-blue-600">5 周</div>
<div class="mt-3 text-sm">Laguna XS 2：从 pre-training 开始到发布</div>
</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="text-5xl font-bold text-green-600">8 周</div>
<div class="mt-3 text-sm">本集讨论的新模型：从启动到发布</div>
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
新的 Laguna M 在访谈前一天已开始训练，计划为 39 天 pre-training。发布与下一轮训练不再串行等待。
</div>

<div class="mt-5 text-xs opacity-60">事实整理 · 5 周、8 周与 39 天均来自本集原话</div>

---

# Checkpoint 是工厂的切片，不是终点

<div class="mt-7 p-6 rounded bg-green-50 border-l-4 border-green-500 text-2xl italic">
“the model should be an artifact”
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>第一枚火箭</strong><br/>证明系统能造出东西
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>稳定工厂</strong><br/>把复杂决策固定进流程
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>连续发布</strong><br/>每个模型只是当下研究状态的输出
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
因此，团队对新模型的内部提醒是：<span class="italic">“it's the worst model we'll ever train”</span>——注意力已经转向下一次。
</div>

---
layout: two-cols
---

# Agent 开始成为模型工厂的操作层

研究员仍负责想法、判断与困难调试，但日常屏幕上已经同时运行许多 agent：

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">写实验代码</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">发起训练任务</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">评估返回结果</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">修改并推进下一轮</div>
</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
变化在 pre/post-training 数据与 synthetic data 管道上最明显，也开始进入 architecture 工作。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-factory.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这里的 RSI，不是模型关起门自我复制

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 当前真实形态

模型在工程系统里承担更多操作工作：读代码、写变更、发 job、看 eval、继续尝试。

人仍在驾驶位，决定研究问题与可信标准。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么工厂重要

Agent 需要稳定 API、可写代码区、数据入口、评估回路与可靠执行环境。

原本为人类研究员打造的好系统，恰好也是 agent 可操作的系统。

</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>作者概括</strong>：recursive self-improvement 最先出现的形态，可能不是模型改自己的 weights，而是模型提高下一轮实验的吞吐与质量。
</div>

---

# 每次训练，都吃进昨天验证过的改进

<div class="mt-6 grid grid-cols-3 gap-4 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>昨天</strong><br/>研究员或 agent 完成代码变更与实验
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>今天</strong><br/>结果通过评估，变更进入训练配置
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>下一次 run</strong><br/>无需提前 90 天冻结配方
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
Laguna S 的训练被描述为没有 on-call events；年内也几乎没有需要夜间唤醒的重大事件。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
例外是新 run 的最初约 6 小时：配置失误仍可能需要人在正常值班时段介入。
</div>

</div>

---

# Laguna S：小尺寸里的行为实验

<div class="grid grid-cols-3 gap-4 mt-5 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">118B</div>
<div class="mt-2 text-sm">总参数</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-4xl font-bold text-purple-600">8B</div>
<div class="mt-2 text-sm">active parameters</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">30–40</div>
<div class="mt-2 text-sm">tokens/s on DGX Spark</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-left text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
非常稀疏，属于适合单机运行的 weight class；目标不是宣称全球最佳模型。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
它在一些 coding tasks 上超过更大模型，让团队看到行为训练带来的能力空间。
</div>

</div>

<div class="mt-5 text-xs opacity-60">事实整理 · 模型规格与速度按嘉宾在本集中的表述</div>

---

# 关键变量：不是更聪明，而是更不容易放弃

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl mb-2">✓</div>
更多验证
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl mb-2">↩</div>
错误后回溯
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-2xl mb-2">…</div>
不提前宣布成功
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-2xl mb-2">→</div>
持续推进
</div>

</div>

<div class="mt-8 p-6 rounded bg-green-50 border-l-4 border-green-500 text-2xl italic">
“being way more persistent”
</div>

<div class="mt-5 text-sm opacity-60">
— 团队对 Laguna S 增益来源的内部观察；Kant 认为这些行为对知识工作的成功很有预测力
</div>

---
layout: two-cols
---

# 规模、行为与任务经济性

更大的模型仍能把更多概念联系起来，尤其适合推进科学前沿；但多数日常知识工作还有另一条轴：

<div class="mt-4 space-y-3 text-sm">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">持续查文档、尝试多条路径、遇错回退</div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">用合适尺寸完成任务，降低推理成本</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">把最大模型留给真正需要跨域综合的工作</div>
</div>

<div class="mt-5 text-xs opacity-60">
作者概括 · 嘉宾明确把这一判断称为尚未回答的问题
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./capability-roi.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Kant 如何亲自检验持久性

<div class="grid grid-cols-2 gap-5 mt-5 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Wi‑Fi scanner

他要求模型在 Mac 上、不用外部库，尝试理解 CoreWLAN API 并完成扫描器。

观察重点不是一次答对，而是它如何在没有互联网时持续尝试。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 长时间读 trajectory

模型发布后的约 10 天里，他每天花 8–10 小时使用它；11 小时航班中约 10 小时都在读 traces。

这是定性 dogfooding，不是只看 leaderboard。

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
本集还提到它独立解决 Erdős 397，作为持久推理能力的例子；嘉宾同时反复提醒，这仍不是 state-of-the-art overall model。
</div>

---

# 科学突破与知识工作，需要的能力不完全相同

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 科学前沿

更强智能的一个维度，是把远距离概念放到一起。

模型越大，越可能完成较小模型做不到的跨领域综合。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 大量知识工作

软件开发、会计、法律等工作常常更依赖坚持：

查资料 → 定位 bug → 换路径 → 验证 → 继续。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>作者概括</strong>：这不是 intelligence 与 persistence 二选一，而是在任务层面重新估计两者的边际收益。
</div>

---

# 如果较小模型够用，开放模型的经济空间就变大

<div class="mt-6 grid grid-cols-3 gap-4 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>运行成本下降</strong><br/>单机、本地与专用部署更可行
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>供应更多样</strong><br/>不必把所有任务送给最大闭源模型
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>模型商品化</strong><br/>能力趋同后，价格、信任与可控性成为选择轴
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
Kant 明确把这称为有利于自己的、带希望色彩的论证。真正的峰值在哪里——万亿、五万亿还是更大——仍要靠未来几年实验发现。
</div>

---

# 但 Poolside 没有放弃 scale

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 错误解读

既然较小模型还能被榨出很多能力，就只做 open-source small models。

Kant 把这种自我封王视为回避真正的 frontier 竞争。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 实际路线

继续把模型扩到与竞争者相近的规模，同时研究如何让每个 weight class 都更高效。

新的 Laguna M 已开始训练，后续仍有更大型号。

</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>作者概括</strong>：行为优化改变的是 scale 的收益曲线，不是取消 scale 这条轴。
</div>

---

# Pre-training 远没有结束

<div class="mt-6 p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-2xl italic">
“just next token prediction pre-training is not enough”
</div>

<div class="grid grid-cols-2 gap-5 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Web 可能已经编码了人类知识的总量，但从垃圾内容到顶级论文，质量跨度巨大。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
问题不是再抓一遍 Web，而是怎样更早地教模型思考、排序与利用这份知识。
</div>

</div>

<div class="mt-6 text-sm opacity-60">
— Kant 对 pre-training objective 与数据利用率的判断
</div>

---
layout: two-cols
---

# Mid-training 只是粗粒度 curriculum

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>当前</strong> · Web pre-training 后，再做一个或多个高质量领域阶段
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>限制</strong> · 计算不足，无法从 token 0 开始搜索最优 curriculum
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>方向</strong> · RL 与 reasoning 更早进入训练，阶段逐渐变成连续谱
</div>

</div>

<div class="mt-5 text-xs opacity-60">
作者概括 · 图中连续 curriculum 是嘉宾对未来训练组织的推演
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./curriculum.excalidraw"
  class="w-[490px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 通向 AGI 的路，不一定只是更多 environments

<div class="grid grid-cols-2 gap-6 mt-6 text-left text-sm">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 环境路线

为 coding、家具安装、工具使用等任务持续构造 RL environments，让模型在可验证反馈中学会行为。

这条路有效，也是行业正在规模化的方向。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 泛化路线

Web 已包含大量程序、解释、失败与知识。能否从它获得比 next-token prediction 更多的通用推理？

Kant 对答案保持开放，但认为这里还有大量未被提取的价值。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>作者概括</strong>：两条路线不是互斥。争议在于能力增量的主来源最终会偏向专门环境，还是更好的通用学习目标。
</div>

---

# 模型与 harness：能力和操作说明书

<div class="grid grid-cols-2 gap-5 mt-5 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 自家 harness

RL、synthetic data 与评估最容易在自己完全理解的 harness 上保持科学严谨。

因此自家模型在自家环境里通常略占优势。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Multi-harness polishing

少量训练帮助模型适应其他 tool formats 与 reasoning patterns。

它改善体验与迁移，但不是主要能力来源。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
Harness 像任务说明书：更聪明的人可以自己摸索，但拿到合适工具与步骤的人，会以更低成本完成同一任务。
</div>

---
layout: two-cols
---

# 极简 harness：把自由度交还给模型

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-lg italic">
“give the model a minimal harness as minimal as possible”
</div>

<div class="mt-5 space-y-3 text-sm">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">给它 shell、文件、代码库与虚拟机</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">让它自己写脚本、循环、条件与状态</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">API key、数据源和文档以环境能力存在</div>
</div>

<div class="mt-5 text-xs opacity-60">
事实整理 · Poolside 自家 harness 被描述为大约 6 个简单工具
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./minimal-harness.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# MCP 与 tools 的挑衅：代码才是通用接口

<div class="mt-5 p-5 rounded bg-red-50 border-l-4 border-red-500 text-2xl italic">
“I think MCP and tools are stupid.”
</div>

<div class="grid grid-cols-2 gap-5 mt-6 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">
几十个工具 schema 塞进 system prompt，模型一次挑一个调用；复杂性留在外部编排层。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
模型直接写代码，在 VM 内使用 if、for、文件与进程；复杂性由通用语言表达。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
他同时说明 Poolside 仍支持 MCP、tools 与 parallel tool calling。这是对长期形态的判断，不是对当前兼容性的拒绝。
</div>

---

# 多模态的取舍：视觉要做，音频先不做

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<strong>视觉理解</strong><br/><br/>
被视为下一项重要能力：既支持现实任务，也可能推进更一般的智能。
</div>

<div class="p-5 rounded bg-yellow-50 border-t-4 border-yellow-500">
<strong>音频</strong><br/><br/>
不是技术上做不到，而是短期不够接近 Poolside 当前的 AGI 路径。
</div>

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>语言</strong><br/><br/>
继续作为核心投入，因为它对知识、推理与代码具有更高的计算回报。
</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>作者概括</strong>：真正的战略不是列出什么都想做，而是把每个 no 直接兑换成研究员时间与 compute。
</div>

---

# 为什么语言仍是最高密度的载体

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一篇 20–30 页论文

压缩了作者长时间的思考、实验与推理；少量 bits 里包含很高密度的知识结构。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 一段 50 分钟视频

同样可以很有价值，但按原始视觉信号训练时，知识与推理的 signal-to-noise / compute ratio 更低。

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>作者概括</strong>：不是语言更真实，而是在 compute 与团队都有限时，它对 Poolside 当前目标提供更高的单位训练价值。
</div>

---
layout: two-cols
---

# RL 的瓶颈：日历时间

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
RL 可用任务有限，batch size 不能像 Web pre-training 那样无限扩张
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
继续堆 GPU 不能线性缩短时间，post-training 成为发布的 wall-clock bottleneck
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
把 prefill / decode 分配到不同硬件，以及更低精度 RL，是可见的效率方向
</div>

</div>

<div class="mt-5 p-3 rounded bg-slate-50 border-l-4 border-slate-500 italic">
“time is the only thing that matters”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./calendar-race.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 开放不是永远无条件，也不是现在就封死

<div class="grid grid-cols-2 gap-6 mt-5 text-left text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 现在

Kant 判断，当前能力还没有到必须全面限制开放模型的程度；过早筑墙会固化少数公司的地位并伤害创新。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 未来

如果出现真实、具体的滥用能力，就必须重新评估：可能改变训练方式、开放不同版本或限制某些能力。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
他更信任民主政府与可问责过程来决定公共边界，而不是让单个公司单方面控制谁能使用智能、如何使用。
</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括</strong>：治理对象应尽量落到具体 capability 与 misuse，而不是用 open / closed 的二元标签替代风险分析。
</div>

---
layout: two-cols
---

# 高 agency 需要边界，而不是无边界

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">
“agency becomes probably one of the most important”
</div>

<div class="mt-4 space-y-3 text-sm">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">从过往行为找 agency：真正拥有它的人已经在做事</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">领导者提供共同结果，让高 agency 个体朝同一方向用力</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">明确不做什么，避免组织退化为争资源的探索算法</div>
</div>

<div class="mt-4 text-xs opacity-60">
作者概括 · 图中 lanes 对应嘉宾所说的 common goal 与 boundaries
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agency-lanes.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 时代，工程生产力回到 lead time

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 容易测，但离价值远

代码行数、PR 数、review 数与 task 数，都是过程里的 leading indicators。

Agent 写得越多，这些指标越容易膨胀。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 真正重要

从发现一个对用户有价值的改变，到它真的交付给用户：

<strong>用时多久？经过多少人？</strong>

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
AI-native 组织把 builder 推得更靠近客户与发布面。一个人能端到端完成更多工作，才是 agent 带来的组织变化。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">本集最值得保留的 8 个原文片段；均已回查原始字幕：</div>

<div class="grid grid-cols-2 gap-3 text-left text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“we should have just kept scaling up”
<div class="text-xs opacity-60 mt-1 not-italic">— 回看第一次 code model 创业失败</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“I want to look at a world where there's lots of choice”
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么转向开放路线</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“model building is ultimately 90% engineering”
<div class="text-xs opacity-60 mt-1 not-italic">— 模型工厂的出发点</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“every experiment is truly an ablation”
<div class="text-xs opacity-60 mt-1 not-italic">— 可复现系统如何支撑科学</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“being way more persistent”
<div class="text-xs opacity-60 mt-1 not-italic">— Laguna S 的行为增益</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“I think MCP and tools are stupid”
<div class="text-xs opacity-60 mt-1 not-italic">— 对复杂 agent 接口的挑衅</div>
</div>

<div class="p-3 bg-slate-50 border-l-4 border-slate-500 rounded italic">
“time is the only thing that matters”
<div class="text-xs opacity-60 mt-1 not-italic">— foundation model race 的计量单位</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“innovation comes from constraints”
<div class="text-xs opacity-60 mt-1 not-italic">— 高 agency 团队为何仍需要边界</div>
</div>

</div>

---
layout: end
---

# 不是开放一个模型

<div class="mt-8 text-3xl leading-relaxed italic">
“I want to look at a world where there's lots of choice.”
</div>

<div class="mt-10 text-base opacity-70">
真正要开放的，是继续制造智能的能力。
</div>

<div class="mt-8 text-sm opacity-50">
Eiso Kant · Poolside AI · Latent Space
</div>
