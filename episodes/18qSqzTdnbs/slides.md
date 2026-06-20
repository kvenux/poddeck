---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AppLovin 撕开巨头裂缝的 1000 天'
info: |
  葛小川（Giovanni Ge）首次中文视频专访
  硅谷101 · 2025 年 12 月
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AppLovin 撕开巨头裂缝的 1000 天

### AI 审判、被做空与 Underdog 的"弱者之心"

<div class="mt-8 text-base opacity-70">
葛小川 Giovanni Ge · AppLovin 首席产品及工程官<br>
中科大少年班 → 意大利博士 → Meta → AppLovin<br>
硅谷101 · 陈茜 · 录制于 2025-12-21
</div>

<div class="mt-8 text-xs opacity-50">
PodDeck · 基于完整逐字稿生成 · 所有引言已 grep 验证
</div>

---

# 为什么这期值得听完

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">两年股价 25 倍</div>
<div class="text-xs opacity-70 mt-1">从游戏广告 underdog 到 $2000 亿市值、加入 S&P 500，1000 天完成进化</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">Meta / Google 双垄断下的裂缝</div>
<div class="text-xs opacity-70 mt-1">头部广告平台里唯一没有自有流量的玩家，凭什么活下来</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">三轮做空狙击战</div>
<div class="text-xs opacity-70 mt-1">Culper、Muddy Waters、CapitalWatch 轮番抨击 AXON 是"AI 伪装"</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm">365 天每一天</div>
<div class="text-xs opacity-70 mt-1">"决策本身其实非常简单"——拒绝"三件做对的事"叙事的硅谷高管</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-sm">不到 100 名工程师</div>
<div class="text-xs opacity-70 mt-1">人均产出 4000 万美元利润，"克制"与"勤奋而非内卷"</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-sm">2026 年的 AI 审判</div>
<div class="text-xs opacity-70 mt-1">Project Genie、CloudX、Meta 反扑——SaaS 护城河还在吗</div>
</div>

</div>

---

# AppLovin 是谁

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**最初定位（2018 之前）**

一个规模尚小的"移动广告网络"——
连接 App 开发者（广告位）与广告主的
中间平台。

最大死穴：
> 它不知道用户在 app 里面
> 到底是在做什么

没有第一方数据，怎么和 Google、Meta 打？

</div>

<div>

**今天的位置（2025）**

<div class="p-3 rounded bg-blue-50 mb-3">
<div class="text-3xl font-bold text-blue-600">$2000 亿</div>
<div class="text-xs opacity-70">市值 · 2025 年 11 月旧金山年会</div>
</div>

<div class="p-3 rounded bg-green-50 mb-3">
<div class="text-3xl font-bold text-green-600">S&P 500</div>
<div class="text-xs opacity-70">2025 年 9 月加入</div>
</div>

<div class="p-3 rounded bg-orange-50">
<div class="text-3xl font-bold text-orange-600">81%</div>
<div class="text-xs opacity-70">软件平台 EBITDA 利润率（游戏业务仅 19%）</div>
</div>

</div>

</div>

---
layout: two-cols
---

# 三次关键收购

每一次都解决一个具体痛点：

<div class="space-y-2 mt-4 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>MAX（2018）</strong>·<br>
应用内实时竞价代替"瀑布流"<br>
<span class="opacity-70 text-xs">解决：开发者广告位卖不出好价钱</span>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>Adjust（2021 · $10 亿）</strong>·<br>
全流程追踪与精准归因<br>
<span class="opacity-70 text-xs">解决：广告效果说不清楚</span>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>MoPub（2022 · $10.5 亿）</strong>·<br>
从 Twitter 接来 7 亿日活的广告位库存<br>
<span class="opacity-70 text-xs">解决：规模不够大</span>
</div>

</div>

<div class="mt-3 text-xs opacity-60">
"从自己去种菜变成了去开超市，货源来自于四面八方"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-acquisitions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2022：深渊时刻

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**外部冲击**

2021 年 4 月刚 IPO，苹果立刻推出
**IDFA**（应用追踪透明度政策），
切断了跨 app 追踪用户的能力。

**移动广告市场瞬间陷入混乱。**

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-600">−80%</div>
<div class="text-xs opacity-70">从高点跌去 · "一片哀鸿遍野"</div>
</div>

</div>

<div>

**AppLovin 的反向操作**

竞争对手们都在裁员收缩。AppLovin 反而花
$10.5 亿现金接下 Twitter 旗下的 MoPub。

- 触达人数：成倍增长
- 广告位类型：从游戏扩展到新闻 / 工具 / 生活类
- 数据水源：源源不断的实时竞价信号

> *"急迫地需要一位懂算法的核心技术人员加入"*

下一站：找 CTO + CEO 直接面试的葛小川。

</div>

</div>

---

# 葛小川登场

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60 mb-1">2005</div>
<div class="font-bold">中科大少年班</div>
<div class="text-xs opacity-70 mt-1">学物理；自述"对未来职业有很大很大的困惑"</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60 mb-1">2010s</div>
<div class="font-bold">意大利读博</div>
<div class="text-xs opacity-70 mt-1">"我半个故乡"；学会"对人生不同选择的不同 perspective"</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60 mb-1">~2013-2022</div>
<div class="font-bold">Meta</div>
<div class="text-xs opacity-70 mt-1">"想要学到的东西基本上已经学到了"</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500">
**2022 年底加入 AppLovin。** 三年时间从工程师晋升为首席产品及工程官。

打动他的不是愿景，而是 C-level 的坦诚：
> *"和这种 C-level 接触，并且能够有那么直接和坦诚的对话"*
</div>

---

# 上一代 vs 这一代推荐算法

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-gray-400 bg-gray-50">

### 上一代（10 年前）

**Boosting Tree** 为主

无法很好地处理推荐算法里的：
- High Cardinality（高基数）
- Sparse Feature（稀疏特征）

例如：用户 ID 几十亿、物料 ID 几千万——
模型不知道怎么"放进去"。

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### 这一代（2015-2017 转折点）

**Deep Learning** 框架

几篇关键论文解决了：
- 怎么把 ID 放到模型里
- 怎么允许 ID × ID 交叉

一流公司很快转型。
TikTok / 阿里 / 小红书 早就在用。
AppLovin 之前还停留在"晚 1-2 代的模型"。

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
葛小川加入 AppLovin 时缺的不是算法理论，而是"现代推荐系统的工程实现"
</div>

---

# 3 个月做出第一代模型

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**为什么这么快？**

> *"我觉得生命很短"*

刚来时葛小川还想用 Meta 方式：先定 roadmap、
分配人员、再开工。

**不到一星期就意识到这不是 AppLovin 的工作方式：**

> *"get my head down（埋头苦干）<br>就是从写代码开始"*

</div>

<div>

**第一代模型团队**

<div class="text-center my-3">
<div class="text-6xl font-bold text-blue-600">5</div>
<div class="text-xs opacity-70">人左右（含 CTO 本人）</div>
</div>

**上线效果**：
- 葛小川自评："reasonable（理性的）完美主义者"
- 财报数字"明显一个代差"
- "百分之几十的这样一个跃变"

**2023 年 4-5 月**：AXON 2.0 第一次上线 ——
公司业务飞涨之路的起点。

</div>

</div>

---
layout: two-cols
---

# AppLovin vs Google / Meta

**最大区别不是模型，而是商业模式。**

> *"AppLovin 作为一个算是中国以外的国际市场上可能应该是排名前几名的一个广告投放平台，我们是在这种头部的广告投放平台里边，是唯一一个没有自有流量的公司"*

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50">
<strong>Google</strong>：搜索意图 + YouTube 自有流量
</div>

<div class="p-2 rounded bg-blue-50">
<strong>Meta</strong>：社交图谱 + Facebook/IG 自有流量
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>AppLovin</strong>：把广告投到<br>**第三方汇聚平台**上
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./platform-positioning.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# LTV：把窗口从 7 天做到 28 天

广告商真正关心的不是点击率、不是转化率，
而是**转化之后给他们带来的价值**。

> *"我们肯定是整个行业里面，第一个把价值产品做大的一个公司"*

**优化窗口的代差**：

- 行业大多数：1 天
- 偶尔有人：7 天
- AppLovin："**全世界第一个公司，把它从 7 天直接做到 28 天**"

价值产品占据了 AppLovin 绝大多数的广告花销。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./value-window.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2024：跨入电商

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**时代背景（2024 年初）**

- 手机应用广告里，AppLovin 与世界一流公司"没有太大差距"
- 但手机应用的**天花板不是特别高**
- 葛小川对算法在电商里的可行性"有比较好的理解"

**决策过程**：内部"很简短的讨论，没有花很长时间"。

</div>

<div>

**外界的质疑**

游戏广告基于**虚拟成就感**；
电商广告基于**实物物流与复购**。

> 外界对 AppLovin 的广告模型是否能够运用在电商行业中，**一度非常的怀疑**

葛小川的反应：

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>"Doesn't bother us at all"</strong><br>
<span class="text-xs opacity-70">完全困扰不到我们</span>
</div>

</div>

</div>

---

# 跨赛道是"重新创业"

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 最可怕的错误

**套用经验主义**

假设里面有很多可以"复制粘贴"的东西。

> *"你就假设这东西，所有东西几乎是重新开始<br>唯一多出来的东西，就是你脑子里面那过去一年的经验"*

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 用第一性原理判断

哪些"不一样"可以简单转换过去？
哪些需要在模型里彻底改？

**电商团队规模**（第一期）：

<div class="my-2">
<span class="text-4xl font-bold text-green-600">~10</span>
<span class="text-sm opacity-70 ml-2">工程师</span>
</div>

可共用的：训练 / 推理 infra<br>
完全不同的：数据收集、架构、特征

</div>

</div>

<div class="mt-4 text-center text-sm opacity-70">
"我们 AppLovin 我们现在的做事方法，其实让我们有能力去解决这世界上任何一个值得解决的难题"
</div>

---
layout: two-cols
---

# 卖掉游戏业务

**为什么转型纯软件公司？**

CEO Adam 财报会上的官方说法：

> *"七年前我们开始收购游戏工作室，也帮助我们训练最早的机器学习模型 ... 然而我们本质上并不是游戏开发者"*

AXON 2.0 成熟之后，MAX 平台的全球竞价流
提供的信号已经足够，第一方游戏数据的
**边际贡献微乎其微**。

葛小川的态度：

> *"Adam 告诉我说我们准备想把游戏给卖掉，你怎么看，我说合理"*

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sell-games.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: statement
---

# self-recognized underdog

<div class="text-2xl mt-6 opacity-80">
"我们自己把自己定位为一个 underdog"
</div>

<div class="text-base mt-4 opacity-60">
不管外界怎么看，这个身份本身就是文化的根基
</div>

---

# Underdog 的四重含义

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold mb-1">① 不会骄傲自满</div>
<div class="text-sm opacity-70">"因为你没有骄傲自满的资格，别人不认为你很好"</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold mb-1">② 没有怕失败的负担</div>
<div class="text-sm opacity-70">"反正没有人认为你会成功" —— 反观天之骄子怕打破人设</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold mb-1">③ 自我的 ego 比较低</div>
<div class="text-sm opacity-70">"他不会把自己看得很重，他会把这个 mission，会把这个集体看得更重"</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold mb-1">④ 需要证明自己的渴望</div>
<div class="text-sm opacity-70">"大家都觉得他不被看好，那么这种想要证明自己的渴望，其实给一个人带来的动力"</div>
</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
中文翻译"弱者之心"只是为了凑成语，葛小川更愿意翻成"不被看好的人"
</div>

---

# 葛小川拒绝回答"做对了哪三件事"

<div class="mt-6 p-5 text-lg italic border-l-4 border-blue-500 bg-blue-50">

"我发现我跟你聊天你很想去问，我们的成功是不是某一个具体的决策造成的，但其实不是这样。<br>
**决策本身其实非常简单。<br>
真正使得公司走向成功的是，决策之后的 365 天每天的日子怎么过。**"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

**他为什么这么强调？**

> *"我是绝对不会把 365 天，每一天的辛勤工作，把它归咎到三个正确的决策那么简单里面去。<br>我觉得这样一种说法，其实对整个团队来说都是一种伤害"*

</div>

<div>

**硅谷的真相**

> *"每一个普通人，他距离到能够改变世界的这样一个能力，其实中间的鸿沟是非常非常小的<br>你需要的就是能够迈出那一步的勇气，和迈出那一步之后 365 天，每一天的努力工作"*

</div>

</div>

---
layout: two-cols
---

# 三场做空狙击战

**2025 年市值冲击 $2000 亿之际**

<div class="space-y-2 mt-3 text-sm">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>第一战 · 2025-02-26</strong><br>
Culper + Fuzzy Panda：<br>
AXON 是利用安卓系统权限的"促销补丁"，<br>
还指控 AppLovin "窃取 Meta 的归因模型"
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>第二战</strong><br>
Muddy Waters（Carson Block）：<br>
所谓的增量转化"仅为官方宣称的 1/3"，<br>
"归因黑盒"在做财务幻象
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>第三战</strong><br>
CapitalWatch：东南亚洗钱 + 地缘政治<br>
（后基于事实错误道歉并撤回部分指控）
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./short-attacks.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 葛小川怎么处理做空

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 流程

1. 仔细读做空报告
2. 每一条技术指控**和系统去对照**
3. 确认"都是错的"
4. 把信息交给 CEO 和公关
5. 自己回到岗位

> *"做空报告刚出来的时候，我自己也很重视 ... 我就每一条每一条和我们系统去对照，后来发现其实都是错的"*

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 公司层面的应对

> *"很难（向公众）去辩解他们（空头）对还是不对，这也是为什么我觉得我们一直在处理这件事情的时候，**选择让时间去说话**"*

对团队的处理：
- 发 memo
- 邀请大家来聊
- "最后发现其实没有太多的人过来找我"

</div>

</div>

---

# 不自研大语言模型的判断

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**反直觉的决定**

> *"我们很大的一个优势，反倒是我们公司没有在自研我们的大语言模型"*

为什么？

- 因为不自研，**可以自由选最好的**
- 目前最好的是 Gemini 和 OpenAI
- 自研者反而被自己模型绑定

**这个判断在一年前 Veo 3 和 Sora 2 还没出现时就做了。**

</div>

<div>

**"等"的策略**

> *"我们在时间的另一头等着他们 ... 所以当 Veo 3 和 Sora 2 出来的时候，那个对我们来说就是 **The right moment comes**"*

应用场景：

<div class="space-y-2 mt-3 text-sm">
<div class="p-2 rounded bg-blue-50">大语言模型对抗 fraud / integrity 问题</div>
<div class="p-2 rounded bg-green-50">市场上**第一个**用 LLM 全自动生产广告素材</div>
</div>

**回应"会不会被切 API"**：
> *"如果有人真的会这么认为的话，他的决策可能有点天真"*

</div>

</div>

---

# 招人哲学的两次转变

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2023：等

> *"我们那一年（2023）基本上非常难招到人 ... 我们甚至都不算是有前景的一个创业公司"*

应对：
- **等**
- 利用团队已有资源
- "技术领袖亲自下场" / "自己写代码"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 2024 之后：彻底转向新人

- 薪酬变成**整个硅谷最高**
- 招聘重心转向**大学刚毕业 / 工作两年以内**

> *"我今年发现 **Experience（经验）的价值被高估了**"*

葛小川的自嘲：
> *"我说我自己是绝不会 hire 我自己的"*

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
依据：从大公司"挖一个 Director 重新组建团队"——这种案例历史上"大部分都是失败的"
</div>

---

# 聚光灯边缘的人才

<div class="mt-6 p-5 italic border-l-4 border-purple-500 bg-purple-50">

> *"很多公司，真的是喜欢去寻找那些**聚光灯下面的人才** ... 但是这些聚光灯下面的人才<br>
我觉得他们不具备 AppLovin 所需要的这种 Underdog 的精神<br>
我们其实更多是关注**在聚光灯边缘的这些人才**"*

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

**为什么聚光灯下不好用**
- 被想要的人太多 → overprice
- 缺乏 underdog 精神
- 不适合"做别人不做的事"

</div>

<div>

**怎么识别边缘 talent**
- "没有一个很高效的办法"
- **一个个聊**
- 打造雇主品牌让他们主动来

**葛小川面试最看重的问题**：
> *"候选人在人生里面，是不是经常做一些与众不同的选择"*

</div>

</div>

---
layout: two-cols
---

# H · E · A · R · T

葛小川"最近刚刚总结"的，
AppLovin 最成功工程师的 5 个特质：

<div class="space-y-2 mt-3 text-sm">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>H · humility 谦虚</strong> —— 和 underdog 的价值观吻合
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>E · empathy 共情</strong> —— 对同事、对客户；防止执迷于"最 fancy 的方法"
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>A · ability 能力</strong> —— skill 本身
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>R · resilience 韧性</strong> —— "做别人没有做过的东西，没有东西是一帆风顺的"
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>T · tenacity 死磕</strong> —— 最后一击的咬合力
</div>

</div>

<div class="mt-3 text-xs opacity-70">
"这五个连在一起，其实就是一个英文单词 heart"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./heart-traits.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 100 名工程师 · 不卷只勤奋

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-2">&lt; 100</div>
<div class="text-xs opacity-70">工程师总数<br>"我们至今的工程师总数还不到 100 人"</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 my-2">$40M</div>
<div class="text-xs opacity-70">每位工程师<br>平均产出利润</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 my-2">$2000B</div>
<div class="text-xs opacity-70">公司市值<br>仍像初创公司一样运作</div>
</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<strong>勤奋 vs 卷</strong>

> *"我说我们工作不卷，AppLovin 工作一点不卷 ... 我们只是勤奋而已"*

- <strong>卷</strong> = 环境对你的要求
- <strong>勤奋</strong> = 个人对自己的要求

"我们从来不要求打卡"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

<strong>克制的扩张</strong>

> *"团队一旦变得臃肿，它对已有团队的一个伤害<br>对于未来的迭代效率的这个影响<br>它带来的机会成本的损失，其实是要成数量级的增加"*

"我们公司上上下下，大家都没有把自己团队里面人数当作一个值得炫耀的一个 metrics"

</div>

</div>

---

# 给年轻人的建议：投资 vs 交易

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不要选最 popular 的选择

> *"年轻人在做选择的时候，其实最简单的选择，就是去选那些最 popular（流行）的选择 ... 但是如果你想成为一个格外优秀的人 ... 你就要有勇气去做出一些和别人不太一样的选择"*

**作者概括**：可证伪的常识 ——
"确定性很高的选择 ... 都是被 well-priced（充分定价）"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 把工作机会当**投资**而不是**交易**

> *"他会觉得我在此刻加入这家公司，我在此刻需要什么什么什么东西<br>而不愿意去 ... appreciate（欣赏）在这个过程中是公司和个人双方的一种 investment（投资）"*

投资的回报都在未来。<br>
"你今天买 100 块钱投资一个东西，<br>你今天就损失 100 块钱"。

</div>

</div>

<div class="mt-6 p-3 italic border-l-4 border-blue-500 bg-blue-50">
"如果你真的想成为一个领导的话，你在生命里边某个阶段，应该更关注的是<strong>你自己对自己的标准、自己对自己的认可</strong>"
</div>

---

# 未来：反过来走 Meta 的路

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**已经公开的战略**

打造**全新的下一代社交媒体平台**。

> *"我们就是要打造一个全新的下一代的社交媒体平台<br>这样一个社交媒体平台，能够给 AppLovin 带来很宝贵的自有流量"*

**和 Meta 反着走**：

| Meta | AppLovin |
|---|---|
| 先有自有流量，<br>再做算法/广告 | 先在第三方平台<br>厮杀出来，<br>再造自有流量 |

</div>

<div>

**为什么这条路更难——但更稳**

> *"在一个 harsh（恶劣）环境里面长出来的植物 ... 这些困难本身是让你变得更加的坚韧"*

**还会扩什么流量**：
- CTV（Connected TV 联网电视）—— Adam 早在一两年前就提
- 自有社交媒体（招人中）

被问到"social media 现在挺难做"：

> *"你记得 3 年前还有什么东西很难做吗 ... 广告 ... 可能又是另外一个奇迹可以发生"*

</div>

</div>

---

# 2026：AI 审判降临

<div class="text-sm opacity-70 mb-3">硅谷101 的尾声分析：AppLovin 即便业绩超预期，2 月股价仍暴跌</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-sm">① Google Project Genie</div>
<div class="text-xs opacity-70 mt-2">
基于简单指令生成 720p、实时交互 3D 世界。
市场担心 Google 一键生成海量轻量级互动内容，
垂直整合广告体系，**稀释 AppLovin 游戏广告库存**。
带崩整个游戏股。
</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">② CloudX 重出江湖</div>
<div class="text-xs opacity-70 mt-2">
创始人 Jim Payne 是 **MoPub 的创始人**——
当年亲手为 AppLovin 搭建了帝国基石。
现在他高调主张用 AI agents 绕过 MAX 这样的黑盒，
直接挑战 AppLovin 的核心利润。
</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">③ Meta 的复仇</div>
<div class="text-xs opacity-70 mt-2">
**Advantage+ AI 系统**惊人进化。
1 月底大幅提高 iOS 应用内广告 eCPM 竞价密度，
部分第三方发行商收入**增长 3-5 倍**。
即便没有 IDFA，Meta 也在重新精准投放。
</div>
</div>

</div>

<div class="mt-6 p-3 italic border-l-4 border-purple-500 bg-purple-50">
"这道裂缝只是广告形态被挑战的开始。AppLovin 不会是最后一家。"
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这场 2 小时访谈里，最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"决策本身其实非常简单。真正使得公司走向成功的是，决策之后的 365 天每天的日子怎么过。"
<div class="text-xs opacity-60 mt-1 not-italic">— 拒绝"三件做对的事"叙事</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"我们没有 Google 和 Meta 那么多的资源，就注定了我们不能用它们的方法来解决我们的问题。"
<div class="text-xs opacity-60 mt-1 not-italic">— Underdog 的方法论</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"我从进 AppLovin 那一刻开始，我就希望有一天我们能够走出游戏。"
<div class="text-xs opacity-60 mt-1 not-italic">— 卖掉游戏业务的伏笔</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"过去三年真的感觉像过了十年一样 ... 每天都在打仗。"
<div class="text-xs opacity-60 mt-1 not-italic">— 1000 天的体感</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"我经常自己自嘲，我说我自己是绝不会 hire 我自己的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 论"经验的价值被高估"</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"我说我们工作不卷，AppLovin 工作一点不卷 ... 我们只是勤奋而已。"
<div class="text-xs opacity-60 mt-1 not-italic">— 勤奋 vs 卷的区分</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"硅谷这个地方，我觉得 underdog 在这里，是最被 appreciate 的一种精神。"
<div class="text-xs opacity-60 mt-1 not-italic">— 整场访谈的精神坐标</div>
</div>

</div>

---
layout: end
---

# 365 天，每一天

<div class="text-xl mt-8 italic opacity-80">
"每一个普通人，他距离到能够改变世界的这样一个能力，<br>
其实中间的鸿沟是非常非常小的。<br>
你需要的就是能够迈出那一步的勇气，<br>
和迈出那一步之后 365 天，每一天的努力工作。"
</div>

<div class="mt-8 text-sm opacity-60">
—— 葛小川（Giovanni Ge）· AppLovin · 2025-12-21
</div>
