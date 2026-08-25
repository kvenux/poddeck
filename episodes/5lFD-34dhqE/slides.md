---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Exo: Harnesses should see their own code and logs — Alex Krentsel, UC Berekeley / Google Research'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<style>
.kicker { color: #64748b; font-size: .82rem; letter-spacing: .08em; text-transform: uppercase; }
.muted { color: #64748b; }
.chip { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 999px; padding: .24rem .68rem; font-size: .75rem; color: #334155; background: #f8fafc; }
.label { font-size: .68rem; letter-spacing: .08em; text-transform: uppercase; color: #64748b; font-weight: 700; }
.tiny { font-size: .74rem; line-height: 1.45; }
.quote { font-family: "Source Serif Pro", Georgia, serif; font-style: italic; }
</style>

<div class="kicker">Latent Space · Alex Krentsel · Exo</div>

# Harnesses Should See Their Own Code and Logs

<div class="mt-3 text-2xl font-semibold text-slate-700">
让 agent 在运行时改写自己，同时保住状态、秘密与退路
</div>

<div class="mt-7 flex justify-center gap-2 flex-wrap">
  <span class="chip">recursive self-improvement</span>
  <span class="chip">agent harness</span>
  <span class="chip">runtime isolation</span>
  <span class="chip">rollback</span>
  <span class="chip">evals</span>
</div>

<div class="mt-10 text-sm muted max-w-2xl mx-auto leading-relaxed">
这期不是在讨论更大的模型，而是在重新划分 agent 的身体：哪些部分可以自我进化，哪些状态必须隔离，失败后如何回到上一版。
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="label">优化对象</div>
<div class="font-bold text-blue-900 mt-1">从 weights 到 harness</div>
<div class="tiny mt-2">模型越来越会写代码，agent 的上下文、工具和运行策略开始成为可直接优化的软件层。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="label">核心架构</div>
<div class="font-bold text-purple-900 mt-1">三个信任区域</div>
<div class="tiny mt-2">Stateless executive、protected harness 与 isolated sandbox 分别承担策略、状态和执行。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="label">关键能力</div>
<div class="font-bold text-green-900 mt-1">运行时自编辑</div>
<div class="tiny mt-2">执行体看见自己的代码、提交修改、热重建，并由 guardian 做一步试运行和自动回滚。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="label">具体故事</div>
<div class="font-bold text-orange-900 mt-1">Pokémon RAM</div>
<div class="tiny mt-2">agent 自行检查游戏内存，把位置、战斗状态等信号接回系统上下文。</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="label">真实约束</div>
<div class="font-bold text-red-900 mt-1">成本与 reward hacking</div>
<div class="tiny mt-2">一次 Discord 消息成本触发自优化；但只追求便宜，最极端策略可能是什么也不做。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="label">系统问题</div>
<div class="font-bold text-yellow-900 mt-1">秘密、并行与中断</div>
<div class="tiny mt-2">真正长期运行的 agent 还需要秘密隔离、可迁移状态与类似 OS 的后台任务机制。</div>
</div>

</div>

---

# 优化对象正在上移一层

<div class="grid grid-cols-3 gap-5 mt-6 text-left">

<div class="p-5 rounded bg-slate-50 border-2 border-slate-200">
<div class="label">此前</div>
<div class="text-xl font-bold mt-2">Pre-training</div>
<div class="tiny mt-3">通过更大规模训练改变模型权重，提升广泛能力。</div>
</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="label">随后</div>
<div class="text-xl font-bold mt-2">Fine-tuning</div>
<div class="tiny mt-3">让模型在思考与输出上更适合特定任务。</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="label">现在</div>
<div class="text-xl font-bold mt-2">Harness iteration</div>
<div class="tiny mt-3">直接调整上下文、工具、技能、压缩和 adapter，以更少调用完成更具体的任务。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
<strong>作者概括：</strong>Exo 的赌注不是 harness 永远比模型重要，而是它已经成为模型可读、可写、可测试的优化表面。
</div>

---
layout: two-cols
---

# 把无限外循环折回系统内部

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
传统 discovery system 用外部系统优化内部系统；若还要优化优化器，就会继续添加 outer-outer loop。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
Exo 的答案是 collapse the loop：运行中的系统同时决定做什么、观察什么、以及如何改写自己。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
这让运行时观察直接进入设计过程，不必等另一个 agent 复盘、重启和转交反馈。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
边界：访谈把它称为更完整、更有表达力的 self-improvement；是否更可靠，仍取决于隔离、回滚和评估。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./collapse-loop.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# Agent 首先是一台上下文构造机器

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">输入侧</div>
<div class="text-lg font-bold mt-2">构造 context</div>
<div class="tiny mt-3">历史消息、记忆、总结、技能说明和工具定义被组装成一次 LLM 调用。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">输出侧</div>
<div class="text-lg font-bold mt-2">执行 action</div>
<div class="tiny mt-3">模型请求工具或动作，agent 负责真正执行，再把结果反映回下一轮上下文。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
因此，agent 并不只是一个模型调用。决定如何构造输入、暴露能力、执行动作的整套 machinery，才是 Alex 所说的 policy。
</div>

---

# Policy 决定 agent 实际是谁

<div class="grid grid-cols-3 gap-3 mt-5 text-left tiny">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>History</strong><br/>取最近 10 条，还是最近 100 条？</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>Compaction</strong><br/>保留最近消息，再总结更早的 90 条。</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>Prompts</strong><br/>系统指令如何界定任务与行为。</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded"><strong>Tools</strong><br/>模型可以请求哪些真实动作。</div>
<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded"><strong>Skills</strong><br/>能力怎样发现、注入和调用。</div>
<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded"><strong>Adapters</strong><br/>消息从 Discord、IRC 或 WhatsApp 进入。</div>

</div>

<div class="mt-6 p-4 bg-slate-50 border border-slate-200 rounded text-left text-sm">
同一个底层模型，只要这些 policy 决策不同，就会形成成本、能力和风险都不同的 agent。
</div>

---

# 可扩展，不等于完全递归

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">OpenClaw 式扩展点</div>
<div class="text-lg font-bold mt-2">在预留插槽中变化</div>
<div class="tiny mt-3">memory 文件可动态更新，也可以由人安装新的 skill、tool 或 memory plugin。</div>
<div class="mt-3 text-xs text-blue-800">变化对象：内容与插件</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Exo 的极端版本</div>
<div class="text-lg font-bold mt-2">连插槽本身也能变化</div>
<div class="tiny mt-3">上下文如何装配、skill 是什么、tool 怎样接入，以及组件之间的连线，都进入自编辑范围。</div>
<div class="mt-3 text-xs text-green-800">变化对象：agent machinery</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
两者都属于 improvement。区别在于，前者允许 agent 填充人类预设的扩展点；后者允许 agent 改写扩展机制本身。
</div>

---

# 架构可以强制属性，prompt 只能请求行为

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">上下文约束</div>
<div class="text-lg font-bold mt-2">请不要删除历史</div>
<div class="tiny mt-3">规则存在于模型可解释、也可能被绕过的输入里；权重与 prompt 承担全部信任。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">结构约束</div>
<div class="text-lg font-bold mt-2">让执行体碰不到历史</div>
<div class="tiny mt-3">把历史放进受保护的 harness，使可自编辑的 policy 即使出错，也无法直接删除核心状态。</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-left text-sm">
Alex 从 systems 视角提出的价值主张：模型对齐仍未解决，但系统边界可以把部分安全属性变成不可绕过的结构事实。
</div>

---
layout: two-cols
---

# 一个 agent，被拆成三个信任区域

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Executive</strong> 保存 policy，但保持完全无状态，因此可以被替换、自编辑或在别处运行。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>Exo harness</strong> 保存最小受保护状态：对话历史、秘密、artifact、snapshot 与成本记录。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Sandbox</strong> 承担命令、文件和环境交互，把真正的副作用与 policy 进程隔开。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
三层合起来，才对应今天人们口中的一个 agent。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./three-layers.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# Executive：可进化的策略进程

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">性质</div>
<div class="font-bold mt-1">Stateless</div>
<div class="tiny mt-2">不持有对话、秘密或环境 snapshot；崩溃与替换不会天然带走历史。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">内容</div>
<div class="font-bold mt-1">All policy</div>
<div class="tiny mt-2">包含 prompt、compaction、tools、skills、LLM call 与 adapter 逻辑。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">能力</div>
<div class="font-bold mt-1">Replaceable</div>
<div class="tiny mt-2">代码挂载进 sandbox 后，它能查看、编辑、请求重建并在运行中切换自身版本。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
无状态不是简化实现，而是自我进化的前提：把需要保住的东西移出去，剩下的代码才有资格频繁变化。
</div>

---

# Harness：状态、日志、秘密和快照

<div class="grid grid-cols-2 gap-4 mt-5 text-left">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold">Conversation history</div>
<div class="tiny mt-2">保存完整对话；executive 只决定下一次调用取哪些片段。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold">Cost annotations</div>
<div class="tiny mt-2">每条消息附带成本，成为系统观察和优化自己上下文策略的信号。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold">Secret store</div>
<div class="tiny mt-2">API key 留在 host 进程，避免直接暴露给 LLM 与 sandbox 中的工具。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold">Artifacts & snapshots</div>
<div class="tiny mt-2">保存环境产物和可恢复点，使 sandbox 与 executive 可以恢复、迁移或回滚。</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
作者概括：让 harness 看见代码和日志的真正意义，是给自我修改提供反馈，同时不把不可丢失的状态交给被修改对象。
</div>

---

# Sandbox：副作用发生的地方

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">常见做法</div>
<div class="text-lg font-bold mt-2">Agent 与项目同处一台 VM</div>
<div class="tiny mt-3">coding agent 进程直接编辑同一环境里的文件；GitHub 凭据和其他 key 也常常随环境一起存在。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Exo 的拆分</div>
<div class="text-lg font-bold mt-2">Policy 在外，action 在内</div>
<div class="tiny mt-3">bash、文件修改和外部交互发生在独立 sandbox；policy process 可以在其他位置运行。</div>
</div>

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-left tiny">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>隔离</strong><br/>限制一次动作的破坏半径</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>快照</strong><br/>为试验与回滚提供恢复点</div>
<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded"><strong>迁移</strong><br/>状态与计算分离后可换执行位置</div>
</div>

---
layout: two-cols
---

# 运行时自编辑：先改，再做一步试运行

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
Executive 的代码被挂载到自己的 sandbox，因此 agent 能直接检查并编辑 policy 实现。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
修改后，harness 中的 guardian 允许 executive 在当前 run 的中途重建和切换。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
新版本先运行一步；如果把自己改坏，系统自动回到上一状态。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded tiny">
同一机制也能产生新 tool、skill、adapter，或改变 context assembly。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./rebuild-rollback.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 自动回滚解决的是可运行性，不是正确性

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Guardian 能检查</div>
<div class="text-lg font-bold mt-2">新版本能否继续一步</div>
<div class="tiny mt-3">重建失败、进程起不来或立刻把自己改坏，可以用上一状态恢复。</div>
</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Guardian 不能自动证明</div>
<div class="text-lg font-bold mt-2">行为是否仍符合目标</div>
<div class="tiny mt-3">能运行不代表效果正确，也不代表成本下降时质量没有回退；这需要独立 evaluator。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
<strong>作者边界：</strong>访谈明确描述了一步 soak 与自动回滚；它没有把这种机制等同于完整的语义验证。
</div>

---

# Pokémon 案例：agent 给自己增加了新感官

<div class="grid grid-cols-4 gap-3 mt-6 text-left tiny">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">01 · RUN</div>
<div class="font-bold mt-1">玩游戏</div>
<div class="mt-2">Exo 在真实运行中做决策，而不是离线接受一次改造。</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">02 · INSPECT</div>
<div class="font-bold mt-1">查看 RAM</div>
<div class="mt-2">系统自行选择检查游戏内存，寻找更可靠的状态信号。</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">03 · MAP</div>
<div class="font-bold mt-1">解释字段</div>
<div class="mt-2">位置、当前 Pokémon、是否在战斗等信息被映射出来。</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">04 · EDIT</div>
<div class="font-bold mt-1">接回系统消息</div>
<div class="mt-2">Exo 修改自己的游戏集成，把这些信号提供给后续决策。</div>
</div>

</div>

<div class="mt-6 p-4 bg-slate-50 border border-slate-200 rounded text-left text-sm">
这不是增加一个预先指定的工具。关键在于，运行中的系统自己决定需要观察什么，再把观察路径写回自身。
</div>

---
layout: two-cols
---

# Runtime inspection 直接进入设计循环

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
RAM 原本只是环境内部状态；agent 把它重新解释成可用的 observation channel。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
新映射不只服务当前一步，还被写入 integration 与 system context，持续影响后续判断。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
外层优化器也能设计同样的工具，但需要经历设计、启动、观察、反馈和再启动的跨系统传递。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded tiny">
作者概括：自我修改的优势来自运行状态与设计状态共享同一条反馈链。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pokemon-runtime.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

# Teleportation 为并行规模服务

<div class="grid grid-cols-3 gap-4 mt-6 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">个人工作</div>
<div class="font-bold mt-1">单 agent、单任务</div>
<div class="tiny mt-2">本地运行或从一开始放到远端，迁移价值有限。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">中等规模</div>
<div class="text-2xl font-bold text-green-700 mt-1">100</div>
<div class="tiny mt-2">访谈举例：一台机器可以同时承载约 100 个 container。</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">更大规模</div>
<div class="text-2xl font-bold text-red-700 mt-1">50,000</div>
<div class="tiny mt-2">每个客户一段对话和专用 sandbox，单机空间会成为直接瓶颈。</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-left text-sm">
<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>状态与计算分开</strong><br/><span class="tiny">大量客户状态可以存在；只有一部分 policy process 与 sandbox 同时醒来。</span></div>
<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded"><strong>需要时移到云端</strong><br/><span class="tiny">访谈提到 Daytona、E2B 等 provider，也可访问本地没有的资源。</span></div>
</div>

---
layout: two-cols
---

# 秘密必须留在工具看不到的边界外

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
如果 agent、工具和 API key 在同一环境，凭据就能被读取并外传。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
Exo 把 secret store 留在 host harness，由受控路径为调用注入需要的能力，而不把原始 key 放进 sandbox。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
访问日志还能暴露异常模式：一个日常任务突然请求 AWS key，本身就是需要调查的信号。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
作者概括：权限设计不只回答能不能用秘密，还要回答谁能看到秘密、何时使用、如何事后追踪。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./secret-boundary.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# Sub-agent 属于 policy，状态仍属于 harness

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Executive 决定 how</div>
<div class="text-lg font-bold mt-2">何时生成、给什么能力</div>
<div class="tiny mt-3">是否 spawn、何时运行、可用哪些 tools、拥有什么 access，都是可演化的 policy 决策。</div>
</div>

<div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Harness 保存 what</div>
<div class="text-lg font-bold mt-2">记忆、对话与 artifact</div>
<div class="tiny mt-3">记忆怎样记录和注入由 executive 定义；记忆本身作为状态留在 harness。</div>
</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-left text-sm">
本期录制时，简单版本的 Exo 没有原生 sub-agent；Alex 的判断是可以沿同一模式在代码中实现。
</div>

---
layout: two-cols
---

# 长任务需要 OS 式的可中断工作

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
当前常见问题：一个 thread 开始工作后无法中断；用户再 ping，也看不到它在做什么。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
系统类比不是再开一个聊天，而是像 terminal / tmux：前台保持交互，长任务放进后台 pane。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
后台任务通过 signal 或 pub-sub 报告进度、完成或异常，必要时唤醒主 agent。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
模型层可以继续改进实时交互；任务调度与中断仍是 agent architecture 的系统问题。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./interruptible-work.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 集成面：已经能用，也仍很早

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Adapters</div>
<div class="font-bold mt-1">Discord · IRC · WhatsApp</div>
<div class="tiny mt-2">这些预构建 adapter 负责从外界接收消息；也可以继续添加自己的接入方式。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Voice</div>
<div class="font-bold mt-1">Discord voice mode</div>
<div class="tiny mt-2">已经可以加入语音聊天，但当时仍是 pipeline cascade，不是交互式实时模型。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="label">ACP</div>
<div class="font-bold mt-1">尚未实现</div>
<div class="tiny mt-2">主持人提到 Zed 的协议；Alex 明确回答还没做到，并把它视为后续集成方向。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-left text-sm">
访谈中的取舍顺序很清楚：先确定自我改进需要怎样的 architecture，再扩大与其他 agent 和协议的互操作。
</div>

---

# 三种视角，把架构推向生产

<div class="grid grid-cols-3 gap-4 mt-5 text-left">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="label">Research</div>
<div class="font-bold mt-1">Alex · Berkeley</div>
<div class="tiny mt-2">来自 systems、网络与形式化验证，并研究 evolutionary systems 与 AI-driven discovery。</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="label">Architecture</div>
<div class="font-bold mt-1">三人共同构建</div>
<div class="tiny mt-2">早期重点是 layered harness：怎样同时提供 scalability 与 safety。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Production</div>
<div class="font-bold mt-1">Braintrust</div>
<div class="tiny mt-2">Exo harness 以及其上的 agents 已在 Braintrust 生产环境运行，组件正逐步硬化。</div>
</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-left text-sm">
团队先用三四周共同构建并加固 harness，随后把更多重心转向这个分层架构能够启用的 self-improvement。
</div>

---
layout: two-cols
---

# 成本案例：16 美分触发一次自我改造

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
一次 Discord adapter 消息被记录为 16 美分；harness 的成本标注让 executive 能回看费用来自哪里。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
Exo 在运行时重构 adapter，把 context 限定到相关 conversation 与 thread，不再横跨不同 thread 拉取消息。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
Alex 的回忆是成本下降约 96%；这次自我修改随后被提交回项目代码。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded tiny">
数字边界：原文对 96% 使用了回忆性措辞，因此这里保留约数，不扩展成绝对基准。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./cost-eval-loop.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

# 没有 evaluator，自我优化会找到错误捷径

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="label">Reward hack</div>
<div class="text-lg font-bold mt-2">最便宜的办法：不做任务</div>
<div class="tiny mt-3">如果目标只有降低成本，系统可以通过停止执行获得完美分数，同时把真实效用降为零。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="label">Eval gate</div>
<div class="text-lg font-bold mt-2">成本下降，质量必须守住</div>
<div class="tiny mt-3">Discord 可以检查是否回应、是否包含正确上下文；复杂任务则可能需要 holdout eval set。</div>
</div>

</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-left tiny">
<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>Signal</strong><br/>目标必须能被优化器观测</div>
<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>Alignment</strong><br/>观测信号要代表真实目标</div>
<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded"><strong>Tracking</strong><br/>自我修改时同步记录性能</div>
</div>

---

# 核心金句

<!-- Quote audit: Q1 L59-60; Q2 L210-211; Q3 L436-439; Q4 L510; Q5 L785-788; Q6 L1218-1219; Q7 L1299-1301; Q8 L888-890. Verified with rg -U before writing. -->

<div class="text-xs opacity-60 mb-3">以下 8 条均已对 transcript 做跨行逐字 grep；大小写与标点保持原意。</div>

<div class="grid grid-cols-2 gap-2.5 text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded quote text-sm">
"Exo is an agent that's fully recursive."
<div class="tiny opacity-65 mt-1 not-italic">— Exo 的一句话定义</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded quote text-sm">
"It's really a big context construction machine"
<div class="tiny opacity-65 mt-1 not-italic">— 对 agent 的共享定义</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded quote text-sm">
"In harness space, we actually have an opportunity to enforce certain properties by the architecture of the system that we design"
<div class="tiny opacity-65 mt-1 not-italic">— 架构约束的价值</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded quote text-sm">
"The executive is fully stateless."
<div class="tiny opacity-65 mt-1 not-italic">— 三层拆分的关键</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded quote text-sm">
"The secret store is really great. We want it to live in the exo harness so that it's not exposed directly to the LLM."
<div class="tiny opacity-65 mt-1 not-italic">— 秘密隔离</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded quote text-sm">
"The problem of specifying what you want to an agent is still an open one."
<div class="tiny opacity-65 mt-1 not-italic">— evaluator 与目标</div>
</div>

<div class="p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded quote text-sm">
"the code is the thing being produced and is also the thing running at this layer"
<div class="tiny opacity-65 mt-1 not-italic">— 为什么现在可能出现 RSI</div>
</div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded quote text-sm">
"there might need to be some better notion of like interruptible work for agents on their side."
<div class="tiny opacity-65 mt-1 not-italic">— 实时与后台任务</div>
</div>

</div>

---
layout: end
---

<!-- Quote audit: Q9 L1348-1349. Verified with rg -U before writing. -->

# "I'm so excited to be in this space right now."

<div class="mt-8 text-sm opacity-70">
Alex Krentsel · Exo × Latent Space<br/>
模型写代码 → harness 看见自己 → 运行时修改 → eval 决定是否保留
</div>
