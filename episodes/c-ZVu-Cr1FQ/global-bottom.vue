<script setup>
import { onMounted, ref } from 'vue'
import { useNav } from '@slidev/client'

// 不蒜子兼容的访问计数后端(一处可换)。
// 默认 Vercount:与 busuanzi 同元素 ID(busuanzi_value_*)、国内可达、维护活跃。
// 备用:'https://busuanzi.9420.ltd/busuanzi.js'(官方 ibruce 端点已失效返回 404)。
const COUNTER_SRC = 'https://cn.vercount.one/js'

const { currentSlideNo, total, go, isPrintMode } = useNav()

const toast = ref('')
const viewsReady = ref(false)
let toastTimer

function showToast(msg) {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.value = '' }, 1600)
}

// deck 主标题(去掉 " - Slidev" 后缀,取 "|" 前的主题部分)。
function deckTopic() {
  return (document.title || '')
    .replace(/\s*[-–—]\s*Slidev\s*$/i, '')
    .split(/[|｜]/)[0]
    .trim()
}

// 在句子边界处截断,尽量不切半句。
function clip(text, max) {
  text = (text || '').replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  const slice = text.slice(0, max)
  const stop = Math.max(
    slice.lastIndexOf('。'), slice.lastIndexOf('！'), slice.lastIndexOf('？'),
    slice.lastIndexOf('；'), slice.lastIndexOf('. '),
  )
  return stop > max * 0.4 ? slice.slice(0, stop + 1) : slice.trim() + '…'
}

// 抽取当前页的「标题 + 核心观点」。GlobalBottom 在 slides 容器外只渲染一次,
// 所以 .slidev-page-N 的 innerText 不含返回/分享按钮等 chrome。
function extractSlide() {
  const page = document.querySelector('.slidev-page-' + currentSlideNo.value)
  let heading = ''
  let body = ''
  if (page) {
    const h = page.querySelector('h1, h2')
    heading = ((h && h.innerText) || '').replace(/\s+/g, ' ').trim()
    let full = (page.innerText || '').replace(/\s+/g, ' ').trim()
    if (heading && full.startsWith(heading)) full = full.slice(heading.length).trim()
    body = full
  }
  return { heading, body: clip(body, 140) }
}

// 组装干净的中文分享文案:【标题】+ 核心观点 + 出处。
function composeShareText() {
  const topic = deckTopic()
  const { heading, body } = extractSlide()
  const lines = []
  lines.push(heading ? `【${heading}】` : `《${topic}》`)
  if (body) lines.push('', body)
  if (topic && heading && heading !== topic) lines.push('', `—— 摘自《${topic}》· PodDeck`)
  else lines.push('', '—— via PodDeck')
  return lines.join('\n')
}

// 指向当前这一页的链接。用 hash(#slide=N)而非路径,
// 这样在 GitHub Pages 上冷启动不会 404(路径部分是 deck 根)。
function shareUrl() {
  return location.origin + import.meta.env.BASE_URL + '#slide=' + currentSlideNo.value
}

// 是否真·移动设备(手机)。关键陷阱:触屏笔记本 maxTouchPoints>0 但不是手机,
// 不能只看触点,否则桌面也会被误判、弹出系统分享面板。
// 优先用 Client Hints 的 userAgentData.mobile(桌面恒为 false,不受触屏影响),
// 回退到 UA 关键字。
function isMobile() {
  try {
    const uad = navigator.userAgentData
    if (uad && typeof uad.mobile === 'boolean') return uad.mobile
  } catch (e) { /* ignore */ }
  return /Android|iPhone|iPod|iPad|Windows Phone|Mobile/i.test(navigator.userAgent || '')
}

async function copyToClipboard(payload) {
  try {
    await navigator.clipboard.writeText(payload)
    return true
  } catch (e) {
    // 非安全上下文 / 老浏览器兜底
    try {
      const ta = document.createElement('textarea')
      ta.value = payload
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.focus()
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch (e2) {
      return false
    }
  }
}

async function onShare() {
  const text = composeShareText()
  const url = shareUrl()
  const title = deckTopic() || document.title
  // 仅真·手机调起系统分享面板;桌面(含触屏笔记本)一律走剪贴板
  if (isMobile() && typeof navigator.share === 'function') {
    try {
      await navigator.share({ title, text, url })
      return
    } catch (e) {
      if (e && e.name === 'AbortError') return // 用户取消,不再 fallback
      // 其它错误 → 落到剪贴板分支
    }
  }
  // 桌面:复制「标题 + 核心观点 + 链接」
  const ok = await copyToClipboard(text + '\n' + url)
  showToast(ok ? '已复制到剪贴板' : '复制失败,请手动复制')
}

// 全局只注入一次计数脚本;deck 被打开即计一次,计入站点总访问。
function injectCounter() {
  if (document.getElementById('__poddeck_counter__')) return
  const s = document.createElement('script')
  s.id = '__poddeck_counter__'
  s.defer = true
  s.src = COUNTER_SRC
  document.head.appendChild(s)
}

// 轮询不蒜子值:拿到数字才显示角标。服务挂掉时永远隐藏,页面无破洞。
function watchViews() {
  let tries = 0
  const timer = setInterval(() => {
    tries += 1
    const v = document.getElementById('busuanzi_value_page_pv')
    if (v && /\d/.test(v.textContent || '')) {
      viewsReady.value = true
      clearInterval(timer)
    } else if (tries > 20) {
      clearInterval(timer)
    }
  }, 400)
}

// 冷启动时若 URL 带 #slide=N,跳到对应页再清掉 hash。
function restoreSlideFromHash() {
  const m = location.hash.match(/^#slide=(\d+)$/)
  if (!m) return
  let no = parseInt(m[1], 10)
  const max = (total && total.value) || no
  no = Math.min(Math.max(no, 1), max)
  const jump = () => { if (no !== currentSlideNo.value) go(no) }
  try {
    jump()
  } catch (e) {
    requestAnimationFrame(() => { try { jump() } catch (e2) { /* ignore */ } })
  }
  history.replaceState(null, '', location.pathname + location.search)
}

onMounted(() => {
  injectCounter()
  watchViews()
  requestAnimationFrame(restoreSlideFromHash)
})
</script>

<template>
  <!-- 左上角 chrome:返回 + 分享,成组排列,避开右上角的页码 -->
  <div class="poddeck-chrome">
    <a href="../../" class="poddeck-btn" title="返回 PodDeck">← PodDeck</a>
    <button
      v-if="!isPrintMode"
      class="poddeck-btn poddeck-share"
      title="分享这一页(复制文字 + 链接)"
      @click="onShare"
    >
      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
        <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
      </svg>
      分享
    </button>
  </div>

  <span
    v-if="!isPrintMode"
    v-show="viewsReady"
    class="poddeck-views"
    title="本页浏览次数"
  >
    👁 <span id="busuanzi_value_page_pv"></span>
  </span>

  <transition name="poddeck-toast">
    <div v-if="toast" class="poddeck-toast">{{ toast }}</div>
  </transition>
</template>

<style scoped>
.poddeck-chrome {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px;
}
.poddeck-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(30, 30, 30, 0.4);
  text-decoration: none;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-family: ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: all 0.15s ease;
}
.poddeck-btn:hover {
  color: rgba(30, 30, 30, 0.95);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.poddeck-share svg { opacity: 0.85; }

.poddeck-views {
  position: fixed;
  right: 14px;
  bottom: 14px;
  z-index: 100;
  font-size: 10px;
  font-weight: 500;
  color: rgba(30, 30, 30, 0.34);
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-family: ui-sans-serif, system-ui, sans-serif;
  pointer-events: none;
}

.poddeck-toast {
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  font-size: 12px;
  color: #fff;
  background: rgba(20, 20, 20, 0.88);
  padding: 7px 16px;
  border-radius: 999px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  pointer-events: none;
  white-space: nowrap;
}
.poddeck-toast-enter-active,
.poddeck-toast-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.poddeck-toast-enter-from,
.poddeck-toast-leave-to { opacity: 0; transform: translate(-50%, 6px); }
</style>
