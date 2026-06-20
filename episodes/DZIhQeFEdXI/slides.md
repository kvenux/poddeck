---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '拆解机器人"肉身"、量产与供应链：空翻之后，它还要学会接住一片落叶｜机器人特辑'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 拆解机器人的"肉身"

<div class="text-xl mt-4 opacity-80">空翻之后，它还要学会<strong>接住一片落叶</strong></div>

<div class="mt-10 text-sm opacity-60">
硅谷101 · 陈茜 · 机器人特辑
</div>

<div class="mt-2 text-xs opacity-50">
骨架 / 关节 / 传感器 / 电气 —— 一台人形机器人到底藏着什么秘密？
</div>

---

# 这一期，到底在讲什么

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 几十个 g 的冲击

机器人每一次空翻触地，承受的加速度<strong>"跟汽车撞到墙差不多"</strong>。骨架要轻、要硬、还要扛得住。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 51% 成本都是关节

美国银行测算：执行器占机器人成本约 51%。比骨骼、传感器、芯片、电池都贵。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### "Yes and No"

供应链与汽车 80%+ 重合 —— 这是手机厂、车厂下场做机器人的原因，也是门槛被低估的原因。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 减速器的"不可能三角"

便宜、精密、耐冲击 —— 而且要在 10000 台之间保持一致。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 触觉为何"几乎没用上"

2025 量产里触觉<strong>"几乎就没有"</strong>；嘉宾说 2026 年才看到规模化生产的希望。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 下一个里程碑

不是更炫的空翻，而是<strong>"接住一片落叶"</strong>—— 极致的感控融合。

</div>

</div>

---
layout: two-cols
---

# 机器人的"四大系统"

把硬件粗略地拆开：

<div class="space-y-2 mt-4 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>骨架</strong> · 撑起整个架构
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>关节</strong> · 驱动骨架运动（执行器）
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>传感器</strong> · 感知环境与本体
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>电气与计算</strong> · 指挥身体的"中枢"
</div>

</div>

<div class="mt-4 text-xs opacity-60">
外面再裹一层装饰保护件（塑料 / TPU / 仿生皮肤）。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-systems.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 一次空翻 ≈ 一次车祸

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

机器人每一次空翻触地，承受的加速度<strong>可能都是比汽车和航天都要高</strong>。

<div class="mt-4 p-4 rounded italic border-l-4 border-red-500 bg-red-50">

"我们做过一些测试，它就跟汽车撞到墙那个加速度差不多。"

<div class="text-xs opacity-60 mt-2 not-italic">— 受访嘉宾，被陈茜追问"这么剧烈吗"之后</div>

</div>

<div class="mt-4 p-3 text-center text-4xl font-bold text-red-600 bg-red-50 rounded">
几十个 g
</div>

</div>

<div>

骨架要同时满足两个矛盾的要求：

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>足够轻</strong>：才翻得起来
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>强度足够大</strong>：否则<strong>"一个空翻它零件就飞出来了"</strong>
</div>

<div class="mt-4 text-sm opacity-70">
所以行业必须沿着"更轻 + 更强"的方向，一路推材料学。
</div>

</div>

</div>

---
layout: two-cols
---

# 骨架材料的演进

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-gray-100 border-l-4 border-gray-500">
<strong>钢材</strong> · WABOT-1（1973）<br/>
体重 <strong>约 160 公斤</strong>，"跳一下就把地板砸个坑"
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>铝合金</strong> · ASIMO / 早期 Atlas / Optimus 一代<br/>
密度只有钢的三分之一
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>镁合金 + 钛合金</strong> · 当前前沿<br/>
镁比铝还轻 1/3；钛用在膝、踝等冲击部位
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./material-evolution.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 骨架供应商：赚的是"辛苦费"

<div class="mt-4 p-5 italic border-l-4 border-orange-500 bg-orange-50 rounded text-lg">

"骨架这种东西，它这个最后的卖价除以它本身这个金属的含量，再除掉抛掉的废料以外，这个 ratio 其实是<strong>很低很低</strong>的了……如果量起来了之后，它的加工费就会趋近于一个很低很低的加工费。"

<div class="text-xs opacity-60 mt-3 not-italic">— 受访嘉宾，谈骨架供应商的利润结构</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>成本构成</strong>：金属本体 + 加工费 + 废料损耗。门槛低，规模化后加工费一路趋零。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>结论</strong>：扛冲击的硬骨头，最后赚的不是技术钱，是<strong>"辛苦费"</strong>。
</div>

</div>

---

# 关节：整身最贵、最难、故事最多的地方

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 美国银行测算
<div class="text-4xl font-bold text-orange-600 my-2">~ 51%</div>
执行器占机器人成本

</div>

<div class="mt-4 p-4 italic border-l-4 border-blue-500 bg-blue-50 rounded text-sm">

"motor 和 control，你的肌肉（执行器），是比你的骨骼、比你的眼睛（传感器）、脑子（芯片），包括你的心脏（电池），都是要贵的。"

</div>

</div>

<div>

<div class="text-sm opacity-70 mb-3">关节就是"执行器"，分两大类：</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>旋转执行器</strong> = 伺服电机 + <strong>减速器</strong><br/>
肩膀三自由度全靠组合
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>直线执行器</strong> = 伺服电机 + <strong>丝杠</strong><br/>
推拉，像肌肉
</div>

<div class="mt-3 text-xs opacity-60">
"几年前看 Atlas 后空翻还很惊讶，现在大家觉得习以为常了" —— 关节技术近一两年进步非常非常大。
</div>

</div>

</div>

---
layout: two-cols
---

# 减速器三巨头

电机天生"高转速、低扭矩"，关节需要的是"慢但有力"。减速器就是放大杠杆。

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>行星减速器</strong> · 小、便宜、扭矩小 → 手部
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>谐波减速器</strong> · 减速比大、精度高，但柔性结构<strong>抗冲击差</strong> → 肘 / 肩
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>RV 减速器</strong> · 摆线针轮，多齿啮合，刚性好、<strong>抗冲击强</strong> → 髋 / 膝 / 腰
</div>

</div>

<div class="mt-4 text-xs opacity-60">
谐波撑不住空翻的几十个 g，所以髋膝必须上 RV。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-reducers.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 减速器的"不可能三角"

<div class="mt-3 p-4 italic border-l-4 border-orange-500 bg-orange-50 rounded text-sm">

"性能又很好、成本又很低、长时间使用又没问题，同时摔倒之后它又能抗得了冲击……"

<div class="text-xs opacity-70 mt-2 not-italic">陈茜接话："就感觉是个不可能三角。"</div>

</div>

<div class="mt-4 text-sm">

更狠的是<strong>"一致性"</strong>问题：

<div class="mt-2 p-2 rounded bg-red-50 border-l-4 border-red-500 text-xs">
"造一个减速器不难，难的是造出一万个性能一致、耐用的减速器。"
</div>

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
1000 小时运行后会异响、性能下降 → 算法很难调
</div>

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

# 直线执行器：像肌肉一样的丝杠

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

直线执行器只做一种运动：<strong>推拉</strong>。

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
液压版老 Atlas：高爆发、抗冲击 —— 但<strong>系统复杂、容易漏油、精度不如电机</strong>
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
新 Atlas 已转向<strong>电机 + 丝杠</strong>路线
</div>

<div class="mt-3 text-xs opacity-70">
电机只能转，丝杠负责把旋转翻译成直线 —— 像在<strong>"拧螺丝"</strong>。
</div>

</div>

<div>

<div class="text-sm opacity-70 mb-3">三种丝杠：</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>滚珠丝杠</strong> · 减摩，成熟
</div>

<div class="mt-2 p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>行星滚柱丝杠</strong> · 寿命 / 承载 / 刚性更好
</div>

<div class="mt-2 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
<strong>T 型丝杠</strong> · 备选
</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">
直线执行器目前应用少：<strong>动态性能差、制造难、成本高</strong>。
</div>

</div>

</div>

---

# 电机的能效与散热：3% 和 5% 不是小数

<div class="mt-3 p-4 italic border-l-4 border-red-500 bg-red-50 rounded">

"比如说是 5%，它和 3% 就有巨大的差异。这些其实会限制我性能，我就不敢往上去抬性能了，<strong>哪怕我硬件能力再强我都不敢</strong>。"

<div class="text-xs opacity-60 mt-2 not-italic">— 受访嘉宾，谈电机的"被发热绑住手脚"</div>

</div>

<div class="grid grid-cols-3 gap-4 mt-6 text-center text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 瞬时电流
<div class="text-2xl font-bold text-orange-600 my-1">3 ~ 5×</div>
极限动作时的瞬时电流

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 瞬时发热
<div class="text-2xl font-bold text-red-600 my-1">9 ~ 25×</div>
发热量是额定值的几十倍

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 一次空翻
<div class="text-2xl font-bold text-blue-600 my-1">+ 40°C</div>
关节温度跳升 ~10°C → 50°C

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
最早期样品：<strong>"10 分钟之内，这些极限动作只能做一次"</strong> —— 转速转矩曲线一做就变。
</div>

---

# TN 曲线：仿真追不上现实，就摔倒

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="text-sm opacity-70 mb-2">机器人算法先在仿真里训练。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
仿真曲线 ≤ 现实曲线 → <strong>性能动作能做出来</strong>
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
低转速 ok，但<strong>转速一高性能就下来</strong> → 高速 + 高爆发的极限动作就做不了
</div>

<div class="mt-4 text-xs opacity-60">
有些最难的动作"要求你在极高的速度下又有极高的爆发力"。
</div>

</div>

<div>

<div class="p-4 italic border-l-4 border-blue-500 bg-blue-50 rounded text-sm">

"如果 TN 曲线不稳定，可能控制系统下达的还是同样的命令，但是电机输出的扭矩产生偏差，<strong>结果就是摔倒</strong>。"

<div class="text-xs opacity-60 mt-2 not-italic">— 嘉宾解释为什么硬件参数直接决定算法能力</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
脚踝的六维力矩传感器感受到地面起伏 → 动态调电流 → 控扭矩。这条链路上任何漂移都会让仿真里的"会走路"，在地上变"会摔倒"。
</div>

</div>

</div>

---

# 双编码器：减速器后面藏着另一个秘密

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

伺服系统主要靠三件套：

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
<strong>编码器</strong> · 测量电机当前角度 / 速度 / 位置
</div>

<div class="mt-2 p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
<strong>驱动器</strong> · 听小脑指令、调电压电流
</div>

<div class="mt-2 p-2 rounded bg-green-50 border-l-4 border-green-500 text-sm">
<strong>传感器</strong> · 力矩 / 温度 / 防过热
</div>

</div>

<div>

<div class="p-4 italic border-l-4 border-purple-500 bg-purple-50 rounded text-sm">

"这个编码器其实很关键。机器人里面因为有减速器，所以你必须用<strong>双编码器</strong>才能知道输入端和输出端两个的位置都在哪里，才能更精确的控制。"

<div class="text-xs opacity-60 mt-2 not-italic">— 嘉宾解释为什么不能照搬工业电机方案</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
减速器两端的位置可能因为齿轮间隙不一致 —— 必须两侧都测，才能知道关节真正在哪。
</div>

</div>

</div>

---

# 自研 vs 采购：头部公司都在自研

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 采购成品
<div class="text-sm mt-2 space-y-1">
<div>+ 降研发成本、开发更快</div>
<div>- 物料成本更高</div>
<div>- 标准件，<strong>"难以根据自己的需求定制"</strong></div>
<div>- 性能"有所不足"</div>
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 自研执行器
<div class="text-sm mt-2 space-y-1">
<div>+ 性能与算法<strong>更好匹配</strong></div>
<div>+ 性能更强</div>
<div>- 需要大量研发投入</div>
<div>+ 头部公司"甚至会进驻到供应商那边去参与设计"</div>
</div>

</div>

</div>

<div class="mt-5 p-3 italic border-l-4 border-purple-500 bg-purple-50 rounded text-sm">

"大部分（执行器）公司他不会给你专门去设计你想要的东西，他是标准件卖给你。"

<div class="text-xs opacity-60 mt-2 not-italic">嘉宾解释头部为什么"苦哈哈地自己研发"</div>

</div>

---
layout: two-cols
---

# IMU = 机器人的"前庭"

人类靠内耳前庭感知倾斜旋转 —— 机器人靠 IMU（惯性测量单元）。

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>加速度计</strong> · X / Y / Z 三轴
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>陀螺仪</strong> · 俯仰 / 偏航 / 滚转
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>磁力计</strong> · 电子罗盘，校准用
</div>

</div>

<div class="mt-4 text-xs opacity-60">
被人"围殴"踹一脚的时候：IMU 检测加速度变化 → 数据送给小脑 → 各个关节增减扭矩 → 把身体拉回来。手机、汽车里都成熟。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./imu-stack.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 激光雷达：汽车规格在机器人眼里是"冗余"

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 测距
汽车 <strong>150-200 米</strong>（高速）<br/>
机器人 <strong>10-20 米</strong>（室内够用）

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 点云密度
汽车识别车 / 人 / 路障，密度可低<br/>
机器人要在桌上拿螺丝刀、地上捡硬币 → <strong>点云要非常密</strong>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 体积
车顶 / 保险杠空间宽裕<br/>
机器人身上 → <strong>必须更小</strong>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 工况
汽车 -40°C ~ 85°C，机器人"现在是不需要的"<br/>
但<strong>抗震要求更高</strong>："汽车出车祸的加速度才能达到机器人日常空翻"

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-purple-500 bg-purple-50 rounded text-xs">

"汽车上有很多专门为可靠性做的设计，在机器人看来就是冗余的。"

</div>

---

# 摄像头：Elon 的"穿针引线"

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

前特斯拉 AI 硬件负责人对硅谷101 透露：

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
当时 Elon 提了个要求：<strong>机器人要能够做到"穿针引线"</strong>。
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
团队一算：得有<strong>超过 1500 万像素</strong>才能"看得见这个事情"。
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
但软件团队顶不住<strong>"重新训练模型的时间和工作量"</strong>—— 改像素就等于重训。
</div>

</div>

<div>

<div class="p-4 italic border-l-4 border-green-500 bg-green-50 rounded text-sm">

"考虑在摄像头上加自动对焦。后来好像又说这个事情也未必是一定需要的。<strong>所以这个事情反正就是一直在变</strong>。"

<div class="text-xs opacity-60 mt-2 not-italic">— 前特斯拉 AI 硬件负责人</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
目前 Optimus 方案：基于车上的<strong>500 万像素</strong>车规摄像头。早期"堆了很多摄像头"，像素帧率不一。
</div>

</div>

</div>

---

# 触觉的四条技术路径

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 压阻式
压力 → 电阻 → 电流。电子秤用的就是这个。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 电容式
弹性介质上下电极，受压距离变小 → 电容变化。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 压电式
材料受力直接产生电压。打火机里那块小东西。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 光学式
表面弹性形变 → 摄像头捕捉。<strong>目前最热门</strong>。

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
真正"三维触觉"还得能感知<strong>摩擦</strong>—— 比如拿起饮料瓶，手感到向下打滑就要加大握力。
</div>

---

# 触觉的"再等等"

<div class="mt-4 p-4 italic border-l-4 border-red-500 bg-red-50 rounded">

"整个 2025 年量产的产品里面，触觉用得非常非常少，<strong>几乎就没有</strong>。不只是我们，就整个行业都用得很少。"

<div class="text-xs opacity-60 mt-2 not-italic">— 受访嘉宾，谈触觉的当前状态</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 不稳定
长期抓东西稍微变形，<strong>输出信号就完全不一样</strong>；柔软材料又要耐磨 —— "本身也是很矛盾的事情"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 解耦难
三维触觉本质是材料 —— "任何的材料都很难在三个方向上很好地解耦开"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 数据稀缺
三维触觉数据怎么跟操作模型结合，<strong>"现在整个数据的量都非常非常少"</strong>。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 2026
"到了今年，到了 2026 年，<strong>看到了规模化生产的希望</strong>。"

</div>

</div>

---
layout: two-cols
---

# 大脑 + 小脑：双芯片架构

算法发展出 <strong>System 1 + System 2</strong> 双系统，芯片层就跟着分成两块。

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>大脑</strong>：思考"做什么"<br/>
高算力 / 大内存 / 几秒延迟可接受<br/>
英伟达 <strong>Orin</strong>，未来 <strong>Thor</strong>；高通 Dragonwing IQ10
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>小脑</strong>：操控四肢<br/>
<strong>1 kHz</strong>、低延迟、本能反应<br/>
MCU：STM32 / 恩智浦 i.MX RT / 瑞萨 RZ
</div>

</div>

<div class="mt-3 text-xs opacity-60">
跳舞、空翻是提前录好的动作，但脚下的碎步是小脑实时调平衡。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./brain-cerebellum.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 特斯拉的来回反复：一颗芯片还是两颗

<div class="mt-4 p-4 italic border-l-4 border-orange-500 bg-orange-50 rounded">

"Elon 自己觉得……'不需要这个安全冗余的问题了，一个芯片就够了'。<strong>做一个单芯片系统之后，他后来一想不对</strong>，机器人的世界模型对算力的需求那是远高于自动驾驶的…… 他自己又反应过来，又说<strong>不对不对，把这个事情改回两个</strong>。"

<div class="text-xs opacity-60 mt-2 not-italic">— 前特斯拉 AI 硬件负责人，复盘 Optimus 芯片路线的反复</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>统一方案的优势</strong>：胸腔体积小、走线简洁；大小脑通讯极快 —— "你去看飞镖轨迹是大脑，伸手抓是小脑，两者通讯越快越好"。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>行业看法</strong>：统一大小脑还在非常早期，<strong>"需要等机器人出货足够多，市场足够大之后"</strong>才会像智能车一样转向一体化自研芯片。
</div>

</div>

---
layout: two-cols
---

# 拼起来 ≠ 能用

如果你真的对着供应商清单"拼"出一台机器人，会发现哪哪都是问题。

<div class="mt-4 text-sm">

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>重心偏</strong> → 走路时关节额外出力 → 功耗增、续航减、步态歪
</div>

<div class="mt-2 p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>实验室 1 小时 OK，真实环境 100 小时崩</strong>：螺丝松、线磨损、润滑脂干、传感器漂移
</div>

<div class="mt-2 p-2 rounded bg-red-50 border-l-4 border-red-500">
<strong>每个 trade-off 都连带</strong>：减重 → 承载不够；提性能 → 散热不够
</div>

</div>

<div class="mt-3 text-xs opacity-60">
"我把它拆成每个供应商，难度都不高 —— 我觉得<strong>最后是系统整合才是比较难的东西</strong>。"
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./integration-gap.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 10 台机器人，同一指令，位置差几毫米

<div class="mt-4 p-4 italic border-l-4 border-purple-500 bg-purple-50 rounded">

"你放 10 个机器人在那，你给它发同样的参数，它的手伸出去位置是不一样的。但是如果做操作，<strong>你可能差个几毫米，你就从能抓住它变成了把它撞倒</strong>。"

<div class="text-xs opacity-60 mt-2 not-italic">— 嘉宾，谈量产一致性的真实痛感</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 出厂标定
关节背隙、传感器零点、电机参数 ——<strong>每台都不一样</strong>。算法要能稳跨批次。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 在线标定
一年后老化、传感器畸变 —— 还要靠机器人<strong>自己分析误差</strong>，在线再标定。

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-green-500 bg-green-50 rounded text-sm">

"这些东西都是<strong>看不见的功夫</strong>，但是如果你不做的话，你后面很多问题都解决不了。"

</div>

---
layout: two-cols
---

# Yes and No：80% 重合，但留下一条鸿沟

为什么手机厂荣耀的机器人能在半马"包揽前六、刷新人类记录"？

<div class="mt-3 text-sm space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>电气 + 计算</strong>：和汽车<strong>"重合度达到 90 几"</strong>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<strong>骨架 + 传感器</strong>：换模具就行，供应商高度共用
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>电驱关节</strong>：唯一"和车相关性没那么高"的部分
</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">
所以理论上"认识这些供应商就能搓出一台机器人"。<strong>但"能动"和"好用"之间有一条巨大的鸿沟</strong> —— 这是手机厂能下场、却不一定能跑出来的原因。
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain-overlap.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 转折：从"求着别人"到"滚雪球"

<div class="mt-4 p-4 italic border-l-4 border-blue-500 bg-blue-50 rounded">

"那个时候大家不会为机器人去做激光雷达，大家只会说'我这个为物流车做的，你拿来直接用吧'。<strong>那个时候是求着别人</strong>。大家对机器人这个都是将信将疑的。"

<div class="text-xs opacity-60 mt-2 not-italic">— 嘉宾，回忆一两年前的供应链态度</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 资源博弈
机器人量级"差手机、汽车一到两个数量级"。供应商优先供给商业化成熟行业，<strong>不愿为机器人改产线</strong>。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 雪球开始滚
随着赛道升温，供应商开始<strong>"专门为机器人开模、定制产品"</strong>—— "供应链会像滚雪球一样去成长"。

</div>

</div>

<div class="mt-4 text-xs opacity-60">
这两年动作进化（走路 → 转手绢 → 武术 → 半马破纪录）的真正驱动力 —— 不是某家公司的算法突破，而是<strong>整条供应链的成熟</strong>。
</div>

---

# 下一个里程碑：接住一片落叶

<div class="mt-4 p-4 italic border-l-4 border-green-500 bg-green-50 rounded text-lg">

"有一片树叶，我能走过去，然后手伸起来正好就捏到那片树叶……"

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 上海马戏城给陈茜的震撼
蒙眼几十米高空走钢丝；一根筷子让几十只碗同时旋转 —— <strong>"人类用了上百万年才进化出来的东西"</strong>。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 嘉宾王闯的答案
不是更 fancy 的动作，而是非常基础、具备<strong>"感控融合"本能</strong>的"接住一片落叶"。

</div>

</div>

<div class="mt-4 p-3 italic border-l-4 border-purple-500 bg-purple-50 rounded text-sm">

"仅仅是一阵风飘过，穿过一片树林，而'它'走过去，伸出手，<strong>'恰好'接住了一片落叶</strong> —— 这一天到来的时候，机器人距离我们的生活又近了一大步。"

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"它就跟汽车撞到墙那个加速度差不多……几十个 g。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于机器人空翻触地的冲击量级</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"造一个减速器不难，难的是造出一万个性能一致、耐用的减速器。"
<div class="text-xs opacity-60 mt-1 not-italic">— 减速器的"一致性"才是商业化护城河</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"比如说是 5%，它和 3% 就有巨大的差异……哪怕我硬件能力再强我都不敢。"
<div class="text-xs opacity-60 mt-1 not-italic">— 电机能效如何反向卡死性能上限</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"做一个单芯片系统之后，他后来一想不对……又说不对不对，把这个事情改回两个。"
<div class="text-xs opacity-60 mt-1 not-italic">— 前特斯拉 AI 硬件负责人，复盘 Elon 在 Optimus 芯片上的反复</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"我把它拆成每个供应商，难度都不高 —— 最后是系统整合才是比较难的东西。"
<div class="text-xs opacity-60 mt-1 not-italic">— 量产难点不在拼装，在系统</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"你可能差个几毫米，你就从能抓住它变成了把它撞倒。"
<div class="text-xs opacity-60 mt-1 not-italic">— 一致性问题的真实触感</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"那个时候是求着别人……大家对机器人这个都是将信将疑的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 一两年前机器人供应链的真实处境</div>
</div>

</div>

---
layout: end
---

# 接住一片落叶

<div class="mt-6 text-lg italic opacity-80">
"它走过去，伸出手，<strong>'恰好'接住了一片落叶</strong>……"
</div>

<div class="mt-6 text-sm opacity-60">
硅谷101 · 陈茜 × 王闯 · 机器人特辑
</div>
