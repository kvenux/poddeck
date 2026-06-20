---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '当机器人学会开可乐：深聊灵巧手的"不可能三角"与六大技术门派'
info: |
  硅谷101 · 机器人特辑 EP1
  对话 TetherIA（特斯拉前灵巧手负责人创业团队）
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 当机器人学会开可乐

### 灵巧手的"不可能三角"与六大技术门派

<div class="mt-8 text-base opacity-70">
硅谷101 · 机器人特辑 EP1<br>
走访 TetherIA（特斯拉前灵巧手负责人创业团队）<br>
Aero Hand Open · 300 美元的开源革命
</div>

<div class="mt-8 text-xs opacity-50">
PodDeck · 基于完整逐字稿生成 · 所有引言已 grep 验证
</div>

---

# 为什么这期值得听完

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">开可乐比走路难十倍</div>
<div class="text-xs opacity-70 mt-1">"控制灵巧手要比控制躯体难上至少十倍"——颠覆认知的事实</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">一只手 = 一台顶级机器人</div>
<div class="text-xs opacity-70 mt-1">Shadow Robot 灵巧手 $100k+，Unitree G1 全身 $16k</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">不可能三角</div>
<div class="text-xs opacity-70 mt-1">性能 / 成本 / 可靠性，只能三选二</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm">六大技术门派</div>
<div class="text-xs opacity-70 mt-1">直驱 / 绳驱 / 液压 / 连杆 / 混合 / 开源，各家武功路数</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-sm">$300 的"安卓时刻"</div>
<div class="text-xs opacity-70 mt-1">TetherIA Aero Hand Open——开源能否颠覆 30 年垄断</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-sm">五年之后的家庭机器人</div>
<div class="text-xs opacity-70 mt-1">受访团队：五年内机器人会真正部署进生活</div>
</div>

</div>

---

# 开场谜题：开可乐 vs. 走路，哪个难？

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50">

"你觉得让机器人学会走路难，还是让它学会打开一听可乐难？……我猜你们大部分人都会说走路难吧。但我最近在采访的时候，才发现一个完全颠覆我认知的事实——在机器人世界里，开可乐这件事比走路可难太多了。"

</div>

<div class="mt-6 text-sm opacity-70">— 硅谷101 开场白</div>

<div class="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">

**核心结论**：控制灵巧手要比控制躯体难上至少十倍。

</div>

---

# 价格做了最直白的解释

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Unitree G1
<div class="text-3xl font-bold text-blue-600 my-2">$16k</div>
<div class="text-xs opacity-70">整机会走路</div>
<div class="text-xs opacity-70 mt-1">中国人形机器人</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### Atlas
<div class="text-3xl font-bold text-purple-600 my-2">$140k</div>
<div class="text-xs opacity-70">整机会后空翻</div>
<div class="text-xs opacity-70 mt-1">波士顿动力（预估）</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Shadow Hand
<div class="text-3xl font-bold text-red-600 my-2">$100k+</div>
<div class="text-xs opacity-70">仅一只手</div>
<div class="text-xs opacity-70 mt-1">英国 Shadow Robot（业内估）</div>

</div>

</div>

<div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

**这是什么概念？** 一只手的价格接近一个完整的顶级机器人。这好比一个方向盘的价格接近整辆特斯拉。

</div>

---
layout: two-cols
---

# 为什么手这么难做？

人的手是一台进化了数百万年的"精密仪器"：

<div class="mt-4 space-y-2">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 text-sm">
<b>27 个自由度</b>——既能握紧工具，又能穿针引线
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 text-sm">
<b>29 个关节</b>——单个大拇指就有 IP、MCP、CMC 三个关节
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 text-sm">
<b>34 块肌肉</b>——力量与精度同时具备
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 text-sm">
<b>27 块骨头</b>——关节连接极小，灵活又小巧
</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
"它的关节和关节之间的连接非常小，这就是为什么人手既能灵活，又体积非常小的原因。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hand-anatomy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一只手要"灵巧"，得满足五条

<div class="grid grid-cols-1 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>① 足够多的关节</b>
<span class="text-sm opacity-80 ml-2">高端产品需达到 20-27 个自由度（人手 27）</span>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>② "绣花"般的精细控制</b>
<span class="text-sm opacity-80 ml-2">毫米级操作——抓只有 5 毫米的 M5 螺丝钉</span>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>③ 触觉</b>
<span class="text-sm opacity-80 ml-2">力觉/位置传感器——知道是轻是重、是软是硬</span>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>④ 察言观色 = 自适应抓取</b>
<span class="text-sm opacity-80 ml-2">圆的、方的、玻璃、铁块——抓法各不相同</span>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>⑤ 长得像人手</b>
<span class="text-sm opacity-80 ml-2">人类世界的所有工具都是为人手设计的</span>
</div>

</div>

---

# 40 年技术演进史

<div class="grid grid-cols-1 gap-2 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>1980s · 开山之作</b>　Stanford/JPL Hand——3 指、每指 3 关节、带触觉，"证明这事儿能做"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>1990-2000s · 百家争鸣</b>　Utah/MIT Hand、DLR Hand 各显神通，仍停留在实验室；同期两指夹爪占领工厂
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>2000-2010s · 商业化破冰</b>　Shadow Robot、Allegro Hand 商业化，数万美元，仅服务科研机构
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>2020s · 巨头入场</b>　特斯拉规模化生产灵巧手，GPT 等大模型打开"机器人大脑"新天地
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>2025 · 转折点</b>　特斯拉 22 自由度新手、TetherIA $300 开源——"灵巧手即将迎来智能手机时刻"
</div>

</div>

---
layout: two-cols
---

# 不可能三角

灵巧手的三个顶点：

<div class="mt-4 space-y-3">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<b>性能</b>　Shadow Robot 120+ 传感器、24 自由度——但 $100k+
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<b>低成本</b>　DexHand、Amazing Hand 等 3D 打印 $300——"只能摆造型，抓取基本没法用"
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<b>可靠性</b>　简化设计、减少故障点——但性能大打折扣
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"如果把电机做得很小，它的功率输出和性能就会相应变弱。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./impossible-triangle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 控制比硬件还棘手：大脑 + 小脑

人类抓握的两层闭环控制：

<div class="mt-4 space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<b>前馈控制 Feedforward</b><br>
大脑基于视觉和经验，<u>抓取前</u>预测所需力量——看见水瓶就先估重量
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<b>反馈控制 Feedback</b><br>
手指接触后实时调整——物体滑动则神经系统在 &lt;100ms 内反射性增加力量
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-xs">
**机器对应**：大脑控制依靠视觉/经验/推理（VLA 模型）；小脑控制依靠触觉/力反馈（实时微调）
</div>

<div class="mt-2 text-xs opacity-60 italic">
2023 年底特斯拉 Optimus Gen 2 捏鸡蛋 demo，正是大脑视觉+小脑力控协作的代表作。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dual-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 记者亲手上阵：我感受不到

<div class="mt-6 p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50">

"我觉得难点在于我感受不到（触觉），比我想象中更难……由于我是完全感知不到触感和力度，我抓握完全是空气，只能凭借我的眼睛，观察灵巧手与物体的接触反馈来及时调整。"

</div>

<div class="mt-4 text-xs opacity-60">— 主持人陈茜，亲手戴手套遥操 Aero Hand Open</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<b>遥操作（Teleoperation）的卡点</b><br>
人不在闭环里，只剩视觉单一通道
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<b>真正的难点 = 多模态融合</b><br>
力、力矩、触觉、视觉 → 感知 → 判断 → 调整
</div>

</div>

---

# 手必须"接触世界"——这是它和躯体最大的不同

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 传统机器人
**避免接触**——一旦接触就是碰撞，碰撞就是损伤

工厂分拣、仓库搬运，都在小心翼翼地"绕开人和物"

</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">

### 灵巧手
**必须接触**——所有功能都建立在"和外界接触"之上

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"我们主要是靠双手和外界进行接触……但是手恰恰需要和外界接触。"

</div>

<div class="mt-2 text-xs opacity-60">— TetherIA 创始人</div>

---

# 六大门派（上）

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 直驱派
**"搭积木选手"**

需要动哪里就放个电机
- Allegro Hand（16 自由度 / 16 电机）
- SharpaWave / Wuji Hand / XHand

<div class="text-xs mt-2 opacity-70">
✓ 控制精细　✗ 电机小→力小，抗冲击差
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 绳驱派
**"仿生学大师"**

电机=肌肉放前臂，钢丝绳=肌腱拉手指
- Tesla Optimus（22 自由度）
- Shadow Robot · TetherIA

<div class="text-xs mt-2 opacity-70">
✓ 轻量、力量稳、自适应　✗ 欠驱动难精控
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ③ 液压派
**"暴力美学"**

- Sanctuary AI Phoenix（21 自由度液压手）
- 液压组件小型化到硬币大小，"20 亿次循环测试无泄漏"

<div class="text-xs mt-2 opacity-70">
✓ 力量大、响应快　✗ 成本/噪音/维护
</div>

</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
液压派的难度：「把挖掘机的液压系统缩小到了手表的尺寸」
</div>

---

# 六大门派（下）

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### ④ 连杆派
**"机械美学优雅派"**

- 韩国 ILDA 灵巧手
- 驱动器集成在手掌内部
- 连杆/摇臂/滑块"分配"动作

<div class="text-xs mt-2 opacity-70">
✓ 结构紧凑、外形优雅　✗ 抗冲击差、可靠性不足
</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### ⑤ 混合派
**"工程师的中庸之道"**

直驱 + 绳驱 + 连杆机构组合

- 多用于学术研究
- TetherIA 走的也是混合派路线（高自由度版本）

<div class="text-xs mt-2 opacity-70">
✓ 折中成本/重量/性能
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ⑥ 开源派
**"乱拳打死老师傅"**

- DexHand · ORCA Hand · Amazing Hand
- TetherIA Aero Hand Open（$300）
- "群狼战术"——让全世界工程师都玩得起

<div class="text-xs mt-2 opacity-70">
"就像 Android 对手机行业的影响"
</div>

</div>

</div>

---
layout: two-cols
---

# 为什么特斯拉死磕"绳驱"

绳驱方案的核心思路——

把"肌肉"（电机）放在前臂，通过"肌腱"（钢丝绳和高强度合成纤维）来控制手指运动。

<div class="mt-4 space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<b>优势</b>：轻量化、力量输出稳定、自适应、布局接近人体
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<b>根本劣势</b>：欠驱动→没法精准控制，每个点力输出会随自适应变化
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<b>破解方法</b>：软件里对绳驱各模块精准建模——理解手在不同条件下的变化
</div>

</div>

<div class="mt-3 text-xs opacity-60">
特斯拉 Optimus 最新手宣称 22 自由度，接近人手的 27。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tendon-drive.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 四个 Demo，四种刁难

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🔩 抓 M5 螺丝钉（直径 5mm）
**精细控制的终极考验**

力输出方向稍微不配合，"往往会把小物体抓飞"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 📦 抓大盒子
**指尖极限**

盒子几乎和手一样大，只能"靠机器手最后一节关节来提供力量"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🥤 开可乐
**"指甲"的价值**

需要在狭小空间里实现相对大的力输出——指甲 + 软物质包裹 + 接近人手曲率

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 📱 拿桌面上的 iPhone
**几毫米缝隙 + 不能硬碰撞**

绳驱方案让手在接触桌面时自适应，"而不会跟桌面形成真正的碰撞和对抗"

</div>

</div>

---

# 开可乐 demo：一个"使坏失败"的小插曲

<div class="mt-6 p-6 text-xl italic border-l-4 border-orange-500 bg-orange-50">

"我本来想使个坏，使劲摇晃了下可乐罐，本来想让灵巧手给我开个'喷气式'可乐的——但是，诶 怎么这么平静，这次使坏失败。大家如果知道怎么能让可乐罐摇晃打开能喷出来的给我留个言，我下次再去找灵巧手试试。"

</div>

<div class="mt-4 text-xs opacity-60">— 陈茜，在 TetherIA 办公室现场</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

**为什么"开可乐"这个 demo 重要？**
它真正展现了机器人手的"人性化"特征——指甲、曲率、自适应、软物质包裹，这些"人手前端的设计细节"决定了能不能完成日常动作（洗菜、做饭、剥菜……）。

</div>

---

# 小物体抓飞、大物体抓不稳——同一个问题

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 抓小物体（5mm 螺丝钉）

- 精准控制能力
- **力输出方向**必须配合得当
- 力的方向稍歪 → 物体被弹飞

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 抓大物体（接近手长的盒子）

- 只有**指尖最末端关节**能用上力
- 主持人自己尝试也"勉强"——
  "我可能没有办法使出这么大力 / 在我的最末端的这个关节上面"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">

共同的答案是：**硬件设计上自适应 + 力输出一致性 + 软件系统精准操控绳驱**。

</div>

---

# AI 在三条战线同时发力

<div class="grid grid-cols-1 gap-3 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🧠 VLA 模型 — 给机器人装"翻译机"
把"帮我倒杯水"这样的自然语言翻译成动作序列。**传统机器人要为每个任务专门编程，VLA 让它能理解指令。**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🎮 Sim2Real — 虚拟环境里跑数百万次试错
不损坏硬件就能训练。**但仿真和现实有差距**——摩擦力、刚性、柔软度，简化的参数体现不出来。"像在游戏中开车和现实中开车的区别。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 🤖 AI 小脑 — 解决遥操作"自由度多"的痛点
TetherIA 针对绳驱方案做了 AI 小脑：用户不需要精准告诉力输出方向，**手会根据任务自适应调整，"极大提高了遥操的丝滑程度"**。

</div>

</div>

---

# AI 反过来降低了硬件精度要求

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### 过去
机器人贵在哪？

- 供应链缺乏，驱动器专门定制
- 产量低、成本下不去
- **靠不断提高硬件精度**实现高级功能

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### 现在
**有了 AI 加持**

- 硬件精度要求不必那么高
- 软件可以补偿物理误差
- 整体价格"会越来越低"

</div>

</div>

<div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">

"以便宜的价格被更多机器人和科技爱好者所采用，在此之上去更好的用 AI 开发软件，来加速灵巧手和机器人的技术进步。"

</div>

---
layout: two-cols
---

# TetherIA 的"安卓策略"

为什么走开源 + 低自由度路线：

<div class="mt-4 space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<b>资金不像特斯拉那么多</b><br>
不能完全靠自己烧研发——必须和社群一起成长
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<b>极致任务导向</b><br>
自由度较低，但能完成大多数接近人手的任务
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<b>$300 硬件成本</b><br>
功能超越市面几千甚至几万美金的产品——用市面 off-the-shelf 现成电机
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<b>反向收数据</b><br>
全世界研究者都成为数据贡献者
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./android-strategy.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 受访者的五年判断

<div class="mt-6 p-6 text-xl italic border-l-4 border-purple-500 bg-purple-50">

"我们相信五年之后，我们会看到机器人在很多地方都开始部署了。它不会是一个停留在视频里或者概念里的东西，就像我们现在每天接触 ChatGPT 一样，它会真正在我们生活当中产生巨大的价值。"

</div>

<div class="mt-4 text-xs opacity-60">— TetherIA 团队</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<b>主持人的延伸</b>：也许再过数年，回头看 2025 年会发现这是机器人真正走向普及的起点——每个家庭都可能有一个机器人助手，帮做饭、打扫、照顾老人、陪伴孩子。
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<b>而这一切的起点</b>，就是让机器人拥有一双真正灵巧的手。
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"控制灵巧手要比控制躯体难上至少十倍。"
<div class="text-xs opacity-60 mt-1 not-italic">— 行业内被反复验证的结论</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"一只手的价格接近一个完整的顶级机器人……好比一个方向盘的价格接近整辆特斯拉。"
<div class="text-xs opacity-60 mt-1 not-italic">— 价格对比的核心反差</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"现在在传统的机器人里，更多的是避免机器人和外界接触……但是手恰恰需要和外界接触。"
<div class="text-xs opacity-60 mt-1 not-italic">— TetherIA 创始人讲手的本质矛盾</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我抓握完全是空气，只能凭借我的眼睛……"
<div class="text-xs opacity-60 mt-1 not-italic">— 主持人遥操体验的最真实感受</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"他们是乱拳打死老师傅……威力在于'群狼战术'。"
<div class="text-xs opacity-60 mt-1 not-italic">— 形容开源派的颠覆方式</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"灵巧手即将迎来'智能手机时刻'。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2025 转折点判断</div>
</div>

</div>

---
layout: end
---

# 让机器人拥有一双真正灵巧的手

<div class="mt-8 text-base italic opacity-80">
"我们相信五年之后，我们会看到机器人在很多地方都开始部署了。"
</div>

<div class="mt-4 text-xs opacity-50">
硅谷101 机器人特辑 EP1 · 走访 TetherIA<br>
PodDeck · 所有引言均 grep 自完整逐字稿
</div>
