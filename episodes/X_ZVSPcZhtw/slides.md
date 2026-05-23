---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'What rebuilding AlphaGo teaches us about self-play, RL, and the future of LLMs — Eric Jang'
info: |
  Eric Jang (ex-VP AI @ 1X, ex-Google DeepMind Robotics) walks Dwarkesh through
  rebuilding AlphaGo from scratch on a sabbatical — what MCTS is really doing,
  why it's a strictly better RL algorithm than what LLMs use today,
  and what 10 layers of compute can amortize about the universe.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Rebuilding AlphaGo from scratch

## What MCTS really teaches us about RL, LLMs, and 10 layers of compute

<div class="mt-8 text-lg opacity-80">
Eric Jang · ex-VP AI @ 1X Technologies · ex-Google DeepMind Robotics<br/>
与 Dwarkesh Patel · sabbatical 期间用 ~$10K 复刻 AlphaGo
</div>

<div class="mt-12 text-sm opacity-50 italic">
"The compute required to be the first to do something<br/>
is always much larger than the compute it takes to catch up."
</div>

---

# 这一期讲什么

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 用 10K 美元复刻 AlphaGo
当年 DeepMind 的"几百万美元 + 一整队研究员"，今天 LLM 编程辅助下，**a few thousand dollars of rented compute** 就够了。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### MCTS 到底在做什么
不是 credit assignment，不是策略梯度——而是**给每一步重打一个更好的标签**，然后做 supervised learning。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 比 LLM RL 优雅得多
LLM RL 是 sucking supervision through a straw。AlphaGo 永远不需要从 0% 成功率起步。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 10 层网络 = 一个"NP-hard"问题
"一个看似非常困难的问题，可以塌缩到一个非常简单的宏观仿真里"——这才是 AlphaGo 最深的洞见。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Test-time scaling 的祖师爷
Andy Jones 2021 年的 board-games scaling laws，是后来 LLM 推理时间扩展的原型。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Opus 真的能做研究吗
能：超参搜索 + 做实验。不能：从一条死路里跳出来"换个思路"。

</div>

</div>

---

# 嘉宾：Eric Jang

<div class="grid grid-cols-2 gap-8 mt-4">

<div>

### 现在
**Sabbatical** · 业余项目：用现代硬件 + Claude Code 复刻 AlphaGo<br/>
项目代码：github.com/ericjang/autogo

### 之前
**VP of AI @ 1X Technologies** · 人形机器人<br/>
**Senior Research Scientist @ Google DeepMind Robotics**

### 这次复刻
- 经费：来自 Prime Intellect 的赞助，"about 10K"
- 探索阶段花了 ~4K
- 最终训练跑 ~3K
- 剩下留着 serving model

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么是 AlphaGo

> "It was just profound to see ... how smart AI systems could become."

围棋长期被认为是 search-intractable 的问题，但深度学习一把就破了。

而最神秘的是：**"a 10 layer network can sort of amortize the simulation of something so so so deep in the game tree."**

</div>

</div>

---
layout: two-cols
---

# 为什么围棋这么难

经典论证：

- 19×19 棋盘上每步 ~**361** 个可走点
- 一局约 **250-300** 步
- 朴素地展开整棵博弈树 → 大约 **361³⁰⁰** 种走法

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 italic">
"it's just far more than the number of atoms in the universe."
</div>

<div class="mt-4 text-sm opacity-70">
计算机科学家曾长期认为：本世纪内不可能用搜索解决围棋。<br/>
搜索空间的**breadth**（每层选择多）与 **depth**（每局太长），
两者都得砍。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tree-explosion.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# MCTS 的核心数据结构

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

每个 node 存四个东西：

<div class="mt-3 space-y-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>N (visit count)</strong> — 从 parent 走到这里走了几次
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Q (mean action value)</strong> — 在这里平均最终能赢吗？
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>P (prior policy)</strong> — 来自 policy net，"先验觉得这步好不好"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>children</strong> — 链表式指针
</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
"This was what Claude 4.6 wrote for me when I asked it<br/>
and it was a very reasonable choice."
</div>

</div>

<div class="p-5 rounded border border-gray-300 bg-gray-50">

### 关键设计选择
- 每个 node 代表**状态**（不是动作）
- 因为围棋是 deterministic，**根据 child 就能反推动作**
- 不存动作，省内存
- 树是**边搜索边长**的，不是一次性建好

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

不像 tic-tac-toe 那样可以完整展开 9!——围棋的搜索树**必须稀疏**，只往看起来 promising 的方向长。

</div>

</div>

</div>

---

# 选哪一步走：PUCT 公式

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-center text-xl">

argmax<sub>a</sub> &nbsp; [ &nbsp; Q(s, a) &nbsp; + &nbsp; c · P(a) · √N / (1 + N<sub>a</sub>) &nbsp; ]

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 第一项：exploit
**Q** = 这条分支历史模拟的平均胜率<br/>
"已经知道这里好不好。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 第二项：explore
N<sub>a</sub> 越小这项越大；
visit count 还少的分支会被强行多看几眼。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Dwarkesh 的复述

> "as over time you will move from the argmax being dominated by this exploration term ... to the argmax being dominated by the Q term."

随着搜索深入，"被 exploration 项主导"过渡到"被 Q 项主导"。

</div>

---
layout: two-cols
---

# 一次 simulation = 四步走

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>① Selection</strong> — 沿当前树用 PUCT 一路 argmax 下到 leaf
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>② Expansion</strong> — leaf 不是终局？跑一遍 policy net，把它的 children 全部生成出来
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>③ Evaluation</strong> — value net 给每个新 child 估一个 v(s)；不需要真的下到终局
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>④ Backup</strong> — 把估值沿路径反推回 root，更新每个节点的 Q
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

每走一步棋跑 200–2,048 次 simulation；
AlphaGo Lee vs 李世石那场用了 **tens of thousands of simulations per move**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mcts-tree.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 价值函数：为什么人类能"瞄一眼就知道输赢"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 朴素 MCTS 的问题

终局太远——你不可能为每个 simulation 都搜到 300 步深。

### AlphaGo 的赌注

> human glances at the board and they know "I'm probably going to lose"

人脑里有一个**隐式 value function**，"在 a few seconds without actually playing every single game logically" 就给出判断。

### 推论
- 如果一个 10 层网络能学会这个 value function
- 那它就能在 MCTS 里**当作搜索的截断器**
- depth 问题解决一半

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键引述

> "this gives us a hint that ... in games like Go there are ways to basically radically speed up the search process."

<div class="mt-4 text-sm not-italic">
而且这种"压缩"远比想象中神奇——
</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"a 10 layer neural network pass ... 10 steps of neural network paralyzed distributed representation thinking is able to amortize and approximate to a very very high fidelity a nearly intractable search problem."

</div>

</div>

</div>

---
layout: two-cols
---

# 一张网络，两个头

<div class="space-y-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### value head (R¹)
单个 logit：从这个 state 出发，**我赢的概率是多少**？

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### policy head (R³⁶¹)
对 361 个落点的 softmax：**哪些走法看起来不错**？

</div>

</div>

<div class="mt-4 text-sm opacity-70">

**架构选择基本不重要**：ResNet 和 Transformer 都能 work。Eric 实测在小预算下 **ResNet 反而比 Transformer 略好**——因为它的局部卷积归纳偏置正好契合围棋的局部攻防。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**AlphaGo Lee** 用两个独立网络；后续所有论文合并成共享 backbone + 两个 head。"presumably this saves compute."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-headed-net.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 实践哲学：init is everything

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Eric 自己复刻时的选择
**先用 KataGo 的开源模型做 best-response training**——拿一个已经很强的对手当陪练，自己的网络从一个"勉强能跟"的状态出发。

然后再尝试 tabula rasa（AlphaGo Zero 风格、从零自博弈）那一套。

### 为什么不上来就 cold start？

> "init in initialization is everything."

> "always pick something that works and then get it to do something better rather than start from something that doesn't work at all and then try to make it work."

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 通用研究原则

把研究问题**初始化到尽可能接近成功的状态**，再从那里 push improvement。

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">

"always want to initialize your research project to something as close to success as possible."

</div>

<div class="mt-4 text-sm">

→ 对应到 LLM 时代：
- pretrain 是最大的 init
- 蒸馏一个 frontier 模型也是一种 init
- 而不是 from scratch 训 RL

</div>

</div>

</div>

---
layout: two-cols
---

# MCTS 作为"策略改进算子"

横轴是 simulation 次数：

- **红色虚线**：raw policy net 单次前向，"shoots from the hip"
- **蓝色实线**：套上 MCTS 之后，胜率单调爬升

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**核心 trick**：把蓝线相对红线的提升，**蒸馏回 policy net**。
"distill this MCTS policy network back into your sort of shoot from the hip policy network"

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

下一轮的 policy net 起点就更高了——MCTS 再爬一段更高，再蒸馏回去。
一个稳定单调的 boostrap loop。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mcts-vs-policy.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 蒸馏的对象：分布，不是动作

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 错误做法
训练 policy net 去预测 **MCTS 选出来的那一步**（one-hot label）。

- 单一动作的熵 = 0
- 每个样本只带 1 bit 的"对错"信号
- 浪费了 MCTS 辛苦搜出来的不确定性

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### AlphaGo 的做法
预测 **MCTS 的整个访问分布**（soft labels）。

> "you don't train the policy network to imitate the MCTS action you train it to imitate the MCTS distribution"

- soft label 的熵远高于 one-hot
- bits per sample 多得多
- 这正是 distillation 之所以高效的本质

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center italic">

"the entropy of this distribution is far far higher than the one-hot. So there's actually way more information ... in bits per sample in a soft label."

</div>

---

# MCTS 不在做 credit assignment

<div class="mt-4 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic">

"Monte Carlo tree search is doing something very fundamentally different which is it's not trying to do credit assignment on wins. It's trying to improve the label for any given action you took."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 朴素 policy gradient
- 拿到游戏结果（赢/输）
- 对赢家的整条轨迹做 reinforce
- 哪一步真的有用？全靠 N → ∞ 的平均洗出来

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### MCTS 的 dagger 视角
> "for every action we took, we did a pretty exhaustive search ... to see if we could do better"

- **每一步**都搜出一个"更好的版本"
- **每一步**都有干净的监督信号
- 这才是为什么 variance 低、训练稳

</div>

</div>

---
layout: two-cols
---

# Dagger 类比：被风吹偏了怎么办

> "the problem with go and chess is that the other player is always trying to do some [thing]"

对手总会让你**漂出"最优轨迹"**。鲁棒训练的关键不是只见过 optimal states，而是知道 **从一个 drifted state 怎么走回来**。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Replay buffer 该长什么样**：
- 大部分 = on-policy 的最优轨迹
- 少量 = 周围一圈"还能救回来"的偏离态
- 每个偏离态都被 MCTS 标了一个**返回最优**的动作

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**真正的 off-policy 灾难**：训练数据全是 policy 根本不可能到达的状态——浪费 capacity，越训越差。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dagger-tube.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 朴素 self-play 的 variance 灾难

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 一个具体例子

两个实力 50/50 的策略 πA、πB 互打 100 局，每局 300 步：

- 51 局 πA 赢
- 49 局 πB 赢
- 但只有 **1 个关键 move** 真正让 πA 占优；剩下 50×300 步基本是巧合

### 信号 vs 噪音

- 真正的训练信号：≈ **1 个 token**
- 你要 reinforce 的轨迹：**99 × 300 = 29,700 步**

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Dwarkesh 的总结

> "this thing you're saying ... would be intractable and prevents you from actually getting beyond a certain level in Go is just by default how LLMs are trained."

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

LLM RL 之所以勉强 work 是因为 sample 数量足够大、advantage estimation 替你做了 baseline 减法——但这是**用堆量换信号**。

</div>

</div>

</div>

---

# Karpathy 的"用吸管喝监督"

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic text-center">

"sucking supervision through a straw"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### LLM RL 的现状

- 一条 trajectory 跑完，只拿到一个 scalar reward（对 / 错）
- 把这个信号**强行均摊到每个 token**
- agent 任务越长 → samples-per-flop 越低 → 信号越稀

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### MCTS 的优势

- 不需要走完整轨迹
- **每一步**就地搜出更优动作
- 价值函数把"未来"压缩进当前状态
- 每个 token 都拿到了一个 dense supervision

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">

"To get the supervision through a straw. Uh basically just upgrade all the tokens in a trajectory that might or might not have been relevant to getting the answer right."

</div>

---
layout: two-cols
---

# Bits per flop = bits/sample × samples/flop

把 LLM RL 极端拆解：

**早期训练**：
- 一个未训练模型猜"the sky is ___"
- 词表 10⁵，猜中 "blue" 的概率 ≈ 10⁻⁵
- 监督学习的 bits 是 **−log(p)** → 很大
- RL 的 bits 是 binary entropy H(p) → 几乎为 0

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">

"the problem is you spend most of training in this regime ... in the low pass rate regime." — "a sort of depressing plot."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bits-per-flop.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 AlphaGo 是"最优雅的 RL 算法"

<div class="mt-4 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">

"you never have to initialize at a 0% success rate and solve the exploration problem of how to get a non-zero success rate. And this is what allows you to hill climb this beautiful supervised learning signal."

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 没有 0% trap
MCTS 在任何 policy（哪怕乱猜）上都能给出**比当前 policy 更好的动作**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 完全是 supervised
> "supervised learning problem on improved labels"

没有 TD error、没有 PPO clip、没有动态规划——就是 KL min + 二分类。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 训练超级稳
"You can train like as big of a network as you want ... everything will just go stably."

</div>

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">

⚠️ 前提：value function 必须靠谱。Eric 推荐先用 expert data 或 KataGo selfplay warm-up value head——chain of assumptions 里最容易塌的一环。

</div>

---

# 一个让人不安的洞见

<div class="mt-4 p-6 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">

"there's something to it that ... is very disturbing where like what felt like a very hard problem can fall to a very very simple macroscopic simulation."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 字面意思
**10 层网络 ≈ 10 步顺序推理**

却能把一个搜索意义上 intractable 的问题，压进一次 forward pass。

→ AlphaFold 也是同一种现象：本来要跑天量微观模拟，结果一个不大的网络一把搞定。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 推论
Eric 的猜想：
> "our understanding of problems like P equals NP or these very fundamental computational hardness problems are incomplete."

**Worst case 的 NP-hardness 不代表平均场景的硬度**——大部分实际问题是有结构、可摊销的。

</div>

</div>

---
layout: two-cols
---

# 混沌 vs 宏观结构

围棋 / 天气 / 蛋白质折叠都对**初始条件极端敏感**——一个石子位置不同，整个未来全变。

但我们关心的从来不是"未来 100 步的精确棋盘"，而是谁会赢、飓风去哪、蛋白怎么折。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">

"sometimes we don't necessarily care about the microscale things. We actually care about the macroscopic structure."

</div>

<div class="mt-2 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

Lorenz attractor 单点轨迹不可预测，但**整个吸引子有形状**。Eric 说："you have the maximum power of a neural network at **the edge of chaos**."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./macroscopic-attractor.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Andy Jones 2021 — 推理时间扩展的祖师爷

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 论文
**"Scaling Scaling Laws with Board Games"** · 2021

### 第一个核心发现
**Test-time compute ↔ training compute 可以互换**：

- 多花一些 MCTS simulation 步数
- 等价于多训一段时间
- 二者沿一条等价曲线移动

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 第二个发现
**可以从小棋盘外推大棋盘**所需的 compute——这是 LLM 之前就出现的"scaling laws 跨规模迁移"案例。

### 为什么今天值得重做
> "you actually have to make a strong gobot first and then use the scaling laws to kind of extrapolate."

Eric 一开始踩的坑：**带 bug 的系统上研究 scaling 没意义**——先得让东西真的 work。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

后来 LLM 的 test-time scaling（CoT、推理模型）几乎是这个发现的直接续作——只不过载体从 MCTS 换成了语言里的思考链。

</div>

---

# 比特的不对称：先做 vs 追赶

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">

"The compute required to be the first to do something is always like much larger than the compute it takes to catch up."

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AlphaGo Zero 当年
3e23 FLOPs<br/>
**整整一个 TPU pod**<br/>
"way more compute than any other AI model at the time"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### KataGo 2020
40× 算力压缩<br/>
开源代码<br/>
Jane Street 的 David Woo 主导

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Eric 2026
**~$10K** · Prime Intellect 赞助<br/>
4K 探索 + 3K 最终训练<br/>
"a few thousand dollars of rented compute"

</div>

</div>


---

# Bitter Lesson 在围棋上发生了吗

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Eric 的实测（非 peer-reviewed）

- ✅ **架构选择不太重要**：ResNet vs Transformer 差距小
- ✅ **分布式 RL infra 可省**：dumb synchronous 训练就够
- ✅ **GPU 涨了**：Katago 用 V100s → 现在桌面 Blackwell 一半数量
- ✅ **辅助 supervision objectives 可省**——只要有一个**强的初始化**（best-response training against KataGo）

### 但还活着的 trick

- 9×9 → 19×19 的**多棋盘迁移**仍然显著加速 warm start
- AlphaGo Zero 的前 30 小时基本花在追赶 supervised baseline

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 一句话总结

> 任何 compute multiplier 都是 **transitory** 的：
> 三年后 NVIDIA 出更快的卡，
> 你今天精心设计的 trick 大概率就废了。

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**研究品味 = 知道 bitter lesson 现在能买你多少东西，以及什么时候不能完全依赖它。**

</div>

</div>

</div>

---

# 自动化 AI 研究：Opus 现在能做什么

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### ✅ 现在已经很强

**超参搜索**：不只是 grid search，而是**开放式探索**——
> "I've identified that the gradients are kind of small on this layer so let me change it up here, let me rewrite the code so the data loader has a new augmentation."

像一个会 grind 性能指标的**初级博士生** ("grad studentlike")。

**执行实验**：Eric 写了一个叫 `experiment` 的 Claude skill——给坐标轴和目标，自动跑、画图、写报告、推测原因。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### ❌ 还差什么

**不擅长 lateral thinking**：在一个 track 上一头扎到底，不会停下来问"是不是这条路本身就走不通"。

> "they don't seem to be able to kind of step back and do the lateral thinking ... like wait a minute this track doesn't really make sense."

很多 infra bug 是 Eric 自己手动 prompt "请检查 X" 才发现的。

</div>

</div>

<div class="mt-4 text-sm opacity-70 italic">
Eric 使用：Opus 4.6 和 4.7
</div>

---

# Go 作为自动化研究的 sandbox

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 外层 outer loop
**对战 KataGo 的胜率**——干净、可验证、不可 hack。

> "verifiable game like go on the outer loop."

### 内层 inner loop
和 LLM / 机器人重叠的所有子问题：
- 分布式系统
- 预测哪个 idea 会 work
- 训练算法的局部调优
- ⇒ 全部可以在小预算上做

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 一个非显然的 outer loop 设计

不一定要"打败 KataGo"——也可以是：
- 能不能**预测**我自己 gobot 的胜率？
- 能不能**预测**修改某个超参后的 scaling law？

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

这样 reward hacking 风险更低，但仍然需要靠"打 KataGo"做最终校验。

</div>

</div>

</div>

---

# 当深度学习本身就是要被发现的东西

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Dwarkesh 的反问

要训练一个强围棋 bot，你**得先发现深度学习**。但深度学习是个**几十年的赌注**：

> "this presents a very challenging long horizon RL problem where every step of the way you have like a committee telling you that this is a bad idea and then ultimately you break it through."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 当下的悖论
- 真正重要的发现都是 **decadesl long idea that took a lot of faith**
- 但你的 RL 环境只能给短期 reward
- 怎么设计一个**对长视野的"研究信仰"有耐心**的 outer loop？

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Eric 的一个押注
LLM 可以充当 **"universal grammar"**：
- 在 stack 任意层级思考
- 既能局部、也能 step back
- → 是未来"lateral thinking 自动化"的载体

</div>

</div>

---

# 局部改进真的能叠加吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Dwarkesh 听到的传闻

某些 lab 的训练 run 失败，是因为**一群人独立地各跑各的好 idea**，最后两个看上去都对的 trick 在一起反而互相破坏。

→ "having a single top down vision of how things should work is very important."

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Eric 的回答

很多 compute multiplier **有 correlated benefit**——它们都在解决"GPU 不够快"的副作用，本质重叠。

- 现在 work 的 trick
- 三年后 GPU 翻倍
- 大概率就废了或退化成噪音

**任何一个 trick 的优势都是 transitory 的。**

</div>

</div>

---

# 游戏经验能迁移到 LLM 吗？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Eric 的非严格论证

DeepMind 一开始就**在游戏上磨刀**：Atari、AlphaGo、StarCraft、AlphaStar。

后来转 LLM 时，看上去有 **positive transfer**——研究 taste、coding ability、distributed infra、project management 全都用得上。

> "I assume that there's like positive transfer in some regard."

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Dwarkesh 反驳

但 Google **一开始在 LLM 上落后**——会不会正因为他们的 RL/games tech tree 反而拖后腿？

### Eric 让步

> "the jury is still out ... it's even hard for humans to reason about what the optimal research strategy should be even with the data we have today."

→ 那么自动化研究员怎么可能做对？

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"a 10 layer neural network ... is able to amortize and approximate to a very very high fidelity a nearly intractable search problem."
<div class="text-xs opacity-60 mt-1 not-italic">— Eric 论 AlphaGo 最深的洞见</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"It's not trying to do credit assignment on wins. It's trying to improve the label for any given action you took."
<div class="text-xs opacity-60 mt-1 not-italic">— MCTS 到底在做什么</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"You never have to initialize at a 0% success rate and solve the exploration problem of how to get a non-zero success rate."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 AlphaGo 是优雅的 RL</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"You don't train the policy network to imitate the MCTS action — you train it to imitate the MCTS distribution."
<div class="text-xs opacity-60 mt-1 not-italic">— 蒸馏的真正力量在 soft label</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"What felt like a very hard problem can fall to a very very simple macroscopic simulation."
<div class="text-xs opacity-60 mt-1 not-italic">— NP-hard 也许不像我们以为的那么硬</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"The compute required to be the first to do something is always much larger than the compute it takes to catch up."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么 10K 就能复刻 AlphaGo</div>
</div>

</div>


---
layout: end
---

# 一个 10 层网络 ≈ 10 步推理

却能塌缩"一个本该 intractable 的搜索问题"

<div class="mt-12 text-base opacity-60">
代码 · github.com/ericjang/autogo<br/>
博客 · evjang.com<br/>
推荐延伸阅读：Eric 的 "As Rocks May Think"
</div>

<div class="mt-12 text-sm opacity-50 italic">
"There is some very interesting duality between [Go and LLMs]<br/>
and you can actually do a lot of research on Go MCTS and reasoning<br/>
with very small budgets."
</div>
