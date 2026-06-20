---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '专访前FAIR研究总监田渊栋：Meta裁员之后，对AI的一些遗憾与思考'
info: |
  田渊栋在 Meta 裁员之后接受硅谷101访谈，谈大语言模型路线、Scaling Law、强化学习、研究品味与未来。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Meta 裁员之后

## 前 FAIR 研究总监田渊栋 · 硅谷101

<div class="mt-10 text-sm opacity-70">
被裁前已有 offer · 168 小时之内 · 对 LLM 路线、Scaling Law、RL 的一些思考
</div>

<div class="mt-6 text-xs opacity-50 italic">
"Scaling Law 是一个悲观的未来。"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个亲历者的复盘

被裁的是 Meta 这次 600 人 AI 部门裁员里的核心 research 角色——而且他被裁之前**已经有 offer**。所以可以坦诚谈行业。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不止 Meta，更是趋势

"做 AI 的人会越来越少，用 AI 做工具的人会越来越多。"——这位 FAIR 老兵的判断。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 路线之争

LLM 是正确路线吗？RL 和 SFT 本质区别在哪？Scaling Law 为什么是"悲观"的？

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 研究品味

在 FAIR 待了十多年，他说最大的收获不是发了多少论文，而是 **research taste**——"自己给自己设一条道路"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 反市场信号

"与其听从市场的号令，还不如说我自己做自己想做的事情。"——给所有 AI 学习者的反直觉建议。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 下一步是什么

研究 + 应用合一的"超级研究员"——一个还没人证明存在的角色，但他想试。

</div>

</div>

---

# 田渊栋是谁

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 在 Meta / FAIR 十年多

"我在公司已待了十年多了。"

从围棋项目时代的工程主力，到 2018 年之后转向研究方向。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2025 年初被借调到 GenAI

"今年 1 月份的时候我是去……GenAI 在帮忙嘛"——救火 Llama 4，那段时间几乎没在做自己的研究。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 著作等身的研究者

去年年底做的**连续思维链 Coconut**，半年已经有 200 多个 citation。还有 Dualformer：长短思维混合训练。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这次裁员的核心人物之一

10 月 22 日 Meta 600 人 AI 裁员里，田渊栋是被裁的资深科学家之一。

</div>

</div>

---

# 168 小时

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 被裁前已经有 offer

> "我其实在被裁之前已经有 offer 了。"

> "我之前跟我的那些上级说了一下，我就说我不是很爽，我可能要到处看看，他们是知道的。"

<div class="text-xs opacity-70 mt-2">
被裁这件事本身——"对，无所谓。"
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 一周不到的接触量

> "现在离裁员还不到一个礼拜，还不到 168 个小时。"

各大公司、co-founding 机会、媒体——"对，有很多很多。"

<div class="text-xs opacity-70 mt-2">
裁员只是 <strong>加速</strong> 了一个本来就在发生的个人选择。
</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>作者概括（非原话）</strong>：被裁不是终点，是一个早就在酝酿的决定的触发器。十年是个分水岭。
</div>

---

# 这不是 Meta 一家的事

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded italic text-lg">
"应该说大趋势是大家开始——就是说总有一天大家都没有工作。我觉得这个是大趋势，就说得很吓人，就是这样。"
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 标数据的人

> "今天有很多人标数据，可能明天模型强了，不需要那么多人标数据了。后天模型更强了，需要的人就会少。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### on-call 的人

> "以前的 on-call……'挂了挂了，马上起来，然后要修，然后调参数'。"

现在工具自动化做得好，"这种事情也变得会很少"。

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### "做 AI 的人"

> "做 AI 的人可能会越来越少，但是探索、用 AI 来做工具、来探索其他东西的人会越来越多。"

</div>

</div>

---

# Foundation Model 这一层的分化

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50">

### ↓ 越来越少

**按工程逻辑把 model 训练出来**——田渊栋的判断：

> "把这个 model 做出来、训练出来，这些人会越来越少。"

> "大家都遵循同样的逻辑，把这个 model 训练出来，然后代码都是可以跑的……那需要那么多人为什么呢？"

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### ↑ 越来越多

**探索性研究 + 应用层**：

- "对 Foundation Model 的一个探索性的研究应该会越来越多。"
- 做应用的人会更多，但**不是泛泛的应用**——
- "落地到某个具体的垂直领域。"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
执行层被自动化，研究层和垂直应用层在两端膨胀。中间层——"做执行的那部分人"，那些"工作比较重复"的角色——就是这次裁员的主体。
</div>

---

# LLM 是正确的路线吗？

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我觉得 LLM 是一个很有意思的路线，但我不知道会不会是正确的路线。"
</div>

<div class="mt-4 text-sm opacity-70">
被追问"这一点你是同意 Yann LeCun 的吗"——
</div>

<div class="mt-2 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"这个不好说吧。因为我觉得就是，我们大家都是做科学家的，所以有科学家想法的人都会觉得……我希望找到一个更好的东西，而不是说我现在就满足于现在的这框架，然后我就在上面做到死。"
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**最大的问题**：数据量需要很多，训练出来的模型质量"肯定没有人那么高效"。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

**科学家的本能**：永远在找"更好的算法、更好的逻辑、更好的方式去学习"。

</div>

</div>

---
layout: two-cols
---

# 1000 倍的数据差距

人类一辈子能消化的文本 token：

> "最多最多 100 亿的级别，特别是文本 token。"

而大语言模型训练用的数据：

> "现在大语言模型训练的数据，很轻易的能达到 10 万亿，或者说 30 万亿这样的大小。"

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-sm">

> "**中间有 1000 倍的差距**，这 1000 倍差距，你怎么样去用人类的学习能力去弥补？很难弥补。"

</div>

<div class="mt-3 text-xs opacity-60">
但人就是能学得很好——这是当前 LLM 路线最大的 question mark。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 梯度下降的"暴论"

<div class="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded">

田渊栋的原话：

> "也许梯度下降，可能并不是一个特别好的方案。可能突然有一天也许不要做梯度下降了，可能别的方法来做。"

<div class="mt-3 text-sm italic opacity-70">"这是我的一个暴论吧，对吧。"</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 为什么这么说？

历史上"那些非常厉害的科学家……他们那个时候也没有看过那么多书，也没有那么多的数据，但他们就是能够发现……新的定理、新的证明、新的发现"。

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 那暗示什么？

> "也许我们现在训练算法，并没有达到最优的，对吧？有可能有更好的算法，更好的逻辑，然后更好的方式去学习。"

</div>

</div>

<div class="mt-4 text-xs opacity-60">
这个观点很激进——意味着不只是 LLM 架构要换，连优化范式都可能被颠覆。
</div>

---
layout: two-cols
---

# RL vs SFT：本质是不一样的"采集方式"

田渊栋的类比：

> "比如说我去老师那边听课……可以认为他就相当于是 Supervised Learning。"

> "还有一个人说我不去老师那边听课，我就自己去玩，然后把问题解决了。"

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">

> "我觉得后者，他学习出来的能力应该说更本质，然后解决问题能力更强。"

</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">

> "强化学习最大的好处是**它是主动学习的**。它能对数据的分布产生很积极的影响——这是它最最核心的地方。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rl-vs-sft.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 SFT 在"推理"上撑不住

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">

### SFT 的局限

> "如果你做 SFT 的话，这个模型可能就记忆了之前的那些推理的过程，但是它并没有产生泛化能力。"

> "特别是如果你做了大量的 SFT，这个模型的质量就可能会下降。"

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### RL 的本质

> "RL 比较好的地方，它本质上来说是个**搜索**的过程。"

> "在搜索的过程中你学到的那些数据，你获得的一些信息，其实它的质量要优于被喂的数据。"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 但 RL 不是神秘的东西

> "强化学习它只是个范式……最终的目的还是改变权重。这跟 SFT 是一样的，只是说改变权重的方式不太一样。"

> "也许存在一个方式可以统一 Reinforcement Learning 和 SFT。"

</div>

---

# 同意 Karpathy："以十年为尺度"

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

田渊栋谈到 Andrej Karpathy 最近"AGI 还有 10 年"的论断：

> "我们是进入了以十年为尺度的时代，而不是说进入一个**立即就能获得 AGI 能力**的这样一个世界。"

<div class="mt-2 text-sm italic">"对，这个我是觉得相信。"</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### "一开始进展非常快"

> "但是越往后走问题越大。是因为好的洞察、好的数据越来越少、越来越难找。"

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 自动驾驶的镜像

> "跟以前自动驾驶是一样的。就是一开始进展非常快，大家会觉得马上就能取代人了。但是越往后走，问题越大。"

</div>

</div>

---

# 跟 GPT-5 self-play 做研究

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"我最近一篇文章其实是我和 GPT-5 通过 self-play 做出来的。"
</div>

<div class="mt-3 text-sm opacity-70">
他没有任何学生，每天跟 GPT-5 对话推研究。
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

### 模型缺什么

> "如果你自己没有 domain knowledge，这个规划其实做出来了，也是跟大家差不多的——**没有什么创新性，没有什么原创性**。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 人补什么

> "作为研究员就是有一个对这个问题有很深的理解……或者说它的规划有致命的问题，那么把它指出来之后……GPT-5 就会在这方面更深入。"

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">

> "这种高层的 **human insights、human knowledge** 和对这个问题的独到见解——这些东西现在的模型是缺的。"

</div>

---

# 人对样本的"挖掘深度"

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

田渊栋的核心论断：

> "好的洞察、好的数据越来越少、越来越难找。然后**人对于数据的获取能力，和人对于数据的深度挖掘能力，永远是超过计算机的**。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 一两个样本 vs 上千样本

> "同样的问题，可能人只要一两个样本就能看到本质。但是计算机的话……可能需要比如说至少几百、上千的样本，才能大概感觉到一个轮廓。"

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 经验难以量化

> "他们甚至自己也没有办法把自己学过的样本吐出来给计算机看。因为这些样本可能在他脑子里就是他的经验，这些经验**很难去量化成一些句子**。"

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm rounded">
推论：AI 现在还是 "跟着人后面走"——人给出洞察，灌给 AI，AI 在这方向上再做深。
</div>

---
layout: two-cols
---

# 悲观的未来

田渊栋对 Scaling Law 的反主流判断：

> "Scaling Law 说实在的，这个话题本身是一个很奇怪的话题。"

为什么奇怪？

> "如果在以前跟大家说，我加指数级的样本进去……performance 正在上升、上升的速度是线性的——以前的 machine learning scientist 会觉得这些事情是 **trivial** 的。"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-pessimism.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么"悲观"

<div class="mt-6 p-6 bg-red-50 border-l-4 border-red-500 rounded text-lg italic">

> "这个 law 它给你通向的未来其实是一个比较悲观的未来。就是说你需要用指数级的样本塞进去，才能得到一个比较好的结果。"

> "如果是这样的话总有一天，**我们地球上所有的资源全部会被用完。地球上所有的能源、所有的电力，全部都会被用来训练大模型。**"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 真正应该追求什么

> "我们真正追求的是，什么样的模型能够在这条路线上走得更有效率、更高效、更快——而不是说是满足于这个 law 是对的。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 转折会发生

> "某个时候应该说是，可能大家会意识到计算量不是全部，我们可能需要对模型有更深的理解。"

</div>

</div>

---

# 思维链：他在 o1 之前就发现了

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 长思维链改写 Scaling Law

> "o1 是去年 9 月份出来的。出来之前其实我们就注意到，非常长的思维链，它会对整个模型的 Scaling Law 产生影响。"

> "如果你有很长的思维链，你就会让这个模型的 Scaling Law 的 code 变得非常理想——**我可以用比如十分之一的样本，获得更好的效果。十分之一的样本、十分之一的 parameter，有更好的效果**。"

</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 连续思维链 Coconut

> "去年年底做的连续思维链，就是用连续空间来做隐空间推理。"

影响力："可能半年就已大概有 200 多个 citation。就很多人愿意做 follow up。"

后续还有理论分析的文章："这给连续思维链 Coconut 这篇文章加了一些……相当于给了一个备注。"

</div>

</div>

---

# Dualformer：长短思维混合训练

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

> "我们去年也做了叫 Dualformer 的这篇文章。也就是说比较早地提出来，就是怎么样做混合思维模型——怎么样长思维和短思维放在一起训练。"

> "然后发现这模型其实比单纯训练长思维、单纯训练短思维**效果更好**。"

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 现在已是行业标配

> "现在其实这已经成为标配了。大家所有的思维模型都有这个长短思维这样一个自适应的性质。"

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

田渊栋自评：

> "应该说去年那些研究还是应该说**比较跟得上时代的**。"

</div>

---

# 在 FAIR 的遗憾

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 早年被"批评"做太多工程

> "刚去 FAIR 的时候，大概在前几年可能工程工作做得比较多……当时我其实还被批评说：'这个人过来是 research scientist，怎么天天做工程？'"

> "别人打开屏幕全是文章，我打开屏幕全是代码。当时我这么被批评。"

</div>

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 然后切到研究

> "后来我就说：好，如果研究科学家不能做工程的话，那我多看看代码、多看看文章。"

> "我在 2015 年到 2018 年这段时间之内，就基本上工程比较多。然后到 2018 年之后，到现在其实研究比较多。"

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded italic">

但现在反过来了：

> "其实在现在这个时代，工程能力强的人反而更受欢迎——所以就很有意思。"

</div>

---

# 最大的收获：Research Taste

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded text-lg">

> "我觉得在 FAIR 做最大的收获，应该说是 2018 年之后，我有很多的这个 **research taste**——就是对研究的一些品味，和知道怎么做研究的一些方案。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 没有品味的工程师

> "如果一个只做工程的人，他有一个比较大的问题是——他可能会只做工程上一些难的问题，但是并不知道**这东西有什么用**。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 有品味意味着什么

> "如果有研究的品味的话，那意味着就是**自己给自己设一条道路**，其实这个对于一个人的人生来说，有非常好的好处。"

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
对一个 ML 研究者，"品味"是 2018 年之前买不到的硬通货——一旦获得，可以一直往前走。
</div>

---

# 现在最稀缺的 AI 人才是？

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">

田渊栋一开口就纠正提问：

> "我想纠正一个点。就是说大家不要去想现在谁是最稀缺的。因为有可能过个两年，这个稀缺的定义就发生变化。"

</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

> "所以你想 Yann（LeCun）坐了那么多年冷板凳，然后突然之间就拿图灵奖。所以我是觉得大家应该想一想，就是**什么才是自己最想要做的事情**——而不是说是去做那些可能公司喜欢的事情。"

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

❌ "市场说什么我学什么"

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

✅ "我想做什么我做什么"

</div>

</div>

---

# 为什么"追市场"行不通了

<div class="mt-4 p-5 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

### 以前的循环：周期 10-20 年

> "市场发出个信号，这信号是说我们需要什么方向的人才……信号可以通过大学的方式慢慢地往下传播——扩招对应的系，扩招对应的老师，然后……四年或者更长时间的培养之后，这些学生最终满足市场的要求。"

> "以前这个循环是走得通的，因为整个逻辑、整个速度是比较慢的。"

</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### 现在：你想到的别人也想到了

> "全世界的人都在学——你想到了，别人也想到了。这世界上总有学得比你快的，然后总有学得比你好的，总有马上上手把事情做成的。"

> "可能换了别的东西，那么你这时候再去学，就可能一直会跟在别人屁股后面走。"

</div>

---
layout: two-cols
---

# Research Lab：不是铁板一块

田渊栋反对"大厂没法做研究"的二分：

> "你不要把大厂当成铁板一块。其实有很多的组……他们里面有研究团队，这些团队本身也会有一些科研精神和研究自由——是有的。"

> "甚至你说做 startup 的时候……因为这个问题很前沿，那你在上面肯定会有些事情可以做。"

新的形态：

> "研究永远是会继续进行的，只是说它的形式可能会变成**更像游击战这种形式**。"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./guerrilla-research.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Re-Search 这个词本身

<div class="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded italic">

> "我们在讨论研究的时候，是指这个过程本身——就是找到一些新的、一些难题的解决方案，这叫研究。**叫 Re-Search 对吧。其实它是 search（探索）。**"

> "所以它不是说是一个抽象的概念。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 谁能做研究

> "完全取决于哪个组、哪个人，有什么样的资源、什么样的东西，然后这些人放在一起，会有什么样产生化学反应。"

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 灰色地带

> "总会发现有很多有理想的人、有理想的小的组织，在继续做他们想做的事情……不是 0 或 1，就是会有很多灰色的地方。"

</div>

</div>

---
layout: two-cols
---

# 他想做"超级研究员"

> "我已经感觉到我的研究范式，可能都会被自动化的 pipeline 所代替一部分。"

被问"是 Agent 吗"——

> "不一定是 Agent，但是 Agent 肯定是一个很重要的因素。"

更大的愿景：

> "也许我会成为一个**超级研究员**，然后加了很多 AI 之后，我一方面能做更好的研究，另一方面，这些工具本身也可以用来造福别的东西。"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./super-researcher.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 能不能做"高级活动"？

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 已知能自动化的

> "你也许不需要自己回邮件，或者说你不需要去管理自己的待办事项 to-do list，或者说你不需要自己去做一些繁琐的事情。"

> "这个问题是不大的，肯定是会发生的。"

</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">

### 真正的悬念

> "更重要的是，就是说 **AI 能不能代替人的一些高级活动**——人的一些比较高级的思路、比较难的、就是需要人的一些重要的 insights 的活动。"

> "有很多难的一些科学问题，AI 能不能把这个事情做成——现在这个还不知道。"

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
他自己的实验：跟 GPT-5 self-play 写论文——但人的 domain knowledge 仍然是规划被指出致命问题、模型才能深入下去的前提。
</div>

---

# 反过来设目标

<div class="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded text-lg italic">

被问"这样的机会存在吗"——

> "我不知道。但是一般来说是这样的：就是我们先设定一个高的目标，然后再去看。"

<div class="text-lg italic mt-3">

"因为一般来说人会比较现实，说有这样的机会我就不用想了。但其实应该是倒过来——你先想一个不可能实现的目标，然后再去想有什么东西可以去支撑。"

</div>

<div class="text-base italic mt-3 opacity-80">

"这可能会让你有更好的方向可以走。"

</div>

</div>

<div class="mt-4 text-sm opacity-70">
这条结尾的方法论，跟前面"不要追市场号令"的判断是同一回事：
</div>

<div class="mt-2 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
判断"什么是值得做的"这个能力——比擅长任何一个具体技术都重要。这是 research taste 的另一面。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"Scaling Law 是一个悲观的未来。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 LLM 的资源效率问题</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"总有一天大家都没有工作……或者说没有传统意义上的工作。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈裁员是行业趋势</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"强化学习最大的好处是它是主动学习的。"
<div class="text-xs opacity-60 mt-1 not-italic">— RL vs SFT 本质</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"也许梯度下降，可能并不是一个特别好的方案……这是我的一个暴论。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于训练范式的暴论</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"如果有研究的品味的话，那意味着就是自己给自己设一条道路。"
<div class="text-xs opacity-60 mt-1 not-italic">— FAIR 十年最大的收获</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"研究永远是会继续进行的，只是说它的形式可能会变成更像游击战这种形式。"
<div class="text-xs opacity-60 mt-1 not-italic">— 谈大厂 research lab 的未来</div>
</div>

</div>

---
layout: end
---

# "你先想一个不可能实现的目标，然后再去想有什么东西可以去支撑。"

<div class="mt-8 text-sm opacity-60">
田渊栋 · 硅谷101 · 2025
</div>
