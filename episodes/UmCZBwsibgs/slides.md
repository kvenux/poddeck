---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'From Consumer Toys for Pets to War Drone — Yaroslav Azhnyuk, The Fourth Law & Noah Smith, Noahpinion'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# From Pet Treats to Explosives

### Yaroslav Azhnyuk · The Fourth Law

<div class="mt-6 text-sm opacity-70">
Latent Space · with Noah Smith (Noahpinion) and Brandon
</div>

<div class="mt-12 text-xs opacity-50">
A founder who built one of the world's leading pet-camera companies — and now ships<br/>
on-drone autonomy, thermal cameras, and FPV strike drones to the Ukrainian frontline.
</div>

---

# Why this episode matters

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### A founder's pivot
A consumer-tech CEO ends up at the heart of a defense industry — a clean window into how Silicon Valley craft transfers to a war economy.

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Drones are the new artillery
80% of frontline casualties now come from FPV drones. Artillery was "the god of war." It just got dethroned.

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### The China overhang
Ukraine made 4M FPVs last year. China can make 4 billion. That number reshapes every strategic conversation.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### A taxonomy of autonomy
Five levels of drone autonomy × eight dimensions of the autonomous battlefield — a coherent map of what's coming.

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### The moral frame
"You first deal with the wolf, then consult Greenpeace." A working theory of building weapons under existential threat.

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### What the West gets wrong
$3M lasers vs. $500 drones. Tanks vs. swarms. Why exquisite hardware loses to mass.

</div>

</div>

---
layout: two-cols
---

# Feb 23, 2022 · The chapel

Yaroslav and his fiancée flew into Kyiv that evening — coming back from Lviv, where they had been scouting a wedding chapel.

The cab driver waved them off:

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-sm">
"You crazy — everyone's leaving Kyiv. Why do you come? Nothing's going to happen. Dude, chill."
</div>

<div class="mt-3 text-sm opacity-70">
8 hours later the bombs fell. They had landed on one of the last flights into Kyiv.
</div>

<div class="mt-4 text-xs opacity-60">
17-hour drive west. Diesel poured out of windshield-washer canisters because there were no proper jerry cans left at any gas station.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pet-to-war.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The pivot, in his own words

<div class="mt-10 p-6 text-2xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"At some point in my life, I went from making cameras that fling treats to pets to cameras that fling explosives to the occupiers."

</div>

<div class="mt-6 text-sm opacity-70">
Before 2022 — co-founder/CEO of Pet Cube in San Francisco (2014–2020), "one of the leading pet device companies in the world."
</div>

<div class="mt-3 text-sm opacity-70">
After — co-founder of The Fourth Law (on-drone autonomy) and Odd Systems (thermal cameras). The two companies are merging.
</div>

---

# Day one — what do you actually do?

A short list of things Yaroslav says he and his network started before they ever touched weapons:

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Advocacy
Reached out to US senators and congresspeople. Pushed Lend-Lease (passed May 2022).

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Brave 1
Helped start what is now Ukraine's defense-tech cluster — described in the episode as a kind of Ukrainian DIU.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### D3 fund
Helped start a defense-tech fund **co-started by Eric Schmidt**, former CEO of Google.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Then — weapons
By 2023 it was obvious the war would last and warfare itself was being redefined. He started The Fourth Law.

</div>

</div>

---

# Why software-defined warfare is new

The pitch, in his framing:

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"For the first time in history you have a platform that is software defined… you can push a software update and get all of your Roman legionnaire's a new helmet, you know — that has never been possible before."

</div>

<div class="mt-6 grid grid-cols-3 gap-3 text-sm">

<div class="p-3 rounded border border-gray-200">

### Old
Hardware fixed at factory. Capability increases ≈ buy new units.

</div>

<div class="p-3 rounded border border-gray-200">

### Now
A fleet of drones inherits new behaviors overnight via OTA.

</div>

<div class="p-3 rounded border border-gray-200">

### Why he started
"Leverage the global techno-capitalist machine" to defend Ukraine and the free world.

</div>

</div>

---

# The moral question

The hosts push: you build the tools, others use them. What about the future?

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic">

"…you first going to deal with a wolf that wants to eat you and then you're going to go consult Greenpeace. So, that's kind of situation that Ukraine is in."

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 italic text-sm">
"We're just passing the ammunition. We're not doing the actual job. The actual fighters and defenders and heroes are people in the armed forces."
</div>

<div class="mt-3 text-xs opacity-60">
作者概括: the moral argument here is not about weapons-in-the-abstract but about who chose the timeline — when the wolf is already in the room, the cost-benefit of refusing to act is itself a moral choice.
</div>

---
layout: two-cols
---

# Five levels of drone autonomy

A taxonomy Yaroslav coined that "got picked up by the industry."

<div class="text-sm space-y-2 mt-3">

**L1 — Terminal guidance.** Pilot flies it close, locks target, AI takes over the last 500 m.

**L2 — Bombing.** Drop on target without a human in the loop on that decision.

**L3 — Target detection + engagement decision.** Find and decide who to hit.

**L4 — Autonomous navigation.** Get there without a human steering, even without GPS.

**L5 — Autonomous takeoff and landing.** The full envelope.

</div>

<div class="mt-4 text-xs opacity-60">
Inspired by SAE's self-driving levels — though, he notes, Waymo is still arguably "level 4" because remote operators step in.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./autonomy-levels.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# What L1 alone does — pilot "Grom"'s numbers

One Ukrainian brigade using just **first-level autonomy** (terminal guidance).

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500 text-center">

### Mission success rate

<div class="text-4xl font-bold text-red-600 my-3">20% → 71%</div>

<div class="text-xs opacity-70">After enabling terminal guidance — same operator, same drone, AI takes the last 500 m.</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-center">

### Effective kill zone

<div class="text-4xl font-bold text-orange-600 my-3">3 km → 10 km</div>

<div class="text-xs opacity-70">The radius around the front line where an enemy entering is "almost guaranteed to be destroyed."</div>

</div>

</div>

<div class="mt-6 text-xs opacity-60">
This is just L1. L2–L5 add more capability on top. The end-state estimate Yaroslav gives is <strong>10× mission success rate</strong> and <strong>10× utility per drone</strong> once full autonomy is on board.
</div>

---
layout: two-cols
---

# Eight dimensions of the autonomous battlefield

Autonomy doesn't propagate along one axis. He counts eight.

<div class="text-xs space-y-1 mt-3">

**1.** Autonomy level (L1–L5)

**2.** Platform — quad, fixed-wing, ground, sea, undersea, missile

**3.** Domain — ground/air, ground/sea, sea/air, etc.

**4.** Higher-order: swarming, drone carriers, drone nests

**5.** Environment — day/night, summer/winter, terrain, target hiding

**6.** Command & control — coordinating tens of thousands of assets

**7.** Infrastructure — sim, data collection, security, deployment

**8.** Distribution — 100 units vs 100,000 units is two different ball games

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eight-dimensions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The iPhone of warfare

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### The FPV drone

<div class="mt-2 italic">"A good way to think about an FPV drone is like an iPhone of warfare. Very inexpensive, very mass-producible, very versatile."</div>

<div class="mt-3 text-xs opacity-70">
You don't carry a separate MP3 player and calculator — same logic for the drone vs. the artillery/missile/observer stack.
</div>

</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">

### Autonomy on top

<div class="mt-2 italic">"When you add autonomy to it, it sort of becomes like Uber or ride sharing."</div>

<div class="mt-3 text-sm">
"You pick your smartphone, you say <strong>we are here, the bad guys are here, go and get them</strong> — and the drone goes up, flies, localizes itself on the map, finds the area, sees the bad guys, bombs them, returns, sits down."
</div>

</div>

</div>

---

# Drones vs. artillery — three orders of magnitude

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-300">

### 155 mm shell
<div class="text-3xl font-bold text-red-600 my-2">~$4,000</div>
<div class="text-xs opacity-70">NATO standard caliber, market price per round.</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### FPV drone
<div class="text-3xl font-bold text-green-600 my-2">~$400</div>
<div class="text-xs opacity-70">Roughly 10× cheaper. Yaroslav: "an FPV drone is maybe three orders of magnitude more versatile."</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### + full autonomy
<div class="text-3xl font-bold text-blue-600 my-2">+4 OOM</div>
<div class="text-xs opacity-70">"100× as many people who can use it… 10× mission success rate… 10× utility per drone."</div>

</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">

"They used to say that artillery is the god of war because artillery used to cause like 80% of casualties… FPV drones are the god of war."

</div>

---

# 80% — the share of frontline casualties now caused by FPV drones

<div class="mt-8 p-6 text-xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded">

"Out of all the casualties on the front line between 70 and 80% are done by FPV drones."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded border border-gray-200">

### Before
**~80%** of casualties were artillery.
Artillery = "god of war."

</div>

<div class="p-3 rounded border border-gray-200">

### Now
**70–80%** are FPV drones.
The same throne, different king.

</div>

</div>

<div class="mt-4 text-xs opacity-60">
That doesn't mean artillery is gone. He's emphatic: "all of these systems are needed — maybe except cavalry, although Russians still use it." Modern warfare is a stack, not a swap.
</div>

---

# Tanks vs. housewives — the Rheinmetall meme

The CEO of Rheinmetall — a major European defense manufacturer — publicly mocked Ukraine's drone industry, saying there was no real innovation and it was "made by housewives."

The Ukrainian response, via Alexei Babenko (founder of Vyriy Drone):

<div class="mt-4 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"The drones we manufacture in one day will be more than enough to destroy all the tanks Rheinmetall manufactures in a year."

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-300">

### One drone
**~$500**

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-300">

### One tank
**~$5,000,000+**

</div>

</div>

<div class="mt-4 text-xs opacity-60 italic text-center">
"Don't mess with those housewives." — "Drone wives." — Yaroslav & Brandon, mid-laugh
</div>

---
layout: two-cols
---

# The optic-fiber surprise

Why fiber-optic drones (immune to jamming and the radio horizon) became the dominant FPV format — and then started getting **8× more expensive in months.**

The reason isn't drone demand. It's the AI buildout:

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"Because of all the data centers for AI. It's literally the same optic fiber that's being used there. When Ukrainians and Russians come to Chinese factories to buy the optic fiber, they're like: we're out. We sold it out to the Americans."

</div>

::right::

<div class="pl-4">

<div class="mt-4 grid grid-cols-1 gap-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center">

### Optic fiber, early 2025
<div class="text-3xl font-bold text-blue-600 my-2">$4 / km</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-center">

### A few months later
<div class="text-3xl font-bold text-red-600 my-2">$32 / km</div>

</div>

<div class="p-3 text-xs opacity-70 text-center">
Brandon's quip on hearing the number:<br/>
<em>"Claude Code is stopping the Russian drone effort."</em>
</div>

</div>

</div>

---

# 5–10 years from now — using weapons without AI will be immoral

A surprising claim from Yaroslav, in response to Brandon's worry about distribution-shift failures:

<div class="mt-6 p-5 bg-red-50 border-l-4 border-red-500 italic">

"I think 5 to 10 years from now it will be immoral to use weapons without AI — because weapons without AI will be more likely to cause collateral damage or unwanted damage. Same way it will be immoral to drive your own car manually on a public road, because it's more likely to cause unwanted damage."

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Brandon's worry
Computer-vision systems fail out-of-distribution. Fog rolls in, drone hits the wrong thing.

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Yaroslav's reframe
A mortar today lands ±0.5 km of where it was aimed. AI drones are vastly more precise than the baseline they replace.

</div>

</div>

---
layout: two-cols
---

# The China overhang

The conversation pivots: forget Russia for a moment. What if the adversary is China?

The asymmetry is staggering. Ukraine — currently the world's most prolific drone power — produced **4 million** FPVs last year.

China's manufacturing base could turn out **4 billion** of the same drones.

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-xs">

"China can make them not drones with propellers but fixed-wing drones which go not 40 km far but maybe two or 300 km in land, slightly more expensive."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./china-scale.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# The container-ship scenario

Yaroslav walks through what a Chinese long-range drone campaign could look like — and why it would be hard to interdict:

- DJI-grade autonomy, no GPS required
- Fixed-wing range 200–300 km
- Packed onto shipping containers / freight ships / autonomous underwater vehicles
- Show up at "**any coastline in the world — be it Taiwan or be it California**"

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 italic text-xs">

"There are not enough hunter submarines. There are not enough anti-ship missiles… you wouldn't have enough assets to do preemptive strikes because there can be tens of thousands of places where these things are being manufactured."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./container-scenario.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Four layers the West lags on

When pushed on what the West specifically lacks, Yaroslav names four nested layers — top is hardest to fix, bottom is most fundamental.

<div class="text-sm space-y-2 mt-3">

**Layer 4** Rare earth materials — not because they only exist in China, but because of "the refining capabilities."

**Layer 3** Components — motors, fiber optics, thermal sensors, the magnets you need to make a good motor.

**Layer 2** Mass manufacturing capacity — "tens of thousands of factories" is a different problem than "a few good companies."

**Layer 1** Autonomy technology — the software stack he says only a handful of Western companies can do at all on small drones.

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-layers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# One year of drone-time

A jolting comparison Yaroslav draws between his frontline and the European defense establishment:

- The Ukraine ↔ Russia drone fight moved roughly **a full year** in twelve months — from 2025-grade tech to 2026-grade tech.
- Europe in the same year moved from **winter of 2022 to spring of 2022.**
- The US, by his estimate, made even less than a year of progress.

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 italic text-xs">

"The technological gap is getting wider and wider and wider."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./drone-year.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Poland is buying the wrong things

Yaroslav looks at a country geographically next to Russia and shakes his head:

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 italic">

"They bought like 100 tanks and four submarines. It's like, dudes, you don't have like a thousand people who know how to operate an FPV. What the hell you're doing?"

</div>

<div class="mt-4 text-sm">
His worry: Poland is "so proud of their winged hussars and their cavalry" while preparing for the wrong war. The host: <em>"That happened in 1939."</em>
</div>

<div class="mt-2 text-sm">
Yaroslav: <em>"I don't want that to happen again."</em>
</div>

---
layout: two-cols
---

# $3M laser vs. 6,000 drones

A scene from last year's LandEuro conference. He stops by the Raytheon RTX booth and asks about a new 10 kW laser air-defense product.

<div class="mt-3 text-sm space-y-1">

- "Can it take down an FPV drone?" — Yes, of course.
- "How long?" — Maybe 3 seconds.
- "What if the FPV tries to evade?" — We'll retarget. Another 3 seconds.
- "Can it handle a dozen?" — Yes.
- "How much?" — Something like <strong>$3 million</strong>.

</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 italic text-xs">

"$3 million. So that is 6,000 FPV drones. I doubt this thing will be able to handle 6,000 FPV drones — or even 600 FPV drones — coming at it at the same time."

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cost-to-effect.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Counter-drone — what actually works

Not lasers. Not (mostly) shotguns held by a Rambo. The mix Yaroslav describes is much messier and lower-tech.

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Fishnets and porcupines
"50 kilometers in from the front line all the roads are covered by fishnets." Tanks bristle with poles — to detonate the drone half a meter early.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Anti-FPV interceptor drones
A "harpoon-like" hand launcher; AI on board steers a small drone into the attacking drone.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Electronic warfare
Jamming the controller or video link — works if you know the frequency, and if the drone isn't fiber-optic or autonomous.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### "Active armor" of drones
Speculative: an armored vehicle wrapped in protector drones that take off when something approaches.

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 italic text-xs">

"Things in practice in war are way way way more complex than they seem."

</div>

---

# What about the rifleman?

Brandon wants to know: is the human soldier obsolete?

<div class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 italic text-sm">

"If there is a guy in a dugout with some bullets and automatic weapon, the other guy cannot come and take that dugout."

</div>

<div class="mt-2 text-xs opacity-60">Yaroslav, on why humans still hold ground — paraphrased from his answer about Russian-side infantry establishing control.</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded border border-gray-200">

### Will last "for a while"
Drones do 80% of casualties. They do not yet hold ground.

</div>

<div class="p-3 rounded border border-gray-200">

### "Crabization of warfare"
Quad robots, dog robots, humanoids — joked through. He doesn't disqualify humanoids on the battlefield "10 years into the future."

</div>

</div>

<div class="mt-4 text-xs opacity-60">
He references a Ukrainian punk-rock song titled "2030" — the war still going, AI and cyborgs everywhere, the simple infantry still cold in the dugouts doing their job.
</div>

---

# The Budapest Memorandum lesson

Why he expects more countries to pursue nuclear weapons:

<div class="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 italic text-sm">

"Ukraine gave all of its nuclear weapons — the world's third-largest nuclear arsenal — because the US and Russia and others were very persuasive. They're like: yeah, just give it away, we guarantee you security. And they're like: oh, it's not guarantees, it's assurances. We use the word assurances. So therefore we didn't promise you much."

</div>

<div class="mt-4 text-sm">
"Russia attacks and like no reaction. So the whole world in 2022 looks at it and it's like: oh okay, so maybe we should get nukes."
</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 italic text-xs">

"My prediction next couple decades, a lot more countries will be working their own nukes."

</div>

---

# Kyiv as Defense Valley

Asked for policy advice for America's defense establishment, Yaroslav reaches for **Arthur C. Clarke** (as he attributes it):

<div class="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 italic">

"The future is already here, just not evenly distributed yet."

</div>

<div class="mt-4 text-sm">
"Just the same way as Silicon Valley is… sort of future location for all things tech. Kyiv and Ukraine is sort of the defense valley. It's the point where the future of defense has already arrived."
</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Specific exchange to learn from
- Hundreds of companies in narrow specialties
- Battlefield commanders, soldier through corps level
- The government's playing-field setup for defense startups

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### What's already moving
Procurement reform, "Drone Dominance" program. He says it's the right direction, just needs to scale.

</div>

</div>

---

# Si vis pacem, para bellum

The last question of the episode — what should the audience walk away with?

<div class="mt-12 p-8 text-3xl italic border-l-4 border-red-500 bg-red-50 bg-opacity-30 rounded text-center">

"You want peace, be prepared to war.<br/>
Got to invest in defense and security."

</div>

<div class="mt-6 text-sm opacity-70 text-center">
The Latin original — <em>si vis pacem, para bellum</em> — would have been the obvious phrasing. He says it in English, plainer.
</div>

<div class="mt-2 text-sm opacity-70 text-center">
And the wedding? They got married. The social event is postponed until the war is over.
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">The lines from this conversation worth keeping:</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"At some point in my life, I went from making cameras that fling treats to pets to cameras that fling explosives to the occupiers."
<div class="text-xs opacity-60 mt-1 not-italic">— the personal pivot, told twice in the episode (intro & main)</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"…you first going to deal with a wolf that wants to eat you and then you're going to go consult Greenpeace."
<div class="text-xs opacity-60 mt-1 not-italic">— on whether to first solve ethics or first survive</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"FPV drones are the god of war."
<div class="text-xs opacity-60 mt-1 not-italic">— echoing the old artillery aphorism; ~80% of casualties now come from FPVs</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"The drones we manufacture in one day will be more than enough to destroy all the tanks Rheinmetall manufactures in a year."
<div class="text-xs opacity-60 mt-1 not-italic">— Alexei Babenko (Vyriy Drone), quoted by Yaroslav</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"5 to 10 years from now it will be immoral to use weapons without AI."
<div class="text-xs opacity-60 mt-1 not-italic">— the precision argument, by analogy with self-driving cars</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"$3 million. So that is 6,000 FPV drones."
<div class="text-xs opacity-60 mt-1 not-italic">— the cost-to-effect collapse of exquisite air defense, at the Raytheon booth</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Kyiv and Ukraine is sort of the defense valley."
<div class="text-xs opacity-60 mt-1 not-italic">— invoking Arthur C. Clarke; the future of defense has already arrived</div>
</div>

</div>

---
layout: end
---

# "You want peace, be prepared to war."

<div class="mt-8 text-sm opacity-60">
Yaroslav Azhnyuk · Latent Space · with Noah Smith & Brandon
</div>
