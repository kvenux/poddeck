---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Extreme Harness Engineering: 1M LOC, 1B toks/day, 0% human code or review — Ryan Lopopolo, OpenAI'
info: |
  Latent Space · Ryan Lopopolo (OpenAI Frontier) × swyx × Vibhu · 2026
  5 个月、3 个人、1 百万行代码、1500 PR、0 行人写的代码、0 次同步审查
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
.q { font-family: "Source Serif Pro", "Georgia", serif; font-style: italic; }
</style>

# Extreme Harness<br/>Engineering

<div class="deck-kicker mt-6">Latent Space · Ryan Lopopolo (OpenAI Frontier) × swyx × Vibhu · 2026</div>

<div class="mt-6 text-lg font-semibold text-slate-700">
1M LOC · 1B tokens/day · 0% human code or review
</div>

<div class="mt-8 flex justify-center gap-3 flex-wrap">
  <span class="chip">zero-code constraint</span>
  <span class="chip">post-merge review</span>
  <span class="chip">one-minute build</span>
  <span class="chip">on-policy harness</span>
  <span class="chip">Ghost Libraries</span>
  <span class="chip">Symphony</span>
  <span class="chip">end of bullshit plugins</span>
</div>

<div class="mt-10 tiny max-w-2xl mx-auto">
Ryan 在 OpenAI Frontier 做 "Frontier Product Exploration"。5 个月他和 3 人的小团队
把一个 Electron 桌面产品从零写到 1M LOC、1500 PRs。约束只有一条：他自己不写任何一行代码。
这是他的第一次 podcast，把这套打法的所有 ratchets、skills、PR 自动合并、Symphony、Ghost Libraries 全摊开。
</div>

---

# 这期访谈里的八条主线

<div class="grid grid-cols-4 gap-3 mt-5">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-sm font-bold text-red-900">① 零代码约束</div>
<div class="text-xs mt-1 text-slate-700">"I can't write the code"<br/>逼自己变成 tech lead</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold text-blue-900">② 人是瓶颈</div>
<div class="text-xs mt-1 text-slate-700">trivially paralyzable model<br/>vs. 同步的人类注意力</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold text-green-900">③ 1 分钟构建</div>
<div class="text-xs mt-1 text-slate-700">make→Bazel→Turbo→Nx<br/>背景 shell 的副作用</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold text-orange-900">④ Skills before skills</div>
<div class="text-xs mt-1 text-slate-700">六个技能就够<br/>tech tracker、quality score</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold text-purple-900">⑤ 自动合并</div>
<div class="text-xs mt-1 text-slate-700">$land skill<br/>fix flakes、过 CI、merge</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm font-bold text-yellow-900">⑥ Ghost Libraries</div>
<div class="text-xs mt-1 text-slate-700">把软件作为 spec 分发<br/>Symphony 用 Elixir 写</div>
</div>

<div class="p-3 rounded bg-cyan-50 border-l-4 border-cyan-500">
<div class="text-sm font-bold text-cyan-900">⑦ End of bullshit plugins</div>
<div class="text-xs mt-1 text-slate-700">vendor 依赖<br/>"code is free"</div>
</div>

<div class="p-3 rounded bg-pink-50 border-l-4 border-pink-500">
<div class="text-sm font-bold text-pink-900">⑧ On-policy harness</div>
<div class="text-xs mt-1 text-slate-700">不要建一个会被丢掉的<br/>Rust scaffold 包住 Codex</div>
</div>

</div>

<div class="mt-6 tiny">
开头是一句最反直觉的话："只要我写一行代码，整个实验就没意义。" 后面所有 SDLC 决定都是这一个约束推导出来的。
</div>

---

# 实验的初始条件

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="label mb-2">起点</div>

Ryan 所在团队叫 **Frontier Product Exploration**，给 OpenAI Frontier (企业平台) 探索新产品形态。

被给了 "**some space to cook**"。

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="label mb-2">硬约束</div>

<div class="q text-base">
"I started with kind of a out there constraint to not write any of the code myself."
</div>

<div class="text-xs opacity-70 mt-3 not-italic">
理由：如果想做能帮企业员工干活的 agent，那它得能干 Ryan 自己干的所有活。
</div>

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm">
<strong>结果：</strong>5 个月、3 个人、约 1M LOC、约 1500 PRs、0 行 Ryan 写的代码 ——
而且<strong>比他自己写要快</strong>。
</div>
</div>

---

# 第一个半月：10× 慢

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

最早用的是 **Codex Mini**（Codex CLI 的第一版），Ryan 形容：

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="q">
"Quite a visceral feeling to ask the model to build you a product feature. And it just not being able to assemble the pieces together."
</div>
</div>

由此推出第一条核心心法：

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
当模型卡住，<strong>不要替它写代码</strong> —
"<em>double click into it, build smaller building blocks</em>"，
然后让它把零件再组合起来。
</div>

</div>

<div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label mb-2">第一个半月</div>

<div class="q text-base">
"Honestly, the first month and a half was 10 times slower than I would be."
</div>

</div>

<div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label mb-2">代价的回报</div>

<div class="q text-base">
"Because we paid that cost, we ended up getting to something much more productive than any one engineer could be — we built the assembly station for the agent."
</div>

</div>

</div>

</div>

---
layout: two-cols
---

# 倒转：先 spawn agent，再让它装环境

<div class="mt-4 space-y-3">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>旧 paradigm</strong>: 先布置环境（容器、依赖、stack），再把 agent 丢进去
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>新 paradigm</strong>: 入口就是 Codex。Codex 拿到 <em>skills + scripts</em> 后<strong>自己决定要不要</strong>启动 stack，设环境变量，把 app 指过去。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
原话：<em>"instead of setting up an environment to spawn the coding agent into, instead we spawn the coding agent, like that's the entry point."</em>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>为什么能这么做</strong>：reasoning 模型与 GPT-4o 的根本区别 ——
"<em>these models could not think so you had to put them in boxes with a predefined set of state transitions.</em>"
现在不必。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./inverted-setup.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 一分钟构建：用 agent 的耐心反推架构

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
GPT-5.3 加了 <strong>background shells</strong> —— agent 可以发命令到后台、继续工作。代价是它"less patient, less willing to block"。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
所以构建必须做到 <strong>under a minute</strong>。"One minute was just a nice round number and we were able to hit it."
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
构建工具一路换：<strong>Makefile → Bazel → Turbo → Nx</strong>。换完就停在那 —— 因为快了。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
swyx 称之为 <strong>build-time ratchet</strong>："you're forcing build time discipline, because if you don't, it'll just grow and grow." Ryan: <em>"That's right."</em>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
能这么换，是因为<strong>没有人会有 build 偏好</strong> —— "this is not a thing I would expect to be able to do in a code base where people have opinions."
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./build-ratchet.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 真正稀缺的资源：同步的人类注意力

<div class="mt-5 grid grid-cols-2 gap-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label mb-2">model 这一侧</div>

<div class="q text-base">
"The model is trivially paralyzable, right? As many GPUs and tokens as I am willing to spend, I can have capacity to work with my codebase."
</div>

<div class="text-xs opacity-70 mt-3 not-italic">
tokens are cheap、并行无上限。
</div>

</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label mb-2">人 这一侧</div>

<div class="q text-base">
"The only fundamentally scarce thing is the synchronous human attention of my team. There's only so many hours in the day — we have to eat lunch."
</div>

<div class="text-xs opacity-70 mt-3 not-italic">
Ryan 自己：<em>"I would like to sleep, although it's quite difficult to stop poking the machine."</em>
</div>

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>推论</strong>：把 SDLC 想成 systems thinking。问"agent 在哪犯错？我时间花哪去了？怎么以后不花？"
然后<strong>把这部分解决方案固化下来</strong>。
</div>

---

# Code review 已经 post-merge 了

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="label">传统</div>
<div class="text-lg font-bold text-red-700 mt-2">PR 前</div>
<div class="text-xs mt-2 text-slate-700">人坐着等 CI，逐行 review，反复 nit pick</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="label">Ryan 的状态</div>
<div class="text-lg font-bold text-yellow-700 mt-2">Post-merge</div>
<div class="text-xs mt-2 text-slate-700">"Most of the human review is post-merge at this point."</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="label">推论方向</div>
<div class="text-lg font-bold text-green-700 mt-2">Post-post-merge</div>
<div class="text-xs mt-2 text-slate-700">"that's not even reviewed — just to make ourselves happy"</div>
</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-sm">
Ryan 把自己当成 <em>group tech lead 一个 500 人组织</em>：
<div class="q mt-2">"It's not appropriate for me to be in the weeds on every PR."</div>
他用 post-merge 看到的 sample 去推断"团队在哪里挣扎"、"我该把注意力转去哪"。
</div>
</div>

---
layout: two-cols
---

# Models fundamentally crave text

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
所有 non-functional requirements 都被翻译成文本，<strong>prompt-inject 给 agent</strong>。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
原话：<em>"the models fundamentally crave text. So a lot of what we have done here is figure out ways to inject text into the system."</em>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>触发示例</strong>: 被 page 了 —— 缺一个 timeout —
Ryan 让 Codex 加 timeout，同时<strong>更新 reliability docs</strong>
"all network calls must have timeouts"。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>同一份 docs 同时</strong>给 root coding agent / 代码 review agent / test 蒸馏 agent
—— 收窄"可接受代码"的宇宙。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs">
工程层面：在 ticketing 系统出现前，他们就用 markdown 文件追踪 follow-up，cron 上 spawn agent burn down。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./text-loop.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 在 "skills" 出现之前，他们重发明了 skills

<div class="mt-5 grid grid-cols-2 gap-6">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>结构</strong>：~100 行 AGENTS.md 做目录页 + 几个独立的 skill markdown。
Vibhu 提到 <em>core beliefs.md / tech tracker / quality score</em>。
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>tech tracker / quality score</strong>: 一张 markdown 表，做成 hook 让 Codex
review 所有 business logic，对照已记录的 guardrails，自己 propose follow-up。
</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>core beliefs.md</strong> 里有：团队成员、当前在做什么产品、谁是 end customer / pilot customer、12 个月的 vision。
</div>

</div>

<div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label mb-2">总数</div>
<div class="text-5xl font-bold text-orange-700 my-3">6</div>
<div class="text-sm">
"<em>in our code base, we have, I think, six skills. That's it.</em>"

不够用的时候<strong>第一反应是改现有 skill</strong>，而不是加新 skill。
</div>
</div>

<div class="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>顺手发现</strong>：这套东西做完后，OpenAI 的 Codex 团队把它产品化成了 <em>skills</em>。
swyx："you reinvented skills from first principles." Ryan：<em>"skills did not exist when we started doing this."</em>
</div>

</div>

</div>

---

# PR review agent：bullying 的故事

<div class="mt-5 space-y-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label mb-1">第一版踩的坑</div>
<div class="q">
"Initially the Codex driving the code author was willing to be bullied by the PR reviewer, which meant you could end up in a situation where things were not converging."
</div>
<div class="text-xs opacity-70 mt-2 not-italic">两个 Codex 互相回应、来回 thrash，永远 merge 不掉。</div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="label mb-1">Reviewer 侧改</div>
"Bias toward merging the thing"、"not surface anything greater than a P2 in priority"。

<div class="mt-2 text-xs opacity-70">P0 = "you will mute the codebase if you merge this"；P2 = 可以放过。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="label mb-1">Author 侧改</div>
给 code authoring agent <strong>defer 或 push back</strong> 的选项 ——
"file it to the backlog, pick it up in the next fix-it week."

<div class="mt-2 text-xs opacity-70">没有这条 context，agent 默认会 follow instructions。</div>
</div>

</div>

</div>

---
layout: two-cols
---

# `$land`：把 PR-to-main 全交给 agent

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
Ryan 写了个 skill 叫 <code>$land</code>，让 Codex 完成<strong>整条 merge 路径</strong>，原话逐字：
</div>

<div class="p-3 bg-white border border-slate-200 rounded text-xs leading-relaxed">
"push the PR · wait for human and agent reviewers · wait for CI to be green · fix the flakes if there are any · merge upstream · if the PR comes into conflict, wait for everything to pass · put it in the merge queue · deal with flakes until it's in main"
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>关于 work trees</strong>：Cursor 在另一期访谈说要去掉 work trees（太多 merge conflicts）。Ryan 反对：
<em>"The models are really great at resolving merge conflicts. I almost don't care that there are merge conflicts."</em>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
他的 release flow：因为是 native app（Electron），不是 continuous deploy ——
<strong>还是有人审 release branch</strong> + smoke test。但 main 完全是 agent merge 进去的。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./merge-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# December → January：3.5 → 5–10 PR / engineer / 天

<div class="mt-5 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200 text-center">
<div class="label">2025 年 12 月底</div>
<div class="text-4xl font-bold text-blue-700 my-3">3.5</div>
<div class="text-xs">PRs / engineer / day</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200 text-center">
<div class="label">2026 年 1 月初</div>
<div class="text-4xl font-bold text-yellow-700 my-3">5–10</div>
<div class="text-xs">PRs / engineer / day<br/>大家假期回来 + GPT-5.2 发布</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">
<div class="label">代价</div>
<div class="text-2xl font-bold text-red-700 my-3">tapped out</div>
<div class="text-xs">在 tmux 之间疯狂切换<br/>人脑变成 context switcher</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="q">
"Where are the humans spending their time? They're spending their time context switching between all these active tmux panes to drive the agent forward."
</div>
<div class="text-sm opacity-70 mt-2 not-italic">
推论：再写一层东西<strong>把人从 loop 里拿出去</strong> —— 这就是 Symphony 的起点。
</div>
</div>

---
layout: two-cols
---

# Ghost Libraries：把软件作为 spec 分发

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"the way we distribute it as a spec, which I think folks are calling
<strong>Ghost Libraries</strong> on Twitter."
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>构造 spec 的流程</strong>: 在 proprietary repo 让 Codex 读完→
写一个 spec → 起新 repo → 一个 disconnected Codex 按 spec 实现 →
另一个 Codex review 实现 vs upstream，更新 spec 让它<strong>diverge less</strong> → 循环。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<em>"loop over and over Ralph style until you get a spec that is with high fidelity able to reproduce the system as it is."</em>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>顺便观察到</strong>：很多人直接把这篇文章扔给 Codex，说"make my repo this"，
"<em>it was wildly effective</em>". 文章本身就是 spec。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./symphony-loop.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Symphony 选 Elixir 不是 Ryan 的偏好 — 是模型选的

<div class="mt-5 grid grid-cols-2 gap-6">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
swyx 问："为什么是 Elixir？"
Ryan：<em>"the elixir manifestation here is just a derivative. Is it a model chosen?"</em> —— 是。
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
模型挑 Elixir 的理由：
<em>"the process supervision and the gen servers are super amenable to the type of process orchestration that we're doing here."</em>
每个 task 是一个小 daemon。
</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>关键点</strong>：因为<em>没有人在 loop 里</em>，
Ryan 自己会不会写 Elixir 也不重要：
<em>"My own personal ability to write or not write elixir doesn't really have to bias us away from using the right tool for the job."</em>
</div>

</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label mb-2">rework 状态</div>

PR 被人类 review，结果是"either mergeable or it is not"。

如果不行：

<div class="q mt-2 text-base">
"The elixir service will completely trash the entire work tree and PR and start it again from scratch."
</div>

<div class="text-xs opacity-70 mt-3 not-italic">
然后：<strong>问</strong> "为什么是 trash？" → 把答案塞回 skill 文档 → 下次不再犯。
</div>

</div>

</div>

---

# 一个"做了但其实不需要做"的故事

<div class="mt-5 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">

App 部署给第一批 ~12 个内部用户后，性能问题 —— 让他们 export trace tarball。

on-call engineer 花了一下午，用 Codex 写了个<strong>漂亮的 Next.js 本地 devtool</strong> —— 拖拽 tarball、把整条 trace 可视化。

<div class="q mt-3 text-base">
"Took an afternoon, but none of this was necessary. Because you could just spin up Codex and give it the tarball and ask the same thing."
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>错误的优化方向</strong>：optimize for human legibility of debugging。
"It kept him in the loop unnecessarily."
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>正确的方向</strong>：人根本不该看 trace 可视化 ——
<em>"I wouldn't expect to be looking at the traces in the first place because I'm not gonna write the code to fix them."</em>
</div>

</div>

---

# End of bullshit plugins

<div class="mt-4 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label mb-2">Brett Taylor 的预言</div>

OpenAI 董事长 Brett Taylor 在播客上说 "software dependencies are going away"。

Ryan: <strong>"A hundred percent. A hundred percent agree."</strong>

<div class="text-xs opacity-70 mt-2">仍会付 Datadog、Temporal 这种 —— 但小依赖会被 vendored。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label mb-2">能 in-house 多大</div>

<div class="q text-base">
"A couple thousand line dependency is a thing that we could in-house no problem. Call it an afternoon of time."
</div>

<div class="text-xs opacity-70 mt-2 not-italic">
而且大部分 generic 代码可以剥掉，只留你真用到的那部分。
</div>
</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-sm">
<strong>swyx 的命名</strong>: <em>"I've been calling this the end of bullshit plugins."</em>
开源时为了 accept everything、be liberal —— 结果 bloat + 兼容性税。in-house 后 Codex Security 直接 review 你 vendor 进来的代码，比 patch upstream 摩擦低得多。
</div>
</div>

---

# MCP？Ryan 不太信

<div class="mt-5 p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="q text-base">
"With MCPs, I'm pretty bearish on, because the harness forcibly injects all those tokens in the context, and I don't really get a say over it. They mess with auto-compaction. The agent can forget how to use the tool."
</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label mb-2">举例：Playwright</div>

"There's probably only what, three calls in playwright that I actually ever want to use."

但用 MCP 接进来就要付全套的 token。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label mb-2">团队成员的解法</div>

<em>"Somebody vibed a local daemon that boots playwright and exposes a tiny little shim CLI to drive it."</em>

<div class="text-xs opacity-70 mt-2">Ryan 完全不知情 —— "to me, I run Codex and it's like 'oh, it's better.'"</div>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
更广义的结论：CLI &gt; MCP。"<em>the CLIs are nice 'cause they're super token efficient and they can be made more token efficient really easily.</em>" — 用 <code>--silent</code>、shell 包一层只输出 failing tests。
</div>

---

# Agent 怎么"看"UI：Rasterize

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="q text-base">
"Agents do not perceive visually in the same way that we do. They don't see a red box, they see <strong>red box button</strong>. They see these things in latent space."
</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="label">人看到</div>
<div class="text-3xl font-bold text-red-600 my-2">🟥</div>
<div class="text-xs">布局、颜色、空间关系</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="label">Agent 看到</div>
<div class="text-base font-mono font-bold text-yellow-700 my-3">red box button</div>
<div class="text-xs">latent space 里的语义点</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="label">想让它看 layout</div>
<div class="text-base font-bold text-green-700 my-2">rasterize → OCR → 喂回去</div>
<div class="text-xs">两种感知通道可以同时用</div>
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
原话：<em>"If we wanna actually make it see the layout, it's almost easier to rasterize that image to OCR and feed it in to the agent."</em>
</div>

---

# 500 NPM packages，给一个 7 人团队

<div class="mt-5 grid grid-cols-2 gap-6">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label mb-2">Ryan 的说法</div>
<div class="q">
"We have such a rigid, like 10,000 engineer level architecture in the app because we have to find ways to carve up the space so people are not trampling on each other."
</div>
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
具体形式：<strong>500 NPM packages</strong>。
"It's like architecture to the excess for what you would consider, I think, normal for a seven person team."
</div>

</div>

<div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label mb-2">为什么</div>

每个人实际上等于 <strong>10 到 50 个 agent</strong>。

<div class="q mt-2 text-base">
"If every person is actually like 10 to 50, then the numbers on being super, super deep into decomposition and sharding and proper interface boundaries make a lot more sense."
</div>

</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>另一面</strong>：daily standup 是 <strong>45 分钟</strong>。
"We have a daily standup that's 45 minutes long because we almost have to fan out the understanding of the current state."
</div>

</div>

</div>

---

# 自我改进：把 session log 倒进 blob storage

<div class="mt-5 grid grid-cols-2 gap-6">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
单人用法：<em>"you can just point [Codex] at its own session logs to ask it to tell you how you can use the tool better."</em>
swyx 称之为 "introspection"。
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
团队用法：
<em>"we're actually slurping these up for the entire team into blob storage and running agent loops over them every day to figure out where as a team can we do better."</em>
</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>所有信号都是 text</strong>：失败的 build、PR comment、被改过的代码 ——
"these are all signals that mean at some point the agent was missing context."
</div>

</div>

<div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="label mb-2">底层心法</div>

<div class="q text-base">
"My job is to figure out ways to funnel text from one agent to the other."
</div>

<div class="text-xs opacity-70 mt-3 not-italic">
回到那条主线：models fundamentally crave text。
所有"工程师工作"在这里都被翻译成
text routing 问题。
</div>

</div>

<div class="mt-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
swyx 的呼应：Karpathy 的"English is the hottest programming language"
—— 不只是 prompts，<strong>是 feedback 通道本身</strong>。
</div>

</div>

</div>

---

# 模型今天<strong>还不能</strong>做什么

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label mb-2">① net new product idea → prototype</div>

<div class="q">
"They're definitely not there on being able to go from new product idea to prototype single one shot."
</div>

<div class="text-xs opacity-70 mt-2 not-italic">
Ryan 自己也承认 "I'm just not good at it" —— 在白纸场景需要同步互动来"挤出"上下文。
</div>

</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label mb-2">② 最狠的 refactor</div>

<div class="q">
"the gnarliest refactorings are the ones that I spend my most time with — the ones where I'm interrupting the most."
</div>

<div class="text-xs opacity-70 mt-2 not-italic">
"double-clicking to build tooling to help decompose monoliths."
</div>

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>方向感</strong>：一个月内从"low complexity tasks"扩到"low complexity 和 big tasks"。
"Don't bet against the model." 现在还做不好的地方，下一个版本极可能能做。
所以 Ryan 给自己留的工作只有：<strong>pure white space + 最深的 refactor</strong>。
</div>

---

# Spark vs reasoning：他还没想好怎么用 Spark

<div class="mt-5 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="label">他默认用什么</div>
<div class="text-lg font-bold text-blue-800 my-2">extra-high reasoning</div>
<div class="text-xs text-slate-700">把所有任务都丢给它，因为它能完成</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="label">Spark</div>
<div class="text-lg font-bold text-yellow-800 my-2">incredibly fast smaller</div>
<div class="text-xs text-slate-700">"<em>I have not quite figured out how to use it yet.</em>"</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="label">他试过的坑</div>
<div class="text-lg font-bold text-red-800 my-2">3× compaction</div>
<div class="text-xs text-slate-700">"<em>it would blow through three compactions before writing a line of code.</em>"</div>
</div>

</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>找到的用法</strong>: 把 PR comment 这种轻反馈"transform into a lint" ——
ESLint infra 已经在了，Spark 把人类 feedback 编成 lint rule，"anti-fragile healing tasks"。
</div>

<div class="mt-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
GPT-5.4 的两个真实改变：① 第一次合并了 top-tier coding + reasoning；② <strong>1M context</strong> —— "<em>the more tokens you can spend on a task before compacting, like the better you'll do.</em>"
</div>

---
layout: two-cols
---

# 整期最深的洞见：on-policy harness

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
swyx 抛了一个 framing：harness 的方向到底是 "训进模型" vs "做更厚的 wrapper"？
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
Ryan 的答案：他们这套 harness <em>"running tests is a good part of what it means to write reliable software"</em>，所以模型变好它也不会过时。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
反例：<em>"If we were building an entire separate rust scaffold around Codex to restrict its output, that I think would be like additional harness that would be prone to being scrapped."</em>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
swyx 类比 RL 里的 on-policy vs off-policy：<em>"you should build an on-policy harness, which is already within distribution and you modify from there."</em>
Ryan：<em>"That's right."</em>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
判断准则：你的 guardrail 是不是"good engineering"？是 → 留着。是不是为了"约束这一代模型的某个缺陷"？是 → 下一代上就被丢。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./on-policy.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Frontier：把这一套打包卖给企业

<div class="mt-5 grid grid-cols-2 gap-6">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>定位</strong>：<em>"Frontier is the platform by which we want to do AI transformation of every enterprise, from big to small."</em>
</div>

<div class="mt-3 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>三个 hook</strong>：
<ul class="mt-1 space-y-1 text-xs">
<li>plug 进公司的 IAM</li>
<li>plug 进 security tooling</li>
<li>plug 进 workspace（连接器）</li>
</ul>
</div>

<div class="mt-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>Agents SDK</strong> + Codex Harness 提供 file attachments / containers / Shell tool —— 作为 "works by default harness"。
</div>

</div>

<div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>谁是用户？</strong>
<div class="mt-2">
① 一线员工 —— 在自己的工具表面用 agent；<br/>
② GRC / governance / security / AI innovation office —— 通过 dashboard 看 agent 行为轨迹。
</div>
</div>

<div class="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>语义层</strong>：Frontier 同时发了 <em>internal data agent</em> ——
让 agent 能理解公司数据本体（什么是 revenue、什么是 active user）。
swyx：<em>"It's actually really hard for humans to agree on what revenue is."</em>
</div>

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded text-xs">
Brett Taylor 评论那篇 harness 文章 —— Ryan：<em>"Yeah, he's reading your articles as well."</em>
</div>

</div>

</div>

---

# 一个反常的"skill"：deep-fried memes

<div class="mt-5 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="q text-base">
"We have skills for how to properly generate <strong>deep fried memes</strong> and have Ghibli culture in Slack. Because with the Slack ChatGPT app that you're able to use in Codex, I can get the agent to shit post on my behalf."
</div>
</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<div class="label mb-1">Ryan 的解读</div>
"It's part of humor — humor is part of AGI."

humor 是一个高密度的智力测试 —— 把很多 context 压缩到几个词。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<div class="label mb-1">为什么 GPT-5.4 是 "big uplift"</div>
"<em>it's the memes."</em>

GPT-5.4 第一次能做到他们 in-house 文化里的"梗"水平。
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
背后的真原则：<strong>所有部落知识 (memes、playbook、文化) 都该写成 skill / 喂给 agent</strong> ——
让 ChatGPT 也学会团队 meaning culture，这样 Frontier 才能跨工具传递 context。
</div>

---

# 把哲学浓缩成一句话："just do things"

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">

整集的 catch-phrase 出现了两次：

<div class="q text-lg mt-3">
"You can just <strong>codex things</strong>, you can just prompt things. It's a glorious future we live in."
</div>

<div class="text-xs opacity-70 mt-2 not-italic">— 中段，关于"让 agent 看自己 session log 改进自己"</div>

</div>

<div class="mt-4 p-6 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="q text-lg">
"You can just do things. That's the line for the episode."
</div>
<div class="text-xs opacity-70 mt-2 not-italic">— 收尾</div>
</div>

<div class="mt-5 p-4 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>潜台词</strong>: 不要先去问"这能不能做、有没有人做过、是不是产品里能找到的功能"。
启动一个 Codex，告诉它你想要什么，让 it cook —— 失败了再加 skill / docs / guardrail。
</div>

---

# 顺手提的两个数

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">Codex app 用户量</div>
<div class="text-5xl font-bold text-blue-700 my-3">2M</div>
<div class="text-sm">weekly active users (Ryan 报告时)</div>
<div class="text-xs opacity-70 mt-2">"<em>we just passed 2 million weekly active users.</em>"</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="label">Codex app 增长速度</div>
<div class="text-5xl font-bold text-green-700 my-3">25%</div>
<div class="text-sm">week over week</div>
<div class="text-xs opacity-70 mt-2">"<em>growing at a phenomenally fast rate, 25% week over week.</em>"</div>
</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
swyx 的观察 —— 现在每次 model release 都附带一次"Codex 大跃迁"：<strong>GPT-5.3 → Spark → GPT-5.4 在一个月内</strong>。
Ryan 笑：<em>"The poll markets would be very upset"</em> 如果下个月还有 GPT-5.5。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这一小时里最值得记住的几句（每条都能在 transcript 里 grep 到）：</div>

<div class="space-y-2.5">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"The model is trivially paralyzable. The only fundamentally scarce thing is the synchronous human attention of my team."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 SDLC 的瓶颈</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"The models fundamentally crave text. A lot of what we have done here is figure out ways to inject text into the system."
<div class="text-xs opacity-60 mt-1 not-italic">— 论一切工程问题都是 text routing</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"The first month and a half was 10 times slower than I would be. But because we paid that cost, we ended up getting to something much more productive than any one engineer could be."
<div class="text-xs opacity-60 mt-1 not-italic">— 论先投资 assembly station</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"The models are really great at resolving merge conflicts. I almost don't care that there are merge conflicts."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 work trees + 多 agent</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"With MCPs, I'm pretty bearish on, because the harness forcibly injects all those tokens in the context, and I don't really get a say over it."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 MCP vs CLI shim</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"My job is to figure out ways to funnel text from one agent to the other."
<div class="text-xs opacity-60 mt-1 not-italic">— 论 manager 的新工作内容</div>
</div>

<div class="p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded italic text-sm">
"You should build an on-policy harness, which is already within distribution and you modify from there." (swyx framing, Ryan: "That's right.")
<div class="text-xs opacity-60 mt-1 not-italic">— 论 harness 的设计取舍</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded italic text-sm">
"You can just do things. That's the line for the episode."
<div class="text-xs opacity-60 mt-1 not-italic">— 收尾</div>
</div>

</div>

---
layout: end
---

# You can just<br/>codex things.

<div class="mt-8 text-sm opacity-70">
Latent Space × Ryan Lopopolo (OpenAI Frontier) · 2026<br/>
1M LOC · 1500 PRs · 5 months · 3 people · 0% human code
</div>
