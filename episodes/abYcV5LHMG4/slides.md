---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Scaling Past Informal AI — Carina Hong, Axiom Math'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Scaling Past Informal AI

<div class="text-2xl opacity-80 mt-4">为什么数学的"形式化"突然变得这么贵？</div>

<div class="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center">

<div class="p-3 rounded bg-blue-50 border border-blue-200">
<div class="text-xs opacity-60">Guest</div>
<div class="font-semibold mt-1">Carina Hong</div>
<div class="text-xs opacity-70 mt-1">CEO & Founder, Axiom Math</div>
</div>

<div class="p-3 rounded bg-green-50 border border-green-200">
<div class="text-xs opacity-60">Series A</div>
<div class="font-semibold mt-1">$200M raised</div>
<div class="text-xs opacity-70 mt-1">~$1.6B valuation · 30 people</div>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200">
<div class="text-xs opacity-60">Putnam Dec 2025</div>
<div class="font-semibold mt-1">120 / 120</div>
<div class="text-xs opacity-70 mt-1">first formal AI to beat humans</div>
</div>

</div>

<div class="mt-8 text-sm opacity-60">Latent Space — AI for Science · with Brandon Anderson & R.J. Hanecki</div>

---

# 为什么这期特别

<div class="text-sm opacity-60 mb-6">一个 7-8 个月的 startup，刚刚筹了"整个美国数学界一年的研究预算"。</div>

<div class="grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold mb-1">Putnam 第一次</div>
<div class="text-sm opacity-80">120 完美分，比最强人类（110）和最强 LLM DeepSeek（103）都高——formal 第一次反超 informal。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-1">验证 ≠ 纠错</div>
<div class="text-sm opacity-80">Verification is not about lousiness. It's about <strong>scaling brilliance</strong>. 这是整期对话的论点。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold mb-1">TAM = all code</div>
<div class="text-sm opacity-80">"Right of first refusal on all AI-generated code"—不是 niche 安全行业，是所有代码生成的可选验证层。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold mb-1">Coding 的对照组</div>
<div class="text-sm opacity-80">2024 大家以为 Anthropic 的 coding 只是一个 vertical——结果它横向迁移到 reasoning。Math/Lean 是同一个 bet。</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold mb-1">硬件那一刀</div>
<div class="text-sm opacity-80">"No partial credit for a mostly verified GPU." ASIC 设计与验证人力比 1:3 ~ 1:4，是 must-have 市场。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold mb-1">Frontier labs 都散了</div>
<div class="text-sm opacity-80">DeepSeek 解散过 formal team；OpenAI 的 miniF2F/3PF 那批人全离职。空白被 startup 填上。</div>
</div>

</div>

---

# 公司的 7 个月

<div class="grid grid-cols-4 gap-3 mt-4">

<div class="p-4 rounded bg-blue-50 border border-blue-200 text-center">
<div class="text-3xl font-bold text-blue-700">$200M</div>
<div class="text-xs opacity-70 mt-1">Series A（preemptive）</div>
</div>

<div class="p-4 rounded bg-green-50 border border-green-200 text-center">
<div class="text-3xl font-bold text-green-700">$1.6B</div>
<div class="text-xs opacity-70 mt-1">post-money valuation</div>
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200 text-center">
<div class="text-3xl font-bold text-orange-700">~30</div>
<div class="text-xs opacity-70 mt-1">people (Nov 2025)</div>
</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200 text-center">
<div class="text-3xl font-bold text-purple-700">7–8 mo</div>
<div class="text-xs opacity-70 mt-1">since founding (IMO day)</div>
</div>

</div>

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"$250 million is our annual U.S. math budget — Axiom just raised almost that in one round."
</div>

<div class="mt-3 text-sm opacity-60">—— 主持人引同事的 LinkedIn post · 完整原话基本是逐字</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-sm"><strong>团队构成</strong>：顶尖 olympiad / 研究数学家 + Mathlib 维护者（Kenny 来自 Kevin Buzzard 团队）+ Metafair / 编译器 codegen 老兵</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm"><strong>商业本质</strong>：DNA 是 math，但 <em>"verification is the best first market"</em>。</div>
</div>

</div>

---
layout: two-cols
---

# Putnam: formal 第一次反超 informal

<div class="text-sm opacity-60 mt-2">Dec 2025 · 120 总分 · Math Arena 评测</div>

<div class="mt-6 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>最强 LLM：DeepSeek 103</strong>
<div class="text-xs opacity-70 mt-1">Math Arena 评测中表现最好的 informal 模型</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>最强人类：110</strong>
<div class="text-xs opacity-70 mt-1">"a student from either MIT or Chicago"—顶五没公布姓名</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Axiom：120（完美）</strong>
<div class="text-xs opacity-70 mt-1">"the first time formal beat informal LLM on superhuman tasks"</div>
</div>

</div>

<div class="mt-6 text-xs opacity-70">
Carina：当我们起步时，大家都质疑——"data 比 frontier lab 少几个数量级的 formal system 真能追上 informal LLM 吗？" Putnam 是第一次。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./putnam-bars.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 论点：验证不是为了纠错，是为了放大

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="italic text-lg leading-relaxed">
"Verification to me is not about lousiness. Verification to me is about <strong>scaling brilliance, compounding brilliance</strong>."
</div>
<div class="text-xs opacity-60 mt-2 not-italic">— Carina, 开场原话</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold mb-1">❌ 主流叙事</div>
<div class="text-sm">"形式化验证是 chatbot hallucination 的解药"——把 verification 当成纠错、消除 lousiness、税务合规的 burden。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-1">✅ Axiom 的立场</div>
<div class="text-sm">Verification 是放大已有的 brilliance。Ramanujan 学了形式证明之后才把直觉变成定理，让后世数学家 build on top。</div>
</div>

</div>

<div class="mt-5 text-sm opacity-70">
Carina 用 Ramanujan 的故事打比方：Hardy 在剑桥强迫他写严格证明，纠正"直觉派"——之后他的结果作为 theorems 被几代数学家延伸。验证 = scale up + scale out。
</div>

---

# 形式化验证不是新东西——但视角变了

<div class="text-sm opacity-60 mb-4">"a lot of people think about formal verification as an ancient subject"</div>

<div class="space-y-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>1980s · 巴黎工会</strong>
<div class="text-sm opacity-80 mt-1">"the Paris trade union demanded that the automatic switching of the subway system needs to be formally verified for safety purpose"——劳工组织要求，听起来有点超现实。</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Challenger 前后 · 欧洲航天局</strong>
<div class="text-sm opacity-80 mt-1">ESA 用 formal verification 为 Ariane 火箭做验证。"Boeing, Airbus" 也都用。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>近年 · AWS Automated Reasoning</strong>
<div class="text-sm opacity-80 mt-1">"because they have a lot of enterprise customers that really requires things to be to be 100% verified and there's no edge cases missed"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>2024+ · AI 时代</strong>
<div class="text-sm opacity-80 mt-1">"verified AI is for openness, it's not for meeting the requirements of closed industries"——视角从 compliance 反转成 collaboration。</div>
</div>

</div>

---
layout: two-cols
---

# Lean 是什么

<div class="text-sm opacity-60 mt-2">不是 chatbot 的拼写检查器</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>形式语言家族</strong>：和 Isabelle、Coq / Rocq、Dafny、Agda 是表亲。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Curry-Howard 对应</strong>：proof = program，type-checker 通过 = 证明正确。一个 turing-complete 的 functional language。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>双重用途</strong>：既能写数学（Mathlib 已建好的代数库），也能写代码（"候选人面试用 Lean 实现了 autograd"）。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>tactics 帮你跳过 low-level</strong>：例如 <code>grind</code> 能搞定大量低层证明，让数学家在 high-level intuition 空间游走。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lean-curry-howard.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# TAM 不是航天/医疗，TAM 是 all code

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"The TAM is all code. The TAM is a right of first refusal on all AI-generated code—right of first refusal meaning you get to choose whether you want to verify it."
</div>

<div class="text-xs opacity-60 mt-2">—— Carina · 完整原话</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-1">关键反转</div>
<div class="text-sm opacity-80">"verified generation means <strong>performance gain</strong>" — 不是合规 tax，是采样效率。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold mb-1">小公司的杠杆</div>
<div class="text-sm opacity-80">"a startup like us with lesser compute budget, lesser data budget than Frontier Lab will be able to match even exceed performance on superhuman tasks"</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>判别</strong>：作者不否认有些场景<em>不</em>需要 formal verification（侄子 vibe-code 一个 lovable 网站），但<em>"the improvement of verification capability ... is going to determine whether people rely on formal verification or not"</em>——把它做到够快够准，verification 就从负担变成默认选项。
</div>

---
layout: two-cols
---

# 与 frontier labs 的差别

<div class="text-sm opacity-60 mt-2">同一个 base model，不同的 post-training</div>

<div class="mt-5 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>开源 base</strong>——和别人差不多的起点（"inclination for open source base models"）。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Lean data</strong> + RL/SFT post-training——"all the data we have that's lean proofs, you know it's correct."
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>推理时扩展</strong>——"scaling inference to have almost no wall"，递归分解 proof goal 为 sub-goals + 学习 backtrack。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Axiom Prover</strong> 是 ensemble system，不是单个 LLM——已见证从 40 节点的证明树 scale 到 4000 节点。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./verification-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 弱点：现在做不动什么

<div class="text-sm opacity-60 mb-4">作者主动承认的 distribution shift</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-2">✓ 做得动</div>
<div class="text-sm space-y-1">
<div>· Number theory（数论）</div>
<div>· Commutative algebra（交换代数）</div>
<div>· Algebraic geometry</div>
<div>· Discrete math · 概率</div>
</div>
<div class="text-xs opacity-70 mt-2">Mathlib 里 algebra 部分相对完整</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold mb-2">✗ 做不动</div>
<div class="text-sm space-y-1">
<div>· Differential topology</div>
<div>· Differential geometry</div>
<div>· 大量 combinatorics 创造性步骤</div>
</div>
<div class="text-xs opacity-70 mt-2">"Mathlib 没建好 → 我们的系统也没有定义去 build on"</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>关于 IMO 的诚实评估</strong>：2024-2025 IMO，AI 模型基本能解所有<em>非</em> combinatorics 的题——区别只在 combinatorics 题数。Carina 自承"我自己也不算 combinatorics 强项"。
</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">
所以 Axiom 另起一条线：<strong>mathematical discovery</strong>——pre-conjecturing 阶段帮人找 construction，这部分 Lean 本身做不了。即将开源两个 codebase。
</div>

---
layout: two-cols
---

# Code with proof：3.6% → 99%

<div class="text-sm opacity-60 mt-2">CodeMarina · Berkeley & Meta 2025</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>GPT pass@1</strong>：3.6%；iterative 约 22%。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>DeepSeek Prover · Goedel Prover</strong>：~11-12%。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Harmonic（去年，仅 proof 部分）</strong>：96%。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Axiom（Putnam 系统直接套用，无修改）</strong>：99% — 189 题做对 187，<strong>code + proof</strong>。
</div>

</div>

<div class="mt-4 text-xs opacity-70">
关键："code + proof"——一段 Rust（强类型）代码 + 一段 Lean 证明，证明代码满足规约。RL 信号清晰。<br/>
如果一边是 Python 代码、一边是英文证明，<em>"that's like just mix objective function … you will not have very strong RL"</em>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./code-with-proof.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Auto-formalization 这堵墙

<div class="text-sm opacity-60 mt-2">"the scaling law of that — I don't have a good answer"</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>1 line of code → ~20 lines of proof</strong>
<div class="text-xs opacity-70 mt-1">"for each line of code written there could be like 20 lines of proof" — 而且 scaling law 还不清楚是否线性。</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>规约本身是难题</strong>
<div class="text-xs opacity-70 mt-1">"please prove the financial audit for me, right? What does that mean? Humans are bad at specifying everything that we want."</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>口号</strong>："anything that can be specified can be proven"——但<em>能</em> spec 才是稀缺品。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>解法</strong>：informal LLM 提建议（"have you thought about this case?"）；formal prover 出严格证明——两边互补。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./proof-ratio.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Mathematical Discovery：开源即将上线

<div class="text-sm opacity-60 mb-4">"proof is not enough for math" — 在证明之前要先猜对方向</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold mb-1">为什么需要 discovery</div>
<div class="text-sm">人类数学家面对一个新猜想时，往往先写若干小例子（前几项序列、简单 graph 构造）。<em>Lean 没法做这种 construction。</em></div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-1">即将开源的两个 codebase</div>
<div class="text-sm">"open sourcing entire code bases" — 面向数学家 / 理论物理学家，配 manual。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold mb-1">谁在做</div>
<div class="text-sm">Charton（"OG in that field, member of technical staff at Axiom"），之前做过 Pattern Boost、用 counter-example 推翻一个 30 年的猜想。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold mb-1">和 prover 的分工</div>
<div class="text-sm">Discovery 找 conjecture + construction → Axiom Prover 出严格证明。前者帮人类找 spec，后者帮人类做验证。</div>
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
<strong>具体战绩</strong>：Charton 用类似工具<em>"found the solution to 130-year-old problem, the global Lyapunov function"</em>——三体问题里的一个数学对象。
</div>

---

# AXL：Axiom Lean Engine

<div class="text-sm opacity-60 mb-4">"Claude + AXL is kind of their go-to setup"</div>

<div class="grid grid-cols-3 gap-3 mt-2">

<div class="p-3 rounded bg-blue-50 border border-blue-200 text-center">
<div class="text-2xl font-bold text-blue-700">14</div>
<div class="text-xs opacity-70 mt-1">meta-programming tools</div>
</div>

<div class="p-3 rounded bg-green-50 border border-green-200 text-center">
<div class="text-2xl font-bold text-green-700">100×</div>
<div class="text-xs opacity-70 mt-1">faster verify_proof vs 对手 comparator</div>
</div>

<div class="p-3 rounded bg-orange-50 border border-orange-200 text-center">
<div class="text-2xl font-bold text-orange-700">Free</div>
<div class="text-xs opacity-70 mt-1">for the Lean community</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold mb-1">verify_proof</div>
<div class="text-sm">挡住 Lean 里的"作弊"——比如证明 <code>n+n = n</code> 然后导出 <code>2+2 = 2</code>，把 <code>sorry</code> 之类的漏洞掐掉。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold mb-1">repair attempts</div>
<div class="text-sm">"broken lean in, good lean out"——比让 LLM 反复 retry 便宜得多、更靠谱。</div>
</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">
<strong>Putnam 故事</strong>："we were all in the war room. It was a Saturday … without it we couldn't have solved the 8 problems within the time limit." AXL 不止是 SDK，是他们自己赛场上的工具链。
</div>

---
layout: two-cols
---

# 硬件验证：必须 100% 的市场

<div class="text-sm opacity-60 mt-2">为什么 verified AI 不是软件公司专利</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>"No partial credit for a mostly verified GPU"</strong>
<div class="text-xs opacity-70 mt-1">非 0 即 1。软件可以重试 GPT 100 次都没事，硬件 tape-out 后改不了。</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>ASIC 设计 ↔ 验证人力比 1:3 ~ 1:4</strong>
<div class="text-xs opacity-70 mt-1">"both in team size and then duration"——验证团队既比设计团队大几倍，又花更长时间。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>现状：人力堆出来的</strong>
<div class="text-xs opacity-70 mt-1">"there are hundreds of humans and thousands of licenses being dedicated to solve one local grid problem verification."</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>对 Axiom 的意义</strong>
<div class="text-xs opacity-70 mt-1">这是个 must-have 市场，不是 nice-to-have——验证能力一提升就直接吃需求。</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./verify-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Erdős 事件：他们公开认错

<div class="text-sm opacity-60 mb-4">小公司的一次 PR 危机，反而暴露了一个有意思的 search 问题</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold mb-1">发生了什么</div>
<div class="text-sm">竞品 Harmonic 公开宣称解决了 Erdős #124 和 #481。Axiom 信任了对方的 literature review，也用自己的系统去"重新解"，竟然真做出来——然后发现：<strong>那两题其实早被解过</strong>。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold mb-1">第二次：dead ends in square-free walks</div>
<div class="text-sm">教授 Miller 的一个问题——其实有人在 1936 年解过，<em>通过一个 Stack Overflow 帖子</em>挖出来。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold mb-1">作者的态度</div>
<div class="text-sm">"we should own it"——Carina 直接开玩笑想拍那种"日本企业全员鞠躬道歉"的广告。<em>"It's so embarrassing."</em></div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold mb-1">真正的洞察</div>
<div class="text-sm">"search and retrieval is a hard problem"——很多 Erdős 问题其实是另一个已解结果的 trivial extension，但全网没人 index。<strong>Knowledge graph 是真壁垒。</strong></div>
</div>

</div>

---

# 个人故事：从神经科学到法学院到 PhD 创业

<div class="mt-2 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Oxford 神经科学硕士</strong>
<div class="text-sm opacity-80 mt-1">"my year of neuroscience like give me some feelings about <em>what's hard</em> and almost no feeling about what might work." 期间挂在 UCL Gatsby 计算神经研究所——"premier AI hub"——做 AI 研究。"看到 transformer 的项目就跑过去了。"</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Stanford JD/PhD：先一年法学院全职</strong>
<div class="text-sm opacity-80 mt-1">"the first year where I had no science, technology, math whatsoever in my life." 着迷于上诉律师的"legal gymnastics"——Lawrence Tribe 等顶级 appellate lawyer 都是数学训练出身。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>那一年的 obsession</strong>
<div class="text-sm opacity-80 mt-1">业余时间猛读 post-training 论文。"I fall madly in love with the idea that AI is going to do math." 几乎刚进 PhD 就开始 fundraise。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>触发点：Julie Zhuo 的午餐</strong>
<div class="text-sm opacity-80 mt-1">在 Hennessy 学者午餐会上拦住 Julie Zhuo（Facebook 第一个 PM），问"想创业但又喜欢学术怎么办？"——"What's your time spent on these two? — 100% / 0%. — Well, you kind of have to <strong>follow your energy</strong>."</div>
</div>

</div>

---

# Frontier labs 在做吗？基本都散了

<div class="text-sm opacity-60 mb-4">为什么这是一个 startup 的窗口</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold mb-1">DeepSeek</div>
<div class="text-sm">"originally having a formal team and then later dissolve that team because of strategic direction change. That's completely reasonable." 公司方向变了，团队就没了。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold mb-1">OpenAI</div>
<div class="text-sm">主持人："3PF、miniF2F 那些 formal math 工作不是 OpenAI 做的吗？" Carina："they all left." 即做 formal 的人当年都已离职。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold mb-1">理由：大公司 churn</div>
<div class="text-sm">"You can't be an intern forever … weirdly, people think about startup as runway can run out — you might have a better chance of <strong>staying focused on the same problem for as long as it takes</strong> at a startup."</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-1">商业建议</div>
<div class="text-sm">对 frontier lab："just call Axiom API for verification — 像 Frontier Labs 现在 call Exa/Parallel 做 search 一样"——而不是自建。</div>
</div>

</div>

---

# 最大瓶颈：Fragmentation

<div class="text-sm opacity-60 mb-4">作者眼中的 AI 行业 meta-问题</div>

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="italic text-lg leading-relaxed">
"We're in a market where people like to start, like, you know, a thousand people, they don't join force, they start a thousand things … I think that's actually the biggest bubble indicator."
</div>
<div class="text-xs opacity-60 mt-2 not-italic">— Carina 谈整个 AI 生态</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold mb-1">分清两种"看起来 bubbly"</div>
<div class="text-sm">真泡沫 = 类别里全是分裂的小队；moonshot = 像 SpaceX 那种，"people do actually join force to work on that dream"。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold mb-1">AI for Math 反而不是泡沫</div>
<div class="text-sm">"because of the absence of fragmentation" — 顶尖人才愿意聚到一起（例：Kaiyu Yang、François Charton 都在同一家）。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold mb-1">RL 人才反例</div>
<div class="text-sm">"companies being started then sold three months later … each month where you could have worked on a technical problem and you're instead working on deals is a month wasted."</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold mb-1">未来的真瓶颈</div>
<div class="text-sm">"trying to prove commercial value is going to distract significantly from the core capability improvement." 一旦 category 出现领导者，分裂会跟上。</div>
</div>

</div>

---

# 收尾：为什么 verified AI = openness

<div class="text-sm opacity-60 mb-4">不是封闭行业的合规要求，而是开放协作的前提</div>

<div class="grid grid-cols-3 gap-3 mt-2">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs opacity-60 mb-1">Layer 1</div>
<div class="font-semibold">Human ↔ Human</div>
<div class="text-sm opacity-80 mt-1">blueprint writing — Terence Tao 给不同人分配 sub-task；polymath 大型协作</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60 mb-1">Layer 2</div>
<div class="font-semibold">Human ↔ AI</div>
<div class="text-sm opacity-80 mt-1">"Lean was a grounding, was a verification formal language" — 现在已发生</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60 mb-1">Layer 3</div>
<div class="font-semibold">AI ↔ AI</div>
<div class="text-sm opacity-80 mt-1">"future AI agent agent agent collaboration" — agents 需要可验证的契约才能互信</div>
</div>

</div>

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Verified AI is for openness. It's not for meeting the requirements of closed industries."
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>作者概括</strong>：传统叙事是"verification 给军工、医疗、金融这些 closed industry 做合规"；Axiom 的反转是——下一个时代的<em>合作</em>需要 verification 作底层 trust 协议。封闭行业是结果，不是市场。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对话里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Verification to me is not about lousiness. Verification to me is about scaling brilliance, compounding brilliance."
<div class="text-xs opacity-60 mt-1 not-italic">— 整期最重要的一句论点，开场反复强调</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"The TAM is all code. The TAM is a right of first refusal on all AI-generated code."
<div class="text-xs opacity-60 mt-1 not-italic">— 拒绝把 Axiom 框成 niche compliance vendor</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"There's no partial credit for a mostly verified GPU."
<div class="text-xs opacity-60 mt-1 not-italic">— 解释硬件验证为何必须 100%</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Anything that can be specified can be proven."
<div class="text-xs opacity-60 mt-1 not-italic">— Axiom 对 Rice 定理的实用妥协口号；规约本身才是 bottleneck</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"When it comes to faith, you either have it or you don't. … When we realize the dream the company is going to be worth 10 billion."
<div class="text-xs opacity-60 mt-1 not-italic">— 被问"投资人凭啥"时的回答</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"You kind of have to follow your energy."
<div class="text-xs opacity-60 mt-1 not-italic">— Julie Zhuo 在 Hennessy 午餐会上的一句话，把 Carina 从 PhD 推到 founder</div>
</div>

</div>

---
layout: end
---

# Verified AI is for openness.

<div class="text-lg mt-6 opacity-90">
不是给封闭行业做合规，是给开放协作做底座。
</div>

<div class="text-sm mt-12 opacity-75">
Latent Space · AI for Science · Carina Hong, Axiom Math · Dec 2025
</div>
