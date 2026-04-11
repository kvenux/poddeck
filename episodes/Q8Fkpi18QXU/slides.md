---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Terence Tao – How the world's top mathematician uses AI'
info: |
  Terence Tao 与 Dwarkesh Patel 的对谈：当世最强数学家如何使用 AI、
  Erdős 问题被一波 AI 攻克后为何陷入瓶颈、以及"breadth vs depth"
  下数学的下一步会怎么走。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Terence Tao × AI

<div class="text-lg opacity-80 mt-4">Kepler · Brahe · Erdős · Lean</div>

<div class="mt-10 text-sm opacity-60">
Terence Tao · UCLA · Fields Medalist<br/>
Dwarkesh Podcast · 2025
</div>

<div class="mt-8 text-xs opacity-50">
当世最强的数学家，如何看待"自动化数学"这件事 —<br/>
不是预测，而是亲手用过之后的判断。
</div>

---

# 为什么这一期值得看

<div class="text-sm opacity-70 mb-4">这是一份"用过 AI 的数学家"的现场报告，不是远观者的展望。</div>

<div class="grid grid-cols-3 gap-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 类比
Kepler 是高温采样的 LLM，Brahe 是 verifier。科学 = sampler + verifier。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 现状
50 个 Erdős 问题被 AI 解掉，然后停了。低垂果实摘完了。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 隐喻
AI 像在黑暗里乱跳的机器人——能跨过 3 ft 的墙，跨不过悬崖。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 转变
想法生成成本 → 0。瓶颈已经搬到 verification 这一侧。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 个人
Tao 自己写论文"快了 5 倍"——但深度没变，只是更宽更厚。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 长期
一旦 AI 达到人类水准，breadth × depth 会让科学"unrecognizable"。

</div>

</div>

---
layout: two-cols
---

# Kepler 的故事

Tao 用 Kepler 开场，因为它是一个完美的"AI for science"原型。

- Copernicus 提出日心说，但用的是**圆形轨道**
- Kepler 一开始相信轨道之间藏着 **5 种 Platonic 立体**——一个"美丽但错的"理论
- 他要数据，而 Brahe 有当时唯一一份高精度观测
- Brahe **十倍**于前人精度的观测，是"那一位小数"的关键
- Kepler 用了 20 年试各种"乱七八糟"的拟合，最后得出三大定律

<div class="mt-3 text-xs opacity-60">
**作者概括**：这是一个数据驱动而非演绎驱动的发现故事——Newton 要再过一个世纪才解释它。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kepler-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Dwarkesh 的类比：Kepler = high-temp LLM

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dwarkesh 的 take
"the take I want to try on you is that Kepler **was a high-temperature LLM**"

<div class="text-xs opacity-60 mt-2">Kepler 整个职业生涯都在试随机关系——音乐和声、Platonic 立体——只要有 Brahe 的可验证数据集，"大量随机想法"也能驱动真正的科学进步。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Tao 的回应
"it had to be matched by an equal amount of verification, **otherwise it's slop**"

<div class="text-xs opacity-60 mt-2">"we celebrate Kepler, but we should also celebrate Brahe for his assiduous data collection, which was 10 times more precise than any previous observation."</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
所以这个对谈的潜文本是：<strong>AI 生成是廉价的 Kepler，谁来当 Brahe？</strong>
</div>

---
layout: two-cols
---

# 想法生成成本 → 0

这是 Tao 对"AI 改变了什么"最干净的表述。

- "AI has basically driven the **cost of idea generation down to almost zero**"
- 类比："the internet drove the cost of communication down to almost zero"
- 廉价不等于丰盈："it doesn't create abundance by itself"
- 真正的瓶颈跑到了下游：**verification, validation, assessing what ideas actually move the subject forward**
- 过去 peer review 是为了挡掉业余科学家的"奇想"。现在每天有上千份 AI 生成的论文涌入期刊
- "human reviewers ... are already being overwhelmed, actually"

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bottleneck-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Erdős 问题：50 道，然后就停了

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 起飞期
- "50 odd problems have been solved with AI assistance, which is great, but there's like **600 to go**"
- 几乎全是**没有文献**的问题：Erdős 提过一两次，但没人正经写过解
- AI 的强项：把一个不知名的小技巧套到一个没人试过的问题上

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 然后停了
- "we have picked the **low-hanging fruit** and now we're at this plateau"
- Tao 知道至少 3 个独立团队让前沿模型"漫无目的地"扫每一道题
- 都没再产出纯 AI 解
- 现在大多数解题是"人 + 多个 AI 工具"的协同对话

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
单题成功率"maybe 1 or 2%"——但能 scale，挑赢家展示，看起来惊人。
</div>

---
layout: two-cols
---

# 黑暗中乱跳的机器人

Tao 给整个 AI for math 现状的视觉隐喻。

- 想象一片山区：**3 ft、6 ft、15 ft 直到一英里高**的墙参差排列
- 在黑暗里，没人知道哪堵墙容易、哪堵是悬崖
- AI 工具像"jumping machines that can kind of jump 2 m in the air, higher than any human"
- 它们**有时往错的方向跳，有时摔倒，有时跳上低墙的顶**
- 之前我们够不到的低墙，它们现在能上去
- 但悬崖那一头——没人爬上去过

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./jumping-robots.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 它们跳得高，但不会"攀岩"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-base italic">
"there isn't this cumulative process which is built up interactively. It seems to be a lot more trial and error and just repetition, brute force."
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 人类合作时
两个人都不会，但一个人提个原型 → 测 → 不行 → 改 → 一步步把"行得通"和"行不通"系统地圈出来 —— 这是 Tao 心目中**真正的 intelligence**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### AI 工具
能模仿一点点。但**没法**"jump up, grab a handhold, pull others up, then jump from there"。新一段对话开始就把刚才的事全忘了。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"you're on a new session it's <strong>forgotten</strong> what it just did. It has no new skills to attach to ... build on related problems."
</div>

---
layout: two-cols
---

# Breadth vs Depth

这是 Tao 反复回到的对照。

- "they **excel at breadth** and humans excel at depth"
- 人类专家天然是"hedgehog 或 fox"中的 fox：一点点都懂，但要靠多年训练
- AI 是 **breadth at scale**：可以同时打开一万个问题
- 但"current way of doing math and science is focused on depth"——因为人类做不到 breadth
- 所以问题不是 AI 不够强，是**整个学术工作流根本没准备好用 breadth**
- "we have to **redesign the way we do science**"

<div class="mt-3 text-xs opacity-60">**作者概括**：Tao 没把 AI 当替代，他把它当一个"过去不存在的新维度"，需要新流程才能榨出价值。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./breadth-depth.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Bearish 还是 Bullish？

<div class="text-sm opacity-70 mb-4">Dwarkesh 提了一组对照——为什么"AI 只能跳到某个高度"既是悲观理由也是乐观理由。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Bearish 读法
它们只能跨某个高度的墙，跨不过人类能跨的那种深度。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Bullish 读法
一旦它们达到某个 waterline，就能**填满所有处于这条水位的问题**——人类做不到这个。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
Dwarkesh: "the same reason that we should be bearish now is the reason we should be especially bullish, not even when they achieve superhuman intelligence, but just when they achieve <strong>human-level</strong> intelligence."
</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Tao 同意："I agree. ... they're very complementary."
</div>

---

# Tao 的工作方式变了多少？

<div class="text-sm opacity-70 mb-4">2023 年他预测 2026 年 AI 会成为"trustworthy co-author"——结果他自己说"pretty good in retrospect"。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 论文里多了什么
- 更多代码
- 更多图
- 几小时画一张图 → 几分钟
- 过去**根本不会**放进论文的内容，现在放进去了

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 提速多少
"papers I would write today ... they would definitely take **five times longer**"
<div class="text-xs opacity-60 mt-2">但他强调："I would not write my papers that way" —— 是因为现在能这么写，所以才这么写</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 没有变的
"the core of what I do, like actually solving the most difficult part of a math problem, **that hasn't changed too much**. I still use pen and paper for that."

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-base italic text-center">
"made papers sort of <strong>richer and broader</strong>, but not necessarily deeper."
</div>

---

# 数学一直缺一种东西：实验

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Tao 的观察
- 几乎所有科学都有 theory + experiment 两条腿
- "math has been almost unique ... it's **almost entirely theoretical**"
- 数学家有直觉，但没人做过 1000 道题的大规模对照实验
- 现在这件事可以做了

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 的真正机会
- "doing mathematics at scale is at its **infancy**"
- AI 把数学从"手工艺"推向"实验科学"
- 可以扫一万道题，问"什么 workflow 让你 scale"
- 不是替你解一道题，是让你看见**一群题**

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"that's where AI is really going to <strong>revolutionize the subject</strong>." —— 不是 Riemann 假设，是大规模数学实验。
</div>

---

# Riemann 假设：会不会有"无法理解的证明"？

<div class="text-sm opacity-70 mb-4">Dwarkesh 担心：万一 AI 在 Lean 里写出一个 Riemann 的证明，但全是 gobbledygook 怎么办？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 历史先例
- 四色定理的证明就是"暴力分情况"
- "We have still not found a conceptually elegant proof of this theorem"
- 有些问题可能**永远**只有暴力解

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Tao 没那么担心
- "I'm not as worried"
- 一旦你**有了证明这个 artifact**，Lean 让你能"原子化地"读它
- 每个引理可以单独看："这个我熟悉/这个我没见过"
- 可以做 ablation：删一步看看还成不成

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
他甚至预测会出现一种新职业：拿 AI 生成的巨型 Lean 证明，让另一些 AI **refactor、压缩、找更优雅的版本**。
</div>

---

# 一个未存在的工具：策略的形式语言

<div class="text-sm opacity-70 mb-4">Tao 的"个人愿望清单"：Lean 把 proof 形式化了，但 strategy 还没有。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 我们已经形式化的
- ZFC + 一阶逻辑 → "什么是证明"
- Lean 把 deductive proof 变得可以训练 AI
- 这是 20 世纪初才完成的事

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 还没形式化的
- 数学家如何**评估一个 conjecture 是否合理**
- 数学家如何用半正式语言**讨论策略**
- "we have to rely on human experts and the test of time to validate whether something's plausible"

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
危险：reinforcement learning "is so good at finding these backdoors" —— 任何不严密的形式系统都会被它找到漏洞。
</div>

---

# 素数的随机模型：一个"非正式但有效"的范例

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

Tao 用素数做例子说明"非正式信念"是怎么运作的：

- Gauss 数了头 10 万个素数 —— 一份早期的"数学数据集"
- 发现密度大约是 X / ln(X) → **prime number theorem**
- 后来数学家把素数当作**伪随机集合**来思考
- 这不是真的随机——但当随机来想，预测**全都对**
- Twin prime conjecture 我们证明不了，但**绝对相信**它是真的——因为如果素数像抛硬币，孪生素数必然出现

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么 Riemann 假设重要
"if the Riemann hypothesis failed ... it would be a serious blow to this model. It would mean there's a **secret pattern** to the primes that we were not aware of."

<div class="text-xs opacity-60 mt-3">而且：如果素数有未知模式，我们会**立刻**放弃所有基于素数的密码学。</div>

</div>

</div>

---

# 进步靠的是"删减假设"，不是"添加理论"

<div class="text-sm opacity-70 mb-4">Tao 一段几乎是哲学的总结。</div>

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"progress has been made actually not by adding more theories but by <strong>deleting some assumptions</strong> that you have in your mind."
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 地心说为何持续千年
亚里士多德式的"物体倾向于静止"——直到 Newton 删掉这个假设。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Darwin 的难度
不是逻辑复杂，是要删掉"物种是静态的"这个一辈子都看不到反例的假设。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 我们正在经历的
"a cognitive version of the Copernican revolution"——人类智力不再是宇宙的中心。

</div>

</div>

---

# 故事的另一半：科学是社会性的

<div class="text-sm opacity-70 mb-4">Dwarkesh 问：为什么 Darwin 比 Newton 晚两个世纪，尽管《物种起源》看起来"简单得让人懊恼"？</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Tao 的回答
- Darwin 是**伟大的传播者**，用自然语言写作，没有方程
- Newton 用拉丁文，性格也"somewhat unpleasant"，故意不写最关键的洞见
- "the art of exposition and making a case and creating a narrative is a very important part of science"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 对 AI 的含意
- 你怎么 RL 一个"说服力"的奖励信号？
- "how can you score how persuasive you are?"
- "maybe it's good that AI are not yet optimized to be persuasive"
- "maybe that will be **forever the human side of science**"

</div>

</div>

---

# 评判想法的标准依赖未来

<div class="text-sm opacity-70 mb-4">这是 Tao 给"为什么 RL 评估科学进展那么难"的核心论证。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

- Transformer 不一定要赢——可能其他架构先做到也会变成标准
- Base-10 数制没什么"客观最优"，只是大家用了
- 一个想法是否"好"，取决于：
  - 后人能不能把它推得更远
  - 社会和文化是否选择采纳
  - 有没有其它领域被它启发

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">
所以"客观打分"很难做到——它本质上就**不是**一个静态的可度量量。
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-base">
"you can't look at any given scientific achievement purely in isolation and give it an objective grade without being aware of the context both in the past and the future."

<div class="text-xs opacity-60 mt-3 not-italic">这正是为什么 reinforcement learning 在"科学进展"上这么难做——奖励信号必须跨越几十年。</div>

</div>

</div>

---

# 同时令人惊叹和失望

<div class="text-sm opacity-70 mb-4">关于"我们对 AI 的感受"，Tao 给了一个很 honest 的描述。</div>

<div class="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded text-xl italic text-center">
"the progress is simultaneously <strong>amazing and disappointing</strong>."
</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 类比
"I remember when Google's web search came out 20 years ago and it just blew all the other searches out of the water ... and then after a few years you just took for granted that you could just Google anything."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 我们对惊奇的耐受度
"2026-level AI would be stunning in 2021 — face recognition, natural speech, doing college-level math problems we just take for granted now."

</div>

</div>

---

# Serendipity vs 优化

<div class="text-sm opacity-70 mb-4">Tao 自己学新领域的方法，意外指向一个更大的主题。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

- 自认是 fox 而非 hedgehog
- 有 obsessive completionist 的一面——"I've had to wean myself off computer games"
- 写博客让自己**别忘了**学过的东西
- 但更深的智慧是**故意不优化**：

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-xs">
"a lot of events that I kind of reluctantly went to ... I would learn interesting things." —— 不舒服的会议反而带来意料之外的好。
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 危险
"in modern society, ... we've become really good at optimizing everything. And maybe we are **optimizing out of optimization**."

<div class="text-xs opacity-60 mt-2">COVID 期间一切转线上——你照样开会，但失去了"hallway 里偶遇某人"的随机性。</div>

<div class="text-xs opacity-60 mt-2">Tao 在 IAS 待几个月后："I run out of inspiration somehow ... You actually do need a certain level of distraction in your life."</div>

</div>

</div>

---

# 给学数学的人的建议

<div class="text-sm opacity-70 mb-4">访谈最后一段——一段非常温和、不卖未来的话。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 对现状的判断
- "we live in a particularly unpredictable era"
- "things that we've taken for granted for centuries may not hold anymore"
- 老实承认："in many ways I would prefer the much more boring quiet era"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 给新人的建议
- 仍然要走传统教育路径，扎实学基础
- 但**也要**对完全不存在的科学方式保持开放
- 高中生现在已经可能用 AI 工具做出真正的数学贡献
- 需要"a very adaptable mindset"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-center text-base italic">
"it's a <strong>scary time</strong>, but also very exciting."
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句（全部经 transcript 验证）：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"AI has basically driven the cost of idea generation down to almost zero ... it doesn't create abundance by itself."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于瓶颈的迁移</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"it had to be matched by an equal amount of verification, otherwise it's slop."
<div class="text-xs opacity-60 mt-1 not-italic">— 谈 Kepler / Brahe，以及今天的 AI</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"they excel at breadth and humans excel at depth ... they're very complementary."
<div class="text-xs opacity-60 mt-1 not-italic">— Tao 的 AI vs human 总结</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"progress has been made actually not by adding more theories but by deleting some assumptions that you have in your mind."
<div class="text-xs opacity-60 mt-1 not-italic">— 论科学史的进步机制</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"the progress is simultaneously amazing and disappointing."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于今天 AI 的最诚实评价</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"made papers sort of richer and broader, but not necessarily deeper."
<div class="text-xs opacity-60 mt-1 not-italic">— Tao 自己使用 AI 后的诚实自评</div>
</div>

</div>

---
layout: end
---

# "it's a scary time, but also very exciting."

<div class="mt-6 text-sm opacity-60">
Terence Tao · Dwarkesh Podcast · 2025
</div>
