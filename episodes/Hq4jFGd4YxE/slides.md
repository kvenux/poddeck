---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '对话叶奇意：“寻找”月之暗面杨植麟、中国两代AI、十年人才迁徙，与AGI信仰'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig: {}
---

<div class="h-full flex flex-col justify-center items-center">

<div class="text-sm tracking-[0.28em] text-pink-600 mb-5">硅谷101 · 深度对谈</div>

# 对话叶奇意

<div class="text-[34px] leading-tight font-semibold max-w-[820px] mt-3">
寻找月之暗面杨植麟、中国两代 AI、<br>十年人才迁徙，与 AGI 信仰
</div>

<div class="mt-8 text-lg opacity-70">从 Kimi 的 A1 轮，回望中国 AI 的十年传承</div>

<div class="mt-10 text-sm opacity-55">叶奇意 Kiwi · AI 投资人、创业者　｜　约 70 分钟</div>

</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-5 text-left text-sm">

<div class="p-4 rounded bg-pink-50 border-l-4 border-pink-500">

### K3 的意义
中国开源模型的评价坐标，从性价比进一步转向前沿能力。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一次长达四个月的寻找
投资人如何从相信 AGI 的人群里，追踪到杨植麟与月之暗面。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 两代 AI 的传承
实验室、AI 四小龙与新一代模型公司之间，人才和经验持续迁徙。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 理想与资源的拉扯
算力、融资、收入和 DAU，如何改变创业公司的目标函数。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AI 1.0 的失败教训
泛化不足让模型公司滑向高成本服务，这个教训至今仍在影响判断。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 模型之后的产品
真正的壁垒也许不是 API，而是能持续产生反馈、上下文与新智能的环境。

</div>

</div>

---

# 一位观察者的十年坐标

<div class="grid grid-cols-4 gap-4 mt-8 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl font-bold text-blue-700">2016</div>

### 依图
加入计算机视觉创业公司，成为第一批产品经理之一，亲历 AI 1.0 的落地困境。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl font-bold text-purple-700">2018</div>

### 创新工场
进入 AI 工程院，追踪前沿论文并尝试把算法突破产品化、公司化。
</div>

<div class="p-4 rounded bg-pink-50 border-t-4 border-pink-500">
<div class="text-2xl font-bold text-pink-700">2023</div>

### 美团龙珠
推动并主导月之暗面 A1 轮领投，连接早期团队需要的工程人才。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-2xl font-bold text-green-700">现在</div>

### 再次创业
离开美团，尝试让普通人更平等地使用智能，聚焦人与人之间的互动。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left text-sm">
她的价值不在于替模型公司写胜负榜，而在于把人才、组织、资本和技术周期放回同一张图里。
</div>

---
layout: two-cols
class: diagram-slide
---

# 寻找杨植麟：从 AGI 信念开始

ChatGPT 发布后，团队体验约一周，判断这不只是 NLP 的细分任务，而可能是具备泛化性的智能萌芽。

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
先与上一代研究员、工程师及 NLP、强化学习从业者密集交流。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
再按对 AGI 的信念与技术兴奋程度，逐步缩小候选名单。
</div>

</div>

<div class="mt-5 p-4 text-xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded">
“人才永远都是锚点”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./talent-anchor.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# 为什么杨植麟排在名单前列

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-sm font-bold text-blue-700">2019 · Google 实习</div>

### Transformer-XL 与 XLNet
对谈把论文命名中的 XL 视为一个线索：他很早就在追求 Transformer 的规模化。
</div>

<div class="p-5 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-sm font-bold text-purple-700">智源研究院阶段</div>

### CPM 与 GLM
唐杰、杨植麟、刘知远等研究者，已经在探索仅解码器路线的规模化。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-sm font-bold text-green-700">随后一年</div>

### 盘古 1.0
在另一支大模型团队中再次看到他的参与，形成持续追踪同一方向的证据链。
</div>

</div>

<div class="mt-7 p-4 rounded bg-pink-50 border-l-4 border-pink-500 text-left">
<strong>对谈中的判断：</strong>真正重要的不是一次成功履历，而是 ChatGPT 之前就反复出现的研究轨迹。
</div>

---
class: compact-title
---

# 四个月没聊上，信任却先建立了

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>① 触达团队</strong><br>叶奇意三次拜访杨植麟此前的 AI 公司，并先后交流其他联合创始人。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>② 连接人才</strong><br>从上一代 AI 四小龙中寻找系统、基础设施与工程人才，介绍给早期团队。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>③ 面对拒绝</strong><br>她回忆约 80% 的旧同事拒绝再次入场；经历过周期的人有失败路径依赖。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>④ 获得背书</strong><br>少数被说动的工程师加入后，用实际表现为她建立信任，最终促成见面。
</div>

</div>

<div class="mt-6 p-4 text-xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“我们去追到底谁相信AGI”
</div>

---

# 2023 年，杨植麟给出的 AGI 路标：LTV

<div class="grid grid-cols-3 gap-5 mt-7 text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-5xl font-bold text-blue-600">L</div>

### Long Context
更长的上下文，让模型处理长材料与连续任务。
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-5xl font-bold text-green-600">T</div>

### Truthfulness
降低幻觉、提高可靠性，是走向通用智能的基础约束。
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-5xl font-bold text-purple-600">V</div>

### Video / 多模态
文本数据被逐步穷尽后，需要更多模态补充智能所需的数据与技能。
</div>

</div>

<div class="mt-7 text-sm opacity-70">同一个缩写，在商业语境里是 Lifetime Value；在这次技术交流中，它被重新解释成三条研究方向。</div>

---
layout: two-cols
class: diagram-slide
---

# A1 轮：答案未明

<div class="space-y-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
相信缩放定律，就意味着资本开支可能像无底洞；传统一级市场很难承载。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
争议集中在创业公司能否同时做出超级模型与超级应用，内部并未形成确定答案。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
王兴在离开投委会前留下的决策信号，把讨论继续推向投资。
</div>

</div>

<div class="mt-5 p-4 text-2xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“但我愿意支持一把”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agi-bet.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# 2024：追求 AGI 与证明自己能追求 AGI

<div class="grid grid-cols-2 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 用户增长也能反哺训练
长上下文带来真实用户与新任务；这些任务可能继续为强化学习提供数据。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 但 AGI 极度消耗资源
训练和推理都需要成本，创业公司必须持续说服资源持有者。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ToC 竞争又几乎不收费
创业公司直接面对有大厂供血的产品，收入与 DAU 压力由此上升。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 两套目标并不总是一致
纯粹提升模型能力，与向外界证明商业和增长能力，可能产生微妙偏移。
</div>

</div>

<div class="mt-6 text-sm opacity-65">这一页复述的是叶奇意对 2024 年创业模型公司共同处境的解释。</div>

---
layout: two-cols
class: diagram-slide
---

# R1 改变的，首先是资源方

叶奇意把 2025 年初 DeepSeek R1 视为转折点：开源思维链让更多技术界与普通用户看见模型能力如何形成。

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
她认为，这场市场教育不只是面向模型公司，更是让资本与算力持有者减少对短期收入和 DAU 的追问。
</div>

<div class="mt-6 p-4 text-xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“你把模型踏踏实实给做好”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./r1-reset.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# K3：评价坐标不再只是性价比

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### K2
让中国模型在智能体能力上进一步接近前沿模型，差距被描述为小半代或几个月。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### K2.5
OpenClaw 热潮放大了 token 成本，性价比高的开源模型成为许多日常任务的现实选择。
</div>

<div class="p-4 rounded bg-pink-50 border-t-4 border-pink-500">

### K3
叶奇意认为，K3 发布时已能触及当时的前沿能力，这使中国开源模型的意义发生变化。
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-4 text-center text-xl font-semibold">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">“我们不是在拼性价比”</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">“而是说我们可以去摸那个SOTA模型”</div>
</div>

<div class="mt-4 text-xs opacity-60">关于 K3 与其他模型的比较均为嘉宾在对谈中的判断。</div>

---
class: compact-title
---

# 2025 的 Scaling：从存量数据走向任务审美

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>存量阶段</strong><br><br>预训练与监督微调，更多依赖已经被记录下来的数据。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>强化阶段</strong><br><br>预定义问题与奖励，在测试时计算上继续扩展。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<strong>研究重心</strong><br><br>定义什么是好任务、好问题，以及问题应如何评价。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>新的机会</strong><br><br>资源不占绝对优势的团队，也能靠任务选择与评价标准拉动模型。
</div>

</div>

<div class="mt-7 p-5 text-2xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“taste（品味）的这个价值会更加显现”
</div>

---

# 月之暗面的摇滚气质，映射的是探索方式

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-pink-50 border-t-4 border-pink-500">

### 白色钢琴
办公室入口最显眼的物件，不是产品大屏，而是一架白色钢琴。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### Pink Floyd
钢琴上摆着 Pink Floyd 唱片，会议室也以摇滚乐队命名。
</div>

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 清华乐队
对谈提到，几位主创在清华时期都曾组建过摇滚乐队。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 不以有用为起点
探索 AGI 时，团队无法预先知道扩展会涌现什么能力，先有好奇心与探索欲。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
叶奇意把这种文化理解为：允许优秀的人先追一个当下未必能立刻产品化的问题。
</div>

---
layout: two-cols
class: diagram-slide
---

# 好环境，本身就是奖励函数

在她看来，两代优秀 AI 公司共有的能力，是给聪明、好奇、理想主义的年轻人足够宽松的探索空间。

<div class="mt-5 space-y-3 text-sm">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">目标不是预先拆成 A、B、C，而是提出值得探索的方向。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">组织持续调节反馈和奖励，让研究者在环境中自我迭代。</div>
</div>

<div class="mt-5 p-4 text-xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“他们就能碰撞出东西”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./reward-environment.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# AI 1.0 的核心陷阱：每扩一个场景，就重做一遍

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>换地区</strong><br><br>风、雨、雪、雾不同，需要重新标注与训练。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>换摄像头</strong><br><br>覆盖范围、高度与角度改变，模型再次适配。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<strong>扩业务</strong><br><br>更多项目带来更多研发与现场服务，不是标准软件复制。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<strong>结果</strong><br><br>最优秀、成本很高的理科毕业生，被投入到持续定制的高级外包中。
</div>

</div>

<div class="mt-7 p-5 text-2xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“模型的泛化程度是不够的”
</div>

---
layout: two-cols
class: diagram-slide
---

# 两条完全不同的规模曲线

<div class="space-y-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 互联网式标准系统
用户量上升后，边际成本逐渐下降，甚至趋近于零。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AI 1.0 服务模式
业务体量越大，研发、交付与管理成本同步增加，复杂度继续上升。
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<span class="text-xs font-bold text-blue-700">作者概括</span><br>技术影响力很强，并不自动等于可扩展的商业模式。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./cost-curves.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# 依图的产品经理，用踩坑完成训练

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-3xl font-bold text-blue-700 mb-2">01</div>

### 放养
2016 年，三位新同事被告知产品团队成立，每人接手一条产品线与对应研究、工程伙伴。
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-3xl font-bold text-orange-700 mb-2">02</div>

### 犯错
没有标准答案，也没有预先完整的流程；问题、风险与协作缺口通过真实项目暴露。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-3xl font-bold text-green-700 mb-2">03</div>

### 自我迭代
检查点、评审与组织形式，都来自团队对具体问题的复盘，因此能力更容易迁移到新场景。
</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
这段经历解释了她为何反复强调环境：流程不是先验答案，而是反馈被组织吸收后的结果。
</div>

---
layout: two-cols
class: diagram-slide
---

# 十年人才迁徙：探索方式的传承

对谈描绘了一条连续的 AI 人才河流：更早的研究机构培养 AI 1.0 创始人，上一代公司又成为 AI 2.0 的人才与工程经验来源。

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
人员并非简单复制到下一家公司；创业挫折、工程经验、学术网络与共同记忆都会改变这一代团队。
</div>

<div class="mt-6 p-4 text-xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“不计结果地去探索”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./talent-river.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# 同样招聪明人，人才为何分布不同

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### DeepSeek
量化公司的招聘惯性，更容易触达年轻的 ACM、NOI 人才；团队年龄分布也更年轻。
</div>

<div class="p-4 rounded bg-pink-50 border-t-4 border-pink-500">

### Moonshot / MiniMax
联合创始人的上一代 AI 公司背景，使其更高效触达四小龙时期的中坚研究与工程人才。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 智谱
脱胎于清华实验室，在对应院系与届次的学生中拥有更密集的连接。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
<strong>叶奇意的判断：</strong>差异未必来自人才审美，而是最早几位创始人的身份和环境，改变了他们触达不同人群的效率。
</div>

---

# 2019 中文 GPT-2：人、卡、数据都齐了，然后失败

<div class="grid grid-cols-4 gap-3 mt-6 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-2xl font-bold text-blue-700">论文</div>
团队研究 GPT-2，明确需要数据、算力与 NLP 人才。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-2xl font-bold text-purple-700">几百台 V100</div>
一位中东 LP 的闲置资源，为实验意外补齐了算力。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-2xl font-bold text-orange-700">训练两个月</div>
模型完成训练后，团队开始尝试最简单的邮件生成。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-2xl font-bold text-red-700">结果</div>
问题没有被归因到数据工程与清洗，而先被归因于中文语料质量。
</div>

</div>

<div class="mt-7 p-5 text-2xl font-semibold bg-red-50 border-l-4 border-red-500 rounded text-center">
“它给我连续出三个逗号”
</div>

---
class: compact-title
---

# 2020：再试，仍困在 AI 1.0

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 补工程
孵化澜舟科技时，加入更多工业界工程人才，重视那些不显眼却关键的数据工作。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 补数据
相比 2019 年，团队更重视数据清洗与处理，也更清楚研究和工程需要配合。
</div>

<div class="p-5 rounded bg-red-50 border-t-4 border-red-500">

### 但没换范式
对缩放定律理解仍不到位，最终还是寻找 ToB 垂直场景，按上一代方式出售模型能力。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
失败路径依赖不只是害怕再创业，也可能让团队用旧时代的问题模板，解释新时代的技术。
</div>

---
layout: two-cols
class: diagram-slide
---

# 模型是基建，壁垒在产品

<div class="space-y-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
API、SDK 以及部分脚手架能力，长期可能逐步商品化。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Claude Code 的价值不只在模型：编程环境提供工具、上下文与及时反馈。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
真正更有想象力的产品，会在人与 AI 的互动中持续生产新的智能。
</div>

</div>

<div class="mt-5 p-4 text-xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“卖模型能力真不是一个好生意”
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./intelligence-flywheel.excalidraw" class="w-[450px] max-h-[430px]" :darkMode="false" :background="false" />
</div>

---

# SOTA 领先只给你一个时间窗口

<div class="grid grid-cols-4 gap-3 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<strong>人无你有</strong><br><br>模型高速发展期，领先者拥有定价权和超额利润。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">
<strong>窗口有限</strong><br><br>技术领先很难永久保持，追赶者会逐步接近。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<strong>建立环境</strong><br><br>利用领先期，让更多任务、反馈与新数据发生在自己的产品里。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<strong>形成飞轮</strong><br><br>环境继续推动模型与产品迭代，才能把短期领先变成长期壁垒。
</div>

</div>

<div class="mt-7 p-5 text-2xl font-semibold bg-red-50 border-l-4 border-red-500 rounded text-center">
“所有的模型能力会被拉平”
</div>

---

# 大厂与 AI 原生公司的角色并不相同

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-blue-50 border-t-4 border-blue-500">

### 字节：生态闭环
Seedance、AI 短剧与内容平台，把模型的生产、消费、分发连接成反馈闭环。
</div>

<div class="p-5 rounded bg-orange-50 border-t-4 border-orange-500">

### 阿里：基础设施
叶奇意强调其投资与算力资源对国内模型生态的支撑，把它比作圈地运动的支持者。
</div>

<div class="p-5 rounded bg-green-50 border-t-4 border-green-500">

### 腾讯：交互环境
即便模型暂未进入她所说的第一梯队，微信仍可能是极其重要的人机交互环境。
</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
同一种模型能力，放进不同的组织、分发系统与用户关系中，会长出完全不同的产品反馈。
</div>

---

# 最后的产品问题：谁被留在输入框外

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### AI 世界的一等公民
会写提示词、能构建智能体循环、懂工程验证的人，可以把开放输入框变成生产工具。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### AI 世界的二等公民
面对同一个输入框，却难以提出高质量任务，也无法判断产物是否可靠、可维护。
</div>

</div>

<div class="mt-6 p-5 text-2xl font-semibold bg-yellow-50 border-l-4 border-yellow-500 rounded text-center">
“我持续地觉得我是AI产品的二等公民”
</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-left text-sm">
她由此提出下一步产品使命：不要只做更强的开放输入框，而要让普通人更平等地获得智能，并把工具嵌入真实的人际互动。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">六句话，串起寻找、下注、代际教训与产品方向。</div>

<div class="grid grid-cols-2 gap-3 text-left text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded font-semibold">
“人才永远都是锚点”
<div class="text-xs opacity-60 mt-1 font-normal">— 寻找中国 AGI 创业团队的起点</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded font-semibold">
“但我愿意支持一把”
<div class="text-xs opacity-60 mt-1 font-normal">— 王兴在 A1 轮投委会上的决策信号</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded font-semibold">
“我们不是在拼性价比”
<div class="text-xs opacity-60 mt-1 font-normal">— 叶奇意谈 K3 带来的坐标变化</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded font-semibold">
“模型的泛化程度是不够的”
<div class="text-xs opacity-60 mt-1 font-normal">— AI 1.0 滑向重服务模式的根因</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded font-semibold">
“卖模型能力真不是一个好生意”
<div class="text-xs opacity-60 mt-1 font-normal">— 对模型商品化与产品壁垒的判断</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded font-semibold">
“我持续地觉得我是AI产品的二等公民”
<div class="text-xs opacity-60 mt-1 font-normal">— 新一代 AI 产品要解决的普惠问题</div>
</div>

</div>

---
layout: end
---

<div class="text-sm tracking-[0.25em] opacity-55 mb-6">从模型竞赛，回到人与人的互动</div>

<div class="text-4xl leading-relaxed font-semibold max-w-[820px] mx-auto">
“我们怎么样去重建意图的一个过程”
</div>

<div class="mt-8 text-sm opacity-60">— 叶奇意谈她正在探索的产品方向</div>

<style>
:global(.slidev-layout.diagram-slide h1) {
  font-size: 2rem !important;
  line-height: 1.12 !important;
  margin-bottom: 0.8rem !important;
}

:global(.slidev-layout.compact-title h1) {
  font-size: 2.5rem !important;
  line-height: 1.08 !important;
}
</style>
