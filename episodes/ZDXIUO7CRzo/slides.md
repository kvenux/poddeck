---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '揭秘春晚小品机器人：与松延动力聊对戏、空翻、仿生背后的技术进化'
info: |
  硅谷101 × 松延动力姜哲源：从春晚小品的机器人对戏，
  到 4 条产品线、32 自由度仿生面部、具身智能"上古时期"的判断。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 揭秘春晚小品机器人

## 与松延动力聊对戏、空翻、仿生背后的技术进化

<div class="mt-8 text-lg opacity-75">

**嘉宾**：姜哲源 · 松延动力创始人（1998 年生）  
**主播**：陈茜 · 硅谷101  
**时间**：2026 春节前夕 · 北京

</div>

<div class="mt-12 text-sm opacity-60">

> "春晚可能 30 年时间之内，真正把机器人融入语言类节目，可能我们这是第一次"

</div>

---

# 为什么这期特别

<div class="text-sm opacity-70 mt-2 mb-6">一次从"机器人跳舞扭秧歌"到"机器人上小品舞台对戏"的工程跃迁</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 春晚舞台压力
小品类语言节目，万分之一失败率都不行，硬件可靠性拉到极限

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 四条产品线
Bumi · N2 · E1 · 仿生机器人，一次性给出整个人形机器人光谱

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 仿生 dilemma
高自由度 vs 高仿真的传统困境，32 DOF 真人头如何破局

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 具身智能阶段
"连 BERT 都没到，可能在上古时期"——一个清醒的现状判断

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 数据卡脖子
三个 huge 里只有 data 铁定不具备，世界模型不是答案

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 路径选择
不当小而美龙头，去挑战让机器人进家干活的大问题

</div>

</div>

---

# 30 年来第一次

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

去年春晚，宇树机器人扭秧歌、跳舞。今年，机器人走上了小品舞台——和蔡明老师对戏。

这是松延动力的四条产品线：
- 仿生机器人扮演"机器人奶奶"
- N2 扮演会翻跟头的"小孩哥"
- E1 扮演高个子能升降脖子的孙子
- Bumi 扮演最小、最会聊天的孙子

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">

"春晚可能 30 年时间之内，真正把机器人融入语言类节目，可能我们这是第一次。"

<div class="text-xs opacity-60 mt-3 not-italic">— 姜哲源，谈节目选择</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-gray-50 border-l-4 border-gray-400 text-sm">

**作者概括**：歌舞类和动作类的机器人节目都见过，但语言类小品的机器人元素，几乎是行业空白。松延选了最难的形式。

</div>

---
layout: two-cols
---

# 三个难点

刚知道要上春晚那一刻，姜哲源不是激动，是紧张。

**第一**：硬件可靠性。直播是巨大放大器，万分之一概率都不行。

**第二**：极限动作。空翻、侧手翻这种"几乎是现在机器人能实现的最高动态动作"，在直播里要 100% 成功。

**第三**：调度。小品没有固定节拍，机器人必须根据台口走位、在合适的时间点做合适的动作。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-pains.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "有点像高考之前的感觉"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 italic text-lg">

"它本质上是一个放大器。你发挥失败了，那就是放大你的所有的这些劣势；如果你发挥成功了，那你就一炮而红了。"

<div class="text-xs opacity-60 mt-3 not-italic">— 春晚是放大器</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic text-lg">

"那真的是对我们的硬件的可靠性要求非常非常高……哪怕是万分之一的失败概率都不行。"

<div class="text-xs opacity-60 mt-3 not-italic">— 万分之一的概率</div>

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

"所以其实我那会儿更多是紧张，因为<strong>有点像高考之前的感觉</strong>。"

</div>

<div class="mt-3 text-sm opacity-70">

姜哲源 1998 年生，今年还不满 28 岁。这是他第一次让自己公司的产品登上 13 亿观众面前的直播舞台。

</div>

---

# 1:1 复刻舞台 · 连地砖都贴出来

<div class="text-sm opacity-70 mt-2 mb-6">10 月底开始筹备，前后两个多月。所有难点都靠"再造一个春晚舞台"在公司里反复练。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 硬件改造

E 系列脖子可升降，"比天放还要高一截"——为了《喜人奇妙夜》的对照戏。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 步态调整

既要稳，又要走出拟人步态。"不然的话看着就是不太像真的。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 动作定制

空翻、侧手翻 100% 稳定。彩排很多次，没出现过摔跤。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 场地还原

"1：1 复刻了一个春晚我们这个小品的主舞台的场景，地面上连 1 号厅的地板那个地砖我们都贴出来了。"

</div>

</div>

<div class="mt-6 text-sm opacity-60">

姜哲源："让我们的调度能够在基本上是分毫不差这样一个程度。"

</div>

---
layout: two-cols
---

# 四条产品线，一个光谱

松延动力同时押注四款形态。每一款都对应一个具体场景，而不是一个"通用人形"。

- **Bumi 小布米**：消费级·家庭和教育
- **N2 小孩哥**：高动态·运控研究
- **E1**：中尺寸·能上桌干活
- **仿生机器人**：1:1 真人·展厅 / 接待

姜哲源："我从小往大说。"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-products.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bumi 小布米：一脚 C 端，一脚 B 端

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

万元以内的消费级人形机器人。在春晚小品里它就是声音最萌、反应最快、和奶奶对话最多的"最小的孙子"。

**学习机属性**：
- 内置喜马拉雅少儿讲故事
- 接入编程猫图形化编程
- 提供 Python 编程接口

**双场景定位**：
"Bumi 它是一脚踩在 C 端，一脚踩在 B 端的"——既给家庭用户，也给中小学和幼儿园。

</div>

<div class="space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"祝大家在新的一年里，像千里马一样勇往直前。"

<div class="text-xs opacity-60 mt-2 not-italic">— 现场拜年测试</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**"洗车问题"测试**：距离 800 米要开车还是走路？

Bumi："哈哈 当然要开车去，不然怎么把车洗干净呢。"

</div>

</div>

</div>

---

# N2 "小孩哥"：纯粹为动力性能而设计

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

被网友称为"小孩哥"的高动态人形机器人。

**春晚舞台**：所有最极限动作——空翻、侧手翻——全都是 N2 完成的。

**马拉松亚军**：2025 年初亦庄机器人马拉松，全场唯一无需人工牵引、完全自主奔跑跑完全程的机器人。

姜哲源："您可以理解为这是一个小体育生，纯粹是为了动力性能而去设计的一款机器人。"

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 跑马拉松为什么难
"机器人跑起来它是一个有点像你不断拿锤子砸一个东西，它跟地面每次迈步都是一次碰撞。"

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 路面坑洼
"20 多公里其实中间是会有大坑的……这种情况下你的机器人还不能摔，还要继续保持全速奔跑。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 硬件易挂
"可能它跑个 10 公里就会挂掉，比如像电机里边卡死，或者某一根线束就脱出。"

</div>

</div>

</div>

---

# E1：能上桌的中尺寸

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

E 系列比 N 系列更高。它瞄准的是**上下肢协同**的工作场景，能完成偏简单的桌面操作类任务。

**关键区别**：
- N2 没有腰，靠腿转身扩大 workspace
- E1 有腰，而且腰上还有两个自由度
- 手臂有 5 自由度版本，也有 7 自由度版本
- 还能配灵巧手

姜哲源："E 系列还是能够上桌的，然后我们希望它能够在桌上去完成一些偏简单操作类的任务。"

</div>

<div class="space-y-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic text-lg">

"简单来讲就能上桌。N2 上不了桌的。"

<div class="text-xs opacity-60 mt-3 not-italic">— 一句话区分 N 系列和 E 系列</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 春晚改造
头是能升降的——因为小品里要和《喜人奇妙夜》的天放比身高，"E1 这个机器人它能够脖子升到很高，然后就比天放还要高一截。"

</div>

</div>

</div>

---

# 仿生机器人：1:1 复刻蔡明老师

<div class="text-sm opacity-70 mt-2 mb-4">在小品里，仿生机器人扮演"机器人奶奶"。这是松延第一次真正完成 1:1 复刻一个真人。</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-pink-50 border-l-4 border-pink-500">

### 1:1 真人形象
"我们的仿生是完全 1：1 定制的蔡老师的形象"——之前从来没有真的实现过 100% 复刻一个真人。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 32 个自由度面部
"还是保留了我们原有的 32 个自由度的面部，这是一个超高自由度的面部。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 应用落地
机场、博物馆等娱乐导览和展厅接待场景，仿生机器人已经开始扮演导游、解说的角色。

</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">

"仿生在这次春晚中其实算是一个，正式地第一次把这件事情给完成了。"

</div>

---
layout: two-cols
---

# 仿生 dilemma：一道传统困境

姜哲源把行业的核心矛盾讲得非常直白：

**特别仿真** → 很难塞下很多自由度  
**很高自由度** → 很难像某一个真人

这次的突破，是在 32 个自由度的前提下，把头做得**像真的蔡明那么小**——而不再是"为了塞电机而放大的头"。

姜哲源："这其实也并不是说我们在短短的多长时间之内做出突破，而是我们积累到今天，其实我们的这些经验、我们的 knowhow，我们的知识库已经到了这样的一个程度。"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dilemma.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 把头做小：硬件层面的突破

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 早期：为塞电机而放大
"我们在早期的机器人里面，为了放下足够多的电机，其实我们是有意地把头放大了……可能就把一个正常人头放大到我这么大，或者比我还大一点的一个程度。"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 春晚：必须做小
"蔡老师要跟这个仿生机器人同框的。我们不能说这个仿生机器人头比蔡老师大一圈，那就非常……就不像了。"

陈茜："很出戏了。"

</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic text-lg">

"怎么把这么多电机和传动结构合理地能够自然地塞到这样……当它动起来不能一看就很诡异，那就真的恐怖谷了。"

<div class="text-xs opacity-60 mt-3 not-italic">— 自然地把超多自由度塞进真人尺寸的头里</div>

</div>

---

# 口型对应：从数字人迁到真人

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

"我们看一个人说话怎么看都不会觉得特别假，但只有一点会觉得假，就是你看他的口型和语音的对应。"

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 两个基础
**一**：硬件自由度要够多。"如果只有一张一合的自由度，你怎么着口型都对不上。"

**二**：算法足够好。

</div>

</div>

<div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 自研算法：数字人 → 仿生人
"数字人里边语音和口型对应做得，我个人觉得还不错的。"

"我们自研了一套从数字人映射到真的仿生人的这样的一个算法，把口型这个事情在这次春晚上给解决掉了。"

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：数字人有海量训练好的语音-口型对应数据，但映射到带 32 DOF 物理面部的真人头需要再做一层 retargeting。

</div>

</div>

</div>

---
layout: two-cols
---

# 恐怖谷：抓住"特别像"那一端

姜哲源："首先我们要理解恐怖谷它是一个谷。就是似像非像的时候是最恐怖的。**特别不像、特别像都不恐怖。**"

策略很清楚：既然这次要做 1:1 真人，就必须把每一项都拉到"特别像"那一端。

- 面皮化妆
- 整个脸型构建
- 整个动态
- 甚至**肢体语言**——根据真人实际录下来的动作

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./uncanny.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Motion Retargeting：把真人动作迁到机器人

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"我们的仿生人是带胳膊的，胳膊上也是能动的。然后它包括肢体语言，其实都是根据真人实际上录下来的一些动作。"

</div>

<div class="mt-4 p-5 rounded bg-green-50 border-l-4 border-green-500 italic">

"然后我们用了一些跟人形机器人运控相关的算法，我们做了 Motion retargeting（动作迁移），retarget 到我们的仿生机器人上。"

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 工作流
1. 真人录制动作
2. 提取关节轨迹
3. 用运控算法重映射
4. 在仿生面部 + 上身上重现

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

姜哲源给出三块拆解：硬件（自由度 + 尺寸）、软件算法（口型对应 + retargeting）、恐怖谷策略（抓"特别像"端）。

</div>

</div>

</div>

---
layout: two-cols
---

# 具身智能在哪个阶段？

陈茜："你觉得现在到了 GPT-3 的时刻吗？"

姜哲源："可能这个差得远。我觉得**甚至连 BERT 那个时刻都没有到**……可能这个还是在一个非常非常早期的阶段。"

更直接的判断：

> "可能我们现在处在一个上古时期。"

而后他用一个故事来解释什么叫"上古时期"——那是 IBM 和 Google 在做机器翻译的早年。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./era-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 三个 huge 公式

姜哲源："后来其实大家就会发现有一个公式：**good performance = huge amount of parameters + huge amount of data**……就是三个 huge，就能得到一个好的 performance。"

那么具身智能现在卡在哪里？

- **算力**：火山引擎这样的企业提供最牛算力基础，绝对具备
- **参数量**：能具备，但缺乏验证
- **数据**：铁定不具备

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-huge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据才是真正"卡脖子"的地方

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 italic text-lg">

"但 huge amount of data 这个事是铁定不具备的。特别是机器人行业太难了……机器人行业是非常非常不具备的。"

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic text-lg">

"今天数据大部分都是人手工采的，为了采而采的。我们的数据都是为了采，而专门去采出来的。"

</div>

</div>

<div class="mt-6 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

**对比 LLM**：LLM 这些领域它们的 data 都来自于互联网，直接来自于之前已经存在的这些东西。

**对比 ChatGPT 的 wow moment**：它训练数据从 Reddit 上来——那是人们说脏话、curse、吵架的地方，是"人应该说的话"，而不是书面语。

</div>

<div class="mt-4 text-sm opacity-70">

机器人没有这样的"已存在的真实数据"。所有动作数据都是为了 train 模型而专门采的。

</div>

---

# 上古故事：IBM 词典 vs Google 海量

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### IBM 路线：精巧
请了一堆牛津词典的编辑，编辑了一堆**特别精美**的语料——"完美 1：1 的翻译，可能你很难找到如此信达雅的翻译"。

做了一个很**精巧的小数据集**。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Google 路线：海量粗糙
"反其道而行"，做了很多相对**粗糙的翻译**，但每个基本上是对的——做了一个**巨大但很粗糙的数据集**。

"最后我们发现 Google translation 确实做的效果会更好。"

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">

"今天我觉得我们甚至还处在 IBM 那个时代。可能数据集的这个规模还是太小了。"

<div class="text-xs opacity-60 mt-3 not-italic">— 具身智能今天的"上古"位置</div>

</div>

---

# 阶跃式发展，不是线性

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"我觉得具身智能产业，可能并不会说是一个线性的发展，**它可能是个阶跃式的发展**。"

<div class="text-xs opacity-60 mt-3 not-italic">— 行业的发展节奏</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 italic">

"一旦有人找到这样数据采集的模式，以及与之配套的一个算法的话，那我觉得可能这个产业的发展一瞬间可能就发生变化了。"

<div class="text-xs opacity-60 mt-3 not-italic">— 改变会一瞬间发生</div>

</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 新模式要满足什么条件
姜哲源："如果一旦发现，它能够**快速地、大量地、批量化地、低成本地**去完成多样化数据的采集……"

那就是下一个阶跃点。

</div>

---

# 世界模型是答案吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

陈茜："这个模式是世界模型吗？"

姜哲源："我觉得大概率不是吧。"

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他的判断
"一个模型的 performance 它来自于数据能带来的信息的增量。"

"World Model 它的好坏取决于 World Model 喂进去的数据它的好坏。"

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 物理引擎问题
"渲染器今天做得已经……还是不错的。"

"而真正本质问题在于 Physics engine，就是物理引擎。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 接触建模不准
对接触力的仿真"非常非常不准的，就是超级不准确"——这是 research level 的科学难题。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

英伟达的 Digital Twin + Sim-to-Real 路径，仍然有 gap。

</div>

</div>

</div>

---

# 反例：仿一个西红柿炒鸡蛋

<div class="text-sm opacity-70 mt-2 mb-6">姜哲源用一个具体例子说明世界模型为什么很难做"准"。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 要仿真的东西
- 鸡蛋黄怎么跟鸡蛋液混合
- 鸡蛋怎么在高温下从液态变成固态
- 西红柿怎么在高温下出水
- 哪些变成水蒸气、哪些留在锅里
- 油进去怎么跟它们发生反应

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 仿到极致 = 分子级
"这最后可能会到一个**分子级别模拟**的一个程度，如果真的要做 World Model。"

加上软体、流体、非牛顿流体的建模……

"如果你要建模世界上所有东西超级超级难。"

</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 italic text-lg">

"人并不需要懂鸡蛋它是怎么凝固……人不需要懂这个事情就能够做好炒鸡蛋。但是如果要做世界模型，让它仿得准的话，那可能真的还需要做这些工作。"

</div>

---

# PoC 之后是什么？灵魂拷问

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 italic">

"工业现在大家都是 PoC，PoC 阶段有没有后续？几乎很难有。基本上都是没有后续的。"

</div>

<div class="mt-4 p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 一个直击灵魂的问题
"像 Hyundai 用 Boston Dynamics 的机器人到底是 **Boston Dynamics 在帮 Hyundai，还是 Hyundai 在帮 Boston Dynamics**？"

姜哲源："这是一个很直击灵魂的问题。"

</div>

</div>

<div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### ROI 视角
"Hyundai 完全可以选择一些工业机械臂，可以选择自动化设备来去完成一模一样的工作，还以更低的成本。"

</div>

<div class="mt-4 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 现状
"今天看现状就是人形机器人场景呈现**小而散**这样一个状态。无论我们说工业还是家庭，今天都是无法完成短期的商业化落地的。"

</div>

</div>

</div>

---
layout: two-cols
---

# 一定需要云：分层架构

陈茜："你觉得机器人一定需要云吗？"

姜哲源："**首先结论是我觉得具身的本体的机器人是一定需要云的。**"

**端侧成本约束**：所有能力都部署在端会让芯片成本极高，不利于产品化。

**分层模型**：VLA 和世界模型都有"快脑 / 慢脑"分层。

- 慢脑执行频率 < 1 Hz——适合上云
- 快脑（action 部分）放端侧
- 人机交互能力强依赖云端大模型

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cloud-edge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 路径选择：小而美还是大问题

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 选项 A：小而美
"基于现有的场景、可落地的场景，在某一个特定的场景中成为场景中的 80% 市占率以上的一个龙头企业。"

"这样我们会过得很舒服，然后我们会是一家小而美的公司。"

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 选项 B：挑战大问题
"我们真的去挑战最难的事情。我们可能挑战整个具身智能大问题，去让机器人进家干活。"

"这就是很大的一件事情。"

</div>

</div>

<div class="mt-8 p-5 rounded bg-green-50 border-l-4 border-green-500 italic text-lg">

"我觉得既然选择在这样一个时代的洪流下去创业，那绝大部分创业者选择肯定还是第二种。"

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

姜哲源："我期待可能未来我们的企业能够成为一个……我们产品走进所有人的家里面，很多人用我们、喜欢我们。"

</div>

---

# 长期主义来自于 1-10 年的不确定

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

陈茜："所以你还是非常长期主义的这样一个人？"

姜哲源："也不能这么说。其实本质上我的长期主义来源于短期和长期……"

<div class="mt-4 p-5 rounded bg-orange-50 border-l-4 border-orange-500 italic text-lg">

"具身智能我回答十年以后什么样很容易，我回答现在什么样很容易，**但是回答一到十年之间会发生什么事情，回答路径非常难**。"

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 10 年后？容易
预期已经很清晰——机器人进家干活、解决生产力问题。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 今天？容易
现状很清楚——小而散、PoC 阶段、商业化没闭环。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 中间？没人答得好
路径在哪里、节奏多快、谁先到——这才是真正的不确定性所在。

</div>

</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"春晚可能 30 年时间之内，真正把机器人融入语言类节目，可能我们这是第一次。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈节目形式的稀缺性</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"哪怕是万分之一的失败概率都不行。"
<div class="text-xs opacity-60 mt-1 not-italic">— 春晚直播的硬件压力</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"有点像高考之前的感觉。"
<div class="text-xs opacity-60 mt-1 not-italic">— 28 岁创始人的春晚前夜</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"特别不像、特别像都不恐怖。"
<div class="text-xs opacity-60 mt-1 not-italic">— 仿生机器人为什么必须 1:1 真人</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"甚至连 BERT 那个时刻都没有到……可能我们现在处在一个上古时期。"
<div class="text-xs opacity-60 mt-1 not-italic">— 具身智能的当前阶段判断</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"是 Boston Dynamics 在帮 Hyundai，还是 Hyundai 在帮 Boston Dynamics？"
<div class="text-xs opacity-60 mt-1 not-italic">— 一个直击灵魂的 ROI 问题</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded italic col-span-2">
"回答一到十年之间会发生什么事情，回答路径非常难。"
<div class="text-xs opacity-60 mt-1 not-italic">— 长期主义的真正来源</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-xl italic opacity-80">

"祝大家马年 debug 快，钱包涨得快。"

</div>

<div class="mt-4 text-sm opacity-60">

— 姜哲源 × 豆包 · 硅谷101 马年新春祝福

</div>
