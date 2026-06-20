---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '全面解析"世界模型"：定义、路线、实践与AGI的更近一步'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 全面解析"世界模型"

### 定义、路线、实践 · 与 AGI 的更近一步

<div class="mt-12 text-sm opacity-70">

硅谷101｜陈茜 主讲

嘉宾：Yiqi（Meta）· 陈羽北

</div>

<div class="mt-8 text-xs opacity-50">
2026 年被业界预言为"世界模型全面爆发的一年"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个被滥用的词
做视频、机器人、自动驾驶、游戏、AR/VR、Agent⋯⋯<br/>
**只要沾"世界"边都叫世界模型**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一份梳理路线的地图
视频生成 / 3D 生成 / JEPA / 智能体训练<br/>
**到底在做同一件事吗？**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一场技术路线之争
Yann LeCun vs Sora 派 vs 李飞飞<br/>
**LLM 已经走到头了吗？**

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一次产业冲击的前夜
机器人、自动驾驶、可穿戴、内容产业、Agent<br/>
**世界模型才是 AGI 的拐点？**

</div>

</div>

---

# 起点：人脑里那个"看不见的小世界"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

杯子放在桌边——你**预判**它会掉。<br/>
门往哪开、球顺斜坡滚——你**预演**结果。

科学家叫这种能力 **Mental Model**（心智模型）：

- **1943** — Kenneth Craik《解释的本质》：人在反应之前会先在脑中构建"小规模的世界模型"
- **1991** — Sutton / Precup / Singh 提出 **Dyna 架构**：智能体不只要学策略，还要学 *model of the world*

</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

**核心假设**

> 智能体之所以能做出更好的决策，<br/>
> 不是因为反应更快，<br/>
> 而是因为它能在行动之前，<br/>
> 在内部世界中先"看到未来"。

<div class="text-xs opacity-60 mt-3">
—— 强化学习 / 控制论几十年共享的内核
</div>

</div>

</div>

---
layout: two-cols
---

# 2018 — World Models 正名

David Ha × Schmidhuber 给出了**简洁框架**：

<div class="space-y-2 mt-4 text-sm">

**V · Vision**　把上百万像素 → 几十个数字的精华编码

**M · Memory**　大脑里的"物理引擎"，做"如果⋯⋯会怎样"

**C · Controller**　**不在现实里试错**，而是在 M 的"梦境"中训练

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

论文中 Demo：让模型在**完全虚拟**的小世界中学会一款赛车游戏，<br/>
证明 AI 可以像人类一样**通过内部世界的想象进行学习**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vmc-framework.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 世界模型的三大特质

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-300">

### 表示世界
**Representation**

<div class="text-xs mt-3 opacity-80">
环境里有什么 · 物体在哪儿 · 物与物之间的关系
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-300">

### 预测未来
**Prediction**

<div class="text-xs mt-3 opacity-80">
我推一下杯子 · 打开一扇门 · 往前走两步——世界会怎样变？
</div>

</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-300">

### 规划与行动
**Planning &amp; Control**

<div class="text-xs mt-3 opacity-80">
能预测下一秒 → 接下来我该如何采取行动？
</div>

</div>

</div>

<div class="mt-8 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">

"相当于它是一个模拟系统，有点像是一个缩小的平行宇宙。"

<div class="text-xs opacity-60 mt-1 not-italic">—— 节目中对"潜在空间模拟器"的描述</div>

</div>

---

# 与大语言模型，本质区别在哪？

<div class="mt-2">

| 维度 | 大语言模型 LLM | 世界模型 World Model |
|---|---|---|
| **预测目标** | 下一个 token | 下一帧画面 / 下一步动作 / 下一次状态变化 |
| **训练数据** | 文本为主，静态 | 视频 / 传感器，动态 · 时序 |
| **输出形式** | 语言或图像 | 对未来状态的预测、可执行行动方案 |
| **理解方式** | 通过语言**间接**理解世界 | 通过交互和推演**直接**理解世界 |
| **擅长场景** | 对话、写作、翻译、问答 | 机器人、自动驾驶、物理模拟、决策系统 |

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

"一种是关于表达，另一种是关于观察和行动。<br/>
大型语言模型的基本单元是词库⋯⋯而我们使用的世界模型的基本单元是像素或体素。"

<div class="text-xs opacity-60 mt-1 not-italic">—— 李飞飞</div>

</div>

---

# Yann LeCun：LLM 是死路

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3">

65 岁，离开 Meta 12 年的图灵奖得主**没退休**，<br/>
回巴黎创立 **Advanced Machine Intelligence**。

他在采访中提出的核心判断：

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**Moravec 悖论至今未解** —— 因为路线错了。<br/>
LLM 只是在**拟合语言的统计相关性**，对现实世界几乎没有直接建模能力。

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

最乐观也要 **5 到 10 年**，机器智能才能勉强**接近一只狗**。

</div>

</div>

<div class="space-y-3">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"再过 5 年，GPT 之类的大语言模型，就不会再有人用了。"

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic">

"那些吹嘘一两年内就能实现通用人工智能的人，<br/>
纯粹是痴人说梦，彻头彻尾的妄想。"

</div>

<div class="text-xs opacity-50 not-italic">
原因：你不可能通过"将世界 token 化"和使用大语言模型来解决现实世界——这根本不可能实现。
</div>

</div>

</div>

---

# 不止 LeCun ——三位大佬同步发声

<div class="space-y-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**Richard Sutton**（图灵奖得主、强化学习之父）

> "大语言模型试图在没有目标、也没有'好坏优劣'这种评价标准的情况下运作，<br/>
> 这其实一开始就走错了方向。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

**李飞飞**

> 大语言模型依然是"**黑暗中的文字匠人**"——<br/>
> 能言善辩却缺乏经验，知识渊博却脱离现实。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

**陈羽北**（节目嘉宾）

> 世界模型并不需要把大语言模型推翻重来，<br/>
> 而是在**为大语言模型补上"现实世界"的维度**。

</div>

</div>

---

# 为什么"现在"火？两个必然

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 原因一：天花板已显现

继续单纯把模型做大，<br/>
**已经不会像过去那样带来立竿见影的突破。**

算力、数据、能源、成本这些硬约束下，<br/>
规模继续上去当然能变强，<br/>
但**性价比正在迅速下降**。

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 原因二：多模态时代来了

训练世界模型需要：

- 海量视觉与动作数据
- 多模态传感器输入
- 大规模视频模型能力
- 足够强的算力支持"世界推演"

**这些条件直到最近几年才逐步成熟。**

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">

陈羽北：你可以认为（世界模型）是**一个大号的 GPT**——它包含了感知，包含了控制。<br/>
如果在这里也能获得根本上的成功，那么未来**所有的机器人、所有的智能体**，都可能以这样预训练和后训练的方式来产生。

</div>

---
layout: two-cols
---

# Yiqi 的三层框架

来自 Meta 的研究者 Yiqi 给出了一个**让人不再混乱**的拆解：

<div class="space-y-3 mt-4 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<b>目的层</b> —— 让 AI 在世界里 <i>行动 · 做任务 · 决策</i>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<b>表现形式层</b> —— 用什么方式把世界 <i>生成出来</i><br/>
<span class="opacity-60 text-xs">（当前业界最热闹的一层）</span>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<b>底层范式</b> —— Latent MDP · Learn Dynamics · Simulator<br/>
<span class="opacity-60 text-xs">抽象、看不见，却是真正的核心</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-layer-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 行业的"热闹"集中在表现形式层

<div class="mt-4">

为什么大家都先做"世界生成"？

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 它是世界模型的"外壳"
所谓理解世界，本质上是**理解世界如何随时间和行为变化**——<br/>
最直接的方式就是先**生成一个能连续变化的世界**。

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 它能成为廉价训练场
让机器人现实中倒咖啡几万次、打碎几千个杯子？<br/>
**性价比太低。**

地震、火灾、车祸这些边缘场景——<br/>
**只能在虚拟世界里反事实推理。**

</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">
而生成路线本身，又分裂成两派
</div>

---
layout: two-cols
---

# 两条生成路线的分裂

**视频派**：把世界**画**出来<br/>
代表 — OpenAI Sora · Google Veo · Kling · Genie 3

**3D 派**：把世界**建**出来<br/>
代表 — 李飞飞 World Labs · Marble

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

视频派看到的是**像素的概率分布**；<br/>
3D 派看到的是**几何结构本身**。

让 Sora 生成一辆车——造型逼真，但你问"长宽高、被挡住的轮胎在哪"——它**答不上来**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-paths.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 视频派：从"播放世界"到"探索世界"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="space-y-3">

### Sora 等：让世界"动"起来
OpenAI 在发布之初就把 Sora 定义为**世界模拟器**。<br/>
画面里的事物**随时间连续演化**——光在材质上变化、受力后如何移动。

类似路线：**Seedance · Veo · Kling**

### Genie 3：让世界可"交互"
不再只是预测下一帧，而是**模拟未来世界的状态**。<br/>
从"电影式生成"走向"游戏式模拟"——更接近**真正的世界引擎**。

</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

<div class="text-xs uppercase opacity-60 mb-2">Yiqi 描述 Genie 3</div>

> "你生成出来的内容，我说**黑板上写了字**，我又走到别的地方去回来，**这个字它还在黑板上**。<br/>
> 就说明虽然它还是 frame by frame（逐帧）的生成方式，但其实是已经**能够记住它世界里面的状态**。"

<div class="mt-3 text-xs opacity-60">
↑ 这就是"长时间一致性"的真正含义
</div>

</div>

</div>

---

# 视频派优劣：scale-driven 的便宜与盲点

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 优势
- **数据丰富** — 互联网就是巨大的视频矿山
- **对 Scaling Law 极敏感** — 模型越大、视频一致性和物理合理性指数级提升
- **可观察** — 输出看得见、好评估
- **能快速变现** — 影视、广告、教育、游戏立即可用

</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 局限
- **输出显式，理解隐式** — 物理规律"藏在权重里"
- **无法移植** — 到机器人或决策系统
- **几何盲** — Sora 不知道车长宽高，因为没有 3D 模型

> "它只是学到了**像素组合的概率分布**。"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

总结：视频生成路线和 LLM 很像——都是典型的 **scale-driven 模型**。<br/>
区别只是视频数据**天然包含物理运动**、加速度、重力。<br/>
但和 LLM 一样：**预测下一个 token / 下一帧，都很难告诉你世界内部的结构是什么。**

</div>

---

# 3D 派：不画世界，建一个世界

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

李飞飞 World Labs 的最新模型 **Marble**：

- 输入一句话 / 一张照片 / 一段视频
- 通过**高斯泼溅**重建完整 3D 场景结构
- 同样问"图里汽车多大"——能答 **长 4.5 米 宽 1.8 米**
- 还能输出 **3D 网格文件**

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**为什么如此强调 3D？**<br/>
真正的世界就不是 2D 的——<br/>
**AI 必须理解空间，才能理解世界。**

</div>

</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**优势：显式结构**

模型**知道**每个物体的位置——<br/>
物理模拟、规划、控制都更容易实现。<br/>
能继承传统物理引擎的优势（碰撞 / 遮挡 / 施力）。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

**代价：数据稀缺 + 算力贵**

- 3D 数据靠 LiDAR / 结构光等专业设备采集
- 标注成本比 2D 高一个量级
- 1024×1024×1024 的体素表示**计算量爆炸**

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**资本投票**：World Labs 最新一轮 **10 亿美元融资 · 估值 50 亿**——一年半涨 5 倍。

</div>

</div>

</div>

---

# 目的层：让 AI 在这个世界里"做事"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 路线 A：把生成模型当训练场
**Google SIMA 2**

把 AI 放进**很多不同类型的游戏**里"练级"。<br/>
最新版本将 Gemini 嵌入内核，<br/>
首次用 **Genie 3 生成的游戏世界**做训练。

它能：
- 理解复杂、多步、抽象的任务
- 在陌生环境中自主探索 · 规划行动
- 在未见过的游戏里**合理辨别方向**

</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 路线 B：根本不去生成世界
**Yann LeCun 的 JEPA**

不画图、不重建视觉内容——<br/>
直接在**潜在空间**里学习世界结构。

> 推一个球：<br/>
> 视频模型关心下一帧的阴影、光照、反射；<br/>
> **JEPA 只关心球往哪滚、撞不撞得到东西。**

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
两条路线的根本分歧 — "要行动，是否必须先生成一个世界？"
</div>

---
layout: two-cols
---

# JEPA：学结构而非画面

**Joint Embedding Predictive Architecture** 三步：

1. **Encoder** — 把视觉 + 动作压缩成抽象表征
2. **Predictor** — 预测潜在状态**未来如何变化**
3. **对齐** — 与真实未来的编码对齐

LeCun 已基于此发布了 **I-JEPA**（图像）和 **V-JEPA**（视频）。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./jepa-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# JEPA 路线的"理想很丰满"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 理论优势
- **不画像素** → 计算成本更低
- **只保留关键结构** → 更易捕捉因果关系
- 跨场景、跨任务**泛化能力**更强
- 更接近机器人需要的**"可操作世界"**——<br/>
  机器人不要纹理，要可达性

</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### 现实里被卡住
- **不可见** — Sora 能用画面震撼所有人，<br/>
  JEPA 的"理解"全藏在潜在空间里
- **自监督目标极难设计** —<br/>
  什么才算"未来的结构"？哪些信号该保留？没有统一答案
- **缺统一 Benchmark** —<br/>
  不同设计之间难以比较

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：JEPA 更像是"世界模型的前额叶原型"——<br/>
**方向很可能是对的，但距离成熟落地依然有一段距离。**

</div>

---

# 产业冲击一：机器人

<div class="mt-2 text-sm opacity-70">
"今天的绝大多数机器人看起来都很厉害，但它们做的一切，本质上都是被编程好的动作。"
</div>

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 过去的瓶颈
不"懂"世界 → <br/>
每一项新任务都意味着**一次新的工程项目**

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 世界模型给的新能力
**先在脑子里模拟，再决定要不要执行**

模拟箱子会不会翻倒 · 门把能否转动 · 路径是否安全 · 抓取会不会失败

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 范式级的改变
机器人开始具备**迁移能力**——<br/>
换物体、换场景、换任务**不必重新示教**

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

世界模型有望大幅度降低 **Sim-to-Real Gap** 这道门槛——<br/>
让家庭服务、仓储、工厂协作、餐饮零售、巡检、建筑、医疗辅助手臂跨过智能门槛。

</div>

---

# 产业冲击二：自动驾驶

<div class="mt-2">

马斯克 5 年前就说 L5 要来——为什么还没全面普及？

</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

### 不是"看不见"，是"预测不了"

无论特斯拉的端到端，还是 Waymo 的高度结构化，<br/>
都被**同一个问题**卡住：

- 对"现在"的感知已经很强
- 但很难稳定理解 **"接下来会发生什么"**
- 极端天气 / 突发事故 / 不规范行人——长尾场景**极其稀少**

</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### Waymo 的新动作

最近技术博客提出：把自动驾驶系统的核心<br/>
**构建为一个 Foundation Model**。

- 采用"分段式端到端"架构
- 学习的不是单任务，而是**世界如何运转**
- 内部同时推演**大量可能的决策路径**——<br/>
  从中筛出最安全、最稳定的一条

</div>

</div>

<div class="mt-6 text-center text-sm">
<b>世界模型 = 让自动驾驶从"反应"走向"预判"</b>
</div>

---

# 产业冲击三：内容产业 + AI Agent

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 内容产业：从"制作"到"生长"
过去：一个开放世界要数百人团队、几年时间，一砖一瓦搭建。

未来：设计师**只规定规则、生态、冲突**——<br/>
AI 就能"长"出森林、河流、生物、文化、经济系统，甚至 NPC 的性格、记忆和演化方向。

<div class="mt-3 text-xs opacity-70">
节目里的描述：游戏内容可以是 on the fly（即时）生成的，**每次玩都不一样**。
</div>

</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### AI Agent：第一次有了"内在世界"
今天的 Agent 讨论都集中在"够不够聪明"——<br/>
但更底层的问题是：**Agent 是在什么环境里学会行动的？**

真实世界太昂贵、太缓慢、太危险 → 无法支撑大规模试错。

> 世界模型并不是让 Agent **立刻变聪明**，<br/>
> 而是第一次为 Agent 提供了一个**可训练、可试错、接近真实**的"内在世界"。

</div>

</div>

---

# 一个被许诺的极端未来

<div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded italic">

"如果你能实现 World Model，逻辑推演所有的问题都解决了，<br/>
你已经包罗万象，**把这个世界所有的规律都已经掌握了**，<br/>
而且可以泛化⋯⋯泛化到能产生新的数据、产生新的意识，超越人类的程度，<br/>
不是简单的外延，然后能够在比较根本的程度上来泛化了。

那么这个模型似乎已经具备了——当然，给定一定意识的话——<br/>
**（这个模型）似乎已经具备了建立一种新的文明的能力。**"

<div class="text-xs opacity-60 mt-3 not-italic">—— 陈羽北</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">
这是节目里最高的天花板描述——也是它最大的隐患。
</div>

---

# 不只是机会：三种"系统级"风险

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 1. 幻觉变"系统级"
LLM 幻觉 = 编造事实<br/>
视频幻觉 = 画面错误<br/>
**世界模型幻觉 = 整个"世界结构"出错**

误判物体重量、低估碰撞后果、<br/>
构建错误的因果关系——<br/>
机器人失常、自动驾驶偏离

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 2. 权力集中
未来可能**只有极少数机构**<br/>
具备构建和运行世界模型的能力。

意味着**前所未有的预测能力**——<br/>
对市场、社会行为、群体反应的<br/>
高精度推演 → 新的**信息垄断**与社会操纵。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 3. 虚实模糊
深度伪造进入**"超真实"**阶段。<br/>
AR/VR 世界可能与现实**几乎无差**。

当真实系统都开始依赖模型——<br/>
现实可能反过来**对齐模型的假设**。

监管远比 LLM 时代更难。

</div>

</div>

---

# 一个 Meta 内部观察

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

Yiqi 谈大厂为什么"全都做"——

"Meta 在世界模型的路线上，**它不同的技术路线全部都做了**。<br/>
为游戏服务的，我们就做了 AI 的游戏引擎，叫 **Meta Horizon Studio**；<br/>
为了内容创作来服务，我们就会做纯视频方向的；<br/>
为了数字重建、3D 重建，我们就做了**高斯泼溅**的方式。<br/>
所以一般来说，我们会希望把方方面面都能够概括进去⋯⋯<br/>
但是我相信其他公司也是会有类似的情况。"

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者解读**：哪条路线最终胜出，今天没人知道。<br/>
所以大厂的策略不是"押注"，而是**全栈下注**——<br/>
不同的用户场景、不同的垂直需要，对应不同的世界模型形式。

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"其实很多现在世界模型，它就是一个视频模型。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 节目开篇对行业"神化世界模型"的提醒</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"再过 5 年，GPT 之类的大语言模型，就不会再有人用了。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Yann LeCun</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"大语言模型⋯⋯是黑暗中的文字匠人，能言善辩却缺乏经验，知识渊博却脱离现实。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 李飞飞</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"你可以认为是一个大号的 GPT——它包含了感知、包含了控制。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 陈羽北 描述世界模型与 LLM 的关系</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"我说黑板上写了字，我又走到别的地方去回来，这个字它还在黑板上。"
<div class="text-xs opacity-60 mt-1 not-italic">—— Yiqi 解释 Genie 3 的"长时间一致性"</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"如果你能实现 World Model⋯⋯（这个模型）似乎已经具备了建立一种新的文明的能力。"
<div class="text-xs opacity-60 mt-1 not-italic">—— 陈羽北</div>
</div>

</div>

---
layout: end
---

# 一句话收束

<div class="mt-12 text-xl italic opacity-90">

"当 AI 能够真正理解世界、模拟世界，<br/>
在世界里面试错和行动的时候，<br/>
它距离'通用智能'⋯⋯**又会近了一大步**。"

</div>

<div class="mt-8 text-sm opacity-50">
硅谷101 · 陈茜
</div>
