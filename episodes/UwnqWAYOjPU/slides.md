---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Dylan Patel Explains the AI War While Cooking'
info: |
  SemiAnalysis CEO Dylan Patel on Taiwan endgames, export controls, hyperscaler capex, Nvidia's paranoia, and the moving semiconductor bottleneck — over a plate of chicken fried rice on In-Context Cooking.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 一边炒饭，一边讲清楚 AI 战争

## Dylan Patel · SemiAnalysis · In-Context Cooking

<div class="mt-10 text-sm opacity-70">
台湾终局 · 出口管制 · 千亿资本开支 · Nvidia 的偏执 · 半导体瓶颈的迁移
</div>

<div class="mt-4 text-xs opacity-50">
"I swear to God if Uncle Roger finds this video, I'm going to cry."
</div>

---

# 为什么这期值得反复看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 台湾四种终局

Dylan 把大家嘴上不敢说的四种结局摊开：现状、更强独立、KMT 上台、政变或入侵。他押的是哪一种？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 出口管制的两派

Nvidia / David Sacks vs Dario。一派要卖芯片留住生态，一派要全面卡死。Dylan 都能替对方 steal-man。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Pascal 的 AI 版赌局

Google $180B、Amazon $200B——比几年前多 4×。为什么每家超大规模公司都必须继续下注？

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 瓶颈一直在搬家

2023 是 CoWoS，24-25 是数据中心，25-26 是电，现在又回到了晶圆厂。谁破了规矩？

</div>

</div>

---

# 从养蜂人到 SemiAnalysis 60 人团队

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 一路"下一步"

Dylan 来自 Georgia 农村，大学后短暂在 Minnesota 生活，做了大约一年半的**养蜂人**。

<div class="text-xs opacity-60 mt-2">
"I did beekeep for like a year and a half basically."
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 匿名的芯片小圈子

多年在 Reddit / 匿名 Twitter / WordPress 博客上聊 Nvidia、Intel、AMD——他叫这个圈子 "silicon Twitter"。

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50">

### Doug 的推力

Doug O'Laughlin 一句"别在 WordPress 上写，去 Substack，然后收费"——把匿名爱好者推成了商业媒体。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 现在的 SemiAnalysis

**60 人**、8-10 个国家、服务全球顶级 AI 实验室、超大规模厂、芯片公司、数据中心公司。

</div>

</div>

<div class="mt-4 text-sm opacity-70 text-center">
"otherwise it might still just be like a niche anonymous blog where I'm still just doing random consulting rather than actually a company with 60 people."
</div>

---
layout: two-cols
---

# 台湾的四种终局

Dylan 直接把可能的结果摆出来，而不是绕圈子说"复杂"。

<div class="mt-4 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**① 现状**：中国继续依托台湾的产业慢慢工业化，没有大事件。
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500 text-sm">
**② 更强独立**：DPP 更公开地宣示独立——反而**逼中国下手**。
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**③ KMT 上台**：政治上向大陆靠拢，但 TSMC 依然受美国管辖。
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**④ 政变或全面入侵**：Dylan 押注**政治性动荡**多于军事入侵。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./taiwan-scenarios.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 最有意思的"美国立场"：希望 KMT 赢

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### Dylan 的 galaxy brain 观察

> "The like kind of galaxy brain thing for an American to want is for actually the Taiwanese government, the pro-US party, to lose."

对美国人来说，最反直觉的最优解是**支持 KMT 赢**——因为这样中国被安抚，同时……

</div>

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 卡点：TSMC 的美元系统与设备依赖

即使 KMT 上台，**TSMC 仍然依赖美国银行体系与设备供应链**。任何出口管制照样有效。

<div class="text-xs opacity-70 mt-2">
"the way American export restrictions are upheld is that Taiwan utilizes American banking systems, American equipment industries."
</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
结果：中国政治上被安抚 + 美国依然拿得到芯片 + 中国依然拿不到最先进的芯片。**对美国来说是三赢。**
</div>

---

# 出口管制辩论：两派各执一词

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded border-2 border-blue-300 bg-blue-50">

### Nvidia / David Sacks 派

**卖芯片，卡模型。**

让中国留在美国生态里——用美国的芯片、美国的平台、美国的人才。

<div class="text-xs opacity-70 mt-2">
"we should not let them have the models, but we should let them have the chips and everything else"
</div>

</div>

<div class="p-4 rounded border-2 border-red-300 bg-red-50">

### Dario / Anthropic 派

**当前管制还不够。**

只要中国有芯片，他们就能自己训模型、追上美国。

<div class="text-xs opacity-70 mt-2">
"current regime does not have the US leading in AI by enough ... it would be disastrous if they are"
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Dylan 自己**："I could steal man any of the arguments." —— 他两边都能替对方讲清楚，因为**每一种选择都在打开另一个风险**：更松→追不上；更紧→逼台海冲突，或赶跑美国实验室里的华人研究员。

</div>

---

# 华人研究员：一个不能忽略的变量

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dylan 的数字估计

<div class="text-4xl font-bold text-blue-600 my-2">1/3 – 1/2</div>

美国前沿实验室里的研究员**至少三分之一到一半是华人**。

<div class="text-xs opacity-70 mt-1">
"like half or at least a third of researchers at labs are Chinese"
</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一个信号案例

**Shunyu 离开了 Anthropic**——"one of the top researchers"。

<div class="text-xs opacity-70 mt-1">
"one of the top researchers Shunyu also left because of that ... he left one of the top labs."
</div>

如果这样的人开始成规模流失，"it'd be a travesty."

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

**Dylan 的克制**：他不断说"there's certainly some level of control that needs to be had"，但**"the question is where does that control start and stop."** 强硬派的立场必须付出人才代价——这是最容易被政策辩论忽略的一项。

</div>

---

# 中国真的还落后很多吗？

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 rounded">

"You look at like **Kimi K2.5** agent swarms and it's like, well, this is like not worse than Codex by a marginal amount ... but it's like not worse than Codex by a large amount."

</div>

<div class="mt-4 text-sm opacity-70">
Dylan 原话对 Kimi K2.5 vs Codex 的判断——**差距不是数量级，而是几个百分点**。
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">
<div class="font-bold">芯片</div>
<div class="text-xs opacity-70 mt-1">中国 " has effectively great access " —— 通过租、走私、被批准的品类</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">
<div class="font-bold">模型</div>
<div class="text-xs opacity-70 mt-1">Kimi K2.5、DeepSeek、Qwen —— 与前沿差距在缩小</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-center">
<div class="font-bold">供应链</div>
<div class="text-xs opacity-70 mt-1">"if you just look at China itself" —— 半导体垂直供应链最完整</div>
</div>

</div>

---

# "你只是让我看你没看到的鲸鱼"

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"people were like 'oh, who expected this capex?' and then I was like, well **we did** ... and then someone replies '**the whale watcher told you that you're going to see whales. Wow, surprising**.'"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### SemiAnalysis 的自嘲

"you know, obviously I'm the whale watcher here." Dylan 承认：**他就是搞这个的**，看到大额资本开支来是本职工作。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 但市场还在震惊

尽管信号早就摆在那里，Google $180B / Amazon $200B 的 capex 一公布，股价还是跌了近 10%。**"They see the light at the end of the tunnel."**

</div>

</div>

---

# AI 采用进入 escape velocity

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### GitHub 上的 Claude Code 数据

从 **2%** 上升到 **4%** ——**发生在一个月内**（January）。

<div class="text-xs opacity-70 mt-2">
"just in January. It went from 2% of commits on GitHub to 4% of GitHub commits were done by cloud code."
</div>

<div class="mt-3 text-sm">
而这只是 Claude Code 一家。加上 Codex、Cognition/Devon、Copilot——**"we're probably at 10% or so of total code is being committed or written by AI, if not more."**
</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-5">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-center">
<div class="text-3xl font-bold text-green-600">2%</div>
<div class="text-xs opacity-70">2025 起点</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-center">
<div class="text-3xl font-bold text-yellow-600">4%</div>
<div class="text-xs opacity-70">一个月后</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-center">
<div class="text-3xl font-bold text-red-600">~10%</div>
<div class="text-xs opacity-70">全部工具估算</div>
</div>

</div>

---

# Anthropic 一个月加 $2-3B 收入

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 收入曲线

之前"few hundred million a month"，现在**"$2 to $3 billion of revenue a month"**——不到一年就翻十倍量级。

<div class="text-xs opacity-70 mt-2">
"anthropics you know adding two three billion of revenue a month now versus they were just adding a few hundred million of revenue a month earlier"
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 算术反推

假设毛利 **40%**，那 Anthropic **一个月新增 ~$1.5B 的 compute** 支出。

<div class="text-xs opacity-70 mt-2">
"if anthropic added two and a half billion of revenue and their gross margin is 40%, they added like $1.5 billion of compute in one month."
</div>

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这条曲线外推

**"extrapolate that line out a little bit"** —— 未来这类头部实验室**每年需要几百亿到上千亿美元级别的算力**。所以 hyperscalers 疯狂 capex 不是幻觉。

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
参照系：**全球软件工程师工资 ≈ $2 trillion**。哪怕吃掉几个百分点，就是 hyperscaler 十年翻倍级的增量。
</div>

---
layout: two-cols
---

# Hyperscaler capex：4× 增长

**这一年**（Dylan 录制时的最新公告）：

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Google** — $180B capex
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**Amazon** — $200B capex
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
"much higher than almost anyone predicted"
</div>

</div>

<div class="mt-4 text-sm opacity-80">
"this is, you know, 4x what they were doing just not too long ago."
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
市场反应：Amazon 公布后**"the stock went down like 10%"**。市场恨这个数字，但公司恨不接单更甚。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./capex-jump.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 为什么每家 hyperscaler 都必须继续下注

Dylan 直接给出了 game theory 命名：

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Pascal's wager, but for AI

> "if I don't spend like crazy and others do, I lose ... if I don't believe in God, right? **digital god coming** ... and others do and it happens then I'm a loser."

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
不需要相信 AGI 会到，**只要担心别人相信并且赌对了**，你就必须一起赌。
</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"the only solution is I have to spend more and more ... to keep up in the race."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pascal-wager.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 从利润机器到烧钱机器

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 曾经最赚钱的公司群

Meta（广告）、Google（搜索）、Amazon（AWS + 电商）、Microsoft（Windows + Office + Azure）——**"the most profitable companies to ever exist in human history."**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 突然放弃利润

> "we don't care about profit anymore. We're just **building pixie dust** ... We're building **digital god**."

Dylan 预测：**"there's no reason why Google will have any profit in '27 at all."**

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Meta 已经开始加杠杆

Louisiana 那个最大的 AI cluster—— Meta 为它**已经借了约 $40B 的债**。Google 和 Amazon 现在没借，但"they will."

<div class="text-xs opacity-70 mt-2">
"they've already started taking some debt on to build their data centers ... they're taking like $40 billion of debt on for that."
</div>

</div>

---

# 两个平行的 AI 世界

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-5 rounded border-2 border-blue-300 bg-blue-50">

### SF 的现实

"if you told we put out some research 'hey 4% of commits on GitHub are cloud code' and everyone at SF is like **'that's too low, it's like 100% of mine'**."

<div class="text-xs opacity-70 mt-2">
他们看到的是：模型加速、收入爆炸、日常工具已经无 AI 不欢。
</div>

</div>

<div class="p-5 rounded border-2 border-purple-300 bg-purple-50">

### 纽约 / 伦敦 / 香港 / 新加坡的现实

"they're going to see the exact opposite ... the most profitable companies ever are **destroying their business model** to build capacity in something that maybe doesn't have returns."

<div class="text-xs opacity-70 mt-2">
金融资本看到的是：利润消失、债务上升、回报未知。
</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
**Dylan 的推论**："we live in a bubble"——不是估值意义上的泡沫，而是 SF 的**信息与体验孤岛**。这个孤岛的乐观，是全球其他金融中心的**恐慌来源**。
</div>

---

# "The general public absolutely hates AI"

<div class="mt-6 p-6 text-lg italic border-l-4 border-red-500 bg-red-50 rounded">

"I think the biggest risk is actually just like **the general public hates AI**. If you go literally anywhere, the general public absolutely hates AI so much."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 具体的两个人群

- **艺术家**：讨厌 AI 学习/生成他们的作品
- **rural America**：认为 AI "taking all the water"——Dylan 直接叫这些是 "completely nonsense arguments"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 为什么这是最大风险

Dylan 不担心 doomer 派、也不担心 alignment。他担心的是**政治**：普通选民不理解也不想理解，只想惩罚 AI。

</div>

</div>

---

# 失业浪潮开始变得可见

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 应届开发者

**"shitloads of software developers just out of school who can't get jobs."**

第一个可见受影响的白领群体。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 200 万司机

Tesla robo-taxi、Zoox 开始部署——**"2 million people who drive cars for a living"** 是下一波。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 劳动份额下降

资本占经济产出比重持续上升，普通人几十年没享受到 GDP 增速——AI 只会**加速这个趋势**。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Dylan 的连锁推理**：
GDP 看起来还不错 → 但普通人没分到 → AI 反弹汇入政治 →
"any party that wants to win should just become **the anti-AI party**."

</div>

---

# "Any party that wants to win should just become the anti-AI party"

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 rounded">

"any party that wants to win should just become the anti-AI party. Because **life as we know it is changing**."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 时间窗

Dylan 觉得这个议题会成为**下一届大选**、乃至**中期选举**的头号按钮。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 双重挤压

- SF 看到的是繁荣与生产力
- 华尔街看到的是利润消失
- 街上的人看到的是失业

**三个视角互相无法说服。**

</div>

</div>

---

# Nvidia 的宿命：**Only the paranoid survive**

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Jensen 承接 Andy Grove 的遗产

> "Only the paranoid survive."

Dylan：**"Jensen Huang is one of the most paranoid people in the industry."**

<div class="text-xs opacity-70 mt-2">
他把这种偏执视为 Nvidia 最能长期保留的 Silicon Valley 精神。
</div>

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 结构性劣势

Google、Amazon 可以**垂直整合**——芯片、云、模型、用户都在一家。Nvidia 只卖芯片，**margin 由客户垂直整合的边际收益决定**。

<div class="text-xs opacity-70 mt-2">
"he has to be better than everyone by not just like a little bit, by a ton to justify his margins."
</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
**Dylan 的判断**："Nvidia will remain on top this year and next year ... but others will gain some ground." 长期赢家还没出：**"moats are as shallow as they've ever been."**
</div>

---

# Groq 收购：一个偏执反应的活样本

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 事件链

1. **OpenAI 与 Cerebras 达成合作**（Dylan 说"sniffed wind of the OpenAI Cerebras deal"）
2. Jensen 立刻反应，**去收购 Groq**
3. 原因不是他早就相信 Groq 的方向，而是"OpenAI 试图用 Cerebras，所以我要买 Groq"

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Dylan 的解读

> "the moment he sniffs anything, he changes course and tune, updates his priors."

**"That's like really impressive."** —— 把偏执**变成决策速度**，而不是变成防御。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
副产品：Nvidia 现在有了 GPGPU 主线 + Ruben CPX（context / prefill）+ Groq 系（低延迟）——**"every single aspect or type of chip possible now within his company."**
</div>

---
layout: two-cols
---

# 炒饭理论：没有单一芯片能通吃

Nvidia 过去只做一种东西——最好的 GPGPU（A100 → H100 → B200），one-size-fits-all。

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 从 Rubin 开始转向异构

> "much like this fried rice, right? **There's no one individual ingredient that shines above all** ... you've kind of got to have a little bit of everything."

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
**主线 GPU** — 训练与通用推理
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
**Ruben CPX** — prefill、视频、图像生成
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
**Groq 系** — 低延迟推理
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nvidia-heterogeneity.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 瓶颈一直在搬家

Dylan 按年拆开：

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
**2023** — CoWoS（chip-on-wafer-on-substrate）拉不起来
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
**24-25** — 数据中心变成短板
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
**25-26** — 电力，尤其是"dual combined cycle"这类反应炉
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
**26-28** — **又回到晶圆厂**
</div>

</div>

<div class="mt-4 text-xs opacity-70">
"in 2023 it was definitely all related to chips ... as we step forward to 24, 25, it started to become data centers. Energy is a bigger deal in 25 26."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bottleneck-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Elon 打破规矩，然后所有人跟上

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 传统电力路径的死胡同

只有 **3 家公司**做 dual combined-cycle reactor——买不到就没电，很多项目卡在这里。

</div>

<div class="mt-3 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### Elon 的做法

> "Elon was the first one to sort of say ... let me just put power generation on site with **low-quality mobile turbines** ... **industrial gas engines, reciprocating engines**."

**他直接绕过传统电网**：现场装工业燃气/柴油**往复式发动机**做数据中心供电。

</div>

<div class="mt-3 p-5 bg-green-50 border-l-4 border-green-500 rounded">

### 产业迅速跟上

一旦"什么都能算 power source"变成常识，供应商池扩大到几十家（任何造柴油机的公司都能做），行业**反应速度变快了**，电力不再是最卡的一环。

</div>

---

# 但晶圆厂的墙推不动

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Fab 是最难的建筑

**"the buildings that chips are made in are the most complicated buildings people make"**

- 多年才能建成
- 化学品、precursor 走线复杂
- 单台工具"hundreds of millions of dollars"
- 全球**没人建够**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 后果：连 Google 都要买 GPU

- **2026** — Google 想多买 TPU，**"they can't ramp production fast enough"**
- **2027** — 同样情况，还是要转向 GPU
- 半导体产能不够，**"across the entire supply chain"**

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

> "that's going to persist through the end of the decade or until AI sort of slows down."

**Dylan 的时间尺度**：这堵墙至少到 2029-2030。是不是泡沫，很大程度取决于这些晶圆厂多快建起来。

</div>

---

# "No one has the destiny to win"

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 rounded">

"no one has the right to win. **No one has a destiny to win.** Things are moving so fast, whoever innovates the hardest will win."

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 数字大到淹没护城河

**"the size of the numbers being thrown around now — hundreds of billions of dollars for each individual major hyperscaler"**——大到任何一家公司都可以直接买人才、买产能。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Moats 从未如此浅

**"moats are as shallow as they've ever been."**

胜负不再由资产存量决定，而由**下一年的执行速度**决定。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期访谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"if I don't spend like crazy and others do, I lose ... digital god coming, and others do and it happens, then I'm a loser."
<div class="text-xs opacity-60 mt-1 not-italic">— Hyperscaler 的 Pascal's wager</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"we don't care about profit anymore. We're just building pixie dust ... We're building digital god."
<div class="text-xs opacity-60 mt-1 not-italic">— 对超大规模公司放弃利润的描述</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"the general public absolutely hates AI so much."
<div class="text-xs opacity-60 mt-1 not-italic">— 他眼里 AI 最大的**非技术**风险</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"any party that wants to win should just become the anti-AI party."
<div class="text-xs opacity-60 mt-1 not-italic">— 下一届选举的政治预测</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"the whale watcher told you that you're going to see whales. Wow, surprising."
<div class="text-xs opacity-60 mt-1 not-italic">— 对市场"没预料到" capex 之大的自嘲</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"much like this fried rice, there's no one individual ingredient that shines above all."
<div class="text-xs opacity-60 mt-1 not-italic">— Nvidia 转向异构芯片的类比</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"no one has the destiny to win ... moats are as shallow as they've ever been."
<div class="text-xs opacity-60 mt-1 not-italic">— 大玩家格局的总判断</div>
</div>

</div>

---
layout: end
---

# "I promise. I swear to God, if Uncle Roger finds this video, I'm going to cry."

<div class="mt-8 text-sm opacity-70">
Dylan Patel · SemiAnalysis · In-Context Cooking
</div>
