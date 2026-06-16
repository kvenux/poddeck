---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'MCP, Agents & the $40M Bet on Multiplayer AI'
info: |
  Dust 联合创始人谈"单人 AI → 多人 AI"的转变、Pod 共享态原语、
  代理的 jagged capability、tokconomics 与 SaaS 的终局。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# MCP, Agents & the $40M Bet on Multiplayer AI

<div class="text-lg opacity-70 mt-4">从"单人 AI"到"多人 AI"的产品边界</div>

<div class="mt-12 text-sm opacity-60">
MLOps Community · 与 Dust 联合创始人对谈<br>
关于 Pods、共享文件系统、jagged capability 与 tokconomics 的终局
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-1">"单人 AI → 多人 AI"的拐点</div>
<div class="text-sm opacity-80">为什么今天的 Claude Code / Codex 仍然本质上是单人模式？时间窗口与 jagged capability 共同的锁定。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1">Pod —— 一个新的产品原语</div>
<div class="text-sm opacity-80">Dust 把"多代理 + 多人类 + 共享文件系统"封装成可调用的工作单元，把团队周会变成代理驱动。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold mb-1">Fog of AI —— 基础设施在脚下漂移</div>
<div class="text-sm opacity-80">六个月外的视野等于零。怎么在这样的环境里给一家公司提供方向感？</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold mb-1">Tokconomics 与 SaaS 的终局</div>
<div class="text-sm opacity-80">为什么平价计费撑不下去？为什么 SQLite + sandbox 可能是 SaaS 的替代答案？</div>
</div>

</div>

---

# 嘉宾速写：从 Stripe 到 OpenAI 到 Dust

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">15 年前</div>
<div class="font-bold text-lg">Stripe</div>
<div class="text-sm opacity-80 mt-2">通过收购加入。亲历"150 → 3000 人"。<br><br>对 150→500 这段印象最深 —— 几乎没有管理，却跑得很顺。</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">之后</div>
<div class="font-bold text-lg">OpenAI</div>
<div class="text-sm opacity-80 mt-2">在前沿模型公司工作。<br><br>"mostly Stripe over OpenAI"<br>—— 留下的经验主要来自 Stripe。</div>
</div>

<div class="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="text-xs uppercase opacity-60 mb-1">现在</div>
<div class="font-bold text-lg">Dust</div>
<div class="text-sm opacity-80 mt-2">企业级 AI 平台。<br><br>赌注：从单人代理体验，转向多人 + 多代理的协作底座。</div>
</div>

</div>

---
layout: two-cols
---

# Stripe 的"魔法"：150 → 500 人

那个阶段为什么几乎不需要管理就能跑？

嘉宾说，自己一直在反推这件事的机制。

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"there was uh really uh very minimal management and it still was working really well and I'm trying I've been trying since then to understand what was happening at the time for that to work so well."
</div>

<div class="mt-4 text-sm opacity-70">
最终的回答：他认为团队在无意识地<strong>实现一个 flocking 算法</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flocking-rules.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Flocking 三条规则 —— Stripe 的非管理学

flocking algorithm 描述鸟群如何在没有中央指挥下绕过障碍。它只有三条规则。

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-1">① local separation</div>
<div class="text-xs uppercase opacity-60 my-1">本地分离</div>
<div class="text-sm">人与人之间的 trust，"don't look over the shoulder"。<br>同事说"我接住了"，就真的接住了。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-1">② distant attraction</div>
<div class="text-xs uppercase opacity-60 my-1">远场吸引</div>
<div class="text-sm">Stripe 早期的<strong>邮件写作文化</strong>。<br>有人专门梳理 mailing list，把两个相同话题的人"撮合"在一起。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold mb-1">③ alignment</div>
<div class="text-xs uppercase opacity-60 my-1">方向一致</div>
<div class="text-sm">"a dev API for payments" —— 一句话讲清。<br>一个"国家 × 支付方式 × 出款方式"的张量，把空格填满即可。</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>作者归纳</strong>：这三条加起来 → 涌现的自治行为。三条都满足，组织就能在不到 500 人时几乎不需要管理。
</div>

---

# 但今天我们还卡在"单人 AI"

<div class="text-sm opacity-60 mb-4">嘉宾对当下状态的描述：</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold text-lg">① 任务时长还太短</div>
<div class="text-sm opacity-80 mt-2">根据 METR benchmark，目前 agent 能独立处理的任务<strong>大约半天</strong>，集中在 coding。</div>
<div class="mt-3 text-sm italic opacity-70">"half a day is still very much a single player thing"</div>
</div>

<div class="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold text-lg">② 代理太"凹凸不平"</div>
<div class="text-sm opacity-80 mt-2">能力是 <strong>jagged</strong> 的 —— 这个方向是超人级，偏几度就掉进谷底。</div>
<div class="mt-3 text-sm italic opacity-70">"a few degrees off… you fall into a valley and the the thing is the dumbest dumbest thing on earth"</div>
</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
因为代理还很 messy，<strong>session 没法共享</strong>，只能共享 output。所以每个人都在 Claude Code / Codex 里独自工作，
然后在 GitHub / Notion / Google Drive 上合并 —— 单人模式。
</div>

---
layout: two-cols
---

# Jagged capability —— 能力是凹凸不平的

不是平滑递增。同一个模型在相邻任务上可能<strong>超人 vs 弱智</strong>。

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"the model are super jagged… you're looking in that direction the thing is clearly superhuman. You move a few uh uh uh degrees off on a slightly different task. You fall into a valley and the the the thing… is the dumbest dumbest thing on earth."
</div>

<div class="mt-4 text-sm opacity-80">
这就是为什么"共享 session"目前不实用 —— 别人看到你的 agent trace，半数是"你怎么搞成这样"。
所以人们只共享<strong>最终产出</strong>。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./jagged-capability.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 但转折在临近 —— 当任务横跨一周

嘉宾的判断：**模型在变好，任务时长在拉长**。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">半天的任务</div>
<div class="text-sm">可以一个人闷头做。代理也可以一个人闷头做。<br><br>"它是良构的，独自完成没问题。"</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">一周的任务</div>
<div class="text-sm">几乎不存在不跨人、不跨团队的一周任务。<br>即使是 coding，也得拉上 PM、设计、infra。</div>
</div>

</div>

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold">人与代理的关系会翻转</div>
<div class="text-sm mt-2 italic opacity-80">
"the agent will orchestrate a longer horizon task involving humans and the humans will steer…
there's going to be a need for many humans to steer those agents"
</div>
<div class="text-xs opacity-60 mt-2">代理调度人类，像调用工具一样调用 SRE。</div>
</div>

---
layout: two-cols
---

# Pod —— Dust 的新原语

> "a pod is really a shared state with a number of sessions between humans and agents"

不是单条会话。是一个<strong>盒子</strong>：

- 一组人类参与者
- 一组代理
- 一组 session（人 × 代理的交互）
- 每个 session 有自己的 sandbox
- 一个<strong>跨 session 的共享文件系统</strong>

代理可以在自己的 `/session/...` 里干活，准备好后把文件 `mv` 到 `/pod/...`，
其他人和其他代理都能看到。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pod-architecture.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 案例：把"团队周会"变成代理驱动

每家公司都有的 team weekly —— 一份每周差不多的 slides + 偶尔的 deep dive。

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">过去（人主导）</div>
<div class="text-sm opacity-80">
有人开始做幻灯片<br>
→ ping 各个负责人<br>
→ 在同一份幻灯片里协作<br>
→ <strong>组织成本全在那个人头上</strong>
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">现在（代理主导 pod）</div>
<div class="text-sm opacity-80">
周一早上有人触发 <code>team weekly</code> skill<br>
→ 代理创建 pod，<strong>每张幻灯片一个 session</strong><br>
→ 代理预拉数据：Metabase 收入、GitHub 产品、支持平台状态<br>
→ ping 每个 slide 的 owner 协作<br>
→ 周二会前两小时代理"醒来"，催完没交的人，合成一份 frame
</div>
</div>

</div>

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"the team weekly which is kind of a multi-day collaborative task is today mostly on auto mode"
</div>

---

# Pod 的工程细节：GCS-FUSE 的妙用

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">
<div class="font-bold">为什么用文件系统作为状态？</div>
<div class="text-sm mt-2 opacity-80">
人类能直接在 UI 里看到 / 拖动文件。<br>
代理也能直接在 sandbox 里 <code>cat</code> / <code>mv</code> / <code>edit</code>。
</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold">技术实现</div>
<div class="text-sm mt-2 opacity-80">
后端用 GCS（Google Cloud Storage）。<br>
通过 <strong>GCS-FUSE</strong> 挂载成 sandbox 里的真实文件系统。<br>
代理 home 目录 ≈ GCS 桶。
</div>
</div>

</div>

<div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold">两层文件系统</div>
<div class="text-sm mt-2 opacity-80 font-mono">
/session/...  ← 单个会话的私有空间<br>
/pod/...      ← pod 内多人共享的空间
</div>
<div class="text-sm mt-3 opacity-80">代理可以自由地把文件在两层之间搬。</div>
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>"撤销"靠 GCS 自带的 versioning</strong> —— 嘉宾承认 UI 上还没暴露 ctrl-Z，
但底层版本一直在，代理也通常能 backtrack（"they still see them in context"）。
</div>

</div>

</div>

---

# Bidirectional Access —— 一条强约束

Dust 内部的产品原则：

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-lg italic">
"any feature we build it should be equally accessible by agents and humans.<br>
There shouldn't be anything that a human can do in dust that an agent cannot do and vice versa."
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">举例：pod 里的任务列表</div>
<div class="text-sm opacity-80">看起来很"人类中心"。但必须保证：代理能列、能改、能创建、能触发新 session 去执行。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold mb-2">主持人的延伸观察</div>
<div class="text-sm opacity-80">就像写文档：写给代理看的，人类肯定能看懂；反过来不成立。<strong>默认面向代理</strong>。</div>
</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>作者归纳</strong>：这条原则的副作用是 —— 你写不出"只给人用"的 hack 功能。它强迫产品保持对称。
</div>

---
layout: two-cols
---

# 工作流的真相：一个 DAG，节点可换人也可换代理

主持人的隐喻：完成一件事 ≈ 数据流过一张 DAG。

每个节点都有一个"最合适做这一步的实体"：

- PM 擅长定 spec
- 代理擅长快速出第一版
- 工程师擅长 battle-harden
- 代理擅长跑测、验证
- DevOps / 安全擅长上线

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
不需要一个人从头扛到尾。让每个人 / 代理只在他<strong>真正擅长</strong>的节点干活。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dag-handoff.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这件事的难点：怎么给代理足够"上下文"

嘉宾说，DAG 的圣杯是 —— 让节点之间的 handoff 非常便宜。
但要做到这点，**代理必须很 contextful**。

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold">第一阶段答案</div>
<div class="text-sm mt-2 opacity-80">长 agentic loop + 大量 MCP 调用，每个 session 重新拼起 context。</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold">第二阶段答案</div>
<div class="text-sm mt-2 opacity-80">把一切变成 <strong>skill</strong>，context 由 skill 重建。</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<div class="font-bold">未解的问题</div>
<div class="text-sm mt-2 opacity-80">这部分是自动化、是 autopilot、还是手工写？<br>"<strong>这是 agent-of-work 的前沿问题</strong>"</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>嘉宾保留</strong>：模型变化太快，他不愿在镜头前给一个"crisp answer"。
"It would be very adventurous of trying to have a very crisp answer on this one."
</div>

---

# The Fog of AI —— 这一行最特别的难处

主持人随口说"the fog of AI"，嘉宾立刻接住、给了完整解释：

<div class="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded text-base italic">
"For the past 20 years, when we were building tech companies, you were building on JavaScript and posgress was stable… Like there's nothing more stable… And today we're building on on models that are changing every weeks."
</div>

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">具体后果</div>
<div class="text-sm italic opacity-80">
"every time we tried to build a very crisp picture of of what we could be constructing in a year, we got it completely wrong because within that time frame uh the model shifted. The place you wanted to build that nice city of yours uh kind of went under sea and the big mountain appeared right next to it."
</div>
</div>

<div class="mt-3 text-sm opacity-70 text-center">视野极限大约六个月。</div>

---

# 在 fog 里怎么对齐？三个月也比零强

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded mb-3">
<div class="font-bold mb-1">最坏的失败模式</div>
<div class="text-sm opacity-80">因为不确定就<strong>拒绝画任何画面</strong>。结果团队没有 speed vector，散掉。</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-1">嘉宾的解法</div>
<div class="text-sm opacity-80 italic">
"you have to operate with uh some form of conviction within uncertainty"
</div>
<div class="text-sm opacity-80 mt-2">
说清楚：方向会被改，但<strong>此刻</strong>我们就照这个方向走。
</div>
</div>

</div>

<div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">时间窗口阶梯</div>
<div class="text-sm space-y-2">
<div>📅 <strong>一年方向</strong> —— 不现实</div>
<div>📅 <strong>六个月方向</strong> —— 给个 snapshot</div>
<div>📅 <strong>三个月方向</strong> —— 总会被改，但比零好</div>
</div>
<div class="mt-3 text-sm italic opacity-70">"Three months is better than zero because then you don't know the direction."</div>
</div>

<div class="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>关键肌肉</strong>：定期 explicitly 更新 vision，并强调"这次又改了"，不要默默漂移。
</div>

</div>

</div>

---

# Stack Rank Update —— 全员可触发的"小重启"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">什么是 stack rank</div>
<div class="text-sm opacity-80">
一个<strong>清晰排序</strong>的项目列表。<br>
所有人都能看到工程团队当下在做什么、产品哪些会变。
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">"stack rank update" 流程</div>
<div class="text-sm opacity-80">
公司任何人都能按下这个按钮。<br>
<strong>两位创始人立刻出现在会议室</strong>，一起讨论该不该调整。<br>
对触发者的"input quality"有期望（不是空头炮）。
</div>
</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>为什么这么设计？</strong>
"it gets windy at the top so it's not an easy process… it gives to everybody to be a bit of a product person within a company."<br>
门槛真实存在；但门是<strong>明确开着</strong>的，方向感是流动的。
</div>

---

# Slack / GitHub 是入口，不是终点

Dust 接了一堆"触手"：Slack、GitHub、Jira、Linear、Zendesk……

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">价值：自然入口</div>
<div class="text-sm opacity-80">
人本来就在 Slack。<br>
看到别人在 @ Dust，自己也会试 —— <strong>内部传播引擎</strong>。
</div>
</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">代价：被界面束缚</div>
<div class="text-sm opacity-80">
Slack 还行（能做 tool approval UI），<br>
但 GitHub 就是纯文本 async —— 看不到 thinking、看不到工具调用。
</div>
</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="text-sm italic">
"we really see those places as entry points more than place where the collaborations or the collaboration with agents really happens because you always want to drive the user to go open the session inside of [Dust]."
</div>
</div>

<div class="mt-3 text-sm opacity-60 text-center">
关键 UX：high-stake action（如 send email）需要确认 —— 在 Slack 能做，GitHub 上做不来。
</div>

---

# Tokconomics —— 一个被反复误读的故事

主持人复述常见叙事："subsidies are over, tokens will get expensive."

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
嘉宾的反应：他不完全买这个故事，但<strong>承认情况复杂</strong>。
要拆成"终局"和"过渡期"两件事讨论。
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">终局：gravity</div>
<div class="text-sm italic opacity-80">
"we are subject to gravity this technology has a sailing it will converge and when it does it will be commoditized and tokens will be cheap plentiful"
</div>
<div class="text-sm opacity-80 mt-2">最终价格 ≈ 电力价格 + 利润。</div>
</div>

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">过渡期：未知</div>
<div class="text-sm opacity-80">
"maybe it happens in a year maybe in five years maybe in 20 years maybe in 100 years who knows"
</div>
<div class="text-sm opacity-80 mt-2">中间这一段 —— 才是创业者的真问题。</div>
</div>

</div>

---
layout: two-cols
---

# 一个嘉宾自我修正的判断

之前他以为：模型一旦 plateau → 立刻进入快速 commoditization。

最近几周的更新 —— 不一定。

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"even if I suppose that today is the best we'll ever get in terms of models… that doesn't mean that in six months the tokens will be close to zero because there is so much buildup demand"
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>为什么</strong>：推理服务的需求挤压太大 ——
拥有<strong>预建推理产能</strong>的玩家依然能维持高毛利，哪怕模型不再进步。
</div>

<div class="mt-3 text-xs opacity-60">
注：嘉宾承认部分需求是低价值的（"token taxing on some pure AI slop"），但市场愿意继续掏钱。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-curve.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "谁需要 PhD 来填 Salesforce？" —— 一个反直觉

主持人的发问：模型现在是 PhD 级别了，但很多任务根本用不上。
干嘛不切到便宜的小模型？

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">第一反驳：用 MacBook M2 做表格</div>
<div class="text-sm italic opacity-80">"who needs a MacBook M2 to do spreadsheets. No one. But but everybody wants one."</div>
<div class="text-sm opacity-80 mt-2">"还在用它，因为它是最好的。"</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">第二反驳：多一个 9 的可靠性</div>
<div class="text-sm opacity-80 italic">"if you apply to task like filling Salesforce you might gain one line of reliability"</div>
<div class="text-sm opacity-80 mt-2">
一个 9 的提升 → 从"我在监督每一行"<br>变成"<strong>我这辈子再也不碰 Salesforce 一格</strong>"。
</div>
</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>结论</strong>：即使任务不需要 PhD，那一个额外的 9 也可能彻底改变任务的<strong>自动化形态</strong>。
</div>

---

# 平价计费已死 —— 必须切到信用制

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">Dust 早期：flat price</div>
<div class="text-sm opacity-80">
"Chinese buffet" 思路 ——<br>
固定费用，鼓励使用、鼓励价值创造。<br><br>
建立在"成本最终会下降"的假设上。
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">2025 末："is not sustainable anymore"</div>
<div class="text-sm opacity-80">
随着模型"觉醒"，已经撑不住。<br>
必须 refactor 到 industry standard ——<br>
<strong>credit-based pricing</strong>。
</div>
</div>

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<div class="font-bold mb-2">为什么 flat price 致命</div>
<div class="text-sm italic opacity-80">
"if a model drops awesome very powerful but super expensive just can't serve it just can't serve it because it's the economics don't work anymore."
</div>
<div class="text-sm opacity-80 mt-2">下一个 SOTA 模型可能贵到飞起 —— 信用制把这部分透明地传导给客户，flat price 直接破产。</div>
</div>

---
layout: two-cols
---

# Dust 凭什么不被 Claude Code 吞掉？

主持人发难：Claude Code 现在很火，本地跑，体验好。Dust 的差异化在哪？

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>① Multiplayer 产品面</strong> —— pod 与共享态。Claude Code 单机难做"团队周会"这种用例。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>② 企业治理</strong> —— MCP 分发控制、工具 ACL、权限传递。Claude Code 是"far west"。
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>③ 模型自由</strong> —— 不锁死一个 token 供应商。下一代 SOTA 不知从哪冒出来。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dust-pillars.excalidraw"
  class="w-[520px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 下一步：stateful sandbox = micro-SaaS

嘉宾真正兴奋的方向 —— **长生 sandbox**。

不是一次性的 frame snapshot，而是一个<strong>持续活着</strong>的盒子：

- 里面跑一个 SQLite 文件（~1 MB），就是公司的 mini-CRM 或 mini-ERP
- 代理可以读写、改 schema、加功能
- 不同的人可以<strong>看到自己定制的 UI</strong>（同一份状态，不同 view）

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
boot time ≈ 100 ms。不用就关掉，要用秒级唤起。<br>
"shared-nothing" 设计 —— sandbox <strong>本身就是状态</strong>，随时 snapshot 回滚。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sandbox-stack.excalidraw"
  class="w-[500px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 这是 Excel 的延伸 —— 也是给 SaaS 的死亡通知

<div class="mt-3 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="text-base italic">
"I really see [the sandbox app] as the prolongation of the Excel spreadsheets…
today we have the Excel spreadsheets uh no man's land and SAS"
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">SaaS 的痛点示例</div>
<div class="text-sm opacity-80">
德国乡下一家做饼干的 SMB：<br>
每年付 <strong>$20–30k</strong> 用一个有 10,000 个功能的 ERP，<br>
其实只用其中三个。
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">Sandbox 的承诺</div>
<div class="text-sm opacity-80">
"任何人都可以为自己的工作创建那个 app。<br>状态对代理同样可访问，UI 可以为每个人定制。"
</div>
</div>

</div>

<div class="mt-5 p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"it feels like uh Wall Street was right way in advance for danging the SAS businesses."
</div>

---

# 不是人人都要造工具 —— 内容经济学

主持人质疑：要每个用户自己造 micro-SaaS 太奢侈了，普通员工没那个能力 / 时间。

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">嘉宾的回答：80/20</div>
<div class="text-sm italic opacity-80">
"it's a one one person producer 99% consumer which is true of of spreadsheets as well.
There are people that knows that know how to do a great spreadsheets and they're not that many of them"
</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-center">
<div class="text-3xl font-bold text-green-700">1%</div>
<div class="text-sm mt-2">"AI operators / tinkerers"<br>会用 Lego 砖搭出新东西</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-center">
<div class="text-3xl font-bold text-orange-700">99%</div>
<div class="text-sm mt-2">在他们搭出的 micro-app 里<br>日常消费</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-center">
<div class="text-3xl font-bold text-purple-700">≈</div>
<div class="text-sm mt-2">Excel：<br>少数人造表，多数人填表</div>
</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
"Sometimes they come up with stuff that are just mind-blowing. They just rebuild entire systems."
</div>

---

# 代理是 anthropomorphic 的 —— 所以 agentic search 赢了 RAG

主持人追问：要不要专门为代理设计一种新数据库？

<div class="mt-5 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">嘉宾：我是个 pragmatist</div>
<div class="text-sm opacity-80 italic">
"this technology… is trained on the internet… trained from reinforcement learning from human feedback…
it's a technology that is extremely extremely extremely anthropomorphic."
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-red-50 border-l-4 border-red-500 rounded">
<div class="font-bold mb-2">RAG 时代</div>
<div class="text-sm opacity-80">
context 窗口小，得提前预处理数据、再喂给模型。<br>
本质是"为代理做特殊呈现"。
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">Agentic search</div>
<div class="text-sm opacity-80">
context 拉长后，代理直接<strong>用人用的工具</strong>。<br>
搜公司内部数据？就让它跑搜索 UI / API。<br>
"if we can do it they can do it as well."
</div>
</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
代价是 latency 高一点。但简单太多 —— 而且代理本来就是按"人的工具使用方式"训练的。
</div>

---

# 最终交汇：CLI 才是真界面

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded">
<div class="font-bold mb-2">人与代理的"工具栈分歧"</div>
<div class="text-sm opacity-80">
人 → UI<br>
代理 → API → MCP → <strong>CLI</strong>
</div>
</div>

<div class="p-5 bg-green-50 border-l-4 border-green-500 rounded">
<div class="font-bold mb-2">嘉宾的小宣言</div>
<div class="text-sm italic opacity-80">
"I would love to use every SAS in the world with a CLI myself."
</div>
<div class="text-sm opacity-80 mt-2">在终端长大的人都懂。</div>
</div>

</div>

<div class="mt-6 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">
<div class="font-bold mb-2">汇合点</div>
<div class="text-sm italic opacity-80">
"at the end of the day we merge back into the most efficient place.
I might use the the CLI that agents have been built for using using the SAS tool myself."
</div>
<div class="text-sm opacity-80 mt-2">
为代理优化的 CLI，最终也是给人最高效的入口。<br>
主持人也提到："最近看到一个工具就是把任何 SaaS 变成 CLI"。
</div>
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">引用均可在 transcript 中 grep 验证 ——</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"we are still very much stuck in the single player mode"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于当下代理协作的状态</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"any feature we build it should be equally accessible by agents and humans."
<div class="text-xs opacity-60 mt-1 not-italic">— Dust 的 bidirectional access 原则</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"you you're subject to the fog of AI and it's very hard to see past six months"
<div class="text-xs opacity-60 mt-1 not-italic">— 讲在 AI 时代规划的难处</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"we are subject to gravity this technology has a sailing it will converge and when it does it will be commoditized"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 token 价格的终局</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"who needs a MacBook M2 to do spreadsheets. No one. But but everybody wants one."
<div class="text-xs opacity-60 mt-1 not-italic">— 反驳"用小模型做小任务"的直觉</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"this technology is extremely extremely extremely anthropomorphic"
<div class="text-xs opacity-60 mt-1 not-italic">— 解释为什么 agentic search 自然胜出</div>
</div>

</div>

---
layout: end
---

# 即使模型在原地，未来 10 年也不会像今天

<div class="mt-8 p-6 border-l-4 border-blue-300 rounded text-base italic max-w-3xl mx-auto" style="background: rgba(255,255,255,0.08); color: #e7f5ff;">
"even if the technology again plateaus uh even with current model shape uh
the way we're going to walk in 10 years is probably nothing compared to the way we walk today
and so there's still many many many opportunities to build for for everyone."
</div>

<div class="mt-6 text-sm" style="color: rgba(255,255,255,0.6);">
— Dust 联合创始人 · MLOps Community
</div>
