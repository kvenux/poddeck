---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "AI Is Fast. AI Projects Are Slow. Let's Fix That."
info: |
  Rocket Ride 联合创始人谈 coding 不再是瓶颈、Lego 式 node 拼装、
  Crew AI 同步噩梦、共享 GPU 推理、捐给 Linux Foundation 的开源框架。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI Is Fast. AI Projects Are Slow.

<div class="text-2xl opacity-80 mt-2">Let's Fix That.</div>

<div class="mt-12 text-sm opacity-60">
MLOps Community · 与 Rocket Ride 联合创始人对谈<br>
关于"瓶颈在哪、Lego 怎么拼、$25k AWS 账单怎么来"的一小时
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-1">"Coding 不再是瓶颈" —— 那它去哪了？</div>
<div class="text-sm opacity-80">嘉宾给了一份清单：intentionality、tool discovery、quality —— 写代码反而是最容易的那段。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1">Lego 式 node + lane 框架</div>
<div class="text-sm opacity-80">Rocket Ride 把 AI 应用拆成几十个 node 和五条 lane，让 Claude "用一句英文拼出 45 个节点"。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold mb-1">12 + 9 小时的 Crew AI 同步噩梦</div>
<div class="text-sm opacity-80">一个 dog / cat / elephant 故事如何揭出"同步 API + 多 chat"的隐藏地雷 —— 以及它教给框架的事。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold mb-1">$25,000 一个月的 AWS 账单</div>
<div class="text-sm opacity-80">观测、auto-research 换便宜模型、共享 GPU 聚合 —— 当 CFO 开始问问题，框架要怎么回答。</div>
</div>

</div>

---

# 嘉宾速写：Rocket Ride 是什么

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">出身</div>
<div class="font-bold text-lg">数据准备公司</div>
<div class="text-sm opacity-80 mt-2">前身做的是 backup / data sync —— "我们处理过 1.5 billion files 的 RAG"。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">现在</div>
<div class="font-bold text-lg">Rocket Ride</div>
<div class="text-sm opacity-80 mt-2">把那条管线开源、抽成框架。<br><br>"March 4th launched 开源版本"。</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">归属</div>
<div class="font-bold text-lg">Linux Foundation</div>
<div class="text-sm opacity-80 mt-2">全部捐给 AIF 基金会。<br><br>C++ / Tika / Java / Python 全开源。</div>
</div>

</div>

<div class="mt-8 text-sm opacity-60">
本文里说的"嘉宾"指 Rocket Ride 的两位联合创始人；host 是 MLOps Community 的 Demetrios。
</div>

---

# 开场判断：软件工程"快死了"

<div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded text-xl italic">
"You could say software engineering is dead, right? And while it's not really dead, certainly the old definition of software engineering is quickly evolving away."
</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-1">旧定义</div>
<div class="text-sm opacity-80">写 function、调 API、组装系统 —— 时间 80% 花在敲键盘上。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1">新定义</div>
<div class="text-sm opacity-80">表达意图、选工具、把碎片组合成可上线的东西 —— 代码生成是最便宜的部分。</div>
</div>

</div>

---

# 两条岔路：Efficiency AI vs Opportunity AI

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">Company A</div>
<div class="font-bold text-lg mb-2">Efficiency AI</div>
<div class="text-sm opacity-80 italic mb-3">"doing the same with less"</div>
<div class="text-sm opacity-80">
裁掉 50% 开发者，<br>
维持当前营收。
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">Company B</div>
<div class="font-bold text-lg mb-2">Opportunity AI</div>
<div class="text-sm opacity-80 italic mb-3">"doing more with the same"</div>
<div class="text-sm opacity-80">
留住开发者，<br>
重新培训，<br>
产出 2x / 4x / 10x。
</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者概括</strong>：这是嘉宾对"AI layoffs vs AI training"的两种姿态的命名 —— 不是预测，是判断。短期效率派更亮眼，长期机会派的 10x topline 会复利。
</div>

---

# Coding 不再是瓶颈

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">
"we really acknowledge that coding is no longer the bottleneck. Code generation is no longer the bottleneck which it used to be. So the bottleneck just moves somewhere else."
</div>

<div class="mt-6 text-base opacity-80">
那么它移到哪？嘉宾列了三个新岗位：
</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold">Intentionality</div>
<div class="text-xs opacity-70 mt-1">把"我想要什么"说清楚</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold">Tool discovery & selection</div>
<div class="text-xs opacity-70 mt-1">从一堆类似工具里挑出对的那个</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold">Quality & post-production</div>
<div class="text-xs opacity-70 mt-1">把 demo 改成可上线的</div>
</div>

</div>

---
layout: two-cols
---

# 瓶颈搬家：从代码到判断

旧世界的开发者像装配工 —— 瓶颈在敲键盘的速度。

新世界的瓶颈集中在 LLM 之前和之后：

- 前：你能不能把模糊的 idea 翻译成"机器能听懂的指令"
- 后：你能不能判断它产出的东西"值不值得 ship"

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
嘉宾说："those are painful steps. They can be painful, certainly for the un-inexperienced."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./bottleneck-shift.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Claude 偷懒 —— 而且它在模拟人类

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">嘉宾的吐槽</div>
<div class="text-sm italic opacity-80">"I fight with Claude quite a bit actually... it's just like, no, I don't want it done that way."</div>
<div class="text-sm opacity-80 mt-2">让它建个 UI —— 它生成了两三个互相重复的 CSS stylesheet。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">Demetrios 的反应</div>
<div class="text-sm italic opacity-80">"I mean, it's simulating a developer. So, of course, it's lazy."</div>
<div class="text-sm opacity-80 mt-2">作为开发者你愿意越懒越好；但这意味着<strong>它得到的是和懒人一样的复用率</strong>。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-sm">关键句："you end up with <strong>spaghetti code that's not worth actually shipping</strong>." —— 它能 run，不代表它能 ship。</div>
</div>

---

# common.css 之战

<div class="mt-4 text-base opacity-80">
嘉宾的真实工作场景：
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="font-bold mb-1">Claude 擅长</div>
拿一份明确的 plan，从 0 到 1 把它实现出来。哪怕项目里 500 个文件，它也能"埋头干完"。
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<div class="font-bold mb-1">Claude 不擅长</div>
增量工程。三天前它怎么命名一个 component，今天它已经忘了；明明有 common.css，它还要再写一份。
</div>

</div>

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded italic text-base">
"Okay, look at common CSS and figure out, you know, what are the common styles here? How do you apply themes? Why are you doing it this way and not this way <strong>when you did it this way yesterday?</strong>"
</div>

<div class="mt-4 text-sm opacity-60">
对策：嘉宾的 <code>memory.md</code> 长得像一本小册子 —— snake_case for Python、camelCase for TypeScript、"先去看 common.css"、"两份 SDK 保持同步"。它就是为了把昨日和今日缝起来。
</div>

---

# 从 Z80 到 Claude —— "我用英语编程"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-xs uppercase opacity-60 mb-2">语言史</div>
<div class="text-sm opacity-80 leading-relaxed">
Z80 assembly →<br>
BASIC →<br>
Cobol / Fortran →<br>
…… →<br>
JavaScript / TypeScript →<br>
<strong>Claude Code</strong>
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs uppercase opacity-60 mb-2">心智模型</div>
<div class="text-sm opacity-80 italic mb-2">
"This AI evolution with Claude Code, I just view as another language for me to actually interact with."
</div>
<div class="text-sm opacity-80">
"I don't care about what kind of code it produces underneath."
</div>
</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-lg">
"From my point of view, it's the ambiguity — the bridge between the English language (I program in English, obviously) and the technical jargon."
</div>

---

# Vibe coder vs Software developer

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">Software developer</div>
<div class="font-bold text-lg mb-2">关心 craft</div>
<div class="text-sm opacity-80">
maintainability<br>
readability<br>
reusability<br><br>
"You want to know that it's architected."
</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">Vibe coder / citizen developer</div>
<div class="font-bold text-lg mb-2">关心结果</div>
<div class="text-sm opacity-80 italic mb-2">
"If you're a vibe coder, then your judgment is: does it do what I want it to do? Great."
</div>
<div class="text-sm opacity-80">
能跑就行。<br>(直到要扩规模或换 model 那一天。)
</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
Demetrios 抛出的 trick question："<strong>If it runs even if it's not pretty, does it matter?</strong>" —— 两位嘉宾的回答是："看你是哪种。"
</div>

---

# 真正的浪费：Infrastructure / Glue code

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded text-lg italic">
"Do you really want to reinvent that wheel over and over and over again?"
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<div class="font-bold mb-1">问题</div>
每个 AI 应用都要重写：模型连接、异常重试、并发控制、缓存、observability、prompt 模板……
这一层<strong>"和你想做的事毫无关系"</strong>，但跑不通的应用都死在这。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="font-bold mb-1">嘉宾的判断</div>
<div class="italic opacity-80">
"glue codes which is kind of almost a waste of time anyway because it's not really tied to the value of what you're trying to build."
</div>
<div class="mt-2">所以 Rocket Ride 决定把整个 infrastructure tier 标准化、抽走。</div>
</div>

</div>

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>它瞄准的不是 LLM 的智能，是 LLM 周围那 80% 的脏活。</strong>
</div>

---
layout: two-cols
---

# Lego 哲学

每个 node 是一块 Lego。<br>
单看每一块没意思 —— 拼起来才有意思。

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"A little tiny red Lego is not interesting. A white Lego, you know, 4x4 Lego is not interesting. But when you start building stuff out of these Legos, that's when it becomes interesting."
</div>

<div class="mt-4 text-sm opacity-80">
具体清单（节选）：
</div>

<ul class="mt-2 text-sm opacity-80 space-y-1">
<li>text chunker（含 C++/JS 代码感知）</li>
<li>~8 种 vector store</li>
<li>HTTP requester · firecrawl</li>
<li>~12 种 LLM provider</li>
<li>anonymizer / summarizer / embedder</li>
</ul>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lego-pipeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 五条 lane —— 怎么让 Claude 看懂"该往哪走"

Rocket Ride 把数据形态收敛成五条 lane：

- **text** —— 一切下游处理的主干
- **table** —— PDF 表格 / 数据库行
- **image** —— OCR、object recognition
- **audio** —— STT、transcribe、TTS
- **video** —— 帧抓取、scene transition

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"It's very easy for Claude to understand: this is the text lane. When you have text, run it through here."
</div>

<div class="mt-3 text-sm opacity-70">
node 之间的跨界很自然：OCR 把 image 喂到 text；TTS 把 text 喂到 audio。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lanes.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一句英文 → 45 个 node

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">
"I have an invoice that I want to stick into a MySQL table. Here's the table name."
</div>

<div class="mt-6 grid grid-cols-3 gap-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold text-sm">① 三份契约</div>
<div class="text-xs opacity-70 mt-1">agents.md（规则）+ 文档 + 源码</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-sm">② 自然语言进入</div>
<div class="text-xs opacity-70 mt-1">用户写一句话需求</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold text-sm">③ Claude 拼接</div>
<div class="text-xs opacity-70 mt-1">观察到过的最长 pipeline：~45 个 node</div>
</div>

</div>

<div class="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"Claude is good enough and our instructions are good enough. I have a PDF. Give me the text back."
</div>

<div class="mt-4 text-sm opacity-60">
关键：Claude 不需要"理解 OCR"，它只需要理解"用哪几个 Lego 接起来" —— 这就是把 plumbing 从 LLM 的肩上移到框架上。
</div>

---

# 同输入，比较不同 agent

<div class="mt-4 text-base opacity-80">
"As we all know, agents work differently" —— Crew AI 不等于 Deep Agent 不等于 LangChain。
</div>

<div class="grid grid-cols-3 gap-3 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold text-sm mb-1">输入端</div>
<div class="text-xs opacity-70">一份相同的 input，分发给三种 agent / 多种 LLM</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold text-sm mb-1">并行运行</div>
<div class="text-xs opacity-70">"they're all run simultaneously"</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold text-sm mb-1">结果墙</div>
<div class="text-xs opacity-70">直接看哪个跑得对、哪个跑得快、哪个 token 便宜</div>
</div>

</div>

<div class="mt-6 p-5 bg-orange-50 border-l-4 border-orange-500 rounded text-base italic">
"Oh, this one sucked at it. So we're not going to use that one. Let's replace that one. Try a different LLM in it. Run it again. <strong>Boom. You've got your results all on the screen.</strong>"
</div>

<div class="mt-4 text-sm opacity-60">
对比维度可以是"agent 框架"，也可以是"同 agent 换 LLM"（GPT vs Sonnet vs GPT-3.5 Turbo 这种）。
</div>

---

# 一个聪明的评测技巧：让 LLM 当评委

<div class="mt-4 text-base opacity-80">
嘉宾自己写过的一个 OCR 评测 pipeline：
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="font-bold mb-2">流程</div>
<ol class="list-decimal list-inside space-y-1 opacity-80">
<li>拖一张图到 "dropper"</li>
<li>分发到所有可用 OCR 模型（TR OCR / easy OCR / 手写专用…）</li>
<li>每个模型产出 text</li>
<li>把全部 text 喂给一个 LLM，问："which is the best one"</li>
<li>LLM 给排名</li>
</ol>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="font-bold mb-2">关键洞察</div>
<div class="italic opacity-80 mb-2">"OCR has broad variances on how good it is depending on the model."</div>
不同图片就是不同 use case；<br>
不同 use case 应该用不同 OCR；<br>
所以评测要 <strong>per-use-case</strong>。
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
扩展到任何 node：embedder、anonymizer、sentence transformer …… 两分钟内拿到一个"对这个特定输入"的排名。
</div>

---
layout: two-cols
---

# Thursday：12 + 9 小时的 Crew AI 噩梦

嘉宾被问到"最近的真实 bug" —— 给了这个：

- 想让 Crew AI 同时跑三个 chat
- 三条 prompt：写一篇 500 字关于狗 / 猫 / 大象的故事
- 用的是 Crew AI 的 <strong>同步</strong> API

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<div class="font-bold mb-1">结果</div>
<ul class="list-disc list-inside opacity-80 space-y-1">
<li>狗的故事里混进了猫</li>
<li>大象的故事直接挂死</li>
<li>所有 thread 互相踩，因为有 global variable</li>
</ul>
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs italic">
"I spent like 12 hours on Thursday and then I got up at six o'clock in the morning and spent another nine hours on it."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./async-collision.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 async 是地基

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">
"We can run 256 threads concurrently without all the models stepping all over themselves. 60 chats, 60 people can actually be chatting with this thing at the same time without it falling over."
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<div class="font-bold mb-1">Python 的诅咒</div>
sync 和 async 两个世界。<br>
Crew AI（async）+ 某 OCR（sync）放一起，<strong>必须</strong>手动 <code>asyncio.run</code> / <code>asyncio.to_thread</code> 套层 ——
<span class="italic opacity-80">"Claude misses that a lot."</span>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="font-bold mb-1">框架的回报</div>
社区级修复一次，所有人受益：<br>
<span class="italic opacity-80">"as the community discovers these kinds of issues … everybody else benefits and you no longer see that problem."</span>
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
另一个嘉宾的提醒："Have you tried 10 chats throwing it at it?" —— demo 是 1 chat，生产是 N chat。
</div>

---

# Runtime observability：管线在烧什么

<div class="mt-6 text-base opacity-80">
"Only thing that has to fail is one [node] and your result sucks."
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="font-bold mb-2">质量维度</div>
LLM 给的答案为什么不好？看每个 node 的<strong>输入 / 输出 / 实际 prompt</strong>。
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<div class="font-bold mb-2">延迟维度</div>
某个 agent 慢 —— "you can dig in and understand where the latency is coming from."
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<div class="font-bold mb-2">错误维度</div>
哪一步炸了？哪个 LLM 返回了什么？是否给了一张坏图？
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<div class="font-bold mb-2">在哪用得最多</div>
不是 dev 阶段 —— 是 <strong>production</strong>。<br>
<span class="italic opacity-70">"how many production systems actually have VS Code debugger connected to it?"</span>
</div>

</div>

---

# Cost observability —— "为什么 AWS 一个月 $25,000？"

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded text-lg italic">
"My CEO says: We spent $25,000 a month on AWS. And it's like, why? Where did that go? It's like, I don't know."
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold mb-1 text-sm">CFO 视角</div>
<div class="text-sm opacity-80 italic">"engineers just want to get it to work. The CFO says: I'm not going to pay the bills."</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1 text-sm">框架视角</div>
<div class="text-sm opacity-80">每个 token、每个 node 调用都打点。哪条 chain、哪个 LLM、哪种 prompt 在烧钱 —— 都能下钻。</div>
</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
嘉宾的判断："the next year or two years, you're going to see a lot of pressure coming on operational cost." —— 现在大家忙着"让它跑通"，下一波是"让它便宜"。
</div>

---

# Auto-research 的梦：让 LLM 自己换便宜模型

<div class="mt-4 text-base opacity-80">
Demetrios 提出的猜想 —— 嘉宾立刻接住：
</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="font-bold mb-2">想法</div>
取出过去 N 次 production traffic 的输入 / 输出 →<br>
用便宜 LLM 重跑一遍 →<br>
比较结果 →<br>
够好就切换。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="font-bold mb-2">为什么 attractive</div>
<div class="italic opacity-80 mb-2">"As long as you know what that end goal is, it will [optimize]."</div>
新 LLM 周更，能力不退化，价格在掉 —— 不重测就是亏。
</div>

</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<div class="font-bold mb-1">实际成本</div>
<div class="italic opacity-80">"You may spend some money going for it. So it totally defeats the purpose of … saving money by running auto research for the next 24 hours and burning a bunch of cash."</div>
所以这是个 <strong>"如果今年都要跑这个 pipeline，省一半可能值得多花一次"</strong> 的赌注。
</div>

---

# Rocket Ride Cloud —— 一台 GPU 服务 100 个客户

<div class="mt-2 text-sm opacity-80">
"普通做法": 100 个客户 → 100 份 easy OCR 散布在 100 张 GPU 上 → 利用率个位数。
</div>

<div class="mt-4 grid grid-cols-5 gap-2">

<div class="col-span-3">
<div class="text-sm opacity-80 mb-2">model server 做法：</div>
<ul class="text-sm opacity-80 space-y-1">
<li>一份 easy OCR 装在一张<strong>"big-ass GPU"</strong>上</li>
<li>请求 batch 成 64 / 128 channel 一起喂进去</li>
<li>队列拥堵自动起第 2 / 第 3 份</li>
<li>没用就 <strong>kick model out</strong>，换别的模型</li>
<li>用户按使用付费，不再为 24/7 空跑买单</li>
</ul>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs italic">
"You're actually paying 24/7 for a GPU that may be only used 5 minutes a day on a Whisper model."
</div>
</div>

<div class="col-span-2">
<div class="flex justify-center items-center h-full">
<Excalidraw
  drawFilePath="./model-aggregation.excalidraw"
  class="w-[380px]"
  :darkMode="false"
  :background="false"
/>
</div>
</div>

</div>

---

# "Lanes are isolated" —— 共享 GPU 怎么不串数据

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded text-base">
<div class="font-bold mb-1">读者的第一反应</div>
"我的数据 sensitive，你把我和别的公司放一张 GPU？"
</div>

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="font-bold mb-1">怎么做的</div>
推理时把请求 batch 成 64 / 128 个 channel 同时喂 GPU。<br>
"each individual channels."<br>
推理一结束，"on the back end we pull everybody's stuff off of it."
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="font-bold mb-1">边界</div>
<div class="italic opacity-80 mb-1">"Unless Nvidia has some really serious bugs and then does cross talk … there's absolutely no cross talk."</div>
"<strong>The lanes are isolated.</strong>" —— 复用的是算力，不是 context。
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>作者概括</strong>：共享 GPU 的关键不是"信任 cloud"，是"让 batched inference 这个原语本身就不允许跨租户读取"。
</div>

---

# 完全开源 —— 捐给 Linux Foundation

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">动作</div>
<div class="font-bold text-lg">Donated</div>
<div class="text-sm opacity-80 mt-2 italic">"Yeah, we donated it. We donated it all to a foundation."</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">归属</div>
<div class="font-bold text-lg">Linux / AIF</div>
<div class="text-sm opacity-80 mt-2">归到 AIF 基金会下，是 Linux Foundation 的一部分。</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">范围</div>
<div class="font-bold text-lg">All of it</div>
<div class="text-sm opacity-80 mt-2">"The C++, the Tika code and Java and all the Python is all open source."</div>
</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
商业模式落在 cloud：开源框架 + 托管 runtime（model server 聚合、对接 OpenAI / llama-parse 拿批量价、单一 API key）。<br>
<span class="opacity-60">"Same kind of deal that … most AI companies like NoVAS and Quadrant — they have the open software and then they have this hosting software."</span>
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-2">挑出这期最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Coding is no longer the bottleneck. … The bottleneck just moves somewhere else."
<span class="text-xs opacity-60 not-italic">  — 关于开发者的新坐标</span>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"You end up with spaghetti code that's not worth actually shipping."
<span class="text-xs opacity-60 not-italic">  — Claude 能 run 不等于能 ship</span>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"I program in English, obviously."
<span class="text-xs opacity-60 not-italic">  — 从 Z80 一路到 Claude 之后的自我定位</span>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"It's the plumbing. It's not the actual AI calls. It's the plumbing … that these coding agents usually screw up."
<span class="text-xs opacity-60 not-italic">  — 为什么需要框架</span>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"I spent like 12 hours on Thursday … and spent another nine hours on it."
<span class="text-xs opacity-60 not-italic">  — 一个真实 bug 的代价（Crew AI 同步 API）</span>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"We spent $25,000 a month on AWS … Why? Where did that go? I don't know."
<span class="text-xs opacity-60 not-italic">  — 即将到来的 CFO 时代</span>
</div>

</div>

---
layout: end
---

# AI 很快，但 AI 项目还很慢

<div class="mt-8 text-lg italic opacity-80">
"The cost savings thing is huge, man. And I think that more and more as time goes on, folks are going to just start asking for that."
</div>

<div class="mt-12 text-sm opacity-50">
MLOps Community · 2026-06 · 1 小时<br>
Rocket Ride · open-sourced under AIF / Linux Foundation
</div>
