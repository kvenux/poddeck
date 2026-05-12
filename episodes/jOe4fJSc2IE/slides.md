---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The Modern Software Engineer'
info: |
  MLOps.community · Mihail Eric × Demetrios · 2026 · ≈ 54 min
  当 junior 进不来,senior 在飞,token 一夜烧光,Twitter 上 15 个 tiled claw code instances 在循环——
  Mihail Eric 把这一摊 AI coding 的真实问题挨个摊开讲.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<style>
.deck-kicker { color: #64748b; font-size: 0.92rem; }
.muted { color: #64748b; }
.chip { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 999px; padding: 0.25rem 0.7rem; font-size: 0.78rem; color: #334155; background: #f8fafc; }
.tiny { font-size: 0.78rem; color: #64748b; line-height: 1.5; }
.quote-block { font-family: "Source Serif Pro", "Georgia", serif; font-style: italic; }
.label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; font-weight: 600; }
</style>

# The Modern<br/>Software Engineer

<div class="deck-kicker mt-6">MLOps.community · Mihail Eric × Demetrios · 2026 · ≈ 54 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">junior gap</span>
  <span class="chip">validation harness</span>
  <span class="chip">token → task pricing</span>
  <span class="chip">parallel agents meme</span>
  <span class="chip">smaller teams</span>
  <span class="chip">articulation</span>
  <span class="chip">just breathe</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Mihail Eric 是 ML / AI infra 老 practitioner,这期跟 Demetrios 在 San Francisco 面对面聊了一小时:
怎么招 junior、怎么验证 agent 的活、token 计费什么时候被替换、十几个并行 agent 到底在干嘛、
团队该不该变小、孩子(和工程师)该练的硬核能力到底是哪一项. 没有 framework,全是 day-to-day 的判断.
</div>

---

# 这一小时里的八条主线

<div class="grid grid-cols-4 gap-3 mt-5">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">① Junior 怎么进得来</div>
<div class="text-xs mt-1 text-slate-700">"replaced by cursor" + 训练链断裂</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">② Validation 是最关键的一步</div>
<div class="text-xs mt-1 text-slate-700">Eno @ Factory:harness 决定一切</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">③ Long-running 任务还没那么多</div>
<div class="text-xs mt-1 text-slate-700">"5 分钟就回来,长任务在哪?"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">④ Token → Task pricing</div>
<div class="text-xs mt-1 text-slate-700">TaskRabbit 模型:只为成果买单</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">⑤ FOMO + 工具切换</div>
<div class="text-xs mt-1 text-slate-700">挑 top 3 一个,深耕</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ 并行 agent 神话</div>
<div class="text-xs mt-1 text-slate-700">15 个 tile,真在干嘛?</div>
</div>

<div class="p-3 rounded bg-cyan-50 border-l-4 border-cyan-500">
<div class="text-sm font-bold text-cyan-900">⑦ AI-native team</div>
<div class="text-xs mt-1 text-slate-700">PM 提 PR、designer 写代码、团队变小</div>
</div>

<div class="p-3 rounded bg-pink-50 border-l-4 border-pink-500">
<div class="text-sm font-bold text-pink-900">⑧ Just breathe</div>
<div class="text-xs mt-1 text-slate-700">不是每条 tweet 都得跟</div>
</div>

</div>

<div class="mt-6 tiny">
两位嘉宾在 SF 的 podcast 录音棚边吐槽边聊,中间穿插一个 fake name-drop 整蛊段子.
你听完会发现:很多被 Twitter 包装成"必须立刻 adopt"的工作流,在 Mihail 嘴里都是一句"再观察一下".
</div>

---
layout: two-cols
---

# Junior 的训练链断了

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>Junior 的内心独白</strong><br/>
<span class="text-xs text-slate-700">"holy crap, what are we gonna do? I need to actually get a job here,
but no one wants to hire me because I can just be replaced by cursor."</span>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Senior 没事</strong>——他们已经在那儿了
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>断的是中间</strong>:你 typically 招 junior、训练他们成 senior,
现在这条 pipeline 直接被 cursor 截断
</div>

</div>

<div class="mt-4 tiny">
Mihail 提出的解法:既然 agent 能 generate code,它大概也能 understand code——
"arguably better if not at the same level". 让 agent 来填这一格.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./training-gap.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 当 agent 写出你不熟的实现,要不要接受?

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">Demetrios 的实际操作</div>
<div class="text-sm mt-2">"I've come to just accept everything."<br/>
试不通就 reprompt,反正它最后能 figure it out.</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Mihail 的分歧</div>
<div class="text-sm mt-2">看任务:<br/>
core infrastructure → 要 stronger say on architecture<br/>
Next.js / Vue 那种你没强意见的领域 → "it's seen this a good number of times",当一个不错的 prior</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
他说一句很有意思的话:不去 mock 工程师那种"agent 是创造性的"叙事,
但 agent 给你一个你不知道的 pattern,这<strong>就像有人来跟你介绍一个新方案</strong>——你该尊重你不懂的部分.
</div>

---

# 一个反直觉的发现:JavaScript 对 agent 最难

<div class="mt-5 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label text-yellow-700">Demetrios 转述 Chip Huyen 在 Agents in Production 上的发现</div>
<div class="text-2xl mt-3 font-semibold">不是 Rust,不是 Python——是 JavaScript</div>
<div class="text-sm mt-3 text-slate-700">
"Because there's so much shitty JavaScript on GitHub."<br/>
模型训练时看了一大堆烂代码,出来的 token 自然也烂.
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-center">
<div class="text-xs label text-blue-700">直接含义</div>
<div class="text-sm mt-2">训练分布 = 输出分布</div>
</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-center">
<div class="text-xs label text-purple-700">间接含义</div>
<div class="text-sm mt-2">想让 agent 在你的领域强,先把 high-quality 代码喂回去</div>
</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-center">
<div class="text-xs label text-green-700">实操含义</div>
<div class="text-sm mt-2">前端基础设施可能比想象的更"看脸"</div>
</div>
</div>

---
layout: two-cols
---

# Eno @ Factory 的核心论点

Mihail 跟 Factory CTO Eno 聊过一阵,Eno 的 thesis 一句话:

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="quote-block text-sm">
"the most crucial piece that you have to get right as a developer is...
the validations, the testing harness, the checks to make sure that if you let the agent go off autonomously on one small task, on many many tasks for single agent, on many tasks for many agents,
at the very least there's some set of checks you put in place that the agent can validate that it's correct."
</div>
</div>

<div class="mt-4 tiny">
浏览器自己打开点点 · backend 跑一遍 test · build 不挂——
任何一种"会喊救命的机制"都比没有强.
人现在最强的 leverage,就是站在那道 validation 的门里.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./validation-loop.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但 validation 也有边界

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm">
Demetrios:"Validating everything... that's probably one of the hardest pieces of it."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">容易 verify</div>
<div class="text-sm mt-2">单元测试 · 集成测试 · 类型检查 · 编译 · UI snapshot</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">现在还没法 easily verify</div>
<div class="text-sm mt-2">拿外部 API key · 改 DNS 路由 · 真实流量影响 · production infra</div>
</div>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
Eno 在跟 Mihail 聊 missions(他们的 long-running agent)时,
正在边界上摸索:"reaching almost like the frontier of what is verifiable or what is easily validatable, if that's a word."
</div>

---
layout: two-cols
---

# Long-running agent · 在被推外

Demetrios 的观察:"It's just like Moore's law type of thing, where it's doubling every six months."

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Factory · missions</strong><br/>
<span class="text-xs">"long running autonomous agents... can I launch them for an hour, multiple hours, multiple days, multiple weeks?"</span>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Cursor · Anthropic · Devin</strong><br/>
<span class="text-xs">都在写 blog post,都在试同一个问题</span>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>移除时间约束之后</strong>——能做什么?<br/>
<span class="text-xs">"what is possible if you remove the constraint of time?"</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./time-frontier.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 现实是:你的任务 5 分钟就回来

<div class="mt-5 p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="quote-block text-base">
Demetrios:"I will try and kick off these tasks where I'm like, oh, this is a meaty one.
And then next thing you know, it's like 10 minutes later, or even five minutes later,
I'm getting hit with 'alright, it's all done.'<br/><br/>
<strong>Where are these long running tasks that we're talking about? Because I can't find them.</strong>"
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Mihail 的反驳一</div>
<div class="text-sm mt-2"><strong>It's important to find them.</strong>
你需要那个 sweet spot 的时长才能 context-switch 出去做别的事.</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">Mihail 的反驳二</div>
<div class="text-sm mt-2">brownfield code base + extensive testing suite,
"verification takes hours" —— 那才是真正的 meaty 入口.</div>
</div>

</div>

---

# Deep work 还存在吗?

<div class="mt-5 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-sm">
<strong>Mihail:</strong> "where does deep work still exist? What does deep work mean for a developer?
'cause deep work almost requires... definitionally when you... like kind of brain science is like,
at least like 20 to 30 minutes... <strong>just get into something and flow.</strong>"
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-center">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-xs label text-blue-700">需要 deep work</div>
<div class="text-sm mt-2 font-semibold">spec / design / arch</div>
<div class="text-xs mt-1 text-slate-600">你必须深度 involved</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-xs label text-yellow-700">交给 agent 的 sweet spot</div>
<div class="text-sm mt-2 font-semibold">几十分钟级</div>
<div class="text-xs mt-1 text-slate-600">长到可以 switch 出去做别的</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs label text-green-700">什么算 meaty</div>
<div class="text-sm mt-2 font-semibold">定义在漂移</div>
<div class="text-xs mt-1 text-slate-600">"constantly shifting"</div>
</div>

</div>

---

# Brownfield 的迭代循环 · 才是 agent 真正的 meat

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Mihail 用 Moogle 假名举例</strong>(假装不是 Google):多 million 行代码 base,
最小的改动也得跑一整套 testing suite —— "<strong>it takes hours</strong>". 这里才是 agent 长任务的入场.
</div>

<div class="mt-5 grid grid-cols-4 gap-3 text-center">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-xs label text-blue-700">①</div>
<div class="text-sm mt-1 font-semibold">Try a thing</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs label text-green-700">②</div>
<div class="text-sm mt-1 font-semibold">Build a thing</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-xs label text-orange-700">③</div>
<div class="text-sm mt-1 font-semibold">Test a thing</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-xs label text-red-700">④</div>
<div class="text-sm mt-1 font-semibold">Fix based on error</div>
</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"one shot, make a whole thing, that's fine. But if you don't have, like, the tests are where you have to keep kind of hitting." —— <strong>Demetrios 接:"that's where the rubber hits the pavement."</strong>
</div>

---

# 团队层面 · It's a moving goalpost

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="quote-block text-base">
Mihail:"<strong>It's a moving goalpost, honestly, and no one has the answer here.</strong>
I think so much of what we're discovering a lot, I think as a community, everyone has like a hypothesis..."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">短期是 cybernetics 问题</div>
<div class="text-sm mt-2">"feedback loops in systems and how do you oversee those feedback loops"
—— 这一套理论几十年前就有,只是这次才被推到实战.</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">实战是 process 问题</div>
<div class="text-sm mt-2">lunch and learns · shared Slack channel · 一个 centralized team
专门 institute best practices —— 跟 internal dev UX team 几乎是同一套.</div>
</div>

</div>

---

# 20-30% 的提升后,真正卡住团队的事

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
"Everyone has Claude Code access. Everyone has cursor access... and they start seeing the gains... <strong>hitting like that 20 to 30% mark or something.</strong>"
</div>

<div class="mt-5 grid grid-cols-3 gap-4">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">Top 1% 用户的 setup</div>
<div class="text-sm mt-2">"intricate setups"<br/>—— 不一定更 helpful,但至少更 thoughtful</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">Median 用户</div>
<div class="text-sm mt-2">prompts "fairly vanilla"</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">真问题</div>
<div class="text-sm mt-2">怎么让每个人都长成 top 1%?<br/>
怎么写 AGENTS.md?谁来管 skills?</div>
</div>

</div>

<div class="mt-4 tiny">
Mihail 的预测:这套责任很可能就落到现有的"internal developer infrastructure / dev success"团队头上.
跟 CI 一样,有一队人确保新人 day-1 就能 productive.
</div>

---
layout: two-cols
---

# Token 是个 implementation detail

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>Mihail:</strong> "tokens is like an implementation detail...
input token / output token / cached tokens / reasoning tokens
—— you don't really care too much about the trajectories."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>核心论断:</strong> "<strong>tokens are just a proxy for the trajectory that the agent took.</strong>"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>未来 pricing:</strong> 按"task completion 的某种 flavor"计费——
你定义任务,你定义 success criteria,agent 自己去 huff and puff.
</div>

</div>

<div class="mt-4 tiny">
TaskRabbit 类比:你雇人组家具、洗衣服,你不在乎他坐了一小时再五分钟搞定——
你只在乎事情做完了.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-vs-task.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Ralph Loop:为什么 token 计费撑不住

<div class="mt-5 p-5 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>Mihail 描述 Ralph Loop:</strong> "you literally just <em>while</em>-loop something and you keep trying
... it's just while-truing until it completes something
—— <strong>very token inefficient in a lot of ways.</strong>"
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">用户视角</div>
<div class="text-sm mt-2">只想要"任务完成". 中间它跑了 1 次还是 1000 次,无所谓.</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">Provider 视角</div>
<div class="text-sm mt-2">按 token 收钱意味着 — 重试越多用户越亏.
迟早会有一方先转向 outcome-based 定价.</div>
</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
Demetrios 把这个问题推到下一个层级:<strong>非 model 公司</strong>怎么办?他们既是大客,又是 model 厂的潜在竞争对手——
"They're going and buying dinners with the providers, but they're also building their own version of that."
</div>

---

# Claude Code 一年从零到几十亿?

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Demetrios 抛的数字</div>
<div class="text-3xl mt-2 font-bold text-blue-700">$14 B</div>
<div class="text-xs mt-2 text-slate-600">"the revenue for Claude Code is at like 14 billion now"
—— Demetrios 自己加了一句 "maybe somebody will have to fact check me on that."</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">Mihail 的修正</div>
<div class="text-sm mt-2">
"if it's a billion, that's a lot... I suspect probably in the handfuls of billions at this point.
Their growth has been astronomical."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>作者概括</strong>:无论具体数字,Mihail 的判断是这块业务"零到 handful of billions"只花了一年——
这种斜率会反过来推动整个 pricing model 的演化方向.
</div>

---

# 关于工具切换 · 别再 micro optimize 了

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"people micro optimizing the hell out of their setups and... enjoying the setup optimization,
glorifying it more so than the actual thing that they're trying to do."
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Mihail 的 prescription</div>
<div class="text-base mt-2 font-semibold">
"Picking one of the top three and sticking with it"
</div>
<div class="text-sm mt-2 text-slate-700">
真正花时间去 exercise muscle:怎么用这个工具思考系统设计——
而不是每出一个 benchmark 就跳一次船.
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">什么时候允许切</div>
<div class="text-sm mt-2 text-slate-700">
有<strong>downtime</strong> —— Anthropic 挂了换 Codex,Codex 挂了换 Cursor.
Reddit 上每次故障都重演一遍 "X is the best thing since sliced bread".
</div>
<div class="text-xs mt-2 text-slate-600">"comical to see this thing play out in real time"</div>
</div>

</div>

---
layout: two-cols
---

# 15 个 tile 的 Claude Code · 在干什么?

<div class="mt-4 space-y-3">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"you'll show the video of someone like panning across their three screens and there's like
<strong>15 tessellated tiled claw code instances</strong>, and they're just like going, and it's become like a meme at this point."
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
"<strong>circular view of yourself of like 700 agents</strong>" —— Mihail 直接说:"I don't buy it."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
Demetrios:"What are they working on? Tell them..."
</div>

</div>

<div class="mt-4 tiny">
被 Twitter 反复放大的 "并行 10/50/700 agents" 视频,Mihail 的立场:不买账.
不是说不可能,是说大多数人没有那么多 meaty 任务可以同时 spec 清楚.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./parallel-meme.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 真正能 scale 的工作流:2 meaty + N 轻活

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">2 个 really meaty 任务</div>
<div class="text-sm mt-2">
"heavily involved with as a human... review spec docs, feature requirements...
injecting your own taste, design principles, understanding architecture."
</div>
<div class="text-xs mt-2 text-slate-600">这是你的 deep work 那两格</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">一堆 not-so-meaty 任务</div>
<div class="text-sm mt-2">
"change a configuration file, make a small refactor, add a test... <strong>not such meaty tasks actually by design</strong>"
</div>
<div class="text-xs mt-2 text-slate-600">你不必 over-prompt,直接 kick off</div>
</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>Mihail 的建议路径:</strong> 先把"1 个 agent"做精,加到 2 个练 context switching,
等真的有 downtime 不想 doom-scroll 时再 kick off 第三个去修小 bug. 不要一上来就开 15 个.
</div>

---

# AI-native team · 角色边界全在松动

<div class="mt-5 grid grid-cols-3 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Engineer</div>
<div class="text-sm mt-2">"my own responsibility is not finger on keyboard. <strong>It's designing, it's architecting</strong>"</div>
<div class="text-xs mt-2 text-slate-600">+ 戴上 product hat</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">Product Manager</div>
<div class="text-sm mt-2">"our product people can <strong>put up PRs</strong>... not willy-nilly pushed to prod,
but meaningfully kicking off little few-line changes"</div>
<div class="text-xs mt-2 text-slate-600">不用再排 story points 等工程师</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">GTM / Sales</div>
<div class="text-sm mt-2">"have given the tools to our own teams to ask Claude...
get the most up-to-date source of truth"</div>
<div class="text-xs mt-2 text-slate-600">不用 ping 工程师问"我们 ship 了啥"</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"people on the right coming to the left, people on the left coming to the right...
<strong>everyone is upleveling.</strong>" —— 不是合并成一个角色,是每个角色多了一截能力.
</div>

---
layout: two-cols
---

# 团队该变小吗?

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>过去的预设</strong>:more people = more output.
Mihail:"<strong>it was never true that if you doubled an engineering team, you doubled output.</strong>"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>原因</strong>:N 个人 → N² 通信成本. 这是<em>人</em>的问题,不是工程的问题.
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>反过来推:</strong> 人少 → context 在每个人脑里更"<strong>concentrated</strong>" → 速度更快.
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Live reliability 也偏好小团队:</strong> "you're some something goes down... it takes you time to understand
how this was set up. Who's responsible. Usually even then, you're not that comfortable making the change."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./team-shape.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个人的十亿美元创业公司 · 现实是什么样?

<div class="mt-5 p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm">
"imagine they're offsite. It's just you by yourself at a, having dinner...<br/>
'Hey, let's get a rundown from our CFO.' You go and put on like a mustache.
'What does our marketing person think?' You wanna put on a hat?<br/>
<strong>It's like that Pablo Escobar meme from Narcos</strong>, you know, where he's like, waiting, waiting."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">生产力维度</div>
<div class="text-sm mt-2">小是好.<br/>context 浓度 = 速度上限</div>
</div>

<div class="p-4 bg-pink-50 border-l-4 border-pink-500 rounded">
<div class="label text-pink-700">人类幸福感维度</div>
<div class="text-sm mt-2">"different effect, but not insignificant"<br/>—— offsite 上只有你一个人,挺凄凉</div>
</div>

</div>

<div class="mt-4 tiny">
Mihail 一直在提醒:不是所有事都是 productivity 的目标函数. 团队组建这件事,本质上你在 optimize 什么,自己得想清楚.
</div>

---

# Planning & delegation · Junior 一上来就在管 agent

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Mihail:</strong> "<strong>planning and delegation, I think are still undervalued. And yet super crucial.</strong>
If you wanted to kick off multiple agents and have them do meaningful work,
then you have to be the one delegating and being the technical lead on their work."
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">过去的轨迹</div>
<div class="text-sm mt-2 font-mono leading-relaxed">
SWE 1 → 1 yr<br/>
SWE 2 → 2 yr<br/>
Senior → 3 yr<br/>
→ Manager 在 year 6
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">现在的轨迹</div>
<div class="text-sm mt-2">
"<strong>the moment they start instituting multiple agents... they are effectively managers.</strong>"
</div>
<div class="text-xs mt-2 text-slate-600">Demetrios 接一句:"now there's no IC choice"</div>
</div>

</div>

<div class="mt-4 tiny">
副作用:管 agent 不必处理人际关系,这对一部分人是好事——"never wanna talk to a human being in my life, put me in a room with my terminal and my IDE."
对另一部分人则是把 inspiring leader 那条路也给堵了.
</div>

---

# Articulation = 下一代 superpower

<div class="mt-5 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-sm">
<strong>Demetrios:</strong> "the skill that I really appreciate and wanna work more on is my ability to articulate...
how do you articulate what you are needing, what you want, what good enough is, what success looks like."
</div>
</div>

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm">
"if you can properly articulate things, give the right context.
<strong>That is a superpower and it's only going to get rewarded more as time goes on.</strong>"
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-center">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<div class="text-xs label text-red-700">Demetrios 自嘲</div>
<div class="text-sm mt-2 font-semibold">"words are hard"</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs label text-green-700">Mihail 的反应</div>
<div class="text-sm mt-2">"that's a fantastic point, honestly. It's a forcing function for us to get better at words."</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-xs label text-purple-700">不练的代价</div>
<div class="text-sm mt-2">"you don't speak clearly, you're gonna be misconstrued with people and certainly with agents"</div>
</div>

</div>

---

# Mini R&D departments · 大家都在前线侦察

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="quote-block text-base">
Demetrios:"what I love about this time is that we're all <strong>our own little mini R&D departments</strong>...
we are reporting back, and that's the cool thing."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">Demetrios 的诠释</div>
<div class="text-sm mt-2">
有公司同时看到几百几千个团队的样本——这种"summary on summaries"是单点 doom-scroll 拿不到的.
</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">Mihail 的呼应</div>
<div class="text-sm mt-2">
"engineers love sharing. That's why open source is such a core pillar of what we do.
Giving forums for that to happen organically is healthy."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
反面:Twitter doom-scrolling 让你被一堆永远不会跟你对话的陌生人左右情绪——
"somehow they have such a huge influence on what you're thinking and feeling."
</div>

---

# Just breathe · 这一期最反 Twitter 的建议

<div class="mt-5 p-5 bg-pink-50 border-l-4 border-pink-500 rounded">
<div class="quote-block text-lg">
"one of the things that I genuinely am trying to get people to appreciate is...
<strong>just to breathe.</strong> Like, in a very meta sense, just like, breathe."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">不练这一项的下场</div>
<div class="text-sm mt-2">
"if you're not on it, you are gonna be left behind <strong>cooked</strong>.
You're cooked. Like I think it is a technical term."
</div>
<div class="text-xs mt-2 text-slate-600">焦虑里的工程师抓什么 tweet 就照做</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">Mihail 的提醒</div>
<div class="text-sm mt-2">
"things are moving incredibly quickly... <strong>accept that as part of the process.</strong>
Experimentation is gonna be part of the process. We're developers, we love building."
</div>
</div>

</div>

<div class="mt-4 tiny">
San Francisco 满街 ketamine 广告 · Burning Man 在租 SF 楼里一整层办公——
两个人在录音棚里互相提醒:这事儿急不来,深呼吸,继续干.
</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句(每一句都已 grep 验证):</div>

<div class="space-y-2">

<div class="p-2.5 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"no one wants to hire me because I can just be replaced by cursor."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Mihail,转述 junior 的内心独白</div>
</div>

<div class="p-2.5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"It's a moving goalpost, honestly, and no one has the answer here."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Mihail,关于团队怎么用 agent</div>
</div>

<div class="p-2.5 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"tokens are just a proxy for the trajectory that the agent took... maybe these companies actually start pricing based on... task completion."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Mihail,关于 pricing model 的未来</div>
</div>

<div class="p-2.5 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"Where are these long running tasks that we're talking about? Because I can't find them."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Demetrios,关于 long-running agent 的现实</div>
</div>

<div class="p-2.5 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"the moment they start instituting multiple agents... they are effectively managers."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Mihail,关于 junior 一上手就在管 agent</div>
</div>

<div class="p-2.5 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"if you can properly articulate things, give the right context. That is a superpower."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Demetrios,关于下一代核心能力</div>
</div>

<div class="p-2.5 bg-pink-50 border-l-4 border-pink-500 rounded italic text-xs">
"one of the things that I genuinely am trying to get people to appreciate is... just to breathe."
<div class="text-xs opacity-60 mt-0.5 not-italic">— Mihail,这期最反 Twitter 的建议</div>
</div>

</div>

---
layout: end
---

# "You're not gonna lose your job immediately<br/>—— or maybe if at all,<br/>if you learn how to uplevel<br/>and upskill in the right ways."

<div class="mt-8 text-sm opacity-60">— Mihail Eric · MLOps.community · 2026</div>
