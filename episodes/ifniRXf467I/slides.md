---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'You Kaichao: vLLM, Open-Source Infra, Model Co-Design & Journey from Community to Startup'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<div class="mt-18 text-sm tracking-[0.28em] uppercase text-blue-600 font-semibold">Xiaojun Podcast · PodDeck</div>

# You Kaichao

## vLLM、开源 Infra、模型协同设计，以及从社区到创业

<div class="mt-10 flex justify-center gap-3 text-sm">
  <span class="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">Inferact 联合创始人</span>
  <span class="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">vLLM 核心维护者</span>
  <span class="px-3 py-1 rounded-full bg-green-50 border border-green-200">约 2h 59m</span>
</div>

<div class="mt-12 text-sm opacity-60">一条从论文、系统、开源社区到商业组织的完整演化链</div>

---

# 为什么这期值得听？

<div class="grid grid-cols-3 gap-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 研究选择
为什么从算法论文转向可量化、可复现的系统工程。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### vLLM 演化
PagedAttention 只是起点，真正的价值是持续承接模型与硬件复杂度。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 开源治理
基金会、核心维护者、公司与产业伙伴如何分工。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 创业转折
当人力、算力与 NDA 都越过社区组织能力，成立公司变成基础设施问题。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 极致协同
模型、推理引擎、芯片与 harness 必须共同设计。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Agent 冲击
代码变便宜之后，维护者最稀缺的能力变成判断、上下文与优先级。

</div>

</div>

---

# 他并不把学习理解为刷题

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 起点

- 约 2015 年通过学堂在线学习 Python
- 高中竞赛知识未必直接转化为高考分数
- 进入清华后，把分数视为入场券，而非长期预测器

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 持续方式

- 向教授发邮件，是多门课程长期提问的自然累积
- 笔记数量不是优化目标
- 他强调获得新知识本身带来的满足感

</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“I genuinely enjoyed learning.”
<div class="text-xs opacity-60 mt-2 not-italic">— 游凯超谈大学阶段的学习动力；原文逐字核验</div>
</div>

---
layout: two-cols
---

# 从算法研究走向系统

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>论文机制失真</strong><br>投稿量增长快于审稿能力，反馈的确定性下降。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>规模实验决定结果</strong><br>真正的瓶颈常在机器学习系统与数据，而非局部损失函数技巧。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>产业问题更具体</strong><br>硬件缓存、数据搬运与算子实现，直接决定系统能否工作。
</div>

</div>

<div class="mt-5 text-xs opacity-55">作者概括 · 三股力量共同推动方向转变</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./journey-route.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 算法时代的变化：低垂果实变少了

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 早期
算法研究仍是蓝海，单个方法可能带来基础性变化。

</div>

<div class="p-5 rounded bg-yellow-50 border-2 border-yellow-200">

### 扩张后
会议投稿指数增长，审稿资源没有同步增长；论文命运更像抽签。

</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">

### Scaling 时代
更多计算与数据会吞没局部算法带来的 1%–2% 改进，系统能力成为实验上限。

</div>

</div>

<div class="mt-9 p-4 rounded border-l-4 border-orange-500 bg-orange-50 text-left">
<strong>关键转折：</strong>方法是否优雅不再足够；能否在大规模实验中被稳定实现，开始决定影响力。
</div>

---

# 评价体系换了：从论文到真实使用

<div class="grid grid-cols-2 gap-7 mt-8 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 论文指标

- 新颖性需要反复辩论
- 2%–3% 的精度提升可能难以复现
- 引用量出现得晚，也未必等于实际价值

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 系统指标

- 有多少人真实使用
- 是否带来可解释的性能提升
- 用户是否在 issue 中给出具体反馈

</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 text-left">
“How many people use what you build”
<div class="text-xs opacity-60 mt-2 not-italic">— 他给系统工程设定的核心度量；原文逐字核验</div>
</div>

---

# 一个问题，埋下了四年的伏笔

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<div class="text-2xl font-bold text-blue-600">2019</div>
伯克利暑研，接触 Michael Jordan 与 Ion Stoica 的不同研究取向
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
<div class="text-2xl font-bold text-purple-600">疑问</div>
如果软件没有用户，投入时间是否被浪费？
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
<div class="text-2xl font-bold text-orange-600">实践</div>
Tianshou、OpenMMLab、PyTorch 等开源经验不断累积
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
<div class="text-2xl font-bold text-green-600">2024</div>
回到伯克利，以访问学者身份加入 vLLM 的上升期
</div>

</div>

<div class="mt-8 p-6 text-2xl italic border-l-4 border-green-500 bg-green-50 text-left">
“As long as it's good software, someone will always use it.”
<div class="text-xs opacity-60 mt-2 not-italic">— Ion Stoica 的回答；原文逐字核验</div>
</div>

---

# 伯克利的传统：研究项目要走出实验室

<div class="grid grid-cols-2 gap-6 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 长线谱系
BSD、RISC-V、RAID、Spark、Ray 都被访谈用作同一传统的例子：学生研究项目通过长期维护成为产业基础设施。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 五年周期
David Patterson 的观点是，五年大致对应一个博士培养周期；实验室周期与产业需求周期共振时，重要项目会出现。

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">

### vLLM 的历史窗口
游凯超看到的不是一篇论文的后续维护，而是 Spark、Ray 之后又一次把实验室成果推成行业基础设施的机会。

</div>

<div class="mt-5 text-xs opacity-55">作者概括 · 机会来自技术位置，也来自维护者恰好愿意承担长期工作</div>

---
layout: two-cols
---

# vLLM：一篇论文只是起点

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>PagedAttention</strong><br>借鉴操作系统虚拟内存机制，管理自回归推理中的 KV cache。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>原型系统</strong><br>系统论文要求 artifact evaluation，代码与性能数字必须可复现。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>生产级引擎</strong><br>后来持续加入 continuous batching 与更多推理优化，承接模型、硬件的快速变化。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./vllm-evolution.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# PagedAttention 不等于 vLLM

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 论文层

- 核心是 KV cache 管理
- 点子被评价为简单、直观、创新度偏低
- 早做与大规模实验支撑了论文价值

</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 系统层

- 统一支撑快速变化的模型与硬件
- 提供可部署的完整推理服务
- 通过社区持续吸收后续优化技术

</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“At that point a paper is just a byproduct”
<div class="text-xs opacity-60 mt-2 not-italic">— 当系统已经被大量用户采用，论文成为结果的整理；原文逐字核验</div>
</div>

---

# 加入成熟项目，不必先成为发起人

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 时机合适
博士中后期，既没有最紧迫的论文压力，也愿意花数月解决纯工程问题。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 项目缺人
论文作者很多，但长期全职维护者很少；他自述是早期第四位主要贡献者。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 位置关键
训练模型之后必然需要推理，vLLM 正好占据开源 LLM inference 的关键位置。

</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“It's more about what contributions you can make”
<div class="text-xs opacity-60 mt-2 not-italic">— 回答是否必须亲自发起项目；原文逐字核验</div>
</div>

---

# 开源团队靠什么聚在一起？

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-yellow-50 border-2 border-yellow-200">

### 钱
短期收入与确定性更强，市场也给核心成员提供了大量高薪机会。

</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 权力
在成熟公司里获得更高职位，也是一条可理解的个人路径。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 意义
维护基础设施带来的真实影响，是这批长期成员共同选择的方向。

</div>

</div>

<div class="mt-8 p-6 text-2xl italic border-l-4 border-green-500 bg-green-50 text-left">
“what I pursue is meaning”
<div class="text-xs opacity-60 mt-2 not-italic">— 游凯超谈个人选择；原文逐字核验</div>
</div>

---

# 两年两次变形：先重构，再扩到集群

<div class="grid grid-cols-2 gap-7 mt-8 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 2024 · V0 → V1

- 从实验原型走向生产级可用
- 吸收其他推理引擎的设计
- 在年底启动大规模重构

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 2025 · 大规模部署

- 模型与硬件同时变大
- 开源模型重心明显转向中国
- 优化对象从单机扩展到集群

</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“I can only say we made it through”
<div class="text-xs opacity-60 mt-2 not-italic">— 他对这两年连续维护压力的克制总结；原文逐字核验</div>
</div>

---
layout: two-cols
---

# Token 的电力系统隐喻

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>硬件 = 自然资源</strong><br>风、水、光等资源条件不同，对应不同计算资源与约束。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>模型 = 发电机</strong><br>同样的资源，模型结构不同，理论效率上限也不同。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>推理引擎 = 电网</strong><br>让模型在硬件上运行，并把 token 稳定交付给用户。
</div>

</div>

<div class="mt-5 text-xs opacity-55">作者概括 · 协同设计决定同一套资源能产出多少可用 token</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./power-grid.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 用户接口稳定，内部却一直在重构

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 前台
用户只是更换请求参数，在 DeepSeek、Qwen 等模型间切换。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 后台
模型结构、适配硬件、支持效率可能完全不同，且持续变化。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 引擎职责
在变化中维持统一体验：尽可能让各类模型在各类硬件上运行。

</div>

</div>

<div class="mt-9 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>核心难点：</strong>新结构要加入，旧用户不能被轻易打断；所以 vLLM 的常态不是一次性完成，而是持续重构。
</div>

---

# 中国社区不是翻译站，而是接口层

<div class="grid grid-cols-2 gap-7 mt-7 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 原有阻力

- Slack 以英文为主
- 国内用户访问海外工具存在不便
- 时区与距离让模型公司难以和维护者直接沟通

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 新建连接

- 微信公众号、小红书、知乎等中文渠道
- 逐家拜访国内模型公司
- 把 vLLM 的使用问题、痛点和后续路线连到一起

</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
2025 年中国开源模型集中爆发时，这个本地接口层让项目能更快承接新模型发布。
</div>

---
layout: two-cols
---

# 开源不等于无治理

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>基金会</strong><br>持有商标，提供长期开放的法律护栏；不替项目做日常技术决策。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>最终决策层</strong><br>少数 benevolent dictators 在重要方向上做最后取舍。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>执行层</strong><br>十余位核心维护者、数十位 committers，以及更广泛的贡献者与公司伙伴。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./governance-layers.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 社区为什么必须有公司

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>人力</strong><br>社区成员来来去去，无法长期承诺关键集群功能。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>法律</strong><br>新模型与新硬件发布前需要 NDA，但社区不是法律实体。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>算力</strong><br>单机捐赠已不够；集群资源昂贵、会过期、也可能随时被收回。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./startup-bridge.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 创业选择：机会成本很高，但失败成本可承受

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">2 年</div>
团队从 2023/2024 前后开始反复面对是否创业的问题，直到 2025 年底才真正落地。
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600">$20M / 人 / 年</div>
公司注册前夕，四位创始人收到某顶级科技公司给出的年薪邀请，团队选择拒绝。
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">$150M seed</div>
投资人早已围绕开源项目提供 grant；团队决定创业后完成大额种子轮。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>他的风险计算：</strong>创业失败，最坏是损失几年工资；不创业，项目可能失去可持续维护能力。
</div>

---

# Benevolent dictator 的工作，是删东西

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### Beam Search 案例

- 推荐系统用户仍认为它重要
- 但主流大模型推理范式已经不再匹配
- 继续维护会把模型适配复杂度推向不可维护

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 维护者的判断

- 不是满足每一个请求
- 优先支持大模型、大集群
- 小模型可用，但不承诺专项性能优化

</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
项目越大，真正稀缺的不是可添加的功能，而是能让系统长期可维护的边界。
</div>

---

# 2,000+ contributors 之后，优先级比吞吐量重要

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 做什么
主流模型、主流硬件、主流 workload 的性能与可靠性。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 不做什么
低价值兼容、过时架构、会永久增加维护成本的边缘功能。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 谁来决定
拥有历史上下文、知道未来模型与硬件路线的核心维护者。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
2025 年 GitHub 的贡献活跃度统计中，vLLM 被他说成全站最活跃项目；这份荣誉同时放大了噪音治理成本。
</div>

---
layout: two-cols
---

# Agent 让代码供给过剩

<div class="space-y-3 mt-4 text-left text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>新噪音</strong><br>训练营用无效 PR 包装简历；机器人账号短时间提交大量代码。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>旧假设破裂</strong><br>维护者不能再默认所有社区参与者都善意、都理解项目。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>新瓶颈</strong><br>筛噪音、选方向、保留历史上下文，比生成代码本身更重要。
</div>

<div class="p-3 text-lg italic border-l-4 border-purple-500 bg-purple-50">
“code has become so cheap”
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./code-noise-filter.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 开源贡献的接口，可能从代码退回反馈

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 过去的默认路径

用户发现问题 → 自己修改代码 → 提交 PR → 维护者评审合并

<div class="mt-4 text-sm opacity-70">问题：代码质量和动机越来越难从提交数量中判断。</div>

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 他判断的新路径

用户提交 bug / feature request → 维护者带着完整上下文让 agent 写代码

<div class="mt-4 text-sm opacity-70">价值重心从代码产量转向反馈质量、路线判断与验证。</div>

</div>

</div>

<div class="mt-8 text-xs opacity-55">作者概括 · 这是嘉宾对开源社区演化方向的判断，不是已完成的行业共识</div>

---

# AI 能走 90%，关键 10% 仍依赖人

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### AI 擅长

- 已知问题上的实现与修改
- 在明确边界内生成大量代码
- 重复执行与局部优化

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 人仍承担

- 预判未来三个月的新模型
- 预判未来半年到一年的新硬件
- 带着项目历史做顶层设计

</div>

</div>

<div class="mt-8 p-6 text-2xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“can take us through 90% of the journey,”
<div class="text-xs opacity-60 mt-2 not-italic">— 他随后强调剩余关键部分需要人类提供；原文逐字核验</div>
</div>

---

# 商业化不卖工程师时间

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Endpoint Service
公司提供机器与软件，客户直接使用 token 服务。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### BYOC
客户提供机器，Inferact 提供软件，在客户环境里生成 token。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 生态合作
与战略客户共同改进 vLLM 生态，并探索匹配的商业合作。

</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
<strong>价值度量：</strong>为客户多生成多少 token、节省多少机器成本；目标是 pay-per-use，而非技术外包。
</div>

---
layout: two-cols
---

# 后摩尔时代的硬件彩票

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>通用进步放缓</strong><br>软件不能再等待硬件每两年自然变快。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>计算越来越专用</strong><br>芯片把性能集中在特定 workload，算法必须主动靠近硬件。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>三者必须对齐</strong><br>模型结构给出效率上限，系统实现负责逼近上限，硬件决定可用路径。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./hardware-lottery.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# RoPE 与 FlashAttention：一次成功的接口对齐

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 其他位置编码
许多方案需要改 attention kernel；长序列训练依赖 FlashAttention 后，这个改动门槛过高。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### RoPE 的接口
可以在 attention kernel 外，分别注入 query 与 key，不必重写核心实现。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 结果
算法属性与系统接口互补，训练和推理效率一起受益，方案因此更容易成为主流。

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>作者概括：</strong>技术胜出不只来自理论效果，也来自是否能嵌入当时最重要的基础设施。
</div>

---

# DeepSeek 的强项：算法与 infra 双向靠近

<div class="grid grid-cols-2 gap-7 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Infra 给算法空间

- 高效实现更多模型架构
- 更快、更彻底地探索 MoE 方案
- 把算法原型推到可部署状态

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 算法理解 Infra

- 模型设计主动考虑硬件友好性
- 算法人员参与早期 MoE 实现
- 让 fine-grained MoE 等方案真正跑起来

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
他明确把 DeepSeek 的 infra 团队评价为世界一流，但也拒绝给全球团队做简单排名。
</div>

---

# Speculative decoding：创新与实现是两回事

<div class="grid grid-cols-4 gap-3 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

### 自回归
解码阶段一次生成一个 token，天然效率较低。

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

### 传统猜测
Eagle、MTP 等通常猜 3–5 个 token，接受率较高。

</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### Dflash
一次猜更多，例如 16 个；吞吐更高，但错误猜测造成浪费。

</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

### DSpark
估计哪些猜测更可靠，只验证高置信部分，减少无效计算。

</div>

</div>

<div class="mt-8 p-5 rounded bg-red-50 border-l-4 border-red-500 text-left">
嘉宾认为 DSpark 的算法新颖性有限，但肯定它延续了 DeepSeek 把推理优化做扎实的能力。
</div>

---

# 协同设计首先是组织设计

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 算法视角

- 理论是否合理
- 表达能力是否增强
- 下游精度是否提升

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Infra 视角

- 手头硬件能做什么
- 如何逼近性能极限
- 如何落实算法需求

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
<strong>机制：</strong>让两类人坐在一起工作、吃饭与日常讨论，彼此吸收对方的约束；双背景人才稀缺，组织不能只靠招聘解决。
</div>

---

# Token 像电，却不是标准化电力

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 电力可调制
电压、频率可以转换，家用设备只需适配统一插座标准。

</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### Token 不可互换
DeepSeek 的 token 不能转换成 Kimi 的 token；模型能力、指令风格与 harness 适配都不同。

</div>

</div>

<div class="mt-8 p-6 text-2xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“A token carries the imprint of its model”
<div class="text-xs opacity-60 mt-2 not-italic">— 对 token 异质性的核心判断；原文逐字核验</div>
</div>

---

# 支持 200–300 种架构，价值就是扛住复杂度

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">200–300</div>
vLLM 当前支持的模型架构数量级。
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600">持续删除</div>
不再使用的架构、过时功能和低优先级复杂度必须被主动修剪。
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">三重主流</div>
主流模型 × 主流硬件 × 主流 workload 才是性能优化中心。
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
通用推理引擎的护城河，不是单一模型上的极致，而是用可维护的抽象承接生态异质性。
</div>

---

# MoE 给推理系统带来三类难题

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 1 · Fine-grained experts
专家越细，矩阵乘法维度越小；模型效果与硬件效率之间需要权衡。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 2 · Dynamic routing
每个 token 动态选择专家，破坏 GPU 更擅长的静态数据流。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 3 · Expert parallelism
万亿参数只激活一小部分，要求复杂的专家并行、数据并行与通信设计。

</div>

</div>

<div class="mt-8 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
访谈把 DeepEP 与 DeepGEMM 视为 DeepSeek 在 2025 年针对这些系统难题给出的代表性方案。
</div>

---

# Test-time scaling 已经换了三种形态

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Ensemble
同一问题多模型或多次回答，再组合结果；扩展的是尝试次数。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 长思考
单次请求输出更长推理链；扩展的是一次输出的 token 数量。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Coding agent
多次短思考并持续与环境交互；扩展的是交互轮数与运行时间。

</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
三种 scaling 对推理系统提出的 workload 完全不同；Agent 场景尤其依赖稳定前缀与 prefix caching。
</div>

---
layout: two-cols
---

# Harness × Infra 协同设计

<div class="space-y-4 mt-7 text-left text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>稳定前缀</strong><br>历史状态保持一致，下一轮请求才能复用已计算结果。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>频繁变化的前缀</strong><br>动态工具范围、日期、秒级时间戳会不断使 cache 失效。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>更好的接口</strong><br>把当前日期作为工具，需要时查询；不要把它固定塞进 system prompt 前部。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agent-prefix.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 整点出发的龙虾，为什么会冲击推理系统

<div class="grid grid-cols-4 gap-3 mt-7 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

### 1
Harness 把当前时间写进每次请求，而且精确到秒。

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

### 2
每个请求前缀都变化，prefix cache 无法复用。

</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### 3
所有定时任务都设在整点，流量同步爆发。

</div>

<div class="p-4 rounded bg-red-50 border border-red-200">

### 4
推理系统同时面对 cache miss 与流量尖峰。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
月之暗面团队把这个现象形容成一群龙虾整点出发攻击月球。解决方式并不神秘：随机打散任务时间，并把易变信息移出前缀。
</div>

---

# 中美 Infra 的约束并不对称

<div class="grid grid-cols-2 gap-7 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 中国

- 高端算力更紧缺
- 需要把多种可用计算资源充分利用
- 更重视国产芯片适配与效率
- 土地、电力供给相对充足

</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 美国

- 高端芯片供给更充足
- 云上可快速扩容
- 土地与电力供给成为新一轮基础设施瓶颈
- 顶级模型更多走闭源路线

</div>

</div>

<div class="mt-7 text-xs opacity-55">作者概括 · 这是嘉宾在本集中的结构性观察，不代表完整国别比较</div>

---

# 第一性原理不是口号：先问系统应该具备什么

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 表层优化
只改别人的代码、跑速度，却不知道提升来自哪里；结果像抽奖。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### CUDA coredump 故事
从 GPU 编程模型推断驱动层应该存在故障转储工具，再持续向 NVIDIA 团队追问。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 找回主线
工具其实长期存在，只是 AI infra 圈知道的人很少；推广后解决了大量 illegal memory access 调试问题。

</div>

</div>

<div class="mt-8 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 text-left">
“Only algorithms that get efficiently implemented ultimately survive.”
<div class="text-xs opacity-60 mt-2 not-italic">— 对硬件彩票与系统实现关系的总结；原文逐字核验</div>
</div>

---

# 一个克制的 hot take：百万 token 可能已经够长

<div class="grid grid-cols-2 gap-7 mt-7 text-left text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 面向人类交互
他判断上下文需求可能停留在百万 token 量级，不必持续大幅增加。

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 面向特殊科学数据
生物化学等领域可能需要千万乃至亿级上下文，需求并不相同。

</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
长期任务与终身学习，可以借助 memory、skills、sub-agents 等外部模块，而不是把所有历史都塞进单次上下文。
</div>

<div class="mt-5 text-xs opacity-55">嘉宾明确称其为 hot take，并建议几年后再回看是否正确</div>

---

# 最终判断：开放模型会赢，vLLM 做通用推理层

<div class="grid grid-cols-3 gap-5 mt-7 text-left text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型难以长期隐藏
被广泛使用后，用户会积累自己的数据，能力优势很难维持一整年。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 通用推理仍有位置
模型公司内部引擎往往依赖其完整集群控制，难以直接部署到各种外部环境。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Linux 路径
vLLM 接受不同云、芯片与模型约束，以不那么极致但更通用的方式运行开放模型。

</div>

</div>

<div class="mt-8 p-6 text-2xl italic border-l-4 border-orange-500 bg-orange-50 text-left">
“Open-source models will win in the end.”
<div class="text-xs opacity-60 mt-2 not-italic">— 游凯超给出的当前关键下注；原文逐字核验</div>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">8 条均已逐字 grep 回查本集 transcript</div>

<div class="grid grid-cols-2 gap-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“How many people use what you build”<div class="text-xs opacity-60 mt-1 not-italic">— 系统工程的度量</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“As long as it's good software, someone will always use it.”<div class="text-xs opacity-60 mt-1 not-italic">— Ion Stoica 的鼓励</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“It's more about what contributions you can make”<div class="text-xs opacity-60 mt-1 not-italic">— 加入已有项目</div></div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“what I pursue is meaning”<div class="text-xs opacity-60 mt-1 not-italic">— 个人选择</div></div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">“code has become so cheap”<div class="text-xs opacity-60 mt-1 not-italic">— Agent 时代的社区变化</div></div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“A token carries the imprint of its model”<div class="text-xs opacity-60 mt-1 not-italic">— Token 并非标准商品</div></div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“Only algorithms that get efficiently implemented ultimately survive.”<div class="text-xs opacity-60 mt-1 not-italic">— 硬件彩票</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“Open-source models will win in the end.”<div class="text-xs opacity-60 mt-1 not-italic">— 当前关键下注</div></div>

</div>

---
layout: end
---

# “Open-source models will win in the end.”

<div class="mt-8 text-lg opacity-70">而 vLLM 想成为开放模型世界里的通用推理基础设施。</div>

<div class="mt-14 text-sm opacity-50">You Kaichao × Xiaojun Podcast · PodDeck</div>
