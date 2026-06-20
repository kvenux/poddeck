---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Physical Intelligence与机器人开源革命：免费大脑背后的四派力量与博弈'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Physical Intelligence 与机器人开源革命

### 「免费大脑」背后的四派力量与博弈

<div class="mt-8 text-sm opacity-70">
《硅谷101》机器人特辑 · 陈茜
</div>

<div class="mt-10 text-xs opacity-50">
小米 · 蚂蚁 · 阿里达摩院 · 宇树 · NVIDIA · Google DeepMind · Physical Intelligence<br/>
2026 年初，整个行业把机器人的「大脑」一股脑免费拿出来——这是慈善，还是更深的棋？
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一张机器人 VLA 全景图
学院派、巨头生态派、中国与创业派、技术极致派——一次看清四股力量在做什么、为什么。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 70亿击败550亿
OpenVLA 用 1/8 的参数把 Google RT-2-X 干下来 16.5 个百分点。它是怎么做到的？

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 「机器人届的复仇者联盟」
Chelsea Finn、Sergey Levine、Karol Hausman——同一批人造了 Google 的闭源堡垒，又打开了开源的大门。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 「心机」的商业策略
PI 估值 56 亿美元，为什么要把核心模型免费送给全世界？真开源、假开源、战略开放怎么分？

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一张 RTX 4090 = 49 年训练
Genesis 仿真器把训练机器人的门槛从百万美元砸到几百美元。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 一个父亲的回答
Stanford 教授 Jan Liphardt 解释，为什么他「不希望孩子打开家门看到一个不能查看系统的机器人」。

</div>

</div>

---
layout: two-cols
---

# 四股力量 · 一张图

机器人开源 VLA 模型生态目前分四派，路线、动机、玩法都不同。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>学院派</strong>：参数不大，但能<strong>以小博大</strong>（OpenVLA · Octo）
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>巨头生态派</strong>：模型 + 整套工具链（NVIDIA GR00T · Google Gemini）
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>创业 & 中国力量</strong>：小米、蚂蚁、自变量、OpenMind 等
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>技术极致派</strong>：把控制做到极致（PI 的 π₀）
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-factions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 派系一：学院派 · OpenVLA 的「以小博大」

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Google RT-2-X
<div class="text-4xl font-bold text-red-600 my-2">550 亿</div>
<div class="text-xs opacity-70">参数 · 整个 Google 算力 + 数据</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### OpenVLA
<div class="text-4xl font-bold text-green-600 my-2">70 亿</div>
<div class="text-xs opacity-70">参数 · 学术实验室出品</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 成功率差距
<div class="text-4xl font-bold text-blue-600 my-2">+16.5%</div>
<div class="text-xs opacity-70">29 项操作任务，全面击败</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
2024 年 6 月 · 斯坦福 + 伯克利联合团队的 OpenVLA 横空出世。它证明了一件事：<strong>在具身智能领域，单纯的「大」并不代表聪明</strong>。
</div>

<div class="mt-4 text-xs opacity-60">
胜出之后<strong>彻底开源</strong>——代码、模型权重、训练脚本全部公开。
</div>

---
layout: two-cols
---

# 凭什么能赢？「三个臭皮匠」架构

Google RT-2-X 只用<strong>一个</strong>视觉编码器——「超聪明但什么都自己做」，效率低。

OpenVLA 改成<strong>两双眼睛 + 一个大脑</strong>：

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>DINOv2</strong> → 理解空间关系
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>SigLIP</strong> → 理解语义和常识
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Llama2</strong> → 融合两路信息，做决策
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"三个臭皮匠 顶个诸葛亮"
</div>

<div class="mt-2 text-xs opacity-60">
把两类信息物理隔离、各自优化，再统一决策。整体反而更强。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./openvla-arch.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Octo：另一种「普及型开源」

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### OpenVLA：规模化开源
- 70 亿参数
- 追求<strong>最强单一模型</strong>
- 公开权重 + 训练脚本

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Octo：普及型开源
- 数千万参数（更小）
- 追求<strong>「人人可用」</strong>
- Transformer + 扩散策略
- 支持多种机器人 + 传感器
- 微调即可适配新平台

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>定位差异</strong>：Octo「不是最强，而是人人可用」——给开源社区一个轻量、可快速适配的通用策略基础模型。
<br/><br/>
Octo 和 OpenVLA 是<strong>同门师兄弟</strong>，都来自伯克利，Chelsea Finn 和 Sergey Levine 的团队联合出品。
</div>

---
layout: two-cols
---

# 派系二：NVIDIA GR00T N1 的双系统

2025 年 3 月 GTC 大会，黄仁勋亲自站台发布——号称<strong>世界首个开放人形机器人基础模型</strong>。2026 年 1 月已迭代到 N1.6。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>System 2 (慢)</strong>：VLM 理解环境、解读指令、做规划
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>System 1 (快)</strong>：Diffusion Transformer 把规划高频转成关节动作
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>22 亿参数</strong>，模型权重和代码都公开了
</div>

</div>

<div class="mt-4 text-xs opacity-60">
但 NVIDIA 不止给模型——还给了 Omniverse、Isaac Sim、Cosmos、Newton 一整套生态。「一条龙服务」。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./groot-dual-system.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Google：从开源到「机器人界的安卓」

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### RT-1 (早期)
代码和数据<strong>开源</strong>。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### RT-2 及之后
<strong>转闭源</strong>，不再对外开放。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Gemini Robotics (2025+)
要做「机器人界的安卓」。

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
DeepMind CEO Demis Hassabis 把这个愿景称为「机器人界的安卓」——做通用的机器人操作系统，让 Gemini 成为各种机器人的大脑。
</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm">
<strong>2026 CES</strong>：波士顿动力宣布与 Google DeepMind 战略合作，把 Gemini Robotics 整合到 Atlas 人形机器人中。前 BD 的 CTO Aaron Saunders 也被挖去做硬件副总裁。
</div>

<div class="mt-3 text-xs opacity-60">
作者评：从开源到闭源，再到想打造「机器人界的安卓」——赛道转换有点快、野心有点大。
</div>

---

# 派系三：创业公司 + 中国玩家

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 小米 · Xiaomi-Robotics-0
47 亿参数，MoT 混合架构把「大脑」和「小脑」分开，<strong>消费级 GPU 就能跑</strong>。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 蚂蚁 · LingBot-VLA
强调跨形态泛化，在 9 种双臂机器人上预训练<strong>2 万多小时</strong>真机数据。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 清华 AIR + 上海 AI 实验室 · X-VLA
刷新五大仿真基准，代码、数据、权重<strong>全部公开</strong>。学术界最彻底的开源之一。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 星海图 · G0 Plus
开源真机数据集 + 最新 G0 Plus VLA 模型。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 智元机器人 · GO-1
已部署到<strong>真机上</strong>执行任务。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 星动纪元 · ERA-42
也在探索自己的路线。

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
中国在开源具身智能领域，态势正从「跟跑」向「参与定义规则」转变。
</div>

---

# 自变量 & OpenMind：两种「纯粹」

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 自变量机器人（中国）
聚焦通用机器人「大脑」研发的具身智能创业公司。CTO 王昊：

<div class="mt-3 p-3 bg-white border-l-2 border-blue-300 italic text-sm">
"我们这次也是持续地发扬开源精神……用了大概几万小时的真实世界的数据……希望这次开源能够对具身智能上面有一个比较好的补充。"
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### OpenMind（硅谷）
Stanford 教授 Jan Liphardt 创立，推出 <strong>OM1 平台</strong>，希望为不同厂商的人形机器人构建通用软件层。

<div class="mt-3 p-3 bg-white border-l-2 border-green-300 italic text-sm">
"我们真正想做的，是让任何人、在任何地方，都能轻松打造出能够完成各种有用任务的机器人——这一切只需要通过修改提示词就可以实现。"
</div>

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
中美两家代表——一个从工程数据切入，一个从「人人可用」切入；底色都是开源。
</div>

---

# 派系四：Physical Intelligence 的 π₀

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### 技术路线：连续控制做到极致
- 数十亿参数级 VLA 模型
- 用 <strong>Flow Matching（流匹配）</strong> 思路
- 直接生成<strong>连续</strong>的关节轨迹
- 控制频率约 <strong>50 Hz</strong>（每秒更新 50 次）
- 一口气输出 1 秒长度的计划

</div>

<div>

### 能做什么前面的模型做不了
- <strong>折纸、玩扑克牌</strong>（极高精度）
- <strong>折叠衣物</strong>
- 抓取柔性物体
- 操作细小零件

动作流畅、抖动小、迟滞少。OpenVLA 和 Octo 很难胜任。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"想让模型一口气输出一个长度大概在 1 秒左右的计划，这个 1 秒刚好是 50 步 50 赫兹。"
</div>

<div class="mt-2 text-xs opacity-60">
—— π₀ / π₀.₅ 论文作者 柯丽一鸣（接受《硅谷101》采访）
</div>

---

# Flow Matching：把动作当连续信号，而不是 Token

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 传统 VLA（含 OpenVLA）
把动作当作<strong>语言 Token 预测</strong>——离散、跳跃、对柔性任务力不从心。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### π₀ 的 Flow Matching
更接近<strong>传统控制系统的形式</strong>，但控制信号由大模型生成——平滑、高频、连续。

</div>

</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

### 把 π₀.₅ 放进别人家
"把这个移动机器人，再放到不同的没有见过的别人的家里……发现觉得还是比较有希望的——它好像展现出了有一点像人类一般的拿一个东西，其实你到别人家你还是能拿。"

</div>

<div class="mt-3 text-xs opacity-60">
—— 柯丽一鸣谈 π₀.₅ 的真实世界泛化测试
</div>

---
layout: two-cols
---

# 「机器人届的复仇者联盟」

PI 的核心团队，几乎全部来自 Google Brain 的机器人基础模型路线——参与过 <strong>RT-1、RT-2、SayCan</strong> 等标志性闭源项目。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>Sergey Levine</strong>（Berkeley · 强化学习开创者）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>Chelsea Finn</strong>（Stanford · Octo 与 OpenVLA 核心作者）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>Karol Hausman</strong>（前 Google DeepMind 资深研究科学家）
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>Brian Ichter</strong>（前 Google Brain）
</div>

</div>

<div class="mt-4 text-xs opacity-60">
2024 年初这几位陆续离开 Google，共同创办 PI。另有前 Stripe 高管 Lachy Groom、前 Anduril 工程副总裁 Adnan Esmail。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pi-avengers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Chelsea Finn：一人串起开源与闭源半壁江山

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">

### 履历
- MIT 本科 → 伯克利博士
- 师从机器人学习教父级人物 <strong>Pieter Abbeel</strong> 和 <strong>Sergey Levine</strong>
- 2019 年加入 Stanford 任教，拿奖到手软
- Physical Intelligence <strong>联合创始人</strong>

</div>

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">

### 横跨阵营
<strong>OpenVLA</strong>（开源）核心作者 · <strong>Octo</strong>（开源）核心作者<br/>
<strong>RT 系列</strong>（闭源）推动者 · <strong>PI π₀</strong>（半开源）联合创始人

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 italic">
"Levine 和 Finn 在 Google 时期参与了 RT-1、RT-2 这些闭源项目，离开之后又推动了 Octo 与 OpenVLA 这些开源工作。<strong>这个领域中的同一批人，可以说是既造了闭源的堡垒，也打开了开源的大门</strong>。"
</div>

---

# π₀ 为什么免费送？三招「心机」

PI 估值 56 亿美元，背后是 Jeff Bezos、OpenAI、Sequoia、Khosla——一家这么有钱的公司，为什么把核心模型免费放出来？

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 开源建立标准
全世界的研究者、创业公司、工业客户都在 π₀ 框架上做应用——PI 就成了<strong>事实标准的定义者</strong>。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 开源吸引人才
OpenPI GitHub 仓库成为机器人领域最热的项目之一——<strong>比任何招聘广告都有效</strong>。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ③ 开源加速数据飞轮
社区发现问题、做改进、贡献数据——<strong>这些都回流给 PI</strong>。

</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-sm">
<strong>但 π₀ 不是 100% 开源</strong>：模型权重和推理代码公开了，<strong>完整的训练 Pipeline 和 PI 内部采集的数万小时专有数据，没有公开</strong>。这是精心设计的「开源引流，闭源变现」。
</div>

---

# NVIDIA 的「伪开源」：开放，但锁定

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500">

模型确实开放了，但你看训练→部署的全流程：

</div>

<div class="grid grid-cols-5 gap-2 mt-4 text-xs text-center">

<div class="p-3 rounded bg-orange-100 border-2 border-orange-300">
<strong>训练算力</strong><br/><br/>H100 集群
</div>

<div class="p-3 rounded bg-orange-100 border-2 border-orange-300">
<strong>仿真</strong><br/><br/>Omniverse
</div>

<div class="p-3 rounded bg-orange-100 border-2 border-orange-300">
<strong>合成数据</strong><br/><br/>Isaac Sim
</div>

<div class="p-3 rounded bg-orange-100 border-2 border-orange-300">
<strong>物理引擎</strong><br/><br/>Newton
</div>

<div class="p-3 rounded bg-orange-100 border-2 border-orange-300">
<strong>部署芯片</strong><br/><br/>Jetson Thor
</div>

</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-sm">

### 对比：纯社区开源
<strong>OpenVLA 和 Octo 没有任何硬件绑定、没有生态锁定，在任何 GPU 上都能跑。</strong>

</div>

<div class="mt-3 text-xs opacity-60">
作者概括：这也许是「开放」和「开源」之间的根本区别。
</div>

---
layout: two-cols
---

# 开源是一个光谱，不是一个二选一

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>学术开源</strong>追求<br/>知识共享和科学可复现性
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>商业开源</strong>追求<br/>生态控制和市场标准
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>战略开放</strong>追求<br/>平台锁定和硬件销售
</div>

</div>

<div class="mt-4 text-xs opacity-60">
"行业如此早期，也许根本没有什么选择是正确或者错误的。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./openness-spectrum.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 开源社区拿什么打巨头？答案：生态

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### 单看任何一层，开源都不如闭源巨头

论<strong>人才密度和算力</strong>——不如 Google；论<strong>数据量</strong>——不如特斯拉；论<strong>工具链的完整度</strong>——肯定不如 NVIDIA。

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">

### 但三层联动产生的化学效应不一样

模型、数据、工具叠加形成「组合拳」——一个研究者可以用 Open X-Embodiment 数据，在 LeRobot 框架上训练 OpenVLA，用 Genesis 做仿真，部署到 100 美元的 SO-100 机械臂上。

<div class="mt-2 font-bold">全流程开源、全部免费、全部可复现。</div>

</div>

---

# 三层叠加 · 全开源 · 全免费 · 全可复现

<div class="flex justify-center items-center mt-4">
<Excalidraw
  drawFilePath="./three-layers.excalidraw"
  class="w-[720px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 生态优势①：Open X-Embodiment 数据集

<div class="grid grid-cols-4 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-1">20+</div>
<div class="text-xs opacity-70">研究机构共同贡献<br/>Stanford · Berkeley · MIT · CMU · Google</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 my-1">22 种</div>
<div class="text-xs opacity-70">不同机器人本体<br/>单臂 / 双臂 / 移动 / 人形</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-3xl font-bold text-purple-600 my-1">100 万+</div>
<div class="text-xs opacity-70">真实轨迹</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 my-1">527</div>
<div class="text-xs opacity-70">覆盖技能数</div>
</div>

</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-sm">

### 为什么多样性 > 数据量？
- 特斯拉的数据可能更大——但<strong>只有 Optimus 一种机器人</strong>在特斯拉环境里的数据
- Figure 的数据——<strong>只有 Figure 01 和 02 的操作</strong>
- Open X-Embodiment：<strong>几十种形态的机器人</strong>在厨房、实验室、仓库、办公室等场景采集

</div>

---

# 数据多样性的「涌现」效应

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### RT-1-X
<div class="text-3xl font-bold text-blue-600 my-2">+50%</div>
<div class="text-xs opacity-70">小数据域表现，比单独训练的模型高</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### RT-2-X 空间推理
<div class="text-3xl font-bold text-green-600 my-2">3 ×</div>
<div class="text-xs opacity-70">是 RT-2 的 3 倍，涌现了原模型没有的能力</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 语言细微差异
<div class="text-2xl font-bold text-purple-600 my-2">on vs near</div>
<div class="text-xs opacity-70">开始理解「接触支撑」与「空间邻近」</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
甚至能<strong>执行训练时从未见过的技能组合</strong>。这直接证明了：<strong>只要数据够多样，就算模型不是最大的，性能也能大幅提高</strong>。
</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-xs">
"在 π₀ 的时候，我们当时做了一个比较简单的统计——说 π₀ 使用的数据其实比之前谷歌研究院他们收的加在一起还要多。" —— 柯丽一鸣
</div>

---

# 生态优势②：LeRobot · Hugging Face 出品

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### LeRobot 软件
Hugging Face 从特斯拉挖来 <strong>Remi Cadene</strong> 带队——他参与过 Autopilot 和 Optimus。

- 定义 LeRobotDataset，统一数据格式
- 一键集成主流策略模型
- 打通采集 → 训练 → 部署
- GitHub <strong>2 万+ 星</strong>，开源机器人训练标准之一

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Hugging Face 的硬件野心
2025 年收购法国 <strong>Pollen Robotics</strong>：

- <strong>Reachy 2</strong> 开源人形机器人：7 万美元（已在 Cornell、CMU 使用）
- <strong>Reachy Mini</strong> 桌面机器人：250 美元
- 与 The Robot Studio 合作的 <strong>SO-100</strong> 机械臂：<strong>100 美元，3D 打印 DIY</strong>

</div>

</div>

<div class="mt-4 text-xs opacity-60 text-center">
软件 + 硬件 + 社区一起「打包」，构建完整的开源机器人生态。
</div>

---

# 生态优势③：Genesis 仿真器——一张显卡 = 49 年

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 一张 RTX 4090
<div class="text-3xl font-bold text-blue-600 my-2">4300 万</div>
<div class="text-xs opacity-70">帧/秒，模拟 Franka 机械臂</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 加速倍率
<div class="text-3xl font-bold text-purple-600 my-2">43 万 ×</div>
<div class="text-xs opacity-70">实时速度</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Genesis 1 小时
<div class="text-3xl font-bold text-green-600 my-2">≈ 49 年</div>
<div class="text-xs opacity-70">真实世界训练时长</div>

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
2024 年 12 月发布，CMU 主导，MIT、Stanford、NVIDIA 等 20+ 实验室联合开发。<strong>把训练机器人的门槛从百万美元降到几百美元</strong>——一个研究生在家用消费级显卡就能做到。
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 text-sm">
注意：NVIDIA 也和 Google DeepMind、Disney Research 联合开发了开源物理引擎 <strong>Newton</strong>——与 Genesis 形成直接竞争。仿真工具领域本身也充满竞争。
</div>

---

# 开源在机器人领域有一个「公平竞赛」窗口

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 大语言模型领域
开源是<strong>追赶者</strong>——闭源 OpenAI、Anthropic、Google 先行，开源后追，<strong>晚一到两代</strong>。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 机器人领域
开源和闭源<strong>几乎同时起跑</strong>——OpenVLA 2024 年 6 月就击败了 RT-2-X。

</div>

</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm">
原因很简单：<strong>机器人还在非常早期的阶段，没有任何一家公司建立了压倒性的数据或者算法优势</strong>——这是开源难得的「公平竞赛」窗口。
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
作者预警：<strong>如果错过了这个窗口，等闭源公司积累了足够的数据飞轮，那么开源可能就很难追上了。</strong>
</div>

---

# 开源面临的四大现实挑战

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 算力门槛
OpenVLA 训练用了 <strong>64 张 A100 跑了 15 天</strong>——比特斯拉、Google 是小巫见大巫，但对普通研究者仍是不小开支。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 数据质量
Open X-Embodiment 虽大，但<strong>不同来源标注标准参差不齐</strong>。特斯拉数据多样性不如它，但<strong>一致性更强</strong>。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ③ 工程化差距
论文表现好不代表能落地——<strong>从 DEMO 到产品有巨大鸿沟</strong>。闭源公司有完整工程团队做优化、测试、售后。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ④ 安全问题
<strong>物理 AI 比聊天机器人风险更高</strong>——聊天说错话最多尴尬，机器人做错动作可能造成伤害。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
OpenMind 的 Jan Liphardt 提出过一个大胆方案：<strong>把规则写进以太坊区块链</strong>——因为它「不可变、不能被改变」。前卫但有争议，至少说明开源社区在认真思考安全。
</div>

---

# 自变量 CTO 王昊：1-2 年到 GPT-3 水平

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 italic text-lg">
"现在由于我们明确地知道，而且我们看到了这种规模化带来的提升，所以对于我们来讲，我们的路径和目标更加明确也更加唯一。所以我的预测会在<strong>一到两年的时间，我们完全可以达到 GPT-3 的水平</strong>。"
</div>

<div class="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 text-sm">

### GPT-3 水平意味着什么？
机器人会从<strong>「能完成简单指令」</strong> 跳跃到 <strong>「能够理解复杂意图并且灵活执行」</strong>。

这将会是一个<strong>分水岭</strong>。

</div>

<div class="mt-4 text-xs opacity-60">
—— 自变量机器人 CTO 王昊，接受《硅谷101》采访
</div>

---

# 一个父亲为什么支持开源

OpenMind 创始人 Jan Liphardt 的回答——很有「人味」：

<div class="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 italic">
"因为我是一个父亲，我有两个孩子。<br/><br/>
如果我去想象未来的世界是什么样子，我不希望有一天他们打开家门，一台人形机器人站在门口说：<br/>
<strong>『你好，我是你的新机器人。但我运行的系统你无权查看。』</strong><br/><br/>
像机器人这样重要的技术，必须是公开透明的。<strong>我相信透明本身就会带来更高的安全性。</strong>"
</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-sm">
"我希望我的孩子能够给身边的机器人添加功能，能够参与到这个世界的建设中——而不是只能买回一个盒子里的产品……<br/><br/>
这归根到底<strong>关乎信任，也关乎安全</strong>。"
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"三个臭皮匠 顶个诸葛亮"
<div class="text-xs opacity-60 mt-1 not-italic">— 作者形容 OpenVLA 双视觉编码器 + LLM 的协同架构</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"在具身智能领域，单纯的『大』并不代表聪明"
<div class="text-xs opacity-60 mt-1 not-italic">— OpenVLA 70 亿击败 RT-2-X 550 亿的启示</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"这个领域中的同一批人，可以说是既造了闭源的堡垒，也打开了开源的大门"
<div class="text-xs opacity-60 mt-1 not-italic">— Levine、Finn 等机器人「复仇者联盟」</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"开源引流，闭源变现"
<div class="text-xs opacity-60 mt-1 not-italic">— 概括 Physical Intelligence 的商业策略</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"这是开源难得的『公平竞赛』窗口"
<div class="text-xs opacity-60 mt-1 not-italic">— 机器人领域与 LLM 不同：开源与闭源同时起跑</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"我不希望有一天他们打开家门，一台人形机器人站在门口说：你好，我是你的新机器人，但我运行的系统你无权查看"
<div class="text-xs opacity-60 mt-1 not-italic">— OpenMind 创始人 Jan Liphardt，从父亲角度解释为什么支持开源</div>
</div>

</div>

---
layout: end
---

# 「免费大脑」之争

<div class="mt-6 text-base opacity-80 italic">
"在机器人时代，同样的故事可能重演，但也有可能不会——<br/>
因为机器人领域有一个大语言模型时代没有的东西，<br/>
那就是<strong>从一开始就足够强大的开源生态</strong>。"
</div>

<div class="mt-10 text-xs opacity-50">
《硅谷101》机器人特辑 · 陈茜
</div>
