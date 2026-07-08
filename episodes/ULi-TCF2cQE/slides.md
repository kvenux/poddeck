---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '美国AI研究员的中国之旅 · Nathan Lambert 专访'
info: |
  Nathan Lambert 在 2026 年 4 月密集拜访北京、杭州的多家中国 AI 实验室后,回到美国写了一篇引起讨论的文章。本 deck 提炼硅谷 101 与他的完整对谈。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 美国 AI 研究员的中国之旅

## 年轻人、追赶者、算力焦虑与 "AGI 展示厅"

<div class="mt-10 text-lg opacity-80">
专访 Nathan Lambert · Ai2 后训练负责人 · Interconnects 作者
</div>

<div class="mt-4 text-sm opacity-60">
硅谷 101 视频播客 · 2026 年 7 月
</div>

<div class="mt-8 text-xs opacity-50 italic">
"能见到这些技术背后的人 我真的很高兴"
</div>

---

# 为什么这期特别

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一手田野

Nathan 6-7 晚跑遍北京、杭州:阿里、Kimi、智谱、美团、清华、小米、蚂蚁百灵、魔搭。**中国实验室现场描写**几乎没有第二人写过。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 极懂开源

作为长期追踪全球开源模型的人,他是**判断中美开源实力的最合适评委**:"如果拿枪指着我,我会说 Kimi 和智谱最好"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 冷静的中间派

他既不复读"中国威胁论",也不夸大"中国已超美"。**算力、数据、编程模型、地缘政治**都给出了自己的划分。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 少见的双向对照

对比"美国焦虑 vs 中国务实"、"横向分工 vs 垂直整合"、"数据产业发达 vs 几乎空白"—— 全是这一趟中国行才看得清的差异。

</div>

</div>

---

# 主人公 · Nathan Lambert

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 履历

- Hugging Face **RLHF 团队**组建成员
- Ai2 (艾伦人工智能研究院) **大模型后训练负责人**
- 参与打造 **OLMo / Tülu** 开源模型
- Substack **Interconnects** 作者
- Lex Fridman 播客常客

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么可信

- 每天在**测试世界各地的开源模型**
- **2025 年 DeepSeek 出圈**时 与 SemiAnalysis 的 Dylan Patel 在 Lex 那做了 5+ 小时对谈
- 2026 年又用 4+ 小时给 Lex 盘点全球 AI
- Lex 评价:**"广受尊敬的研究者、工程师和技术传播者之一"**

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Ai2 是保罗·艾伦资助的非营利机构,大约 200 人,做各种"以产出物为核心"的开源 AI 研发。西雅图联合湖畔办公。
</div>

---
layout: two-cols
---

# 行程一览

<div class="mt-6 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>时长</strong>:6-7 晚
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>主要城市</strong>:北京(3-4 晚)+ 杭州
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>特点</strong>:大多数拜访的公司在**清华附近**,"感觉很像湾区,溜达着就能逛遍"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>形式</strong>:围绕 SAIL (AI 领域的 Substack 作者群) 组织,团体行程
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
<strong>未拜访</strong>:DeepSeek(最神秘的先行者)、字节跳动
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./china-trip-map.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "谦卑感":一趟旅行带来的东西

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"去之前我就知道自己了解得不多。去了之后更觉得,我没看过的还多着呢。"
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-gray-50 border border-gray-300">

### 他没有"AI 惊天大料"

"AI 领域谁在做模型、哪些团队在推进,很多信息其实已经相对公开了。"

对他这样的老观察者来说,**认识做模型的人本身**才是最重要的收获。

</div>

<div class="p-4 rounded bg-gray-50 border border-gray-300">

### 他更清楚"没懂什么"

- 中国教育系统与人才流向
- 中国研究员的"本能反应"
- 中美之间信息的**深度不对称**

Nathan 今年在补读《Breakneck》和《Apple in China》。

</div>

</div>

---

# Kimi 月之暗面:"氛围最好"的一家

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现场感觉

- 一群人**关系特别近**
- 做出一个很酷的东西本身就让他们兴奋
- "我们做的这些模型,我们自己也在用"
- **不是那种特别公司化的感觉**

<div class="mt-3 text-sm opacity-60">
Nathan:"这次拜访的公司里,'氛围最好'的一家。"
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 一件典型的事

Kimi 的论文《Attention Residuals》**其中一个作者是 17 岁高中生**。

马斯克在 X 上转发,评"Kimi 的研究成果令人印象深刻"。

<div class="mt-3 text-sm opacity-70">
→ 这不是月之暗面独有,而是<strong>中国 AI 公司里人才非常年轻</strong>这个更大现象的一个入口。
</div>

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Kimi 也知道 Cursor 在训练它们的模型,会主动和 Cursor 交流。这是很少见的"开源实验室 × 应用公司"跨国协作。
</div>

---

# 智谱:"AGI 加载中"的展厅文化

<div class="mt-4 p-5 bg-purple-50 border-l-4 border-purple-500 rounded">

Nathan 学到一件事:**中国公司很有"展厅文化"**。

有访客来,就会安排走一遍公司的历史展板。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 展厅细节

- 智谱的展厅里,几乎**每块展示板都有 AGI 元素**
- 例如"**AGI 加载中**"
- 或者:"**AGI 进度到了 42%**"

<div class="mt-2 text-xs opacity-70">
Nathan 指出这是《银河系漫游指南》的梗。
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Nathan 的判断

- 智谱**非常成功**、非常自豪
- 上市 + 被美国列入实体清单 → 立即被推到"真正大公司"位置
- Kimi 与智谱**很相似**,只是模型取舍不同
- 若 Kimi 私有化 / 智谱上市,**文化差异可能扩大**

</div>

</div>

---

# 千问:小模型策略是"刻意为之"

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 开发者认同来自哪里

- 持续发布**性能强、尺寸覆盖广**的小模型
- 1B / 10B / 30B 这些规模的模型**非常受欢迎**
- Llama 4 出来后声势变弱,**千问正好接住**了开源社区的目光

<div class="mt-3 text-sm opacity-60 italic">
"AI 研究有多少是拿千问来做的,简直不可思议。"
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但最大的模型不发布

- **千问 Plus / 千问 Max 都是闭源的**
- 对应阿里云那一面 —— 巨额支出也有巨额收入
- 团队感受到压力:发布一个模型就得维护它,得对接 vLLM 等整个生态
- 模型团队本身还很小,**外包不了**

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">
听千问团队自己说:"对,我们就是这么做的,我们也知道这很耗时间。" —— 小模型是**用长期成本换开发者习惯**的自觉选择。
</div>

---

# 美团 · 小米:大公司都在自己做模型

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 美团

- 有自己的**语言模型团队**
- 用来支撑**内部智能体产品**
- 逻辑:"我们产品上真的要用,是不是开源并不最重要"
- 也顺手发出来"获得一些反馈"
- **还投资了月之暗面最近一轮融资**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 小米

- 2025 年 4-6 月 首发 **MiMo 7B**
- 12 月 又推出很受欢迎的 **MiMo-V2-Flash**
- 招到了前 DeepSeek 员工 **罗福莉**
- Nathan:"小米很可能会成为中国最强的模型团队之一"
- 大模型 + 机器人模型 + 硬件"都想自己做一遍"

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500">

**作者概括**:在美国,消费公司第一反应是"直接调外部 API"。在中国,大公司第一反应是"我们有算力有人才,为什么不自己做"。这是 Nathan 归纳的"技术所有权心态"。

</div>

---

# "技术所有权心态":自己掌握在手里

<div class="mt-4 p-5 bg-green-50 border-l-4 border-green-500 rounded italic text-lg">
"能自己做就尽量自己做,而不是购买别人的服务。这样才能掌握长期轨迹。"
</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 直觉来源

Nathan 引用《Breakneck》里王丹的话:**中国的资本主义比美国更强烈**,因为会用更长周期思考什么带来最好利润率。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 当下现实

对这些公司,做模型**一年 5 亿到几十亿美元**是大钱但不是"做不起"。蚂蚁百灵**只花 6 个月**就把团队搭起来。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 隐性代价

- 会**压制中间层的空间**
- 小公司(Kimi/MiniMax/智谱)融入大生态更难
- 有小公司做的 agent **被字节封掉**、无法继续抓取

</div>

</div>

---
layout: two-cols
---

# 超级 App × AI 的正向飞轮

<div class="mt-6 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 蚂蚁百灵是最典型的例子

自己做模型,同时把**平台能力**扩展到新的领域,比如医疗健康。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

Nathan 提醒西方观察者:"他们没有意识到当你使用**支付宝**这样的平台时,它背后有多大的业务覆盖面和应用场景"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 结论

对**触达范围极广的大公司**,自己做模型是说得通的。这套逻辑在美国叫"Google/OpenAI/Anthropic 的飞轮",在中国则**天然对应超级 App**。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ownership-flywheel.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 零一万物:早退出未必是坏事

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

零一万物已经**转向偏 ToB 的商业模式**,不再冲前沿模型。Nathan 见到李开复本人,评价:"见到他本身就像见到一位传奇人物。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-gray-50 border border-gray-300">

### Nathan 的类比:Databricks

美国也有 Databricks 做过模型然后放弃。管理层大概想:

"我们很高兴不用再自己花钱训练模型,我们要去做自己的核心业务。"

零一万物和 Databricks 都在"**小型 MoE / 稠密模型阶段**"就退出,投入还没有大到不可承受。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 反直觉的结论

"不是每个人都需要拥有或做出最好的模型。"

如果判断自己**不会有竞争力**,早停可能反而是明智的。做模型很像"持续转动机器,不断加码资源",不是每家公司都适合。

</div>

</div>

---

# 中国研究员画像:年轻、务实、英语好

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 年轻得让 Nathan 觉得自己老了

- Kimi 的 Crystal、智谱的 Lu(**"大概才 20 岁,而且还在上学"**)
- 小米研究员 Lai Li 是**博士生**同时是**核心研究员之一**
- Nathan 30 岁出头,还是觉得"这些人真的好小"

<div class="mt-2 text-xs opacity-70">
在美国,博士生进入实验室核心通常是"顶尖中的顶尖";在中国**普遍如此**。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 英语普遍很好 · 关注西方

- 最新一代英语**非常出色**
- 都在关注西方 AI 生态、Twitter、博客
- **反过来并不成立**:美国生态里很多人不关心中国在发生什么

<div class="mt-3 text-xs italic opacity-70">
→ 双向信息不对称,决定了两边的心智模型
</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">
Nathan 观察到中国研究员**不太爱展开谈自己的看法**——一部分是企业文化,一部分是他们所处的整个环境"更偏务实",不像美国研究员那样通过播客获得认可来反过来影响公司方向。
</div>

---

# "科学每次进步都要等一场葬礼"

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 rounded italic text-lg">
"科学每次进步都要等一场葬礼。"
</div>

<div class="text-sm opacity-60 mt-2">Nathan 引用的这句悲观格言,用来解释一个"直观但难承认"的现象:</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 为什么中国研究员更愿意押新范式

- 新人**没有既有成绩要维护**
- 没有旧观点要捍卫
- 更容易直接跳进去

一位中国研究员告诉 Nathan:**新来的学生不知道以前深度学习那一套是怎么做的,他们更像是"我想先知道当前最先进的方法是什么,然后把它做得更好"**。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 系统性的年轻化

- 中国实验室吸纳年轻人才**比其他实验室快得多**
- 学生**没什么别的事儿要操心**,可以把一个巨大的、固定的知识体系"全部吸收进去"
- 也**更愿意让他们站出来**

<div class="mt-2 text-xs opacity-70">
Nathan 承认这既是文化,也是"结构性的现象"。
</div>

</div>

</div>

---

# 算力焦虑:一次预训练就是六个月

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded">

一家中国实验室告诉 Nathan:**"他们最新一次预训练跑了大概六个月。"**

如果那次训练失败,**整个这一代模型可能就根本不会存在了**。对公司来说是非常危险的位置。

</div>

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### 结构性劣势

**5000 张 GPU/人**

Nathan 听过传闻,一个 OpenAI 研究员自己能拿到大约 5000 张 GPU

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### 现实结果

**实验空间窄**

冒险尝试的空间、能做的动态算法实验"**都窄得多**"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-center">

### 唯一选择

**沿路径优化**

必须"沿着当前模型路径持续优化,把这当成一种必然选择"

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

Nathan 问过每一家:"你们最大的瓶颈是什么?" —— **"对,是算力"** 是最常见的回答。所有中国实验室都想要更多英伟达算力来训练最新模型。

</div>

---

# 华为芯片:推理可用,训练还不行

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 推理侧

- **"推理基本可用 但训练还不行"** 这基本是共识
- 智谱的 API **每天要处理数万亿 token**
- 正在摸索**如何把华为芯片用于推理**
- 一些不那么核心的公司会说:"我们必须有华为芯片,但还没怎么用"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 训练侧

- 现在**只有很小的模型**可能用华为训练
- 专注训练的研究员一致说:"我想要更多英伟达"
- Nathan 预测这种状态"至少还需要几年"
- 原因:英伟达是**在调动全球供应链做最顶级产品**,华为更像"需求倒逼创新"

</div>

</div>

<div class="mt-5 p-4 bg-blue-50 border-l-4 border-blue-500">

**作者概括**:这里其实有一个正在被拉直的循环 —— 中国国内 AI 推理需求增长 → 更需要华为产能 → CUDA 对应生态成熟 → 训练也能迁移。Nathan 说"这不是几年后的事,而是几个月内就会发生"。

</div>

---
layout: two-cols
---

# "快速跟进者"策略

<div class="mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 传统基准差距

美国领先 **6-9 个月**,大致稳定

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 用户看到的差距 · 急剧变窄

- 中国:强化学习跑一周,**一天内就发布**
- 美国:模型出来"**要几周才能发**"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Nathan 的划分

"**近乎完美的'快速跟进者'**":执行力来自年轻人才 + 专注度 + 全栈覆盖的人手。但资源规模决定天花板,人才只是一部分。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fast-follower.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 开源模型领导权:美国已经输了

<div class="mt-4 p-5 bg-red-50 border-l-4 border-red-500 rounded italic text-lg">
"过去一年,美国已经把开放模型领导权让给了中国。"
</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 时间点

- **2025 年夏天**是分水岭
- **GLM 4.5 和 Kimi K2** 作为突破性模型出现
- 从那之后"**美国就不再拥有开放模型领导地位了**"
- Nathan:"任何声称不是这样的人都有点没有看清"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 美国的希望

**英伟达**

- 老黄发布了 **Nemotron 3 Ultra**
- Nathan:这标志"英伟达完成了重新尝试开源模型的第一个阶段"(Nano / Super / Ultra 系列已齐)
- Meta / Microsoft 因产品原因**选择不发**,英伟达是"最有位置改变局面的一方"

</div>

</div>

---

# 拿枪指着头必答:世界上最好的开源模型

<div class="mt-4 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 rounded">

"如果你拿枪指着我,我会说 **Kimi 和智谱**是世界上最好的开源模型。"

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Nathan 现在听得最多的两个模型

- **Kimi K2.6**
- **GLM-5.1**

"感觉它们确实在前沿实际使用里产生影响。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 但排名一直在变

- 2025 全年 DeepSeek 基本是公认王者(V3 / R1 系列)
- 也不排除**小米后来居上**
- **千问最大模型闭源**,声量受限
- 竞争激烈,"非常微小的差距"

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

*作者提醒*:Nathan 说的是"竞争很激烈,一直在变"——这是采访当刻的排名,不是长期结论。

</div>

---

# AI 编程模型:美国最难被追上的护城河

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

Nathan 举的"美国真正拉开差距"最好例子:**Claude Code / Codex 从 2025 年 12 月、2026 年 1 月开始的编程革命**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 中国团队会追上"代码质量"

- 可以基于**公开数据 + GitHub** 让模型通过题目学习
- 模型实际代码质量"会非常高"

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 但"易用性"美国实验室有巨大领先

- 美国实验室能获得**消费者数据**
- Cursor 会基于用户使用 Cursor 的数据训练模型
- ChatGPT / Codex / Claude Code 同理
- 开源实验室发布后,**大量使用不会回流**

</div>

</div>

<div class="mt-5 p-4 bg-orange-50 border-l-4 border-orange-500">

**Nathan 的预测**:如果某个开放权重模型能支持同样行为,"全世界都会谈论它"——"我每个月花 1 美元而不是给 OpenAI 付 200 美元,那很多人会切换"。但他不觉得**今年会出现一个非常明确的分水岭**。

</div>

---

# "我们爱 Claude,Claude 是最好的模型"

<div class="mt-4 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50 rounded">

"我们爱 Claude,Claude 是最好的模型。"

<div class="text-xs opacity-60 mt-3 not-italic">
— 中国开发者对 Nathan 的原话。Claude 在中国**理论上不能直接用**,但他们仍然在用它工作,并且非常坦诚地这么说。
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 需求是真的

- Claude Code / Codex → "知识工作工具"
- OpenClaw 等一批国内工具在**借这股势**
- Nathan:"OpenClaw 这个名字可能火一阵就过去了,但它代表的这种智能体会留下来"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 一条正在被打通的循环

中国开发者用 Claude → **需求路由到西方算力** → 但一旦国内推理能力(华为)解锁,**需求就会汇聚回到国内**。Nathan 说 Kimi、智谱在 OpenRouter 上的请求量增长就是这个信号。

</div>

</div>

---

# 数据产业:被低估的短板

<div class="mt-3 p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

Nathan 说这是他**最惊讶**的事情之一:**"中国的数据产业远没有美国发达。"**

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 美国这一边

- Anthropic / OpenAI 有**数十亿美元的数据预算**
- **Scale AI、Mercor、Surge、Turing** 组成的完整市场
- 从早期"人类反馈偏好数据" → 现在"**高技能劳动产业**"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 中国这一边

- Nathan 问中国公司:"我们基本没有这种东西"
- 有些在内部做(字节 / 阿里等大厂)
- **几乎没人**说"去找外部供应商买一些数据"

</div>

</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-xs">

连锁推理:中国 AI 研究员都在用 Claude 做知识工作 → **Claude 就更有理由继续做**这些高价数据 → **数据产业也会继续留在美国**。

</div>

---
layout: two-cols
---

# 横向分工 vs 垂直整合

<div class="mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">

### 美国生态里有中间层

Cursor 拿了 Kimi 模型 → **Fireworks 做后训练** → 再通过 Fireworks 提供服务。中间层(CoreWeave、Nebius、Together、Fireworks、Lambda)背后是英伟达希望收入不要只集中在少数客户。

</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

### 中国生态更垂直

中国云厂商**只承载自己的模型**,缺少"基础设施/优化层"。要养出这一层,得**愿意把某个重要环节交出去**——和"所有权 + 整合"心态直接冲突。

</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

### Nathan 判断

**创业公司**(Kimi/智谱)比老牌大厂更愿意跨国协作 —— "Kimi 会去和 Cursor 交流"。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./stack-compare.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 中美研究员的文化差异:焦虑 vs 务实

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 美国:社会性焦虑非常强

Nathan 身边的同事:

<div class="p-3 mt-2 bg-white rounded italic text-sm">
"我会想你已经是我认识的最优秀的 AI 研究员之一了。但即便是这样的人也会说'我真的非常非常担心这个问题'。"
</div>

- CEO 到处说"AI 会让很多人失业"
- 关于**AI 时间表、职业变化、递归自我改进、永久底层阶级**的强烈叙事
- 湾区处在一种"隧道视野"里

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 中国:社会性焦虑要少得多

- **算力焦虑**是真的
- 但**社会焦虑不是主叙事**
- 开发者被问"什么是 AGI?"→ "就是它拿走我工作的时候" —— 一种玩笑
- Nathan:**"这并不像一朵乌云压在他们头顶"**

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">

Nathan 引用的一种解释:中国过去几十年经历了太多快速技术和经济变化(超级 App、电动车、...),**AI 只是"下一波"**;美国这些变化间隔更长,新一波到来时"会面对更多惯性和阻力"。

</div>

---

# 安全叙事:一句话看出的分寸差

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 美国讨论

- **"几乎带有意识形态色彩"**
- "下一代 AI 可能就是那个真正值得高度警惕的东西"
- Anthropic CEO **Dario Amodei** 是最公开警告"中国 AI 国家安全威胁"的科技领袖之一

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 中国实验室

- 更常用的词是 **security(安全)**
- 关心,但"不是最优先考虑的东西"
- **没有"必须禁止发布"这种强烈叙事**
- 承认多模态可能更快变成风险,但整体是"有分寸"的态度

</div>

</div>

<div class="mt-5 p-4 bg-yellow-50 border-l-4 border-yellow-500">

### Nathan 对 Dario 的评价

<div class="italic">"我觉得有点太激进了……Dario 在短期风险上,表达得有些过于激烈。"</div>

<div class="mt-2 text-sm opacity-70">
但 Nathan 承认自己也不是**开源绝对主义者**——"不认为每一个模型都一定应该开放",Claude 这种"重大突破""如果第一天就上传到 Hugging Face 未必是好事"。技术扩散**本来就需要时间**。
</div>

</div>

---

# 12 个月后:Nathan 的预测

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 会发生的

- **某种新的智能体产品**成为所有人谈论的对象(可能来自 Google 或别家)
- 大大小小 AI 实验室**收入继续增长**
- OpenAI 和 Anthropic 可能**公开上市**且没问题
- **DeepSeek V5、Kimi K3、GLM 6** 等新模型会出

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 会变化的

- **中美前沿模型差距会变大**:从"三个月"→ 未来"六到九个月,或者一年"
- 但中国实验室"看起来不会停滞不前或放弃"
- 中型公司(**Together、Fireworks、Baseten、Kimi、智谱、MiniMax**)会在"出售智能"上表现很好
- 3-5 年尺度:**某个主要中国实验室可能会因为融资问题倒下**

</div>

</div>

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 text-sm">

Nathan 对全球 AI 竞赛的整体态度是"**大概比较中性**"。他真正担心的不是中国追赶,而是**"美国公众舆论可能对 AI 变得更负面,而这会伤害进展"**。

</div>

---

# 他真正想做的事:让双方更理解彼此

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 rounded">

"我觉得最主要的是能给带来更多的人性化。尽我所能,让双方都不会觉得那么极端。"

<div class="mt-4 not-italic text-sm opacity-70">
"很多构建和使用技术的人,对最高层决策几乎没有发言权。我能做的一小部分,就是让双方更理解彼此。"
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一个"墙正在被打通"的时刻

- 美国老规矩:去中国出差电脑就废了(Meta / Google)
- 中间一直**有一堵墙**
- 但"现在这堵墙正在慢慢被打通"
- Nathan 预计接下来几周到几个月,**会有更多美国中型创业公司去中国**

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一个搭桥的小样本

- 他去时用**过境免签**,"人到了就行"
- 反过来:中国研究员来美要**等签证流程**
- Nathan:"我不同意现在正在推进的这些限制高技能移民的政策"

</div>

</div>

---

# 核心金句

<div class="text-xs opacity-60 mb-3">这期对谈里最值得记住的几句(每句都可在原文中查到):</div>

<div class="space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"如果你拿枪指着我,我会说 <strong>Kimi 和智谱</strong>是世界上最好的开源模型。"
<span class="text-xs opacity-60 not-italic ml-2">— 开源实力排名</span>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"过去一年,美国已经把开放模型领导权让给了中国……<strong>2025 年夏天</strong>就是这样。"
<span class="text-xs opacity-60 not-italic ml-2">— 领导权转移的时间点</span>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"<strong>我们爱 Claude,Claude 是最好的模型。</strong>" — 中国开发者原话
<span class="text-xs opacity-60 not-italic ml-2">— 编程模型的护城河</span>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"科学每次进步都要等一场葬礼。"
<span class="text-xs opacity-60 not-italic ml-2">— 解释年轻研究员的优势</span>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"能自己做就尽量自己做,而不是购买别人的服务。这样才能掌握长期轨迹。"
<span class="text-xs opacity-60 not-italic ml-2">— 技术所有权心态</span>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"华为芯片推理基本可用,但训练还不行 —— 这基本是共识。"
<span class="text-xs opacity-60 not-italic ml-2">— 国产加速器的现状</span>
</div>

</div>

---
layout: end
---

# "让双方更理解彼此"

<div class="mt-10 text-lg italic opacity-80">
"能见到这些技术背后的人,我真的很高兴。<br/>
因为这是一个共同向着各种目标迈进的社群——不管你把那个目标叫 AGI 还是别的什么。"
</div>

<div class="mt-8 text-sm opacity-60">
— Nathan Lambert · 硅谷 101 · 2026 年 7 月
</div>
