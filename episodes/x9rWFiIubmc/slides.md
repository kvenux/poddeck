---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "Claude Code for Finance + The Global Memory Shortage"
info: |
  Doug O'Laughlin on Latent Space — Claude Code psychosis, junior analyst automation, the HBM squeeze, and why every white-collar IDE is dead.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Claude Code for Finance + 全球内存荒

## Doug O'Laughlin · SemiAnalysis · Latent Space

<div class="mt-10 text-sm opacity-70">
一个半导体分析师的 Claude Code 觉醒 · Excel 与 Bloomberg 之死 · HBM 4:1 榨汁机 · CDT 徒步 6 个月
</div>

<div class="mt-4 text-xs opacity-50">
"self mastery is your most important tool use"
</div>

---

# 为什么这期值得反复看

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 半导体人 × Claude Code

写 SemiAnalysis 的 Doug 突然被 **cloud code 4.5** 打穿——不是 vibe coding,是把整个投研工作流交给了 agent。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 内存荒:自 96 年以来最严重

HBM 需求爆炸把 DRAM 榨干,**4:1 的转换比**+ 三年零投资 = "DM prices like go up 100% again"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Microsoft 有最多东西可失

**"You're essentially renting barbarians at the gate."** 每一美元 Azure 收入,都在武装那些正在挖 Excel 墙脚的对手。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 铁路时代重演

AI capex 已经追上、并即将超过美国历史上最大规模的基建周期。Doug 押的不是"一次繁荣",是**三次 boom-bust**。

</div>

</div>

---

# Doug 是谁

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Value Mule → SemiAnalysis

早年在推特叫 **Value Mule**——匿名 quality 投资人。后来做 fabricated knowledge substack,和 Dylan 一起做 SemiAnalysis。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2018 年被 ASML 单发命中

不是被别人带,是"**solo nerd snipe** myself"。在 quality compounder 里翻到 ASML,直接沉迷,一路读教材向下游延伸。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 半导体从来是科幻

> "the semicuncture stuff's always been science fiction."

芯片这件事本身,他觉得就是我们造出来最重要、最像未来的东西。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 遇到 Dylan 的原因

> "he was the only person who was as semicropilled in the entire world as me is how I felt."

两个偏执狂 pen pal 变合伙人。

</div>

</div>

---

# 那个"神圣的洞察"(2020)

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 摩尔定律死了

> "I really believe Morris law was dead."

CPU 每年白拿的性能提升——**结束了**。

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 那些懂造芯片的公司会暴涨

老 playbook 说半导体是成熟行业。Doug 说不:摩尔死掉,反而**创造出巨大的 pricing power**,给那些还能造好芯片的公司。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 供需拆解

**需求**: scaling laws 拉起 GPU 消耗
**供给**: 摩尔死掉,晶体管红利归零
**结论**: 并行计算 + Nvidia 会独享收益

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一个 goated insight

> "one goated insight pretty much."

后来 Nvidia 成了世界市值第一。他说自己**当时都不敢相信这个 magnitude**——他 believed 对了方向,没预料到规模。

</div>

</div>

</div>

---
layout: two-cols
---

# Claude Code 觉醒: 12 月 27 号

**背景**: Doug 从 Sonnet 4/Opus 4 阶段开始跑 Claude Code,写了些"有趣但艰难"的 side project。

**转折**: 12 月底假期,未婚妻生病他一个人在家,又赶上 2x usage limits——

> "4.5 just started oneshotting stuff and that to me was like a huge difference"

**症状**: MVP 一次就跑通、能解释自己在做什么、可以在上面继续构建。Doug 认为这是**能力上的 chasm 被跨过去了**。

<div class="mt-3 text-xs opacity-60">
时间点由他推测:"December 27th... something like that. I'm thinking cuz it's between the days"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./awakening.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 从 MVP → 投研工作流

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 第一步:把持仓丢进去

> "here's like all my positions and like here's some like thoughts on it. can you just like kind of like start copy pasting some notes over"

做基础风险统计、copy paste notes。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 第二步:做投资框架

让 Claude 把 Doug 自己的**投资风格显式化成框架**,再用这个框架去评价每一个仓位。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 第三步:发现自己的钩子

> "this is like a crazy useful tool that's systemized how I think really quickly"

关键不是它替他工作,是**把他的直觉编码成可复用的判断系统**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 然后开始各种任务

benchmark 模型、爬 GitHub commit 里的 Claude Code 签名、跑 chart——原本都是要人力周做的活。

</div>

</div>

---
layout: statement
---

# "You can just do things."

<div class="mt-8 text-sm opacity-70">
Doug 的当下 catchphrase — 用来概括这几个月里所有从"这活儿只有我会做"变成"我随口一说就做完了"的瞬间。
</div>

<div class="mt-6 text-xs opacity-50">
"you can just what you can do is you just ask it to do is like hey here's all the dates that we have..."
</div>

---

# 一份 chart 是怎么做出来的

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 具体流程

Doug 让 Claude Code:

1. 让它去 GitHub 找每一条包含 `Signed-off-by: Claude` 的 commit
2. 每天一次 BigQuery 拉取,写成 cron
3. 计算它占 GitHub 总 commit 数的百分比
4. 出图——按 SemiAnalysis 的配色和风格

> "**4% in like two weeks or something.**" 后来更新到 5%,还在爬。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键花招:先让 Claude 读书

> "I had it go read like 70 books or something"

关于数据可视化的经典书,让 Claude 摘要、压成 90 tokens 的 skill,存下来作为**"如何画 SemiAnalysis 风格图"**的参考。

<div class="mt-3 text-xs opacity-60">
"tokens are free the the cost of doing this is nothing"
</div>

</div>

</div>

---

# Junior Analyst 的宿命

<div class="mt-4 p-6 bg-red-50 border-l-4 border-red-500 rounded">

> "this crap makes mistakes all the time... it is still just like a like I think of it once again as like a junior analyst"

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Junior 做的事

跑腿:去搜、去整理、去把散落的信息拼起来——**"pain in the ass information"**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Expert 做的事

在 Junior 收集的信息上做**meta level thinking**——形成模式识别、判断力,变成"the expert"。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Doug 的判断: LLM 还没到 meta level

> "I don't think that metal level learning is there yet. Um, we'll see if L1's do it, right? Everyone who's spending one quadrillion dollars in the world thinks it will."

</div>

---
layout: two-cols
---

# Slop 的最后 5%

**Doug 的核心方法论**: LLM 能 handle 95%,但**最后 5% 是 artisanal**——那 5% 决定内容能不能发。

> "whatever the artisal last 5% is like that really matters. But for me, I know inherently what the 5% is."

关键在于:

- **知道 5% 是什么**——需要过去做过原始工作
- **能一眼看出被 slop 的地方**
- 用 heuristics 快速定位,让 Claude 再 fix

对没做过基础工作的人:review-only 的循环会**永远停在 slop 层**——因为你不知道该 fix 什么。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./junior-analyst-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 专家的放大器,新人的悬崖

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded border-l-4 border-green-500 bg-green-50">

### 对专家:massively amplifies

> "for me in our firm, that massively amplifies everyone who is an expert"

Doug 在自己的 firm 里已经把这写进用人标准——**只要你懂,Claude 会让你产出翻数倍**。

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50">

### 对 junior:less lenient

> "I wonder if new people we will be less lenient in terms of like how much AI tools"

对新人,他说**要更严格**——因为如果新人只做 review,他们永远学不到 embedded judgment。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 元问题

> "we won't be building and embedding those assumptions to understand judgment"

**如果 junior 一开始就跳过做原始工作、直接 review**——他们建立不起后来做 review 需要用到的隐式模型。

</div>

---

# Sub-agents vs Agent Teams

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Sub-agents: 有用

因为每个 sub agent 通常带自己的 `claude.md`,任务边界清晰,回来的东西干净——**Doug 认为这是 Claude Code 现在能 handle 的最好粒度**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Agent Teams: 一个实验

> "I have a controversial opinion that cla does not do RL on agent swarms or agent team or something."

Doug 猜测 Agent Team 只是提示词组装、没有做 RL——所以在大任务上**反而降低性能**。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Kimi 2.5 swarm: 意外的好

> "the 2.5 swarm actually improves the model's performance meaningfully."

跑 16 节点 H100,内部做 model benchmarking——**一个月前对普通人根本不可及的能力**,现在可用了。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 下一站

不是单个 agent 更强,是**多个 agent 串成更长的信息流水线**。token 效率 + context 保鲜是这里的胜负手。

</div>

</div>

---

# Context Rot 与他的作息

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1M window: 感受完全不同

> "your skills and whatever your cod MD as a percentage of 1 mil is so much smaller. So you just get so much more oomph"

同样的 skills.md 占用比例小了 5 倍,单窗口能做的事变多。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一次一个 project

Doug 的做法:**一个 compact window = 一个 project**。开始时 prompt 好目标,尽量在一个上下文里做完。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Hooks 被低估

> "I think hooks are very underrated"

他自己承认对 hooks 用得不够,但**"cuz you can do like a Ralph loop just with a hook"**——从主持人那里学到的。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Rubric = 减震器

> "helps with the stochcastic dance"

他喜欢**给 Claude 一个评分标准 (out of 10)**,让它在多次生成之间锚定判断,把 stochastic 变成可控。

</div>

</div>

---
layout: two-cols
---

# Excel 与 Bloomberg 是分析师的 IDE

**主持人的洞察**:

> "Excel is the IDE for analyst. Bloomberg is the ID for analysts."

Doug 完全同意——**并进一步认为它们全都会死**。

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**为什么 Cloud for Excel 只是过渡**

> "why make a car engine fit into a horse carriage?"

把 LLM 塞进 Excel 是往马车里装引擎——**能开,但没意义**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Doug 的宣言**

> "I will never make a chart in Excel again."

图表由 Claude 用 matplotlib 直接画出图片,一样能用,更快,还更一致。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ide-death.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 24 个月内会成为基线

<div class="mt-4 p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Doug 的预测

> "I would argue well we'll see in the 24 month view it will be a base level"

Claude Code (或它的 co-worker 表亲) 会成为**所有信息工作的底层技能**——像今天的 Excel。

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 他自己的定价

> "I think it's like 20 to $30,000 easily if not more."

每年 20-30k,他愿意直接付,买这个 tool 的使用权——**弹性未知,他找不到定价上限**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一句话总结

> "It's a skill issue if you cannot manage a junior analyst that is 20k a year."

现在的 Claude Code,对 Doug 就是**一个可以随时并行 100 个的 20k junior analyst**。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但请记住这只是 3 个月大的技术

> "it's two, it's three months old."

现在批评谁不会用 Claude Code 是不公平的——**就像 iPhone 刚上市第一个月**,没人应该被叫"你怎么不会用"。

</div>

---
layout: two-cols
---

# Microsoft 最尴尬

**Doug 的定性**:

> "I cannot paint a bigger target."

Microsoft 是**水平软件公司**,人们用它的软件做所有 information work——**Excel + PowerPoint + Word + O365** 全部都在 AI agent 的靶心。

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500">

### 更麻烦的:Azure

> "you're essentially renting barbarians at the gate"

一边 Azure 靠 OpenAI 收入撑估值,一边这些"客户"每年都变得**更能砍穿 Microsoft 自己的城墙**。

</div>

<div class="mt-4 text-xs opacity-60">
"each year they become more powerful and then... they're just like you know we could just like scale these these shitty walls."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./barbarians.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Microsoft 的两难与 Satya 的选择

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 选项 A:全押 Azure

变成 telecom 时代的 dumb pipe。股价靠 Azure 收入,但**长期把 moat 出租**给未来的对手。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 选项 B:全押 in-house AI

停止扩 Azure,把钱丢进自研模型和产品——**股票会短期跌**,因为 Azure 是投资人预期的引擎。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Satya 的现状: 都做一点

> "he is a professional manager and there is a board and there's a conversation"

Doug 认为这**恰恰是最糟的中间路线**——两头都做,两头都不占优势。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 参照物: Meta / Google 全在烧钱

> "Google, I would argue, is going to free cash with zero. I think Meta will go to free cash flow zero."

友商已经把责任心扔掉了。Satya 还在算 ROIC。

</div>

</div>

---

# Claude for Excel 就是"应该 Microsoft 做的"

<div class="mt-6 p-6 rounded bg-red-50 border-l-4 border-red-500">

### Doug 的一句判决

> "Claude for Excel, Claude for PowerPoint is literally exactly what it's supposed to be. **Microsoft should have built it.**"

</div>

<div class="mt-4 p-6 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 结果是

> "now you see the barbarians and this isn't even your primary barbarian issue. The guy who you know this is like this this is the this is the tribe over the hill barbarian."

Anthropic 现在只是"翻过一座山的部落"——**已经能夜袭 Microsoft 的城堡**。

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 隐藏的估值风险

> "Microsoft's cost of debt is the same as the United States government."

Microsoft 融资能力全世界最好——**他们本来完全可以自己出这笔钱**造基础设施,却让 Oracle 去背了几百亿的债。

</div>

---

# Codex 5.3 的反扑

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Doug 承认: they're back

> "5.3 CEX came out and it's like yeah that that completely doesn't matter anymore. They're like they're they're so back."

之前 SemiAnalysis 一直吹 Anthropic 的 token efficiency——**Codex 5.3 出来把这条论据打掉了**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 但 Codex 是 coding-pilled

> "it's so coding pill on the RL that I think um it isn't generalizable in the way that that 4.6 is"

Codex 极致擅长写代码——你让它去搜网页、做研究,它会**给你写一个爬虫**而不是直接读网页。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Opus 4.6 的差异

Doug 用 Opus 4.6 做**generalized information work**——它愿意直接调 API、读 markdown、跑 rubric,不硬要把每件事变成代码问题。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 下一次翻盘

> "the second that they have a new pre-train with the RL because the RL stack on Codex 5.3 is amazing"

一旦 OpenAI 下一代 pre-train + Codex 的 RL stack 结合,可能就是翻盘时刻。

</div>

</div>

---

# GDP-val 越过 50%: 这就是 AGI

<div class="mt-4 grid grid-cols-2 gap-6">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### GDP-val 是什么

一个覆盖多种白领职业的 benchmark,让人类专家和 LLM 做同样任务,由第三方评估。**50% 意味着模型和行业专家打平**。

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500">

### 已经过了

从 40 到 41,到 Sonnet 4.5、Opus 4.5 已经超过 **70%**。也就是说,**多数任务上模型比专家好**。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Doug 的定义

> "if I define AGI is many common jobs... can it automate or change or or take or you know completely shift a lot of the information work."

不追 shogith,不追 ASI——**只要能替代大量常见工作,他就叫 AGI**。

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 结论

> "I feel agi pilled honestly"

Doug 已经 AGI 化。他甚至担心 GDP 本身要被重定义——因为**信息工作产出难以按小时切分**。

</div>

</div>

</div>

---
layout: two-cols
---

# 铁路时代 Redux

**Doug 的历史类比**:

上一次这么大的产能建设是**铁路**——不是互联网,互联网远远没这么大。

- 铁路建设跨 **45 年**,**三次 boom-bust**
- 峰值时,capex 占 GDP **4.8%**,占总固定资本投资 **25%**
- 现在:Stargate 一家 = 2% GDP;加上 Anthropic、xAI 各种——**"we're right there"**

**关键洞察**: 银行业本身就是被铁路发明出来的——因为一家公司自己出不起这么多钱。**AI 会不会催生下一代金融基础设施**?

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./railroad-buildout.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# TPU 的市场份额窗口

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### V7 (Ironwood) 是峰值 gap

> "I think Ironwood V7 is the peak gap between on between TCO between Nvidia and um TPU"

现在正是 TPU 相对 Nvidia 的**TCO 最好时刻**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 策略选择: 卖出去,不是留着

Google 手上有峰值——**该抢市场份额,而不是压毛利率**。跟 Anthropic 的合作就是"卖出去"的第一步。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### install base 才是护城河

> "No one wants to buy new AMD chips cuz it's not like they have old AMD chips."

一旦你的芯片在 rack 里,**下一代升级几乎默认给你**。这是 TPU 目前唯一的机会。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 窗口何时关

> "V8 we just don't think will be as competitive to Reuben"

V8 vs Nvidia Rubin, HBM4 的分配决定输赢——**这扇门大概只开一到两年**。

</div>

</div>

---

# 为什么 Nvidia 拿到最好的 HBM

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

### 因为 Jensen 在亚洲喝酒

> "Nvidia was literally in Asia. You saw him drinking with everyone with the SK with the everyone with all the Korean guys all the TSMC. He's doing the shots with everyone."

</div>

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 供应链需要人肉关系

HBM/TSMC 产能是全世界最紧的资源。**下一代芯片的分配不是靠 PPT 谈的**,是靠 CEO 亲自飞过去 shot 出来的。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 反问

> "Do you think Sergey was out in Taiwan drinking to to get supply?"

Doug 的暗示:**没有**。所以 Google 的 TPU 产能天花板,某种意义上是被"Sergey 不喝酒"锁死的。

</div>

</div>

---
layout: two-cols
---

# 内存荒: 4:1 榨汁机

**核心事实**:

- 生产 1 单位 HBM,大约烧掉 **4 单位 DRAM 产能** (yield loss × 更复杂工艺)
- HBM 需求今年整个爆炸
- 上一轮 NAND/DRAM 大萧条太惨,**过去 3 年没人扩产**
- 结果:**HBM 抢走 DRAM 中间层 (KV cache offload)**,下游全空

Doug 的判断:

> "we could see DM prices like go up 100% again"

DRAM 现货价可能再涨一倍。**这是从 96 年以来最严重的一次内存短缺**。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hbm-ratio.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 现在就去买你的 iPhone

<div class="mt-4 p-6 rounded bg-red-50 border-l-4 border-red-500">

### Doug 的直白建议

> "Yeah, you buy your iPhone now"

不是玩笑。**手机 DRAM 一旦要按现货价采购**,iPhone 售价必然会涨——因为 Apple 得把成本转嫁给你。

</div>

<div class="mt-4 grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 谁涨
Micron · SK Hynix · Samsung · 所有 semi-cap 设备商

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 谁挤出
低端手机 · gaming GPU · 中端消费电子

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 时间线
> "not going to catch up for like 2 years"

新的 clean room 建设周期 2 年。

</div>

</div>

<div class="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 有趣的意外后果

Doug 有点担心的另一个方向:**demand destruction**——hyperscaler 可能在极高价面前"chicken out",延后订单,反而引发下一轮 memory crash。

</div>

---

# 死技术翻红: CXL

<div class="mt-4 grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### CXL 是什么

Cloud 时代提出的**CPU 内存扩展协议**——用来给云上做弹性内存池。**HBM 崛起后就彻底死掉了**。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 为什么现在活过来

> "this dead technology is like having a shot on goal"

因为 DRAM 太贵。工业界要**把老的 DDR4 芯片捡起来**,插进 rack 里,通过 CXL 挂给 CPU 用——**回收所有闲置存量,拆过时机器**。

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Doug 的坦白

> "I was like a CXL bull for once upon a time then became very clear it was going to die and I was like it's back"

他自己曾经赌 CXL,后来看它死了,现在又不得不承认——**这就是短缺推动的 zombie tech revival**。

</div>

---

# Context Window 也进入配给制?

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 事实

> "We've been kind of effectively stuck at a million for 2 years now."

1M 上下文的天花板已经 2 年没被有效突破。100M / 1B 需要的 HBM,**物理上短期造不出来**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### Doug 的用词: rationing

> "context rationing just came to me."

**"配给"**——就像战时的粮食配给。Doug 甚至预测未来会**按 context 长度付费**,免费用户可能只有 1000 tokens。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 主持人补充

即使有 100M,现在的模型也**用不满** ("in the papers they kind of drop off")。full-attention 是靠不住的补丁。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 意味

生态得学会**主动 pack context**——skills、hooks、sub-agents 全都是**在 1M 限制下压榨信息密度的手艺**。

</div>

</div>

---

# CPU 也在紧: 隐蔽的短缺

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

### Doug 的怀疑

> "web services have become really unstable"

AWS / Azure / GitHub 最近都不稳。**Doug 认为不是巧合**。

</div>

<div class="mt-4 grid grid-cols-3 gap-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 因子 1:COVID 高峰机器到期

> "hundred billion dollars of CPUs"

2020-21 疯狂扩容的 CPU,现在正好 5-6 年到寿——**该 refresh 但没预算**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 因子 2:vibe code 上生产

> "Shipping vibe code slop to prod. That's number one."

Claude Code 让更多 half-baked 代码进了生产系统,增加系统性 flakiness。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 因子 3:AI 用 CPU

RL gyms 需要模拟软件,吃大量 CPU;agent 产生的软件也需要 CPU 跑——**新负载没预算但已经来了**。

</div>

</div>

---

# Doug 的写作方法

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一周一篇的硬规则

从 2021 年 10 月开始,**每周写一篇**,持续多年。他说所有会写作的人给出的建议都是同一个:**"just be writing"**。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不搞 topic list

> "I'm just a oneshot on your head."

想法在脑子里滚,滚到够密,就直接坐下**一次写完**。反对边写边想——会忘,会掉料。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### mise-en-place 写作

作为兜底,他在 SemiAnalysis 内部 Slack 里**沉淀所有片段**:数据、引用、句子——需要时搜。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一号技巧: 睡一觉

> "sleep and wake up the next the fresh context window in the morning is my number one advice on writing"

写不出来就**先睡**。第二天新开一个 tab,**fresh context window**——他连自己的大脑都在按 LLM 术语类比。

</div>

</div>

---

# CDT: 6 个月徒步 2800 英里

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 三大长线之一

美国有三大 through-hike:AT、PCT、Continental Divide Trail。**Doug 直接选了最难最偏的 CDT**——因为"如果这辈子只能做一次,做最狠的"。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2021 年,GPT-3 essay 之后

他自己承认在 substack 增长最猛的时候离开去徒步 6 个月。回来"missed a big year"——但**不后悔**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个人 走 大部分

> "audio books I listened to audiobooks until I hated them listen to music till I hated it bored as hell"

无聊到讨厌音乐,然后就只剩自己了。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 学到的一件事

> "I actually know where my exact line"

他 6 个月里搞清楚**自己的极限在哪、下限在哪**——一种在现代生活里几乎不可能拿到的自我校准。

</div>

</div>

---

# "self-mastery is your most important tool use"

<div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded italic">

> "self mastery is your most important tool use"

</div>

<div class="mt-4 text-sm opacity-70">

主持人抛的这句被 Doug 立刻收下并 loop 回来——**贯穿整期播客的暗线**。

在一个 Claude Code 能替你 oneshot 一切的时代:

- 你的护城河不再是"会做某个具体活儿"
- 而是**知道自己要做什么、什么该做、什么时候停下来睡觉、什么时候 push 到 prod**
- 这就是 tool use 的最高层——**对自己**的 tool use

</div>

<div class="mt-4 text-xs opacity-50">
Doug 的 CDT 故事、写作纪律、20-30k 的 Claude Code 预算,都是这个原则的不同表达。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句 —— 每一条都在 transcript 里 grep 到过原文</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"you can just do things"
<div class="text-xs opacity-60 mt-1 not-italic">— Doug 谈 Claude Code 觉醒后的日常状态</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"this crap makes mistakes all the time... it is still just like a junior analyst"
<div class="text-xs opacity-60 mt-1 not-italic">— 开场即定调:强大但不完美</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"that massively amplifies everyone who is an expert"
<div class="text-xs opacity-60 mt-1 not-italic">— LLM 是专家的乘数,不是 junior 的替代品</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"you're essentially renting barbarians at the gate"
<div class="text-xs opacity-60 mt-1 not-italic">— Microsoft 与 Azure/OpenAI 的关系</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"I will never make a chart in Excel again."
<div class="text-xs opacity-60 mt-1 not-italic">— 一个投资人对分析师软件生态的判决</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"we could see DM prices like go up 100% again"
<div class="text-xs opacity-60 mt-1 not-italic">— DRAM 现货价可能再翻一倍</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"It's a skill issue if you cannot manage a junior analyst that is 20k a year"
<div class="text-xs opacity-60 mt-1 not-italic">— 不会用 Claude Code = 不会管 20k 一年的助理</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"self mastery is your most important tool use"
<div class="text-xs opacity-60 mt-1 not-italic">— 全期播客最终收束的一句</div>
</div>

</div>

---
layout: end
---

# "You can just do things."

<div class="mt-6 text-sm opacity-60">
Doug O'Laughlin · SemiAnalysis · Latent Space · 2026
</div>

<div class="mt-4 text-xs opacity-40">
PodDeck · 一次通读一场 2 小时的 podcast
</div>
