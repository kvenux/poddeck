---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '148. 对游凯超3小时访谈：开源Infra、和模型Co-design 、“如果vLLM失败，我们会后悔一辈子”'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<!-- 01 -->

<div class="text-sm tracking-[0.22em] uppercase text-cyan-700 mb-5">张小珺 · PodDeck</div>

# 对话游凯超

<div class="text-3xl mt-5 font-semibold leading-tight">
vLLM、开源 Infra 与模型 co-design
</div>

<div class="mt-7 text-xl opacity-80">
从校园论文原型，到生产级推理引擎，再到由公司支撑的开源生态
</div>

<div class="mt-9 text-base opacity-70">
vLLM 核心维护者 · 推理基础设施创业者
</div>

<div class="mt-9 inline-flex gap-3 text-xs">
  <span class="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">AI Infra</span>
  <span class="px-3 py-1 rounded-full bg-green-50 border border-green-200">Open Source</span>
  <span class="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">Model Co-design</span>
</div>

<div class="mt-7 text-xs opacity-50">现有 transcript 约 127 分钟 · 2026.07</div>

<!-- title verified: transcript line 2; duration: transcript frontmatter line 7 -->

---

<!-- 02 -->

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 研究评价换坐标
从论文 novelty 转向真实用户、性能收益与可复现的系统贡献。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### vLLM 怎么长大
PagedAttention 只是起点；真正困难的是持续重构、兼容模型与硬件。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 中国开源浪潮
2025 年模型重心变化后，中文社区、公司走访与跨时区协作成为新基础设施。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 开源项目为何要公司
稳定人力、NDA 法务实体与集群资源，决定项目能否跨过生产部署阶段。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Coding Agent 的反作用
代码供给越便宜，维护者越需要过滤噪音、保留上下文并提前判断方向。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 模型与 Infra 共振
Hardware Lottery、RoPE 与 FlashAttention，展示结构设计如何决定效率上界。
</div>

</div>

---

<!-- 03 -->

<h1 class="!text-[32px] !leading-tight">从学编程开始，他就不喜欢重复劳动</h1>

<div class="grid grid-cols-4 gap-4 mt-7 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-600">2015</div>
<div class="mt-3">在学堂在线跟随 Python 课程，第一次认真学习编程语言</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl font-bold text-purple-600">2018</div>
<div class="mt-3">进入 AI 算法研究，亲历投稿规模扩张与审稿质量下降</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-2xl font-bold text-orange-600">2019</div>
<div class="mt-3">在伯克利 RISE Lab 接触机器学习系统与开源传统</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-600">2024</div>
<div class="mt-3">到 Sky Lab 交流，全身心投入 vLLM 的工程与维护</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-slate-50 border border-slate-200 text-left text-sm">
他把选择描述为多年积累的结果：公开课、算法研究的限制、工业界反馈与伯克利系统传统，逐步指向同一条路。
</div>

<!-- evidence: transcript lines 23-26, 34-41, 63-71, 139-145 -->

---

<!-- 04 -->

# 算法研究的问题，不只在算法

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 社区扩张过快
投稿量按几何级数增长，审稿人的数量和质量跟不上；他感受到结果越来越像抽彩票。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 小实验不等于影响
实验室可以在玩具数据集上反复雕花，但大规模实验需要系统、数据和资源一起成立。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 改 1% 会被大模型吞没
微调算法做一年得到的 1%–2% 提升，可能被下一代更大的预训练模型直接覆盖。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left text-sm">
<strong>作者概括：</strong>当效果主要由规模、系统和资源决定时，只优化局部算法，很难稳定积累现实影响。
</div>

<!-- evidence: transcript lines 34-41, 52-58 -->

---

<!-- 05 -->

# 系统研究给了他更确定的反馈

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
<div class="text-2xl italic leading-relaxed">“你可以说我的东西不novel 但是你不可以说我的东西没有用”</div>
<div class="text-xs opacity-60 mt-2 not-italic">— 游凯超谈可量化的系统贡献</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-4 rounded bg-green-50 border border-green-200">

### 指标可验证
加速多少倍、节省多少资源，可以复现，也能解释收益来自哪里。
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

### 用户直接反馈
Star、Issue、感谢信与生产效率，构成论文之外的评价坐标。
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### 正反馈可累积
做更多优化，就得到更多收益；论文变成系统成熟后的副产物。
</div>

</div>

<!-- quote verified: transcript line 103; evidence: lines 102-118 -->

---
layout: two-cols
---

<!-- 06 -->

# 一次转向，背后是尺度变化

<div class="mt-5 space-y-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
早期关注算法的新颖性；后来更看重系统是否被真实用户采用。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
从小数据集、单项算法，转向可以扩到生产负载的工具与基础设施。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
2024 年加入 vLLM 后，核心目标不再是补一篇论文，而是获得亲手构建系统的经验。
</div>

<div class="text-xs opacity-60"><strong>作者示意：</strong>纵轴不是学术地位，而是他在访谈中反复强调的 real-world impact。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-curve.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

<!-- evidence: transcript lines 69-78, 102-118, 139-145 -->

---

<!-- 07 -->

# PagedAttention：想法简单，时间与实验决定成败

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 借鉴操作系统
用虚拟内存式的分页机制，管理自回归生成过程中的 KV cache。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 学术创新不高
游凯超认为，认真分析推理过程的研究者都可能想到；审稿人也批评它过于直接。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 仍然被接收
团队做得早、实验丰富，并满足系统论文的 artifact evaluation 与复现要求。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
真正拉开差距的不是概念复杂度，而是把想法变成可复现原型，再持续维护成工业底座。
</div>

<!-- evidence: transcript lines 157-166 -->

---

<!-- 08 -->

# vLLM 早已不只是一个算法

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-slate-50 border-2 border-slate-200">

### 论文层
PagedAttention 管理 KV cache；Continuous Batching 提高请求调度与设备利用率。
</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### 系统层
适配不断变化的模型与硬件，提供统一接口、部署能力、性能优化与社区协作机制。
</div>

</div>

<div class="mt-7 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-left text-sm">
<div class="text-xl font-semibold">用户只改一个模型参数；推理引擎要吸收背后千差万别的结构、硬件与效率差异。</div>
<div class="mt-3 opacity-70">这也是 vLLM 从论文 artifact 走向基础设施后，维护工作不断扩大的原因。</div>
</div>

<!-- evidence: transcript lines 157-163, 189-192 -->

---
layout: two-cols
---

<!-- 09 -->

# 从原型到基础设施，项目跨过五级台阶

<div class="mt-5 space-y-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
2023 年中开源后，先证明需求与增长；2024 年的主旋律是 V0 → V1 重构。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
2025 年模型和硬件变大，重心转向集群级部署与中国开源模型支持。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
公司成立不是另起炉灶，而是给长期维护补上稳定的人力、法务与算力。
</div>

<div class="text-xs opacity-60"><strong>作者示意：</strong>台阶表示组织与部署成熟度，不代表版本之间的性能倍数。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rsp-ladder.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

<!-- evidence: transcript lines 125-131, 183-192, 398-403 -->

---

<!-- 10 -->

# V0 → V1：前台不变，后台换发电系统

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧原型的边界
论文原型需要走向生产可用，调研其他推理引擎后，团队启动大规模重构。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 变化被屏蔽
终端用户仍然请求 Token，但内部工作原理已经像火电切换到新能源那样改变。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 最难是兼容
模型、硬件持续变化，前端用户仍要求统一体验；因此 vLLM 实际一直处于重构中。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border border-yellow-200 text-left text-sm">
推理引擎的产品价值，很大一部分来自替用户承担变化，而不是让用户感知每一次底层震荡。
</div>

<!-- evidence: transcript lines 183-192 -->

---

<!-- 11 -->

# 2025：开源模型重心转向中国

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 时间正好重叠
游凯超 2024 年 12 月结束交流；DeepSeek V3 随后发布，2025 年初 R1 引发更大关注。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 不是临时救火
DeepSeek 较早就在内部使用 vLLM 的变种，双方已有联系；爆发后，团队反而向其 Infra 优化学习。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 支持变成连续动作
中国开源模型密集发布，社区需要持续适配新结构，而不是为单个热点做一次兼容。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
他回看 2024–2025 的评价很克制：人员变动、新模型和重构同时发生，团队只是把项目撑了下来。
</div>

<!-- evidence: transcript lines 183-187, 197-215 -->

---
layout: two-cols
---

<!-- 12 -->

# 中文社区不是翻译群，而是一座协作桥

<div class="mt-5 space-y-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
原有 Slack 主要使用英文，国内参与者同时面对语言、软件可达性与时区问题。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
团队搭建公众号、知乎等中文渠道，也建立与模型公司和产业伙伴的直接沟通。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
游凯超回国后走访使用方，询问他们如何使用 vLLM、遇到了什么痛点，再把各方连接起来。
</div>

<div class="text-[10px] opacity-60 mt-1"><strong>作者示意：</strong>这座桥同时处理信息、关系和问题回流，而不只是内容分发。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./latent-demand.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

<!-- evidence: transcript lines 218-221 -->

---

<!-- 13 -->

# 维系开源的燃料，是意义感

<div class="mt-6 p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<div class="text-2xl italic leading-relaxed">“我追求的就是意义 就是我做的事情是不是有意义”</div>
<div class="text-xs opacity-60 mt-2 not-italic">— 为什么愿意长期投入一个并非自己发起的项目</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

### 不要求创始人身份
项目缺人时，重要的是能做什么贡献，而不是名字是否排在第一位。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

### 生活需求很简单
学生阶段有吃、有住、有电脑和网络，就能把大量时间投给开源维护。
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### 苦境也在筛人
多年共同维护，让志同道合的贡献者自然变成后来的创业初始团队。
</div>

</div>

<!-- quote verified: transcript line 177; evidence: lines 141-150, 176-181 -->

---
layout: two-cols
---

<!-- 14 -->

# 治理的核心：决定什么不做

<div class="mt-5 space-y-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
项目采用分级治理：少数最终拍板者、约十名核心维护者、几十名 committer，再到更大的贡献者群体。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
Beam Search 被移除，是一次强硬取舍：继续维护会增加模型适配复杂性，却偏离主要大模型负载。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
大集群、新模型与新硬件优先；几百兆小模型的专项性能优化不进入高优先级。
</div>

<div class="text-xs opacity-60"><strong>作者示意：</strong>中心不是功能最多，而是长期目标最清楚。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./character-space.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

<!-- evidence: transcript lines 337-358 -->

---

<!-- 15 -->

# Coding Agent 让代码便宜，也让审查更贵

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 新噪音
培训机构用无价值 PR 包装简历；机器人账号可能在 10 分钟内提交 20 个 PR。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 善意假设被打破
维护者开始认证来源、忽略或拉黑明显的机器账号，并把无营养代码称为 AI slop。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 贡献形式变化
用户更适合提交 bug report 与 feature request；掌握上下文的维护者再让 Agent 写实现。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
<div class="text-2xl italic">“整体上来说代码变得如此廉价”</div>
<div class="text-xs opacity-60 mt-2 not-italic">— 代码供给增加后，稀缺资源转向判断与上下文</div>
</div>

<!-- quote and numbers verified: transcript lines 359-361 -->

---

<!-- 16 -->

# AI 能走 90%，但剩下 10% 决定方向

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 mb-3">90%</div>
<div class="text-xl italic">“AI它可以帮我们走完90%的路程”</div>
<div class="mt-4 opacity-70">代码生成、重写与局部实现，已经能被显著加速。</div>
</div>

<div class="p-6 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 mb-3">10%</div>
<div class="text-xl italic">“还有10%的关键的那个画龙点睛的那一部分”</div>
<div class="mt-4 opacity-70">顶层系统设计、长期维护，以及提前预判未来模型和硬件。</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
vLLM 的维护者要同时想象未来三个月的新模型、半年到一年的新硬件；这类历史上下文仍无法完全交给 AI。
</div>

<!-- quotes verified: transcript lines 375-376; evidence: lines 364-376 -->

---
layout: two-cols
---

<!-- 17 -->

# 为什么开源项目最终需要一家公司

<div class="mt-5 space-y-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
社区成员人来人往，无法稳定规划跨季度的大型 feature，也无法形成固定责任主体。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
新模型、新硬件发布前需要 NDA；开源社区不是法人实体，签约与背景核验都难以完成。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
单机资源曾够用，集群优化却只能四处借机器；资源期限与随时被收回的风险拖慢工程节奏。
</div>

<div class="text-xs opacity-60"><strong>作者示意：</strong>公司补的是生产责任，不是替代社区。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-pillars.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

<!-- evidence: transcript lines 398-403, 447-450 -->

---

<!-- 18 -->

# 创业抉择：短期收入，还是长期后悔

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-slate-50 border-2 border-slate-200">

### 不创业
可以进入大公司、拿高薪，也不必学习融资、招聘和商业化；但 vLLM 的长期维护没有明确承担者。
</div>

<div class="p-6 rounded bg-green-50 border-2 border-green-200">

### 自己开公司
最坏是少拿几年工资，却能把稳定团队、资源和项目方向放在同一组织里。
</div>

</div>

<div class="mt-7 p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
说服最犹豫的合伙人时，他们问的不是公司估值，而是十年后项目若失败，赚到很多钱是否还会快乐。游凯超说，几人的答案最终一致。
</div>

<div class="mt-5 text-xs opacity-60">事实边界：这是游凯超对创始团队决策过程的回忆。</div>

<!-- evidence: transcript lines 251-277, 302-333, 409-418 -->

---

<!-- 19 -->

# 诱惑很具体，拒绝也很具体

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600">$20M</div>
<div class="mt-3">据游凯超回忆，某大厂曾给四位创始人分别开出年薪两千万美元</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">$150M</div>
<div class="mt-3">节目开场介绍，公司在 2026 年初获得 1.5 亿美元种子轮融资</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">多年</div>
<div class="mt-3">真正的先行投入，是创始团队在公司成立前已经共同维护项目多年</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
投资人从 2023–2024 年就以资助开源项目的方式接触团队；公司决定成立后，融资反而不是最难的一步。
</div>

<!-- evidence: transcript lines 13, 308-311, 420-431 -->

---

<!-- 20 -->

# 基金会、公司、社区：三者不是替代关系

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### PyTorch Foundation
持有商标并提供法律上的开源保险；不直接参与日常技术治理。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 创业公司
承担主要技术管理、日常运营、商业化、人力与资源投入。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 开源社区
芯片、云、软件公司与贡献者共同参与；项目商标和使用权不被单家公司垄断。
</div>

</div>

<div class="mt-7 p-6 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
<div class="text-2xl italic">“它是那一道保险杠 保证这个项目它不会闭源”</div>
<div class="text-xs opacity-60 mt-2 not-italic">— 游凯超解释基金会的核心作用</div>
</div>

<!-- quote verified: transcript line 459; evidence: lines 222-247, 456-463 -->

---

<!-- 21 -->

# 商业化边界：不卖人天，按创造的 Token 价值收费

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Endpoint Service
公司提供机器与软件，客户直接按 Token 使用推理服务。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### BYOC
客户提供机器，公司提供软件，在客户环境里生成 Token、节省成本。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 生态合作
与战略客户一起建设 vLLM 生态，但前提是商业需求与社区方向一致。
</div>

</div>

<div class="grid grid-cols-2 gap-5 mt-7 text-left text-sm">
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic">“我们不是技术外包 我们不是在售卖我们工程师的时间”</div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 italic">“我们不接这样的商业客户”</div>
</div>

<!-- quotes verified: transcript lines 452, 471-473 -->

---
layout: two-cols
---

<!-- 22 -->

# Co-design：硬件是资源，模型是发电机

<div class="mt-5 space-y-4 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
硬件像风力、水力与光伏：不同环境给出不同的专用计算资源。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
模型像发电机：结构决定能否把资源有效转成可用计算。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
推理引擎像电力系统：让模型跑在硬件上，再把 Token 分发给用户。
</div>

<div class="text-xs opacity-60"><strong>作者示意：</strong>效率来自跨层共振，不是某一层独立做到极致。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./co-design-stack.excalidraw" class="w-[430px]" :darkMode="false" :background="false" />
</div>

<!-- evidence: transcript lines 485-490 -->

---

<!-- 23 -->

# Hardware Lottery：模型结构先决定效率上界

<div class="mt-6 p-6 rounded bg-red-50 border-l-4 border-red-500 text-left">
<div class="text-2xl italic leading-relaxed">“模型的结构 它决定了推理效率的一个上界”</div>
<div class="text-xs opacity-60 mt-2 not-italic">— 如果结构无法利用专用算力，系统工程师也难以补救</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

### 摩尔定律时期
通用性能持续提高，软件可以相对独立于硬件演进。
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### 专用算力时期
性能红利来自专用单元；算法若不适配，就抽不中硬件彩票。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

### Transformer 的优势
大量矩阵乘法适合 GPU 并行，因此在这轮硬件条件下形成强匹配。
</div>

</div>

<!-- quote verified: transcript line 493; evidence: lines 492-498 -->

---

<!-- 24 -->

# RoPE 与 FlashAttention：好结构会避开系统阻力

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-2xl font-semibold mb-4">许多位置编码</div>
<div>需要修改 Attention 内核；当 FlashAttention 成为长序列训练的关键组件，这类改动门槛很高。</div>
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### RoPE 的接口优势
可以在 Attention 内核之外，独立注入 Query 与 Key，不必重写核心实现。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 共振结果
模型结构与系统实现互补，训练和推理更容易获得高效、可复用的实现。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
<strong>作者概括：</strong>模型创新能否普及，不只看数学性质，也看它是否进入已有高性能内核的工程边界。
</div>

<!-- evidence: transcript lines 499-502 -->

---

<!-- 25 -->

# DeepSeek 的样本：算法与 Infra 双向靠近

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Infra 扩大搜索空间
更强的推理实现能力，让算法研究员能更快、更充分地探索 MoE 等结构选项。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 算法理解系统
受访者提到，DeepSeek 的算法同学也会写高效实现，并学习 Infra 约束。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 组织机制
既懂算法又懂 Infra 的人才最理想；团队一起工作，也能通过日常讨论形成共同语言。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<div class="text-2xl italic">“算法需要主动去靠近infra 然后infra也需要对算法有一些基础的了解”</div>
</div>

<div class="mt-4 text-xs opacity-60">判断边界：游凯超称其为全球顶级团队，但明确没有断言它一定排名第一。</div>

<!-- quote verified: transcript line 508; evidence: lines 503-513 -->

---

<!-- 26 -->

# 投机解码：算法新意必须落到引擎实现

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-semibold mb-4">传统路线</div>
<div>一次猜 3–5 个 Token，猜得短但接受率较高。</div>
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### dFlash 路线
一次可猜约 16 个 Token，速度潜力更高，但错误猜测会浪费验证算力。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 继续优化
根据置信度过滤低概率猜测，例如只验证 16 个候选里的前 8 个，提高有效计算比例。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left text-sm">
受访者的核心判断：算法是否能大规模使用，取决于推理引擎里是否有扎实实现；这又回到 co-design。
</div>

<div class="mt-4 text-xs opacity-60">材料边界：现有 transcript 在本段之后于 02:05:53 处截断，本 deck 不补写缺失内容。</div>

<!-- evidence: transcript lines 515-523 -->

---

<!-- 27 -->

# 核心金句

<div class="text-xs opacity-60 mb-3">以下 8 句均已按 transcript 原文固定字符串检索；标签说明语境。</div>

<div class="grid grid-cols-2 gap-2 text-[11px] leading-snug text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“只要你是一个好的软件总会有人用的”
<div class="text-[10px] opacity-60 mt-1 not-italic">研究选择 · Yang Stoica 的鼓励</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“你可以说我的东西不novel 但是你不可以说我的东西没有用”
<div class="text-[10px] opacity-60 mt-1 not-italic">系统评价 · 可量化贡献</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“我追求的就是意义 就是我做的事情是不是有意义”
<div class="text-[10px] opacity-60 mt-1 not-italic">开源动机 · 为什么长期投入</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“我不敢说我们做得非常好 只能说我们撑过来了”
<div class="text-[10px] opacity-60 mt-1 not-italic">社区维护 · 2024–2025 回顾</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“你要梳理事情的优先级 要做什么 更重要的是不做什么”
<div class="text-[10px] opacity-60 mt-1 not-italic">项目治理 · 过滤噪音</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“AI它可以帮我们走完90%的路程”
<div class="text-[10px] opacity-60 mt-1 not-italic">Coding Agent · 能力边界</div>
</div>

<div class="p-3 rounded bg-teal-50 border-l-4 border-teal-500 italic">
“模型的结构 它决定了推理效率的一个上界”
<div class="text-[10px] opacity-60 mt-1 not-italic">Co-design · Hardware Lottery</div>
</div>

<div class="p-3 rounded bg-pink-50 border-l-4 border-pink-500 italic">
“我们不是技术外包 我们不是在售卖我们工程师的时间”
<div class="text-[10px] opacity-60 mt-1 not-italic">商业模式 · 按 Token 价值收费</div>
</div>

</div>

<!-- all 8 quotes verified with rg -F before writing -->

---
layout: end
---

<!-- 28 -->

# 把好软件做出来，真实世界会回答

<div class="mt-10 text-3xl italic leading-relaxed">
“只要你是一个好的软件总会有人用的”
</div>

<div class="mt-6 text-sm opacity-60">
游凯超转述 Yang Stoica · 张小珺播客
</div>

<div class="mt-10 text-xs opacity-50">
从论文原型到长期基础设施，真正稀缺的是持续的判断、组织与责任
</div>

<!-- quote verified: transcript line 65 -->
