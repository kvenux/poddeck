---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'FFmpeg: The Incredible Technology Behind Video on the Internet | Lex Fridman Podcast #496'
info: |
  Jean-Baptiste Kempf (VLC, VideoLAN) and Kieran Kunhya (FFmpeg, Open Broadcast Systems)
  talk to Lex Fridman about the invisible infrastructure of internet video — codecs, containers,
  reverse engineering, handwritten assembly, open-source burnout, patent minefields, and the
  ultra-low-latency future.
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# FFmpeg & VLC

### The invisible backbone of video on the internet

<div class="mt-8 text-lg opacity-80">
Jean-Baptiste Kempf · Kieran Kunhya<br/>
<span class="opacity-60">with Lex Fridman · Episode #496</span>
</div>

<div class="mt-12 text-sm opacity-60">
~4h on YouTube · VLC, FFmpeg, codecs, assembly, open source<br/>
~6.5B VLC downloads · ~3B devices decoding video right now
</div>

---

# Why this episode matters

<div class="text-sm opacity-70 mb-4">A four-hour conversation about software that almost no one notices but everyone depends on.</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">The plumbing</div>
<div class="text-xs opacity-70 mt-1">YouTube, Netflix, Chrome, Discord — &gt;90% of video pipelines run through FFmpeg</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">The volunteers</div>
<div class="text-xs opacity-70 mt-1">5 people maintain VLC. 10–15 maintain FFmpeg. Used by billions.</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">The lost art</div>
<div class="text-xs opacity-70 mt-1">240,000 hand-written assembly lines in dav1d — 62× faster than C</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm">The drama</div>
<div class="text-xs opacity-70 mt-1">Google AI security reports. Microsoft Teams SLA demands. CIA Vault 7.</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-sm">The ethics</div>
<div class="text-xs opacity-70 mt-1">JB turned down "obscene" offers to keep VLC ad-free. Refused two backdoor requests.</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-sm">The future</div>
<div class="text-xs opacity-70 mt-1">AV2 codec, 4 ms glass-to-glass robotics, stereo smell, "VLC for Neuralink"</div>
</div>

</div>

---

# The cone

<div class="grid grid-cols-2 gap-8 mt-4">

<div>

The VLC traffic-cone icon is one of the most recognized logos in software — and JB describes the strange leverage it gives a tiny project.

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"I go to middle of nowhere in India or in China, people know the cone."
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"25% of the website traffic that comes to our main website is cone player."
</div>

<div class="mt-3 text-sm opacity-70">
People literally Google <strong>"cone player"</strong> instead of "VLC".
</div>

</div>

<div>

<div class="p-6 rounded bg-orange-50 border-l-4 border-orange-500">

### Lesson

<div class="text-sm mt-2">
An <strong>absurd</strong> mascot beats a tasteful one. A play button on a TV is unoriginal. A construction cone is weird, bright, and unforgettable.
</div>

<div class="text-sm mt-3 opacity-70">
When the team once joked about replacing it on April 1st, they got <strong>~10,000 emails</strong> begging them not to.
</div>

</div>

</div>

</div>

---

# The weirdest things VLC opens

<div class="text-sm opacity-70 mb-4">A VideoLAN conference contest: build the worst file possible. VLC plays it anyway.</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">VHS via capture card</div>
<div class="text-xs opacity-70 mt-1">People still use VLC to digitize VHS tapes through analog capture cards.</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">MKV that changes everything per frame</div>
<div class="text-xs opacity-70 mt-1">"Each frame was changing resolution, aspect ratio, rotation." It worked.</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm">Subtitles as the video</div>
<div class="text-xs opacity-70 mt-1">Every frame is black; the entire animation is rendered as SSA subtitle overlays.</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">Game codecs from one disc</div>
<div class="text-xs opacity-70 mt-1">Bit-exact reimplementation of a 10-second Star Wars game intro that exists on one disc.</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-sm">DVD-Audio</div>
<div class="text-xs opacity-70 mt-1">Custom encryption schemes. No one else still supports it. VideoLAN spent a summer.</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-sm">A pancake in the DVD drive</div>
<div class="text-xs opacity-70 mt-1">They actually tried. They have video. It did not work.</div>
</div>

</div>

---
layout: two-cols
---

# Press play → pixels

What actually happens when you double-click a file:

<div class="mt-4 text-sm space-y-2">

<div>The OS hands you a <strong>byte stream</strong> from a path or URL.</div>
<div>A <strong>demuxer</strong> splits it into audio, video, and subtitle tracks.</div>
<div>The player <strong>probes</strong> each codec to decide GPU vs CPU.</div>
<div>The decoder unpacks entropy coding, runs the inverse transform, applies intra and motion prediction.</div>
<div>Raw YUV pixels go to the GPU; raw PCM samples go to the audio card.</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs italic">
"Every sentence is someone's lifetime's work. There are books about every sentence."<br/>
<span class="not-italic opacity-60">— Lex on the pipeline</span>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./decode-pipeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Containers vs codecs

<div class="text-sm opacity-70 mb-4">Two different layers, perpetually confused — even on purpose by the industry.</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Container (a.k.a. mux)
A wrapper holding multiple tracks of compressed data.

<div class="text-xs mt-2 space-y-1">
<div><strong>MP4</strong> · MOV's open descendant</div>
<div><strong>MKV / Matroska</strong> · open, future-proof</div>
<div><strong>AVI</strong> · the old Microsoft format</div>
<div><strong>TS</strong> · MPEG transport stream for satellite</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Codec (a.k.a. coder/decoder)
The math that compresses/decompresses one track.

<div class="text-xs mt-2 space-y-1">
<div><strong>H.264</strong> · also called MPEG-4 Part 10 / AVC</div>
<div><strong>HEVC</strong> · H.265</div>
<div><strong>AV1, AV2</strong> · royalty-free family</div>
<div><strong>AAC</strong> · de facto MP4 audio</div>
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
JB on the confusion: "It's completely the fault of the industry to make things difficult to understand." H.264 is MPEG-4 Part 10 is AVC — three names, one codec.
</div>

---

# Don't trust the file extension

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

VLC inherits a paranoid streak from its 1990s ancestor: a UDP multicast streaming client that had to play <strong>broken inputs from a noisy network</strong>.

So today VLC and FFmpeg <strong>ignore</strong> what the filename claims.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"Everything in VLC is prepared to work with broken files. And it's a philosophical idea from the beginning."
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
"You don't trust your inputs, and this is very important into the security."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Why VLC got famous in the 2000s

AVI files distributed online were often <strong>downloaded incomplete</strong> — the metadata sat at the end of the file.

Every other player refused to play them. VLC said: "this is broken, but I'm still going to try."

<div class="text-xs mt-3 opacity-70">
The <code>.mp4</code> extension is just a <strong>hint</strong> that bumps a module's priority. Real probing happens by looking inside.
</div>

</div>

</div>

</div>

---

# The math: 100× to 1000× compression

<div class="text-sm opacity-70 mb-4">Compression isn't ZIP. It's controlled degradation tuned to human perception.</div>

<div class="grid grid-cols-3 gap-4 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Audio
<div class="text-4xl font-bold text-blue-600 my-2">~10×</div>
<div class="text-xs opacity-70">raw → MP3</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Video typical
<div class="text-4xl font-bold text-orange-600 my-2">100–200×</div>
<div class="text-xs opacity-70">"You need to remove all the details that you don't care about"</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Video target
<div class="text-4xl font-bold text-red-600 my-2">1000×</div>
<div class="text-xs opacity-70">"The target is 1,000x"</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

JB's framing: <strong>"Compression is not like a ZIP. A ZIP, you have data in, you get data out. Here we are degrading the signal."</strong>

</div>

<div class="mt-3 text-xs opacity-60">
All of it is built around one constraint: the output is for human eyes and ears.
</div>

---

# Why YUV, not RGB

<div class="grid grid-cols-2 gap-6">

<div>

Every video codec works in the <strong>YUV color space</strong>: one luminance channel plus two chroma channels. It's not how cameras capture or screens display.

It's the model that <strong>matches the human eye</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"Inside your eyes you have the cones and the rods… some look on brightness and more on the others on colors."
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"We scale down the resolution of the color compared to the brightness. Most people don't see it, and it divides the size by two."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The trick

The eye has <strong>far fewer color receptors</strong> than brightness receptors.

So codecs throw away <strong>half the color resolution</strong>, and your brain doesn't notice. Free 2× compression before the math even starts.

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Then the heavy math

DCT (cousin of Fourier), block partitioning, quantization, entropy coding — all stacked on top to drive 100–1000× ratios.

</div>

</div>

</div>

---

# Every generation: ~30% better, 10–100× harder

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### The headline gain

Each new codec generation gives roughly <strong>30% less bitrate</strong> at the same visual quality.

<div class="text-xs mt-2 opacity-70">JB: "Each generation of the codec is like thirty percent less for the same quality."</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### The hidden cost

Kieran's correction: "<strong>An order of magnitude, perhaps even two orders of magnitude more compression power.</strong>"

<div class="text-xs mt-2 opacity-70">CPU power needed to <em>achieve</em> that 30% gain explodes generation over generation.</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

### Modern codecs aren't codecs — they're toolboxes

<div class="mt-2">
AV1, AV2, VVC are <strong>collections of tools</strong>. A Zoom call sharing a slide deck and then a video clip needs different coding strategies. The codec switches its toolset to match the content.
</div>

</div>

---

# FFmpeg is a language

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The command-line tool isn't a wrapper — it's a small <strong>DSL for multimedia processing</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"It's a language. It's an actual language." <span class="opacity-60">— JB</span>
</div>

<div class="mt-3 text-sm">

People build pipelines with <strong>thousands of characters</strong> on a single line. There's now a cottage industry of <strong>LLMs that generate FFmpeg commands</strong>.

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

JB: <em>"There is a ton of people who are using AI to generate command lines for FFmpeg because you have no idea what it is."</em>

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### What ships under the name

<div class="text-xs space-y-1 mt-2">
<div><code>ffmpeg</code> · the command-line transcoder</div>
<div><code>ffprobe</code> · inspect any file</div>
<div><code>libavcodec</code> · the codec library</div>
<div><code>libavformat</code> · containers, muxers, demuxers</div>
<div><code>libavfilter</code> · the filter graph</div>
<div><code>libswscale</code> · scaling and color conversion</div>
</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

The same library underneath Chrome, OBS, smart TVs, professional broadcast boxes, the Mars 2020 rover, and <code>ffmpeg -i input.mp4</code> on your laptop.

</div>

</div>

</div>

---

# One stack, level playing field

<div class="mt-4 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">

"It's incredible that your home videos, your, your grandmother's home videos and trillion-dollar corporations effectively are on a level playing field using the same technology stack."

<div class="text-sm opacity-60 mt-2 not-italic">— Kieran on FFmpeg's reach</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Inside the trillion-dollar shops

Some use the C API. Others maintain <strong>three-thousand-line FFmpeg command lines</strong> in production.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The democratization story

In the 1990s, professional video compression required <strong>"equipment that cost hundreds of thousands of dollars… it was the size of a car."</strong>

Now anyone with a laptop has the same toolkit.

</div>

</div>

---

# Open source = the recipe and the oven

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

JB's analogy: a closed-source product is a finished chocolate cake.

Open source is the cake <strong>plus</strong> the recipe <strong>plus</strong> instructions for building the oven <strong>plus</strong> permission to modify it and sell it on.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"Software is just a very long recipe of small instructions. Computers are not very clever. They go very, very fast."
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"We work for the greater good. We work for everyone, and that is what open source is."
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Two big license families

<div class="text-sm mt-2 space-y-2">
<div><strong>Permissive</strong> — MIT, BSD, Apache. Do whatever, no obligation back.</div>
<div><strong>Copyleft</strong> — GPL, LGPL, AGPL. Modifications must come back.</div>
</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

VLC core and FFmpeg are <strong>LGPL</strong>. You can ship them inside a closed app — but any changes to the library itself must be published.

</div>

</div>

</div>

---

# Re-licensing means hunting down every contributor

<div class="text-sm opacity-70 mb-4">Open source projects have <em>joint copyright</em>. Changing licenses means asking everyone.</div>

<div class="grid grid-cols-2 gap-6">

<div>

To move VLC's core from GPL to LGPL, JB had to contact <strong>more than 350 contributors</strong>, going back over a decade.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"Most of the times they don't even care. They wanted to help VLC."
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
But sometimes contact info was a dead email. JB traveled in person to track people down.
</div>

</div>

<div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### The hardest signature

One contributor had died. JB went to the man's father — <strong>a factory worker</strong> — to explain why he needed a signature on his son's code.

<div class="text-xs mt-3 opacity-70">
"I had to explain all those types of open source meanings, and no, I was not a company trying to rip out the two lines or five lines that that guy did."
</div>

<div class="text-xs mt-2 opacity-70">
"I was almost in tears, right? It's very difficult, right? We are talking about lives of people."
</div>

</div>

</div>

</div>

---

# The Linus bar

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

JB defends the legendarily harsh tone of kernel-style code review — and connects it directly to the maintenance load.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"The core community of VLC is five people. The core community of FFmpeg is ten to fifteen."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"We are the ones who are going to maintain your code. It needs to be maintainable. It needs to be excellent."
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 1% retention math

Roughly <strong>1,000 contributors over a project's life</strong>, but <strong>only ~10 stay</strong>.

"You will have change of job, change of wives, you have children, you have accidents in life. You're not going to come back. It's most likely."

So the bar can't bend — the survivors will inherit your code.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

Kieran: in real life, the community is generous. Online, the curt tone is <strong>a tired engineer after a day job</strong>, often a non-native English speaker. "Not something to take personally."

</div>

</div>

</div>

---

# We don't care who you are

<div class="mt-8 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">

"The important thing is, is your code good? We care about excellent code. We don't care who you are. Like maybe you're a dog. I don't care, right? I don't care where you come from. I need to look at your code."

<div class="text-sm opacity-60 mt-3 not-italic">— Jean-Baptiste Kempf</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The flip side

"Oh, yeah, but I'm an engineer at this very large company in Italy, in Germany, in the US." <strong>"We don't care."</strong>

A title doesn't waive the bar.

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Why it matters

This is the social contract that <strong>makes a Syrian war zone contributor and a Stanford PhD equivalent on patch day</strong>.

</div>

</div>

---

# Refusing tens of millions to keep VLC clean

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The Reddit meme is real — JB has repeatedly turned down "dozens of millions of dollars" to put ads, toolbars, or spyware into VLC.

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
"The last offer I had was obscene."
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"If we had to compromise our software, we would shut it down. This is clear."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### It wasn't about money

"I'm not against money, right? I created several startups."

The deal-breaker was <strong>the shadiness</strong> — bundling spyware, hijacking search engines, replacing ads.

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### The counterfactual

"If Netflix arrived at some point and said, 'Well, we want to put Netflix inside VLC,' probably the story would have been different."

But it was always <strong>"shady ads companies"</strong> who showed up.

</div>

</div>

</div>

---
layout: two-cols
---

# VLC's accidental origin

A 1990s LAN built for Doom became the player on six billion devices.

<div class="mt-4 text-sm space-y-2">

<div><strong>1994–95</strong> · Students at <strong>École Centrale Paris</strong> run their own campus. They want better network for Doom and Duke Nukem.</div>

<div><strong>Network 2000</strong> · One satellite dish, one decoder, MPEG-2 streamed over a 155 Mbps ATM ring. Demo crashes after 45 seconds; the demo was 40 seconds.</div>

<div><strong>VideoLAN</strong> · Two students keep going. The "VLC" was the <strong>VideoLAN Client</strong>.</div>

<div><strong>2001</strong> · Open-sourced after a three-year fight with the school.</div>

<div><strong>2003</strong> · JB joins, eventually moves it into an independent nonprofit.</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./centrale-origin.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The Google AI security debacle

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Google began running AI-generated security scans against FFmpeg. The reports came with a <strong>90-day industry deadline</strong> and were announced to the press <strong>before fixes could land</strong>.

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
"It's announcing how good their AI is… without really understanding the nature of volunteer-driven development."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
The "critical vulnerability"? A bug in <strong>"an obscure 1990s game codec"</strong>.
</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### Kieran's framing

"The padlock on your home is there to protect against the capabilities of what it's there to protect. It's not there to protect nuclear secrets. It's not there to protect Fort Knox."

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Crying wolf

"At some point, the security industry needs to realize you can't keep crying wolf like this."

Everything is marked <strong>high, high, high</strong> — until people start ignoring the alerts.

</div>

</div>

</div>

---

# The Microsoft Teams "high priority"

<div class="text-sm opacity-70 mb-4">An FFmpeg tweet, quoted verbatim by Lex on the show:</div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"The XZ fiasco has shown how a dependence on unpaid volunteers can cause major problems. Trillion-dollar corporations expect free and urgent support from volunteers. Microsoft Teams posted on a bug tracker full of volunteers that their issue is high priority. After politely requesting a support contract from Microsoft for long-term maintenance, they offered a one-time payment of a few thousand dollars instead."
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

Kieran: <em>"They think an open source project is a traditional vendor that they have an SLA. They think a public bug tracker is actually… a third-party vendor's Jira."</em>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

JB: VLC isn't even in Microsoft's ISV program. "I am not part of Microsoft ISV programs. I don't have a point of contact at Microsoft."

</div>

</div>

---

# The rap battle theory of open source

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The FFmpeg account on X has become a public-pressure tool. Kieran calls it what it is.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"It's a rap battle at the end of the day."
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"You say stuff. I say stuff about your mama, but it doesn't mean… I have an actual personal issue with her."
</div>

<div class="mt-3 text-sm opacity-70">
The shitposting <strong>worked</strong>. Google now sends patches. They built reward tools for fixing issues.
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The Android Play Store fix

For over a year, a Play Store bug blocked VLC updates for 100M Android users.

<div class="text-xs mt-3 opacity-70">
JB tweeted that VideoLAN would stop distributing on Android. Within days, someone from Google reached out.
</div>

<div class="text-xs mt-2 opacity-70">
"The only very strong power we have to solve those issues is blaming on social networks because it snowballs."
</div>

</div>

</div>

</div>

---

# Why anyone contributes at all

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Because video is cool

JB: <em>"Work on something you love."</em>

Many contributors arrive through <strong>anime fansubbing</strong> — a culture that needed tools the commercial world wouldn't build.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Because it's the best school

"If you're good in C, in FFmpeg, if you know how to write assembly, I assure you you're going to be one of the best programmers ever, even if you're working on writing TypeScript."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Because grandma understands

"If you go to see your grandma and say, 'I do this so that you can play video on your laptop,' they understand."

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Because the world is a museum of passion projects

Kieran's favorite line, attributed to John Collison.

Open source amplifies the network effect — passion plus reach.

</div>

</div>

---

# 16 milliseconds, no excuses

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

What makes multimedia engineering different from most software:

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"You have 16 milliseconds to display a frame. It's not like a game engine where you can basically slow down and wait a frame."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
Miss a frame and the codec's dependency chain destroys downstream frames too.
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### What "good engineer" means here

You can't just write functionally correct code. You have to understand:

<div class="text-xs mt-2 space-y-1">
<div>· CPU pipelining</div>
<div>· SIMD instruction sets</div>
<div>· ALU / FPU behavior per generation</div>
<div>· I/O timing and caches</div>
<div>· The memory hierarchy: L1, L2, L3, RAM, SSD, disk</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

JB: "This is what I think that is missing to a lot of engineers and software engineers today, is understanding what we call <strong>computer architecture</strong>."

</div>

</div>

</div>

---
layout: two-cols
---

# A binary star system

VLC and FFmpeg are not competitors. They are not parent and child. They <strong>orbit each other</strong>.

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>FFmpeg gives VLC</strong> the codec engine: hundreds of formats, decades of edge cases.
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>VLC gives FFmpeg</strong> reach: billions of users surface weird files that no test suite would ever generate.
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>VideoLAN ships</strong> x264, dav1d, checkasm, libdvdcss, libbluray, libspatialaudio — many feed back into the FFmpeg pipeline.
</div>

</div>

<div class="mt-4 text-xs italic opacity-70">
"VLC is to FFmpeg as Android is to Linux." — Kieran
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./binary-star.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The eras of FFmpeg

<div class="text-sm opacity-70 mb-4">Kieran's "Eras Tour" of who carried the torch when.</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 1990s · Fabrice Bellard
Creates the concept. The seed.

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2000s · Michael Niedermayer
Native decoders for every weird MPEG-4 Part 2 variant. Kills the codec-pack era of "DLL from this place, DLL from that place."

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### Late 2000s / 2010s · Reverse-engineering golden age
Benjamin Larsson, Kostya Shishkov, Paul Mahol on Windows Media, RealMedia, GoToMeeting.

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### x264 era · Loren Merritt, Henrik Gramner, Måns, Jason, Anton
The assembly culture that later powers dav1d.

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
Kieran on Michael's work: <em>"This task in the 2000s that Michael did was Sisyphean."</em> A Chinese CCTV system using one weird MPEG-4 ASP variant — fix it without breaking anyone else — <strong>times a million</strong>.
</div>

---

# Reverse engineering as archaeology

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

How do you decode a closed-source codec in 2010 so a kid on Android in 2030 can still play the file?

You open the binary in a disassembler, find the decoding loop, dump raw YUV from the original player, and step instruction by instruction — for <strong>tens of megabytes of code</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Lex's metaphor: "You're like archaeologists with a little brush trying to reconstruct the entire human civilization."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Why it's a black box

For a long stretch, nothing visible appears. Entropy decoding, intra prediction, motion prediction, IDCT, deblocking — all happen before a single pixel is correct.

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

Kieran: <em>"You may have the buffer that the coefficients are stored in completely wrong, and so you may be going down a complete rabbit hole."</em>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

Reference: a <strong>1 MB binary blob ≈ a month</strong> of full-time reverse engineering.

</div>

</div>

</div>

---

# Kostya: the binary specification wizard

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Kostya Shishkov — Ukrainian, lives in Germany, in love with Sweden. Reverse-engineered binary blobs <strong>20–30 MB in size</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
JB: <em>"He was able to reverse engineer extremely complex codecs… we do a bit of engineering with Kieran, but clearly not at this level."</em>
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
Kieran: <em>"He looked at the world as a binary specification. He didn't need documentation or anything. 'I have a binary and I can figure all of this out.'"</em>
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### The GoToMeeting story

For years, the #1 feature request in VLC was playing GoToMeeting recordings — an obscure proprietary screen codec.

JB put up a bounty. Kostya said "okay" and shipped it <strong>in two months</strong>.

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

The code is filled with <strong>jokes referencing JB and Kostya</strong>. Reverse engineering as performance art.

</div>

</div>

</div>

---

# FATE: not a matrix, a pivot table

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The <strong>FFmpeg Automated Testing Environment</strong> runs every commit across an absurd matrix:

<div class="mt-3 grid grid-cols-2 gap-2 text-xs">
<div class="p-2 rounded bg-blue-50">macOS 10.7 → 26</div>
<div class="p-2 rounded bg-blue-50">Windows XP → 11</div>
<div class="p-2 rounded bg-blue-50">iOS 9 → 26</div>
<div class="p-2 rounded bg-blue-50">Linux, BSD, Solaris, OS/2</div>
<div class="p-2 rounded bg-orange-50">x86, ARM, RISC-V</div>
<div class="p-2 rounded bg-orange-50">PowerPC, DEC Alpha</div>
<div class="p-2 rounded bg-green-50">GCC, Clang, MSVC, Intel</div>
<div class="p-2 rounded bg-green-50">AVX-512, SVE, SME</div>
</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Kieran: <em>"It's not just a matrix at this point. It's like a pivot table of different combinations."</em>
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Why it has to exist

C compilers <strong>miscompile</strong>. A bug in GCC 11 on Mac can silently produce wrong output, and small bit-errors cascade across the GOP into visible glitches.

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### All volunteer-hosted

The Macs at the top of the dashboard live in <strong>Kieran's office</strong>. Other machines live in other people's homes.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

VLC's last release still runs on Windows XP, macOS 10.7, iOS 9, and OS/2 — supporting "<strong>more OSs than Microsoft or Google or Apple</strong>."

</div>

</div>

</div>

---
layout: two-cols
---

# dav1d: peak video codec

The AV1 software decoder the VideoLAN team built when everyone said AV1 was "too complex for software."

<div class="mt-4 text-sm space-y-2">

<div>The motto, from Henrik, Ronald, Martin, JB and the rest: <strong>every cycle matters</strong>.</div>

<div>Why? Because dav1d runs on roughly <strong>3 billion devices</strong> decoding video nonstop.</div>

<div>30% of Netflix's video catalog is now AV1.</div>

<div>50% of YouTube is AV1.</div>

<div>Most devices have <strong>no hardware AV1 decoder</strong>, so software has to be brutal.</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
Result: a phone with one or two cores can decode 720p AV1 in real time.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dav1d-stack.excalidraw"
  class="w-[420px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 62× faster than C

<div class="text-sm opacity-70 mb-4">The tweet that radicalized Karpathy.</div>

<div class="grid grid-cols-3 gap-4 text-center mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### One function
<div class="text-3xl font-bold text-blue-600 my-2">62×</div>
<div class="text-xs opacity-70">handwritten SIMD vs the C version of the same function</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### Typical SIMD gain
<div class="text-3xl font-bold text-orange-600 my-2">10–50×</div>
<div class="text-xs opacity-70">not 10%, not 50% — multiples</div>

</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### Compiler auto-vectorization
<div class="text-3xl font-bold text-red-600 my-2">multiples<br/>slower</div>
<div class="text-xs opacity-70">"It's not like 5%, 10% slower. It's multiple times slower."</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm italic">

The recurring online argument from the C++ crowd: "No, intrinsics is fine. The compiler can do this. Auto-vectorization, it's your fault."

The recurring FFmpeg reply: <strong>hundreds of examples of handwritten assembly beating the compiler by orders of magnitude.</strong>

</div>

---

# We abuse the machine

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

dav1d isn't just "well-tuned assembly." It does things the CPU designers never intended.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"We abuse the machine. We go and use the machine in ways that the creator didn't expect."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"Sometimes we use an instruction that's completely unrelated to what we do. We use a <strong>cryptography instruction</strong> in video processing to do nothing related."
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Custom calling conventions

dav1d <strong>ignores the OS calling convention</strong> inside its own library — saves registers it shouldn't have to, skips the L1/L2 round-trip the ABI requires.

<div class="text-xs mt-2 opacity-70">"I've never heard any other project than dav1d doing that. This is why Kieran calls it an art."</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### One assembly file per ISA

x86, ARM, RISC-V, AArch64, SVE, SME, AVX-512 — each gets <strong>its own handwritten assembly</strong>, with runtime CPU detection to pick the right one.

</div>

</div>

</div>

---

# Why bother, post-Moore's-law?

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The cultural pushback: "Why hand-write assembly when we have vibe coding?"

JB's answer is structural, not nostalgic.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"We passed the time where hardware was going so much faster. We are at the end of Moore's law."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"Our request for power, CPU power, GPU power are exploding while the hardware is not exploding in speed."
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Why dav1d in particular

It runs <strong>billions of hours per day</strong>. A 10× win at this scale pays for itself in electricity alone.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Where JB sees AI going

"The core thing that you will not be able to vibe code are optimization for the hardware to be as fast as is possible."

LLMs barely know what bit-exact means in assembly — yet.

</div>

</div>

</div>

---

# The assembly wizards

<div class="text-sm opacity-70 mb-4">Two people who hold the world's deepest active knowledge of SIMD.</div>

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">

### Henrik Gramner
Sweden. The x86 wizard.

<div class="mt-2 text-sm">
JB: <em>"When we ask questions at Intel about things, they tell, 'Why are you asking us, Intel? You have Henrik. Henrik knows better.'"</em>
</div>

<div class="mt-2 text-xs opacity-70">
He knows the cycle counts of every SIMD instruction across every Intel generation — P4, Nehalem, Core 2, modern.
</div>

</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">

### Martin Storsjö
Finland. The ARM/Neon wizard.

<div class="mt-2 text-sm">
JB on Martin: <em>"He codes in assembly on his phone, editing it with the crappy keyboard, like virtual keyboard you have while watching his kids play in the playground."</em>
</div>

<div class="mt-2 text-xs opacity-70">
Wizard-level on iOS and Android decode paths.
</div>

</div>

</div>

---

# Teenagers vs Google engineers

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

A Google employee on X commented "as a teenager running this account" — referring to the FFmpeg account.

Kieran's reply, quoted on the podcast:

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"Teenagers have written more assembly in FFmpeg than Google engineers."
</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### And it's true

<div class="space-y-2 mt-2">
<div><strong>Felix</strong> — joined VLC at 16, now runs Mac and iOS</div>
<div><strong>Edward Wang</strong> — Google Code-in student at 14, stayed three years</div>
<div><strong>Daniel Kang</strong> — wrote thousands of lines of assembly as a high schooler</div>
<div><strong>Ruikai Peng</strong> — at 16, fixing security issues in FFmpeg by quietly sending patches</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

The 16-year-old "didn't play the alarmist CVE heist." Just fixed it in Git after three days. Kieran: <em>"the kids are all right."</em>

</div>

</div>

</div>

---

# Rust: a better C++, not a rewrite

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

JB has shipped Rust modules in VLC and built his new startup Kyber largely in Rust. He's not anti-Rust.

He's anti-<strong>rewrite</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"Rust is extremely good… a better C++ that cares about memory and allows you to do things about memory ownership that no one else can do so far."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
"It's great when you start a new project from scratch. But it's very not good when you interop with existing parts."
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### The 80% trap

"You arrive very quickly at eighty percent, then ninety percent takes a bit more time, and then you got the last ones." Like the Rust coreutils rewrite that's <strong>missing the last 1% that's 99% of the work</strong>.

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### And the assembly catch

"Even if I rewrite the C part in Rust, for security reason, you break all the security when you write handwritten assembly because we can jump anywhere."

Memory safety stops where the hand-written assembly starts.

</div>

</div>

</div>

---

# Reading code is harder than writing it

<div class="mt-6 p-6 rounded bg-blue-50 border-l-4 border-blue-500 text-xl italic">

"It is an order of magnitude easier to write code than read code. And you see that also with LLM. They can write code, but analyzing is a lot more difficult."

<div class="text-sm opacity-60 mt-3 not-italic">— Jean-Baptiste Kempf, on why every rewrite eventually regrets</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### The self-trap

"Imagine I am at my maximum intellectual efficiency in programming, and I write the best code ever. I will not be able to understand it myself six months later."

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### The implicit knowledge problem

"You arrive, you don't understand all the wisdom, all the business logic, the reasons that were done that is maybe not documented."

</div>

</div>

<div class="mt-4 text-xs opacity-60">
The implication for the LLM era: <strong>code generation is the easy part</strong>; understanding existing systems well enough to evolve them safely is the hard part.
</div>

---

# Open source burnout

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

JB now maintains a "ton of multimedia and non-multimedia libraries" — not by choice. Original maintainers got fed up and walked.

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
The <strong>XZ fiasco</strong>: "There was one guy maintaining it, and he got basically hammered by two attackers who were asking him questions nonstop at weird times at night to block him."
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
He cracked, handed over commit access, and the attackers got their backdoor.
</div>

</div>

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### The Nebraska problem

Lex's xkcd reference: "All modern digital multimedia infrastructure, and then that thing at the very bottom that everything relies on is FFmpeg."

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### LibXML, time zones, FFmpeg itself

One maintainer for LibXML (now none).
One person for the world's time zone database.
Five for VLC. Ten for FFmpeg.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

Daniel Stenberg of curl coined "<strong>AI slop</strong>" for fake bug reports. The new burnout vector isn't trolls — it's automation.

</div>

</div>

</div>

---

# Death threats over a PowerPC port

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Around 2009–2010, VLC was nearing its 1.0 release. The team was <strong>four people</strong>. Apple had long since moved away from PowerPC. JB decided VLC would drop the port.

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
A letter arrived with <strong>powder inside it</strong> — anthrax-style.
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm italic">
"You, you piece of shit, you should die, PowerPC forever."
</div>

<div class="mt-3 text-sm opacity-70">
The powder turned out to be flour. JB's mother freaked out; they went to the police.
</div>

</div>

<div>

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### What it forged

"I'm quite happy that this happened at that time. It forged me a lot. I can take a lot of hate on me. I'm okay with it."

</div>

<div class="mt-3 p-5 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### And the flip side

"I legitimately hundreds, probably thousands of times in my life had a smile on my face because FFmpeg made me happy, period. And how many times did I get a chance to say that? Zero." — Lex

This is partly why the FFmpeg account exists.

</div>

</div>

</div>

---

# The CIA had a custom build of VLC

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

In the 2017 WikiLeaks Vault 7 leak, VideoLAN learned that the CIA had been shipping <strong>a slightly-modified copy of VLC</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
The normal VLC binaries, with <strong>one extra DLL</strong>: <code>psapi.dll</code>.
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
The DLL silently read your Documents folder, encrypted the contents, and exfiltrated them — while you watched a movie for 2 hours.
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Why it was clever

People expect VLC to spin up fans and use CPU. The malware hid in plain sight under "playing HD video is hot."

</div>

<div class="mt-3 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm">

### The Indian-banned variant

Chinese hackers ran the same trick against Indian users. VLC got <strong>banned in India</strong>. JB had to fight in Indian courts to get it unbanned.

The hackers signed the legitimate DLL but called it from a fake <code>vlc.exe</code>.

</div>

</div>

</div>

---

# Two backdoor requests. Two refusals.

<div class="mt-6 p-6 rounded bg-red-50 border-l-4 border-red-500 text-xl">

<strong>Lex:</strong> "The intelligence agencies tried to, like, say, 'Can you put a backdoor in VLC?'"

<strong>JB:</strong> <em>"Yes. Two of them."</em>

<strong>Lex:</strong> "What did you say?"

<strong>JB:</strong> <em>"No. Well, I was a lot less polite."</em>

</div>

<div class="mt-6 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### The definition of compromise

<em>"There is no code that gets into VLC that we don't control. We compile on boxes that are offline, where we start by compiling the compiler. We do everything offline on places that have never been connected to the internet."</em>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### The non-negotiable

<em>"If we had to compromise our software, we would shut it down. This is clear."</em>

</div>

</div>

---

# VLC has no telemetry, no platform

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The state has no leverage over VideoLAN the way it had leverage over Pavel Durov and Telegram, because VLC <strong>is not a platform</strong>.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"VLC is completely offline. It doesn't talk to any server, so we don't know anything that you're using the software for."
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
"There is no telemetry in VLC."
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
The only network endpoint VideoLAN runs is <strong>the download server</strong>.
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### When the US Army emailed

In the middle of the Afghan war, JB got a request: a VLC update had broken RTSP, and troops on the ground used VLC to watch movies from a central server at night.

He shipped them a custom build. <strong>"VLC is very important for the morale on the troop on the ground."</strong>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-xs">

The only way VLC works with authorities: helping them play a file they already have. Never seeing the content.

</div>

</div>

</div>

---
layout: two-cols
---

# The codec family tree

Two parallel lineages, each ~30% better than the last, fighting different wars.

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>MPEG / ITU</strong> — H.264 → HEVC → VVC. Highest visual quality. <strong>Patent minefield</strong>: H.264 was sane; HEVC went out of hand with multiple patent pools.
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Alliance for Open Media</strong> — AV1 → AV2. Royalty-free. Built by Google, Netflix, Amazon, Apple, VideoLAN, Mozilla after H.265 licensing reached <strong>hundreds of millions per year</strong>.
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>The encoders/decoders</strong>: x264, x265, dav1d, dav2d, AVM, SVT-AV2 — implementations of those specs.
</div>

</div>

<div class="mt-3 text-xs opacity-70">
H.264 is also <strong>MPEG-4 Part 10</strong> is also <strong>AVC</strong>. Three names. One codec.
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./codec-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# The patent minefield

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

JB: <em>"In multimedia there is a ton of patents and the licensing after H.264 became out of hand."</em>

For HEVC, the licensing situation collapsed:

<div class="mt-3 grid grid-cols-1 gap-2 text-sm">
<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">MPEG LA — the original pool</div>
<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">HEVC Advance — a competing pool</div>
<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">Nokia and others — outside all pools</div>
<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">Uncapped per-user fees</div>
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">
In France, most of those patents are invalid: France rejects software patents and the EU treats them as "mathematical patents."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### When the cost broke the math

For YouTube or Netflix, HEVC licensing could mean <strong>"hundreds of millions of dollars of licensing for patents per year."</strong>

</div>

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### They blinked and built AV1

<em>"At hundred million per year, you know, I could create my own codec. And this is what they did."</em>

That's the entire reason the Alliance for Open Media exists.

</div>

</div>

</div>

---
layout: two-cols
---

# I-frames, P-frames, B-frames

Three frame types, doing different jobs in the compression tradeoff.

<div class="mt-4 text-sm space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>I-frame</strong> — a complete image, like a JPEG. The anchor.
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>P-frame</strong> — predicted from past frames. "I need block 5, 7, and 42 from before, plus this delta."
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>B-frame</strong> — bi-predicted, depends on past <em>and future</em> frames. Smallest payload.
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs italic">
JB on B-frames: "The biggest mind-blown when I started was the B-frames. The decoding order is not the same as the display order."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./frame-types.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Intra-refresh: a stream with no I-frames

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Standard streaming hits you with a giant <strong>I-frame</strong> every few seconds. Great for seeking, bad for low latency — those I-frames are huge.

Kyber and modern low-latency stacks use a different trick.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
"You never have an I-frame. This is intra-refresh that we use."
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### How it works

Refresh a vertical slice of the image each frame. After N frames, every region has been refreshed — you've effectively reconstructed a full I-frame, but spread across time.

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Why it matters

Constant bitrate. No latency spike on keyframes. The whole stream looks smooth even when packets drop.

Lex: <em>"That's even smarter."</em>

</div>

</div>

</div>

---

# x264 and the visual revolution

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

For 20 years, codec research worshipped <strong>peak signal-to-noise ratio (PSNR)</strong> — a mathematical metric that rewards blurring.

The x264 hobbyists rejected it.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Two innovations: <strong>psychovisual rate distortion</strong> and <strong>adaptive quantization</strong>. Bias bits toward what the eye notices.
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
The validation set was a Swedish HD test clip called <strong>ParkJoy</strong> — kids running through a park with foliage, water, motion. PSNR-optimized encoders blurred it; psychovisual encoders kept the texture.
</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### Tested on laptops, not $30K monitors

Loren Merritt's design goal: <em>"I don't wanna test this on a thirty thousand dollar screen. I want this to look good on someone's laptop at home."</em>

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### The Blu-ray takeover

A Warner Bros engineer used x264 for the <strong>Fringe Blu-ray box set</strong>. Movies like Cinema Paradiso were re-encoded with x264. Two decades later, every new codec still benchmarks against it.

</div>

</div>

</div>

---

# Anime was the secret patron

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Before Crunchyroll, anime fans <strong>imported Japanese DVDs and ripped them</strong>. There was no commercial path.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
This community needed: a clean encoder, a great player, and a way to render Japanese subtitles with diacritics.
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
That's how x264, VLC, and the Aegisub subtitle editor became deeply linked.
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### Why anime broke the codec

Anime contains <strong>gradients on flat backgrounds</strong> that produce visible banding in normal compression. Optimizations for that case ended up improving codecs for everyone.

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

JB on subtitles: you need official Japanese, ruby annotations (hiragana for the kanji), <strong>and</strong> an English or French translation overlaid simultaneously. The subtitle stack had to be insanely flexible.

</div>

</div>

</div>

---

# Adaptive streaming is mostly mundane

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

The dramatic stuff in video is encoding, not streaming. JB: <em>"It is less complex than it seems compared to everything that we've talked about."</em>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
You pre-encode <strong>7 resolutions</strong>. The player downloads small segments. If a segment takes &gt;50% of its duration to arrive, drop a tier.
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### What's actually hard

<strong>Live</strong> events through satellite into a central encoder, real-time at 7 resolutions, push to CDN, layer in DRM, and serve to a thousand different devices — all without QA time.

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### And the audio tell

Kieran: <em>"You can kind of notice when they move from full fat AAC to the compressed versions of AAC that use spectral band replication. You can kind of see it goes a bit tinny."</em>

Eyes tolerate 30fps; ears don't tolerate format switches.

</div>

</div>

</div>

---
layout: two-cols
---

# Kyber: 4 ms glass-to-glass

JB's new startup — the lowest-latency video link he can engineer, for remote-controlled machines.

<div class="mt-4 text-sm space-y-2">

<div>One <strong>QUIC/UDP socket</strong>, many tracks: video, audio, sensors, mouse, keyboard, gamepad.</div>

<div><strong>Forward error correction</strong>: send a few % extra so packet loss doesn't add latency.</div>

<div><strong>Re-timestamping for clock drift</strong>: when you train robotics AI on a recorded stream, the timestamps have to stay coherent across cameras.</div>

<div>Today: ~7 ms Windows-to-Windows. Goal: <strong>4 ms = 240 Hz</strong>.</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs italic">
"The goal of Kyber is to make distance disappear."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kyber-stream.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Why 4 ms matters

<div class="text-sm opacity-70 mb-4">Use cases the conversation walks through.</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-sm">Cloud gaming</div>
<div class="text-xs opacity-70 mt-1">A frame of input lag is a death in any reflex game. JB was CTO of a cloud gaming startup before this.</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-sm">Waymo remote operators</div>
<div class="text-xs opacity-70 mt-1">When the autonomous stack gets stuck, "there is someone that is basically remote controlling that."</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-sm">Remote surgery, defense, submarines</div>
<div class="text-xs opacity-70 mt-1">The expert can't always go to where the machine is. Distance has to compress to a few milliseconds.</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-sm">Humanoid teleop & teleobservation</div>
<div class="text-xs opacity-70 mt-1">"When everything will be fully autonomous, you need to <strong>teleobserve</strong> them. You need to check what's happening."</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

The breakdown of 4 ms: today's NVIDIA hardware encoder eats <strong>3.5 ms</strong>, the Intel decoder eats <strong>2 ms</strong>. Encoder + decoder alone already exceeds the target. New encoders are required.

</div>

---

# The archiving community

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

A small, underfunded group of people quietly using FFmpeg to <strong>preserve human visual history</strong> — led by Dave Rice at City University of New York.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
They funded a custom codec: <strong>FFV1</strong>. Lossless, fast software encoding, error-resilient — if a tape loses a bit, you only lose part of a frame.
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
They funded GPU encoding for FFV1 so museums can keep up.
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### The BBC Domesday lesson

The "New Domesday Book" archived UK life onto BBC Micro discs. Within 10–15 years, <strong>no one had the software to play it.</strong> Reverse engineering had to come along, years later.

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### And the moral hazard

Tape from the 1970s and 1980s degrades. There aren't enough working tape heads in the world to read everything. <strong>Archivists have to choose what dies.</strong>

</div>

</div>

</div>

---

# C is Latin

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Kieran on why FFmpeg can plausibly play these archives in 1000 years:

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base italic">
"FFmpeg is written in C. C is the closest to mathematics you're probably gonna get. The closest to logic is — it will be like Latin. C will be like Latin."
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
A dead language, still readable, still teachable, still compilable.
</div>

</div>

<div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500 text-base italic">

"FFmpeg runs on Mars, so we are, we are a multi-planetary open source library."

<div class="text-xs opacity-70 mt-3 not-italic">— Kieran on the Mars 2020 rover, which compresses pictures with FFmpeg</div>

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### Where else it shows up

CERN's LHC. Formula 1 paddocks. SpaceX launch monitoring. The European Space Agency. The US military.

</div>

</div>

</div>

---

# The future is multimedia, not "video"

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

JB's definition of <strong>multimedia</strong>: any digital stream feeding any human sense.

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
VLC already has a <strong>haptic plugin</strong> for 4D-cinema hydraulic seats. It already ships VR and XR builds.
</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
There are codecs for <strong>point clouds, volumetric video, RGB-D for robotics</strong>. Spatial audio just got merged.
</div>

</div>

<div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-base italic">

"You will have VLC for Neuralink."

</div>

<div class="mt-3 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-base italic">

"FFmpeg <code>-i input format human brain</code>."

<div class="text-xs opacity-70 mt-2 not-italic">— Kieran, mostly joking, partly not</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

Kieran: <em>"It's like audio. You'll have a left and right nose track. You have a left and right audio pair. It's easy."</em>

<strong>Stereo smell</strong>, on the record.

</div>

</div>

</div>

---

# JB's zen

<div class="grid grid-cols-2 gap-6 mt-2">

<div>

Lex asks JB how he stays calm through court orders, death threats, intelligence agencies, and trillion-dollar bureaucracies.

<div class="mt-3 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
"I have a way of thinking about what is the worst case scenario, always. And the answer is, at the end, if I take like a chess player — am I dead? Yes or no?"
</div>

</div>

<div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm italic">

"My moral way is always like, am I dying in the end? Am I hurting someone? If the answer is no, then too bad. Oh, some lawyers are going to be unhappy. What are they going to do? Take all the money of VideoLAN? Wow. They're going to have 50 grand."

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<strong>"The code — the source code is out there. It's not stoppable. Also because what we do is good and it's done for everyone."</strong>

</div>

</div>

</div>

---

# Core quotes

<div class="text-xs opacity-60 mb-2">The lines worth keeping from four hours of conversation:</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-xs">
"We don't care who you are. Like maybe you're a dog. I don't care. I need to look at your code."
<div class="text-xs opacity-60 mt-1 not-italic">— JB · on the only filter that matters</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-xs">
"Every cycle matters. We are talking about probably three billion devices which are going to decode video nonstop."
<div class="text-xs opacity-60 mt-1 not-italic">— JB · dav1d's motto</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-xs">
"This is what peak video codec should look like. 79.9% assembly, 19.6% C, and 0.5% other."
<div class="text-xs opacity-60 mt-1 not-italic">— Lex reading the most viral FFmpeg tweet</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic text-xs">
"It is an order of magnitude easier to write code than read code. And you see that also with LLM."
<div class="text-xs opacity-60 mt-1 not-italic">— JB · why every rewrite eventually regrets</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic text-xs">
"If we had to compromise our software, we would shut it down. This is clear."
<div class="text-xs opacity-60 mt-1 not-italic">— JB · refusing two intelligence-agency backdoor requests</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-xs">
"FFmpeg runs on Mars, so we are a multi-planetary open source library."
<div class="text-xs opacity-60 mt-1 not-italic">— Kieran · on the Mars 2020 rover. Also: "The world is a museum of passion projects." (Kieran, quoting John Collison)</div>
</div>

</div>

---
layout: end
---

# "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."

<div class="mt-6 text-sm opacity-60">— Linus Torvalds, quoted by Lex at the close of Episode #496</div>
