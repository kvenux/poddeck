---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Andrej Karpathy: From Vibe Coding to Agentic Engineering'
info: |
  Andrej Karpathy 在 AI 创业活动上的炉边对谈。从"作为程序员从未如此落后"
  讲起，串起 Software 3.0、可验证性、jagged intelligence、vibe coding 与
  agentic engineering 的分野，以及"外包思考但无法外包理解"。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# From Vibe Coding to Agentic Engineering

<div class="text-lg opacity-80 mt-4">Andrej Karpathy 谈 Software 3.0、可验证性与 agentic 工程</div>

<div class="mt-10 text-sm opacity-60">
Andrej Karpathy · 帮助创建 OpenAI、在 Tesla 做出 Autopilot<br/>
炉边对谈 · 2025
</div>

<div class="mt-8 text-xs opacity-50">
去年他造了 "vibe coding" 这个词。<br/>
几个月后，他说自己"作为程序员从未如此落后"——这就是今天的起点。
</div>

---

# 为什么这期值得看

<div class="text-sm opacity-70 mb-4">一次半小时的对谈，把"AI 写代码"这件事重新拆开来讲——不是更快，而是不一样。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### December 的拐点
为什么"过去一年"和"过去几个月"是两件事——agentic 工作流真正开始 work。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Software 3.0
编程变成 prompting；context window 成为操纵 LLM 这台解释器的杠杆。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 可验证性
为什么 LLM 的能力是"锯齿状"的——能重构 10 万行代码，却让你走路去洗车。

</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Vibe coding vs Agentic engineering
一个抬高地板，一个守住天花板上的质量线。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Animals vs Ghosts
我们不是在造动物，而是在召唤幽灵——这改变了你怎么用它。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 能外包思考，不能外包理解
当智能变便宜，什么仍然值得深学。

</div>

</div>

---
layout: two-cols
---

# "从未如此落后"——December 的拐点

过去一年，Karpathy 一直在用 agentic 编码工具。它擅长"代码块"，但**经常出错，你得去改**。

December 是一个**清晰的拐点**：最新模型出来的代码块就是对的，他不断要更多，也都对。

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 italic text-sm">
"I can't remember the last time I corrected it ... and then I was vibe coding"
</div>

<div class="mt-3 text-xs opacity-70">
他强调：很多人是把 AI 当成"ChatGPT 那类东西"在体验。<br/>
但 December 之后要重新看一遍——agentic 连贯工作流"真正开始 work 了"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./december-shift.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Software 1.0 → 2.0 → 3.0

Karpathy 的三段式：

- **1.0** — 你写代码
- **2.0** — 你"编程"的方式是整理数据集、设计目标和网络架构，去训练权重
- **3.0** — 在足够多任务上训练出的 LLM，**变成了一台可编程的计算机**

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"your programming now turns to prompting and what's in the context window is your lever over the interpreter that is the LLM"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./software-3-stack.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 案例一：OpenClaw 的安装

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-40">

### Software 1.0 的做法
为了适配各种平台和机器，安装用的 shell 脚本会**不断膨胀、变得极其复杂**。

你仍然被困在"想要把代码精确写出来"的旧宇宙里。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### Software 3.0 的做法
安装其实是**一段供你复制粘贴给 agent 的文本**。

Agent 用自己的智能，查看你的环境、跟着指令、在循环里 debug——"强大得多"。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
新的编程范式问的问题是：<strong>"要复制粘贴给 agent 的那段文本是什么？"</strong>
</div>

---

# 案例二：MenuGen——"那个 app 根本不该存在"

<div class="text-sm opacity-70 mb-3">餐厅菜单没有图片，30% 的菜他都不知道是什么。于是他 vibe-code 了一个 app。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded border-l-4 border-orange-400 bg-orange-50 bg-opacity-40">

### 他先 vibe-code 的版本
上传菜单照片 → OCR 出菜名 → 调图像生成器画出每道菜 → 重新渲染菜单。<br/>
跑在 Vercel 上，一整套 app。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 然后他看到的 3.0 版本
把照片丢给 Gemini，说"用 Nanabanana 把菜品画到菜单上"——返回的就是那张照片，像素里渲染好了每道菜。

</div>

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 italic">
"that app shouldn't exist"
<div class="text-xs opacity-60 mt-1 not-italic">—— 他说这"blew my mind"：他的 MenuGen 整个是在旧范式里打转</div>
</div>

---

# 不只是"更快"，而是"以前不可能"

<div class="text-sm opacity-70 mb-4">Karpathy 反复回到的一点：别只把它当成"现有东西的提速"。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧心智：提速
"程序员变快了" —— 这本身就是在旧框架里思考。

代码作用在**结构化数据**上。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 新机会：新事物
这是更普遍的**信息处理**自动化，不只是代码。

他的 LLM 知识库项目：把一堆文档"重新编译"、重排，造出以前没有代码能造的东西。

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 italic">
"It's actually like new things are available now."
<div class="text-xs opacity-60 mt-1 not-italic">—— 他说这个方向"几乎更让人兴奋"</div>
</div>

---
layout: two-cols
---

# 外推：神经计算机

如果继续往前推，画面会"很怪、很陌生"。

Karpathy 设想：原始视频/音频喂进一个神经网络，用 diffusion 直接渲染出**那一刻独有的 UI**。

他回顾 50、60 年代：当时并不清楚计算机会长得像计算器还是像神经网络——我们走了计算器那条路。

<div class="mt-4 text-xs opacity-70">
<strong>作者外推（非原话定论）</strong>：神经网络可能变成 host process，CPU 退为 co-processor，只在确定性任务上被"工具调用"。他自己也说这条进程 "TBD"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./neural-host.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 可验证性：LLM 能自动化"你能验证的东西"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 传统计算机
能自动化**你能用代码精确指定**的东西。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 这一代 LLM
能自动化**你能验证**的东西。

因为前沿实验室训练它们，靠的是巨大的强化学习环境 + 验证型奖励。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
结果是模型变成"锯齿状的实体"——在 <strong>math、code 及相邻领域</strong>能力高耸，离开那个空间就停滞、毛糙。
</div>

<div class="mt-3 text-xs opacity-70">
Karpathy 写"可验证性"，就是想搞清楚：这种 jaggedness 到底有没有规律。
</div>

---

# Jagged Intelligence：去洗车，该开还是该走？

<div class="text-sm opacity-70 mb-4">老例子是"strawberry 里有几个 r"。Karpathy 说现在模型大概打了补丁，但有了新例子。</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 italic text-lg">
"I want to go to a car wash to wash my car and it's 50 meters away. Should I drive or should I walk?"
</div>

<div class="mt-4 text-sm">
最先进的模型今天会告诉你：**走路去**，因为太近了。<br/>
（洗车——你显然需要把车开过去。）
</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500">
同一个 Opus 4.7，能重构十万行代码、能找 zero-day 漏洞，却让你走路去洗车。
<div class="mt-1 italic font-bold">"This is insane."</div>
</div>

<div class="mt-3 text-xs opacity-70">
启示：模型仍然 jagged，意味着你得"in the loop 一点"，把它们当工具，保持接触。
</div>

---
layout: two-cols
---

# 你在"实验室的摆布之下"

从 GPT-3.5 到 GPT-4，国际象棋能力大涨。

很多人以为是"能力的自然推进"。Karpathy 说更可能是：**大量国际象棋数据被加进了预训练集**。

仅仅因为进了数据分布，模型就比默认情况好得多。

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"we are slightly at the mercy of whatever the labs are doing, whatever they happen to put into the mix"
</div>

::right::

<div class="pl-4 pr-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### 在 RL 的"电路"里
你"fly"——能力如光速。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-3">

### 在数据分布之外
你会"struggle"——得自己搞清楚处在哪条电路里。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 不在电路里
就得认真考虑 fine-tuning、做自己的活——它不会"开箱即用"。

</div>

</div>

---

# 给创业者的建议：可验证 = 当下可解

<div class="text-sm opacity-70 mb-4">实验室已经在最明显的领域（数学、代码）冲向逃逸速度。那创业者怎么办？</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 可验证性让问题"可解"
因为你能往上砸大量 RL。<br/>
这一点**即使实验室不直接关注它，也仍然成立**。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 这是"就是能 work"的技术
有大量多样的 RL 环境/样本，就能用你喜欢的 fine-tuning 框架"拉杆子"，得到真正能用的东西。

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
反过来问：什么仍然只是"远看可自动化"？他认为<strong>"几乎一切最终都能被某种程度地验证"</strong>——
连写作都可以用"a council of LLM judges"。区别只在容易还是难。
</div>

---
layout: two-cols
---

# Vibe coding vs Agentic engineering

**Vibe coding**：抬高地板。人人都能 vibe-code 任何东西——amazing、incredible。

**Agentic engineering**：守住天花板下的质量线。
- 不允许因为 vibe coding 引入漏洞
- 你仍然像以前一样对你的软件负责
- 但你能更快——问题是怎么"正确地"更快

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 italic text-sm">
"agentic engineering is about preserving the quality bar of what existed before in professional software"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./floor-ceiling.excalidraw"
  class="w-[380px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一门工程学科：协调"尖刺实体"

<div class="text-sm opacity-70 mb-4">Karpathy 之所以叫它"工程学科"，是因为 agent 有它的脾性。</div>

<div class="grid grid-cols-3 gap-4 mt-2 text-center">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">

### 尖刺
"spiky entities"——能力分布不均

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 易错 & 随机
有点易错、略带随机性

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 但极其强大
"extremely powerful"

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
核心问题：<strong>怎么协调它们，在不牺牲质量线的前提下走得更快。</strong>
</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
他说 agentic engineering 的天花板很高。以前讲"10x 工程师"——他说现在这个倍数被放大得多，做得好的人会 <strong>"peak a lot more than 10x"</strong>。
</div>

---

# 什么样的人是"AI native"？

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 做法本身
把可用工具榨到极致、用上所有功能、投资自己的 setup。

就像过去工程师把 vim / VS Code 用到极致——现在是 Claude Code、Codex 这些。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 招聘还没改
大多数公司**还没为 agentic 能力重构招聘流程**。

还在出"解谜题"——那是旧范式。

</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>他设想的新面试</strong>：给一个很大的项目——比如"给 agent 用的 Twitter 克隆"，做到又好又安全；
然后他用 10 个 Codex 去尝试攻破你部署的网站，攻不破才算过。
</div>

---
layout: two-cols
---

# 人类管什么：taste、judgment、oversight

现在的 agent 像"实习生实体"。你仍然得掌管**美学、判断、品味，和一点监督**。

API 的细节——`keepdims` 还是 `keepdim`、`dim` 还是 `axis`、`reshape` / `permute` / `transpose`——他说"我不记得这些了，因为不用记"。这些交给召回力极好的"实习生"。

但你仍要懂底层：tensor 有 view、有 storage，操纵 view 还是另开 storage 影响效率——你得理解它在做什么。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic text-xs">
"you're in charge of the taste the engineering the design"
</div>

::right::

<div class="pl-4 pr-2">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">

### 人 = 设计 + 开发
掌管 spec、plan、顶层分类、oversight。

确保"问的是对的东西"——比如"这些必须是唯一的 user ID"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Agent = 填空
处理底层细节，"fill in the blanks"。

</div>

<div class="mt-3 text-xs opacity-70">
他甚至说不太喜欢 plan mode——更普遍的事是和 agent 一起设计一份非常详细的 spec / docs。
</div>

</div>

---

# Agent 仍会犯"很怪"的错

<div class="text-sm opacity-70 mb-4">一个 MenuGen 的真实例子，说明为什么人得掌管 spec。</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

用 Google 账号注册，但用 Stripe 账号买 credits——两边都有 email 地址。

他的 agent 试图用 **email 地址**去把 Stripe 那边和 Google 那边的用户**对上**——而不是用一个持久的 user ID。

如果你 Stripe 和 Google 用了不同邮箱，钱就**关联不上**。

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
他说这"such a weird thing to do"——邮箱本就是任意的。<span class="italic">"They can be arbitrary."</span>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
所以人要掌管 spec：明确说"我们把一切绑定到唯一的 user ID 上"。
</div>

</div>

---

# 代码质量：看一眼会"心脏病发"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 实际看代码时
"sometimes I get a little bit of a heart attack"——代码很臃肿、大量复制粘贴、抽象别扭又脆弱。

"it works but it's just really gross."

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### microGPT 的例子
他想把 LLM 训练简化到极致。"The models hate this. They can't do it."

不断 prompt"再简化、再简化"，模型就是做不到——像在 RL 电路之外"拔牙"。

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">
但他认为这"没有什么根本性的东西在阻止"——很可能只是<strong>美学不在 RL 里</strong>：没有美学的代价或奖励。
"the labs haven't done it yet almost." 他希望未来模型能改进。
</div>

---
layout: two-cols
---

# Animals vs Ghosts

Karpathy 写过一篇文章：我们不是在造**动物**，而是在**召唤幽灵**。

幽灵是被数据和奖励函数塑造的 jagged 智能——**不是**由内在动机、乐趣、好奇心、empowerment 塑造的（那些是进化的产物）。

为什么这个框架重要？因为对"它们是什么"有更好的模型，你用起来会更称职。

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 italic text-sm">
"if you yell at them, they're not going to work better or worse"
</div>

<div class="mt-2 text-xs opacity-70">
他自己也说这"有点像哲学思辨"，不确定有没有"real power"——更多是一种进入它的心态：保持怀疑，慢慢摸清楚。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./animals-ghosts.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Agent-native 的世界

<div class="text-sm opacity-70 mb-4">所有东西今天仍然是为人写的，得被搬过来、变成 agent native。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 他最大的 pet peeve
框架、库的文档**仍然根本是写给人看的**。

"why are people still telling me what to do?"——他不想自己做任何事，他想知道：**该复制粘贴给 agent 的那个东西是什么。**

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 该有的样子
把工作负载拆解成对世界的 **sensors** 和 **actuators**，先描述给 agent，围绕"对 LLM 高度可读的数据结构"做大量自动化。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
他的检验标准：MenuGen 最麻烦的不是写代码，是<strong>在 Vercel 上部署</strong>——配 DNS、串各种服务。
如果能"给 LLM 一个 prompt，build MenuGen，然后什么都不用碰就部署好"——那才说明基础设施真的在变 agent native。
</div>

---

# "我的 agent 和你的 agent 谈"

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-lg italic mt-6">
"I'll have my agent talk to your agent to figure out some of the details of our meetings"
</div>

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 走向
人和组织都会有 **agent 代表**。日常细节（比如安排会议）由 agent 之间去对。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现状
一切还在"为人而写"。这个 agent-native 环境里"everything has to be rewritten"。

</div>

</div>

<div class="mt-6 text-xs opacity-60">
这是这场对谈里 Karpathy 描绘的近未来——他说"我想这里每个人都对此感到兴奋"。
</div>

---

# 教育：能外包思考，不能外包理解

<div class="text-sm opacity-70 mb-4">当智能变便宜，什么仍然值得深学？Karpathy 引了一条让他"每隔一天就想起来"的推文。</div>

<div class="p-6 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xl italic mt-2">
"you can outsource your thinking but you can't outsource your understanding"
</div>

<div class="mt-6 grid grid-cols-2 gap-6 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 他感到自己成了瓶颈
信息仍然得进到他脑子里。他"becoming a bottleneck"——连"我们在 build 什么、为什么值得做、怎么指挥 agent"都成了瓶颈。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么他爱 LLM 知识库
每次看到信息的"一个不同投影"，他都觉得有所洞见。这些是**增强理解**的工具。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
你没法做一个好的"导演"，如果你自己还不理解——而 LLM 并不擅长理解，<strong>这件事你仍然独一无二地负责</strong>。
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句（均可在原始字幕中检索到）：</div>

<div class="space-y-2 text-sm">

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"I can't remember the last time I corrected it ... and then I was vibe coding"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 December 的拐点</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"your programming now turns to prompting ... your lever over the interpreter that is the LLM"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 Software 3.0</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic">
"that app shouldn't exist" · "new things are available now"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 MenuGen 与"不只是提速"</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"Should I drive or should I walk?" ... "This is insane."
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 jagged intelligence 的洗车例子</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"agentic engineering is about preserving the quality bar ... in professional software"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 区分 vibe coding 与 agentic engineering</div>
</div>

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic">
"if you yell at them, they're not going to work better or worse"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 谈 animals vs ghosts</div>
</div>

</div>

---
layout: end
---

# "You can outsource your thinking but you can't outsource your understanding."

<div class="mt-4 text-sm opacity-60">
Andrej Karpathy · From Vibe Coding to Agentic Engineering
</div>
