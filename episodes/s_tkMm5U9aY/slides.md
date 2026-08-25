---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How Your Immune System Works & How to Improve It | Dr. Max Krummel'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationX: ''
  paginationY: ''
---

<!-- slide:01 -->

# How Your Immune System Works<br>& How to Improve It

<div class="mt-6 text-xl opacity-80">Dr. Max Krummel × Andrew Huberman</div>

<div class="mt-8 flex justify-center gap-3 text-sm">
  <span class="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">免疫感知</span>
  <span class="px-4 py-2 rounded-full bg-purple-50 border border-purple-200">衰老与胸腺</span>
  <span class="px-4 py-2 rounded-full bg-green-50 border border-green-200">脑—免疫连接</span>
</div>

<div class="mt-10 text-sm opacity-60">Huberman Lab · 2h 28m · 2026-08</div>

---

<!-- slide:02 -->

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>免疫不是一支军队</strong><br><span class="text-xs opacity-70">它持续测量全身，还参与清理、修复与维持共生。</span>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>衰老改变自我的边界</strong><br><span class="text-xs opacity-70">细胞逐渐形成遗传马赛克，识别噪声随之增加。</span>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>胸腺是一所筛选学校</strong><br><span class="text-xs opacity-70">它制造并教育 T 细胞，随后又随年龄明显缩小。</span>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>睡眠是免疫系统的换班</strong><br><span class="text-xs opacity-70">部分免疫细胞夜间回到骨髓，组织进入修复窗口。</span>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>脑会记住身体状态</strong><br><span class="text-xs opacity-70">小鼠实验提示，脑区再激活可重现部分器官免疫状态。</span>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>医学问题需要承认未知</strong><br><span class="text-xs opacity-70">疫苗、肽类、细胞治疗与自身免疫都需要拆开证据等级。</span>
</div>

</div>

---

<!-- slide:03 -->

# 免疫系统一直在工作，即使没有感染

<div class="grid grid-cols-4 gap-3 mt-6 text-sm text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl mb-2">🧠</div>
<strong>脑</strong><br><span class="text-xs opacity-65">小胶质细胞参与清理与维护</span>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl mb-2">🦠</div>
<strong>肠道</strong><br><span class="text-xs opacity-65">容纳并约束共生微生物</span>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl mb-2">◒</div>
<strong>肝脏</strong><br><span class="text-xs opacity-65">参与代谢环境的调节</span>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl mb-2">♥</div>
<strong>心脏</strong><br><span class="text-xs opacity-65">清理心肌细胞产生的副产物</span>
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
<strong>核心变化：</strong>癌症免疫治疗让研究者看到，免疫反应可以被调节；肿瘤既曾经属于身体，又已经偏离原有状态，简单的自身与外来二分不再够用。
</div>

---
layout: two-cols
---

<!-- slide:04 -->

# 从开关模型到状态模型

<div class="space-y-3 text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
旧模型只关注两个端点：平时安静，遇到外来物时攻击。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
癌症免疫治疗显示，T 细胞反应阈值能够改变，系统并非固定不变。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
更完整的模型包含测量、容忍、支持、隔离、修复和攻击等多个状态。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./immune-states.excalidraw" class="w-[445px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:05 -->

# 约 10¹¹ 个 T 细胞，像分布式传感器

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-center">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-4xl font-bold text-blue-600 mb-2">≈10¹¹</div>
对谈给出的 T 细胞数量级
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600 mb-3">各自独立</div>
每个细胞携带自己的识别受体
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600 mb-3">持续采样</div>
感知肽类等生物分子的浓度是否越界
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-sm">
作者概括：这更像遍布全身的传感网络，而不是一支只在感染时才集合的部队；判断来自许多局部细胞的观察与交流。
</div>

---

<!-- slide:06 -->

# 儿童容易生病，是训练集还不够大

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>出生后的最初数月</strong><br><br>
对谈指出，前约 6 个月免疫系统的训练能力较弱；一个解释是身体发育太快，过强反应可能误伤正在出现的新组织状态。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>第一次遇见</strong><br><br>
流感等病原体对儿童身体是全新输入，尚无记忆反应，因而更容易出现明显症状。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>快速学习</strong><br><br>
强健的年轻免疫系统清除病原并留下记忆；与此同时，肠道也在建立更丰富的微生物群落。
</div>

</div>

---

<!-- slide:07 -->

# 你并不只由自己的基因组成

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 人体基因组

<div class="text-4xl font-bold text-blue-600 my-3">约 20,000 个基因</div>

这是对谈用来说明能力边界的数量级：单靠自身基因，无法完成所有营养加工与环境适应。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 共生微生物

肠道细菌参与胆汁酸等成分的生成，帮助消化动物脂肪；不同食物与环境还会带来新的代谢能力。

免疫系统要建立的是<strong>有条件的共存</strong>，不是彻底清空。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border border-purple-200 text-center text-sm">
因此，身体边界既包括来自精卵的细胞，也包括被免疫系统允许长期居住的微生物与病毒痕迹。
</div>

---

<!-- slide:08 -->

# 衰老带来两个同时发生的问题

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 供给下降

许多细胞功能变弱，新的免疫细胞产生减少；一部分伴随终生的免疫细胞也会逐渐消失。

</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 身份变复杂

DNA 复制与环境损伤不断留下不同突变，相邻细胞不再完全相同，身体逐渐成为遗传马赛克。

</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
难点由此出现：免疫系统既要容忍不断变化的自己，又要发现真正危险的新变化。衰老让识别问题同时面对信号变弱与背景噪声变强。
</div>

---
layout: two-cols
---

<!-- slide:09 -->

# 潜艇识别难题：当自身声音越来越多

<div class="space-y-3 text-sm mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
对谈借用二战潜艇的比喻：一本声纹簿记录友军，另一本记录敌军。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
年轻身体的自身声纹相对稳定；病毒蛋白更容易显得突兀。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
随着细胞形成复杂马赛克，声纹簿不断增厚，异常信号更容易淹没在背景里。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./aging-mosaic.excalidraw" class="w-[430px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:10 -->

# 修复与癌变共享一部分增长逻辑

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>伤口需要快速填补</strong><br><br>
细胞死亡或皮肤破损后，能更快分裂的细胞更可能占据空位。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>竞争会筛选增长优势</strong><br><br>
长期反复修复可能保留那些稍微更善于增殖的克隆。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>优势越界就成风险</strong><br><br>
持续增殖、形成病灶并迁移到其他部位，才进入癌症与转移的危险区。
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-sm">
Krummel 还把部分皮肤白斑作为免疫修剪的例子：免疫系统可能清除了异常或癌前黑色素细胞。这是他用来说明持续免疫监视的证据线索。
</div>

---
layout: two-cols
---

<!-- slide:11 -->

# 免疫系统更警惕突增，也更容易适应慢变

<div class="space-y-3 text-sm mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
病毒通常同时带来两个特征：此前没有的大量新信号，以及短时间内的组织损伤。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
肿瘤可能从轻微变化开始，缓慢复制；系统会把持续的小幅偏移吸收进新的正常范围。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
作者概括：免疫判断不仅看现在多不多，还看变化速度与是否伴随损伤。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./signal-shapes.excalidraw" class="w-[420px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:12 -->

# 清除一切，可能比保留共存更危险

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>隔离</strong><br><br>
控制细菌或病毒的数量与位置，让它们停留在可接受范围。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>休战</strong><br><br>
疱疹等病毒可长期潜伏；只要没有重新活跃，系统不必杀死所有被感染细胞。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>免疫病理</strong><br><br>
当病毒在神经内重新活动时，免疫反应杀伤神经元，也会造成疼痛与组织损害。
</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border border-green-200 text-center">
健康并不等于恢复到无菌、无病毒痕迹的纯净状态，而是把不可清除之物控制在不伤害身体的状态。
</div>

---

<!-- slide:13 -->

# 胸腺的重要性，是一次临床意外揭开的

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>误判</strong><br><br>
早期儿童心脏手术中，医生看到靠近心脏、比成人大得多的白色器官，曾把它当成异常组织移除。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>后果</strong><br><br>
部分孩子术后出现多种机会性感染，提示被移除的器官承担关键免疫功能。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>验证</strong><br><br>
Jacques Miller 在新生小鼠中移除胸腺，动物随后更容易死于细菌感染，少数还出现肿瘤。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border border-purple-200 text-center text-sm">
这条证据链把一个外观不起眼的器官，变成理解 T 细胞来源与免疫监视的入口。
</div>

---
layout: two-cols
---

<!-- slide:14 -->

# T 细胞的生产与淘汰

<div class="space-y-3 text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
骨髓中的干细胞先进入血液，再迁移到胸腺并发育为 T 细胞。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
胸腺展示身体自身基因产生的多种分子，测试每个新受体会不会过度攻击自己。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
只有反应范围合适的细胞被放行，既保留识别能力，又维持自身耐受。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./thymus-school.excalidraw" class="w-[430px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:15 -->

# 胸腺为何随年龄缩小，又为何重新受到关注

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>儿童期高产</strong><br><br>
身体快速接触新病原与微生物，需要大量新 T 细胞扩大识别库。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>成年后退化</strong><br><br>
胸腺逐渐萎缩，老年时体积很小，新 T 细胞输出显著降低。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>治疗设想</strong><br><br>
若能恢复输出，也许能为肿瘤等问题提供一批尚未被旧环境驯化的新 T 细胞。
</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">
证据边界：对谈没有支持自行注射胸腺肽或保存胸腺组织。Krummel 明确表示，不知道这些做法能否在他们有生之年带来可用的长寿治疗。
</div>

---

<!-- slide:16 -->

# 睡着以后，免疫细胞开始重新分布

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 mb-3">回流</div>
许多免疫细胞夜间进入骨髓
</div>

<div class="p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600 mb-3">换班</div>
组织中的活动细胞减少，一部分程序进入安静状态
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 mb-3">修复</div>
中性粒细胞进入组织，并出现胶原沉积等修复活动
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Krummel 认为夜间回到骨髓的证据相当扎实；但这些迁移如何完整解释睡眠不足后更易感染，研究界仍有多种不一致的解释。
</div>

---

<!-- slide:17 -->

# 关于睡眠，已知事实与完整机制要分开

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 相对扎实

- 免疫细胞存在昼夜迁移
- 睡眠期间出现组织清理与修复
- 睡眠不足时淋巴液更容易积聚

</div>

<div class="p-6 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 仍未统一

- 哪类细胞变化主导感染易感性
- 免疫、神经与淋巴系统各占多大作用
- 一晚睡眠不足如何转化为具体风险

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-center text-sm">
对谈给出的实用结论很克制：睡眠是身体停止制造新负担、追上清理进度的窗口，但目前不能把整个效应归因于一个分子或一条通路。
</div>

---

<!-- slide:18 -->

# 储存脐带血与储存未来治疗，不是同一件事

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>材料</strong><br><br>
脐带本来会被丢弃，其中含有可用于重建血液系统的骨髓干细胞。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>可理解用途</strong><br><br>
若放疗清除骨髓肿瘤时也清除了正常干细胞，保存的细胞理论上可作为替代来源。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>未知</strong><br><br>
被追问商业储存是否已让具体患者免于死亡时，Krummel 明确说自己不知道答案。
</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border border-red-200 text-center text-sm">
同一段对话里既有生物学可行性，也有真实世界使用率与成本效益的不确定性；两者不能合并成确定承诺。
</div>

---

<!-- slide:19 -->

# 细胞可塑性很诱人，时间表却不听愿望

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>诱导多能干细胞</strong><br><br>
皮肤成纤维细胞可被重新编程，再尝试分化为器官样组织。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>主要实验难点</strong><br><br>
Krummel 更担心诱导出的组织是否真正复现目标器官，而非默认取出的细胞一定带有致命突变。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>现实边界</strong><br><br>
这类技术很可能最终可用，但今天保存的细胞是否来得及帮助当前这一代人，他不给出承诺。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-center text-sm">
方向可能成立，不代表时间表可预测；保存细胞的价值，取决于技术成熟是否早于疾病或其他人生风险。
</div>

---

<!-- slide:20 -->

# 发现过程不是工程排期

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 已经知道目标

相关 CAR-T 路线已经能在体外工程化 T 细胞、赋予特定受体；但在对谈所指的肿瘤环境中，细胞常被关闭、不能持续或未能清除肿瘤。

</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 仍不知道路径

知道终点并不等于知道需要解除哪些防御、改变哪些细胞状态、以什么顺序给出信号。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border border-yellow-200 text-center">
工程能快速实现已知机制；发现必须先找出宇宙实际采用的机制。这个差别决定了为什么某些突破突然到来，某些方向多年停滞。
</div>

---

<!-- slide:21 -->

# 大突破往往来自与目标成直角的问题

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>CRISPR</strong><br><br>
起点是细菌如何防御入侵者，后来才成为人类基因工程工具。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>免疫检查点</strong><br><br>
Krummel 最初研究的是 T 细胞表面分子；阻断抗体在小鼠中让肿瘤消退，才打开癌症免疫治疗方向。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>X 射线</strong><br><br>
物理学研究首先揭示新现象，之后才转化为测量骨骼的医学工具。
</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
共同点不是研究者提前写好了商业路线图，而是好奇心先扩大了人类知识库，新的用途随后才显现。
</div>

---

<!-- slide:22 -->

# 科研产出是偏斜分布，不是计时工资

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-200">
<div class="text-4xl font-bold text-red-600 mb-2">≈90%</div>
Krummel 对许多基础问题可能走向死路的粗略估计
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600 mb-2">10%</div>
若单次实验只有这一概率产出有趣结果，至少要做多个独立尝试
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600 mb-2">0 → 500</div>
大量投入可能没有回报，少数时刻却一次改变整个问题空间
</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border border-purple-200 text-center text-sm">
更好的实验不是努力证明自己正确，而是尽快杀死错误假设。只有经得起这种检验的解释，才值得继续投入。
</div>

---
layout: two-cols
---

<!-- slide:23 -->

# 免疫系统既流动，也有常驻哨兵

<div class="space-y-3 text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
循环细胞借血液与淋巴跨越身体，能够把不同位置的信息带到新的组织。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
组织驻留 T 细胞长期守在特定部位，熟悉局部环境，有些终生不离开。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
两类细胞共同构成免疫地理：全身交通提供广度，局部驻留提供上下文。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./immune-geography.excalidraw" class="w-[425px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:24 -->

# 移植成功要同时满足营养与免疫两张清单

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 组织能否活

需要足够的血流、生长因子、淋巴回流，有时还需要神经活动。肾包膜因环境合适，常被用来放置胰腺细胞。

</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 免疫能否接受

1 型糖尿病的免疫系统已经攻击过胰腺；把新胰腺细胞放到身体任何位置，都可能再次被同一系统识别并清除。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-center text-sm">
因此，正确的细胞加上合适的位置仍不够。移植物获得了什么新身份、局部免疫细胞如何看待它，同样决定结局。
</div>

---
layout: two-cols
---

<!-- slide:25 -->

# 同一种修复信号，不该广播给所有细胞

<div class="space-y-3 text-sm mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
开放伤口边缘的细胞需要增殖与迁移，直接填补缺口。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
再往外一层的细胞承担不同任务，并被内层细胞发出的信号逐级组织。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
肽类、细胞或药物即使方向正确，也要匹配剂量、位置与时间窗口。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./wound-gradient.excalidraw" class="w-[420px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

<!-- slide:26 -->

# 脑区再激活，能重现部分肠道免疫状态

<div class="space-y-3 text-sm mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
研究者先在小鼠中诱发炎症性肠病，同时标记岛叶皮层里活跃的神经元。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
小鼠康复后，研究者再次人工激活这批神经元。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
肠道重新出现同类免疫细胞聚集，程度较弱，但方向类似真实炎症。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./brain-immune-loop.excalidraw" class="w-[420px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:27 -->

# 这项小鼠研究证明了什么，又没证明什么

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 它支持

- 某些脑状态可与器官免疫状态形成关联
- 重新激活相关神经元可召回部分外周反应
- 神经系统可能参与组织级免疫调节

</div>

<div class="p-6 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 它尚未证明

- 人能靠回忆治愈感染或炎症
- 任意积极记忆都能提升免疫
- 冥想已被证明可精准重置某个器官

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-center text-sm">
对谈把冥想、气味与安慰食物作为可检验的方向，不是现成处方。人工操控小鼠神经元与人类主动回忆之间仍隔着重要证据距离。
</div>

---

<!-- slide:28 -->

# 免疫细胞不识字，但会响应脑状态

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>慢性压力</strong><br><br>
持续的神经内分泌状态可能长期压低或扭曲免疫反应。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>急性压力</strong><br><br>
短时皮质醇与应激反应也能动员免疫，并非所有压力都只有负面作用。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>记忆触发</strong><br><br>
词句本身不是信号；由记忆、呼吸或情境引出的脑与身体状态才可能成为信号。
</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border border-purple-200 text-center text-sm">
作者概括：把心态理解为可测量的神经状态，比把它理解成神奇的自我暗示，更接近对谈展示的机制边界。
</div>

---

<!-- slide:29 -->

# 自我实验最容易丢失的，是分母

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>单次体验</strong><br><br>
服用肽类或补充剂后感觉变好，只说明先后发生，不能证明前者导致后者。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>缺少失败样本</strong><br><br>
网络传播更偏爱明显变化，没效果与副作用数据往往不会被系统收集。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>可比较研究</strong><br><br>
统一剂量、时间、对照与结局，才能知道一群人里有多少受益、多少无效、多少受害。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Krummel 并不否认人会尝试改善自己；他的核心担忧是，零散经历很容易被当成数据，而风险恰恰藏在没有被记录的人群中。
</div>

---

<!-- slide:30 -->

# 疫苗的共同逻辑：先展示目标，再扩增响应

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>儿童疫苗</strong><br><br>
提前展示病原体特征，建立记忆反应，降低麻疹、腮腺炎等真实疾病带来的风险。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>肿瘤疫苗</strong><br><br>
可选取肿瘤中特有、与正常身体不同的蛋白或肽，促进更多免疫细胞识别肿瘤。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>情境改变选择</strong><br><br>
当标准治疗无效、生命直接受威胁时，人们对新型疫苗的风险收益判断也会改变。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-center text-sm">
共同机制不代表风险、剂量与证据等级相同；每种疫苗仍要按具体疾病、对象与方案分别评估。
<div class="mt-2 text-xs opacity-60">本页复述对谈中的机制与判断，不构成个体医疗建议。</div>
</div>

---

<!-- slide:31 -->

# 支持接种，不等于拒绝研究时间与组合

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Krummel 的个人判断

他查看风险数据后给孩子接种，认为总体上是合理选择；疾病本身的历史后果不能因今天少见而被忘记。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 他保留的研究问题

不同疫苗的组合、间隔与便利性可以继续研究；孩子不舒服时，他曾把其中一次接种推迟约一个月。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
方案有统计安全性和依从性基础，但一个已验证方案不是唯一可能方案。小鼠中调整时间仍能获得保护，只能说明问题值得研究，不能直接替代人的临床证据。
</div>

<div class="mt-4 text-xs opacity-60 text-center">本页复述对谈，不构成个体疫苗建议；具体安排应与医生讨论。</div>

---

<!-- slide:32 -->

# 信任问题里，证据与激励必须同时可见

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>疗效进步</strong><br><br>
对谈以黑色素瘤检查点药物为例：约一半患者可能被治愈，而过去几乎没有这样的机会。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>预测缺口</strong><br><br>
若无法提前知道谁会响应，所有符合条件的患者都会尝试，未响应者承担时间、成本与副作用。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>激励冲突</strong><br><br>
Krummel 提出：能排除非响应者的检测会缩小药物市场，企业未必有最强动力主动开发。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-center text-sm">
这是对激励结构的分析，不是对所有药企或从业者动机的指控。他同时强调，绝大多数科学家与许多药企人员确实在努力解决疾病。
</div>

---

<!-- slide:33 -->

# 数据稀疏时，权威语气不能替代不确定性

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>早期疫情</strong><br><br>
传播方式、血液是否安全、口罩与接触风险都缺少足够信息，建议随数据快速变化。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>社会误读</strong><br><br>
公众把信息更新看成专家混乱；专家又常省略依据、缺口与决策代价。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<strong>更好做法</strong><br><br>
说明当前证据、替代解释与可改变结论的新数据，并把有争议的问题转成明确实验。
</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border border-blue-200 text-center text-sm">
科学交流的目标不是维持永远正确的外观，而是让人看懂：我们知道什么、不知道什么，以及为什么此刻仍要做决定。
</div>

---

<!-- slide:34 -->

# 免疫分子本身就能改变社交行为

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>输入</strong><br><br>
实验把感染时免疫系统会产生的 γ-干扰素注入小鼠血液。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>行为</strong><br><br>
没有真实感染的小鼠也出现更多社交退缩，类似生病时想独处的状态。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>通路</strong><br><br>
研究还显示脑内存在相应免疫分子的受体，支持脑能直接读取全身感染信号。
</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
这解释了为什么生病不只是局部器官事件：免疫信号会重新组织动机与社交行为，让身体把资源转向恢复并减少传播机会。
</div>

---
layout: two-cols
---

<!-- slide:35 -->

# 复杂系统通常要被按顺序推过多个状态

<div class="space-y-3 text-sm mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
肿瘤可借用伤口修复程序，让免疫系统反而提供支持。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
治疗可能要先拆除这种保护环境，再让系统学习肿瘤的异常身份。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
最后才进入有效攻击；单次猛推往往被系统韧性吸收或反弹。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./therapy-sequence.excalidraw" class="w-[430px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:36 -->

# 自身免疫像一套被放错场景的战术

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>正常剧本</strong><br><br>
免疫细胞按遗传与经验形成协作构型，在感染、修复或共生中执行不同任务。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<strong>错位剧本</strong><br><br>
系统把健康组织当成威胁，或在已经不需要的场景继续运行炎症程序。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>遗传入口</strong><br><br>
对谈以家族性狼疮相关受体缺陷为例：B 细胞关闭机制受损，更容易产生自身抗体。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border border-yellow-200 text-center text-sm">
自身免疫不是免疫力太强这一条轴上的单一问题，而是细胞组合、目标组织与信号状态发生了不同方式的错配。
</div>

---

<!-- slide:37 -->

# 同一个症状，背后可能是不同免疫构型

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 哮喘

呼吸困难是共同表型，但对谈指出可分出七八种构型：有的以嗜酸性粒细胞为主，有的以中性粒细胞为主，触发物也可能是花粉、氯或冷空气。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 炎症性肠病

阻断 TNF 等治疗对部分患者很有效，对另一些人无效；有人先响应再失效，临床只能不断更换药物。

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
新的空间与单细胞工具把疾病从一个标签拆成多个免疫亚型。真正的精准治疗，需要先知道患者运行的是哪套细胞战术。
</div>

---
layout: two-cols
---

<!-- slide:38 -->

# 群体中的弱者，可能是环境切换后的保险

<div class="space-y-3 text-sm mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
细菌在葡萄糖中生长时，大多数快速分裂，少数个体看起来是缓慢的失败者。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
把环境换成半乳糖后，原来的赢家未必继续领先，新赢家常从慢速群体中出现。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
作者概括：遗传与免疫多样性会让个体承担不同代价，却提高整个群体面对未知环境的生存选项。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./diversity-switch.excalidraw" class="w-[430px]" :darkMode="false" :background="false" />
</div>

---

<!-- slide:39 -->

# 核心金句

<div class="text-xs opacity-60 mb-3">8 条均已逐字在本集 transcript 中验证：</div>

<div class="grid grid-cols-2 gap-2 text-[12px] leading-tight">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It measures everything about us"
<div class="text-[10px] opacity-60 mt-1 not-italic">持续免疫感知</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"you are becoming like a mosaic."
<div class="text-[10px] opacity-60 mt-1 not-italic">衰老与细胞差异</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"T cell originally was thymus cell."
<div class="text-[10px] opacity-60 mt-1 not-italic">胸腺的命名与功能</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"immune cells dive into the bone marrow"
<div class="text-[10px] opacity-60 mt-1 not-italic">睡眠期迁移</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"They listen to brain states."
<div class="text-[10px] opacity-60 mt-1 not-italic">脑—免疫连接</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"A lot of times you get zero."
<div class="text-[10px] opacity-60 mt-1 not-italic">科研失败率</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"We definitely need data."
<div class="text-[10px] opacity-60 mt-1 not-italic">疫苗与不确定性</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Asthma isn't just one disease."
<div class="text-[10px] opacity-60 mt-1 not-italic">自身免疫异质性</div>
</div>

</div>

---
layout: end
---

<!-- slide:40 -->

# "nature doesn't necessarily want us<br>banging on it. It'll bang back."

<div class="mt-8 text-lg opacity-75">理解免疫，不是寻找一个更猛的按钮；<br>而是看见状态、位置、时间与反馈。</div>

<div class="mt-10 text-sm opacity-60">— Dr. Max Krummel</div>
