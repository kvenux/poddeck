---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Tony Fadell: How to build real taste (and why AI makes it more valuable)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Build, fix, fix again

### Tony Fadell · iPod / iPhone / Nest

<div class="mt-6 text-sm opacity-70">
Lenny's Podcast — with Lenny Rachitsky
</div>

<div class="mt-12 text-xs opacity-50">
打造过 iPod、iPhone、Nest thermostat 的产品教父，聊"opinion-based decisions"、三代产品法则、为什么AI让真正的"taste"反而更值钱。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Opinion vs Data
做1.0的时候没数据可用——必须有一两个taste maker来拍板。"benevolent dictatorship"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 三代产品法则
"Make the product, fix the product, then you fix the business."  iPod、iPhone、Nest，全都走了这条路。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### iPod 救了 Apple
"如果iPod不能配Windows，它就不是$349，是$3,000。"——Tony怎么硬扛Steve、把iPod做成Windows版本的故事。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Press release first
"working backwards听起来倒着的。其实是 insane way of working。"为什么先写发布稿才是正常做法。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### AI 让 taste 更值钱
泄露的Claude main loop"让真正的工程师反胃"。Fast software vs luxury software。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 下一个iPhone
不是没有屏幕，而是把输入层级翻过来：voice先，keyboard次之，tap/swipe放最后。

</div>

</div>

---

# Tony 的产品履历

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### General Magic (1990s)
"我们做的iPhone早了15年。"

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### iPod (2001)
"1000 songs in your pocket."  Apple那时候快破产了。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### iPhone (2007)
跟Steve头对头吵 keyboard 该硬件还是软件——最热的争论，拖最长。

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### Nest (2010)
"我们没法在2011年管它叫AI thermostat，人会吓疯。"

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### Build (book)
作者；现在投deep tech——Symbi Robotics、Orianis、Great Parrot等。

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30">

### MIT Morning Academy
首任 designer in residence；带学生做customer journey。

</div>

</div>

---

# 开场就是一场争论：iPhone要不要硬键盘

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"It was the most heated conversation and it dragged out the longest."

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-3 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 一派的逻辑
BlackBerry的用户是loyal、passionate的——直接去争这块市场。

</div>

<div class="p-3 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 另一派的逻辑
"只有1%–2%的手机用户用过BlackBerry。那剩下98%的人想要什么？"

</div>

</div>

<div class="mt-6 text-sm opacity-70">
Tony花了几个月时间测试两种键盘的"how fast / how many errors"——后来说服了自己 virtual keyboard "good enough"。但很多人不动摇。
</div>

---

# Steve 怎么破局：一个 opinion 拍板

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"Steve said, 'We are going this way.' ... 'If you're not going to get on board, get out of this room and you can go work on another project, but you're not going to work on this.'"

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 这就是 Tony 在书里的概念
"data versus opinion-based decision."  数据两边都有道理时——必须有人来选。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 谁赢
"guess who wins at the end of the day? Steve Jobs opinion does."

</div>

</div>

---
layout: two-cols
---

# 1.0产品只能靠opinion

做新品类时没有analogues可参考——

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"If most of your decisions are going to be opinion-based decisions for a 1.0, you have to have one or two or a very very small set of people who are charged with making the opinion-based decisions."
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"You have to have, you know, for lack of a better word, **taste makers**."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"This is a **benevolent dictatorship**. ... we don't know what we don't know until we ship it."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./opinion-vs-data.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么数据驱动救不了你

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 把决策外包给数据的人
"covering their ass with data and not really doing the hard work of saying I'm going to make this decision."

请consultants做user study——但他们不在客户的full context里。

</div>

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Tony 的标准
"yes I might be wrong or we as the opinion-based decision makers are wrong and we will correct it later and we'll take the heat for that."

愿意挨打——这才是真正的产品负责人。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic">

**作者概括**: B2C比B2B更难，因为消费者要看到full thing（产品+营销+渠道）才能形成意见。1.0之前你拿不到真反馈。

</div>

---

# Micromanagement ≠ 管所有事

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"When I was early on my career, I thought everything mattered and I drove everybody nuts, drove myself nuts."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 该 micromanage 的
- 那少数对客户至关重要的细节
- 制造/成本的关键节点
- 长期愿景的方向
- 系统级 trade-off（一处改、十处动）
- 危机救火

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 该放手的
- 操作执行（不是决策）
- 不影响客户感知的实现细节
- 团队能独立判断的领域

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

"Micromanage the **decision**, not necessarily the operations of doing it."

</div>

---
layout: two-cols
---

# Tony的"找idea"公式

每次新产品都是同一道两步公式：

<div class="mt-3 space-y-2 text-xs">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

### 1. 从pain开始
"I always start from pain."  老问题、习以为常的——人们已经接受了的痛苦。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### 2. 找刚成熟的新tech
"new technologies just coming to light"——凑齐了就能redefine空间。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

### 3. 不只是产品
"think about the full thing you're trying to build, not just the one piece."  iPod+iTunes+Music Store。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pain-plus-tech.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Nest是怎么被发明出来的

老的pain：50%电费在 heating/cooling，但programmable thermostat的界面像在编程ECR。

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Pain
能耗、丑界面、没人会用 programming。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### New tech
AI能学你的作息——什么时候在家，什么时候不在。

</div>

<div class="p-4 rounded bg-green-500 border-l-4 border-green-700 text-white">

### 疯狂的opinion
卖 **$249**——比市面贵5–6倍——但一年省 $800–$1,200。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"that was the crazy opinion-based decision."

</div>

<div class="mt-4 text-sm opacity-70">
还重新设计了 install（不再走第三方安装工）和销售渠道（不在Best Buy）——整个系统都改了，才是真Nest。
</div>

---

# Why-now 的真正含义

iPhone不是单点技术，是一堆技术刚好凑齐——

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### iPod (2001)
portable mass storage + lithium polymer + ARM 低功耗 + 数字音乐MP3

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### iPhone (2007)
multi-touch + Wi-Fi everywhere + 3G就要来了 + 数字相机 + YouTube

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Nest (2011)
AI learning + 工业设计水平 + 触屏低功耗 + 物联网刚萌芽

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

"you can see where all these technologies were just coming to light."

</div>

<div class="mt-4 text-sm opacity-70">
BlackBerry为什么不行？"It was really just a texting machine and nothing else."——它没踩到这个技术汇聚点。
</div>

---
layout: two-cols
---

# 三代产品法则

iPod前两代只卖给Mac geek——"less than 1% of the market"。

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

**Gen 1**: Make the product. 死忠用户。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

**Gen 2**: Fix the product. 把功能调对。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

**Gen 3**: Fix the business. 利润、规模、可靠性。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"You make the product, you fix the product, then you fix the business. ... I've never seen anyone get it all right the first time."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-generations.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# iPod 救了 Apple——但靠的是Tony硬扛

第一、二代iPod只能配Mac。Steve的态度是——

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"Steve said, 'Over my dead body, no way. This is going to help us sell more Macs.'"

</div>

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

Tony 反驳: "if we don't have Windows connectivity, the iPod doesn't cost $349. It costs $3,000. Because you got to buy a Mac and you got to move all your digital life over to it."

</div>

<div class="mt-6 text-sm opacity-70">
后台一直有skunk works项目偷偷在做Windows版本。第三代iPod上线Windows + iTunes Music Store——才真正起飞。
</div>

---

# 那时候Apple有多悬

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### Tony 的话
"There would have probably been no Apple because it was close to bankruptcy."

"Most people don't know how on the ropes Apple was back in **2001**."

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 因果链
没iPod → 没现金 → 没iPhone → 没今天的Apple

并且当时**no Apple retail**——卖iPod的渠道也是临时凑出来的。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm italic">

"once they try the brand, they go, 'Oh, that's pretty interesting. Maybe I should try other products from this company and give them a shot.' Because that was just such a sublime experience."

</div>

---

# Nest 在 Google 是 stepchild

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 italic">

"the whole organization was a **stepchild** for whatever reason. ... probably a business mismatch."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### Nest Protect 烟雾报警器
"That was one of the toughest products our team and Nest and other people have ever made."  Tony说停产让他和团队"stab me in the heart"。

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### 错过的未来
"if Nest was around and alive today like it was, it would have been one of the centerpieces of what you could do because **AI needs context**."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

**作者概括**: 一个有传感器、知道你在家不在家、谁在哪个房间的家居层——本来可以是 Google AI assistant 最自然的落地形态。

</div>

---
layout: two-cols
---

# Tony 最爱的一个细节

Airbnb 的smoke alarm在响之前——

<div class="mt-4 p-5 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-30 rounded">

"I'm about to make a loud noise."

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

"You don't get PTSD every time because you know when a smoke alarm go off, you're like, 'Okay, everyone calm. We're going to do this now.'"

</div>

<div class="mt-4 text-sm opacity-70">
"There was a lot of love and care poured in that thing."
</div>

::right::

<div class="flex flex-col justify-center items-center h-full pl-4 text-center">

<div class="text-2xl italic opacity-80 leading-relaxed">
"thank you for telling me<br/>that it's going to get loud."
</div>

<div class="mt-10 text-sm opacity-60 max-w-xs">
最好的产品体验经常藏在<br/>"软化坏体验"这种细节里。
</div>

<div class="mt-6 text-xs opacity-40">
— Tony 在podcast里念念不忘的小功能
</div>

</div>

---

# 营销不是后置工序——它就是产品思考

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"if you are already thinking about the marketing you're already going to start thinking about the product."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 错误的顺序
做完产品 → 扔给marketing → 想怎么卖

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Tony的顺序
"the customer only sees what they see through the lens of marketing and sales."  你要先站在他们能看到的视角里。

</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 text-sm italic">

"too many times we just say, 'Oh, if we just make the perfect product.' No, you have to put your product in their context and make the visuals and the words sing to them."

</div>

---

# Press release first

Amazon famous 的方法——Tony更进一步：

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded">

"you should really **make the press release before you more or less start the project**."

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 italic">

关于"working backwards"这个说法——

"Would a movie be created that way? ... is that really working backwards? It sounds like it's backwards. ... It's actually no, that's actually **insane**. It's not working backwards. It's just an insane way of working."

</div>

<div class="mt-4 text-sm opacity-70">
意思是：先想清楚最终故事再开工，本来就是正常做事的方式——是"technology-led"的开发方式把它弄反了。
</div>

---

# 营销的极端版本：infomercial

Tony在书里没写的一个隐藏招数——

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### "Virus of doubt"
半夜电视购物的cheese grater广告：把现有方案的痛点overexaggerate一遍——你的手被划破、清洗困难。然后show新方案多简单。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 学技巧，去夸张
"look at the techniques that are used, the psychological techniques, the emotional techniques to get there. And then dial it back ... but with truth."

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic">

Steve的版本: "the best marketing just tells the truth."

</div>

<div class="mt-3 text-sm opacity-70">
Tony 卖 Nest thermostat 之前就反复讲这个故事——"do you know how much you spend on your energy bill every year for your heating and cooling?"  先 plant doubt，再给方案。
</div>

---

# 1000 songs in your pocket

<div class="mt-6 p-6 text-3xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-30 rounded text-center">

"A thousand songs in your pocket."

</div>

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Tony 当时听到的反应
"I was like, **that's genius**."

营销团队跟工程/设计是分开的——他们是从外部把这句话端进来的。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 多快做完的iPod
"we were getting this done in 10 months."  实际开发"five to six months"——4月起，10月底就发了。

</div>

</div>

<div class="mt-6 text-sm opacity-70">
对比之下 iPhone 跑了 2.5 年——因为要"bet the farm"，还要 cannibalize iPod。
</div>

---

# 故事，是从Steve身上学的

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20 rounded">

"When I watched Steve, he was **honing the story of the iPhone every day**. ... when you saw him come on stage, it was just cuz he had done it a 100,000 times or at least 10,000 times."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Tech-led 的毛病
"too many times when we're technology-led, we talk about the **what**. We don't talk about the **why**."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Why 在哪
"the why is where the storytelling is because you want to take a journey of why it matters to you."

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

Tony 也从他爸学的——卖 Levi's 的销售员，"sometimes was convincing them not to buy something because that wasn't the best product they had."  讲真话，建立长期信任。

</div>

---

# 现在AI时代——产品判断更值钱

Tony不是那种"AI take all jobs"派。他的论点更细：

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"if you are not aware of each of those functions even in AI world ... they are very clear definitions of certain points of view for the customer and you have to consider them."

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Marketing 视角
没有真正的marketing人，prompt写不出对客户的"context"。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Architect 视角
没有真architect，AI产出的就是"crusty foundation"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 各种 expert
"if you don't have those different mixture of experts around the code structuring it ... you don't know what's going on."

</div>

</div>

---
layout: two-cols
---

# Claude 代码泄露的争议

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 italic text-xs">

"Dario was saying ... 90 to 100% of all our code's written by Claude. ... and then the code leaks ... anybody who looked at the code who's a real software architect and engineer **threw up**."

</div>

<div class="mt-2 p-3 bg-orange-50 border-l-4 border-orange-500 text-xs">

"This stuff is brittle. ... should be layered in 12 or 15 different sub-functions. This is the **main loop** of Anthropic's Claude."

</div>

<div class="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs italic">

"You're building on a really **crusty foundation** ... short-term gain for very very long-term loss."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./luxury-vs-fast.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Luxury software——Tony点名的例子

<div class="mt-6 p-6 text-2xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-30 rounded">

"that's to me that's **luxury software**."

</div>

<div class="mt-4 text-sm opacity-70 text-center">
他在说哪个app？  →  Flighty（航班信息app）
</div>

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Fast fashion 软件
H&M级——"doesn't last more than one washing or one season."  Vibe-code能做 v2 of Flighty，但做不出原版。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Luxury 软件
"crafted. It's handcrafted."  "you can feel it ... there has been that level of care and craft to it."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">

正确用法: "**Architect** it in and then work on the subsegments below it ... Do more prototypes. Do more of those things to help you get that informed gut."

</div>

---

# 下一个iPhone长什么样

Tony 说一句"sorry people, we'll still need a display"——

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 短期
"It's going to look much much like this."  app interface 一时半会儿走不掉——"we don't trust it yet."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 长期
还是会有display——可能 foldable、可以收起来——但**输入优先级会翻过来**。

</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 italic">

"how you going to look at a map? if you want to look at a map ... you're going to listen ... turn left in 200 feet, turn left in 100 feet, you're like 'shut up I can't hear you anymore.' I just want to glance over."

</div>

<div class="mt-3 text-sm opacity-70">
对Humane的判断：projection就是"a screen at the end of the day. You got to still project it onto something."
</div>

---
layout: two-cols
---

# 把输入层级翻过来

iPhone 的顺序是：

1. tap + swipe → 2. keyboard → 3. voice

但voice一直只是"crutch"——是兜底的，不是主角。

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"We need to flip it. We need to absolutely flip it. And we have to say ... voice as the number one primary feature."

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 text-sm">

"voice has never been able to deliver" —— 这就是为什么Siri/Alexa一直没能成为主入口。

</div>

<div class="mt-3 text-sm opacity-70">
但这要"intelligence behind it with memory and everything else"——LLM时代才真正可能。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flip-input.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Hardware 又变 cool 了

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"I was building hardware when it wasn't in vogue in 1995 and 96. ... and then the iPod comes ... and then it was all software mobile stuff again ... we're seeing with AI we got to have AI plus all the data centers and edge compute to make that work."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 现在 VC 在说什么
"we're only funding companies that have atoms in their business plan with software. I'm like, **duh. like where have you guys been?**"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Tony 一直在做的
Symbi Robotics（零售盘点机器人）、Great Parrot（AI回收分拣）、AI+textiles质检、Orianis（AI药物设计10年）。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"everyone wants to chase their tail and chase whatever the hottest thing is. When it's already hot, **it's already too late to be in it**."

</div>

---

# Tony 现在投什么

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"I invest in the deep technologies that are going to unseat the incumbents because it's going to change the market or the product in such a dramatic way that customers will choose this."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不是
feature竞争、营销竞争——"we're fundamentally a different product."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 是
能成为enabling tech的早期、低估值的硬科技。

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-sm italic">

"today if you don't have a $5 billion ... raise you're not anything. ... that doesn't work from a venture perspective. ... you can't invest in things when when the valuations are already nine digits or 10 digits."

</div>

---

# 做产品的人，要管伦理

Apple 当年决定 iTunes 不上 porn 的故事——

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"Steve was like, '**What? Is that the kind of world you want your kids to grow up in?**' ... it was very clear. It was shut down."

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

Tony 的态度："we need leaders like that. ... as opposed to 'I'm going to make a huge service for everyone and they're all sex chat bots for everyone.'"

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"we're turning personal connection into a product with AI chat bots ... I'm going to have a perfect interaction with this thing because the world is so messy. ... we're **losing humanity** with that and we're just for gain."

</div>

---

# iPhone 是个冰箱

<div class="mt-6 p-6 text-2xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 rounded text-center">

"iPhone's just a refrigerator. You can put in junk food or you can put in good food."

</div>

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 类比
"we have lots of junk food and we have an obese nation ... because of all the junk food."  数字食物现在没有 nutrition label、没有警告、没有监管。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 该做的
"platform companies like Google and Apple could be doing a lot more around digital consumption tools and information to help people make better decisions."

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

"if you make your customers unhealthy, you're not going to have customers."

</div>

---

# 结尾的告诫

<div class="mt-12 p-8 text-3xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-30 rounded text-center">

"Don't allow — don't surrender to the machine.<br/>
We can use the machines, but **don't cognitively surrender**."

</div>

<div class="mt-10 text-base opacity-70 text-center">
"Make better stuff than myself or any of the teams that we back can make<br/>
because we do have better tools now. So, please do."
</div>

<div class="mt-8 text-sm opacity-50 text-center">
— Tony Fadell, 这期 podcast 收尾的最后一句话
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得反复回味的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"This is a benevolent dictatorship. ... we don't know what we don't know until we ship it."
<div class="text-xs opacity-60 mt-1 not-italic">— 为什么1.0只能靠opinion-based decisions</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"You make the product, you fix the product, then you fix the business."
<div class="text-xs opacity-60 mt-1 not-italic">— 三代产品法则（iPod / iPhone / Nest全都走过）</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"If we don't have Windows connectivity, the iPod doesn't cost $349. It costs $3,000."
<div class="text-xs opacity-60 mt-1 not-italic">— Tony 反驳 Steve "over my dead body"</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"It's actually no, that's actually insane. It's not working backwards. It's just an insane way of working."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于"working backwards"这个说法本身</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"You're building on a really crusty foundation. ... short-term gain for very very long-term loss."
<div class="text-xs opacity-60 mt-1 not-italic">— 论AI写的代码（点名Claude main loop泄露）</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Too many times when we're technology-led, we talk about the what. We don't talk about the why."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于storytelling为什么是产品的核心</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Is that the kind of world you want your kids to grow up in?"
<div class="text-xs opacity-60 mt-1 not-italic">— Steve否决iTunes上porn的那句话，Tony拿来对照今天的AI公司</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"When it's already hot, it's already too late to be in it."
<div class="text-xs opacity-60 mt-1 not-italic">— 投资观/产品观</div>
</div>

</div>

---
layout: end
---

# Don't cognitively surrender.

<div class="mt-8 text-base opacity-70 text-center italic">
"Make better stuff."
</div>

<div class="mt-6 text-xs opacity-50 text-center">
Tony Fadell · Lenny's Podcast
</div>
