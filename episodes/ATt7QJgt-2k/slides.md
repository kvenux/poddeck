---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Notion 的 Sarah Sachs & Simon Last 聊 Custom Agents、Evals 和工作的未来'
info: |
  Latent Space · Sarah Sachs × Simon Last × swyx & Alessio · 2026 · ≈ 84 min
  Notion 把 agent 重写了 5 次,从 2022 年的 GPT-4 一路撞到 100+ 工具的 Agent 2.0,
  这一期他俩把"为什么这么慢"和"现在为什么终于行了"都摊开讲.
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
.label { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; font-weight: 600; }
</style>

# Notion 的 Custom Agents<br/>是怎么炼出来的

<div class="deck-kicker mt-6">Latent Space · Sarah Sachs × Simon Last × swyx & Alessio · 2026 · ≈ 84 min</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">5 次重写 harness</span>
  <span class="chip">notion's last exam</span>
  <span class="chip">100+ tools</span>
  <span class="chip">manager agent</span>
  <span class="chip">CLI vs MCP</span>
  <span class="chip">credits ≠ tokens</span>
  <span class="chip">replacing processes</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Sarah Sachs 管 Notion 的 core AI capabilities & infra 团队(~50 人),Simon Last 是联创、自 2022 年起在亲手撕 agent 这个题.
这一小时半,他们把 demo 做了一半的 custom agents 拆开讲: 怎么从 GPT-4 时代的"勉强能 prototype"
熬到今天的 background-running agent,一路上踩过哪些坑,以及为什么"replacing processes"比"replacing people"
更准确.
</div>

---

# 这一期 84 分钟里的 7 条主线

<div class="grid grid-cols-4 gap-3 mt-5">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">① 三年五次重写</div>
<div class="text-xs mt-1 text-slate-700">从 coding agent → XML → markdown → SQL → Agent 2.0</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">② 直觉是组织肌肉</div>
<div class="text-sm mt-1 text-slate-700">"swimming upstream" + "看河流方向"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">③ Notion's last exam</div>
<div class="text-xs mt-1 text-slate-700">主动把 evals 留在 30% 通过率</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">④ 100+ tools 的解法</div>
<div class="text-xs mt-1 text-slate-700">progressive disclosure · 分布式 ownership</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑤ MCP 和 CLI 不打架</div>
<div class="text-xs mt-1 text-slate-700">不同抽象层、不同成本结构</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">⑥ Credits ≠ tokens</div>
<div class="text-xs mt-1 text-slate-700">value alignment · auto 模型挑选</div>
</div>

<div class="p-3 rounded bg-cyan-50 border-l-4 border-cyan-500">
<div class="text-sm font-bold text-cyan-900">⑦ 不是替人,是替流程</div>
<div class="text-xs mt-1 text-slate-700">manager agent · system of record</div>
</div>

<div class="p-3 rounded bg-pink-50 border-l-4 border-pink-500">
<div class="text-sm font-bold text-pink-900">⑧ 软件工程师身份危机</div>
<div class="text-xs mt-1 text-slate-700">2026 年夏天的 collective shudder</div>
</div>

</div>

<div class="mt-6 tiny">
Sarah 半路打断 Simon 抱怨预算超支、Simon 一晚要把 agents 排好队再睡觉——这种工作日常贯穿全场.
听完会发现: Notion 把"不是 wrapper"挂在嘴边,是因为 wrapper 早就不是利润来源了.
</div>

---
layout: two-cols
---

# Sarah 的两条直觉

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>第一条 — 别逆流</strong><br/>
<span class="text-xs text-slate-700">是模型能力不够,还是你没把信息喂对、infra 没搭好? 先快速判别.</span>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>第二条 — 看河流方向</strong><br/>
<span class="text-xs text-slate-700">就算现在还不行,也开始建 — 等能力到了你已经在那儿等着.</span>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>反例: tool-calling 出现前就 fine-tune tool-calling</strong><br/>
<span class="text-xs text-slate-700">"硬要 fine-tune 一个 tool calling model — 那时根本还没有这种东西". 关键是别这么做太久.</span>
</div>

</div>

<div class="mt-4 tiny">
Sarah 把这两条挂在嘴边给候选人看,因为它们解释了为什么 Notion 在 2022 末就开始撞 agent,
而不是等"reasoning models 出了再说".
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./river.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么 agent 拖了三年才能跑后台

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">2022 末的尝试</div>
<div class="text-sm mt-2">Simon: "在我们刚拿到 GPT-4 的时候,头几个想法之一就是给它接上所有 Notion 的工具,
让它在后台帮我们干活."<br/><br/>
"试了好多次,it just was too early."</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">那时缺什么</div>
<div class="text-sm mt-2">
• tool calling 的概念都不存在<br/>
• 他们和 Anthropic / OpenAI 合作 fine-tune 函数调用模型<br/>
• 上下文太短<br/>
• 模型"too dumb"
</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Simon 自述拐点:</strong> "the big unlock was probably like Sonnet 3.6 or 7, early last year.
And that's when we started working on our agent."
<div class="text-xs text-slate-600 mt-2">注: transcript 写"Sonic"是 YouTube 自动字幕错认的 Sonnet</div>
</div>

---
layout: two-cols
---

# 三年内的 5 次重写

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 bg-slate-100 border-l-4 border-slate-400 rounded">
<strong>v1</strong> — 把所有事情都让 agent 写 JavaScript 调用<br/>
<span class="text-xs text-slate-600">"模型那时根本不会写代码,it sucked at writing code"</span>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>v2</strong> — 自创 XML tool format,few-shot 喂给模型<br/>
<span class="text-xs text-slate-600">"the model didn't know the XML format"</span>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>v3</strong> — notion-flavored markdown + SQL-light 查 database<br/>
<span class="text-xs text-slate-600">"models are super good at that"</span>
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>v4</strong> — 抛掉 few-shot,改 goal-driven tool definitions<br/>
<span class="text-xs text-slate-600">从 DAG 变成 true system with feedback</span>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>v5</strong> — 100+ tools + progressive disclosure<br/>
<span class="text-xs text-slate-600">现在还在做,即将上 custom agents</span>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-evolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Simon 的核心心法 — give the models what they want

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">v2 时期的错误做法</div>
<div class="text-sm mt-2">
设计了 lossless 映射 Notion blocks 的 XML 格式. 转换很方便、对工程师友好——
"but it sucked because the model didn't know the XML format".
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">v3 的修正</div>
<div class="text-sm mt-2">
"It has to be just simple markdown at the core, and then we can add some enhancements.
And it doesn't have to be a full lossless conversion."
</div>
</div>

</div>

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">同样的事情也在 database 层发生</div>
<div class="text-base italic mt-2">
"We scrapped all that and we're like, okay, let's just make it SQL Light. Everything is a SQL Light database.
You can query it just like a SQL Light query. And the models are super good at that."
</div>
</div>

<div class="mt-4 tiny">
原本 Notion 的 database query API 是个挺复杂的 JSON 格式,贴近内部表示但模型不熟. 改成 SQL-light 后立刻顺.
</div>

---

# AGI-pilled 但同时要发货

<div class="mt-5 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-base italic">
"You want to be AGI pilled and thinking ahead and building for where things are going.
But also you wanna be like shipping useful things. So we always try to keep a balance there."
</div>
<div class="text-xs text-slate-600 mt-2">— Simon Last</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">已发货</div>
<div class="text-sm mt-2">维护、打磨已经 ship 的功能</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">即将发货</div>
<div class="text-sm mt-2">eminently 能用、需要 polish 的</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">"a little bit crazy"</div>
<div class="text-sm mt-2">永远留 1–2 个押注未来的项目</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>当下最 AGI-pilled 的方向:</strong><br/>
"Coding agents are the kernel of AGI, sort of, everything is a coding agent." — Simon<br/>
他们正在搭"software factory" — 一组 agent 协同 dev / debug / merge / review / 维护代码库.
</div>

---

# 谁来运营这个团队 — Sarah 的 leadership tao

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">第一条</div>
<div class="text-sm mt-2">"My job was not to be the ideas person or the technical expert. My job was to make it
so that everybody understood the objective."<br/><br/>
不要让所有 idea 都过 leader 的"sniff test".</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">第二条</div>
<div class="text-sm mt-2">"You need to build a team that's comfortable deleting their own code and is very low ego
and is driven by what's best for the company."<br/><br/>
"And doesn't write design docs because they think it's their promotion packet."</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Simon Vortex</strong> — 内部对原型阶段团队的称呼: 高速、方向天天变,
senior engineer 进出自如,management boundaries are loose. "you report to him, but you work for her right now."
<br/>新招 manager 的硬条件之一: 不在乎汇报线.
</div>

---
layout: two-cols
---

# Demos over memos

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>设计师不画 mock</strong><br/>
他们有个独立 GitHub repo 叫 design playground,直接做完整 prototype,
"they give you a URL".
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>工程师的 prototype = 可以打开的 feature flag</strong><br/>
Simon: "for engineers, a prototype looks like just making it a feature flag that actually works."
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>员工就是用户</strong><br/>
Notion 全公司在同一个 instance 上工作,做票务的、采购的、招聘的全都用. 同一个 instance,一堆 flag 开着.
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>反作用力</strong><br/>
Sarah: "if anything can be demoed, you really need a strong filter" — 否则会做出"flat hill"而不是"tower".
</div>

</div>

::right::

<div class="mt-12 ml-4 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-xs label text-yellow-800">Brian Levin · Notion designer</div>
<div class="text-2xl mt-2 font-semibold italic">"demos over memos"</div>
<div class="text-xs text-slate-600 mt-3">这一句基本成了 Notion AI 团队内部口号.</div>
</div>

<div class="mt-4 ml-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>另一个内部说法:</strong><br/>
"everything we build is a little bit like a hackathon until it graduates and puts on big boy pants."
</div>

---

# Eval 系统本身就是个 agent harness

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Simon 最近做的事</div>
<div class="text-sm mt-2">
"You should be able to have an agent end-to-end download a dataset, run an eval, iterate on a failure,
debug, and implement a fix... drive the full time process with a human sort of observing the outer system."
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">用什么 coding agent</div>
<div class="text-sm mt-2">
"Claude Code... it should be totally general. I think it would be a mistake to fix it on any particular
coding agent. At the end of the day, it's just like CLI tools."
<div class="text-xs text-slate-600 mt-2">注: transcript 是 "cloud code",自动字幕错</div>
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Sarah 补一句:</strong> "It's like the same way that you would have a coding agent write the unit test.
You should have a coding agent write the eval."<br/><br/>
但监督还是要的——只是监督不必来自工程师. 来自 model behavior engineers.
</div>

---
layout: two-cols
---

# Notion's last exam

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>① CI regression</strong><br/>
跑在 commit hook 里,得过 — 像 unit test
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>② Launch quality report card</strong><br/>
按 user journey 评分,80–90% 才上线
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>③ Frontier / headroom evals</strong><br/>
"we actively wanna be at 30% pass rate"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>为什么主动要难</strong><br/>
"我们的 evals 饱和了,无法给出有洞察力的反馈" — 对 frontier labs 没价值,对自己也没价值
</div>

</div>

<div class="mt-3 tiny">
3 名全职员工只盯着第三层: 1 名 data scientist + 1 名 model behavior engineer + 1 名 evals engineer.
Notion 把这套和 humanity's last exam 类比着叫 "Notion's last exam".
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eval-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Model Behavior Engineer — Notion 的 secret weapon

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">起源</div>
<div class="text-sm mt-2">起初叫 "data specialist". Simon 在搞 Google Sheets 那一摊,
"just needed someone to look through Google Sheets and say, yes/no, this looks good/bad".
<br/><br/>
最早招了一个 linguistics PhD dropout 和一个 Stanford 应届生.</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">现在的形态</div>
<div class="text-sm mt-2">
"data scientist + PM + prompt engineer 的混合体"<br/><br/>
他们不再人工读代码——而是<strong>用 coding agents 写 evals 和 LLM judges</strong>.
他们也是 triage failures、决定下一步投资点的人.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Sarah 的核心立场:</strong><br/>
"We have always welcomed the misfits, so to speak. We really firmly believe that you don't need an
engineering background to be the best at this job."<br/><br/>
这是一条独立的 career path.
</div>

---

# 从一根 prompt 到分布式 tool ownership

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">v2 — few-shot 时代的瓶颈</div>
<div class="text-sm mt-2">
所有人改同一个 system prompt 字符串.<br/><br/>
"there were all these papers about, oh, you know, not all context is created equal. The higher up it is in
your examples, like the more the model listens, and we're trying really hard to fight against the order."<br/><br/>
只有 5–6 个人能动那个文件.
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">v4 — goal-driven 后</div>
<div class="text-sm mt-2">
"We could distribute tool ownership to the teams. Much better."<br/><br/>
每个产品团队 owns 自己的 tool 和 tool definition. 他们一边修自己产品的 bug,一边维护 agent 该怎么用它.<br/><br/>
The same team that built the underlying SQL engine owns how the agent calls it.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>意外的小事故:</strong> "we have crazy things where like we write two tools that have the same title
and the agent crashes." Sonnet 处理不了同名工具,GPT-5.2 可以. 通过 sev 学到的.
</div>

---

# 100+ tools 之后,progressive disclosure 救场

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">问题</div>
<div class="text-sm mt-2">
agent 工作得很好 → 工程师不停加新工具 → 模型被 nerf,过度调用某些工具.<br/><br/>
Sarah 当场吐槽: "saying hello was like thousands and thousands and thousands of tokens."
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">解法</div>
<div class="text-sm mt-2">
做 <strong>tool search</strong>: harness 实现 progressive disclosure,模型先看精简列表,需要时再展开.<br/><br/>
"We're fighting to keep the prompt as short as possible."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>Simon 透露:</strong> "in the latest version of the agent... there's now like over a hundred tools.
Just for all the crazy notion stuff."<br/><br/>
要列出来吗? "It's totally public. You can ask the agent and we'll tell you. We don't think our system prompt
is our secret sauce."
</div>

---
layout: two-cols
---

# CLI vs MCP — 两套抽象,不打架

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>CLI 的优势</strong><br/>
天然 progressive disclosure (help / read files);
<strong>bootstrapped</strong> — agent 出 bug 能自修;
有 terminal 提供的额外能力 (paginate / cursor)
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>MCP 的优势</strong><br/>
"the dumb simple thing that works";
强 permission model — "all you can do is call the tools";
适合窄、轻、严限权场景
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
<strong>CLI 的代价</strong><br/>
更"murky"——能否安全 re-encrypt token 不被 exfiltrate? 引入新的 hard-to-solve 安全问题
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>MCP 的代价</strong><br/>
传输坏了模型修不了; 写得糙就什么 tool 都暴露给模型
</div>

</div>

<div class="mt-3 tiny">
Simon: "I don't think there's an inherent strong conflict between these things." 不同抽象层、不同任务、不同代价.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tool-decision.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Notion 内部用什么 — 案例

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">用 MCP 的</div>
<div class="text-sm mt-2">
• Linear<br/>
• GitHub<br/>
<br/>
长尾的第三方接入靠 MCP server——所以他们也做了 Notion 自己的 MCP.
</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">自己手搓的</div>
<div class="text-sm mt-2">
• Slack 工具<br/>
• Notion Mail 工具<br/>
• <strong>Search</strong> — 包括 Slack / Linear / Jira / Notion 全都自己做<br/><br/>
理由: search 是 agent trajectory 的关键入口,要"高触感、高质量".
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Sarah 的另一个理由 — 经济:</strong><br/>
"requiring a language model to interface with third party providers seems wasteful for tasks that don't require it."<br/>
"if we can have our agents properly execute code that calls on CLI deterministically, it's a one-time cost,
versus constantly having a language model integrate with an MCP."
</div>

---

# Custom Agents 的"Flippy" UX — 聊天就是设置

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">老版</div>
<div class="text-sm mt-2">
设置页是主页,然后"test the agent".<br/><br/>
用户要在两个页面之间反复跳.
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">新版 — flippy</div>
<div class="text-sm mt-2">
聊天是主页,设置变成侧栏 preview.<br/><br/>
"the AGI pill way to think about it is like, oh it's just the agent.
It can set itself up, it can test itself and it can run the workflow."
</div>
</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>代价:</strong> 这个改动让发布拖了大约一个月. 三名来自不同团队的工程师临时合体把它做出来,
"the manager doesn't complain, we were able to unblock and just ship it."
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>有趣的权衡:</strong> 默认情况下 custom agent 没有任何权限——你必须显式授权它. 让它自己 fix 自己?
那就破坏了这一层 trust. 现在的折中: fix 时进入 admin 模式,同步 chat,可见、需确认.
</div>

---

# Composability — 用 primitive,不造新概念

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">解法 1: 通过 data 解耦</div>
<div class="text-sm mt-2">
一个 agent 写 database,另一个 agent 读 database.<br/>
"that's a little bit more decoupled and works really well."<br/><br/>
他们没造新的"消息总线"——直接用 Notion database.
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">解法 2: 直接调用</div>
<div class="text-sm mt-2">
即将上线: "in the settings for an agent, you can give access to invoke any other agent."<br/><br/>
swyx 立刻问: "limit on number of recursions?"<br/>
Simon: 应该有,但你可以试试看.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>同样的思路应用到 memory:</strong><br/>
"we have no built-in memory concept. Memory is just pages and databases. And so if you wanna give a memory,
just give it a page and give it edit access to that page."<br/><br/>
人和 agent 都能编辑同一页. 这个 pattern works extremely well.
</div>

---
layout: two-cols
---

# Manager Agent — 实战故事

<div class="mt-3 space-y-3 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>起点</strong><br/>
内部某 go-to-market 同事建了 30+ custom agents:
研究客户、triage 反馈、enrich CRM 等等
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>问题</strong><br/>
"now I'm getting 70+ notifications per day with just the agents are blocked on various things."
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Simon 给的解</strong><br/>
做一个 manager agent — 给它 invoke 所有 30 个 agent 的权限,负责观察、调度、debug
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>结果</strong><br/>
"instead of 70 notifications per day, it's like five." 多了一层抽象,manager agent 还能修下面 sub-agent 的问题.
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./manager-agent.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 不是替人,是替流程

<div class="mt-5 p-6 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-2xl italic font-medium">
"Nothing falls through the crack. We don't know what we don't know.<br/>
But it's not replacing people, it's replacing processes."
</div>
<div class="text-xs text-slate-600 mt-3">— Sarah Sachs · 关于 Notion 内部的 bug triaging custom agent</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">用例 1</div>
<div class="text-sm mt-2">Bug triaging — Slack 里有人报问题,custom agent 路由到正确团队的 task 库,回 Slack 里更新</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">用例 2</div>
<div class="text-sm mt-2">Pre-read agent — 站会前自动扫 Slack/GitHub,生成 meeting note,所有人 pre-read</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label text-orange-700">用例 3</div>
<div class="text-sm mt-2">Follow-up agent — 会上聊到的事自动开 task / 发 Slack,"meetings are hands off keyboard"</div>
</div>

</div>

---

# 那软件工程师呢? — Sarah 的"identity crisis"

<div class="mt-5 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-base italic">
"Every software engineer in Notion this summer went through... the identity crisis that every manager goes through,
where all of a sudden they realize their ability to write code is less important than their ability to
delegate and context switch."
</div>
<div class="text-xs text-slate-600 mt-2">— Sarah, 类比 ML 工程师早就经历过的同款转型 (transcript 把 "and" 误转成 "in")</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Simon 的差别意见</div>
<div class="text-sm mt-2">
"Yeah, there's a critical difference to being a manager — it is actually very deeply technical."<br/><br/>
人是 fuzzy 的,你没法 treat 一个团队像 rigorous system.<br/>
agent 可以——所以这是 technical design problem.
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label text-green-700">Sarah 的回应</div>
<div class="text-sm mt-2">
"Almost all of our best ideas come from prototypes, from people that have a cool idea because they saw a
user problem."<br/><br/>
所以她拒绝把 idea 都过 leader 的 sniff test —— it's a huge disservice.
</div>
</div>

</div>

---

# 定价: credits ≠ tokens

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">为什么不直接按 token 收</div>
<div class="text-sm mt-2">
• fine-tuned 和开源模型按 GPU 收<br/>
• Web search 单独定价<br/>
• Sandbox 又另算<br/>
• 同一个模型在 priority tier vs async tier 价格不同<br/><br/>
所以需要"高于 token"的抽象 — credits.
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">为什么需要 usage-based pricing</div>
<div class="text-sm mt-2">
"if we wanted to ship this functionality, we couldn't afford it, it would <strong>bankrupt the company</strong>.
If we let database autofill be agentic on Opus on every single cell, it would be billions of dollars."<br/><br/>
要给愿意花钱的客户一个出口,但不能强加给所有人.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Sarah 的原则:</strong> "we wanted to commit to making sure that customers were getting the fair deal.
Not necessarily that we were making a ton of money off of it, but that customers were paying for what was reasonable."
</div>

---

# Auto 模式 — Notion 的 robo-advisor

<div class="mt-5 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="text-base italic">
"Auto is not just our cheapest, dumbest model, but actually the model that's best for the task that you wanna do...
A majority of the tasks people are doing aren't Opus level intelligence."
</div>
<div class="text-xs text-slate-600 mt-2">— Sarah, 借用她在 Robinhood 的经历做 robo-advisor 类比</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-center">
<div class="text-xs label text-red-700">capability</div>
<div class="text-sm mt-1">Opus 顶</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-center">
<div class="text-xs label text-blue-700">price</div>
<div class="text-sm mt-1">Haiku 便宜</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-center">
<div class="text-xs label text-green-700">latency</div>
<div class="text-sm mt-1">async / 优先级</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Sarah 担心的市场缺口:</strong><br/>
"the nano haikus, etc, haven't caught up to where reasoning models were six months ago. Now we're paying more
for extra capability that we didn't necessarily need."<br/><br/>
解法之一: 让开源模型(MiniMax 等)填中段空隙,合作做 Notion's last exam.
</div>

---

# Simon 的训练心路 — 别陷进去

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label text-red-700">血泪教训</div>
<div class="text-sm mt-2">
"I personally burned a lot of time trying to train models. And it's tempting, right?"<br/><br/>
Sarah 插一句: "I was the budget person that came and found out and showed up and heard that was happening — time out."
</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">现在投资在哪</div>
<div class="text-sm mt-2">
<strong>retrieval / ranking</strong> — 因为大部分 search 流量已经来自 agent 而不是人.<br/><br/>
"for notion retrieval, vector embeddings are less and less" 重要. 重点变成 query diversity 和 top-K.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Simon 的核心建议:</strong><br/>
"don't focus too much on training. The outer loop is — you have a model and some harness/system where it's
interacting with the system that needs to work. If there's a problem, the way to solve it isn't necessarily
to train a model. <strong>99% of the time it's a bug in one of the tools.</strong> Just fix the bug."
</div>

---

# Coding agent 也是要睡觉的

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">Simon 的新作息</div>
<div class="text-sm mt-2">
当年训模型时 24/7 围着实验转,睡前要把所有 run 都启好.<br/><br/>
"now every night before I go to bed, I'm like, okay, did I start enough agents... that they won't be done by the time I wake up."
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">极端实例</div>
<div class="text-sm mt-2">
"I had a single coding agent thread going for I think it was like <strong>17 days</strong>. Pretty much continuously."<br/><br/>
"it had done compaction like a hundred times probably." — Simon 说后来发现是 harness 的 bug.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
Sarah: "There was a point where he had outlived the thread length and context length that that coding agent
provided. And our account rep DMed me directly and they're like, <strong>'is Simon trying to prove string theory?'</strong>"
</div>

---

# Meeting notes — 不是新功能,是 data capture

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label text-blue-700">为什么是增长杠杆</div>
<div class="text-sm mt-2">
"in terms of virality of adoption and retention, quite strong."<br/><br/>
内部用法: Sarah 写 self-review 直接让 agent 看她和 manager 的所有一对一 meeting notes —
"if I didn't talk about it in my one-on-one, it probably wasn't relevant for my performance review."
</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label text-purple-700">概念上的重新框定</div>
<div class="text-sm mt-2">
"thinking about it as <strong>data capture</strong> — that's what meeting notes is."<br/><br/>
新接入的 manager Zach 把 vertical team 重组围绕这个定位 — 数据沉淀进 system of record,
agent 可以一直用、ranking team 可以一直 index.
</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Simon 提到的最近改动:</strong> Meeting notes 在 summary 里 @-mention 涉及到的人,
"I now get notifications whenever someone talks about me." 用 agent 配合 people-to-people similarity cache
来判断 "哪个 Simon".
</div>

---

# 一句话: Notion 的工作定位

<div class="mt-8 p-8 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-3xl italic font-medium">
"Our job is to not make the best harness for agentic work.<br/>
Our job is to be the best place where people collaborate."
</div>
<div class="text-sm text-slate-600 mt-4">— Sarah Sachs, 引用 Simon 之前对她说的话</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Datadog ↔ AWS 的类比</strong><br/>
"Datadog could not exist without cloud storage. AWS has a CloudWatch product, but Datadog is an expert on
observability." Notion 之于 frontier labs 也是这层关系.
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>所以:</strong> wearable / 硬件? "we would partner with whoever's building one of those." 不亲自下场.
"Our job is to build the best place where meeting notes <em>live</em>." 让别人 pipe 给我们.
</div>

</div>

---

# 核心金句 (一)

<div class="text-sm opacity-60 mb-4">这一期 84 分钟里最值得记住的几句 (全部 grep 验证过 transcript):</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"Coding agents are the kernel of AGI, sort of, everything is a coding agent."
<div class="text-xs opacity-60 mt-1 not-italic">— Simon, 谈 next-18-months 的方向</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"You need to build a team that's comfortable deleting their own code and is very low ego... and doesn't
write design docs because they think it's their promotion packet."
<div class="text-xs opacity-60 mt-1 not-italic">— Sarah, 为什么 5 次重写 harness 还能不爆炸</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"It's not replacing people, it's replacing processes."
<div class="text-xs opacity-60 mt-1 not-italic">— Sarah, 谈 Notion 内部 bug triaging custom agent</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Let's just make it SQL Light. Everything is a SQL Light database... and the models are super good at that."
<div class="text-xs opacity-60 mt-1 not-italic">— Simon, give-the-models-what-they-want 的最经典 case</div>
</div>

</div>

---

# 核心金句 (二)

<div class="text-sm opacity-60 mb-4">续上 — 关于经济、外环和 Notion 的边界:</div>

<div class="space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"If we let database autofill be agentic on Opus on every single cell, it would be billions of dollars."
<div class="text-xs opacity-60 mt-1 not-italic">— Sarah, 为什么必须要 usage-based pricing</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"99% of the time it's a bug in one of the tools, right? And so just fix the bug."
<div class="text-xs opacity-60 mt-1 not-italic">— Simon, 关于 outer-loop 思维 vs 直接训模型</div>
</div>

<div class="p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded italic text-sm">
"We have no built-in memory concept. Memory is just pages and databases."
<div class="text-xs opacity-60 mt-1 not-italic">— Simon, 不为 agent 造新原语</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded italic text-sm">
"Our job is to be the best place where people collaborate."
<div class="text-xs opacity-60 mt-1 not-italic">— Sarah, 引用 Simon 给她定的边界</div>
</div>

</div>

---
layout: end
---

# "demos over memos"

<div class="mt-6 text-base text-slate-600">
Notion 用三年五次重写换来的不是某个具体 agent 架构,<br/>
而是一支"comfortable deleting their own code"的团队 —— 和一个让模型"想要什么就给什么"的肌肉记忆.
</div>

<div class="mt-8 text-xs text-slate-500">
Latent Space · Sarah Sachs × Simon Last × swyx & Alessio · 2026 · ≈ 84 min<br/>
原片: <a href="https://youtube.com/watch?v=ATt7QJgt-2k" class="underline">youtube.com/watch?v=ATt7QJgt-2k</a>
</div>
