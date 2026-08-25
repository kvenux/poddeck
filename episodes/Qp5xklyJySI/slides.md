---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '🔬They Thought the Model Was Broken — Matt McPartlon & Neil Patil, Chai Discovery'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationX: ''
  paginationY: ''
---

<style>
.kicker { color: #64748b; font-size: .78rem; letter-spacing: .09em; text-transform: uppercase; }
.muted { color: #64748b; }
.chip { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 999px; padding: .22rem .62rem; font-size: .72rem; color: #334155; background: #f8fafc; }
.label { font-size: .66rem; letter-spacing: .08em; text-transform: uppercase; color: #64748b; font-weight: 700; }
.tiny { font-size: .72rem; line-height: 1.42; }
.small { font-size: .82rem; line-height: 1.48; }
.quote { font-family: "Source Serif Pro", Georgia, serif; font-style: italic; }
.source-note { color: #64748b; font-size: .64rem; }
</style>

<div class="kicker">Latent Space · AI for Science</div>

# They Thought the Model Was Broken

<div class="mt-3 text-2xl font-semibold text-slate-700">
Chai Discovery：当蛋白质设计从筛选实验变成工程系统
</div>

<div class="mt-7 flex justify-center gap-2 flex-wrap">
  <span class="chip">protein design</span>
  <span class="chip">antibodies</span>
  <span class="chip">Chai-1 / 2 / 3</span>
  <span class="chip">wet-lab loop</span>
  <span class="chip">scientific software</span>
</div>

<div class="mt-9 text-sm muted max-w-2xl mx-auto leading-relaxed">
Matt McPartlon 与 Neil Patil 拆解模型、实验、产品和基础设施如何共同把药物发现推向可声明、可验证、可迭代的精密工程。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="label">能力跃迁</div>
<div class="font-bold text-blue-900 mt-1">从预测到生成</div>
<div class="tiny mt-2">Chai-1 预测三维结构；Chai-2 同时生成序列与结构；Chai-3 继续逼近高亲和力与可开发性。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="label">反直觉结果</div>
<div class="font-bold text-green-900 mt-1">误差小到像发错文件</div>
<div class="tiny mt-2">模型预测与 cryo-EM 结果叠加后几乎看不出差别；复核后确认误差只有 0.33 Å。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="label">产品形态</div>
<div class="font-bold text-purple-900 mt-1">不是聊天框，而是 CAD</div>
<div class="tiny mt-2">用户加载分子、涂选 epitope、生成 binder，再完成结构分析与结果筛选。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="label">工作流</div>
<div class="font-bold text-orange-900 mt-1">瀑布变成闭环</div>
<div class="tiny mt-2">模型给出候选，实验返回测量，再把结果送回下一轮，而非让每个阶段等待数月到数年。</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="label">真实瓶颈</div>
<div class="font-bold text-red-900 mt-1">验证仍慢，工程仍难</div>
<div class="tiny mt-2">缺乏标签、实验周期、GPU 形态、队列重试和生物文件格式，都决定模型能否真正交付。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="label">商业赌注</div>
<div class="font-bold text-yellow-900 mt-1">平台，而非自建药物管线</div>
<div class="tiny mt-2">Chai 把自身放在中立的软件与建模层，用伙伴的成功推动模型、产品和研究方向。</div>
</div>

</div>

---

# Chai 的赌注：做建模层，不做药物资产公司

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-slate-50 border-2 border-slate-200">
<div class="label">常见 AI 生物公司</div>
<div class="text-xl font-bold mt-2">自己发现、持有并开发候选药物</div>
<div class="small mt-3">价值集中在少数资产；验证周期长，合作对象也可能成为竞争者。</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">Chai 的选择</div>
<div class="text-xl font-bold mt-2">向多家药企提供通用设计平台</div>
<div class="small mt-3">模型、算力、产品和科学支持共同交付；伙伴越成功，平台获得的需求反馈越具体。</div>
</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-left text-sm">
<strong>作者概括：</strong>这是对通用模型能力成熟速度的一次组织下注：如果模型能跨 target 泛化，中立平台才有成立空间。
</div>

---

# 为什么是现在：三个能力先后解锁

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="label">Structure</div>
<div class="font-bold mt-2">多分子结构预测</div>
<div class="tiny mt-3">访谈回顾：直到 2021 年左右，深度学习才开始可靠处理两个蛋白一起出现时的形状。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="label">Inverse folding</div>
<div class="font-bold mt-2">从形状反推序列</div>
<div class="tiny mt-3">ProteinMPNN 等工作开始在实验室得到验证，设计不再只停留在计算指标上。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="label">Generality</div>
<div class="font-bold mt-2">从单 target 爬坡到通用模型</div>
<div class="tiny mt-3">Chai 的关键选择是继续押注 scale 与 generality，而非为每个失败 target 手工补规则。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left small">
此前可以拿单次 campaign 数据在一个 target 上局部改进；真正改变公司形态的是跨 target 的可迁移设计能力。
</div>

---
layout: two-cols
---

# 抗体为何适合被精密设计

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
抗体是 Y 形蛋白，真正参与结合的主要是两端的 CDR loops，也就是可以改写的指尖。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
大部分 framework 相对稳定，并可选择人体免疫系统熟悉的框架；设计空间因此集中在局部界面。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
局部可设计、整体较统一，让抗体同时具备通用性和可开发性，也是 Chai 最早选择它的重要原因。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./antibody-anatomy.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 旧方法是在十亿级空间里找针

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">传统发现</div>
<div class="text-lg font-bold mt-2">免疫小鼠或大规模 yeast display</div>
<div class="tiny mt-3">一次 target 可能筛选至少十亿级候选，最后只得到少数甚至十来个潜在 hit。</div>
<div class="tiny mt-3 text-red-800">已知：它们会粘住；未知：粘在哪里、姿态如何、是否像药。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">模型设计</div>
<div class="text-lg font-bold mt-2">从指定 epitope 开始生成</div>
<div class="tiny mt-3">设计者可以明确希望接触的原子区域，再检查生成抗体是否以预期姿态结合。</div>
<div class="tiny mt-3 text-green-800">变化：从随机发现 binder，走向声明 binding intent。</div>
</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm text-left">
模型的价值不只是减少样本数，还在于把结合位置变成可控制、可审阅的设计变量。
</div>

---

# Binder 只是起点：还要同时满足正反约束

<div class="grid grid-cols-3 gap-4 mt-6 text-left tiny">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Bind</div>
<div class="text-lg font-bold mt-2">命中目标区域</div>
<div class="mt-3">选择特定 epitope，让结合位置与预期治疗机制一致。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Cross-react</div>
<div class="text-lg font-bold mt-2">跨物种仍有效</div>
<div class="mt-3">药物可能要先在猴子中验证，因此需要同时结合人类与猴子的相近变体。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Avoid</div>
<div class="text-lg font-bold mt-2">避开相似蛋白</div>
<div class="mt-3">若误绑定健康蛋白，可能带来毒性或严重副作用；selectivity 必须进入同一条件集合。</div>
</div>

</div>

<div class="mt-7 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
这不是一个单目标优化题，而是组合约束：绑定这些结构、避开那些结构，并保持药物可开发。
</div>

---

# Chai-1 先解决的，是团队自己的基础设施

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">团队规模</div>
<div class="text-4xl font-bold text-blue-600 my-2">5 人</div>
<div class="tiny">用开源结构预测模型作为明确的 forcing function。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="label">真正产物</div>
<div class="text-2xl font-bold text-purple-700 my-3">训练 + MSA + 服务</div>
<div class="tiny">把 PhD 级脚本升级为公司可持续使用的生产基础设施。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="label">发布冲刺</div>
<div class="text-4xl font-bold text-orange-600 my-2">48 h</div>
<div class="tiny">模型、技术报告和给生物学家使用的 web server 一起推过终点。</div>
</div>

</div>

<div class="mt-6 p-4 bg-slate-50 border border-slate-200 rounded text-left text-sm">
这段创业故事解释了后来的产品倾向：模型不能只存在于 Git 仓库里，必须让真正的科学用户能直接运行。
</div>

---
layout: two-cols
---

# Chai-1：把多模态生物数据还原为三维坐标

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
输入不是普通文字，而是序列 token、悬挂其上的原子，以及电荷、元素类型等属性轨道。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
Transformer trunk 建立 token 间关系；随后类似图像扩散的模块逐步生成原子的三维位置。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
关键映射：离散序列负责表征，扩散过程负责把表征还原为几何对象。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./chai1-architecture.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 三代能力阶梯

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>Chai-1</strong>：已知序列，预测它会折叠成什么三维结构。</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>Chai-2</strong>：给定 target，同时生成 binder 的序列与结构，让二者自洽。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>Chai-3</strong>：继续提高 binding affinity、developability 与跨 target 成功率。</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
作者概括：版本号背后的变化，是从描述世界走向直接提出可实验的候选。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./model-ladder.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

# 50 个 target：第一次用规模证明不是偶然

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">Challenge</div>
<div class="text-4xl font-bold text-blue-600 my-2">50</div>
<div class="tiny">从 CRO 已验证能开展实验的 catalog 中选择 target。</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="label">Coverage</div>
<div class="text-4xl font-bold text-green-600 my-2">约一半</div>
<div class="tiny">约 25 个 target 得到 binder，证明能力不只存在于一两个案例。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="label">Binding hit rate</div>
<div class="text-4xl font-bold text-purple-600 my-2">约 20%</div>
<div class="tiny">Matt 在访谈中给出的平均 binding hit rate。</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left tiny">
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">没有命中的另一半并未被拆成大量手工特例；团队选择继续押注模型、数据与规模。</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">对药企而言，统计规模比单个漂亮 demo 更接近可以放进真实 program 的证据。</div>
</div>

---

# 生成一个结构，不等于知道它是真的

<div class="grid grid-cols-2 gap-5 mt-5 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Self-consistency</div>
<div class="font-bold mt-2">用独立 folding model 复核</div>
<div class="tiny mt-3">把生成序列交给另一套结构预测方法；若两者给出相近形状，可信度上升。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Calibration</div>
<div class="font-bold mt-2">查看模型自己不确定的区域</div>
<div class="tiny mt-3">结构预测模型能输出局部置信度，再聚合为可用于排序的信号。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Diversity</div>
<div class="font-bold mt-2">防止所有答案长得一样</div>
<div class="tiny mt-3">高一致性也可能来自 mode collapse；必须同时检查结构和序列的多样性。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Ground truth</div>
<div class="font-bold mt-2">最终仍要回到实验</div>
<div class="tiny mt-3">设计任务没有现成标签；是否结合、如何结合、是否稳定，必须由 assay 或结构测量回答。</div>
</div>

</div>

---
layout: two-cols
---

# 他们以为实验室发回了错误结果

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
团队把 Chai-2 的结构预测叠到 cryo-EM 电子密度结果上，几乎看不到两者之间的差异。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
第一反应不是庆祝，而是怀疑实验方把原始设计文件原样发了回来。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
复核后的误差为 <strong>0.33 Å</strong>，访谈将其解释为约三分之一个原子宽度。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
边界：这是论文中所测个案，不应外推为所有设计都达到同等精度。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./overlay-validation.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# AI for Science 的硬约束：反馈不能只靠算力加速

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">LLM eval</div>
<div class="font-bold mt-2">小时级</div>
<div class="tiny mt-3">增加 compute，往往能在短时间内扩大软件任务评估。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">Protein assay</div>
<div class="font-bold mt-2">周级</div>
<div class="tiny mt-3">湿实验网络已经把反馈从年级压到周级，但仍不能像纯计算 eval 那样即时扩展。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Structural ground truth</div>
<div class="font-bold mt-2">昂贵且低吞吐</div>
<div class="tiny mt-3">cryo-EM 等结构测量能回答真实姿态，却不适合作为每个候选的日常反馈。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
因此研究重点不只包括更强模型，也包括更高吞吐的验证，以及更能预测实验成功的 in-silico 指标。
</div>

---

# Chai-2 跨过的是 usefulness threshold

<div class="grid grid-cols-4 gap-3 mt-6 text-left tiny">

<div class="p-3 bg-slate-50 border border-slate-200 rounded"><strong>论文结果</strong><br/>跨多个 target 展示 binder 生成能力。</div>
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>客户试题</strong><br/>药企先给一个过去做不动、但不敏感的 target。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>模型证明</strong><br/>结果足够好，科学家愿意亲自进入产品继续尝试。</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>真实 campaign</strong><br/>平台开始进入伙伴的日常分子设计流程。</div>

</div>

<div class="mt-7 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left">
<div class="font-bold">访谈中的 adoption 机制很朴素</div>
<div class="small mt-2">药企并非天然排斥 AI。面对高风险目标，它们先保持怀疑；当模型在熟悉的难题上给出可检查结果，信任才开始积累。</div>
</div>

---
layout: two-cols
---

# 专业 AI 产品不一定长得像聊天框

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">加载 target molecule，在三维视图中定位结构与可接近区域。</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">像画笔一样涂选 epitope，把设计意图变成模型条件。</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">像 content-aware fill 一样生成候选 binder，再用科学分析、plot 与排序理解结果。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded tiny">产品参照系更接近 Autodesk、SolidWorks、Figma 与 Photoshop，而非 ChatGPT。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./cad-workbench.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# 产品层负责把科学约束变成可操作输入

<div class="grid grid-cols-3 gap-4 mt-6 text-left tiny">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Geometry</div>
<div class="font-bold mt-2">别撞上 cell membrane</div>
<div class="mt-3">目标可能嵌在细胞膜中；候选结合姿态必须具有空间可达性。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Intent</div>
<div class="font-bold mt-2">明确 binding 与 avoiding</div>
<div class="mt-3">同一界面表达要命中的结构、要避开的结构，以及跨物种约束。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Interpretation</div>
<div class="font-bold mt-2">让科学家检查结果</div>
<div class="mt-3">可视化姿态、bonds、置信度与测量，使模型输出能进入专业判断。</div>
</div>

</div>

<div class="mt-7 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-left text-sm">
作者概括：模型提供生成能力，产品把隐含知识变成约束，并为人类保留可验证的观察面。
</div>

---

# 药物设计平台首先要解决 IP 信任

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">默认担忧</div>
<div class="text-lg font-bold mt-2">新 target 与新 medicine 都是核心机密</div>
<div class="small mt-3">药企不会因为模型强就自动把敏感数据放进共享平台；训练、推理与结果访问都必须有清晰边界。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Chai 的工程答案</div>
<div class="text-lg font-bold mt-2">激进分段 + single tenancy</div>
<div class="small mt-3">按客户隔离数据与账户，近似为每个伙伴部署独立产品实例，再在统一平台能力之上交付。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
Neil 的安全背景让产品化从第一天就包含信任架构；这不是 enterprise 附加项，而是平台能否成立的前提。
</div>

---

# 一位科学家为一个 target 等了十年

<div class="grid grid-cols-[1fr_1.45fr] gap-6 mt-6 text-left">

<div class="p-5 bg-slate-50 border-2 border-slate-200 rounded text-center">
<div class="label">此前</div>
<div class="text-5xl font-bold text-slate-700 my-4">10 年</div>
<div class="small">持续寻找最初的 binder，却始终没有跨过起点。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">现场反应</div>
<div class="text-xl font-bold mt-2">看到 Chai 的结果后，她在会议室里落泪</div>
<div class="small mt-4">这不是模型 benchmark 的情绪包装，而是 usefulness threshold 的另一种度量：一个长期停滞的科学问题，终于得到可以继续实验的候选。</div>
<div class="tiny mt-4 text-green-800">访谈未披露 target、伙伴或后续临床结果；这里仅保留原文明确讲述的采用故事。</div>
</div>

</div>

---
layout: two-cols
---

# 从瀑布式药物发现，转向实验闭环

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">target discovery、hit discovery、optimization 被多个 gate 隔开，每一步可能耗时数月到数年。</div>
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">当模型能先给出有希望的候选，实验便可以更早回答问题。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">实验结果继续条件化下一次模型运行，工作方式更接近软件中的 agile iteration。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./discovery-loop.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# One-shot 与迭代并不矛盾

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Research north star</div>
<div class="text-xl font-bold mt-2">第一次就更像药</div>
<div class="small mt-3">提高亲和力、稳定性、安全性、制造可行性与 developability，让候选离下一阶段更近。</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Product north star</div>
<div class="text-xl font-bold mt-2">让结果进入下一轮</div>
<div class="small mt-3">获得 binder 和实验数据后，用这些信息约束下一次生成，并管理多个 hypothesis 与 campaign。</div>
</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-left text-sm">
简单 antagonist 可能更早接近 one-shot；agonist、bispecific、ADC 等更高层任务，又会打开新的迭代空间。
</div>

---
layout: two-cols
---

# 模型越强，产品就越往科学外循环上移

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">当前像 Cursor：科学家仍要检查 molecule、bond 与局部属性。</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">下一层编排一个 target 的多个 epitope hypothesis。</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">再上一层管理一个 pathway 中多个 target 的整体 campaign。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded tiny">软件寿命可能从二十年缩到一年；它的价值是桥接当前模型与下一层研究能力。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./abstraction-ladder.excalidraw" class="w-[425px]" :darkMode="false" :background="false" />
</div>

---

# Epitope prediction 可能比 binder design 更难

<div class="grid grid-cols-3 gap-4 mt-6 text-left tiny">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Disease biology</div>
<div class="font-bold mt-2">先判断该打谁</div>
<div class="mt-3">哪些蛋白导致疾病、哪条相互作用应该被阻断，需要远超局部结构的全局上下文。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">Binding site</div>
<div class="font-bold mt-2">再判断该打哪里</div>
<div class="mt-3">epitope 是真正需要阻断或触发的结构区域；选错位置，binder 再强也可能没有治疗作用。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Structure limit</div>
<div class="font-bold mt-2">AlphaFold 也没有全解</div>
<div class="mt-3">Matt 提到 AlphaFold 2 Multimer 在 antibody–antigen prediction 上约 11% 正确，即约九成失败。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
某些新病毒可先通过高置信结构预测寻找阻断位点；对全新疾病 target 的通用 epitope discovery，访谈仍明确判断为困难问题。
</div>

---

# 经济价值不只是省掉前端的几百万美元

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-slate-50 border-2 border-slate-200 rounded">
<div class="label">效率叙事</div>
<div class="text-xl font-bold mt-2">更快找到现有类型的药</div>
<div class="small mt-3">缩短 hit discovery、减少筛选与试错，确实有价值，但在完整药物开发成本中只是一部分。</div>
</div>

<div class="p-5 bg-green-50 border-2 border-green-200 rounded">
<div class="label">能力叙事</div>
<div class="text-xl font-bold mt-2">设计过去很难发现的药</div>
<div class="small mt-3">精确 agonist、cross-reactivity、selectivity、bispecific 与多 warhead format，依赖可声明的结构设计。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
作者概括：平台的上限来自 target 和 modality 空间被扩大，而不只是把同一条管线做得更便宜。
</div>

---

# Bispecific 暴露了传统筛选的组合爆炸

<div class="grid grid-cols-[1fr_auto_1fr_auto_1.1fr] items-center gap-3 mt-14 text-center">

<div class="p-5 bg-blue-50 border-2 border-blue-200 rounded">
<div class="label">Arm A</div>
<div class="text-3xl font-bold text-blue-700 mt-3">1 / 10⁹</div>
<div class="tiny mt-2">找到一个 binder 的示意概率</div>
</div>

<div class="text-4xl text-slate-400">×</div>

<div class="p-5 bg-purple-50 border-2 border-purple-200 rounded">
<div class="label">Arm B</div>
<div class="text-3xl font-bold text-purple-700 mt-3">1 / 10⁹</div>
<div class="tiny mt-2">另一只手臂独立命中</div>
</div>

<div class="text-4xl text-slate-400">→</div>

<div class="p-5 bg-red-50 border-2 border-red-200 rounded">
<div class="label">Joint search</div>
<div class="text-2xl font-bold text-red-700 mt-3">传统方法失效</div>
<div class="tiny mt-2">两端还要同时满足姿态与功能约束</div>
</div>

</div>

<div class="mt-10 p-4 bg-green-50 border-l-4 border-green-500 rounded text-left text-sm">
访谈用两个十亿分之一说明乘法效应。生成模型的机会，是直接从一阶原理共同设计两只手臂，而不是事后拼接两个偶然 hit。
</div>

---

# 终极目标：把科学实验变成工程纪律

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Trial and error</div>
<div class="font-bold mt-2">先大量尝试，再看什么能活下来</div>
<div class="tiny mt-3">过程由自然、筛选空间和漫长实验周期主导。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Declarative intent</div>
<div class="font-bold mt-2">先写清要什么、不要什么</div>
<div class="tiny mt-3">target、epitope、跨物种结合、off-target 与几何约束成为输入。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Precision engineering</div>
<div class="font-bold mt-2">模型填空，实验验收</div>
<div class="tiny mt-3">生成候选、测量结果、迭代条件，逐步形成类似 CAD 的工程闭环。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
这不是声称 biology 已经确定性，而是把更多意图前置、更多失败提前，并让反馈成为下一次设计的一部分。
</div>

---

# 生物工程的隐形税：数据进模型之前就很难

<div class="grid grid-cols-4 gap-3 mt-6 text-left tiny">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded"><strong>文件格式</strong><br/>结构、求解者、实验方法与不确定区域被塞进复杂格式。</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded"><strong>多重构象</strong><br/>一次结构测量可能保留多个版本，部分区域甚至没有被解析。</div>
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>Edge cases</strong><br/>LLM 能帮忙解析，但不天然知道所有历史特例与科学语义。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>Opinionated path</strong><br/>系统必须在兼容一切与让人看得懂之间作出原则性选择。</div>

</div>

<div class="mt-7 p-5 bg-slate-50 border border-slate-200 rounded text-left">
<div class="font-bold">从科学到工程，第一步常常不是新模型</div>
<div class="small mt-2">而是把输入、异常、版本和解释路径压缩成稳定、可维护、可审查的基础设施。</div>
</div>

---

# 结构模型的计算形状，和 LLM 不一样

<div class="grid grid-cols-3 gap-4 mt-6 text-left tiny">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Representation</div>
<div class="text-2xl font-bold mt-2">L → L²</div>
<div class="mt-3">部分 folding 架构在 pair representation 上做运算，而不是只处理长度 L 的序列。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Compute</div>
<div class="text-2xl font-bold mt-2">可达 L³</div>
<div class="mt-3">注意力与 batch 方式使计算迅速变重，layer norm 和内存搬运都可能成为显著瓶颈。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Hardware mismatch</div>
<div class="text-2xl font-bold mt-2">小 hidden，大 sequence</div>
<div class="mt-3">triangle layers 与现代 GPU 擅长的形状相反，训练和推理的最优芯片也可能不同。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
Neil 的判断：当前 compute 市场在容量和软件栈上都被 LLM 塑形，AI for biology 仍需要自己的优化层。
</div>

---
layout: two-cols
---

# 真正扩展模型调用，要先逃离 retry hell

<div class="mt-4 space-y-3 text-sm text-left">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">一次 molecule design 会跨多个 GPU、数据库、对象存储和长数据流水线，任何一处都可能短暂失败。</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">手写 queue、retry 与 orchestration 会把简单计算变成大量胶水代码。</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">Chai 早期尽量把 side effect、model call 与长任务放到 Temporal，让状态、重试与恢复成为基础能力。</div>
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded tiny">工程原语不是模型外围的杂务；它直接决定更大训练和推理任务能否可靠完成。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./durable-execution.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Bitter Lesson 不是忽略结构，而是控制复杂度

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">复杂系统的诱惑</div>
<div class="text-lg font-bold mt-2">每个失败都再加一个模块</div>
<div class="small mt-3">模块越多，越难判断某次改动为何有效，也越难把更多 compute 和 data 转成稳定提升。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Chai 的偏好</div>
<div class="text-lg font-bold mt-2">第一性原理 + 删除</div>
<div class="small mt-3">团队把 Raptor 1 到 Raptor 2 的简化图贴在办公室，用可理解的 core ML 问题替代不断堆叠特例。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
边界：访谈也承认 AlphaFold 的 inductive bias 非常有效。问题不是拒绝领域结构，而是避免系统复杂到无法研究。
</div>

---

# Partner feedback 是研究方向，不等于直接拿走数据

<div class="grid grid-cols-3 gap-4 mt-6 text-left tiny">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">General model</div>
<div class="font-bold mt-2">继续扩展共性能力</div>
<div class="mt-3">模型与产品尽可能通用，覆盖 binding、avoiding 和更复杂 modality。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Specialization</div>
<div class="font-bold mt-2">为伙伴训练或微调版本</div>
<div class="mt-3">公开合作内容包括针对伙伴数据和偏好做专门版本，服务其候选或 target 类别。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Demand signal</div>
<div class="font-bold mt-2">知道该测什么、该做什么</div>
<div class="mt-3">伙伴反复提出的困难，帮助团队选择需要新增的数据、评估与垂直工作流。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
Chai 明确表示没有自建药物 pipeline 的计划；防御力来自通用能力、可信集成与持续解决更难问题。
</div>

---

# 小团队的稀缺资源不是代码，而是注意力

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">Company</div>
<div class="text-4xl font-bold text-blue-600 my-2">约 30 人</div>
<div class="tiny">访谈当时的整体规模。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="label">Research</div>
<div class="text-4xl font-bold text-purple-600 my-2">约 10 人</div>
<div class="tiny">相对大型 AI 生物研究组织更小。</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="label">Raised</div>
<div class="text-4xl font-bold text-green-600 my-2">$400M</div>
<div class="tiny">访谈提到的新一轮资金，将继续投入模型与 compute。</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left tiny">
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded"><strong>研究人员像资本配置者：</strong>把有限 compute 投向最值得验证的 idea。</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded"><strong>工程师像注意力配置者：</strong>生成代码变便宜后，保持产品简单、可理解、可使用才更稀缺。</div>
</div>

---

# 最后两个瓶颈：即时验证与人才流向

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Matt 的答案</div>
<div class="text-xl font-bold mt-2">瞬间知道设计是否有效</div>
<div class="small mt-3">如果能把 protein design 的验证闭环压到近乎即时，研究就不必继续摸黑等待 wet-lab 结果。</div>
</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Neil 的答案</div>
<div class="text-xl font-bold mt-2">让更多通才进入 biology</div>
<div class="small mt-3">领域术语、不可视化对象与漫长训练路径让人才误以为只有资深生物学家才能贡献。</div>
</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-left text-sm">
他们共同给出的信号：模型已经能创造价值，但实验反馈和人才配置仍决定这一轮能力扩散的速度。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">以下 8 条英文原句均已逐字回查本集转录；卡片下方标注语境。</div>

<div class="grid grid-cols-2 gap-2 text-left text-[11px] leading-snug">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded quote">“a neutral software factory for making medicines”<div class="text-[9px] opacity-60 mt-1 not-italic">— Neil · Chai 的平台定位</div></div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded quote">“our biggest competitor is the mouse”<div class="text-[9px] opacity-60 mt-1 not-italic">— Matt 转述 Josh · 传统抗体发现</div></div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded quote">“it was a 0.33 angstrom error which is 1/3 the width of an atom”<div class="text-[9px] opacity-60 mt-1 not-italic">— 主持人 · cryo-EM 复核结果</div></div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded quote">“I've literally spent 10 years trying to get an initial binder to this thing”<div class="text-[9px] opacity-60 mt-1 not-italic">— Neil 转述合作科学家</div></div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded quote">“the north star is to just really produce drug-like molecules straight out of the models”<div class="text-[9px] opacity-60 mt-1 not-italic">— Matt · 研究目标</div></div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded quote">“start to just like grow into like the outer loop of science”<div class="text-[9px] opacity-60 mt-1 not-italic">— Neil · 产品抽象层上移</div></div>

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded quote">“drug discovery from a scientific experiment to an engineering discipline”<div class="text-[9px] opacity-60 mt-1 not-italic">— Neil · 公司使命</div></div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded quote">“we really really value simplicity”<div class="text-[9px] opacity-60 mt-1 not-italic">— Matt · 研究文化</div></div>

</div>

---
layout: end
---

<div class="kicker" style="color:#94a3b8">Matt McPartlon · Closing takeaway</div>

<div class="quote text-4xl leading-tight max-w-3xl mx-auto mt-8">
“the field is actually working”
</div>

<div class="mt-8 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
模型已经产生真实价值；验证、基础设施与产品正在决定它能多快走进科学工作的外循环。
</div>

<div class="mt-10 text-sm text-slate-400">Latent Space · Chai Discovery · PodDeck</div>
