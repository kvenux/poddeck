---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The hidden pattern behind successful products — Mark Pincus'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 成功产品背后的隐藏模式

### Mark Pincus

<div class="mt-6 text-sm opacity-70">
Lenny's Podcast · with Lenny Rachitsky
</div>

<div class="mt-10 text-xs opacity-50">
Zynga 创始人 · Farmville · Words with Friends · Poker<br/>
新书《Life at the Speed of Play》
</div>

<div class="mt-8 text-xs opacity-40 italic">
"If you're truly ambitious, burn your resume."
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一个被低估的造爆款者
他和他的团队在 Zynga 创造了 10 次大游戏发布中 8 次大爆款。社交产品做了一打，绝大多数都跑出来了。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Proven · Better · New
一个简单到几乎"反创业者本能"的产品框架——但你回头看 iPhone、Slack、Words with Friends，全是这个套路。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Kill hope before hope kills you
他对 MVP 的定义是有毒的。真正的发布是"collecting winnings"，而不是"making bets"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 反直觉的"少点野心"
越想做大事，越要从小处开始。Tribe 因为太野心失败，Zynga 因为做了个 Facebook 上的 poker app 成功。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 鸡尾酒派对方法论
他对社交产品的核心比喻——为什么 GPT/Claude 是个"安静的鸡尾酒派对"，下一个社交霸主在哪里出现。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### CEO 的第一守则：be right
不是执行最猛、不是融资最多、不是管理最佳。是判断对。Zynga 是怎么靠 day-365 retention 和一个叫 ASN 的秘密 metric 长出来的。

</div>

</div>

---

# 核心论点 1：本能对，想法错

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 本能（instincts）

藏在你身体里、肠子里、说不清道不明的"觉得应该是这样"。

<div class="mt-3 text-3xl font-bold text-green-700">95% 对</div>

<div class="mt-2 text-xs opacity-70">
"成年人想玩游戏"<br/>
"互联网想要社交"<br/>
"我朋友打字慢、慢慢下棋也行"
</div>

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 想法（ideas）

你在本能之上裹的那层具体方案——一个 PRD、一份产品规格、一个 demo。

<div class="mt-3 text-3xl font-bold text-red-700">75% 错</div>

<div class="mt-2 text-xs opacity-70">
"做个 Facebook 上的 poker app"<br/>
"做一个 3D 元宇宙"<br/>
"做一个 urban tribes 社交网"
</div>

</div>

</div>

<div class="mt-6 p-3 italic text-center text-sm bg-blue-50 border-l-4 border-blue-500 rounded">
"Your instincts are right 95% of the time. Your ideas are wrong 75% of the time, or at best right 25% of the time."
</div>

---
layout: two-cols
---

# 那应该怎么办？

**框架结论：**

把本能从想法里**剥离出来**。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
锁定那个"创新区域"——你身体觉得对的东西。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
围绕它**试很多个想法**，而不是死磕一个。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
失败要为"正确的理由"失败——而不是因为糟糕的 onboarding 流程被埋没。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./instincts-vs-ideas.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Proven · Better · New：核心框架

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1. PROVEN（已被验证）

抄。**精确地抄。**

不是抄一个"概念上类似"的产品。是抄在**同一个平台、同一个受众、同一类体验**上已经被验证好用的细节。

<div class="mt-2 text-xs opacity-70 italic">
"Get your PhD in proven first."
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2. BETTER（更好）

10/10 的现有用户会说 "f*** yeah" 的小改进。

通常很小、很 polish——是 power user 注意到的东西。**你以为的 better 其实是 new。**

<div class="mt-2 text-xs opacity-70 italic">
"Better is usually very small."
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 3. NEW（你的赌注）

那个"包装盒背面"的新点子——让人下载来试一下的理由。

**默认它会失败**。所以你要准备 4 个备选 new idea。

<div class="mt-2 text-xs opacity-70 italic">
"The new is probably not right."
</div>

</div>

</div>

<div class="mt-6 p-3 text-sm bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>作者类比：</strong>这就像一台时光机。它让你回到 2003 年的自己面前说："Dude, you don't even realize how right you are."
</div>

---
layout: two-cols
---

# 这个 stack 长这样

<br/>

底座越宽 = 你越是这个领域的 PhD<br/>
顶尖越窄 = 这是你唯一的赌注

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**iPhone 是个 PBN：**

- Proven：所有已有的手机交互方式
- Better：iPod 的音乐 + Mac 的设计语言
- New：一块 multi-touch 触摸屏（这是 Steve Jobs 在 TED 上看到 MIT 团队演示后**抓住的那一个**）

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./proven-better-new.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 反面教材：Sid Meier 的 Facebook 游戏

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-red-400 bg-red-50">

### 顶级游戏设计师下场了

Sid Meier——业内公认的"游戏设计教父"——把他的 Civilization 搬到了 Facebook。

Zynga 内部所有人都以为：完了，最强对手来了。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### 但 10 分钟后……

Zynga 的 PM 们群发邮件分析："Dead on arrival."

**问题不是游戏设计，是 first-time user experience。**他的 onboarding 流程点击次数太多，Facebook 平台的"proven onboarding pattern"他没照抄。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>核心教训：</strong>Sid Meier 因为不肯"完美 copy proven"——所以他的天才级 game design 永远没机会被任何玩家看到。
</div>

<div class="mt-3 text-xs opacity-60 italic">
"Even Sid Meiers tripped over what were understood by the most junior product managers at Zynga was the best of breed approach to onboarding."
</div>

---

# 道德套利：copy 是一种纪律

<div class="text-sm opacity-70 mb-4">
为什么大多数创业者无法 copy？因为我们从小被教"抄是作弊"。
</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这是 Peter Thiel 意义上的"moral arbitrage"

"你成为创业者，是因为你想做创新者。你的创新之路从 copying 开始——这听起来像一场背叛。"

但正因为大多数人**有 ego**、做不到，机会就留给了那些**没 ego**的人。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### "If you're truly ambitious, burn your resume."

不是为了同行的奖、不是为了赢得彼此尊重。

而是为了**在消费者眼里**赢——为了那个在印第安纳玩 Farmville 的护士。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Mark 的进一步要求：</strong>你要 copy 到她**意识不到**你 copy 了。"消费者的品味也会抗拒纯抄袭。"<br/>
真正的 master craft 是抄得既精确又有 taste——衍生但不显得衍生。
</div>

---

# Craig Newmark 用两年加了"图片"

<div class="text-sm opacity-70 mb-4">
Mark 的邻居、Craigslist 的创始人，"和我的狗 Zynga 比和我更熟"。
</div>

<div class="grid grid-cols-5 gap-3 mt-4 items-center">

<div class="col-span-2 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个简单功能

给 Craigslist 的 listing 加照片。

Mark 问他："这能花你多久？"

Craig：**"已经做了两年了。"**

</div>

<div class="col-span-3 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 因为他知道：你不能改一个用户已经依赖的产品

如果照片放下来挤掉了文字位置怎么办？

如果用户原本是横扫一排 listing 比价格的，现在被照片打断节奏怎么办？

junior PM 会把整个 listing 改成大图片，因为他觉得"更好"。Craig 不会。

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"That's a world-class product maker — because he gets that we feel a sense of ownership of products we rely on every day. We're angry when they change. Even if they change for the better."
</div>

---

# OMG Pop / Draw Something：反向案例

<div class="text-sm opacity-70 mb-4">
两条路：Rovio 做了 45 款全新的游戏才碰上 Angry Birds（wildcat drilling）。OMG Pop 走相反的路。
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 第一阶段（失败）

OMG Pop 做了**一个完全创新的游戏**——从来没人见过，从来没人玩过。

**彻底失败**。公司账上只剩最后一块钱。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 第二阶段（命中）

走投无路、毫无 ego 地饥渴想要一个 hit。

完美 copy 了 Zynga 的 Words with Friends 的回合制系统，做出 **Draw Something**——连续 60 天 App Store 排名第一。Zynga 直接买下了它。

</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>启示：</strong>同一支团队，从"狂野创新"切到"PBN 学生模式"，结果天差地别。<br/>
绝望逼出了 Mark 说的"perfect students of what is already working and viral on mobile"。
</div>

---

# 核心论点 2：野心越大，起点越小

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Mark 在 Tribe 的失败

他看到 LinkedIn 起来了，看到 social networking 机会有多大。

于是他**什么都做**——urban tribes、约会、找室友、招聘列表。多个用例同时进，没有一个聚焦。

"我太野心了，所以我失败了。"

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Zynga 起步：embarrassingly small

41 岁，多次成功创业者，可以做"任何重要事情"。

他做了什么？**一个 Facebook 上的 poker app。**

"人们觉得我没有 dignity。"

但这个 humble 的起点，是它成功的关键。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>悖论："</strong>The more ambitious you are, the more humble you should be — and the smaller a place you should be willing to start."
</div>

<div class="mt-3 text-xs opacity-60">
Mark 把 Tribe 时期的"野心"形容为 100,000 英尺高度；到 Zynga 时降到了 1,000 英尺。
</div>

---

# 别的好例子：Bolt.new、Slack

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Bolt.new (StackBlitz)

> "他们 toiled in obscurity"——在一个 web-based virtual machine 上默默搞了多年，几乎撑不下去。

直到某一天才意识到：把这个 VM 接上 AI coding copilot，他们就有了别人没有的东西。

Mark 说他"cold-emailed the founder"，太佩服了。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Slack

Stuart Butterfield 在做一个**大型 MMO 游戏**——massive multiplayer online，野心很大、很难。

游戏失败后，团队问自己："等等，我们工程师内部用的这个聊天小工具——能不能把它做成产品？"

**那个 humble 的转向，就是 Slack。**

</div>

</div>

<div class="mt-6 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>共同点：</strong>都需要一种"被野心打了的谦逊"。<br/>
看见眼前那个小、薄、看上去不像生意的东西，然后**有勇气 call the ball on it**。
</div>

---

# 核心论点 3：Kill hope before hope kills you

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Hope（希望）

"Confidence without basis."

不是基于体验、不是基于数据、不是基于真实用户反应——是一种祈祷。

"Maybe this next release will do something magical."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Belief（信念）

基于你**亲自看到**的——亲自用产品上瘾、亲眼看着朋友用了之后兴奋、metrics 在涨。

最好的产品大师"不是在下注，是在**收钱**"。Brian Chesky 发布时不是为了试水，是因为他**已经知道这是 hit**。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### "If you're asking whether or not your product is an A, it's not an A."

类比谈恋爱：和对的人在一起，你不会**问**这是不是对的人。你就是知道。<br/>
B+ 的恋爱关系，你才会问。B+ 的产品，你才会希望。

</div>

---
layout: two-cols
---

# MVP 是个有毒的概念

<br/>

<div class="space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**"Viable" 是 hope 的来源。**

最小**可行**——"可行"意味着"它可能能成"。这种语言鼓励你去希望，而不是去验证。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Mark 的对面：MLP（Maximum Launchable Product）**

不是"最少能成的"，是"**最大、最被验证过的**值得发布的"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**关键区分：**

- 推到市场上来**学习**——OK，做得越糙越好
- 推到市场上来**发布**——必须 already know it's a hit

把两件事混起来，就是大多数 startup 死掉的地方。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./belief-vs-hope.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 是一台测试机，不是建造机

<div class="text-sm opacity-70 mb-4">
Mark 对当前一代 AI 创业者最尖锐的判断。
</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 大多数人的用法

用 AI 把"3 年才能做出来的 1 个产品"，缩短成"3 个月做出来的 1 个产品"。

**这是一种"危险的药"**——更便宜地造出一个错的产品，更便宜地相信你的 hope。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Mark 期待的用法

"How are you testing a 100 ideas a day instead of one in three months?"

把 AI 当成 **failure machine / testing machine**——一周测试的想法比你整个行业一年测试的还多。

**Build it wrong before you know it's right.**

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"We should build it completely wrong before we know it's the right product."
</div>

---

# 案例：Farmville 扩展包的 $19 million 实验

<div class="text-sm opacity-70 mb-4">
为什么连"打广告"都可以变成产品测试。
</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50">

### 团队的原计划

"我们有 $10 million 的广告预算，发布前在外面买流量。"

Mark 反问：你已经有 **25-30 million** 人每天在玩 Farmville，为什么去外面打广告？

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Mark 的反建议

直接把 English Countryside 扩展包的不同美术变体**放在游戏棋盘上**——锁着、写"coming soon"。

每个变体测点击率。

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 意外的结果

不仅测出了"哪个营销 message 最有效"，

还**卖出了 $19 million 的"提前两周访问"虚拟钥匙**——你和朋友各一把。

**一次性把"广告 spend"变成了"产品测试 + 营收"。**

</div>

---

# 核心论点 4：Day 365 Retention

<div class="text-sm opacity-70 mb-4">
Zynga 的真正护城河，不是 virality，是 retention。
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Day 1
<div class="text-4xl font-bold text-blue-600 my-2">D1</div>
<div class="text-xs opacity-70">新用户次日还回来吗？</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Day 30
<div class="text-4xl font-bold text-purple-600 my-2">D30</div>
<div class="text-xs opacity-70">一个月后还有人在用吗？</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Day 365
<div class="text-4xl font-bold text-green-700 my-2">D365</div>
<div class="text-xs opacity-70">Zynga 跟踪的——"我不认为今天还有公司跟踪它"</div>

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**反模式：**high D30 + zero D365。

这描述的是**大多数产品**。比如那些 viral-driven 的"sinking speedboat"——drive faster than they're sinking。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**核心信念：**世界上最有价值的公司 statistically 都有最高的 D365 retention。

**你能用早期信号去预测 D365——但你得真的把它当 north star。**

</div>

</div>

---

# Zynga 的秘密 metric：ASN

<div class="text-sm opacity-70 mb-4 italic">
"This is an Easter egg if anyone if this doesn't get cut and anyone's still listening."
</div>

<div class="mt-2 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### ASN = Active Social Network

定义：你和另一位玩家之间的**往返互动**——你走一步、他回一步；你送他礼物、他送你礼物。

这不是"DAU"、不是"sessions"——这是"**双向互动的人际链接数**"。

</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ASN: 0 → 1

下个月还能再见到你的概率：**80%**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ASN: 0 → 4

未来 30 天里能见到你 **22 天**的概率：80%

</div>

</div>

<div class="mt-5 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>为什么有用：</strong>它给了团队一个**可被迭代、可被设计的 leading indicator**——你不用等一年才知道一个 feature 有没有用。
</div>

---
layout: two-cols
---

# 鸡尾酒派对：社交产品方法论

<br/>

**Mark 对"在哪做下一个社交产品"的判断标尺：**

<div class="mt-3 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
找到那个"我们都隐约想去的派对"——还没有变 rowdy 的地方。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**好派对的关键不是闲聊，是 great leads。**

Napster 的 leads 是音乐文件。Friendster 的是约会对象。LinkedIn 的是工作机会。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**今天我们都在 Claude / GPT 上**——但这是个**安静、孤独的鸡尾酒派对**。<br/>
就像 social networking 出现之前的 web。

</div>

</div>

<div class="mt-4 p-3 italic text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded">
"Figure out how to make it rowdy."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cocktail-party.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Latent Demand：很多东西人想要，但还没人做

<div class="text-sm opacity-70 mb-4">
为什么"今天没有"不代表"市场不需要"——往往恰好相反。
</div>

<div class="grid grid-cols-2 gap-5 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 案例：2007 年的游戏

2007 年 Mark 开始做 Zynga 时——视频游戏已经是 **$23 billion** 的生意。

但他自己已经不玩游戏，他认识的人也不玩游戏。"It was not even a top 10 activity on the web."

他相信：**有 latent demand 存在**——成年人想玩，但 entry cost 太高（$60 买一个游戏、得花一晚上配置局域网）。

他做了 **free、3 clicks 就能进**的版本。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 验证

今天游戏行业：**$280 billion**。

而 Mark 觉得**仍然有 latent demand**——"今天我还是不玩游戏，我认识的人也不玩。"

行业是这么大，玩家是这么乏味——意味着下一波增长还在路上。

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"We don't go to the comic book store, but if the comics were in the newspaper, we'd read them." — 关键不是有没有 demand，是 entry cost 有多高。
</div>

---

# Distribution：不是事后，是产品的一部分

<div class="text-sm opacity-70 mb-4">
AI 让"造东西"变便宜了 100 倍——但"被发现"却比以往更难。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 现状的残酷

App Store 上"average new app installs per user per month is **zero**"。

去年发布了 **40,000** 款新游戏。**零款**进了 top 10。零款维持在 top 25 或 top 50。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 这意味着

"You can't launch consumer right now with high confidence."

消费者社交、消费者游戏几乎**不可投资**——但反而是"build 它"的最好时机。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 正确的姿势

Distribution 必须从一开始就**长在产品里**。

不是"build the best mousetrap and they will come"。那是 hope strategy。

prosumer / power user / whale 入口往往是第一道光。

</div>

</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Mark 的下注：</strong>新平台还没出现，但会出现。今天在做的事，"in a year will be 100 times more expensive to try"——因为到时噪音会多 100 倍，分发也会有，但**那时已经晚了**。
</div>

---

# Easter Egg：AI 时代的"agentic 旅行管家"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 为什么没有？

历史上**有过**旅行管家这个职业——但它消亡了。因为佣金太薄，我们也不愿意付足够的钱。

不是没需求——是**经济上不可行**。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 为什么现在可以？

如果 tokens 一年后**几乎免费**（Gary Tan 的判断 Mark 引用），那么"24/7 的免费旅行管家"就成立了。

它知道你的 context，提前帮你 rebook flight，在你的航班失败之前已经帮你解决了。

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Mark 的更深观察

"互联网过去 25 年的增长都靠'让消费者拿到更好的 deal'。**下一波增长可能是'让消费者拿到 amazing service'**——而不是更便宜的东西。"

agentic travel agent 只是第一个例子——你应该能在脑子里列出十几个类似的"以前算不过来账、现在可以算了"的服务。

</div>

---

# Make Everyone a CEO

<div class="text-sm opacity-70 mb-4 italic">
"All my management principles I got to through desperation. I don't like managing people."
</div>

<div class="grid grid-cols-2 gap-5 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 核心问题

"管理的全部内容，就是怎么让别人**在你不在场的时候**做对的事情。"

你不能放弃 CEO 这个角色（否则优先级会乱），但你可以**让更多人都成为 CEO**——给他们一座要攻下的山头，给他们预算、自由度、operating control，然后让他们去自己做。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 谁最适合当 CEO？

"Frustrated expert witnesses"——那些自认为知道正确答案、但在公司层级里说话被忽略的人。

他们身上有**积压了多年的"我要证明我是对的"的能量**。把这种人扶上 CEO 角色，是非常 motivating 的。

Mark 也自认是这种人："I'm a team player as long as I'm running the team."

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>启示：</strong>Brian Armstrong（Coinbase）说的"everyone is an individual contributor, everyone manages a lot of other people"——和 Mark 这个观察是一脉相承的。
</div>

---

# Stay Close to the Metal

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Expert Witness Syndrome

我们 20 岁的时候离 metal 最近——我们在搬数据、写代码、看用户行为。

但我们**离决策最远**。我们被叫到"证人席"，激情澎湃地讲我们认为对的答案，然后被"大人们"打发回座位。**然后他们做了错决定，让我们来善后。**

"这就是很多人成为 founder 的原因。"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### CEO 必须保持在 metal 上

Mark 引述 Steve Jobs **亲自挑选会议室地毯**——这种程度的 pixel-level 微管理。

Discord 的两位 founder 总结："我们意识到，我们把最重要的产品决策——UX——外包给了公司里最没经验的人。我们决定**把它倒过来**。"

founder 应当是"product 的 first and last mile"。

</div>

</div>

<div class="mt-5 p-3 italic text-center bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
"Micromanagement is beautiful. You should micromanage as long as you can."
</div>

---

# 50 人时还在每天 standup 点名

<div class="grid grid-cols-5 gap-4 mt-6 items-stretch">

<div class="col-span-3 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 实际操作

到了 50 个员工的规模，Mark 还**每天开一个 2 小时的 standup**。

桌子上摆一张 spreadsheet。每个人的名字、昨天该做什么、今天要做什么。

一行一行问："你完成了吗？其他人能 verify 完成了吗？OK，今天要做什么？"

</div>

<div class="col-span-2 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 结果

"We were much more effective."

20 年前讲这个事得**道歉**——好像在干一件不光彩的事情。今天 founder mode 流行起来，micromanagement 反倒变成 best practice 了。

</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">

### 原则

"如果你能在那个房间里，就在房间里——假设你是球场上最好的球员。**只有当你实在分身乏术，才下放。**"

所有那些"管理原则"——本质上都是"在你**不在的时候**怎么让大家做对事"的策略。**先把"在场"这件事用到极致。**

</div>

---

# 传 vampire blood：teaching hospital

<div class="text-sm opacity-70 mb-4">
你怎么把那个燃烧的产品热情、那些直觉判断，**传染**给团队？
</div>

<div class="grid grid-cols-2 gap-5 mt-2">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Step 1：开放产品会议

把尽可能多的人**放进你的产品会议房间**里，让他们旁观你做产品决策的过程。

Mark 称之为 **"teaching hospital"** ——他们听你讨论、看你打断、看你拍板。passion 和方法慢慢传开。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Step 2：选一个 tech assistant

从基层捞一个"年轻时的你"——那个 expert witness、那个一点小狂傲的 know-it-all。

让 ta 跟着你 6-12 个月。**做你的 mini-me。**然后再扔到一个大角色上去。

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Andy Jassy 的范例

Mark 提到 Amazon CEO Andy Jassy——他**曾经做过 Bezos 的 tech assistant**。

而且不只他一个：Mark 的说法是 "everyone on the S-team used to be someone who had been the tech assistant to Bezos." 这件非常 non-scalable 的事，**最后会自动 scale**——你免费得到了一整个 senior 团队。

</div>

---

# CEO 的第一守则：be right

<div class="text-xs opacity-70 mb-3 italic">
"That's another one I stole from Bezos."
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

### 如果 CEO 只能做对一件事

**让它是"你判断对了"。** 不是执行猛、不是 inspiring people、不是会管理——这些都是 boat。

"Being in the right body of water matters more than the right boat." 一艘伟大的船在干涸的湖床上哪儿也去不了。

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 如何用这个来招人？

"我找团队成员的时候，**看他们之前对过什么**——that's the best resume."

不是 culture fit、不是 personality fit。是：**你对过事吗？**

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一群"对的"misfits

"我宁愿要一屋子'对过事'的 misfits——那些**聪明、intellectually honest、frustrated expert witnesses**。

他们才是把球射进网的人。"

</div>

</div>

---

# 育儿：在 AI 时代教什么

<div class="text-xs opacity-70 mb-3">
Mark 有 5 个孩子，包括一个有 ADHD + dyslexia 的女儿、一个特殊需求的儿子。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 教 critical thinking，不教 knowledge

"我们走在 mass-produced education 这个一百年周期的尾声。"

"I don't care if you go to college." —— 他 explicitly 这么对女儿说。

教她们**问更好的问题，而不是知道更多答案**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Carmen 的故事

ADHD + dyslexia 的女儿创立了 Comfy Fancy（卫衣品牌），还为神经多样性的中学生做了一个 group 叫 **neurosparkley**。

"把一个本该是 deficit 的东西，做成了一种 connect 别人、帮助别人的方式。"

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

### 上网原则：generative vs consumptive

"我希望他们 **be generative not consumptive**——在网上放出新东西，而不是被动消费内容。Because that's how you're going to get something back."

</div>

---

# 给孩子的"人生哲学"Google Doc

<div class="text-sm opacity-70 mb-4">
Mark 在为大女儿们维护一个 Google Doc——每次他对她们说一句反复出现的话，就把它写下来。
</div>

<div class="space-y-3 mt-2">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 1. Nothing's personal.

"Don't ever take anything personal. If you assume nothing's personal, you're probably right **19 out of 20 times**. And the 20th time, you probably handled it right because of that."

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 2. Don't be a victim.

"The world doesn't happen to you, it's happening around you. We're defined by how we react to the world, not by the events that happen to us."

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 3. Meet kids where they are.

"我们倾向于要么把孩子当孩子说话，要么把他们当大人——两个都不对。在他们的高度上，但 human-to-human 地交流。"

—— 让 5 年级女儿和她朋友学到 8 年级的 daddy math 都没意识到。

</div>

</div>

---

# 为什么还在做：Internet Treasure

<div class="text-sm opacity-70 mb-4">
Mark 解释他为什么 41 岁创立 Zynga、为什么现在 still doing this。
</div>

<div class="mt-2 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 找到自己的 "why" 花了我 30 年

"我直到 41 岁创立 Zynga，才真正把它说出口。"

</div>

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### 我的 why：build an internet treasure

"一个我们记不得'之前的生活'、也想象不出'没有它的生活'的服务。"

Mark 的朋友 Bing Gordon 说：**"One day those treasures will be in the Smithsonian."**

这是 Mark 觉得他做 product maker 最值得的事——他还**没做完那件事**，所以还在搓棍子生火。

</div>

<div class="mt-5 p-3 italic text-sm bg-yellow-50 border-l-4 border-yellow-500 rounded">
"Building digital skyscrapers that the next generation can't believe anyone ever lived without."
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Your instincts are right 95% of the time. Your ideas are wrong 75% of the time."
<div class="text-xs opacity-60 mt-0.5 not-italic">— PBN 框架的内核</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic">
"If you're truly ambitious, burn your resume."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Mark 对 Zynga 产品团队的反复训话</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"It's almost a moral arbitrage."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Peter Thiel 意义上的 copying 优势</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Kill hope before hope kills you."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Belief vs. Hope，关于 MVP 的解药</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"When you have lightning in a bottle, when you have true signal, everything works."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 怎么判断"这是 A 还是 B+"</div>
</div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic">
"Today, we're all hanging out on our Claude on our GPT, but there's no cocktail party. Figure out how to make it rowdy."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 关于 AI 时代的下一个社交产品</div>
</div>

</div>

---
layout: end
---

# "Build something the next generation can't believe anyone ever lived without."

<div class="mt-6 text-sm opacity-60">
Mark Pincus · Life at the Speed of Play
</div>
