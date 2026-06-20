---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '深聊GPT-5发布：过度营销的反噬与AI技术突破的困局'
info: |
  硅谷101 陈茜 对谈多位 AI 技术专家，复盘 GPT-5 发布会的「就这？！」、
  路由器拼接的真相、Scaling Law 碰壁、以及下一步突破的三条路。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 深聊 GPT-5 发布

<div class="text-2xl mt-4 opacity-80">过度营销的反噬与 AI 技术突破的困局</div>

<div class="mt-10 text-base opacity-60">硅谷101 · 陈茜 与多位 AI 技术专家</div>
<div class="mt-1 text-sm opacity-50">2025 年 8 月</div>

<div class="mt-8 text-sm opacity-50 italic">
"GPT-5 终于来了……但很多人讨厌 GPT-5"
</div>

---

# 这期值得看的四个理由

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🎭 一场翻车的发布会
SWE-bench 图表错乱、伯努利效应解错、4o 用户集体抗议——「就这？！」

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🧩 GPT-5 是什么
不是端到端大模型，而是**路由器拼接**——业内戏称「GPT-4.99」

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🧱 Scaling Law 已经碰壁
高质量数据耗尽、Orion 项目延期、合成数据救不回来

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🛣 下一步三条路
RL + universal verifier · 多模态/世界模型 · 非 Transformer 新架构

</div>

</div>

---

# 全场只有一个表情：「就这？！」

<div class="text-sm opacity-70 mb-4">硅谷大多数 AI 从业者本来都非常期待又一个 ChatGPT Moment。</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-yellow-50 border border-yellow-300">

### 期待
- GPT-4 发布已经是**两年半之前**的事情了
- 新一代模型大家等了很久
- GPT-3 → GPT-4 是「天和地的区别」

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 现实
- 错误的数据图、有 bug 的代码演示
- 翻车的科学原理解释
- 大模型能力突破**显著放缓**
- "仍然没有 AGI"，"是失望"

</div>

</div>

<div class="mt-6 p-4 italic text-lg border-l-4 border-gray-400 bg-gray-50">

"整个发布有种被推着发布的感觉，可能是因为商业化比较着急吧"

</div>

---
layout: two-cols
---

# GPT-4 → GPT-5：refinement，不是 step change

<div class="text-sm opacity-70 mt-2">嘉宾对横向比较的判断：</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
GPT-3 → GPT-4：<br/>
<strong>天和地的区别</strong>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
GPT-4 → GPT-5：<br/>
<strong>refinement（改进），不是 step change（阶段性的变化）</strong>
</div>

</div>

<div class="mt-6 text-sm opacity-70">
能力曲线进入「博士到专家」之间的平台期——
没有人再喊 wow，只剩 "and?"。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# GPT-5 ≠ 超级大模型，= 路由器拼接

<div class="text-sm opacity-70 mt-2">业内技术专家的判断：</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
不是端到端超级大模型，而是<strong>实时路由器</strong>
（Real-time Model Router）拼接子模型
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
"GPT-5 就是一个典型的<strong>联合的系统</strong>"——把 GPT-4、o3、推理/非推理串到一起
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
"应该把它叫做 <strong>GPT-4.99</strong>"——历史上的一个聚合方案
</div>

</div>

<div class="mt-5 text-sm opacity-70">
这条技术路线<strong>不是创新，也不是突破</strong>——
早在硅谷初创圈里就存在很久了。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./router-diagram.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 路由器方案的三大原始用途

<div class="text-sm opacity-70 mb-5">为什么硅谷初创公司一直在用？三个动机：</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 端云协同
手机设备端有<strong>端上小模型</strong>，云端有大模型——
简单问题用本地，复杂问题上云。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### ② 多模型聚合
做模型之上应用的初创公司把<strong>开源 + 闭源</strong>都聚合起来，
不同任务调不同模型。

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### ③ 平衡成本
"hello"、"thank you" 这种 query 量极大——
每天都在<strong>消耗 OpenAI 上百万美元的费用</strong>。
分发给小模型就好。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-yellow-500 bg-yellow-50">

如今 OpenAI 把<strong>初创公司用来平衡成本的方案</strong>当作主打技术突破——
让外界开始怀疑：端到端的超级大模型路线，已经触顶了。

</div>

---

# 用户的反弹：让 4o 回来！

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 发布前模型列表（混乱）
4o · o3 · o4-mini · o4-mini-high
GPT-4.5 · GPT-4.1 · GPT-4.1-mini
Codex · Sora · GPTs

<div class="mt-3 text-xs opacity-60">嘉宾：「简直就是太乱了。」</div>

</div>

<div class="p-5 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 发布后的抗议
- "GPT-5 没有 4o 的亲切感"
- "效果甚至不如 4o"
- 用户感觉<strong>选择权被剥夺</strong>
- X 上集体呼吁让 4o 回来，否则注销账号

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-purple-500 bg-purple-50">

OpenAI 想给的不是 "more information"，而是 "<strong>just right</strong>"——
**但什么是「刚刚好」？技术上怎么定义？这本身就是争议。**

</div>

<div class="mt-3 text-xs opacity-60">
Sam Altman 在周末之前回应：保证将上线更多定制化功能，并持续改进。
</div>

---

# OpenAI 的三大商业战场

<div class="text-sm opacity-70 mb-4">发布会上重点展示的三个应用场景，毫无疑问是 OpenAI 进军商业化的主战场。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 📚 教育
多模态学韩语、几分钟做出学法语网页——
冲击多邻国 / Duolingo / Chegg。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 🏥 健康医疗
"PhD 博士级别"能解读癌症报告——
切入占美国 GDP **18%** 的市场。

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 💻 编程
Cursor CEO 站台、低提示词 + 专业场景——
和 Anthropic Claude Code 正面开战。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-yellow-500 bg-yellow-50">

总结：GPT-5 解决的都是<strong>产品层面</strong>的问题，没有技术颠覆性创新——
ChatGPT 正在变成一款<strong>越来越好的产品</strong>，但不是越来越「智能」的模型。

</div>

---

# 教育市场：先把 Chegg 干掉

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Duolingo 股价剧烈震荡
GPT-5 发布会期间：
- 财报好 → 盘中大涨
- OpenAI 发布后 → **一路狂跌**

市场在质疑：ChatGPT 之后会抢多少教育份额？

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Chegg 已被「干掉」
- ChatGPT 推出后学生们觉得：「我们好像不再需要 Chegg 了」
- 2023 年初 OpenAI 早期用户里很多是<strong>学生</strong>
- 暑假期间 OpenAI 使用量大幅下降——是个铁证

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-purple-500 bg-purple-50">

"在 ChatGPT 的原生环境下，**复刻它们的模式实在太容易了**——
OpenAI 肯定会去切入这些公司的营收领域。"

</div>

---

# 健康医疗：18% GDP 的大蛋糕

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 美国市场占比
<div class="text-4xl font-bold text-red-600 my-2">18%</div>
<div class="text-xs opacity-70">健康医疗占 GDP</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 2024 → 2030
<div class="text-2xl font-bold text-blue-600 my-2">$26.69 亿 → $188.38 亿</div>
<div class="text-xs opacity-70">全球 AI 医疗市场规模（年复合 38.62%）</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Ambience Healthcare
<div class="text-2xl font-bold text-green-600 my-2">$2.43 亿</div>
<div class="text-xs opacity-70">OpenAI 参投 · C 轮 · 进独角兽</div>

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-purple-500 bg-purple-50 text-sm">

**陈茜的亲身体会**：好朋友进 ICU 昏迷 5 天，家属起初每天去医院求医生「感觉什么都做不了」——
开始用 AI 之后，<strong>和医生交流的障碍变小了很多</strong>，做关键决策时<strong>心里更有底了</strong>。

</div>

<div class="mt-3 text-xs opacity-60 italic">
医生和患者的知识差距巨大，技术的光明面在于——能赋能人们的自主权。
</div>

---

# 编程市场：Cursor 站队 OpenAI vs Claude

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### 战局变化
- Anthropic 推出 **Claude Code**
- AI coding 初创公司开始**站队**
- OpenAI 之前没买成 Windsurf
- 现在 **Cursor 明显站队 OpenAI** 一起来打 Claude

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### 但即便是「世界最强编程」也让人失望
本来期待：单一模型可以**端到端**——
从架构 → 前后端代码 → 选工具 → 串联 → 自测 → 改 bug。

**目前看起来：完全没有。**

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-blue-500 bg-blue-50">

"Anthropic 在开发者社区的影响力，我觉得会大于 GPT-5。
GPT-5 大家会做应用 PoC 快速起步，但**专业开发者还是比较喜欢 Anthropic**。"

</div>

<div class="mt-3 text-xs opacity-60">
嘉宾的整体判断：GPT-5 编程能力 ≈ Anthropic 的 Claude Opus 差不多的范围。
</div>

---

# 翻车现场 ①：SWE-bench 图表错乱

<div class="grid grid-cols-3 gap-4 mt-4 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### GPT-5 柱状图
<div class="text-3xl font-bold text-red-600 my-2">52.8%</div>
<div class="text-xs opacity-70">柱子最高</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### o3 柱状图
<div class="text-3xl font-bold text-blue-600 my-2">69.1%</div>
<div class="text-xs opacity-70">柱子明显比 GPT-5 矮</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300">

### 4o 柱状图
<div class="text-3xl font-bold text-yellow-700 my-2">30.8%</div>
<div class="text-xs opacity-70">和 o3 同高（？！）</div>

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-red-500 bg-red-50">

**这个错误低级到不敢让人相信是 OpenAI 的发布会。**
事后官网修了图，Sam 自嘲了一下——但这张错图的出圈程度，**直接秒杀了任何营销努力**。

</div>

<div class="mt-3 text-xs opacity-60 italic">
更深的解读：这显示出的不只是匆忙和粗心，是团队<strong>试图在数据呈现上营造「巨大进步」的假象</strong>。
</div>

---

# 翻车现场 ②：博士级 AI 解错物理题

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 前一秒
Sam Altman 在台上强调：
GPT-5 是<strong>"博士级别"的 AI</strong>。

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 后一秒
GPT-5 解释「<strong>伯努利效应</strong>」时——
采用了主流物理教材<strong>已经证伪的「等时通过理论」</strong>。

直接自己打脸。

</div>

</div>

<div class="mt-6 p-4 border-l-4 border-purple-500 bg-purple-50">

**这显示出 GPT-5 完全没能识别过时的错误解释理论**——
让外界对它的理解和推理能力，有了更多质疑。

</div>

<div class="mt-4 p-3 italic text-sm border-l-4 border-blue-400 bg-blue-50">

不过有一说一：在解释这个理论时<strong>自动产出高质量 SVG 动画 + 可交互代码</strong>，
确实挺酷炫的——OpenAI 的多模态生成能力还是很强的。

</div>

---

# "Benchmark 已死"

<div class="text-sm opacity-70 mb-4">榜单分数和真实使用之间，正在出现越来越大的裂缝。</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 榜单失真
OpenAI 刚发布的 open-source model：
- Benchmark 上表现「还可以」
- 但真正使用起来代码能力**挺拉胯**
- 出现很多 bug，很多代码跑不通

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 下一前沿：用户体验
"为了某个特定基准上提升 3% 或 5% 而相互竞争"——
但作为用户，**基准测试对用户来说毫无意义**。

很难再靠原始性能区分模型优劣。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50">

OpenAI 从 <strong>"The One"</strong>（引领者）
变成了 <strong>"One"</strong>（前沿模型之一）——
一线大模型的技术差距正在快速缩小。

</div>

---
layout: two-cols
---

# GPT-5 的训练史：为什么这么难产？

<div class="text-sm opacity-70 mt-2">没有一个模型从第一天就被命名为 GPT-5。</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>GPT-4（2023.3）发布时</strong>，下一代已经在训
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>Q★ / Project Q</strong>（2023 末，董事会风波期间泄露）→ 后来成为 <strong>o1 系列</strong>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>o3 / o4-mini</strong>（2024）：推理模型「还算成功」，但仍不能叫 GPT-5
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>Orion</strong>（2025.2）：连 GPT-5 都不敢叫，只敢叫 <strong>GPT-4.5</strong>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded">
<strong>GPT-5</strong>（2025.8）：路由器拼接方案
</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
"不够 wow 到大家，就注定不能被叫做 GPT-5。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./training-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一个奇怪的 bug：教师模型 → 学生模型，效果掉了

<div class="text-sm opacity-70 mb-4">The Information 爆料的内部研发挫败：</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 教师模型（母模型）
- o3 母模型在科学等领域**取得显著进步**
- 借助了更强的英伟达芯片服务器

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 学生模型（ChatGPT 版本）
- 转换为能让人提问的 ChatGPT 版本后
- 效果出现<strong>显著下降</strong>
- 甚至比 o1 表现好不了多少
- API 模型版本同样掉了

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 text-sm">

**作者概括的猜想**：基于人类自然语言的聊天产品形态，<strong>拉低了模型的能力水平</strong>——
高维度复杂模型要降维成人类语言来交流时，会损失很多高维信息。
"语言并不一定真正能够把我们大脑中的所思所想全部清晰表达出来。"

</div>

---

# Scaling Law 确实碰壁了

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 根本原因：数据耗尽
- "我们正在<strong>耗尽高质量且多样化的人类生成的数据</strong>"
- 这是 Orion 项目延期的最大因素
- 最终只能用 o1 生成的<strong>合成数据</strong>来训 Orion
- 结果仍然没达到预期

</div>

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 副作用：小有效，大失效
OpenAI 发现对 Orion 做的优化：
- 模型较小时<strong>有效</strong>
- 模型规模增大时<strong>不再有效</strong>

模型训练的不确定性仍然非常大。

</div>

</div>

<div class="mt-6 p-4 italic text-lg border-l-4 border-purple-500 bg-purple-50">

"Scaling Law 就已经碰壁。
4.5（也就是 Orion）会没那么成功，是因为它**真的没有带来让人眼前一亮的突破**。"

</div>

<div class="mt-3 text-xs opacity-60">
GPT-4.5 发布时几乎没有人特别关注——这本身就是答案。
</div>

---
layout: two-cols
---

# 模型像海绵：注满了，就开始漏

<div class="text-sm opacity-70 mt-2">嘉宾 Bill Zhu 给的精准类比：</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
模型像<strong>海绵</strong>，往里不停注水
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
注满之后再注水 → 会流出来一些——
但流出来的<strong>不一定是新注入的</strong>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
如果挤出去的是「加减乘除」——
**整个知识体系就直接崩溃**
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
学名：<strong>catastrophic forgetting（灾难性遗忘）</strong>
+ <strong>model plasticity（模型可塑性）</strong>
</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
解决方向叫 Continual Learning（持续学习）——
"用一个模型无限训练它，这是不可能的。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sponge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 下一步突破：三条候选路径

<div class="text-sm opacity-70 mt-2">和身边的技术大牛聊了一圈之后，总结：</div>

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### ① 强化学习（RL）
含 RL 在<strong>预训练阶段</strong>的尝试 + universal verifier 路线

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

### ② 多模态 + 世界模型
押注视频、机器人、JEPA、Genie 3——比纯文字市场空间大几个数量级

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

### ③ 寻找其他框架范式
非 Transformer 架构，LeCun 的 JEPA 等替代方案

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-paths.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 路径 ①：RL 的杀手锏是 Universal Verifier

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### RL 最闪光的场景
- 写代码、数学、物理
- 城市规划、ops research、供应链
- 共同点：<strong>有明确目标 + 世界机制完整</strong>
- "现在最大的问题是 verification（验证）"
- 找到好的 verifier → 问题就解决了

</div>

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### OpenAI 的 universal verifier
The Information 爆料：
- 一个 LLM 用各种来源的研究
- 去**检查和评分另一个模型的答案**
- 自动确保 RL 过程中生成高质量答案

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-yellow-500 bg-yellow-50">

"这个方向就像当年 <strong>AlphaZero 打败人类</strong>一样——
它走出的路子是人类正常想象不到的，
可能可以真正发现<strong>人类所不拥有的知识</strong>，
甚至发现新的物理定理。"

</div>

<div class="mt-3 text-xs opacity-60">
这是嘉宾认为「真正迈向超级智能的一个关键点」——但目前还没有什么很好的突破。
</div>

---

# 路径 ②：多模态 + 世界模型

<div class="text-sm opacity-70 mb-4">为什么大家都说要押多模态？</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 信息密度差几个数量级
- 人类语言本身已经是<strong>非常大的压缩</strong>
- 视频信息量与文字差**一个数量级**
- 视觉 + 听觉 + 触觉的多维信息——
  "<strong>比纯文字要高出大几个数量级</strong>"
- 同意 Yann LeCun 的说法

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 评估难度暴增
- 文字领域：reinforcement / fine tuning / reward model
- 多模态视频要 navigate environment
- 从纯像素做评估——
  机器人领域目前还没解决

</div>

</div>

<div class="mt-5 p-4 italic border-l-4 border-purple-500 bg-purple-50">

"如果世界模型能有大幅度提升——视频理解、机器人、游戏的基础模型都会诞生。
**它们代表的市场份额比纯文字要更大。**"

</div>

<div class="mt-3 text-xs opacity-60">
谷歌最近发布的世界模型 <strong>Genie 3</strong>，在一些业内人士看来，重要性是要超过 GPT-5 的。
</div>

---

# 路径 ③：跳出 Transformer——JEPA

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">

### JEPA 是什么
**Joint Embedding Predictive Architecture**
（联合嵌入预测架构）——

由图灵奖得主 Yann LeCun 近年提出，
旨在<strong>克服大语言模型的局限</strong>，
推动 AI 向理解物理世界发展。

</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键机制
- 在<strong>浅层（latent）空间</strong>完成训练
- 输入、输出都是<strong>抽象表达</strong>
- 不是逐帧/逐像素预测
- 把 mask 的整块**整体预测出来**
- 已有 I-JEPA（图像）/ V-JEPA（视频）

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-yellow-500 bg-yellow-50">

"<strong>Transformer 的局限性是存在的</strong>——
我们也有其他一些替代方案的架构，
大家可能也需要去关注非 Transformer 方面的模型，
究竟是怎么去模拟人类的智能。"

</div>

---

# 反思：Sam Altman 营销鬼才的反噬

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 发布会之前的预热
- X 上各种暗示但保持神秘
- 在弟弟的播客上感叹自己<strong>相对于 AI 毫无用处</strong>
- 晒出与 GPT-5 的聊天截图
- **把期待值拉得太高**

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 发布会之后的现实
- 大家都愣了
- "营销鬼才"被反噬
- 错图、错物理、用户抗议——
  全部成了出圈梗

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50">

**长期来看，到达 AGI 之前还有很多技术壁垒需要突破——
而这些突破需要脚踏实地研发和创新。**
但很遗憾的是，OpenAI 等大模型公司却开始在商业化上变得非常激进——
GPT-5 之际正式打<strong>价格战</strong>圈地。

</div>

<div class="mt-3 text-xs opacity-60">
这让不少人担心：GPT-5 的发布会不会意味着 AI 泡沫破灭的开始？
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句话：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"GPT-4 → GPT-5 是 <strong>refinement（改进），而不是 step change（阶段性的变化）</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 GPT-5 的能力跨越</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"GPT-5 是一个典型的<strong>联合的系统</strong>……应该把它叫做 <strong>GPT-4.99</strong>。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于路由器拼接方案</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"<strong>Scaling Law 确实碰壁了</strong>……我们正在耗尽高质量且多样化的人类生成的数据。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 Orion 项目延期</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"现在最大的问题是 <strong>verification（验证）</strong>——如果能找到好的 verifier，那我可以认为问题解决了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 RL 的下一步</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"<strong>Transformer 的局限性是存在的</strong>……大家可能也需要去关注一些非 Transformer 方面的模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 JEPA 等替代架构</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
OpenAI 从 <strong>"The One"</strong> 变成了 <strong>"One"</strong>——从引领者变成前沿模型之一。
<div class="text-xs opacity-60 mt-1 not-italic">— 对整场发布的总结</div>
</div>

</div>

---
layout: end
---

# AI 的进步还远未结束

<div class="mt-6 text-xl italic opacity-80">
"长期来看，到达 AGI 之前，我们可能还有很多工作要做，<br/>
还有很多技术壁垒需要突破——<br/>
而这些突破需要脚踏实地研发和创新。"
</div>

<div class="mt-8 text-sm opacity-50">硅谷101 · 陈茜 · 2025 年 8 月</div>
