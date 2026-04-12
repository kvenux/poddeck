---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Rise of the Professional Vibe Coder'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 职业 Vibe Coder 的崛起

**Lazar Yavanovich** — Lovable 首位官方 Vibe Coding 工程师

<div class="mt-4 text-sm opacity-60">

Lenny's Podcast | 嘉宾：Lazar Yavanovich

</div>

<div class="abs-br m-6 text-xs opacity-30">
PodDeck · 0XNkUdzxiZI
</div>

---

# 为什么这期值得听

<div class="text-sm opacity-60 mb-4">一个从未写过一行代码的人，如何成为全球最快增长 AI 创业公司的全职 vibe coder？他的经验比任何教程都更有说服力。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 全新职业路径
Lovable 首位官方 "Vibe Coding Engineer"——没有技术背景，靠 building in public 被发现并录用。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 专业 Vibe Coding 工作流
从平行构建 5 个项目到 PRD 系统、4x4 调试框架——一套完整的、可复制的生产力方法论。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Clarity > Coding
80% 的时间花在规划和对话上，只有 20% 在执行。AI 时代最稀缺的不是编码能力，而是清晰度和判断力。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 角色大融合
PM、工程师、设计师的边界正在消融。未来属于拥有设计品味和人类情感洞察力的 builder。

</div>

</div>

---

# 认识 Lazar：职业 Vibe Coder

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### 日常工作
用 Lovable 每天将内部和外部产品推向生产环境——从 Shopify 模板到内部 feature adoption matrix，覆盖所有部门。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

### 角色定位
一个"ideas role"——人们有好点子但没有带宽或能力去构建，Lazar 就是让这些想法快速变为现实的人。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Build vs Buy
当设置一个企业级 SaaS 账号需要 1-2 小时时，他选择自己构建——因为用 AI 工具更快。

</div>

</div>

<div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"It's a dream job, right? I get paid to do what I would have done anyways."

</div>

<div class="mt-4 text-sm opacity-70">
Lazar 从 growth 团队起步，现在跨越 go-to-market、企业工具、社区工具——"每个部门都需要一个 Lazar"。
</div>

</div>

</div>

---

# 不懂技术反而是优势

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### "Positively Delusional"
不懂技术的人不知道什么是"不可能的"，所以他们真的去做了。Lazar 的心态：**一切皆有可能，直到被证明不行。**

- 社区有人说 Lovable 不能做 Chrome 扩展？他直接去做——做成了
- 有人觉得不能在 Lovable 里生成视频？社区经理试了——成功了，后来变成了官方功能
- 桌面应用？也有人做出来了

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 技术背景的陷阱
懂技术的人会先解释为什么不行——"it's a React app, it's a different stack"——然后就不去尝试了。

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"People like me don't know that they are not supposed to be building XYZ and that's how we actually are able to build it."

</div>

</div>

</div>

---
layout: two-cols
---

# Clarity > Coding：80/20 法则

<div class="mt-2">

Lazar 的核心发现：**编码不是问题，清晰度才是。**

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 mt-4 text-sm italic">

"I spent 80% of my time in planning and chatting and only 20% in executing the plan."

</div>

<div class="mt-4">

### 三个关键认知

1. **AI 的原始输出速度已经远超人类**——不需要优化速度
2. **大多数人优化的方向是错的**——他们追求更快的 raw output
3. **正确的优化方向**是 judgment、clarity、quality、taste

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 mt-4 text-sm italic">

"We won't be rewarded in the world of AI for faster raw output. We will be rewarded for better judgment."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./skill-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Aladdin 与精灵：上下文窗口的真相

<div class="mt-2">

Lazar 用 Aladdin 的故事解释 LLM 的两个限制：

<div class="p-3 bg-red-50 border-l-4 border-red-400 mt-3 mb-3">

### 机器层面限制
上下文窗口有 token 上限。AI 需要用 token 来**阅读**、**浏览**、**思考**、**执行**——资源是有限的。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500">

### 人类层面限制
你说"I want to be taller"，精灵让你变成 13 英尺高——因为你**不够具体**。

<div class="text-sm italic mt-2">

"AI just don't understand. What do you mean when you say you know what I mean?"

</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-genie.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 骂 AI 的代价

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400 mb-4">

### 恶性循环
当 AI 没有修好 bug，用户开始生气，开始骂它。AI 的反应？它把本该用来修 bug 的 token 花在了**道歉和安抚你的情绪**上。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Lazar 的观察
他在 thinking model 的推理过程中亲眼看到：当你骂它时，第一条思考是"okay, the user is mad, so I need to think of ways how to reduce their anxiety"——而不是修 bug。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

### 正确做法
不要骂，要帮它。Lazar 的方法：找到出问题的文件，引用具体位置，"handholding it in dark, maybe giving it a flashlight"。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 根本原因

<div class="text-sm italic">

"It's your fault, my friend. You did not provide any clarity or context to this tool."

</div>

Lazar 认为 90%（实际上 100%）的 AI 失败都是用户的错——因为你没有提供足够的上下文。

</div>

</div>

</div>

---
layout: two-cols
---

# 平行构建：同时开 5 个项目

<div class="mt-2">

这是 Lazar 最反直觉的建议：**不要只做一个项目，同时做五个。**

<div class="mt-3">

### 5 种构建方式

1. **Brain dump** — 语音口述，想到什么说什么
2. **Typed prompt** — 经过思考的文字描述
3. **Mockup reference** — 从 Mobin / Dribbble 找设计参考
4. **Code snippet** — 直接给代码片段（AI 理解代码比英文更精确）
5. **Compare** — 对比五个结果，选出赢家

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 mt-3 text-sm">

**为什么不浪费？** 前期多花一点 credits，长远能省下几百美元和数天的时间——因为你从更高的 clarity 起点出发。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./clarity-funnel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 代码还是英文？给 AI 说它的母语

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 英语是第一编程语言，但代码更精确

Lazar 发现：虽然"English is the number one programming language"，但如果你想得到 **pixel perfect** 的结果，直接给代码。

- 去 21st.dev 或其他 UI 库
- 不是导出截图，而是**导出代码片段**
- 把代码直接喂给 Lovable

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Design Slop 的解决方案

"AI slop"不只是代码质量问题，更是**设计质量问题**。平行构建的方法同时解决了这个问题：

- 5 个不同方向 = 5 种设计选择
- 对比之后选择最好的
- 避免被第一个方向锁死

<div class="mt-3 text-sm italic p-2 bg-yellow-50 border-l-4 border-yellow-500">

当别人质疑"这不是在让我们多花 Lovable 的 token 吗？"——Lazar 说这其实是在帮用户省钱。

</div>

</div>

</div>

---
layout: two-cols
---

# PRD 系统：给 AI 一个技术联合创始人

<div class="mt-2">

选出赢家后，Lazar 会花整整一天来写文档。这不是浪费——这是设定航向。

<div class="mt-3 text-sm">

### 四份核心文档

1. **Master Plan.md** — 为什么做这个？给谁做？希望用户感受什么？
2. **Implementation Plan** — 怎么做？先后端还是先前端？什么顺序？
3. **Design Guidelines** — 外观和感觉，包含具体 CSS 参数
4. **User Journeys** — 用户注册后发生什么？然后呢？

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 mt-3 text-sm">

最终产出 **tasks.md** — 可执行的任务清单。一旦有了这个，AI 只需要一个命令：**proceed with the next task**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./prd-system.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "Proceed with the next task"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### 上下文切换的终极解法
一旦 PRD 系统就位，Lazar 的所有提示词都变成了一句话："proceed with the next task"。他不再需要携带上下文——上下文已经被外化到文档中。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

### Rules / Agent 文件
在项目设置中定义"规则"，例如：读取所有 PRD 文件 → 查看 tasks.md 找到下一个任务 → 执行 → 告诉我做了什么、怎么测试。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 所以能同时做 5 个项目
因为每个项目都有自己的文档系统，Lazar 可以在 6 个 Lovable tab 之间自由切换，永远不丢上下文。

</div>

</div>

<div>

<div class="mt-6 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"I don't prompt anymore. From that point on, I can switch as many windows as I like."

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 这些技巧的保质期
Lazar 坦言：这些手动工作流在 3 个月内可能就会被工具原生支持。所以他不优化这些技能——他优化的是**判断力、品味和清晰度**，因为那些不会被自动化。

</div>

</div>

</div>

---
layout: two-cols
---

# 4x4 调试框架

<div class="mt-2">

当事情出错时（一定会），Lazar 有一个系统化的方法。关键规则：**每种方法只试一次。**

<div class="mt-3 text-sm">

### Step 1: Auto-fix
让工具自己尝试修复。Lovable 的 agent 会标记错误并提供"try to fix"按钮。

### Step 2: Console logs
自己打开 dev 环境，读 console log。或者让 AI 在关键文件中写 console log，建立"awareness layer"。

### Step 3: External tool
导出到 GitHub → 用 Codex / Repomix + Claude 做外部诊断。像"hiring an external consultant"。

### Step 4: Revert + Rethink
回退几步，喝杯咖啡，散个步，重新思考你的 prompt。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./debug-4x4.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 调试的第五步：把教训写进 rules.md

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50 bg-opacity-30">

### 每次修完 bug，多问一个问题

当问题最终被修好，Lazar 会进入 chat mode 问 AI：

> "I needed to do four different things to fix this. How can you help me learn how to prompt you better so that next time we do it in one go?"

然后把学到的东西写入 **rules.md**，这样下次 AI 自动就知道怎么避免。

<div class="mt-3 text-sm italic">

"I'm not going to prompt you better. You're just going to learn that I'm stupid and you're going to prompt yourself better."

</div>

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 为什么这很重要

- **你不会记住** — 两天后你就忘了怎么 prompt 更好
- **AI 每次都读 rules** — 如果你让它每次开始前读 rules.md，教训就永远生效
- **消除自己** — Lazar 的哲学：把自己从等式中移除，让系统自己变好

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">

**作者概括**：这实际上是在构建一个持续改进的反馈循环——每次失败都让整个系统变得更聪明。

</div>

</div>

</div>

---

# 读 Agent 输出，不读代码

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">

### Lazar 读什么
<div class="text-3xl font-bold text-blue-600 my-2">Agent 输出</div>
<div class="text-xs opacity-70">AI 告诉他做了什么、为什么这么做、接下来怎么测试</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">

### Lazar 不读什么
<div class="text-3xl font-bold text-red-600 my-2">代码</div>
<div class="text-xs opacity-70">"The syntax is not of my interest. It's what the agent tells me that matters."</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### 学到什么
<div class="text-3xl font-bold text-green-600 my-2">系统思维</div>
<div class="text-xs opacity-70">通过读 agent 输出，他理解了架构、API、edge functions 的运作方式</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">

"The ceiling on the AI isn't the model intelligence. It's what the model sees before it acts."

</div>

<div class="mt-2 text-sm opacity-70">
这个洞察对所有人都适用：AI 输出质量的天花板不是模型能力，而是你给它看了什么。Exposure time 对人重要，对 agent 同样重要。
</div>

---
layout: two-cols
---

# "Good Enough" 不够了

<div class="mt-2">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 mb-4">

### AI 之前
"Good enough" 就是 good enough。10-15 年前，能做出一个能用的 SaaS 就已经很厉害了。生产本身就有壁垒。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 mb-4">

### AI 之后
每个人都能生产 "good enough"。差距从 good enough 到 world class 之间急剧缩小——但那个窄缝才是价值所在。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 text-sm italic">

"Everybody produces good enough with AI. Absolutely everyone does it. So now learning and optimizing for how do I produce world class and magic is the key lesson."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./skill-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 设计品味：50 层渐变的启示

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 mb-4">

### Lazar 的顿悟时刻
他想从 Lovable 的设计师同事那里"偷"一个渐变效果。打开 Figma 一看：

那个看起来"pretty simple"的渐变，背后是 **50 个不同颜色层**，每层有不同的透明度和渐变方向。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 行动建议
- 学习设计风格：Bauhaus、glassmorphism 等
- 关注优秀设计师（Lovable 的 Felix 有很棒的 newsletter）
- 学习如何用 prompt 复现特定设计风格
- Lazar 甚至建了一个 app 收集 18 种设计风格和对应 prompt

</div>

</div>

<div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"Design, guys. Just expose yourself to exquisite designs."

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### Exposure Time
跟着一位世界级设计师，看他 40-50 分钟的设计过程视频——看他怎么和工具对话，怎么 prompt，怎么迭代。

<div class="mt-2 italic">

"Set aside more time on learning than building."

</div>

</div>

</div>

</div>

---

# PM 赢了今天，设计师赢明天

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### PM — 今天的赢家
<div class="text-sm mt-2">

PM 带来 clarity——理解用户需求、定义成功标准、厘清优先级。

<div class="mt-2 italic text-xs">

"I think PMs are the winners of AI today because they bring clarity."

</div>

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Designer — 下一个赢家
<div class="text-sm mt-2">

我们正在训练 AI 做更好的技术决策，但还没能训练它做更好的**情感决策**。设计的本质是情感。

</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Engineer — 永远需要
<div class="text-sm mt-2">

当所有人都在构建，谁来维护基础设施？谁来处理 Cloudflare 宕机？Elite engineering 的需求只会更大。

</div>

</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：三者不是竞争关系——它们正在融合成一个新的角色。每个人都将使用 LLM 产出原始代码，差异在于 judgment 的质量。

</div>

---
layout: two-cols
---

# 角色大融合

<div class="mt-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 mb-4 text-sm italic">

"These venn diagrams of engineer, designer, PM used to be very separate. Now they're converging."

</div>

<div class="mt-3">

### Lazar 对自己的定义

他称自己为 "rapid engineer"——不是 vibe coder，因为"vibe coding is just coding in 12 months from now"。

</div>

<div class="mt-3">

### 精英工程师也承认了

越来越多的顶级工程师公开承认他们不再手写代码。AI 写所有的代码，人类负责方向和判断。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 mt-3 text-sm italic">

"Coding is going to be like calligraphy. People like, 'Oh my god, you wrote that code. That's so amazing.' It's going to be so rare that it's going to become an art."

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./role-convergence.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 精英工程永不消亡

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 为什么还需要工程师

<div class="text-sm italic mb-3">

"We will need elite engineering more than ever."

</div>

当所有人都在构建时：
- **谁来维护**这些海量的代码库？
- **谁来扩展**基础设施以支撑数十亿新 builder？
- **Cloudflare 宕机**——精英工程师在修
- **Lovable 用户暴增**——精英工程师在搭基础设施

构建和维护是**完全不同的技能集**。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 但也要务实

<div class="text-sm">

Lazar 的建议：如果有个 18 岁的弟弟问该干什么——

> "Go become a plumber. Don't go and get a CS degree."

他的理由：美国新一代百万富翁中，很多是电工和水管工。

**但他也补充**：好的工程师如果理解未来方向，永远稀缺。关键是**方向感**，不只是技术能力。

</div>

</div>

</div>

---
layout: two-cols
---

# 人类技能 vs 可自动化技能

<div class="mt-2 text-sm">

Lazar 用一个简洁的框架来判断什么会被 AI 取代：

<div class="p-3 bg-red-50 border-l-4 border-red-400 mt-3 mb-3">

### 确定性任务 → 会被取代
X input = Y output，路径清晰。翻译、数据录入、模板化写作。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 mb-3">

### 人类动态 → 安全
理解从 X 到 Y 之间的**人类动态**——情感、关系、幽默感。

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500">

### 喜剧 vs 翻译

<div class="italic">

"AI is never going to be able to write a good joke. Never, never, never."

</div>

但翻译？AI 已经做得很好了。找到你行业中的"喜剧"——那个 AI 做不到的人类核心。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./human-vs-ai.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 是放大器，不是替代品

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"AI regardless of your background is an amplifier. If you don't know what you're doing, you're just going to produce garbage faster."

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 对优秀的人
一个出色的作家会从一年写一本书变成一年写七本。一个有品味的 builder 会从一个月出一个产品变成一周出一个。

**AI 放大你已有的能力。**

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 对平庸的人
如果你没有判断力、没有品味、不知道什么是好的——你只是在用更快的速度生产垃圾。

**平庸的 writer 要小心了。** AI 会让顶尖 writer 的产出翻倍，挤压平均水平的空间。

</div>

</div>

---

# Demo Don't Memo

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### Lovable 2025 年的口号

<div class="text-lg font-bold mt-2">"Demo don't memo"</div>

<div class="text-sm mt-2">

与其写一堆文档、开一堆会议来向工程师传达你的 vision——直接在 Lovable 里用 30 分钟构建一个原型，然后 hand it over。

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Lazar 的亲身经历
他之前的工作中需要构建一个企业级产品。当时 Lovable 的能力还不足以投入生产，但他用 4 小时构建了原型，工程团队花了 6-7 个月将其复制到生产环境。

**如果没有原型**，光是把想法描述清楚就需要 1-2 周。

</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-4">

### 企业级采用
至少半数 S&P 500 公司有员工在使用 Lovable。领先的电信、医疗、金融公司都在用——即使不能推向生产，市场、销售、HR 团队也在用它构建内部工具。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 最核心的价值
不是取代工程师——而是让**非技术人员不再需要等待工程师**。marketer 不用排队了，sales 不用等 sprint 了。

</div>

</div>

</div>

---

# 马的类比：变化的速度

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 mb-4">

### 从蒸汽机到汽车
1700 年代开始建造蒸汽机，花了约 200 年。当汽车上路后，美国 **90% 的马匹在 20 年内消失了**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 人类没有 20 年
一个被雇来做技术写作的人，6 个月后就需要重新定义自己的角色。马有 20 年的缓冲期，人类没有。

<div class="text-sm italic mt-2">

"Humans did not get the 20 years that horses did."

</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

### Lazar 自己的经历
他在 YouTube 上做的 "7 天学 Lovable vibe coding" 系列（2025 年 3 月），几个月后就完全过时了——所有他教的 workaround 都变成了原生功能。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 但他不害怕

<div class="text-sm italic">

"Don't you see our roles are finally going in a direction where we're outsourcing what we hated doing anyways?"

</div>

开会、记笔记、做表格——这些正在被 AI 接管。人类终于可以被**思考和判断**所奖励。

</div>

</div>

</div>

---

# 如何成为职业 Vibe Coder

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4">

### Lazar 的路径
林业工程师 → Subway 服务员 → 社区运营 → 社交媒体 → 创业公司 → Building in public → Lovable 首位 Vibe Coding 工程师。

<div class="text-sm italic mt-2">

"It became a job by building in public."

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 核心建议

- **Build in public** — 分享所有失败和知识
- **参加 hackathon** — 本地连接其他 builder
- **发送 app 而不是简历** — 有人用 Lovable app 作为求职信成功入职
- **先自我雇佣** — 在被公司雇佣之前，先做一个专业 vibe coder

</div>

</div>

<div>

<div class="mt-4 p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"You don't need a company to hire you. You can hire yourself as a professional vibe coder first."

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### Slumdog Millionaire 式的人生
Lazar 把自己的经历比作电影《贫民窟的百万富翁》——人生中每一段看似无关的经历（蓝领工作、服务员、社区运营）都为今天的角色积累了技能。

</div>

</div>

</div>

---

# 从恐惧到兴奋

<div class="mt-4 p-6 text-xl italic border-l-4 border-green-500 bg-green-50 bg-opacity-20 text-center">

"It switches from fear to excitement immediately because then you see what's possible firsthand."

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">

### 第一步
<div class="text-sm mt-2">

打开 Lovable（或任何 AI 工具），Brain dump 你脑子里的想法，按发送。

</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">

### 转变发生
<div class="text-sm mt-2">

当你看到 AI 把你的想法变成一个可以交互的产品——恐惧消失了，兴奋取而代之。

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200 text-center">

### 身份转换
<div class="text-sm mt-2">

从 consumer 变成 builder。这个跨越以前需要几年学编程，现在只需要几分钟。

</div>

</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-400 text-sm">

**Lazar 的警告**："You should only be afraid if you're doing nothing." 如果你什么都不做，那确实应该害怕。但只要你迈出第一步，恐惧就会变成兴奋。

</div>

---

# 最后的建议：优化什么

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 不要优化这些

- ❌ Tech stack 选择
- ❌ 用什么后端 / 前端框架
- ❌ 手写代码的速度
- ❌ 学习某个特定编程语言

<div class="text-sm italic mt-3">

"Tech stack doesn't matter anymore. It doesn't matter."

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 请优化这些

- ✅ **Quality** — 产出的质量
- ✅ **Taste** — 设计品味和审美
- ✅ **Design** — 字体、配色、布局
- ✅ **Copy** — 好的文案（人们已经能在 3 秒内识别 AI 写作）
- ✅ **Judgment** — 判断什么值得做

<div class="text-sm italic mt-3">

"I'm optimizing 100% of my time today on good judgment, clarity, quality, taste."

</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"I spent 80% of my time in planning and chatting and only 20% in executing the plan."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于时间分配</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"Coding is going to be like calligraphy. It's going to be so rare that it's going to become an art."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于编码的未来</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"The ceiling on the AI isn't the model intelligence. It's what the model sees before it acts."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AI 的真正瓶颈</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-400 rounded italic text-sm">
"AI regardless of your background is an amplifier. If you don't know what you're doing, you're just going to produce garbage faster."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AI 的本质</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"You don't need a company to hire you. You can hire yourself as a professional vibe coder first."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于职业道路</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"We won't be rewarded in the world of AI for faster raw output. We will be rewarded for better judgment."
<div class="text-xs opacity-60 mt-1 not-italic">— 关于什么技能最重要</div>
</div>

</div>

---
layout: end
---

# 停止听播客，去构建

<div class="text-lg opacity-80 mt-4">

"Ideally, people stop right now. They've heard enough. I gave them the best that I could. Just stop listening and just go."

</div>

<div class="mt-8 text-sm opacity-50">

Lazar Yavanovich · Lovable Vibe Coding Engineer · Lenny's Podcast

</div>
