---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "OpenAI's Research Playbook: Scaling Laws, Reasoning, Evals, AGI — Mark Chen"
info: |
  Mark Chen 在 Latent Space 的 "cooking series" 对谈：
  OpenAI 首席研究官，在做韩式豆腐汤之间，
  讲清楚 OpenAI 的研究路线、评测危机、推理范式、AGI 时间表。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Mark Chen

<div class="text-xl opacity-80 mt-2">on Latent Space · Cooking Series</div>

<div class="text-lg opacity-60 mt-6">
OpenAI's Research Playbook —— Scaling Laws, Reasoning, Evals, AGI
</div>

<div class="mt-8 text-sm opacity-60">
OpenAI Chief Research Officer · 前 high-frequency trader · 一边煮韩式豆腐汤一边讲研究
</div>

<div class="mt-2 text-xs opacity-50">
~41 min · 2026-06 · Latent Space · scaling / reasoning / evals / AGI
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 汤的反击
Zuckerberg 给 OpenAI 研究员送汤挖人。Mark 的对策：**也给自己人送汤**。Cooking series 由此而来。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Trader → Researcher
高频交易里的 "unhackable" 和 "squeezing out the juice"——一个被低估的研究入门路径。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Scaling Laws 没死
"pre-training is dead" 叙事每隔一两年出现一次。Scaling 已撑过 **almost 10 orders of magnitude**。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Reasoning 是怎么 ship 出来的
o1 之前是 pre-training + post-training 的好机器。要全公司转向，靠 Jakub、Ilya 的 conviction。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Evals Crisis
SAT、IMO、IOI 全饱和。"Once an eval is out in the world, it's already not a good [one]." 行业在裸奔。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Vibe Researcher 已上路
研究员出 idea、模型做实现。3 年路线图的终点是 **end-to-end research**——含 taste。

</div>

</div>

---

# 汤的反击战

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-400 bg-blue-50 bg-opacity-40">

### 背景
2025 年 Mark Zuckerberg 亲自带汤去 AI 研究员家里挖人。

### Mark Chen 的反应
> "I have brought soup to our own researchers."

也给自己人送汤。把"挖人战"打回到一种近乎滑稽的家常感里。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 战后总结
> "I think that matters calmed down a little bit. I think we came out on top."

### Post-AGI 的副业
> "Post AGI, this is going to be my hobby. I've always joked that I'm going to start a noodle stand."

CRO 的退休计划：一家面摊。

</div>

</div>

<div class="mt-4 text-sm opacity-60">
这期 Latent Space 选了 "cooking series" 的形式，灵感就是这个汤的故事——Mark 在录制现场亲手做韩式豆腐汤。
</div>

---

# 交易员是怎么变成研究员的

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### unhackable
> "It's very unhackable. You can't kind of cheat the real world."

交易是少数几个无法欺骗系统的职业——市场是冷酷的真值。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### hard metric to optimize
> "It's a hard metric to optimize."

PnL 是无法粉饰的目标函数，跟 RL 的 reward 一脉相承。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### attention to detail
> "Attention to detail really matters."

bp 级的优化错过一次就赔钱。研究里同样如此。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 col-span-3">

### 整体气质
> "It's kind of the brutal hard optimization and squeezing out the juice of a system."

**作者概括**: 这跟"调一组 hyperparameter 把训练曲线再压低 2%"是一回事。交易场上那套"用最后一点信号榨出最后一点 alpha"的本能，转过来就是研究员的肌肉记忆。Mark 反复强调：你不需要 PhD，但需要这种气质。

</div>

</div>

---

# 怎么培养"研究品味"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Mark 的回答：复现

> "You should take papers that you really look up to and just try to fully replicate it."

具体到他自己当年（~2018）：
- 复现 **ResNet** 和 **Pixel CNN**
- 把训练曲线"精确"压到论文给出的 perplexity / training loss
- 在这个过程中遇到一堆论文不写、但真做的人都知道的小技巧

### 入坑的那一刻

> "When AlphaGo played Lee Sedol... that was a turning point for so many people."

第一个大项目：把 **DQN** 跑起来。

</div>

<div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 三个关键词

**1. Replication（不是 reading）**  
读懂论文 ≠ 能复现。差的就是那一层"看不见的工艺"。

**2. Curve-matching**  
"精确"压到论文给出的曲线——不是"差不多就行"。

**3. 内功 over 标签**  
Mark 反复强调："I think it's a little bit overrated. You don't need a PhD."

</div>

<div class="mt-4 text-xs opacity-60">
他在 OpenAI 看到的最强研究员里，很多没有正统的 ML / AI 训练背景。共同点是这种"我能从一篇论文里把所有细节抠出来"的耐心。
</div>

</div>

</div>

---

# Move 37 已经发生在每个领域

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

> "Isn't it crazy that you're seeing move 37s in almost every field now? It's like there's move 37s in math, there's in computer science and coding."

> "A lot of people woke up at the start of this year and were like, man, **agents are working in my profession**."

<div class="mt-4 text-sm opacity-70">
**作者概括**: 2016 年 AlphaGo 让围棋高手第一次见到 "human 看不懂但是好棋" 的那种瞬间。2026 年，这种瞬间出现在编程、数学、科研里，不再是新闻。
</div>

</div>

<div>

<Excalidraw
  drawFilePath="./move37-fields.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

</div>

---

# RL 的边界：哪里能进，哪里进不去

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### ✓ RL 起飞的地方
> "Where there's cold hard truth, things like math and computer science, where you can prove it correctly or wrong — that's where you kind of see it really taking off."

- **Math** — 答案对/错可以机械判定
- **Computer Science** — 编译跑/不跑，单元测试过/不过
- **科学发现** — 定理证明、frontier of hard sciences

</div>

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### ✗ RL 进不去的地方
> "Creative writing, where you could take two pieces of creative writing and **two experts can have wildly different opinions**."

- **Creative writing**
- 评价主观、专家意见发散的领域

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Mark 的判断
> "It's these fields where things are hard to grade, where RL has the least amount of ability to kind of go and directly apply there."

很多人在尝试把 RL 推到这些领域，但目前还在早期。

</div>

---

# 超人智能要往哪个 eval 走

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 一代代往外推

programming contests → real-world research → ...

> "We've seen that the models have gotten a lot better at just kind of **discovering novel theorems** and pushing the frontiers of of hard sciences."

> "Even today, that's no longer a surprise. We almost take it for granted now that these models can solve very very difficult problems."

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 下一个 frontier：coding co-working

> "We think of **coding co-working** as really a domain for that that tests whether our models can learn in **high-context settings** and in **real-world long-horizon settings**."

两个维度同时考：

1. **High-context** — 大量上下文（代码库、历史、约定）
2. **Long-horizon** — 多步、跨小时甚至跨天的任务

</div>

</div>

<div class="mt-4 text-xs opacity-60">
**作者概括**: 这其实是把 IMO 题的 "1 道题 1 个 prompt 1 个答案" 范式扔掉，换成 "一个工程任务、一个 code base、一周的交互"。这是为什么 OpenAI 在 Codex 上投了那么多。
</div>

---

# Pre-training 没死，scaling 也没

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

> "I firmly believe in exponent being on the exponential and in scaling laws. So I think any of these bear takes, I fairly strongly disagree with."

### 历史经验
> "In many times in the history of developing LLMs, people have been saying this. There've always been some bottlenecks that people will [say] 'well, you can't scale past this'. And we've always found some kind of technique, whether it be better engineering or some new research insight that helps you break past the boundary."

### 数据点
> "It's held for almost **10 orders of magnitude**, but there's no reason it should not keep keep holding."

</div>

<div>

<Excalidraw
  drawFilePath="./scaling-orders.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>

<div class="mt-2 text-xs opacity-60 text-center">
每次说"撞墙"，最后都被一组工程或研究的新技巧化解。
</div>

</div>

</div>

---

# Reasoning 不是凭空出现的

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-40">

### 当时的世界
"pre-training + post-training" 已经在挣钱。

> "Even at a company like OpenAI, you would have people ask naturally, **why do something when you have a machine that works**?"

公司里的内部摩擦：为什么要离开一条已经能拿到结果的路？

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-40">

### Conviction 是稀缺品
> "It's to the credit of Jakub, Ilya, many of the people who really had **conviction and vision** in the space that we started pushing on this in earnest."

> "Even then, it took a lot of steering to get the whole company behind this as a fundamental bet."

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"The first breakthrough that we launched to the world here was o1 — but it wasn't easy to get that off the ground."
</div>

<div class="mt-2 text-xs opacity-60">
**作者概括**: 是"组织摩擦"而非"算法摩擦"。技术路线靠少数人推动 + 持续 steering——和外界想象的"OpenAI 看到 RL 反应了 all-in"完全不同。
</div>

---

# OpenAI 的三大研究支柱

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

> "We have an org that focuses on **pre-training**, which is giving models a lot of world knowledge. We focus on **RL** like teaching the models how to reason with that knowledge, how to chain the little insights together. And then finally **alignment and post-training**."

### 每个 org 都同时做两件事
1. Scale 主线（mainline）
2. 押新的 bet（解锁新的 scaling 性质）

</div>

<div>

<Excalidraw
  drawFilePath="./three-orgs.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

</div>

---

# 顶层稳，细节让管理者改

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 高层路线
> "The high-level research roadmap should be stable. People need something to ground in."

OpenAI 的整体路线 Mark 说"已经稳定一段时间了"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 实现细节会变
> "The implementation details can change over time. The sequencing will matter, the relative resourcing will matter, and the kind of exact steps on the ground will matter."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 强制重新审视的契机
> "We have kind of points in time that force us to reconsider these things. One example is when we do compute [allocation]."

每次重新分配算力，是一次"我们真的在押对的赌注吗？"的强制反思。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 不微管
> "I don't like micromanaging my managers. One important thing is to empower them but to just kind of give compute big swaths of compute to the big bets you want to make."

</div>

</div>

---

# 自上而下 + 自下而上的双轨

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Top-down

> "Research it feels like a **meritocracy**. Often times the research managers are the people who have done the best research in the past."

manager 自己就是过去 ship 出大事情的人——他说"我相信这条路"，团队会认真听。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### Bottom-up

> "We like to be convinced that we're wrong. Someone can just come with **cold, hard evidence**. And many things like that have turned into core parts of our research roadmap — just things that no one was really kind of trying to steer, but some researcher on the ground had a heavy conviction in."

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 数字标尺
- 每个 org 进主线的 **3–5 个 bet**（"small number of bets, say three to five bets from each org"）
- 每 1-2 个月过一遍 ~300 个潜在项目（主持人转述，Mark 没否认）
- 主线 bet 拿"大块算力"，灵活池子留给 manager 自己塞东西

</div>

---

# 怎么判断一个新研究员能不能行

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 进来前：非常难
> "It's a hard problem before someone comes to OpenAI."

最强的研究管理者靠"直觉的 gut check"——他说的话、提的 idea，是不是"你自己也会想到的方向"。

### 进来后：6–12 个月
> "Usually in six months to a year, it's pretty clear who has the strongest trajectory and who's going to make a lot of impact."

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 不止一种"好研究员"

**Implementer 型**  
"People who just take an idea, it's very clear, and they'll just implement it before anyone else."

**Crazy idea 型**  
"People who just come up with the kind of crazy almost too crazy, but somehow not that crazy ideas and they really convince you in a different way of seeing the world."

两种都是 alpha，不要逼一个人做另一种。

</div>

</div>

---

# Evals Crisis：行业在裸奔

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### Mark 的诊断

> "We really are kind of in an **evals crisis**, where all the really great evals that we all know — growing up like taking the SAT — those are all fully saturated."

> "Beyond that, the other scary thing in the field is the number of canonical gold standard benchmarks is low."

### 黑话：bench maxing
> "I think internally, just like '**bench maxing**'... you can kind of overfit onto certain distributions. It won't be reflective of how well you generalize."

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 这条规律是行业的痛
> "Once an eval is out in the world, then it's already not a good [one]."

— Mark Chen 的研究 lab 哲学

**作者概括**: eval 一旦公开，几个月后所有大厂都会过拟合它。所以真正有信号的 eval 必须不断换新、不能让模型实验室"看到题"。这是为什么 SWE-bench、GPQA 都有 -Pro 版本，是为什么 OpenAI 在内部不断造新的 holdout。

</div>

</div>

---

# Evals 团队和模型团队要分开

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

> "There's this philosophy of **separate the teams that are creating the evals from the teams that are optimizing the models** themselves."

> "Because that way you don't coincentivize them. The evals team can work — they're trying to build evals that are hard for the models. So there's this **inherently adversarial process** where you're not kind of cheating yourself."

### 工具的加速
> "One great thing about tools like **Codex** is they really enabled the fast iteration of evals. We're able to just kind of have one person just very quickly put together a very high-quality eval."

</div>

<div>

<Excalidraw
  drawFilePath="./evals-adversarial.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

</div>

</div>

---

# Jagged Frontier：IMO 满分，刷牙不会

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### Mark 自己用的词
> "There's a lot made of this **jagged frontier** analogy where there's some things that the models just inherently, based on maybe the data it sees, it's just good at."

### 为什么人觉得"模型怪"
> "Ultimately, what's intuitive for the models is often not that intuitive for the humans, and vice versa."

### 一个具体例子
> "**Vision**, of course, is something that's more naturally biologically wired for humans."

人天生有的，模型从数据里二手学；模型轻松能做的（IMO/IOI），人未必懂。

</div>

<div>

<Excalidraw
  drawFilePath="./jagged-frontier.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>

<div class="mt-2 text-xs opacity-60 text-center">
模型与人类的能力轮廓互相错开。
</div>

</div>

</div>

---

# Long Context：实现 vs 实现得好

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 朴素版本
> "The canonical way you would solve for very long horizon learning, which is you just naively increase your context window."

把 context window 加大就完了——是直觉，但不是终点。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 实现 ≠ 实现好
> "There's a difference between **implementing long context and implementing long context well**."

needle-in-a-haystack 类型的 eval 就是用来识别这一点的。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 工程捷径
> "Many coding products today have features like **compaction**, where you can compress kind of either insights or working state."

compaction 是绕过"原生长上下文"昂贵 primitive 的实用手段。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一个 takeaway
单纯的"100K → 1M token"不解决问题。compaction、memory、summarization 这些**工程层的 shortcut**，跟"长上下文做得好"是耦合的两件事。

</div>

---

# Vibe Researcher 已经在路上

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 当下的转移
> "Both at OpenAI and our other labs, you're starting to see a lot of the work become mostly **orchestration-focused** — like the researchers coming up with the ideas and the model's great enough to do the implementation execution by itself."

研究员的工作正在变成"组织 + idea 生成"，而不是"自己写每一行实验代码"。

</div>

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### 还差一步：taste
> "We also said earlier, the **models don't quite have the taste yet**. That's why you still need the researchers coming up with the ideas. **It's going to be hard to teach the models good taste**."

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Yacoub (Jakub) 的段子
研究员对 Jakub 抱怨：现在感觉手下都是"an army of really dumb IOI-like formalists"——一群只会做形式化定理证明的小弟。Jakub 回："**That feels like already the situation I'm in.**"

</div>

---

# 三年路线图：端到端的自动研究

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

> "When we look at our **three-year roadmap**, the end goal that we want to reach is one where the models are just doing **end-to-end research** and... a part of that problem is just being able to have the model come up with good taste."

> "You point at some just generic benchmark or something and it finds the right solutions."

### Mark 的判断
模型最终会达到 research taste 上的 parity。

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 还需要几个"突破"？

主持人引用某些研究员说："要 2-3 个新 breakthrough 才能到 AGI（continual learning 等等）。"

Mark 的回答：

> "I don't know if I have that same framing. Continual learning is a **basic primitive that you have to unlock**."

> "Clearly many shots on goal, and I'm pretty sure they'll work."

不愿意把它框成"几个 breakthrough"，更像"很多枪在瞄、都会响"。

</div>

</div>

---

# OpenAI 的 alpha：押高风险 bet

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

> "That is a big part of **OpenAI's alpha** — one thing that differentiates us from other labs is we take a lot of high-risk bets. That's what's allowed us to stay at the frontier so consistently over time."

### 但 corollary 是有的会输

> "A hard corollary of that is when a bet doesn't pan out, you have to not delude yourself into thinking that this is something that will work."

要敢于宣布"这条死了"——硬下手做"sunk cost"切除。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 输的 bet 也值钱
> "Even sometimes when people fail at proving out a technique, their **write-ups are very important** because it'll often be a natural idea and you can perhaps save a lot of people from going through the same pain."

### Mega hit 的耐心
> "Just bet after bet, it doesn't pan out, and just when you're like at the brink of frustration, you have something that's like a **mega hit**."

> "They only have to justify it once in a while for it to make sense — it may be like a very trading-like lens on the world."

</div>

</div>

---

# 多模态：尽可能少的架构

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Mark 的立场

> "For a research lab, there are a lot of advantages for it to be under one [model]. You just have to maintain one infrastructure stack."

> "There's a **strong bias for us to keep it in as few different architectures as possible**."

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 为什么

- 一套基础设施栈的边际成本远小于多套
- 在 "core fundamental stack" 上的研究投入，**自动溢出**到所有模态
- 维护多套架构的隐性成本被严重低估

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**: 这是 GPT-4o / GPT-5 风格的"omni"路线的研究侧解释。不是因为"统一模型更智能"，而是因为对一个 research lab 来说，**少维护一套 stack 就是少一份摩擦**——这种 reasoning 比"哲学上的统一"实在得多。

</div>

---

# Overrated / Underrated

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 🚫 仍然 overrated 的世界观

**"Pre-training is dead"**

> "If you still have a pre-training is dead view of the world, I think pre-training is definitely... not... dead. It's underrated."

每隔一段时间这个叙事就会回来。每次都被打脸。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### ✅ Underrated

**Products 和 end uses**

> "Products and kind of thinking about end uses and how you tie all the primitives you build in research to real agentic use cases in the world. That's also underrated."

> "You really can't just kind of build everything in a vacuum and not connect things to utility."

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">

CRO 主动说"产品被研究侧低估"——这跟外界对 OpenAI 的"研究 + 产品双驱"叙事是吻合的。

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I firmly believe in exponent being on the exponential and in scaling laws."
<div class="text-xs opacity-60 not-italic">— 对所有"pre-training is dead"叙事的统一回应</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic">
"You're seeing move 37s in almost every field now — math, computer science, coding."
<div class="text-xs opacity-60 not-italic">— Mark 对 2026 年的总结：agents are working in my profession</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Why do something when you have a machine that works?"
<div class="text-xs opacity-60 not-italic">— 当年 OpenAI 内部对启动 o1（reasoning）的真实质疑</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"We really are kind of in an evals crisis."
<div class="text-xs opacity-60 not-italic">— CRO 对全行业评测体系的判断</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic">
"It's going to be hard to teach the models good taste."
<div class="text-xs opacity-60 not-italic">— 关于 vibe researcher 的限度</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Continual learning is a basic primitive that you have to unlock."
<div class="text-xs opacity-60 not-italic">— Mark 不把 AGI 框成"几个 breakthrough"，而是"基础 primitive"</div>
</div>

</div>

---
layout: end
---

# "Post AGI, I'm going to start a noodle stand."

<div class="mt-6 text-sm opacity-60">
— Mark Chen, OpenAI CRO · Latent Space Cooking Series · 2026-06
</div>
