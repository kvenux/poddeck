---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI 越聪明，它在经济里的占比可能越小'
info: |
  Dwarkesh 对谈 Alex Imas（DeepMind AGI 经济学负责人 / 芝加哥大学）与
  Phil Trammell（Epoch 经济学负责人 / 斯坦福）——
  劳动份额、相关性部门、混乱中段、以及 AGI 时代该买什么指数。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 越聪明，它在经济里的占比可能越小

<div class="text-lg opacity-80 mt-4">
Dwarkesh 对谈 Alex Imas × Phil Trammell
</div>

<div class="text-sm opacity-60 mt-8">
劳动份额 · 相关性部门 · 混乱中段 · AGI 时代的指数策略
</div>

<div class="text-xs opacity-50 mt-6">
Alex Imas: Director of AGI Economics, Google DeepMind · 芝加哥大学经济学教授<br/>
Phil Trammell: Head of Economics, Epoch · Stanford research scholar
</div>

---

# 为什么这一期值得听

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 🧮 劳动份额之谜
工业革命之后 200 年，工资仍占 GDP 60%+。是会计错觉还是真定律？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 👥 相关性部门
什么样的服务"人在里头才有价值"？这能撑起一个经济体吗？

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 🌀 混乱中段
AI 够聪明能裁人，但不够聪明把饼做大——这种窗口存在吗？

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### ⚡ 电力 vs 社交媒体
AI 的红利会扩散给所有用户，还是被几家平台收掉？

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 💰 怎么再分配
UBI · 负所得税 · 通用基本资本——三种方案各有什么坑？

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🌍 发展中国家
没钱建数据中心的国家，该再培训还是直接买指数？

</div>

</div>

---
layout: two-cols
---

# 这本来应该是个谜

为什么劳动份额没有崩？

<div class="mt-6 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
工业革命以来 200 年，每个能自动化的工种都自动化了。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
但全经济体里付给人工资的份额，<strong>仍然超过 60%</strong>。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"有些人甚至担心这是个会计错误，因为它太稳定了。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./labor-share-stable.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# David Ricardo 的悖论

<div class="mt-6 grid grid-cols-2 gap-6">

<div>

### 1820 年

<div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded mt-3 text-sm">

Ricardo 看着工业革命，先说"对大家都好，价格会降"——然后反转：
"等等，这些值钱的活都要被机器干掉。
人人失业、政治动荡。"

</div>

<div class="mt-3 text-xs opacity-60">
<strong>作者概括</strong>：Ricardo 对"哪些工作会被自动化"的预测——基本全对。
</div>

</div>

<div>

### 2026 年

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded mt-3">

<div class="text-sm">如果你告诉 Ricardo……</div>
<div class="text-2xl font-bold text-green-700 my-2">prime-age employment</div>
<div class="text-sm">"is the highest it's ever been other than 2000."</div>

</div>

<div class="mt-3 text-xs opacity-60">
所有工作都被自动化了，但雇佣率反而是史上第二高。
</div>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"What David Ricardo ended up missing is...everything that got automated became cheap, people had more money to spend on things, and then they started spending money on services."
</div>

---

# 经济学家的认知盲区

Alex 的开场暴击：我们对未来的预测能力，被严重高估。

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 不要做个人预测

"What I think...is that kind of forecast that economists like us would make are not necessarily very useful."

经济学家在劳动市场预测上的分歧——往任何方向都有。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 没有数据可以用

> "We don't have data on basically consumer demand elasticities. We don't know what they are."

O*NET 任务数据库"rarely updated, super low quality"。

</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-center">
<div class="text-base font-bold text-purple-700">"We need a Manhattan project for data."</div>
<div class="text-xs opacity-60 mt-1">—— Alex Imas</div>
</div>

---

# 反向方法：先定剧本，再问该收什么数据

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 剧本 A
<strong>劳动份额 → 0</strong>

写下让这事发生的经济模型。需要哪些条件？

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 剧本 B
<strong>劳动份额维持</strong>

什么样的"稀缺"能让人继续被付钱？

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 剧本 C
<strong>全员就业</strong>

相关性部门撑得起吗？需要什么样的偏好？

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

每个剧本都对应不同维度的<strong>稀缺性</strong>——这才告诉你该去收集哪些数据。
而我们现在连这一步都没做。

</div>

---
layout: two-cols
---

# 相关性部门（Relational Sector）

Alex 的定义：

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"basically services and goods where the fact that the human was in the loop was actually part of the value of that product."
</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-green-50 rounded">
🎭 表演者、芭蕾舞者
</div>

<div class="p-3 bg-orange-50 rounded">
☕ 咖啡师、招待
</div>

<div class="p-3 bg-purple-50 rounded">
🩺 治疗师、教练（也许）
</div>

</div>

<div class="mt-4 text-xs opacity-60">
关键预设：消费者愿意为"人在里面"<strong>多付</strong>钱。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-economies.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但芭蕾舞者不是好例子

Alex 自己 walk back 这个 framing：

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 问题：相关性部门不是"全相关"

医生的工作不是"看病人"——是填保险表、给药厂打电话、写病历……

<strong>真正只有人能做的部分，可能只占工作的 5%。</strong>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Task-based model

一个工作 = 多个任务的组合。

把 9/10 自动化掉，剩 1/10 留给人——只有当消费者愿意为这 1/10 多付钱时，那个职业才算"相关性"。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 我们没有数据

要做的是 conjoint analysis：
"全机器 vs 这一步有人"，你愿意多付多少？

<strong>没有这个数据，预测都是猜的。</strong>

</div>

</div>

---

# 一个实证小实验：人画的艺术品

Alex 自己跑过的研究：

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 独版 · 唯一艺术品

人画的 >>>>> AI 画的

人画版本的支付意愿<strong>显著更高</strong>。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 印 500 份

人画的价格<strong>大幅下降</strong>——
失去"与某个人建立连接"的感觉。

AI 版本？没差。AI 一开始就被当 commodity。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

<strong>作者概括</strong>：相关性溢价不只来自稀缺。它来自一种<strong>内在偏好</strong>——
对共情、连接、与"另一个人"互动的偏好。
但这种偏好对足够多的行业有效吗？这才是关键。

</div>

---

# 1400 年的蒙古经济学家会怎么说

Phil 的类比：

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"If they just kind of held the varieties fixed...they might have said, well, we'll just satiate in...horse-like transportation and in yogurt and in airts, those shares will all go to zero and we'll be left spending all of our money on singers."
</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 他会预测

非人类工作的份额 → 0
（马、奶制品全都自动化了）

歌手 → 占消费的全部

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 实际发生的

新品类爆炸式扩张：
飞机、手机、电网、Netflix……

歌手仍然<strong>只占可忽略份额</strong>。

</div>

</div>

<div class="mt-4 text-center text-base font-semibold text-purple-700">
品类的增长，可能比相关性溢价跑得更快。
</div>

---

# 变种增长 vs 满足效应

Phil 给出的核心数学直觉：

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Alex 的情形

机器经济超快产出 → 同样东西堆积成山。

边际效用<strong>掉得比数量涨得快</strong>。

→ 钱开始流向人类相关性部门。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Phil 的情形

机器经济不断<strong>开新品类</strong>——
没到边际效用的悬崖。

→ 资本变种增长 ≠ 人类劳动份额上升。

→ 相关性多到爆，劳动份额仍可能 → 0。

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

"You can get all of the relational that you want, but it doesn't matter for labor share. It goes to zero." —— Alex 复述 Phil 的论点

</div>

---
layout: two-cols
---

# Moore 定律的悲观版本

Phil 改述：

<div class="mt-4 p-4 bg-gray-50 border-l-4 border-gray-400 rounded italic">
"The pessimistic framing of Moore's law is every 18 months the value of computation halves."
</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

我们一直<strong>跑得不够快</strong>，找不到那么多用计算的方法——
所以单位计算的价值在掉。

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

但 AI 来了，第一次<strong>反过来</strong>：
价值不掉了，反而涨了。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moores-law-flip.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# H100 悖论

<div class="mt-8 text-center">

<div class="text-3xl font-bold text-red-700 mb-2">
H100 现在比 3 年前更贵
</div>

<div class="text-base opacity-80 max-w-2xl mx-auto">
即便芯片更先进、世界上的算力总量更多。
</div>

</div>

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 原文（Dwarkesh）

> "an H100 costs more to rent now than it did 3 years ago, even though we have much superior technology and we have much more compute in the world"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 解释

"as models get smarter, the opportunity cost of compute gets higher."

变种增长——AI 给计算找到了一种新用途。需求曲线整个上移。

</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm text-center">
<strong>核心问题</strong>：我们能持续给算力发明新用途吗？这是决定一切的变量。
</div>

---

# 切换问题：Pareto 改进可能吗？

Dwarkesh 抛出的可能性：

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
AI 把活自动化了，但<strong>没有创造出足够的财富</strong>，
来补偿被自动化掉的那些人——
所以"自动化让所有人变更好"这件事不必然发生。
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 政治不可持续

裁掉一个 Meta 程序员（年薪 20 万）后，
你能政治上稳定地每年给他寄 20 万支票吗？

特别是还有大量底层工人挣得更少？

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 数学不易

公司省下的工资是真的钱。
但<strong>"省下的"≠ "饼变大了"</strong>。

如果技术前沿没扩张，重分配只是腾挪。

</div>

</div>

---
layout: two-cols
---

# 混乱中段（Messy Middle）

Molly 的概念：AI 强到能裁人，但弱到不能把饼做大。

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

替代软件工程师的资本<strong>只比工程师便宜一点点</strong>——
没有"丰盛效应"，没有 Jevons paradox。

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

财富还是没增长多少。
财政空间被压死。
再分配根本谈不上。

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

<strong>Alex 的判断</strong>：可能，但<strong>窗口很窄</strong>——
"My guess is that if we have the technology to automate so many jobs, then...probably all of us will be growing really fast."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./messy-middle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 政治经济学：2% 改变一切

Andy Hall 的观察，Alex 重申：

<div class="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded text-center">

<div class="text-2xl font-bold text-red-700">
"If there's a 2% increase in unemployment, the political winds completely change."
</div>

<div class="text-sm opacity-70 mt-3">—— Alex 引述 Andy Hall 的政治经济学博文</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### COVID 教给我们的事

财政响应是<strong>能</strong>很快出手的——
只要被定性为"紧急"。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 但慢漏更糟

如果不是大规模失业、而是"<strong>慢慢漏</strong>"——
那像 1920–1940 电话接线员那样
在 20 年里被边缘化、被低薪化的过程，可能更难处理。

</div>

</div>

---

# 接线员的 20 年慢镜头

Alex 引用的 QJE 论文：

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 时间线

1920 ⇨ 1940
电话接线员全部被自动化。

但<strong>用了 20 年</strong>——
技术早就有了，
扩散慢得像一场漫长的退潮。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 结局

她们被重新吸收进经济，
但："at lower salaries, and they were mostly underemployed."

不是失业的灾难。
是 underemployment 的慢性病。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm text-center">

<strong>作者概括</strong>：白领"末日"如果真发生，可能不是 2027 年的雪崩，而是 2030 年代的低薪冗员。

</div>

---

# Citrine 的悲观叙事 vs 经济学家的反驳

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### Citrine 假设

AI 自动化 → 大裁员 → 工资收入消失 →
消费坍塌 → <strong>负 GDP 增长</strong>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Alex 反向工程

"What conditions do you need on the economy to get negative economic growth?"

答案：极不合理的条件。

</div>

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">

要让经济<strong>负增长</strong>，需要：富人消费硬触顶 + 不再追加投资 + 即使 AGI 到手也不愿继续盖数据中心
（"We're not like 'Let's build more data centers. Let's build more fabs.'"）

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs italic text-center">
Phil 读完 Alex 的回应文章："This is pretty dumb." Alex："Actually, that's the point of the essay" —— 这些条件本来就是不合理的。
</div>

---

# 富人的"非满足"偏好——以及它的复利

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"Mark Zuckerberg is hiring MMA instructors and dancers for his wife's birthday and so forth. But most of his wealth is just stock in Meta. And he as a controlling shareholder could say 'turn all this wealth into dividend income.' But instead, he rather would have his wealth compound."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 两种人

A. 资本上很快"够了"
B. 资本上永不满足——
比如 Musk："talking about mass drivers on the moon."

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 选择压力

B 类型存钱率更高 → 长期占资本份额更大 →
<strong>整个经济的资本份额 ≈ 这少数人的偏好</strong>

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs italic text-center">
"almost a Nick Landian preference for like accelerating capital." —— Dwarkesh
</div>

---

# 但他们都会死

Alex 的反驳：历史告诉我们消散冲击（dissipation shocks）会清零。

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 历史规律

工业巨头积累资本 → 临终时：

- 传给孩子（管不好钱，跑不赢经济）
- 捐给基金会（基金会会花掉）
- 建图书馆、纪念碑

<strong>财富又被打散回经济。</strong>

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### AGI 时代的变量

如果人能<strong>不死</strong>——
"The living forever is key."

或者信托被对齐到"持续积累"——
这条历史规律就不再成立。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm text-center">

<strong>作者概括</strong>：寿命延长不只是医学问题，是<strong>政治经济学</strong>问题——
它决定了资本是否会持续滚雪球。

</div>

---

# 三种再分配方案

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 负所得税（NIT）

✅ 立刻能落地
✅ 像保险底盘
⚠️ 还是依赖政府意愿
⚠️ 跟 UBI 同样的"被掐脖子"风险

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 全民基本收入（UBI）

⚠️ Alex 的担忧：
"if people are just kind of dependent on a check, it really matters who's in power."

人不再用劳动换收入 → 整个权力对位转向当权者。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 通用基本资本（UBC）

✅ 你是<strong>股东</strong>而非领救济的人
✅ 产权而非政策
⚠️ "What do you target to put into people's portfolios?"
⚠️ 选错赛道 → 0 收益

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

David Autor 的提案变体：消费税 → 政府用税款<strong>买股票</strong> → 把股票分给所有人。
和直接重分配股票差别不大，但叙事和政治可行性可能更好。

</div>

---

# UBC 的硬骨头：indexing 越来越难

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

Phil 在博文里指出：普通家庭的资产是一栋房子——房子的价值<strong>主要是地段</strong>。
地段的价值 = 靠近其他人。

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### 关键反讽

"a capital that is uniquely ill-suited to be complementary to the production of AI or the serving of AI or to robots."

→ 你拥有的资产——房子——偏偏是与 AI 生产链最<strong>不互补</strong>的资产。

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">

<strong>Dwarkesh 的引申</strong>：私募回报集中化、Anthropic / OpenAI 私有化 → 普通人难以指数化 AI 经济。
那个"index fund 黄金窗口"可能已经收窄了。

</div>

---

# 已经有"白领大屠杀"了吗？

证据评估：

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Budget Lab at Yale 的最新报告

"You really have to squint to see anything happening."

跨经济体、甚至看暴露最高的软件工程领域——
找不到什么。

</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 一点信号

初级开发岗的招聘<strong>略低于趋势</strong>——
不是 level shift，
是增长稍慢。

资深 SWE 反而需求更高。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

Alex 的警告：
"if you're a firm and you're not laying people off, then you're seen as not adopting AI enough."
→ 公司之间会有<strong>跟风裁员</strong>——
即使裁完反而更差也要装样子。token counter 现象类似。

</div>

---

# O-ring 理论：为什么律师还活着

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

"O-ring theory refers to this fact that the Challenger shuttle blew up because there's one component that malfunctioned and it destroyed the whole thing."

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 短期：为什么慢

工作产品对<strong>极端可靠性</strong>敏感。

AI 大概率做对≠你愿意给它签责任。
"my company's not going to go under because..."
——这种保险，必须由<strong>人</strong>来背。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 长期：方向反过来

AI 在 neuralese 中互相协调、思考快 1000x。

把人塞进 AI 生产流的<strong>交易成本</strong>反而大。
即使有比较优势，雇人也可能"配不上速度"。

</div>

</div>

---

# 弹性才是核心变量

为什么有的自动化让人受益、有的让人失业？答案是<strong>需求弹性</strong>。

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 高弹性 = Jevons 起作用

软件、计算：价格降 → 需求爆炸 → 总支出上升 → 雇人更多。

正是软件工程师反而<strong>还在涨</strong>的原因。

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 低弹性 = 总额萎缩

胰岛素、农业、石油（短期）：

"you eat enough and then you're done."

价格暴跌只意味着该行业占 GDP 的份额变小。

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic text-center">

"It is not some inherent property of markets that as it gets cheaper, you'll just keep wanting more of it." —— Dwarkesh

</div>

---
layout: two-cols
---

# AI 是电力，还是社交媒体

Alex 提出的本期最关键二分：

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 电力模型
ComEd 提供电，但它本身没什么垄断权力。
<strong>红利沉降到了所有<strong>用电的人</strong>那里。</strong>

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### 社媒模型
社交媒体也是人人在用。
但<strong>租金被平台收走</strong>。
（"the rents went to the platform"）

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 决定因素
开源/开放权重模型，能离前沿多近？
6 个月还是 3 年？

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./electricity-vs-social.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 给 Modi 的两条建议

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 普遍建议（朴素）

"再培训" / "搞 AI 教育" / "在我们国家建数据中心"

但<strong>问题在于</strong>：穷国之所以穷，部分就是因为教育系统不行。
"becoming the best in the world at retraining people at using AI" 不是显然可行的路。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Alex + Phil 的答案

> <strong>Buy the index.</strong>

主权基金 → 在 AI 供应链上买股权。
普通公民 → 用补贴买 AI 公司的份额。

如果 AI 是"电力模型"，
S&P 500 早晚会变成 "AI-leveraged S&P 500"。

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm text-center">

Alex："I would prioritize trying to index, but...I definitely wouldn't just rely on that."
两条并行——但优先级要倒过来。

</div>

---

# 蛙跳的希望（Leapfrogging）

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 历史先例

发展中国家有时会<strong>跳过中间步骤</strong>。

> "It's much more prevalent in like Nigeria than it is in...Germany or something like that. Like there everybody's doing mobile banking."

尼日利亚的移动支付普及度比德国还高——
因为他们没有"先建银行网点"的包袱。

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### AI 时代的蛙跳

如果 AI 是"transformative technology"：

也许中等收入国家能跳过"先培养博士、再做研究"——
直接拿开源模型构建本国的 AGI 能力。

> "you can get like really astronomical growth."

但 Alex 没有给概率。

</div>

</div>

---

# 商品化的两难

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

Dwarkesh 的希望："This actually makes me hope even more...that the labs do get commoditized. Or at the very least they go public as soon as possible." → AI 红利像电气化那样"难以被某一家公司锁住"。

</div>

<div class="mt-3 grid grid-cols-2 gap-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-xs">

### 商品化的好处

✅ 红利广泛分配
✅ 没有一家公司"太大不能倒"
✅ 政治打击面更难锁定（参考：Defense Production Act 针对 Anthropic）

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">

### Phil 的提醒

⚠️ 安全角度：你可能反而希望前沿玩家少一点
⚠️ 这样领先者有缓冲，敢慢下来把模型做安全
⚠️ "the tech race dynamic"

</div>

</div>

<div class="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs italic text-center">

"You could just have a relatively big gap, but it's a public company ownership and it's widely distributed." —— Phil 的折中方案

</div>

---

# 没有反电力的人

最后的 vibe：

<div class="mt-6 p-6 bg-green-50 border-l-4 border-green-500 rounded text-center">

<div class="text-2xl font-bold text-green-700">
"There's no anti-electricity people out there."
</div>

<div class="text-sm opacity-70 mt-2">—— Alex Imas</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

Dwarkesh："I mean electricity doesn't take your job, but..." → Alex："it takes some people's jobs."

</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

<strong>为什么 AI 没有形成同样的"普惠叙事"</strong>：
"narratives matter and there's this really negative narrative around AI right now, but that's because people are not putting out the positive narrative." —— 不存在的乌托邦永远比丢失的工作更难讲述。

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-xs">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"We need a Manhattan project for data." <span class="not-italic opacity-60">—— Alex，关于经济学界缺乏弹性数据</span>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"Every 18 months the value of computation halves." <span class="not-italic opacity-60">—— Phil，Moore 定律的悲观读法</span>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"If there's a 2% increase in unemployment, the political winds completely change." <span class="not-italic opacity-60">—— Alex 引述 Andy Hall</span>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"You can get all of the relational that you want, but it doesn't matter for labor share. It goes to zero." <span class="not-italic opacity-60">—— Alex 复述 Phil</span>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Is AI going to be like electricity or social media?" <span class="not-italic opacity-60">—— Alex，本期最重要的二分</span>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Nigeria just needs to buy the index." <span class="not-italic opacity-60">—— Alex，对发展中国家的策略</span>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"There's no anti-electricity people out there." <span class="not-italic opacity-60">—— Alex，为什么 AI 需要被商品化</span>
</div>

</div>

---
layout: end
---

# AI 越聪明，它在经济里的占比可能越小

<div class="mt-8 text-base italic opacity-80 max-w-2xl mx-auto">

"It is helpful to know what the relevant — at least what is the first branch
along all these important dimensions."

</div>

<div class="text-xs opacity-50 mt-6">
—— Dwarkesh 的结语
</div>
