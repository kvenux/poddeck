---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Sandboxing, Agent Harnesses, and Agent Teamwork'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<div class="text-sm tracking-[0.28em] uppercase text-blue-700 mb-5">MLOps.community · AI SRE</div>

# Sandboxing, Agent Harnesses,<br>and Agent Teamwork

<div class="text-xl mt-5 text-slate-600">从 harness 的边界，到 agent 团队的治理</div>

<div class="mt-10 flex justify-center gap-3 text-sm">
  <span class="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">Shahram Anver</span>
  <span class="px-4 py-2 rounded-full bg-purple-50 border border-purple-200">Demetrios Brinkmann</span>
</div>

<div class="mt-6 text-xs opacity-55">80 分钟深度对谈 · PodDeck</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-5 text-left text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Harness 不是壳
它是模型与用户之间的 prompts、skills、tools、上下文与反馈回路。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 自由与边界同增
模型能力越强，内部越应放开；外部 sandbox 越要坚固。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 验证比搜索更难
能调查不等于能确认；生产系统里的真相分散、动态且公司特有。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 人类转向例外审批
不再逐行接管，而是在方向、风险与越界决策上介入。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 记忆必须可复利
Slack、代码、日志与评分，要沉淀为可修订的决策知识。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Agent 也需要组织设计
隔离、共享上下文、职责分工与治理结构，都会成为团队问题。
</div>

</div>

<div class="mt-5 text-xs opacity-60">作者概括：这期真正讨论的不是单个 agent，而是一个可运营的 agent 组织。</div>

---

# Harness：用户与模型之间的全部中间层

<div class="grid grid-cols-3 gap-5 mt-7 text-center">

<div class="p-5 rounded-lg bg-slate-50 border-2 border-slate-200">

### Model
<div class="text-3xl my-3">🧠</div>
推理能力只是系统的一部分
</div>

<div class="p-5 rounded-lg bg-blue-50 border-2 border-blue-200">

### Harness
<div class="text-3xl my-3">🧰</div>
prompts · skills · tools<br>logs · filesystems · permissions
</div>

<div class="p-5 rounded-lg bg-purple-50 border-2 border-purple-200">

### User
<div class="text-3xl my-3">🎯</div>
给出意图，也承受最终结果
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
关键不是给 agent 堆更多东西，而是暴露真正能让它表现更好的信息与能力。
</div>

---
layout: two-cols
---

# 三根支柱

<div class="space-y-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 快反馈
trace 与 eval 让错误尽早显形，agent 才能在飞行中修正路线。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 强边界
sandbox 限制爆炸半径，不替 agent 规定每一步。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 合适上下文
skills、tools 与环境信息决定它是否理解现场。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-pillars.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 快反馈不是追求零错误

<div class="grid grid-cols-3 gap-5 mt-7 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-400">

### 1 · 允许犯错
复杂调查本来就有探索性。把所有路径固定死，会牺牲适应性。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-400">

### 2 · 立即看见
日志查询过宽、上下文被淹没、六次尝试才完成一次查询，都应该进入 trace。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 3 · 只固化复发模式
持续出现的同类错误，才值得上升为 harness 设计；偶发错误可以交给反馈回路。
</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500">
作者概括：harness 的工作不是替 agent 思考，而是让错误变得便宜、可见、可纠正。
</div>

---

# 不是所有 LLM 流程都需要成为 agent

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 确定性流程

- 输入：代码 diff
- 标准：安全与代码规范
- 输出：pass / fail，并说明原因
- 适合：简单 LLM flow 或现成方案

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 开放式 agent

- 输入：复杂编码任务或生产事故
- 路径：动态搜索与工具组合
- 输出：调查、判断与行动
- 需要：专门的 harness、环境与验证

</div>

</div>

<div class="mt-7 text-center text-lg font-semibold text-slate-700">先判断任务是否需要探索，再决定是否需要 agent。</div>

---

# 失败故事：从蚁群架构退回单 agent

<div class="grid grid-cols-3 gap-4 mt-5 text-sm text-left">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 2023 年末
GPT-3.5 时代，GPT-4 刚出现。团队设想 queen 调度一群职责分明的 ants。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 复杂度反噬
弱模型配上昂贵架构，prompt 里甚至要用大写和感叹号反复要求 JSON。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 约三个月后
团队重建为 query agent：给一个问题，由单 agent 自己找到路径并回答。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-red-50 border border-red-200 rounded italic">“we rebuilt everything”</div>
<div class="p-4 bg-green-50 border border-green-200 rounded italic">“It's like a single agent.”</div>
</div>

---
layout: two-cols
---

# Harness 的演化不是单向加法

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
早期通过多角色与刚性工具弥补模型能力。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
模型变强后，单一可靠循环与工具组合反而更有效。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
真正长期保留的层，逐步下沉到 sandbox、验证与学习。
</div>

<div class="text-xs opacity-60">作者概括：每次模型跃迁，都应重新审视旧 harness 是否已经变成约束。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./rsp-ladder.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 工具越刚性，安全越简单；能力也越受限

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 早期 Cleric
不给 agent 直接使用 kubectl，而是写高度受限的自定义工具，只允许完成预设动作。

<div class="mt-4 text-sm opacity-70">好处：一开始就知道 agent 能做什么、不能做什么。</div>
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 模型变强之后
模型可以组合多个工具，旧的刚性接口开始阻碍性能；团队逐步允许 Bash 与 Python。

<div class="mt-4 text-lg italic">“The moment you give it bash and Python”</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-red-50 border-l-4 border-red-500">
代价同时出现：能力扩张后，安全问题不再由工具接口天然解决。
</div>

---
layout: two-cols
---

# 箱内自由，箱外强边界

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 箱内
允许 agent 组合工具、写 Bash/Python、尝试与纠错。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 箱外
严格控制权限、资源、网络与影响范围，让失败可承受。
</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xl italic">
“a really strong box.”
</div>

<div class="text-xs opacity-60">Shahram 对多年 mental model 变化的概括。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 反直觉：调查 agent 变成最不重要的一层

<div class="mt-8 p-7 rounded bg-blue-50 border-l-4 border-blue-500 text-2xl italic">
“the least important part of the stack.”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-left">

<div class="p-4 rounded border border-slate-200">

### 调查
连接工具、搜索线索、形成解释，已经越来越容易搭出可演示版本。
</div>

<div class="p-4 rounded border border-orange-200 bg-orange-50">

### 环境
不同公司的基础设施、约定与历史差异巨大，测试场景难以通用。
</div>

<div class="p-4 rounded border border-purple-200 bg-purple-50">

### 验证与学习
确认结论、监控结果、吸收组织知识，才是更难也更耐久的挑战。
</div>

</div>

---
layout: two-cols
---

# 耐久性在 demo 之下

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
模型与 agent loop 会快速商品化，不能把全部壁垒压在这里。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
真实环境、sandbox、回放验证与 operational memory 需要长期积累。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
生产系统的优势来自整栈闭环，而不是一次漂亮的回答。
</div>

<div class="text-xs opacity-60">作者概括：越接近真实组织与真实运行状态，越难被通用 harness 替代。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[430px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 同一种工具，不等于同一种环境

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 可迁移的高层问题
Shahram 在 Gojek 负责 ML platform，围绕定价、司机分配与 Kubernetes 做效率优化；这些问题对其他出行平台也很熟悉。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 不可直接迁移的现场
换到另一家公司，即使工具相同，服务拓扑、命名、约定、历史故障与排查优先级都不同。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
一个熟练使用 Kubernetes 的人，进入新组织也不会立刻高效；agent 同样需要学习本地环境。
</div>

---

# 搜索到答案，不等于验证答案

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Search
接上 MCP 与观测工具后，通用 coding agent 已能寻找可能的故障线索。

<div class="mt-4 text-sm opacity-70">问题：我能否找到一条看似合理的解释？</div>
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Verify
需要结合当前状态、公司约定、历史概率与行动后的指标，判断路径是否真的正确。

<div class="mt-4 text-lg italic">“the verification problem.”</div>
</div>

</div>

<div class="mt-7 text-center font-semibold">生产级可信度的瓶颈，常常从 search 移到了 verify。</div>

---
layout: two-cols
---

# Coding 与 SRE：两种相反的搜索几何

<div class="mt-5 space-y-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Coding agent
任务几乎无限，但主要事实集中在有限的一个或几个代码库里——向深处搜索。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### SRE agent
事故类型较有限，但答案可能分散在代码、配置、日志、基础设施与历史讨论中——向横向搜索。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 italic">
“the answer could be anywhere.”<br>“it's a needle in a haystack.”
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./character-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 严重事故有时反而更容易确认

<div class="grid grid-cols-2 gap-6 mt-7 text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 服务直接宕掉
严重、紧急，但信号通常更二元：某个关键组件不可用，问题边界明显。
</div>

<div class="p-6 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 延迟只升高 20%
没有明显断点，原因可能是上百种候选之一；必须理解公司的惯例与高概率路径。
</div>

</div>

<div class="mt-8 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
准确率越高，剩下的问题越 subtle；继续提升需要更多环境建模、验证和学习。
</div>

---

# 准确率提升会把系统推入更主观的区域

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">

<div class="p-4 rounded bg-slate-50 border border-slate-200">
<div class="text-2xl mb-2">①</div>
明显故障<br><span class="text-xs opacity-60">二元信号</span>
</div>

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<div class="text-2xl mb-2">②</div>
多工具搜索<br><span class="text-xs opacity-60">动态路径</span>
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
<div class="text-2xl mb-2">③</div>
公司特有判断<br><span class="text-xs opacity-60">本地概率</span>
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
<div class="text-2xl mb-2">④</div>
人机信任<br><span class="text-xs opacity-60">主观正确</span>
</div>

</div>

<div class="mt-8 text-center text-lg font-semibold">越接近最后一公里，技术问题越像组织问题。</div>

---

# 信任悖论：明显会错，反而让人保持警觉

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 30–40% 正确
工程师默认怀疑，于是主动复核；系统能力有限，但人的警觉仍在线。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 大多数时候正确
人开始形成隐性信任。偶尔一次错误，会绕过已经变钝的直觉警报。
</div>

</div>

<div class="mt-7 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">
“I almost like it when the agent's wrong”
</div>

<div class="mt-3 text-xs opacity-60">对谈中的工程师反馈：错误促使他检查。</div>

---

# 同样是 70%，用户体验完全相反

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Coding：70% 是节省
少敲 70% 的代码，剩余部分可以读 diff、写测试、补齐；识别错误的成本相对低。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### SRE：70% 可能是误导
在高压事故里沿错误路径走 20–30 分钟，用户感受到的不是帮助，而是被欺骗。
</div>

</div>

<div class="mt-8 text-center text-lg font-semibold">准确率不能脱离错误成本来评估。</div>

---

# 生产鸿沟同时来自心理与技术

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 心理门槛

- 值班人员风险厌恶
- 事故时肾上腺素升高
- 错一次就会快速损耗信任
- 对结论与行动的期望远高于 demo

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 技术门槛

- 真相分散在多种系统
- 当前状态持续变化
- 组织知识隐含在历史决策里
- 验证必须观察行动后的真实指标

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500">生产级 AI SRE 不是更聪明的问答器，而是能承担错误后果的闭环系统。</div>

---

# 我们正在变成 agent 的经理

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Token maxing
开始担心 agent 有没有足够 token、上下文与任务，像经理分配团队带宽。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 保持运行
办公室里讨论 Caffeinate 与 Amphetamine，让长任务不因机器休眠而中断。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Hopper
睡前再放一个任务进 hopper，醒来看到它接近完成，会产生强烈满足感。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
每次 agent 失败，人都会追问：我还应该给它什么？这与经理改善员工工作环境的动作高度相似。
</div>

---

# Agent 并行带来的不是纯吞吐，而是管理焦虑

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-5 rounded border-2 border-blue-200 bg-blue-50">
<div class="text-3xl mb-3">⚙️</div>
资源是否闲置？
</div>

<div class="p-5 rounded border-2 border-orange-200 bg-orange-50">
<div class="text-3xl mb-3">🧭</div>
任务方向是否正确？
</div>

<div class="p-5 rounded border-2 border-purple-200 bg-purple-50">
<div class="text-3xl mb-3">🧩</div>
上下文是否足够？
</div>

</div>

<div class="mt-8 p-5 rounded bg-red-50 border-l-4 border-red-500">
当人把 agent 数量当成勤奋指标，就会掉进黑洞：没有八个 agent 同时运行，仿佛自己什么也没做。
</div>

---

# 更好的角色：manager + craftsman

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Manager
拆目标、设边界、分配资源、解决阻塞，让多个 agent 朝同一方向工作。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Craftsman
理解手艺、掌握细节、判断质量，不把自己抽象成只看产出的 puppet master。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-purple-50 border border-purple-200 rounded italic">“of a manager and a craftsman.”</div>
<div class="p-4 bg-yellow-50 border border-yellow-200 rounded italic">“what is left is your taste”</div>
</div>

---

# 两种正确：做得出来，与做得对方向

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Execution correctness
功能能运行、没有明显 bug、按要求产出。模型会持续提高这类能力。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Directional correctness
该做 macOS app 还是 web app？它涉及客户覆盖、产品策略、限制与 taste。
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
嘉宾的判断：如果个人价值全部建立在第一类问题上，就必须重新思考自己在第二类问题中的位置。
</div>

---

# 人可以成为瓶颈，但必须有好理由

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Taste
人介入高层决策，注入对客户、产品与组织的判断，并持续训练这种判断力。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Adoption constraints
即使可以无限产出，客户也无法无限吸收变化；真实世界限制了可交付速度。
</div>

</div>

<div class="mt-7 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">
“your customers can't take that much change anyway.”
</div>

---

# 审查 decision trace，而不是读完所有代码

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不可扩展
八个并行 agent 可能生成大量代码，人无法逐行阅读每个实现。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 提升抽象层
记录关键选择：为什么做桌面端、为什么选这个方案、哪些约束被考虑。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可及时纠偏
人可以在错误方向扩大之前修改决策，而不是等全部产出后返工。
</div>

</div>

<div class="mt-8 text-center text-lg font-semibold">并行规模越大，越需要把可审查性设计进决策层。</div>

---

# 人类最适合审批例外

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 在边界内
给出预算、区域、行动权限与回滚规则；agent 可以自主完成常规工作。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 即将越界
当理由充分但要违反既定范围时，再把问题升级给人。
</div>

</div>

<div class="mt-7 p-6 rounded bg-purple-50 border-l-4 border-purple-500 text-xl italic">
“It can't call a meeting at 2:00 a.m.”
</div>

<div class="mt-3 text-xs opacity-60">SRE agent 若要在凌晨可靠行动，边界必须事先明确且可查询。</div>

---
layout: two-cols
---

# 例外审批要形成闭环

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
先把常规规则、允许动作与风险阈值变成机器可用的 policy。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
agent 在边界内自主行动，并用指标验证结果。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
只有不确定或越界时找人；人的决定再写回 policy。
</div>

<div class="text-xs opacity-60">作者概括：人不是每一步的批准者，而是例外与规则更新的负责人。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./decision-loop.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 最有价值的数据，正在变成决策边界

<div class="mt-7 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-2xl italic">
“that's the valuable data now.”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-left">

<div class="p-4 rounded border border-blue-200">

### 允许什么
哪些动作在什么条件下可以自动执行。
</div>

<div class="p-4 rounded border border-purple-200 bg-purple-50">

### 何时升级
哪些例外、风险与未知必须交给人。
</div>

<div class="p-4 rounded border border-green-200 bg-green-50">

### 如何复利
记录 agent 的决策与结果，让后续行为持续改进。
</div>

</div>

---

# Slack、代码、日志：三种互补证据

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Slack
历史决策、隐含约定、过去遇到同类问题时的讨论与结论。
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Code / Infra state
当前真实状态。一次晚间 commit 就可能让白天的讨论失效。
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Logs
运行时证据，告诉 agent 此刻系统实际发生了什么。
</div>

</div>

<div class="mt-7 p-4 rounded bg-green-50 border-l-4 border-green-500">
对谈中的优先级很明确：Slack、code、logs 三者已经能把系统带得很远。
</div>

---

# 先确定今天的真相，再回看历史

<div class="flex items-center justify-center gap-4 mt-9 text-center">

<div class="w-52 p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-700">Current state</div>
<div class="text-sm mt-2">代码 · Kubernetes · 配置</div>
</div>

<div class="text-3xl text-blue-500">→</div>

<div class="w-52 p-5 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold text-purple-700">Historical context</div>
<div class="text-sm mt-2">Slack · 文档 · postmortem</div>
</div>

<div class="text-3xl text-purple-500">→</div>

<div class="w-52 p-5 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700">Likely cause</div>
<div class="text-sm mt-2">以当前事实约束历史解释</div>
</div>

</div>

<div class="mt-10 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
只从历史拼出今天的真相很难；从当前状态出发，再向后查原因，更可靠。
</div>

---

# 记忆会腐烂：学习系统必须允许遗忘

<div class="mt-6 p-5 rounded bg-red-50 border-l-4 border-red-500 text-xl italic">
“Noise is inevitable.”
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 显式控制
用户可以要求记住某条规则，也可以删除错误或过时的 memory。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 隐式学习
系统从日常对话与调查中吸收模式，避免要求人反复手工标注。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 轻量反馈
五分与一分的评分，为整条 decision trace 提供高价值信号。
</div>

</div>

---
layout: two-cols
---

# Operational memory 如何复利

<div class="mt-6 space-y-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
Slack 提供历史意图，代码提供当前真相，日志提供运行现场。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
系统把它们压缩成可读、可编辑的决策知识，而不是永久塞入全部原文。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
下一次调查复用这些知识，再由结果与人的反馈继续修订。
</div>

<div class="text-xs opacity-60">作者概括：记忆的价值不在存得多，而在能否改善下一次行动。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-demand.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2027 设想：人醒来时，事故已经被闭环

<div class="text-xs opacity-60 mb-4">嘉宾设想的工作界面，不是已发生事实</div>

<div class="grid grid-cols-4 gap-3 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-t-4 border-blue-500">
<div class="font-bold mb-2">01 · Coding</div>
coding agent 修改配置并交付。
</div>

<div class="p-4 rounded bg-red-50 border-t-4 border-red-500">
<div class="font-bold mb-2">02 · Incident</div>
凌晨 2 点，指标出现异常。
</div>

<div class="p-4 rounded bg-orange-50 border-t-4 border-orange-500">
<div class="font-bold mb-2">03 · SRE</div>
SRE agent 识别关联、回滚变更并持续观察指标。
</div>

<div class="p-4 rounded bg-green-50 border-t-4 border-green-500">
<div class="font-bold mb-2">04 · Morning</div>
人看到报告、决策依据与结果；若未知，则收到一个待审批问题。
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500">
未来界面更像 exception inbox，而不是让人实时盯着每个 agent 的思考过程。
</div>

---

# Agent 组织里的 one-on-one 与 stand-up

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### One-on-one problem
人与单个 agent 在什么抽象层交流？答案是 policy、工作方式、允许动作与升级条件。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### Stand-up problem
coding、SRE、security 等 agent 如何同步计划、交换决策、避免重复与相互踩踏？
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
单 agent 的能力越成熟，团队协作就越成为新的系统瓶颈。
</div>

---
layout: two-cols
---

# 团队治理：不只是通信

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>Coding</strong>：最大化产品交付速度。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>SRE</strong>：保护可靠性，制衡高风险变更。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>Security</strong>：主动寻找攻击面与违例。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>Human</strong>：审批例外，定义最终方向。</div>

<div class="text-xs opacity-60">作者概括：共享状态不等于共享目标；职责与权力必须显式化。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-team.excalidraw"
  class="w-[390px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 隔离与共享，必须同时成立

<div class="grid grid-cols-2 gap-6 mt-5 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 必须隔离
不同 agent 拥有不同权限、上下文与目标；不能让子 agent 彼此覆盖资源或扩大影响范围。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 必须协作
coding agent 不需要知道 SRE agent 的内部实现，但要知道何时咨询它、必须听从什么、哪些只作参考。
</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-center text-sm">
<div class="p-3 rounded border border-blue-200 bg-blue-50">共享 decision log</div>
<div class="p-3 rounded border border-purple-200 bg-purple-50">RACI 式职责</div>
<div class="p-3 rounded border border-orange-200 bg-orange-50">异步协议 / A2A</div>
</div>

<div class="mt-5 text-xs opacity-60">对谈明确说明：Cleric 当时尚未采用这些开放 agent 通信标准。</div>

---

# 软件不会消失，但边界会重新划分

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Skill
个人化、薄、只需少量能力时，Markdown 与文件系统可能已经足够。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Lightweight app
需要一个简单界面或少数工作流，但维护成本仍然可控。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Durable software
BigQuery 这类高准确、高性能、长期维护的基础能力，不值得每个团队重新构建。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="p-4 bg-blue-50 border border-blue-200 rounded italic">“the hard easy part is building it.”</div>
<div class="p-4 bg-red-50 border border-red-200 rounded italic">“The hard part is maintaining it.”</div>
</div>

---

# Markdown 取代 Linear，又重新长出前端

<div class="grid grid-cols-4 gap-3 mt-7 text-sm text-center">

<div class="p-4 rounded bg-blue-50 border border-blue-200">
<div class="text-2xl mb-2">①</div>
任务状态迁到 Markdown
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">
<div class="text-2xl mb-2">②</div>
agent 直接读写文件与维护状态
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
<div class="text-2xl mb-2">③</div>
人只向 agent 询问进度
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
<div class="text-2xl mb-2">④</div>
为了给人展示，又 vibe-code 一个前端
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-4 text-sm text-left">
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">一方看到中间平台可以被文件系统替代。</div>
<div class="p-4 rounded bg-slate-50 border-l-4 border-slate-400">另一方强调 Linear 对 agent 摩擦很低，重建它未必值得。</div>
</div>

---

# 最危险的诱惑：把 side quest 当成 main quest

<div class="grid grid-cols-2 gap-6 mt-6 text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Side quest 有价值
探索新工具、修开源 bug、学习 GPU 或 Kubernetes，能带来乐趣与新知识。
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 但不要自我欺骗
工程创始人很容易因为 coding 反馈快，就把可见产出误认为公司最重要的进展。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="p-3 bg-yellow-50 border border-yellow-200 rounded italic">“side quests have become really tempting.”</div>
<div class="p-3 bg-purple-50 border border-purple-200 rounded italic">“it feels so productive.”</div>
</div>

<div class="mt-3 text-center text-sm font-semibold">Agent 降低了行动成本，却没有替你决定什么值得做。</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-4">8 条均已按本集 transcript 精确匹配验证</div>

<div class="grid grid-cols-2 gap-2 text-[13px] leading-tight text-left">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“a really strong box.”<div class="text-[10px] opacity-60 mt-1 not-italic">— sandbox：箱内自由，箱外坚固</div></div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“the least important part of the stack.”<div class="text-[10px] opacity-60 mt-1 not-italic">— 调查 agent 已不是耐久壁垒</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“the verification problem.”<div class="text-[10px] opacity-60 mt-1 not-italic">— 搜索之后真正困难的部分</div></div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“I almost like it when the agent's wrong”<div class="text-[10px] opacity-60 mt-1 not-italic">— 明显错误会保留人的警觉</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“what is left is your taste”<div class="text-[10px] opacity-60 mt-1 not-italic">— manager 之外仍要做 craftsman</div></div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">“It can't call a meeting at 2:00 a.m.”<div class="text-[10px] opacity-60 mt-1 not-italic">— 夜间自治依赖清晰边界</div></div>

<div class="p-3 bg-slate-50 border-l-4 border-slate-500 rounded italic">“it's a needle in a haystack.”<div class="text-[10px] opacity-60 mt-1 not-italic">— SRE 是横向、开放的搜索</div></div>

<div class="p-3 bg-pink-50 border-l-4 border-pink-500 rounded italic">“The hard part is maintaining it.”<div class="text-[10px] opacity-60 mt-1 not-italic">— 生成代码没有消灭软件成本</div></div>

</div>

---
layout: end
---

# “what is left is your taste”

<div class="mt-8 text-lg text-slate-600">Agent 会接管越来越多执行，<br>人需要把判断、边界与品味做得更好。</div>

<div class="mt-10 text-sm opacity-55">Shahram Anver · Sandboxing, Agent Harnesses, and Agent Teamwork</div>
