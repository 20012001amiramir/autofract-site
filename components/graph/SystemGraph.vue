<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import type { SystemMap, SysNode } from '~/data/systems'
import { TYPE_COLORS } from '~/data/systems'

const props = withDefaults(defineProps<{
  map: SystemMap
  /** 0 = растянуться на высоту контейнера (ambient-фон) */
  height?: number
  /** ambient = hero background: слабее glow, без tooltip'ов */
  ambient?: boolean
}>(), {
  height: 560,
  ambient: false,
})

const wrap = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const tooltip = ref<{ x: number; y: number; node: SysNode } | null>(null)

interface SimNode extends SysNode {
  x: number; y: number; vx: number; vy: number; radius: number
  fixed: boolean
}
interface Particle { progress: number }
interface SimEdge { a: SimNode; b: SimNode; flow: boolean; particles: Particle[] }

let raf = 0
let ro: ResizeObserver | null = null
let cleanupEvents: (() => void) | null = null

/** deterministic pseudo-random — стабильная раскладка между рендерами */
function mulberry(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

onMounted(() => {
  const el = canvas.value!
  const container = wrap.value!
  const ctx = el.getContext('2d')!
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let W = 0; let H = 0; let dpr = 1

  const rand = mulberry(1987)
  const nodes: SimNode[] = props.map.nodes.map((n, i) => {
    const angle = (i / props.map.nodes.length) * Math.PI * 2 + rand() * 0.6
    const rr = 0.28 + rand() * 0.14
    return {
      ...n,
      x: 0.5 + Math.cos(angle) * rr,
      y: 0.5 + Math.sin(angle) * rr,
      vx: 0, vy: 0,
      radius: n.type === 'core' ? 26 : n.r ?? 13,
      fixed: false,
    }
  })
  const byId = new Map(nodes.map(n => [n.id, n]))
  const edges: SimEdge[] = props.map.edges
    .map(e => ({ a: byId.get(e.from)!, b: byId.get(e.to)!, flow: e.flow !== false, particles: [] }))
    .filter(e => e.a && e.b)

  let hovered: SimNode | null = null
  let dragged: SimNode | null = null

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    W = container.clientWidth
    H = props.height || container.clientHeight
    el.width = W * dpr
    el.height = H * dpr
    el.style.width = `${W}px`
    el.style.height = `${H}px`
  }

  function step(dt: number) {
    const cx = W / 2; const cy = H / 2
    const spread = Math.min(W, H)
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i]
      if (n.fixed) continue
      // отталкивание
      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j]
        let dx = (n.x - m.x) * spread; let dy = (n.y - m.y) * spread
        let d2 = dx * dx + dy * dy
        if (d2 < 1) d2 = 1
        const f = 2600 / d2
        const d = Math.sqrt(d2)
        dx /= d; dy /= d
        n.vx += dx * f * dt; n.vy += dy * f * dt
        if (!m.fixed) { m.vx -= dx * f * dt; m.vy -= dy * f * dt }
      }
      // центрирование (core сильнее тянет к центру)
      const pull = n.type === 'core' ? 1.6 : 0.55
      n.vx += ((0.5 - n.x) * spread) * pull * 0.002 * dt
      n.vy += ((0.5 - n.y) * spread) * pull * 0.002 * dt
    }
    // пружины
    for (const e of edges) {
      const rest = (e.a.type === 'core' || e.b.type === 'core') ? 150 : 105
      let dx = (e.b.x - e.a.x) * spread; let dy = (e.b.y - e.a.y) * spread
      const d = Math.sqrt(dx * dx + dy * dy) || 1
      const f = (d - rest) * 0.012 * dt
      dx /= d; dy /= d
      if (!e.a.fixed) { e.a.vx += dx * f; e.a.vy += dy * f }
      if (!e.b.fixed) { e.b.vx -= dx * f; e.b.vy -= dy * f }
    }
    for (const n of nodes) {
      if (n.fixed) continue
      n.vx *= 0.86; n.vy *= 0.86
      n.x += (n.vx * dt) / spread
      n.y += (n.vy * dt) / spread
      n.x = Math.min(0.96, Math.max(0.04, n.x))
      n.y = Math.min(0.94, Math.max(0.06, n.y))
    }
  }

  function colorOf(n: SysNode): string {
    return n.type === 'core' ? props.map.accent : TYPE_COLORS[n.type]
  }

  function draw(t: number) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, W, H)
    const focus = hovered
    const dimAlpha = props.ambient ? 0.5 : 0.16

    for (const e of edges) {
      const active = focus && (e.a === focus || e.b === focus)
      const alpha = focus ? (active ? 0.85 : dimAlpha * 0.5) : (props.ambient ? 0.22 : 0.38)
      const x1 = e.a.x * W; const y1 = e.a.y * H
      const x2 = e.b.x * W; const y2 = e.b.y * H
      ctx.beginPath()
      const mx = (x1 + x2) / 2 + (y2 - y1) * 0.08
      const my = (y1 + y2) / 2 - (x2 - x1) * 0.08
      ctx.moveTo(x1, y1)
      ctx.quadraticCurveTo(mx, my, x2, y2)
      ctx.strokeStyle = active ? props.map.accent : `rgba(140, 134, 128, ${alpha})`
      ctx.globalAlpha = active ? 0.9 : 1
      ctx.lineWidth = active ? 1.4 : 1
      if (active) { ctx.shadowColor = props.map.accent; ctx.shadowBlur = 10 }
      ctx.stroke()
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1

      // поток данных — частицы вдоль ребра
      if (e.flow && !reduced) {
        if (Math.random() < 0.02) e.particles.push({ progress: 0 })
        e.particles = e.particles.filter(p => (p.progress += 0.006) < 1)
        for (const p of e.particles) {
          const q = p.progress
          const ix = (1 - q) * (1 - q) * x1 + 2 * (1 - q) * q * mx + q * q * x2
          const iy = (1 - q) * (1 - q) * y1 + 2 * (1 - q) * q * my + q * q * y2
          ctx.beginPath()
          ctx.arc(ix, iy, 1.6, 0, Math.PI * 2)
          ctx.fillStyle = props.map.accent
          ctx.globalAlpha = (focus ? (active ? 1 : 0.15) : 0.8) * Math.sin(q * Math.PI)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      }
    }

    for (const n of nodes as SimNode[]) {
      const x = n.x * W; const y = n.y * H
      const isFocus = focus === n
      const neighbor = focus && edges.some(e => (e.a === focus && e.b === n) || (e.b === focus && e.a === n))
      const dimmed = focus && !isFocus && !neighbor
      const color = colorOf(n)
      const pulse = n.type === 'core' && !reduced ? Math.sin(t / 600) * 2 : 0

      ctx.globalAlpha = dimmed ? 0.25 : 1
      ctx.beginPath()
      ctx.arc(x, y, n.radius + pulse, 0, Math.PI * 2)
      ctx.fillStyle = '#0c0c10'
      ctx.shadowColor = color
      ctx.shadowBlur = props.ambient ? (isFocus ? 18 : 10) : isFocus ? 26 : 16
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.lineWidth = isFocus ? 2 : 1.4
      ctx.strokeStyle = color
      ctx.stroke()
      // ядро узла
      ctx.beginPath()
      ctx.arc(x, y, Math.max(2.5, (n.radius + pulse) * 0.32), 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      if (!props.ambient) {
        ctx.font = '500 11px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillStyle = dimmed ? 'rgba(140,134,128,0.4)' : (isFocus ? '#f5f1ea' : 'rgba(245,241,234,0.72)')
        ctx.fillText(n.label, x, y + n.radius + 16)
      }
      ctx.globalAlpha = 1
    }
  }

  let last = performance.now()
  let settled = 0
  function loop(now: number) {
    const dt = Math.min((now - last) / 16.7, 3)
    last = now
    if (!reduced || settled < 240) { step(dt); settled++ }
    draw(now)
    if (reduced && settled >= 240 && !hovered && !dragged) return // статичный кадр
    raf = requestAnimationFrame(loop)
  }

  function nodeAt(px: number, py: number): SimNode | null {
    for (const n of nodes) {
      const dx = n.x * W - px; const dy = n.y * H - py
      if (dx * dx + dy * dy < (n.radius + 10) ** 2) return n
    }
    return null
  }

  function toLocal(ev: PointerEvent) {
    const r = el.getBoundingClientRect()
    return { x: ev.clientX - r.left, y: ev.clientY - r.top }
  }

  const onMove = (ev: PointerEvent) => {
    const { x, y } = toLocal(ev)
    if (dragged) {
      dragged.x = x / W; dragged.y = y / H
      dragged.vx = 0; dragged.vy = 0
      return
    }
    hovered = props.ambient ? null : nodeAt(x, y)
    el.style.cursor = hovered ? 'grab' : 'default'
    tooltip.value = hovered && hovered.desc
      ? { x: Math.min(x, W - 240), y: Math.max(hovered.y * H - hovered.radius - 14, 12), node: hovered }
      : null
    if (reduced && raf === 0) raf = requestAnimationFrame(loop)
  }
  const onDown = (ev: PointerEvent) => {
    const { x, y } = toLocal(ev)
    const n = nodeAt(x, y)
    if (n) { dragged = n; n.fixed = true; el.setPointerCapture(ev.pointerId); el.style.cursor = 'grabbing' }
  }
  const onUp = () => {
    if (dragged) { dragged.fixed = false; dragged = null; el.style.cursor = hovered ? 'grab' : 'default' }
  }
  const onLeave = () => { hovered = null; tooltip.value = null }

  if (!props.ambient) {
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointerleave', onLeave)
    cleanupEvents = () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointerleave', onLeave)
    }
  }

  ro = new ResizeObserver(() => resize())
  ro.observe(container)
  resize()
  // прогрев раскладки до первого кадра
  for (let i = 0; i < 220; i++) step(1)
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
  cleanupEvents?.()
})
</script>

<template>
  <div ref="wrap" class="relative w-full" :style="height ? { height: `${height}px` } : { height: '100%' }">
    <canvas ref="canvas" class="block w-full h-full" aria-hidden="true" />
    <Transition name="tip">
      <div
        v-if="tooltip"
        class="pointer-events-none absolute z-10 max-w-[230px] rounded border border-ink/15 bg-paper/95 px-3 py-2 backdrop-blur"
        :style="{ left: `${tooltip.x + 14}px`, top: `${tooltip.y}px` }"
      >
        <p class="font-mono text-[11px] uppercase tracking-wider" :style="{ color: map.accent }">{{ tooltip.node.label }}</p>
        <p class="mt-1 text-xs leading-snug text-ink/80">{{ tooltip.node.desc }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.tip-enter-active, .tip-leave-active { transition: opacity 150ms ease; }
.tip-enter-from, .tip-leave-to { opacity: 0; }
</style>
