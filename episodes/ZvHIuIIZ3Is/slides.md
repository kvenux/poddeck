---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '揭秘数采工厂：稀缺的机器人数据，到底难在哪儿？｜机器人特辑'
info: |
  硅谷101 走进上海智元机器人数采工厂，亲手试了一次"遥操作采集员"。
  这一期讲清楚机器人为什么没有数据、四层数据金字塔怎么运作、以及行业怎么求解。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 揭秘数采工厂

## 稀缺的机器人数据，到底难在哪儿？

<div class="mt-12 text-sm opacity-70">
硅谷101 · 机器人特辑 · 走进上海智元数采工厂
</div>

<div class="mt-4 text-xs opacity-50">
"操作员是感受不到机器人的感受 / 面对这个数据荒漠，我们算是种下第一棵树"
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🏜️ 数据荒漠
机器人没有 LLM 那种"吃掉互联网"的福利

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🏭 走进上海数采工厂
200 台机器人 + "Zero to hero 一个月"的金牌采集员

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🪜 四层数据金字塔
遥操 / 仿真 / 动捕 / 视频 — 各有上限和代价

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ⚖️ 数据配方之争
质量 vs 数量，1 : 100 : 100 的比例游戏

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 🌏 中美路线分化
中国卷工厂 / 硅谷押视频 — 没有对错只有选择

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🔑 飞轮与 Scaling Law
任务级泛化还没看见，钥匙还没找到

</div>

</div>

---

# 这一组数字先记一下

<div class="grid grid-cols-4 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Google RT
<div class="text-3xl font-bold text-blue-600 my-2">17 个月</div>
<div class="text-xs opacity-70">13 台机器人 · 13 万条轨迹</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Open X-Embodiment
<div class="text-3xl font-bold text-purple-600 my-2">100 万+</div>
<div class="text-xs opacity-70">34 所机构 · 22 种本体</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 觅蜂 2026 真机
<div class="text-3xl font-bold text-orange-600 my-2">200 万 h</div>
<div class="text-xs opacity-70">接近 2000 台机器人</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 真机在数据池
<div class="text-3xl font-bold text-red-600 my-2">万分之一</div>
<div class="text-xs opacity-70">但决定模型能否落地</div>

</div>

</div>

<div class="mt-8 p-4 italic border-l-4 border-blue-500 bg-blue-50 text-sm">

"我们没有用于训练机器人的数据，网络上没有 / 现有的视频数据远远不够，真的不够。"

</div>

---

# LLM 数据 vs 机器人数据：完全是两个物种

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 🧠 大语言模型
- 文本 / 代码 / 截图 / 视频
- "世界的文本语言、瞬间截图、震动信号、连续变化"
- **互联网上海量存在**（不考虑版权）
- GPT-4 训练数据以 **万亿 token** 计

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 🤖 机器人
- 视觉 + 力觉 + 关节位置 + 电机控制量
- 必须 **精确同步、时间戳对齐**
- "这些信息从来没有被系统性地记录过"
- "也没有任何理由会被动地产生"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50 text-sm">

"机器人需要的数据，需要的是具身本体在真实物理世界里，和具体物体发生具体交互时产生的多维度传感器信号。"

</div>

---

# 这就是整个行业数据困境的根源

<div class="mt-6 p-6 text-xl italic border-l-4 border-red-500 bg-red-50">

"每一条高质量的数据都必须<strong>从零开始生产</strong>。"

</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 不能被动产生
人类不会"顺便"产生关节力矩信号

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 不能从他人继承
不同本体的数据彼此不互通

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 不能高分辨率压缩
丢失同步就是丢失数据

</div>

</div>

<div class="mt-6 text-sm opacity-70">
所以即便 Open X-Embodiment 拼出了 100 万条 + 527 项技能，"和现实世界的需求之间，依然是以数量级计的差距"。
</div>

---
layout: two-cols
---

# 四层数据金字塔：质量越高、数量越少

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Layer 1 · 遥操真机**
最完整 · 真实物理接触 · 真实失败与恢复

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Layer 2 · 仿真合成**
最具规模效应 · 但有 Sim-to-Real Gap

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Layer 3 · 动作捕捉**
人怎么动 → 映射到机器人 · 有 Embodiment Gap

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Layer 4 · 互联网视频**
海量、低成本 · 但"没有动作信号、只有结果"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-pyramid.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Layer 1 · 遥操数据 = "真机数据"

<div class="text-sm opacity-60 mb-4">遥操员通过外骨骼或者遥操系统，实时操控机器人在真实场景里完成操作；机器人所有的传感器全程录制。</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ✅ 优势
- 信息最完整
- 真实物理接触
- 真实的失败与恢复
- 后期调参成本低

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ❌ 代价
- **贵 + 慢**
- 硬件 / 场地 / 人力 / 时间成本叠加
- "规模完全不在一个量级"

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🎯 它的角色
"今天让机器人真正能在现实场景落地的**核心原材料**。"

</div>

</div>

---

# 上海智元数采工厂：亲身一试

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 现场规模
- 200 台机器，每台至少一名采集员
- 复杂任务还会配搭档负责场景布置
- "我们这里有 200 台机器，每个机器它至少有一个采集员"

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 主持人亲手试遥操
- "这个真的比我想象中难很多"
- "我现在全身都很僵硬"
- "我应该没有办法成为金牌的数据采集员了"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50">

"操作员是感受不到机器人的感受 / 面对这个数据荒漠，我们算是种下第一棵树 / 希望将来能变成一片森林。"

</div>

---

# 金牌采集员：三大天赋

<div class="text-sm opacity-60 mb-4">"好的数据采集员和差的数据采集员，他可能是 3 倍的效率的差。"</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🧠 协调性
"隔空在控制另外一个身体"
没有直观反馈
"更多只能通过自己肉眼来闭环"

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 📐 空间感
"空间比较差的话，明明你想要让它去抓那，但你自己就抓过了"
还要预判机器人能到的姿态

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 💪 体力
"一天下来其实非常辛苦的"
站着采 / 坐着采都各有酸痛

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-green-500 bg-green-50 text-sm">

"来的话就是需要有一个周的培训时间 ... 即使是有天赋的采集员，从零基础到现在九成功力，一个月时间估计也是要的 — Zero to hero 要一个月吧。"

</div>

---

# 8 小时只能产 2-3 小时有效数据

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-2 border-red-300 text-center">

### 专业遥操员一个工作日
<div class="text-5xl font-bold text-red-600 my-3">2-3 h</div>
<div class="text-sm opacity-70">从 8 小时里挤出的"有效数据"</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-300 text-center">

### 大约 1/4 的损耗去哪了
<div class="text-sm mt-3 text-left">
- 两个采集之间布置场景<br>
- 数据上传 / 操作界面切换<br>
- 失败要 <strong>丢弃掉重来</strong><br>
- "所以就大概 1/4"
</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-blue-500 bg-blue-50 text-sm">

"这就是机器人行业中的'<strong>石油业务</strong>'，而数据生态正在迅速地崛起。"

</div>

---

# 觅蜂科技 2026 路线图

<div class="text-sm opacity-60 mb-4">把真机数据做成"一站式物理 AI 数据服务平台"，背后是中国 + 东南亚多地的实体工厂。</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 真机遥操
<div class="text-2xl font-bold text-blue-600 my-2">200 万 h</div>
<div class="text-xs opacity-70">2026 全年产能</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Human-Centric
<div class="text-2xl font-bold text-purple-600 my-2">800 万 h</div>
<div class="text-xs opacity-70">计划同步采集</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 机器人本体
<div class="text-2xl font-bold text-orange-600 my-2">~2000 台</div>
<div class="text-xs opacity-70">配套采集团队</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 客户起手量
<div class="text-2xl font-bold text-green-600 my-2">100 万 h</div>
<div class="text-xs opacity-70">"已经非常多"客户的胃口</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-yellow-500 bg-yellow-50 text-sm">

"100 万小时今天放在全球就一定是绝对非常碾压式的这种存在了。但是问题是 100 万小时就能解决问题了吗？"

</div>

---

# Layer 2 · 仿真合成：黄仁勋的押注

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 为什么仿真这么诱人
- 单台 GPU 跑 **成千上万个虚拟机器人**
- "你想要多少数据，就有多少数据"
- 摔倒 / 失败 都成为数据，不造成真实损失
- 能生成"现实中极难遇到的边缘场景"

</div>

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### 一个小八卦
"听说黄仁勋的一儿一女，都在英伟达的 **Physical AI 仿真部门**。"
可见老黄对这一块是有多看重。

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-orange-500 bg-orange-50 text-sm">

"英伟达 Isaac Lab 可以在单台 GPU 上并行运行成千上万个虚拟机器人同时训练 — 规模可以是无限的。"

</div>

---

# Sharpa 的乒乓球机器人：40 小时全仿真

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-6 rounded bg-blue-50 border-2 border-blue-200 text-center">

### 训练时长
<div class="text-5xl font-bold text-blue-600 my-3">40 h</div>
<div class="text-sm opacity-70">纯仿真数据，无真机训练</div>

</div>

<div class="p-6 rounded bg-orange-50 border-2 border-orange-200 text-center">

### 击球反应速度
<div class="text-5xl font-bold text-orange-600 my-3">0.02 s</div>
<div class="text-sm opacity-70">2026 CES 上"超火出圈"</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
"机器人公司 Sharpa 在 2026 年 CES 上面超火出圈的乒乓球机器人，就是花了 40 个小时用纯仿真数据训练出了 0.02 秒量级的击球反应速度。"
</div>

---

# 触觉的突破：Tacmap

<div class="text-sm opacity-60 mb-4">Sharpa + NVIDIA 合作的触觉仿真工具 — 让"摸到东西"也能进仿真。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 传统视触觉的坑
- 仿真里要建模视触觉的指尖
- "你不可能在 simulation 里面去装一些摄像头，去看这个 marker 点的形变"

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### Tacmap 的解
- 用物体和指尖**穿膜的深度图**当介质
- 仿真里高效得到 deformation map
- 训一个 translation model 把 raw image 翻成 deformation map
- "实现了一些技能的 Sim-to-Real，能够做精细化的操作"

</div>

</div>

<div class="mt-6 p-3 italic border-l-4 border-purple-500 bg-purple-50 text-sm">

"它其实做了这样一个事情，就是对于传统的视触觉而言，你需要在 simulation 里面去建模这样的一个视触觉的指尖。"

</div>

---
layout: two-cols
---

# 仿真路线最大的漏洞：两道 Gap

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Sim-to-Real Gap**
仿真练得再好，放到真实世界往往会出问题。
"动力学层面 — 接触怎么传力、软体怎么形变、液体怎么流" 物理引擎复现不动。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Real-to-Sim Gap**（更难）
没办法把真实世界**准确搬进**仿真。
"现实世界实在是太复杂了 / 有无限的细节、噪音和不规则的事件。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**行业的三个解法**
① 域随机化 ② 把仿真做更真 ③ 少量真机数据微调

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sim-real-gap.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Layer 3 · 动作捕捉：人怎么动 → 机器人模仿

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**✅ MOCAP 优势**
记录"人是怎么动的" · 数据质量高 · 运动结构完整 · "比纯视觉多了'怎么动'的信息维度"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**❌ Embodiment Gap**
"视觉上是人的手，而不是机器人的手" · State 不准 · 触觉反馈机器人**根本没有**

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**案例：PI 的 π0 系列**
"π0.5 在大约 400 小时移动操作数据" + 大规模网络数据 → 真实家庭环境长程任务

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./embodiment-gap.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Functional Retargeting：模仿形状 ≠ 理解任务

<div class="mt-6 p-6 text-lg italic border-l-4 border-red-500 bg-red-50">

"机器人只是在模仿动作的形状，而不是理解这个动作要完成什么。"

</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 它只做了什么
- 一个运动学上的**对应关系**
- "没有真正地去实现这个操作本身语义上的对应"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 因此会出现
- 关节角度超限
- 力矩不够
- 平衡失败
- 一起和视频数据被归为"低质量数据"

</div>

</div>

---

# Layer 4 · 互联网视频：唯一不缺的原材料

<div class="text-sm opacity-60 mb-4">从 YouTube 到抖音，人类完成各种任务的视频海量存在。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 它能教什么
- 让模型学到**通用表征**
- "简单的认知，以及很多物理规律的一些粗浅认知"
- World Models 训练
- Affordance（预设用途）信息

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 它教不了什么
- "YouTube videos 最大的劣势是它**没有力和触觉信息**"
- 视频里只有结果、没有动作信号
- 还停留在"认知阶段"

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 text-sm">

"看再多别人打乒乓球的比赛视频，你第一天拿起球拍，也接不住球。" — 姚卯青

</div>

---
layout: two-cols
---

# Egocentric × Human-Centric：黄金交集

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Egocentric · 第一视角**
"以机器人的视角看出去" — 桌子、杯子、自己的机械臂、遮挡、接触。
"人形机器人，它看到的视角就是这样的。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Human-Centric · 人类意图**
围绕"人的行为、意图、示范"构建。
让机器人学到**目标和正确做法**。可以第一也可以第三视角。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**两者交集 = 最有价值**
"人类在第一视角下完成任务的数据，这是视频数据当中最有价值的部分。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./video-venn.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三个押注第一视角视频的数据集

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🍎 Apple EgoDex
<div class="text-3xl font-bold text-blue-600 my-2">829 h</div>
<div class="text-xs opacity-70">2025-05 发布 · 全开源</div>
<div class="text-xs mt-2">Vision Pro 采集 · 每帧带手部 3D 追踪 · 194 种桌面操作</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🟢 NVIDIA EgoScale
<div class="text-3xl font-bold text-purple-600 my-2">20000+ h</div>
<div class="text-xs opacity-70">2026-03 推出</div>
<div class="text-xs mt-2">数千任务和环境 · 精确骨骼追踪 21 个人体运动关键点</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 🐝 觅蜂 MEgo 系列
<div class="text-3xl font-bold text-orange-600 my-2">无本体</div>
<div class="text-xs opacity-70">MEgo Gripper + View + Engine</div>
<div class="text-xs mt-2">"降低物理 AI 数据采集对实体机器人本体的依赖"</div>

</div>

</div>

---

# Sharpa CraftNet：用 "System 0" 点石成金

<div class="text-sm opacity-60 mb-4">硬件层降低了对上层数据精度的要求 — 让低质量动捕和视频数据也能被利用。</div>

<div class="mt-4 p-5 italic border-l-4 border-orange-500 bg-orange-50">

"因为有了这样一个 System 0 的话，所以我们可以达到一个<strong>点石成金</strong>的作用 — 就是能够把大量的低质量数据用起来。"

</div>

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### System 1 · 上层策略
只需要给出"粗糙的动作意图"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### System 0 · 触觉反射层
根据实时力反馈自动完成精细调整

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 结果
低质量上层数据 → 可用的精细操作

</div>

</div>

---

# 黄金配方：每个公司都不一样

<div class="text-sm opacity-60 mb-4">张凯峰给出的一个"非常平均的估算" — 训练较为复杂的任务时各层数据的轨迹数量比：</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-5 rounded bg-red-50 border-2 border-red-300">

### 遥操 : 动捕
<div class="text-4xl font-bold text-red-600 my-3">1 : 100</div>
<div class="text-xs opacity-70">真机非常贵 → 用得很省</div>

</div>

<div class="p-5 rounded bg-orange-50 border-2 border-orange-300">

### 动捕 : 视频
<div class="text-4xl font-bold text-orange-600 my-3">1 : 100</div>
<div class="text-xs opacity-70">视频几乎不要钱</div>

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-300">

### 真机在整池
<div class="text-4xl font-bold text-blue-600 my-3">≈ 1/10000</div>
<div class="text-xs opacity-70">但是决定模型能不能落地</div>

</div>

</div>

<div class="mt-6 p-4 italic border-l-4 border-purple-500 bg-purple-50 text-sm">

"但就是这万分之一往往是最终决定模型能否在真实场景里落地的关键。"

</div>

---

# 中美路线分化：石油工厂 vs 视频捷径

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50">

### 🇨🇳 中国（智元 / 觅蜂代表）
- 把数据"做成工厂" — 200 万 h / 2000 台 / 2 万采集员
- 利用**人力成本和效率优势**打造护城河
- "在美国，特斯拉的招聘 — 采集员 50 美金一小时"

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 🇺🇸 硅谷（PI / Figure / Tesla）
- "整个硅谷是在往**视频数据**靠的"
- 减少对遥操的依赖
- 押注"可以被动规模化的采集方式"
- 强化学习 + Egocentric 视频补充

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
"但是这两种选择可能也无所谓对错，因为我们还在行业的一个超级初期 / 任何的尝试都是有意义的。"
</div>

---

# Physical Intelligence：靠精度加迭代

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### 现场部署案例
- 旧金山 **Dandelion Chocolate** 工厂打包巧克力盒
- 同时在办公室提供咖啡服务
- 员工 Slack 发"我要一杯拿铁" → 机器人去做
- π0.6 (2025-11) **RECAP** 方法：最难任务吞吐 +1 倍 · 失败率 -50%

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Sergey Levine 的哲学
"就去看当机器人不得不在真实世界里面完成任务的时候会发生什么。"

<div class="mt-3 text-xs opacity-70">
RLT (2026-03)：引入特殊 token 作为 VLA 和 RL 的接口 — 几小时真实操作练习就能让精细操作速度提升 3 倍。
</div>

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-red-500 bg-red-50 text-xs">

但是 π0.6 上验证的场景仍然是"相对结构化的任务，在受控实验环境里运行了 **13 小时**" — 距离真实工厂大规模部署还有相当距离。

</div>

---

# 强化学习路线的三个真实问题

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ① 奖励函数难定
"衣服叠得'够好'的标准很难量化。"
定义不准就会找捷径 — "把衣服揉成一团塞进角落"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ② 安全边界
"机器人在客户生产线上试错，每次失败都有现实代价 — 损坏产品、影响节拍，甚至伤到工人。"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ③ 数据归属
RL 数据是机器人用客户的物理空间和物理资产试错产生的。
"所有权比遥操数据更加模糊。"

</div>

</div>

---

# Figure × Brookfield · Sunday Robotics：硅谷的视频赌注

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50">

### Figure AI × Brookfield (2025-09)
- Brookfield 管理 **10 万套住宅** + 5 亿平方英尺商业办公室 + 1.6 亿平方英尺物流空间
- 计划：让人在这些真实空间里戴摄像头拍视频 → 训练 Helix 模型
- Brookfield 跟投 Figure **超 10 亿美元 C 轮**
- 初步结果：**只用第一人称人类视频**训练就能根据自然语言在杂乱房间里导航

</div>

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50">

### Sunday Robotics：更极端
- 直接付钱让普通人**在家录自己做家务的视频**
- 训练机器人
- 把"数据采集员"变成**众包经济**的工作

</div>

</div>

---

# 智元 AgiBot World：把百万真机数据开源

<div class="text-sm opacity-60 mb-4">2024 年智元做了一件让行业困惑的决定 — 把自己辛苦采集的百万条遥操数据，打包成 AgiBot World 数据集免费向全球开放。</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-purple-500 bg-purple-50">

### 这个动作的逻辑
"具身智能公司大量涌现，但整个行业面临一个根本性的认知危机 — **没有公共的数据基准，就无法判断一个模型的训练方法对不对。**"

<div class="mt-3 text-xs opacity-70">
"工业界的人有人得迈出第一步 / 因为否则谁也无法去真正训练出高质量的模型。"
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 后续的连锁效应
- 2025-03 英伟达 GTC 发布 GR00T N1 — 训练用的真实世界数据中 **~80% 来自 AgiBot World**
- 学术团队用了之后，转而采购智元机器人本体
- "数据开源 → 生态 → 硬件销量 → 更多数据"

</div>

</div>

---
layout: two-cols
---

# 数据飞轮：5% 回流就够

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**飞轮的核心要义**
"模型部署之后，在用户的使用过程中持续地接收反馈，再利用这些反馈不断提升自己的能力。"

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**机器人更需要这样的飞轮**
"语言模型容错度高 / 机器人毫米级的活，差一点点可能就不行了。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**回流比例 ≈ 5% 以内**
"大部分时间它这个数据对我们来讲并没有提升的意义 — 它都是成功的 / 你们只需要失败的。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**触发"高优"数据**
"全世界的存储都存不下这些实时的数据 / 大家都是触发一些高价值的数据。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-flywheel.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Scaling Law 在机器人里成立吗？还没

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**✅ 已经看到的**
- **物体泛化** — 见过类似物体就能处理
- **环境泛化** — 换个场景也行

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**❌ 还没看到的**
- **任务级泛化** — 没见过的任务也能举一反三
- "我认为现在还没有看到有任务级别的泛化"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">

"至少我们需要看到，随着数据量的增加、模型规模的变大 ... 能够实现**任务级的泛化能力**。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

"在机器人大规模部署之前，我们可能都不会有答案。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./generalization-ladder.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Sergey Levine 的麦当劳预言

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50">

"在美国有大约 <strong>1 万家麦当劳</strong>，一旦每家麦当劳各放一台机器人，每天工作两小时 —
一年就能够产生 <strong>1000 万小时</strong>的具身智能训练数据 — 比现有全球积累的总量还要多几个数量级。"

</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 麦当劳台数
<div class="text-3xl font-bold text-blue-600 my-2">10 000</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 每天工作
<div class="text-3xl font-bold text-purple-600 my-2">2 h</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 一年产出
<div class="text-3xl font-bold text-red-600 my-2">1000 万 h</div>

</div>

</div>

<div class="mt-6 text-sm opacity-70 text-center">
今年 3 月底智元率先在产量上突破 1 万台具身机器人。
我们距离找到这把机器人的数据钥匙，是否更近了？
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我们没有用于训练机器人的数据，网络上没有 / 现有的视频数据远远不够，真的不够。"
<div class="text-xs opacity-60 mt-1 not-italic">— 开场陈述：数据荒漠</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"操作员是感受不到机器人的感受。"
<div class="text-xs opacity-60 mt-1 not-italic">— 主持人在数采工厂亲身体验后的感受</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"面对这个数据荒漠，我们算是种下第一棵树 / 希望将来能变成一片森林。"
<div class="text-xs opacity-60 mt-1 not-italic">— 智元/觅蜂受访人</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"好的数据采集员和差的数据采集员，他可能是 3 倍的效率的差 / Zero to hero 要一个月吧。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于"天赋"的解释</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"看再多别人打乒乓球的比赛视频，你第一天拿起球拍，也接不住球。"
<div class="text-xs opacity-60 mt-1 not-italic">— 姚卯青，关于视频数据的局限</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"就是这万分之一，往往是最终决定模型能否在真实场景里落地的关键。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于真机数据在整池中的比例</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"机器人毫米级的东西，你差一点点可能就不行了 / 一定是需要在现实的部署过程中遇到了很多失败的场景，然后把这些数据采集回来不断地去提升。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于机器人数据飞轮</div>
</div>

</div>

---
layout: end
---

# 鱼与熊掌不可兼得

## 我们距离找到机器人的数据钥匙，是否更近了？

<div class="mt-12 text-sm opacity-70">
"最精确、最高质量的真机数据，是最少最难获取的；而最容易获取的视频数据，又是质量最低、最不可用的数据。"
</div>

<div class="mt-4 text-xs opacity-50">
硅谷101 · 机器人特辑 · 数据篇
</div>
