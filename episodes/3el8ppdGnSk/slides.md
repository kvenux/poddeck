---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '再聊黄仁勋"量子春晚"：只有混战、没有共识的量子计算界'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 黄仁勋的"量子春晚"

### 14 位 CEO 同台 · 一场没有共识的混战

<div class="mt-8 text-sm opacity-70">
《硅谷101》深度第二期 · 主持 陈茜 · 嘉宾 Joe Han · 祁均
</div>

<div class="mt-10 text-xs opacity-50">
英伟达 GTC「量子日」拉来 5 大技术派别 14 家公司 · 老黄一句开场把概念股再次砸了一把<br/>
超导 / 中性原子 / 离子阱 / 光子 / 拓扑 —— 每家都说自己最强，整机互不兼容
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 老黄的"侮辱性极强"
开场一句"我都不知道量子计算公司已经上市了"——量子概念股再次重挫。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 14 家公司 14 个未来
三场 panel，14 家 CEO，整机几乎完全不兼容——这本身就是行业最大挑战。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 五大技术派别全梳理
超导 · 中性原子 · 离子阱 · 光子 · 拓扑，谁的"多快好省"加起来最划算。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 微软的拓扑大戏
号称"新物质状态"，匹兹堡大学研究员直接开喷"欺诈性项目"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 中国玩家百花齐放
本源 · 国盾 · 华翊 · 国仪 · 中科酷原 · 图灵 · 正则 —— 每条路线都有 2-3 家。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 黎明前的那一刻
量子 + AI 三种结合模式 · ChatGPT 式的临界爆发可能比想象中更快到来。

</div>

</div>

---
layout: two-cols
---

# 开场：老黄一句话，市值再次蒸发

<div class="text-sm opacity-70 mt-2">
今年 1 月老黄那句<strong>「非常有用的量子计算还要 15 年到 30 年时间」</strong>已经把量子概念股砸过一次。GTC 期间他本想"握手言和"——
</div>

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded text-base italic">
"我都不知道量子计算公司已经上市了"
<div class="text-xs opacity-60 mt-1 not-italic">—— 黄仁勋，量子日开场</div>
</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
节目用一句话总结：<br/>
<strong>"伤害性不强但是侮辱性极强"</strong>
</div>

<div class="mt-3 text-xs opacity-60">
英伟达"量子日"后量子概念股<strong>再次重挫</strong>——结果适得其反。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quantum-day-stage.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 英伟达本来想做什么

<div class="text-sm opacity-70 mb-4">
老黄不是想"交恶"量子界——GTC 这一轮他下了不少血本：
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### CUDA-Q
全球首个<strong> GPU 加速量子计算系统</strong> NVIDIA DGX Quantum，把 CPU/GPU 生态扩到量子。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 波士顿新实验室
GTC 期间宣布将<strong>新建专注量子计算的实验室</strong>——长期布局，不是 PR。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 量子日 panel × 3
召集 14 家最权威量子公司 CEO，<strong>「想在开场承认一下错误」</strong>。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 量子生态老大
节目里嘉宾的排序：<strong>英伟达 CUDA-Q · IBM Qiskit · 谷歌 Cirq · Xanadu PennyLane</strong>。

</div>

</div>

<div class="mt-5 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
但事实却<strong>"弄巧成拙"</strong>——反而让外界意识到量子界面临的众多挑战。
</div>

---

# 14 家公司，14 个互不兼容的未来

<div class="text-sm opacity-70 mb-4">
嘉宾 <strong>Joe Han</strong>：13 年量子产业经验，D-Wave / IonQ / SEEQC 早期投资人，1QBit 联合创始人。他在节目里总结：
</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"这 14 家企业的量子整机相互之间几乎完全不兼容——这个现象本身就是量子界最大的挑战"
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded text-sm">

### 现状关键词
<div class="mt-2 text-xs">
<strong>无法统一路径 · 无法达成共识</strong><br/>
无法协同 · 无法产生经济效应<br/>
无法高效利用有限的专业人才
</div>

</div>

</div>

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
所以节目里有一句更狠的总结：<br/>
<strong>"黄教主邀请的量子计算的公司越多，对量子产业伤害越大"</strong>
</div>

---
layout: two-cols
---

# 怎么评价一个量子比特：多 · 快 · 好 · 省

<div class="text-sm opacity-70 mt-2">
嘉宾给了一个非常接地气的框架——评价任何一条量子路线都从这四个维度看：
</div>

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>多</strong> · 比特数量比较多
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>快</strong> · 操作时间短，单位时间内门操作多
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>好</strong> · 比特精确率高，误码率低
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>省</strong> · 制造维护成本低
</div>

</div>

<div class="mt-3 text-xs opacity-60">
没有一家在四个维度上全占——这就是为什么 14 家公司各执一词。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./duokuaihaosheng.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 五大技术派别 · 全景

<div class="text-sm opacity-70 mt-2">
量子日上 14 家公司，技术路线<strong>分成 5 大主流派别</strong>。每一派的物理原理、领头公司、长板短板都不同。
</div>

<div class="mt-4 text-xs opacity-70 space-y-2">

<div><strong>① 超导</strong> —— 电荷在芯片上像水流一样波动</div>
<div><strong>② 中性原子</strong> —— 激光"钳住"原子做灯泡阵列</div>
<div><strong>③ 离子阱</strong> —— 把带电原子悬挂在电场里指挥</div>
<div><strong>④ 光子</strong> —— 用光的粒子当信息快递员</div>
<div><strong>⑤ 拓扑</strong> —— 借助马约拉纳费米子构造稳定比特</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
此外还有"硅自旋"（Intel / SQC）<br/>
和 D-Wave 的"退火"路线 —— 都还在起步阶段。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quantum-paths.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 派别 ①：超导量子 —— 大厂主战场

<div class="text-sm opacity-70 mb-4">
通俗解释：把超导体做成电路 ≈ 河道，电流像河水一样波动。<strong>"电荷像波一样集体运动"</strong>。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### IBM —— 规模 + 整机迭代
2016 至今交付<strong>超过 60 台</strong>量子计算整机。

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

### Google —— 量子纠错
早期就实现量子纠错，重点死磕纠错技术。

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

### Amazon —— 猫态降错
2 月底推出 <strong>Ocelot 芯片</strong>，用 "cat qubits" 在硬件层做容错。

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

### Rigetti —— 模块化扩展
通过<strong>多块小芯片互联</strong>构建大系统（IBM 出身创始人）。

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">
<strong>共同痛点</strong>：必须在<strong>毫开尔文</strong>极低温下运行——"俄罗斯套娃"一样的真空罩，每天运行成本极贵。
</div>

---

# 超导 · 亚马逊 Ocelot 与 Alice&Bob 的"猫态"

<div class="text-sm opacity-70 mb-4">
2 月底亚马逊宣布的 Ocelot 引用了一种新做法——<strong>纠错直接做进比特里</strong>。法国初创 Alice&amp;Bob 走的也是这个方向。
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"我们的猫量子比特技术在量子比特内部就已直接构建了第一层的纠错"<br/>
"能够将所需的量子比特数量减少多达 <strong>200 倍</strong>"<br/>
"从摩尔定律的角度来看……几乎相当于我们获得了近十年的领先优势"
<div class="text-xs opacity-60 mt-2 not-italic">—— Alice&amp;Bob 创始人 · 量子日 panel</div>
</div>

<div class="space-y-3">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>Alice&amp;Bob</strong> · 法国初创<br/>
2025 年初 B 轮融资 <strong>1 亿美元</strong>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>Rigetti</strong> · 2022 年通过收购 Supernova SPAC <strong>纳斯达克上市</strong>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Rigetti CEO Subodh Kulkarni</strong>：<br/>"借鉴半导体行业五十年的经验……门速度可以达到纳秒级别"
</div>

</div>

</div>

---
layout: two-cols
---

# 派别 ②：中性原子 —— 灯泡阵列

<div class="text-sm opacity-70 mt-2">
原理：用激光"钳住"一颗颗原子，每个原子<strong>暗=0、亮=1</strong>，靠激光让它们靠近、互动、再挪走。
</div>

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded">
<strong>灵活性</strong> · 不像超导焊死在芯片上，激光"挪来挪去"
</div>

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>统一性</strong> · "所有的原子它天生都长得一样"，超导比特每个都有制造误差
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>规模化</strong> · "可以很容易地做到 1000 个量子比特这种数量级"
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>常温</strong> · 不需要昂贵的制冷设备
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./atom-array.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 中性原子三家初创各有所长

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### Atom Computing
<div class="text-xs opacity-70 my-1">"记忆高手"</div>
利用原子内部的<strong>核自旋</strong>，追求长存储时间。<br/>
<div class="mt-2 text-xs">
"首批突破 1000 个量子比特的公司之一"<br/>
追求 <strong>all-to-all connectivity</strong>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### Pasqal · 法国
<div class="text-xs opacity-70 my-1">"拼拼图高手"</div>
用激光在空间里摆<strong>超大规模灯泡阵列</strong>，模拟化学反应 / 材料结构 / 城市交通。<br/>
<div class="mt-2 text-xs">
2023 年初 B 轮 <strong>超 1 亿美元</strong>
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### QuEra
<div class="text-xs opacity-70 my-1">"可编程式摆原子"</div>
用激光在<strong>计算过程中</strong>移位原子，连接非常灵活的处理器。<br/>
<div class="mt-2 text-xs">
2.3 亿美元转换债券<br/>
投资方含<strong>谷歌 · 软银</strong>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">
<strong>挑战</strong>：高精度原子操控 · 稳定的激光系统 · 大规模时各原子之间的高保真相互作用。
</div>

---

# 派别 ③：离子阱 —— "用激光指挥一支舞蹈队"

<div class="text-sm opacity-70 mb-3">
节目里最美的类比：带电原子悬挂在电场里 ≈ 微小的钟表；激光控制它们 ≈ 指挥<strong>一个完美的舞蹈队</strong>。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### IonQ · 2015 创立
<div class="text-xs opacity-70 my-1">"小型整体舞团"</div>
主打<strong>全连通性</strong>——所有离子可相互作用，没有限制。<br/>
<strong>2021 年 3 月在纽交所上市</strong>——量子计算第一股。

<div class="mt-3 text-xs italic opacity-80">
"室温运行 · 机架式 · 用光纤进行网络连接做分布式量子计算"
</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### Quantinuum · 霍尼韦尔旗下
<div class="text-xs opacity-70 my-1">"大型并行舞团"</div>
更复杂芯片设计，<strong>同一系统并行操作</strong>，移动离子实现高效门。<br/>
独立运作，霍尼韦尔主要持股，<strong>备受关注准备上市</strong>。

<div class="mt-3 text-xs italic opacity-80">
"今年 50 个逻辑量子比特……18 个月后 100 个……2031/32 年达数百万"
</div>

</div>

</div>

---

# 离子阱：极致精度，但"慢 100 倍"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 短板 · 慢
- 离子操作较慢，目前只能做<strong>十几个或二十几个比特</strong>
- 移动离子、让离子之间相互耦合都很慢
- 相对于超导 / 中性原子，<strong>慢约 100 倍</strong>
- 扩展时振动模式复杂、控制难度增大

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 长板 · 极精
<div class="grid grid-cols-2 gap-2 mt-2">

<div class="text-center">
<div class="text-xs opacity-70">超导 双比特门</div>
<div class="text-2xl font-bold text-red-600">98%</div>
</div>

<div class="text-center">
<div class="text-xs opacity-70">离子阱 双比特门</div>
<div class="text-2xl font-bold text-green-600">99.9%</div>
</div>

</div>
<div class="mt-2 text-xs">还可以自然结合芯片制程，常温运行——"省"的角度也不差</div>

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs italic">
"其实保真度是有一个质变的差异的"——节目嘉宾，强调精度差异不只是数字大小，而是<strong>质的不同</strong>。
</div>

---

# 派别 ④：光子量子 —— 拿光当快递员

<div class="text-sm opacity-70 mb-3">
不再用蹲在原地的"原子"或"离子"，<strong>用飞来飞去的光子</strong>当信息载体。光子在光纤里飞得快、抗干扰强——但有一个根本难题：
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"你手电筒打两束光……那个光就直接交叉就直接穿过了，它不会互相弹开来——所以我们的生活经验表明，光其实是不会相互作用的"
<div class="text-xs opacity-60 mt-2 not-italic">—— 节目嘉宾</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### 解决办法：基于量子测量
<div class="mt-2 text-xs">
光子本身无法相互作用——所以需要<strong>用量子测量诱导纠缠</strong>来完成计算。<br/>
代价：测量本身具有很大的不确定性，需要在<strong>软件 / 编码层</strong>下大量功夫。
</div>

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-xs">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Xanadu · 加拿大</strong> —— 没来量子日，用"连续变量"压缩光信号；开源框架<strong>PennyLane</strong>是量子+AI 的桥梁。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>PsiQuantum</strong> —— 用大量<strong>单光子</strong>构建百万比特集群，赌容错通用量子计算机。
</div>

</div>

---

# 光子量子最强 Drama：Pete Shadbolt 与 PsiQuantum

<div class="text-sm opacity-70 mb-3">
嘉宾原话——量子日 Panel 2 最具争议人物：
</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"他融了整个量子界所有公司所融的钱之和的钱——一个传奇式的量子科学家和企业家"<br/>
"他所展现的就是也有一点像（黄教主之前所说的）不是针对任何一位——我们的光子路线才是未来"<br/>
"和他对于故事叙事的那种自信感，我觉得是也能让黄教主有震撼到的"
<div class="text-xs opacity-60 mt-2 not-italic">—— 节目嘉宾评 Pete Shadbolt</div>
</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### PsiQuantum 路线
<div class="text-xs mt-1">
单光子 · 硅光子工艺 · 复用<strong>数据中心硅光技术</strong>，<br/>
目标<strong>百万量子比特规模</strong>，未来几个月在<strong>澳大利亚 + 芝加哥</strong>破土建设。
</div>

</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

### 路透社 2025 年 3 月报道
正在以<strong>60 亿美元投前估值</strong>融资<strong>至少 7.5 亿美元</strong>。

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs">
<strong>光子路线痛点</strong>：光在光纤中传播会丢失——"算着算着你这个比特就没了"。
</div>

</div>

</div>

---

# 派别 ⑤：拓扑量子 —— 量子界的"神秘宝藏"

<div class="text-sm opacity-70 mb-4">
微软在 2 月发布<strong>首款"拓扑结构"量子芯片</strong>，声称用<strong>不会轻易被扰动的马约拉纳费米子</strong>构造量子比特。号称"新物质状态"——但学界并不买账。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 如果是真的：宝藏级
<div class="text-xs mt-1">
节目里嘉宾给出的对比：
</div>
<div class="mt-2 grid grid-cols-3 gap-2 text-center">
<div>
<div class="text-xs opacity-70">超导 双比特门</div>
<div class="text-xl font-bold text-red-600">98%</div>
</div>
<div>
<div class="text-xs opacity-70">离子阱</div>
<div class="text-xl font-bold text-orange-600">99.9%</div>
</div>
<div>
<div class="text-xs opacity-70">拓扑（理论）</div>
<div class="text-xl font-bold text-green-600">7-8 个 9</div>
</div>
</div>
<div class="mt-2 text-xs">小数点后再加 5-6 个 9——质变级精度</div>

</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">

### 但是：业界不认可
<div class="text-xs mt-1 italic">
"匹兹堡大学的量子研究员 Sergey Frolov 就直接开喷说，微软内部开展的量子芯片研究是一个<strong>欺诈性项目</strong>"
</div>
<div class="text-xs mt-2">
3 月 17 日 APS 全球物理峰会发布会，<strong>依然没能说服学界</strong>。
</div>

</div>

</div>

---

# 拓扑路线为什么这么"玄"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 物理上确实复杂
- 涉及<strong>量子多体相互作用的费米子系统</strong>
- 同样的实验信号<strong>可以由多种不同机制</strong>导致
- "关于这个实验数据应该怎么解读……是否真的就一定是由这个马约拉纳零模造成的，是否一定意味着它有拓扑保护"
- 历史上有过<strong>声称发现却被撤稿</strong>的先例

</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">

### 学界期待
- 微软<strong>公布更多实验数据</strong>
- 其他实验组能<strong>重复并交叉验证</strong>
- 最好能演示马约拉纳零模实现<strong>拓扑逻辑操作</strong>
- 目前微软是 <strong>in-house experiment</strong>，外部尚无任何机构复现成功

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic text-center">
节目里的灵魂提问："看起来马约拉纳费米子……真的是量子计算中人人都想找到的宝藏——<strong>但是它真的存在吗？还是只是遥远的传说？</strong>"
</div>

---

# 中国玩家：每条路线都"百花齐放"

<div class="text-sm opacity-70 mb-3">
嘉宾原话："中国国内现在也呈现一个<strong>百花齐放</strong>的状态，每一条技术路线上面，都已经有两到三家不同的公司已经在进行探索。"
</div>

<div class="grid grid-cols-3 gap-3 text-xs">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">

### 离子阱
<div class="mt-2">
华翊量子（段路明）<br/>
国仪量子（合肥）<br/>
幺正量子（郭光灿学生）<br/>
启科量子（合肥）
</div>

</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">

### 中性原子
<div class="mt-2">
中科酷原（武汉）<br/>
<span class="opacity-70">"过去半年至少有 2-3 家中性原子公司正在成立和往前推进"</span>
</div>

</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">

### 超导
<div class="mt-2">
本源量子（"中国量子计算的长子"，郭光灿院士学生 郭国平）<br/>
国盾量子（量子通讯起家）<br/>
量旋量子（深圳，NV 色心起家）
</div>

</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">

### 光子
<div class="mt-2">
图灵量子（上海）<br/>
正则量子（北京）<br/>
<span class="opacity-70">黄磊磊老师带领，"在真正意义上的光量子计算道路上推进"</span>
</div>

</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">

### 其他
<div class="mt-2">
量子通讯 · 量子测量——"咱们国家最擅长的方面"，已展现一些瞩目成果。
</div>

</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">

### 整体节奏
<div class="mt-2">
"<strong>多家公司在你追我赶的一个往前去探索的一个路程上面</strong>"——节目希望之后专门做一期国内深度。
</div>

</div>

</div>

---

# 量子公司怎么赚钱：三条收入大方向

<div class="text-sm opacity-70 mb-3">
节目把头部量子公司的商业模式拆成三块——尤其针对已经上市的 IonQ / D-Wave / Rigetti：
</div>

<div class="grid grid-cols-3 gap-3 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ① 卖整机 + 云服务
<div class="text-xs opacity-70 mt-1">主营业务</div>
<div class="mt-2 text-xs">
<strong>D-Wave</strong> 最早卖真机给<strong>洛克希德马丁</strong>，第二台卖给<strong>谷歌 + NASA 联合体</strong>。<br/>
但单卖真机财报会"spike / valley"——所以转向<strong>云服务平滑曲线</strong>。<br/>
IonQ / Rigetti 把真机放在 AWS / Azure 上按时收费。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### ② 企业合作 + POC
<div class="text-xs opacity-70 mt-1">咨询业务</div>
<div class="mt-2 text-xs">
和大企业客户、实验室、研究机构合作。<br/>
与潜在甲方做 <strong>Proof of Concept</strong> 概念验证研究——<strong>顾问费不小</strong>。
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### ③ 国防订单（大头）
<div class="text-xs opacity-70 mt-1">非营收性收入</div>
<div class="mt-2 text-xs">
<strong>IARPA</strong>（基础设施高级研究计划局）<br/>
<strong>DARPA</strong>（国防高级研究计划局）<br/>
"直接收到的是科研的经费，被纳入<strong>非营收入</strong>，但也算收入的一部分"。
</div>

</div>

</div>

---

# 初创公司的"额外杀手锏"

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### Infleqtion
<div class="text-xs opacity-70 mt-1">"很微妙"</div>
- <strong>NIST</strong> 大量采购它的<strong>原子钟</strong>
- 中性原子与离子阱"亲兄弟"——共用<strong>~30% 光学器件</strong>，能两边卖
- DARPA / IARPA 在 <strong>PNT（定位 · 导航 · 授时）</strong>采购大单

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### QuEra
<div class="text-xs opacity-70 mt-1">AWS 上的"模拟器"</div>
- AWS Braket 有 <strong>digital</strong> 和 <strong>Analog</strong> 两种 quantum computing 设备
- Analog 那个就是 QuEra
- <strong>用 QuEra 模拟分子运动特别好</strong>

</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">

### Anyon（上期视频公司）
<div class="text-xs opacity-70 mt-1">"自己芯片之前先给别人造"</div>
- 量子芯片<strong>制程是杀手锏</strong>（从实验室延续）
- 在做自家整机之前，就<strong>替别家设计开发量子芯片</strong>赚现金流
- "在有现金流的过程中都是非常健康的"

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xs">
<strong>节目观察</strong>：风投资金支持的初创公司必须更快转向<strong>市场应用</strong>——云端接入、特定问题优化等等，给大厂战略提供新鲜思路和验证。
</div>

---

# 商业落地的真实场景

<div class="text-sm opacity-70 mb-3">
节目里反驳"量子计算还是 PPT"的论调——其实甲方客户已经有不少：
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 已经在试的应用
<div class="mt-2 text-xs space-y-1">
<div>· <strong>药物研发</strong> · 量子化学</div>
<div>· <strong>材料设计</strong></div>
<div>· <strong>优化问题</strong>（路线规划、资源分配）</div>
<div>· <strong>量子金融</strong></div>
<div>· <strong>量子加密 / 量子超距传输</strong></div>
</div>

</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">

### 量子 + AI 的双向赋能
<div class="mt-2 text-xs space-y-2">
<div><strong>AI → 量子</strong>：量子编译、量子纠错、数字孪生模拟器、自然语言量子编程。<strong>"让量子计算机更聪明、更高效、更抗噪"</strong></div>
<div><strong>量子 → AI</strong>：量子神经网络、量子搜索、优化算法、量子分类、量子生成模型。<strong>"让 AI 跑得更快、学得更深"</strong></div>
</div>

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-xs italic">
一线研究人员告诉节目：<strong>利用量子神经网络生成传统大模型 AI 的参数，可以造成 100-1000 倍的大模型参数高效压缩</strong>。
</div>

---

# 量子 + AI 的三种结合模式

<div class="text-sm opacity-70 mb-3">
嘉宾把量子与 AI 的关系切成<strong>三种状态</strong>——节目认为这是接下来几年最有看点的方向：
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### ① AI 辅助量子早日实现
<div class="text-xs opacity-70 mt-1">短期主旋律</div>
<div class="mt-2 text-xs">
包括<strong>英伟达的量子加速中心</strong>，都是为这件事铺垫。AI 帮量子做训练优化、噪声纠错。
</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### ② 量子启发式算法
<div class="text-xs opacity-70 mt-1">借量子思想，跑在经典机器上</div>
<div class="mt-2 text-xs">
把"量子里所得到的启发，用经典的计算机进行一个执行"——已经在产生现实价值。
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### ③ 量子 AI 实现化
<div class="text-xs opacity-70 mt-1">混合 vs 纯量子</div>
<div class="mt-2 text-xs">
"接下来很多超算中心都会引入<strong>量子硬件（QPU）</strong>进行混合搭建"——为真正的<strong>无缝连接</strong>做前期铺垫。
</div>

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
祁均教授："搭建可能<strong>第三代的混合架构</strong>……让传统的 AI 帮助量子模型做训练，而量子的模型擅长是<strong>快速采样、快速输出结果、快速地学习</strong>……可能<strong>三年内</strong>就会发现一些特别有意思的事情。"
</div>

---

# 共识只有一条：scaling

<div class="text-sm opacity-70 mb-4">
14 家公司什么都不同意——除了一件事：要做<strong>有用的量子计算</strong>，规模化必须跑得比摩尔定律快得多。
</div>

<div class="grid grid-cols-2 gap-4 text-sm">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic">
"那些真正能够改变世界的重大问题，可能需要数百万量子比特来解决……你必须确保你的量子计算机能够以极快的速度进行扩展"<br/>
"我们不希望像摩尔定律那样，每次只扩展 2 倍或根号 2 倍——<strong>我们希望每次能扩展 10 倍，并且每隔几年就能实现一次这样的扩展</strong>"
<div class="text-xs opacity-60 mt-2 not-italic">—— Atom Computing CEO · 量子日</div>
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">

### 业内对"百万量子比特"的共识

<div class="text-xs mt-2 space-y-2">
<div>"整个行业都知道——<strong>这是实现真正具有商业价值的应用的前提</strong>"<br/><span class="opacity-60">—— PsiQuantum</span></div>
<div>"如果你谈到的是那种能够改变世界的 utility-scale 应用——<strong>那你必须达到百万量子比特的规模</strong>"<br/><span class="opacity-60">—— 量子日嘉宾</span></div>
</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"我都不知道量子计算公司已经上市了"
<div class="text-xs opacity-60 mt-1 not-italic">—— 黄仁勋·量子日开场，"伤害性不强但是侮辱性极强"</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"14 家企业的量子整机相互之间几乎完全不兼容——这个现象本身就是量子界最大的挑战"
<div class="text-xs opacity-60 mt-1 not-italic">—— 嘉宾 Joe Han 总结量子日 panel</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"评价一个量子比特……我觉得从四个方面来评价：<strong>多快好省</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">—— 嘉宾给出的通用框架</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"超导……保真度做到 98%……离子阱可以做到 99.9%……但是<strong>拓扑量子比特就可以做到七个 9 八个 9</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">—— 拓扑路线为什么是"宝藏级"</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"匹兹堡大学的量子研究员 Sergey Frolov 就直接开喷说，<strong>微软内部开展的量子芯片研究是一个欺诈性项目</strong>"
<div class="text-xs opacity-60 mt-1 not-italic">—— 微软"新物质状态"风波</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"但是当你在前一天晚上睡觉，还是觉得量子计算机现在只有 100 个量子比特什么也干不了——但是你<strong>明天早上起来 Google 就 announce</strong>，OK 我们现在造好了"
<div class="text-xs opacity-60 mt-1 not-italic">—— 嘉宾比作 ChatGPT 上线前的状态</div>
</div>

</div>

---
layout: end
---

# 黎明前的那一刻

<div class="text-2xl italic mt-8 opacity-80">
"马上就在黎明的时候<br/>
问题就是我们什么时候能够把它扩展起来"
</div>

<div class="mt-8 text-sm opacity-60">
《硅谷101》深度第二期 · 主持 陈茜 · 嘉宾 Joe Han · 祁均<br/>
量子计算 · 五大派别 · 没有共识 · 但都在赌黎明
</div>
