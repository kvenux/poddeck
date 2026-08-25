---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'This CPO regrets that product management exists | Tom Verrilli (CPO of Whatnot)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
themeConfig:
  paginationX: ''
  paginationY: ''
---

<!-- 01 -->

<div class="text-sm tracking-[0.24em] uppercase text-orange-600 mb-5">Lenny's Podcast · PodDeck</div>

# 一个 CPO，为什么后悔<br>产品管理这个职能存在

<div class="mt-5 text-xl font-semibold">This CPO regrets that product management exists</div>

<div class="mt-8 text-base opacity-70">
Tom Verrilli · Whatnot Chief Product Officer
</div>

<div class="mt-10 inline-flex gap-3 text-xs">
  <span class="px-3 py-1 rounded-full bg-orange-50 border border-orange-200">产品组织</span>
  <span class="px-3 py-1 rounded-full bg-blue-50 border border-blue-200">资深 IC</span>
  <span class="px-3 py-1 rounded-full bg-purple-50 border border-purple-200">AI 杠杆</span>
</div>

---

<!-- 02 -->

# 为什么这期值得听

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### PM 不是默认配置
组织规模变大，不等于每支工程团队都必须配一名 PM。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 职能按问题流动
Whatnot 把 PM 分配给半年内必须解决的公司问题，而非永久绑定团队。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 招聘标准重写
政治型协调能力降权，宏观系统感、微观执行力与实际案例升权。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 高层重新做 IC
经理和 VP 继续做一线产品工作，用经验缩短决策链路。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### AI 放大判断力
数据、代码与用户行为更容易同时被看见，判断成为真正的瓶颈。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 增长不能遮住个体
平均数可能合理，却会摧毁少数用户赖以生存的核心用例。
</div>

</div>

---

<!-- 03 -->

# 产品管理，是规模化之后出现的代理层

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 早期
创始人和业务负责人直接与工程、设计讨论要做什么，决策上下文没有经过转译。
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 规模化
互联网公司扩张太快，执行细节与下一步选择需要被委派给专门的人。
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 比例固化
每增加一组工程师，就机械地补齐设计、PM 与工程经理，岗位从需要变成惯例。
</div>

</div>

<div class="mt-8 p-5 rounded bg-slate-50 border-l-4 border-slate-400 text-left">
<strong>作者概括：</strong>Tom 质疑的不是产品工作，而是把决策代理层当成组织自然法则。
</div>

---
layout: two-cols
---

<!-- 04 -->

# 后悔的对象，是被默认外包的判断力

<div class="text-sm mt-4 space-y-4 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 text-xl italic">
“we regret that product management exists.”
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
当上下文总由 PM 转发，工程师和设计师就失去直接理解用户、商业与取舍的练习。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
Tom 的目标是尽可能让工程与设计直接获得上下文，并自己做出高质量决定。
</div>

<div class="text-xs opacity-60">原文事实：这不是取消 PM，而是拒绝默认配置。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pm-muscle.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

<!-- 05 -->

# PM 是一门手艺，也是一块会萎缩的肌肉

<div class="grid grid-cols-2 gap-7 mt-7 text-sm text-left">

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 专业化的正面
产品判断靠反复练习变强。优秀 PM 能吸收模糊、传播清晰、推动及时决策，让工程与设计专注各自技艺。
</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 专业化的代价
如果每次用户理解、取舍与决策都交给 PM，工程师和设计师的同类能力就得不到训练。
</div>

</div>

<div class="mt-8 p-6 rounded bg-blue-50 border border-blue-200 text-center text-2xl italic">
“muscles are built by reps.”
</div>

---

<!-- 06 -->

# 什么时候真的需要 PM

<div class="grid grid-cols-2 gap-6 mt-6 text-sm text-left">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 值得投入专职 PM

- 问题必须高质量解决，且跨越用户、商业与技术
- 需要从客户表达中识别真正问题
- 多项专业能力必须被协调到同一结果
</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 可以让团队直接承担

- 工程团队已有足够上下文
- 决策主要来自明确的技术约束
- 设计或工程负责人愿意完成正式产品评审
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-left">
Whatnot 的边界很清楚：任何人都能成为产品开发 DRI，但都必须完成真实的产品工作与评审。
</div>

---
layout: two-cols
---

<!-- 07 -->

# PM 跟着问题走，不跟着组织框走

<div class="text-sm mt-5 space-y-4 text-left">
<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
团队目前约有 21–22 名 PM，宽松分布在买家、卖家、信任与风险三组。
</div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
PM 可以大致属于增长或发现方向，但会随着公司优先级频繁重配。
</div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
分配依据是问题所需的金融、算法推荐或核心用户功能能力，而非固定汇报线。
</div>
<div class="text-xs opacity-60">原文事实：PM 被映射到问题或核心项目。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./problem-allocation.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

<!-- 08 -->

# 半年规划：先写必须成真的事，再找负责人

<div class="grid grid-cols-4 gap-3 mt-7 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-2xl font-bold text-blue-600 mb-2">01</div>
CEO、CPO 与资深负责人定义未来 6 个月的公司结果和关键项目。
</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-2xl font-bold text-purple-600 mb-2">02</div>
逐项明确 DRI：谁对结果真正负责。
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-2xl font-bold text-orange-600 mb-2">03</div>
发现重要但在多个路线图里都只排第二或第三的问题。
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-2xl font-bold text-green-600 mb-2">04</div>
把合适的 PM 配过去，让他在半年内弄清并交付。
</div>

</div>

<div class="mt-8 p-5 rounded bg-slate-50 border-l-4 border-slate-400">
关键不是先规定功能长什么样，而是先把无人承担、却必须解决的问题显性化。
</div>

---
layout: two-cols
---

<!-- 09 -->

# 31,832 份申请，录用 1 人

<div class="text-sm mt-5 space-y-4 text-left">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 text-lg italic">
“In the last 2 years, 31,832 people applied to be a product manager at Whatnot. We hired one.”
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
所有岗位最终都要完成动手案例；PM 候选人拿到题目和数据，写出 PRD，再口头 defend。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
面试表达很好的人，一进入具体决策，思考质量可能迅速衰减。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./hiring-funnel.excalidraw" class="w-[440px]" :darkMode="false" :background="false" />
</div>

---

<!-- 10 -->

# 招聘中正在降权的能力：组织政治

<div class="grid grid-cols-2 gap-7 mt-7 text-sm text-left">

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 反模式

- 反复强调推动 alignment
- 把 stakeholder management 当主要专长
- 失败复盘只剩没有及时向 CEO 汇报
- 在大公司维护既有惯性，却没有做过关键决定
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### Whatnot 想看到

- 亲自定义并推进一个复杂变化
- 讲清沿途做过的具体决定
- 能创造新东西，也能快速验证
- 成为改变的行动者，而非流程看护人
</div>

</div>

<div class="mt-7 p-5 rounded bg-orange-50 border border-orange-200 text-center text-2xl italic">
“it was politics.”
</div>

---

<!-- 11 -->

# 好 PM 必须同时能看宏观，也能落到微观

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Macro
构造系统如何运转的模型，描述终局，并看到业务里会产生复利的向量。

<div class="mt-4 text-xs opacity-65">思考：如果使用量是预期的 1,000 倍，会发生什么？</div>
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Micro
表现出对验证的急迫感：最小证据是什么、下一步如何迅速完成、具体决策在哪里。

<div class="mt-4 text-xs opacity-65">实验前先问：结果为正或为负，策略分别怎么变？</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">
在高速增长环境里，目标不是孤立的 5% 统计提升，而是能真正移动业务并持续复利的变化。
</div>

---
layout: two-cols
---

<!-- 12 -->

# Know then go：先想透风险，再继续向前

<div class="text-sm mt-5 space-y-4 text-left">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-2xl italic text-center">
“know then go.”
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
先演算广泛采用、规模失效、法律、财务与其他团队的连锁反应。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
不要求提前解决所有风险；理解它们之后仍然行动，往往会自然预防其中一部分。
</div>

<div class="text-xs opacity-60">作者概括：深思熟虑的目的，是解除行动阻力。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./know-then-go.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

<!-- 13 -->

# 旧晋升路径，把最会做产品的人移出了产品工作

<div class="mt-6 p-7 text-2xl italic border-l-4 border-red-500 bg-red-50">
“then promoted them out of doing things.”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-left">

<div class="p-4 rounded bg-red-50 border border-red-200">

### 晋升后
成功 PM 成为 director，目标改成指导、教练与组织对齐。
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

### 组织后果
一线 PM 写完材料再等待多层 review，形成反复退回的 yo-yo 开发过程。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

### Whatnot 的反转
让最资深的人继续接触客户、数据、代码、工程与设计，直接推动交付。
</div>

</div>

---

<!-- 14 -->

# 在 Whatnot，管理者的主业仍是 IC

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-4xl font-bold text-blue-600">4–5</div>
<div class="mt-3">名产品团队成员管理其他 PM</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-4xl font-bold text-green-600">90%+</div>
<div class="mt-3">这些经理投入 IC 工作的时间</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-4xl font-bold text-orange-600">≈ 50%</div>
<div class="mt-3">Tom 自己投入 IC 工作的时间</div>
</div>

</div>

<div class="mt-8 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
资深经验的价值不是多开一次 review，而是更快识别可行方向、亲自拉数据、读工单、查代码并写清交付规格。
</div>

---

<!-- 15 -->

# 让同一个资深负责人看见更大的棋盘

<div class="grid grid-cols-2 gap-6 mt-6 text-sm text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Twitch 的冲突
发现团队和广告团队长期争夺 feed impressions；各自优化发现指标和广告收入，政治与往返不断累积。
</div>

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 合并责任
Tom 把广告放进发现，并让同一名 PM 同时负责两者，把共同目标拉回 feed 产生的 GMV。
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-6 text-sm">
<div class="p-4 rounded bg-orange-50 border border-orange-200">更宽视野能更早做出自然取舍，减少几个月的部门争论。</div>
<div class="p-4 rounded bg-purple-50 border border-purple-200">资深 IC 的经济性来自判断速度和覆盖范围，不只是人头减少。</div>
</div>

<div class="mt-6 text-xs opacity-60">作者概括：让最强球员留在场上，也让他看见更多比赛。</div>

---
layout: two-cols
---

<!-- 16 -->

# Ground truth 不在标签里，在标签如何产生

<div class="text-sm mt-5 space-y-4 text-left">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
增长会上有人把异常归因于 fraud；Tom 会继续问，数据为什么被标成 fraud。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
如果不知道运营人员使用的 SOP，就还不知道这个结论是否成立。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
资深产品负责人深入标注流程，既能纠正当前判断，也会顺手强化底层系统。
</div>

<div class="text-xs opacity-60">原文事实：增长不能替代对具体机制的理解。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./ground-truth.excalidraw" class="w-[450px]" :darkMode="false" :background="false" />
</div>

---

<!-- 17 -->

# Verify then trust：领导者先证明自己理解系统

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### Tom 的管理边界
直属负责人比他更懂单个功能的细节；他则更可能看见买家、卖家、信任与风险如何互相影响。
</div>

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### Founder 的动作
CEO Grant 在 review 中觉得方向不对时，会清掉当天剩余安排，和团队一起读工单、代码与数据。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
这种共研把 review 从争取绿灯改成共同求真，也让领导层的宏观判断建立在真实微观机制上。
</div>

---

<!-- 18 -->

# Top-down 只有一个成立条件：领导层足够接近事实

<div class="grid grid-cols-2 gap-7 mt-7 text-sm text-left">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 有效的 top-down
领导者与团队基于同一份数据，能在细节上给出具体、正确的反馈；一线成员因此快速被解除阻塞。
</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 失效的 micromanagement
领导者不了解 ground truth，却从上方持续规定动作；反馈无法解释机制，只增加重复协调。
</div>

</div>

<div class="mt-8 p-5 rounded bg-yellow-50 border border-yellow-200 text-center">
AI 让实时查询代码与数据变得更容易，但它并不会自动让领导者的判断正确。
</div>

---

<!-- 19 -->

# AI 没有创造这套组织观，却让它更可执行

<div class="grid grid-cols-3 gap-5 mt-7 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据
PM 能自己拉细分 cohort、用户日志与敏感性模型，不再为每个问题排队等待分析。
</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 代码
可以直接向 Claude 询问系统与 feed 逻辑，减少打断工程师估算和解释代码的成本。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 现场
用户行为、代码状态与观察者视角同时出现，问题理解与修复之间的距离骤减。
</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border-l-4 border-orange-500">
Tom 的限定：工具把杠杆交给已经拥有判断力的人；它不免除分析与代码质量责任。
</div>

---

<!-- 20 -->

# 数据科学：沟通更少，数据使用反而更多

<div class="grid grid-cols-2 gap-7 mt-7 text-sm text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-4xl font-bold text-blue-600 mb-3">10×</div>
Tom 说自己花在数据和理解产品运行上的时间，大约是职业生涯以往的十倍。
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xl font-semibold text-purple-700 mb-3">更少转交</div>
过去一年，他与数据科学家沟通的时间反而是职业生涯中最少的。
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-6 text-sm">
<div class="p-4 rounded bg-green-50 border border-green-200">AI 工具帮助发现回归和产品间的异常耦合，让发布更快。</div>
<div class="p-4 rounded bg-red-50 border border-red-200">前提是组织先投资数据工程、结构、追踪、归因与正确标注。</div>
</div>

---
layout: two-cols
---

<!-- 21 -->

# 用户、代码、观察者第一次处在同一反馈环

<div class="text-sm mt-5 space-y-4 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-xl italic">
“a feedback loop on steroids”
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
用户说遇到问题时，团队可以同时看见实际行为并查询实时代码逻辑。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
现场判断这是正在发生的 bug，还是产品行为与用户预期之间的 comprehension gap。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
资深判断把多源证据变成决定，然后继续观察结果。
</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./ai-feedback-loop.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

<!-- 22 -->

# PM 可以写代码，但不该把写代码当成新身份

<div class="grid grid-cols-2 gap-7 mt-7 text-sm text-left">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### 值得亲手做
亲自尝试开发工具、理解代码库、验证工作量估算，获得对系统和工程体验的直接认识。
</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### 不该替代的专业
Tom 承认自己与 Claude Code 写的生产代码仍可能在 lint、本地化与工程细节上被重做。
</div>

</div>

<div class="mt-7 p-5 rounded bg-blue-50 border-l-4 border-blue-500">
资深 PM 更高杠杆的工作，仍是定义正确问题、理解用户、拉取证据、与工程设计协作，并让交付真正发生。
</div>

---

<!-- 23 -->

# 产品能力会更耐久，产品表演没有地方躲了

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-green-50 border-l-4 border-green-500">

### Durable product skills

- 真正理解客户
- 真正理解业务
- 真正理解技术
- 把三者翻译成高效行动
</div>

<div class="p-6 rounded bg-red-50 border-l-4 border-red-500">

### Product theater

- 用框架替代具体判断
- 用叙事和 alignment 掩盖缺少动手经验
- 在案例和追问里无法 defend 细节
</div>

</div>

<div class="mt-7 p-5 rounded bg-yellow-50 border border-yellow-200">
Tom 的判断不是 PM 这个头衔会赢，而是产品技能会赢；许多拥有 PM 头衔的人过去五年并没有练这些技能。
</div>

---
layout: two-cols
---

<!-- 24 -->

# Play the accordion：战略和迭代要反复切换

<div class="text-sm mt-5 space-y-4 text-left">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-2xl italic text-center">
“play the accordion.”
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
拉开：重新看要完成什么、系统如何运转、刚学到的事实改变了什么。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
压回：把判断推成 V1，交付最小验证，再用新证据重写下一步。
</div>

<div class="text-xs opacity-60">作者概括：只写多年路线图会失去学习，只做局部迭代会失去方向。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./accordion.excalidraw" class="w-[455px]" :darkMode="false" :background="false" />
</div>

---

<!-- 25 -->

# Listings 难题：每个局部最优都会制造新问题

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

### 局部现实
直播卖家可以直接展示并描述商品，创建 listing 约需 3.5 分钟，口头说明接近 0 分钟。
</div>

<div class="p-5 rounded bg-red-50 border-2 border-red-200">

### 买家问题
没有 listing，平台事前不知道卖家会卖什么，搜索和把买家导向正确直播间就会失效。
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">

### 卖家问题
强制每件商品建 listing，又会显著降低单位小时可售商品数。
</div>

</div>

<div class="mt-7 p-5 rounded bg-green-50 border-l-4 border-green-500">
手风琴动作要求团队不断重看买家发现效率、卖家操作成本与平台长期结构，而不是停在第一版答案。
</div>

---

<!-- 26 -->

# 未来产品团队：核心项目更专门，边缘空间更自由

<div class="grid grid-cols-2 gap-7 mt-7 text-sm text-left">

<div class="p-6 rounded bg-blue-50 border-l-4 border-blue-500">

### 高确定性核心
对必须解决、已有较高信心的项目，继续使用专业设计、工程与产品管理组合。
</div>

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 低成本边缘
设计、工程、PM 或数据科学，只要理解客户、代码与宏观背景，都可以尝试一个有意义的改进。
</div>

</div>

<div class="mt-8 p-5 rounded bg-orange-50 border border-orange-200 text-center">
正式组织形态未必巨变；真正变化的是，岗位边界之外出现更多被授权的建设空间。
</div>

---

<!-- 27 -->

# Agentic commerce 很大，但低意图消费不会消失

<div class="grid grid-cols-2 gap-7 mt-6 text-sm text-left">

<div class="p-6 rounded bg-purple-50 border-l-4 border-purple-500">

### 高意图任务
灯泡、空气滤芯、特定电脑线材，或必须在周四前送达的黑鞋，适合 agent 处理明确约束和繁琐搜索。
</div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### 低意图购物
很多人先去逛、被店主品味与陈列教育，再逐渐知道自己想买什么；购物也是社交与文化体验。
</div>

</div>

<div class="mt-7 grid grid-cols-2 gap-6 text-sm text-center">
<div class="p-4 rounded bg-blue-50 border border-blue-200"><strong>约 30 年</strong><br>美国电商发展时间</div>
<div class="p-4 rounded bg-green-50 border border-green-200"><strong>未超过 20%</strong><br>电商占美国零售支出</div>
</div>

---

<!-- 28 -->

# 直播电商的经济性，和娱乐直播完全不同

<div class="grid grid-cols-3 gap-5 mt-7 text-center text-sm">

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">&lt; 1,000</div>
<div class="mt-3">Twitch 时代，少于约一千观众的直播在 CPM 模式下可能不经济</div>
</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600">30–50</div>
<div class="mt-3">Whatnot 直播间里也可能形成有效交易密度</div>
</div>

<div class="p-5 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">$7.5T</div>
<div class="mt-3">Tom 对美国零售产业规模的表述</div>
</div>

</div>

<div class="mt-7 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-left">
他买到一只从圣迭戈码头直播拍卖、隔夜送到家的加州刺尾龙虾；这笔购买没有预先意图，来自现场发现。
</div>

---

<!-- 29 -->

# Twitter 的教训：有些复杂，只是没人愿意做决定

<div class="mt-6 p-7 text-3xl italic border-l-4 border-red-500 bg-red-50">
“Leadership's just weak.”
</div>

<div class="grid grid-cols-3 gap-4 mt-7 text-sm text-left">

<div class="p-4 rounded bg-red-50 border border-red-200">
Tom 在 Twitter 两年间经历了九位产品负责人，组织持续处于高混乱状态。
</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">
团队长期知道 140 字符限制需要调整，也反复成立工作组，却没人愿意做最终决定。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">
日本用户因汉字信息密度更高，发推频率约为西方市场用户的六倍，问题并非没有证据。
</div>

</div>

---

<!-- 30 -->

# 平均数会把少数人的全部需求抹掉

<div class="mt-6 p-6 text-2xl italic border-l-4 border-orange-500 bg-orange-50">
“averages mean nothing to the individual”
</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-left">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

### 平均视角
某功能只有 3% 的用户使用，看上去适合删除以节省维护成本。
</div>

<div class="p-4 rounded bg-red-50 border border-red-200">

### 个体视角
这 3% 里可能有人 100% 依赖它完成核心任务，电商用户甚至靠它经营生意。
</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

### 产品责任
继续下钻 cohort 与真实用例，评估网络效应和业务损害，而不是让均值替你做决定。

<div class="mt-3 text-[10px] opacity-65">内部以 batting 500 为目标：希望正确和错误大致同样多。</div>
</div>

</div>

---

<!-- 31 -->

# 核心金句

<div class="text-xs opacity-60 mb-3">八句逐字片段，串起这期对谈的组织判断：</div>

<div class="grid grid-cols-2 gap-2 text-[11px] leading-snug text-left">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“we regret that product management exists.”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 拒绝把 PM 当成默认比例</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“muscles are built by reps.”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 判断能力来自亲自练习</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“it was politics.”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 正在降权的 PM 专长</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“know then go.”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 想透风险之后继续行动</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“then promoted them out of doing things.”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 旧晋升机制的反作用</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“a feedback loop on steroids”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 用户、代码与观察同时出现</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“Leadership's just weak.”
<div class="text-[9px] opacity-60 mt-1 not-italic">— Twitter 迟迟不决的教训</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“averages mean nothing to the individual”
<div class="text-[9px] opacity-60 mt-1 not-italic">— 少数用户可能 100% 依赖一个功能</div>
</div>

</div>

---
layout: end
---

<!-- 32 -->

# 回到真实工作，保持解决问题的信心

<div class="mt-9 text-4xl italic leading-relaxed">
“I'll figure it out.”
</div>

<div class="mt-8 text-sm opacity-65">— Tom Verrilli</div>

<div class="mt-12 text-xs opacity-45">PodDeck · ruvis-VWg2s</div>
