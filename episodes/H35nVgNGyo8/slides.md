---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '对话前DeepMind曹原：AI for Science爆发，一个新时代到来了'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<style>
div.absolute.p-2.text-xs.right-0.top-0 {
  display: none !important;
}
</style>

# AI for Science 爆发

<div class="text-2xl mt-4 opacity-80">从自动科研闭环，到概念抽象与人的价值判断</div>

<div class="mt-10 text-sm opacity-60">
硅谷 101 · 陈茜 × 曹原 · 约 109 分钟
</div>

<div class="mt-3 text-xs opacity-50">
前 Google DeepMind 资深研究科学家、Unreasonable Labs AI 联合创始人
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 爆发条件
数学、代码、推理、Agent 工作流与记忆管理，终于开始组成可运行的科研系统。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 验证瓶颈
科学必须穿过信息世界，进入成本高、速度慢、无法无限复制的物质世界。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 闭环方法
AI4S 与 AI4AI 是任务目标；RSI 是让系统根据反馈持续改进的方法。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 发现边界
在已有概念中搜索已经很强；从观测中抽象出新概念，仍是更难的跃迁。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 数学与物理
Lean 能验证证明，物理却还必须跑实验；两者的闭环速度完全不同。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 人的位置
定义问题、理解过程、评判价值与维护信任，仍需要人进入科研循环。

</div>

</div>

---

# 下一站：从数学与代码走向科学

<div class="grid grid-cols-3 gap-5 mt-7 text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 已成熟的能力

数学推理与代码生成提供了提出方案、分析数据、执行工具的基础。

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

### 新形成的系统

Agent 工作流把推理、代码、工具、记忆和反馈串成多步过程。

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 更难的对象

科学问题更宽、更复杂，而且大量结论必须经过物理实验验证。

</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 rounded">
“人类社会发展最终是由科学和技术来推动的”
</div>

<div class="mt-3 text-xs opacity-60">— 曹原解释为什么 AI for Science 会成为模型能力的下一站</div>

---
layout: two-cols
---

# AI4S、AI4AI 与 RSI

<div class="space-y-3 mt-4 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### AI4S
把 AI 当作研究员，目标是科学问题与知识发现。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### AI4AI
让模型研究训练、架构、参数或优化算法，目标是改进 AI 自身。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### RSI
递归自我改进不是任务，而是依据实验反馈反复更新方案的机制。

</div>

</div>

<div class="mt-3 text-xs opacity-60"><strong>作者概括</strong>：目标回答做什么，RSI 回答系统如何越做越好。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./concept-map.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 为什么是现在

<div class="space-y-3 mt-4 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>推理：</strong>根据已有观察提出下一步假设。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>代码：</strong>分析实验数据，检查结果是否符合预期。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>工作流：</strong>调用工具、运行实验、收集结果，再决定下一步。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>记忆：</strong>保存过去的观察、失败与上下文，让循环可以延续。
</div>

</div>

<div class="mt-3 text-xs opacity-60">访谈判断：这些能力一起到位，复杂科研才有了工程基础。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./readiness-stack.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# 哪些科学领域先跑出来

<div class="grid grid-cols-2 gap-5 mt-5 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 生物与药物开发

- 市场原本就大
- 流程相对标准化、结构化
- 数据丰富，部分步骤适合模拟
- 周期长、成本高，自动化价值直接

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 材料

- 应用范围广，但细分市场很碎
- 不同材料的研发与生产流程差异大
- 新结构只是第一步，下游制造与价值捕获更分散
- 难用一套标准方案覆盖整条价值链

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-5 text-xs">
<div class="p-3 rounded bg-blue-50">芯片设计：可计算、可验证的环节先产品化</div>
<div class="p-3 rounded bg-purple-50">电池与量子计算：仍处于多路线探索</div>
<div class="p-3 rounded bg-yellow-50">共同筛选器：市场 × 结构化 × 验证速度</div>
</div>

---

# 科研副驾驶 vs 自主发现

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Co-Scientist：科研副驾驶

像工作台或集成环境：查文献、分析数据、设计实验、运行模拟、给出建议。

<div class="mt-4 text-xs opacity-65">价值主要来自压缩科研流程，不要求模型独立产生新知识。</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Autonomous Discovery：自主发现

模型提出方案、调用实验、读取反馈，并在闭环中产生新的结构、算法或知识。

<div class="mt-4 text-xs opacity-65">价值更大，但同时要求可靠验证、长期记忆与真正的新颖性。</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
同一个模型在不同科研系统里的角色可能完全不同：助手、工具调用者、总调度，或自主研究员。
</div>

---

# 人先定义问题，AI 再扩大搜索

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 人的品位
决定什么值得研究、动机是否重要、结果应如何评价。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### AI 的辅助
搜索文献、补充分析、结构化初始问题、拆出可计算的子任务。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 适合的入口
过程能被干净建模，输出能较快验证，反馈能重新进入下一轮。

</div>

</div>

<div class="mt-7 p-5 text-xl italic border-l-4 border-red-500 bg-red-50 rounded">
“问题定义必须是人来定义的”
</div>

<div class="mt-3 text-xs opacity-60">— 曹原谈科学家的不可替代环节</div>

---
layout: two-cols
---

# 通用总调度 vs 垂类专家

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 通用模型：实验室总调度

理解自然语言、代码、JSON 与多模态输入，负责推理、计划、协调工具和串联流程。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 垂类模型：单领域专家

AlphaFold、GNoME 等只接受特定领域表征，能在局部任务里很强，却不能统筹整个实验室。

</div>

</div>

<div class="mt-3 text-xs opacity-60"><strong>作者概括</strong>：总调度负责上下文，专家模型负责特定映射。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./model-stack.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 科研闭环：结果必须回写

<div class="space-y-3 mt-4 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
① 根据现有观察提出假设与实验方案
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
② 写代码或调用工具，准备并分析实验
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
③ 在模拟环境或物理实验室执行
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
④ 读取结果，更新记忆、方案与下一轮搜索
</div>

</div>

<div class="mt-3 text-xs opacity-60">闭环的意义：把一次性回答变成可验证、可积累、可继续的研究过程。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./lab-loop.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 验证瓶颈：跨越信息与物质

<div class="space-y-3 mt-4 text-sm text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 信息侧迭代快
数学、代码、模拟可以快速复制、执行和判断结果。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 物质侧反馈慢
湿实验受时间、能量、材料、设备与机器人精度限制。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 系统速度看最慢环节
如果实验无法快速返回可靠数据，模型再快也无法形成高频闭环。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./info-matter.excalidraw" class="w-[465px]" :darkMode="false" :background="false" />
</div>

---

# AutoLab 的两条加速路径

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 路径一：让实验自动化

标准流程由专用机器人执行；云实验室把物理操作封装为可调用接口，让模型远程发起实验。

<div class="mt-4 p-3 rounded bg-white border border-green-200 text-center">
主持人引用 A-Lab 案例：<strong>17 天、353 次实验、36 / 57 个目标</strong>
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 路径二：让每次实验更值钱

更好的数据分析、历史记忆与方案选择，减少昂贵的物理试错。

<div class="mt-4 p-3 rounded bg-white border border-orange-200 text-center">
嘉宾举例：若目标原需 <strong>10 次</strong>实验，智能提升后争取压到 <strong>2 次</strong>
</div>

</div>

</div>

<div class="mt-5 text-xs opacity-60">一个提高实验吞吐，一个提高单次实验的信息增益。</div>

---

# 选下一步：利用与探索必须共存

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Exploitation · 利用

继续沿当前最有希望的方案深入，最大化已知回报。

<div class="mt-3 text-xs opacity-65">风险：被局部最优困住，反复采样同一路径。</div>

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Exploration · 探索

给尚未充分尝试、但可能带来新发现的分支分配机会。

<div class="mt-3 text-xs opacity-65">风险：新奇不等于合理，成本可能被低价值试验消耗。</div>

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
访谈给出的算法直觉：节点分数既看未来价值，也看路径已经被采样多少次；两者共同决定下一步实验。
</div>

---

# 相关性不是稳定的因果机制

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 文本相关性
模型学到训练数据中常见的表达与关联，熟悉问法时往往能答对。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 表述脆弱性
措辞、顺序或前提稍作变化，即使语义近似，结果也可能翻转。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 世界模型
若模型掌握独立于语言表面的物理规律，才更可能稳定处理干预与反事实。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
访谈特别强调 Do-Calculus 式问题：改变一个变量、移除一个条件，系统能否预测后果？当前语言模型的可靠性仍不足。
</div>

---

# 闭环也要学会改造自己

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一层：改方案
根据实验反馈更新配方、参数或下一步假设。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 第二层：改模型
用新数据后训练模型，或调整训练设置与能力。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 第三层：改工作流
决定何时调用记忆、何时重写代码、如何调整 Agent harness。

</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Meta-recursive 的关键变化

研究对象不再只是实验方案；连安排实验的流程本身，也进入持续观察与改进的范围。

</div>

---

# 验证解决之后，还有发现问题

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 已有表征空间中的搜索

重组已有概念、调参数、试配方、搜索低概率路径。效率可以远超人类，也能产出新结果。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 创造新的表征空间

从观测中抽出此前不存在的对象、概念与理论，使新概念能稳定泛化到许多场景。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
嘉宾判断：多数现有 AI4S 仍在第一类里很强；诺贝尔级发现更可能要求第二类能力。
</div>

<div class="mt-3 text-xs opacity-60"><strong>作者概括</strong>：搜索扩大答案空间，抽象改变问题空间。</div>

---
layout: two-cols
---

# 发现的三次跃迁

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>感知：</strong>接收现象、实验和数据。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>概念：</strong>从表面现象中抽象出力、数、特征值等对象。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>形式化：</strong>把概念凝结为公式、定义与理论体系。
</div>

</div>

<div class="mt-4 text-xs opacity-60">访谈判断：AI 能处理感知和既有表示，但从观测跨到新抽象仍最困难。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./discovery-ladder.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# AlphaGo 第 37 步：新发现，不等于新概念

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 为什么算发现

它采样到过去不常见的路径，在现有棋盘与规则空间里找到新的有效选择。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么还不够

它重新排列已有内部表征，却没有创造一套能跨场景泛化的新概念。

</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这条边界解释了访谈中的核心张力：新结果可以来自搜索，新理论往往还要求命名、抽象与重新组织知识。
</div>

---
layout: two-cols
---

# 神经符号：让两种能力互补

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>连接主义：</strong>从大量经验中学习模糊表征，擅长生成候选与处理语言、图像。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>符号主义：</strong>把先验知识写成规则、公式和工作流，精确但容易脆弱。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>组合方式：</strong>模型负责提出，符号系统负责约束、连接知识与严格验证。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./neuro-symbolic.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 新颖性与可行性，缺一不可

<div class="grid grid-cols-2 gap-6 mt-5 text-sm">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 只追求新颖

随机词、低概率采样都能产生不同想法，但很容易变成与问题无关的噪声。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 只追求可行

模型会停留在论文与训练数据覆盖的高概率区域，给出专家早已知道的方案。

</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
<div class="p-3 rounded bg-blue-50"><strong>连接主义</strong><br><span class="text-xs opacity-65">学习与生成</span></div>
<div class="p-3 rounded bg-purple-50"><strong>符号机制</strong><br><span class="text-xs opacity-65">关系与约束</span></div>
<div class="p-3 rounded bg-green-50"><strong>实验验证</strong><br><span class="text-xs opacity-65">现实反馈</span></div>
</div>

<div class="mt-4 text-xs opacity-60">嘉宾用 <strong>98% 连接主义 + 2% 符号主义</strong>作可能结构的示例，并非固定配方。</div>

---
layout: two-cols
---

# AI for Math：生成不等于成立

<div class="space-y-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型：</strong>提出自然语言证明、引理与搜索路径。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>自动形式化：</strong>把自然语言与数学符号翻译成 Lean。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>形式验证：</strong>编译通过后，逻辑链条得到严格检查。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>主要瓶颈：</strong>翻译速度、准确性与 mathlib 的知识覆盖。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./math-pipeline.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 当证明过剩，人的带宽变成稀缺品

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 供给变化
AI 可以快速生成大量候选证明，甚至堆积在人类尚未解决的问题下面。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 新瓶颈
专家没有足够时间逐份验证、理解与维护这些结果。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 人的判断
结论是否有工具价值、是否包含洞见、是否值得进入知识体系，不是同一个问题。

</div>

</div>

<div class="mt-6 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 rounded">
“你需要去理解 然后去评判”
</div>

<div class="mt-3 text-xs opacity-60">— 曹原谈自动验证之外的人类职责</div>

---

# 数学、物理与溯因推理

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 数学
生活在形式逻辑空间；前提、定义和验证工具齐备时，可以高强度搜索证明。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 物理
必须走出逻辑空间，进入物质世界；理论最终要被实验检验。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 溯因推理
从一个现象想象可能原因，再把解释泛化到其他现象；它要求抽象、想象与世界模型。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
访谈区分了两件事：随机事件提供触发，发现者仍要识别事件背后的规律。
</div>

---

# 从可商业化环节，到诺贝尔级发现

<div class="grid grid-cols-3 gap-4 mt-5 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在
靶点、分子结构、模拟、芯片与程序验证等中间环节已经具备产品化空间。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 中期
补齐因果推理、长期记忆、持续学习、实验与代码能力，让模型能处理更长科研周期。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 长期
若目标是 AI 自主完成诺贝尔级发现，曹原给出的个人判断是至少还要二三十年。

</div>

</div>

<div class="mt-6 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这也是访谈最重要的战略判断：科学不只是模型能力的应用场景，也是迫使模型提升推理、抽象、实验与可靠性的驱动力。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">以下 8 句均已逐字核对本期字幕：</div>

<div class="grid grid-cols-2 gap-2 text-[13px] leading-snug text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“科学和技术怎么用AI自动去推动”
<div class="text-[10px] opacity-60 mt-1 not-italic">— AI for Science 的战略意义</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“问题定义必须是人来定义的”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 科学家的不可替代环节</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“可验证性是非常重要的一个指标”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 选择适合 AI 的研究问题</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“必须突破信息极限 走到物理世界”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 科学闭环为何比代码更难</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“物理必须要走出逻辑世界”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 数学与物理的分界</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“你需要去理解 然后去评判”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 证明过剩之后人的职责</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“都是从无用的东西开始”
<div class="text-[10px] opacity-60 mt-1 not-italic">— 好奇心、美学与理论科学</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“还是需要一些从上至下的思考”
<div class="text-[10px] opacity-60 mt-1 not-italic">— AI 狂热中的第一性问题</div>
</div>

</div>

---
layout: end
---

# “Science不只是一个AI的应用”

<div class="mt-6 text-lg opacity-70">它也是推动 AI 变得更强、更可靠、更理解世界的驱动力。</div>

<div class="mt-10 text-sm opacity-50">硅谷 101 · 陈茜 × 曹原</div>
