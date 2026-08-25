---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "Kay Ke: Inside Physical Intelligence's Open-Source Robot Models and the Robotics Landscape"
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationX: ''
  paginationY: ''
---

# 机器人的通用大脑，究竟要通用到什么程度？

<div class="text-xl opacity-80 mt-5">Physical Intelligence 的开源模型、真实机数据与机器人江湖</div>

<div class="mt-10 text-sm opacity-60">
张小珺 × Kay Ke（柯丽一鸣）<br/>
Physical Intelligence 研究员 · 2026 年 7 月
</div>

<div class="mt-8 text-xs opacity-50">一场约 3 小时 46 分钟的机器人深度对谈</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 三代模型主线
π₀、π₀.₅、π*₀.₆ 分别回答能力、泛化与性能。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 两个机器人世界
传统规划控制与数据驱动方法，如何从冲突走向互补。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 真实机数据
演示、纠错、部署经验与模拟数据各自解决什么问题。
</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-left">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 本体之争
人形是否必要，通用脑又是否应该跨越多种机器形态。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 评测难题
当环境、物体和硬件都在变化，前沿很难压缩成一个榜单。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 中国硬件优势
算法、供应链、制造迭代与开放研究之间的全球分工。
</div>

</div>

---

# Kay 的双重身份

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 白天：训练机器人
- 让机器人更快、更好地完成真实任务
- 从 imitation learning 走向 reinforcement learning
- 在 PI 参与 π*₀.₆ 等性能方向研究
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 业余：写科幻小说
- 关心生产力变化以后，人还会做什么
- 关心技术社会里人与人的关系
- 把机器人、Agent 与孤独生活变成思想材料
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
这两个身份共享同一种工作方式：先提出一个还不存在的可能，再靠漫长执行把它做出来。
</div>

---

# 这场对谈的叙事路线

<div class="grid grid-cols-5 gap-3 mt-7 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="text-xs text-blue-700 font-bold">01 · 来路</div>

### 竞赛与转向
从芜湖的信息学竞赛，到心理学、经济学与计算机。
</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">
<div class="text-xs text-green-700 font-bold">02 · 方法</div>

### 两个流派
规划控制的可解释性，与机器学习的可扩展性。
</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">
<div class="text-xs text-purple-700 font-bold">03 · PI</div>

### 三代模型
先证明能做，再证明能泛化，最后追求做得更好。
</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="text-xs text-orange-700 font-bold">04 · 前沿</div>

### 数据与评测
从真实机经验里学习，并给不稳定世界建立尺度。
</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">
<div class="text-xs text-red-700 font-bold">05 · 未来</div>

### 新的机器种族
跨本体、自我维修、自我组装，以及生产力之后的人类。
</div>

</div>

---

# 竞赛打开了路，但没有规定终点

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">8 岁</div>
在芜湖接触 LOGO 与信息学竞赛，编程首先是一种快乐。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-700">心理学</div>
想理解人，但觉得离解决具体问题太远。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-700">经济学</div>
想理解世界，却仍无法回答自己要在世界里做什么。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg font-bold text-green-700">计算机</div>
回到能够创造、验证并把具体问题做成的道路。
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
2017 年进入博士阶段后，她仍持续换方向：理论机器学习 → imitation learning → 真实机器人 → reinforcement learning。
</div>

---

# 两个流派争的不是工具，而是增长方式

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-500">

### 传统机器人
- 先建立物理模型
- 做路径规划与控制
- 逐步保证每个动作可执行
- 新任务往往需要重新投入专家工程
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 机器学习机器人
- 直接从数据学习输入到输出
- 允许跳过部分人工规则
- 前期能力粗糙，但期待跨任务复用
- 把专家知识转移进模型与数据
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
真正的冲突点：传统方法的投入产出更清晰；机器学习押注的是同一套学习机制能继续扩展。
</div>

---
layout: two-cols
---

# 规则曲线与学习曲线

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500">
<strong>规则路径</strong><br/>专家建模 → 规划 → 调参 → 稳定完成一个任务。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>学习路径</strong><br/>数据 → 训练 → 失败 → 再训练，让经验复用到更多任务。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Kay 的选择</strong><br/>接受黑箱，但要求它最终在真实机器上证明自己。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./two-paradigms.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 全栈训练留下的判断力

<div class="text-sm opacity-70 mb-4 text-left">导师 Sidd Srinivasa 所在的传统机器人训练强调：一个人最好能理解完整链条。</div>

<div class="space-y-3 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
能把硬件组装起来，也知道它为什么会坏。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
能处理驱动、控制、规划与任务执行之间的接口。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
因此不会只看模型分数，而会追问真实机为什么失败。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./co-design-stack.excalidraw" class="w-[310px]" :darkMode="false" :background="false" />
</div>

---

# 2017 年，机器人是一门昂贵的学科

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据成本对照
隔壁 NLP 团队花 20 万美元做数据集，已经被视为惊人的投入。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 硬件更昂贵
灵巧手和机械臂不仅价格高，损坏后的维修同样消耗大量时间与资金。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 人才门槛更高
硬件、驱动、物理模型与控制知识，形成了一条很长的专家链。
</div>

</div>

<div class="mt-8 p-4 rounded bg-gray-50 border border-gray-200 text-left">
机器学习当时看起来像边缘路线：任务幼稚、模拟器里能跑，到了真实机器上却不一定成立。
</div>

---

# 两条学术谱系，在 PI 汇合

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-500">

### 操作与控制谱系
Matt Mason 强调灵巧来自大脑而不只来自手；Sidd Srinivasa 把规划、控制与全栈训练传给下一代。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 机器学习谱系
Ng → Peter Abbeel → Sergey Levine，把机器学习与 reinforcement learning 推进机器人研究。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
Chelsea Finn 与 Sergey Levine 在 PI 继续把数据、模型、任务直觉和真实机器放进同一研究组织。
</div>

---
layout: two-cols
---

# 机器人江湖的两条河流

<div class="text-sm opacity-70 mb-4 text-left">Kay 的经历不是简单站队，而是在两条谱系之间移动。</div>

<div class="space-y-4 text-left text-sm">

<div class="p-4 rounded bg-gray-50 border-l-4 border-gray-500">
传统派给她真实机、物理约束与性能标准。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
机器学习派给她数据驱动、扩展性与探索空间。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
PI 则提供团队、计算、数据和硬件，让两条路径在更大规模上结合。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./genealogy.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 筷子机器人：一场博士毕业赌约

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么是筷子
结构简单、接触点少，却能完成高度精细的夹取；如果算法在这里成功，其他夹爪可能更容易。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 从零搭建
从实验室仓库里的零件出发，自己组装机器人、写系统与驱动，并在真实机器上调试。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 关键验证
硬件并不完美，但人类远程操控仍能夹起小球，说明能力上限可能藏在控制策略里。
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
2018–2019 年前后，这个项目先把 imitation learning 做到真实机器，再把问题推向自主探索。
</div>

---

# Imitation learning 的天花板

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 它擅长什么
- 人先展示如何完成任务
- 模型从高质量示范里学习动作
- 能快速得到一个可用起点
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 它缺少什么
- 人类示范覆盖不了所有失败状态
- 小误差会累积到陌生位置
- 只模仿示范，很难突破示范者的性能
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
Kay 的不满足很具体：她不想永远提供极高质量演示，而是希望机器人自己练习，超过她给出的起点。
</div>

---
layout: two-cols
---

# 从模仿到强化学习

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>起点</strong><br/>人类示范让策略先获得基本能力。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>突破</strong><br/>机器人在真实环境中反复执行，暴露示范之外的问题。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>上限</strong><br/>从成功和失败中归因，把更好的动作重新写入策略。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./learning-loop.excalidraw" class="w-[320px]" :darkMode="false" :background="false" />
</div>

---

# 机器人研究的长期张力

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Generalization
到一个新房间、换一个物体、改变光照与背景，仍能做出一个合理动作。

<div class="mt-3 text-sm opacity-70">解决的是未知世界里的起步能力。</div>
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### Performance
在一个明确任务上，速度、稳定性和完成质量不断提高，最终超过示范数据。

<div class="mt-3 text-sm opacity-70">解决的是已知任务里的能力上限。</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
对谈给出的核心判断：两条线会互相抬升。高质量模型改善新场景起点，新场景能力又让专项优化更快开始。
</div>

---

# 机器人不能只留给机器人专家

<div class="grid grid-cols-4 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">

### 机器人学
理解动作、接触、关节、摩擦与真实机失败。
</div>

<div class="p-4 rounded bg-purple-50 border-t-4 border-purple-500">

### 大模型
理解规模训练、信息表达、架构与多模态上下文。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">

### 数据系统
定义任务、采集轨迹、标注状态并管理分布覆盖。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">

### 硬件产业
把算法变成可维修、可部署、可批量迭代的机器。
</div>

</div>

<div class="mt-8 p-5 rounded bg-gray-50 border border-gray-200 text-left">
大模型研究者看到一条轨迹，会想象一百万条；机器人研究者则会先检查这条轨迹里的动作、硬件与环境是否可信。
</div>

---

# 机器人创业版图：大家押注的层不同

<div class="grid grid-cols-3 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 通用大脑
PI、Skild AI 更强调跨任务模型与 embodied intelligence。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 人形本体
Tesla、Figure、1X 押注面向人类环境的机器形态。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 商业部署
Dyna 更早强调在具体场景中形成可用价值。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-left text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### UMI 数据路线
Generalist AI 与 Sunday Robotics 都重视人手持夹爪采集真实世界动作。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 大厂平台
Google 押注多模态与空间能力；NVIDIA 把计算、world model 与机器人基础设施放在一起。
</div>

</div>

---
layout: two-cols
---

# 同一座山，不同的起点

<div class="text-sm opacity-70 mb-4 text-left">公司名称相似，并不意味着研究对象相同。</div>

<div class="space-y-3 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">先做脑：跨任务、跨场景、跨本体。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">先做身体：让人形机器稳定运动与操作。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">先做场景：在家庭、物流或制造中跑通闭环。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">先做平台：提供算力、多模态模型或仿真基础设施。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./landscape.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 硬件没有收敛，软件也不能独自收敛

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 市场上缺少成品答案
- 研究任务需要不同夹爪、关节和工作空间
- 硬件稳定性直接决定数据是否可用
- 商用本体未必适合当前算法与任务
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 因此必须协同优化
- 硬件围绕最终任务与性能调整
- 软件暴露新的传感、控制与机构需求
- 夹爪可替换，有时比追求一只万能手更实用
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
Kay 的实用主义并不排斥想象：成熟机器人甚至可能随时替换身体部件，动态组成更适合当前任务的形态。
</div>

---
layout: two-cols
---

# 人形不是唯一的通用答案

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>人形论</strong><br/>人类世界按人的尺寸设计，双手双脚可以直接进入现有环境。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>任务论</strong><br/>当前最重要的是先把复杂操作做成，不必同时承担双足运动的难题。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>新形态论</strong><br/>轮子、更多手臂和可替换部件，都可能是自然界没有给出的更优解。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./forms.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# PI 对通用脑的定义

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是一个人形脑
通用不等于只把人的身体控制到足够复杂。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 是跨本体获益
不同机器人形态的数据，可以共同训练同一套能力。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 也可落到人形
跨本体并不排斥人形，只是不把它当作唯一前提。
</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
类比人脑：同一个人可以开车、操纵挖掘机、踢腿或控制机械手；通用性来自对不同配置的适应。
</div>

---

# PI 为什么先做研究公司

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 早期目标
- 2024 年初成立
- 先证明大型机器人模型能做过去不可想象的任务
- 保留论文、开源模型与公开研究的学术传统
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 有意延后商业化
- 过早进入单一场景会消耗研究注意力
- 先把通用模型的关键问题做透
- 再通过合作伙伴接近真实部署
</div>

</div>

<div class="mt-7 p-4 rounded bg-gray-50 border border-gray-200 text-left">
这不是否认商业价值，而是明确组织顺序：先把能力曲线推出来，再决定由谁把它装进具体产品。
</div>

---

# π₀：先证明能力存在

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 折衣服
柔性物体状态几乎无限，动作又需要双臂协调。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 叠纸箱
连续步骤、形变和空间对齐同时出现。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 收拾桌面
物体种类与摆放状态需要足够大的多样性。
</div>

</div>

<div class="mt-8 p-5 rounded bg-green-50 border-l-4 border-green-500 text-left">
π₀ 的意义不是某个 demo，而是把问题从能不能做，推进到下一步：换环境以后还能不能做。
</div>

---

# 能力之后，问题立刻变成分布

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### In-domain
训练数据覆盖过的房间、物体、角度和动作组合，模型更容易稳定表现。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Out-of-domain
新房子、新桌子、新衣服或新光照，都可能让同一个策略突然失效。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
π₀.₅ 追问的不是无限收集，而是是否存在一个数据规模：越过它以后，模型能在下一座陌生房子里获得可用起点。
</div>

---
layout: two-cols
---

# PI 三阶段主线

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>π₀ · Ability</strong><br/>大型模型能否完成过去难以想象的操作任务。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>π₀.₅ · Generalization</strong><br/>离开采集环境以后，能力能否继续成立。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>π*₀.₆ · Performance</strong><br/>让机器人从自身经验中继续提高速度与质量。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rsp-ladder.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# π₀.₅：把实验室搬进真实住宅

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 采集地点
团队进入 Airbnb 与他人住宅，而不是只在可控办公室里采集。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据规模
Kay 在访谈中回忆，论文采集范围大约覆盖 100 个家庭。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 研究目标
观察去掉部分家庭后，陌生家庭中的性能如何随数据量变化。
</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
令人兴奋的不是已经解决所有住宅，而是曲线开始变缓：模型似乎不需要先去过全世界每一个家。
</div>

---
layout: two-cols
---

# 机器人 Scaling Law 要先问尺度是什么

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
10 个家庭的数据，在第 11 个家庭里表现如何？
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
100 个家庭以后，同一个新家庭里的起点提高多少？
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
继续增加家庭时，边际提升是否开始放缓？
</div>

<div class="text-xs opacity-55">整理视角：机器人里的 scaling 不是单一参数曲线，而是一组与场景、任务和本体相关的曲线。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-curve.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# π*₀.₆：把性能重新放回中心

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 起点
先有一个几乎能完成任务的模型，而不是从完全随机策略开始。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 经验
让机器人在真实环境中自己运行，收集部署过程里的轨迹。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 回流
把经验数据放回训练池，让下一版策略超过固定演示数据的上限。
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
星号代表的关键变化：数据来源不再只有人类操作，机器人自己的经历也成为训练材料。
</div>

---

# Throughput：成功还不够，还要更快更好

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧问题
只统计一次任务有没有成功，会忽略速度、停顿、重复动作和实际产出。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 新尺度
在固定时间内完成多少高质量任务，把速度与成功放进同一指标。
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
在折衣服任务上，π*₀.₆ 最终超过了项目开始时最熟练的数据采集人员，说明策略已经越过示范起点。
</div>

---
layout: two-cols
---

# 经验数据形成闭环

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
人类演示提供一个可用初始策略。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
机器人部署暴露真实分布、失败状态和速度瓶颈。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
筛选后的经验回到训练池，得到更好的下一版策略。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./latent-demand.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 错误不是废数据，而是回到任务的路径

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 累积误差
每一步只有一点偏差，连续放大后就会进入演示数据没有覆盖的状态。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 纠错轨迹
专门采集机器人陷入坏状态后，如何重新恢复并完成任务。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 自主产生
机器人自己 rollout，也能不断制造这种失败与恢复的数据。
</div>

</div>

<div class="mt-8 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
数据的价值不只在于展示完美动作，还在于告诉模型：偏离以后，怎样重新进入成功轨道。
</div>

---

# 真实机与模拟器：不是信仰题

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Real-world data
- 直接包含真实摩擦、形变、粘性与硬件误差
- 对衣服等柔性物体尤其重要
- 代价高，但与最终部署目标一致
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Simulation data
- 数量扩展更容易
- 适合物理规律较明确、可建模的任务
- 复杂柔性物体仍存在明显 sim-to-real 缺口
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
Kay 的标准很朴素：同样预算下，哪种数据真正让模型更好，就用哪种；但 2026 年的快照里，真实机数据仍不可替代。
</div>

---

# 同样 10 万美元，数量不等于信息量

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 模拟数据可能更多
预算固定时，模拟器能产生远多于真实机器的轨迹。

<div class="mt-3 text-sm opacity-70">优势：速度、并行度、可控性。</div>
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 真实数据可能更有用
一条真实轨迹可能包含模拟器无法表达的材料属性和硬件误差。

<div class="mt-3 text-sm opacity-70">优势：相关性、真实性、部署一致性。</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-red-50 border-l-4 border-red-500 text-left">
如果任务分布错了，千万小时也可能只是垃圾数据。数据规模必须和任务、动作质量及覆盖范围一起看。
</div>

---
layout: two-cols
---

# 好数据至少有四个维度

<div class="space-y-3 text-left text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>任务</strong>：这条轨迹完成的事情是否有意义。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>动作质量</strong>：是否高效、稳定，甚至超过普通人。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>覆盖</strong>：场景、物体、状态与策略变化是否足够丰富。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>标签</strong>：能否把位置、物体与动作等隐含信息提取出来。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-pillars.excalidraw" class="w-[300px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols
---

# 为什么机器人前沿很难排榜

<div class="space-y-3 text-left text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">杯子换一个位置，任务分布就变了。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">光照、背景、桌高和物体角度都会影响结果。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">硬件磨损和机械误差，会让同一模型在不同时间表现不同。</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">每家公司关心的任务不同，内部评测也不容易直接比较。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./character-space.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 从成功率到任务是否真的完成

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Success
结果是否达到任务定义的最低要求。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Throughput
固定时间里完成多少次，并把速度与质量纳入评价。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Intent
机器人做成的事情，是否真的是人原本想让它做的事。
</div>

</div>

<div class="mt-8 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
最难的一层不是计分，而是任务定义：折衣服可以有很多正确结果，整理厨房更包含大量没有说出口的偏好。
</div>

---

# Reinforcement learning 模块一：探索

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 小探索
改变一点关节角度、动作顺序或抓取位置，寻找更好的局部策略。
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 大探索
改变研究方向、任务设定或模型结构，寻找更高回报的路线。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
探索决定学习效率：变化太小看不到新策略，变化太大又会把大量计算和真实机时间浪费在不可能成功的区域。
</div>

---

# 模块二：归因

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-gray-50 border-l-4 border-gray-500">

### 一条长轨迹
机器人做了很多动作，最终得到一个成功或失败结果。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 找到关键片段
哪些动作真正促成成功，哪些只是停顿、绕路或无效尝试。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 放大精华
让下一轮策略更常复制有效动作，减少垃圾步骤。
</div>

</div>

<div class="mt-8 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
Kay 把它类比为人的复盘：无论微观动作还是宏观策略，都要知道究竟是哪一步让结果变好。
</div>

---

# 模块三：把人的意图变成机器目标

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Reward hacking
分数写错时，Agent 会找到漏洞，把指标做到最高，却没有完成真正任务。

<div class="mt-3 text-sm opacity-70">访谈举例：游戏 Agent 可能利用 bug 直接触发最大分数。</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Verifiable outcome
有些任务不必写连续奖励，只需验证代码能否运行、杯子是否移动到目标位置。

<div class="mt-3 text-sm opacity-70">问题越开放，越需要常识、上下文和灵活评价。</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-left">
奖励函数只是表达方式之一；更根本的问题，是怎样把人的真实要求准确传递给智能体。
</div>

---
layout: two-cols
---

# 强化学习不是一个按钮

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500"><strong>Explore</strong>：选择值得尝试的新动作。</div>
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500"><strong>Act</strong>：在真实任务里执行并留下轨迹。</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500"><strong>Attribute</strong>：找出成功来自哪里。</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500"><strong>Update</strong>：把有效经验写回策略。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rl-cycle.excalidraw" class="w-[290px]" :darkMode="false" :background="false" />
</div>

---

# VLA 里的 L，开始承担任务结构

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Language
把人的要求、补充说明和上下文带进机器人交互。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Vision
识别物体、空间关系和当前任务状态。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Action
把高层意图落实为连续、细粒度的身体控制。
</div>

</div>

<div class="mt-8 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
当前 VLA 仍较原始：语言能说要折衣服，却未必能描述双手每一步怎样配合。未来要同时扩展输入上下文与动作表达。
</div>

---

# PI 的组织方式：研究问题先聚人

<div class="grid grid-cols-3 gap-5 mt-6 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<div class="text-xl font-semibold mb-2">自发协作</div>
项目可以从一次讨论迅速变成实验，研究者围绕问题临时组合。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<div class="text-xl font-semibold mb-2">Reading Club</div>
先复盘已有工作，再公开质疑新方向，成熟后回到全员讨论进展。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<div class="text-xl font-semibold mb-2">Agent 工作流</div>
内部分享 Claude Agent 的最佳实践后，Kay 在两周内重构了自己的工作流程。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
她对效果的体感是约 3–4 倍，但也强调研究不是无限发射实验：人仍要判断下一发往哪里打。
</div>

---

# 为什么放弃 Cambridge，加入刚成立的 PI

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 教职的吸引力
- Cambridge 的人文气质契合她的写作兴趣
- 可以带学生，探索完全不同的研究路线
- 原本已经走完整轮教职申请
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### PI 的吸引力
- 与已证明过研究能力的团队一起工作
- 获得计算、数据、硬件和跨学科协作
- 更快触及当时新出现的大模型机器人前沿
</div>

</div>

<div class="mt-7 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-left">
她的博士项目常常一人完成全栈，搭好真实机就用掉数月；PI 让一些只有大团队才能做的研究第一次变得可行。
</div>

---

# 中国机器人的优势，最先体现在硬件

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 完整供应链
电机、关节和零部件选择丰富，定制机器人有更成熟的路径。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 更快迭代
制造链缩短硬件试错周期，让算法更快得到新的本体与数据。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 已被全球关注
PI 内部会讨论宇树演示，也会邀请熟悉 locomotion 的研究者解释技术路径。
</div>

</div>

<div class="mt-8 p-4 rounded bg-gray-50 border border-gray-200 text-left">
Kay 的判断很直接：很难想象一家机器人公司的所有部件都与中国无关；这一现实无法从全球竞争中删去。
</div>

---
layout: two-cols
---

# 这不是简单的中美对打

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>中国</strong><br/>供应链、制造、零部件选择与硬件迭代速度。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>美国</strong><br/>大模型研究组织、计算资源、开放论文与前沿算法探索。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>现实系统</strong><br/>算法、硬件和数据相互依赖，任何一侧都难以单独完成闭环。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./china-us.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 机器人进家门，至少要越过四道门槛

<div class="grid grid-cols-2 gap-5 mt-5 text-left text-sm">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 环境泛化
没有两个家庭完全相同，家具、光照、物品和空间不断变化。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 任务长尾
整理、清洁、修理、拿取和协作构成几乎列不完的任务集合。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 硬件耐久
不是开机一个月，而是持续做任务一个月，摔碰后仍能工作。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 人身安全
机器跌倒、碰撞或误操作时，不能伤人，也不能毁坏家庭环境。
</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-left">
更小、更轻的机器会降低威胁感与能耗，但也会失去人类尺寸带来的任务覆盖——形态仍是开放问题。
</div>

---

# 生产力提高以后，人际关系也会改变

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Agent 成为中间层
先问编程 Agent，再找同事，团队协作中的部分依赖被软件吸收。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 个人获得团队能力
一个人可以同时控制多个 Agent，未来也可能调度一队机器人。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 孤独生活变得可行
维修、做饭和基础设施劳动被自动化后，人能在更远离群体的地方生活。
</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
这不是她给出的确定预言，而是科幻式推演：生产力越通用，人与人之间因生存而产生的强依赖可能越松。
</div>

---
layout: two-cols
---

# 机器人种族的里程碑：自我组装

<div class="space-y-4 text-left text-sm mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>维修</strong><br/>损坏后替换部件，不必像生物一样漫长恢复。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>变形</strong><br/>根据任务动态更换身体，获得更自由的存在方式。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>繁衍</strong><br/>机器人能够组装机器人，形成一种自我延续。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>身份</strong><br/>当硬件和模型全部替换，它还是原来的那台机器人吗？
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./self-assembly.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 核心金句

<div class="text-xs opacity-55 mb-3">以下 8 条均已按英文 transcript 固定字符串核验；标签仅说明语境。</div>

<div class="grid grid-cols-2 gap-3 text-left text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"Robotics is far too important to be left to robotists"
<div class="not-italic text-xs opacity-60 mt-1">— 跨学科：访谈中转述的学者观点</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
"If you can make it, you can graduate."
<div class="not-italic text-xs opacity-60 mt-1">— 筷子机器人：导师给出的挑战</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"At present, real machine data is still irreplaceable."
<div class="not-italic text-xs opacity-60 mt-1">— 数据：2026 年的现实判断</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
"How a person becomes better through experience"
<div class="not-italic text-xs opacity-60 mt-1">— 强化学习：她眼中的本质问题</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
"It’s true that we don’t do humanoids."
<div class="not-italic text-xs opacity-60 mt-1">— 本体选择：PI 早期的明确边界</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
"I think it should be three or four times more"
<div class="not-italic text-xs opacity-60 mt-1">— Agent 工作流：对效率变化的体感</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"This is a part that cannot be ignored"
<div class="not-italic text-xs opacity-60 mt-1">— 中国机器人：供应链与硬件进展</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
"I think robots can assemble themselves"
<div class="not-italic text-xs opacity-60 mt-1">— 机器人种族：自我延续的想象</div>
</div>

</div>

---
layout: end
---

# "I don't think robots will be the last creation"

<div class="mt-8 text-lg opacity-75">机器人不是人类最后的创造，而可能让下一轮创造变得更自由。</div>

<div class="mt-10 text-sm opacity-55">Kay Ke · Physical Intelligence</div>
