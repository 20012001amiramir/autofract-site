import sharp from 'sharp'
import { resolve, dirname } from 'node:path'
import { mkdirSync } from 'node:fs'

const BG = '#0c0c10'
const INK = '#f5f1ea'
const MUTED = '#8c8680'
const X = 80
const MAX_W = 1060 // 1200 - X - right margin

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Greedy word-wrap using an approximate glyph width for the chosen weight.
function wrap(text: string, size: number, charRatio: number): string[] {
  const maxChars = Math.floor(MAX_W / (size * charRatio))
  const words = text.split(' ')
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w
    if (next.length <= maxChars || !cur) cur = next
    else { lines.push(cur); cur = w }
  }
  if (cur) lines.push(cur)
  return lines
}

// Pick the largest title size (from a ladder) that wraps into ≤2 lines.
function layoutTitle(title: string): { size: number; lines: string[] } {
  for (const size of [148, 128, 112, 96, 84]) {
    const lines = wrap(title, size, 0.56)
    if (lines.length <= 2) return { size, lines }
  }
  return { size: 84, lines: wrap(title, 84, 0.56) }
}

function card(opts: { title: string; subtitle: string; accent: string; kicker?: string }): string {
  const { title, subtitle, accent, kicker = 'AUTOFRACT — A STUDIO' } = opts
  const { size, lines } = layoutTitle(title)
  const lh = size * 1.0
  // vertically center the title block around y≈330
  const blockH = lines.length * lh
  let ty = 330 - blockH / 2 + size * 0.78
  const titleSvg = lines.map((ln, i) => {
    const last = i === lines.length - 1
    const dot = last ? `<tspan fill="${accent}">.</tspan>` : ''
    const y = ty + i * lh
    return `<text x="${X - 2}" y="${y}" font-family="sans-serif" font-weight="900" font-size="${size}" fill="${INK}" letter-spacing="-3">${esc(ln)}${dot}</text>`
  }).join('\n  ')

  const subLines = wrap(subtitle, 34, 0.5).slice(0, 2)
  const subY = 330 + blockH / 2 + 70
  const subSvg = subLines.map((ln, i) =>
    `<text x="${X}" y="${subY + i * 46}" font-family="sans-serif" font-size="34" fill="${MUTED}">${esc(ln)}</text>`
  ).join('\n  ')

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="10" height="630" fill="${accent}"/>
  <text x="${X}" y="125" font-family="sans-serif" font-size="26" fill="${MUTED}" letter-spacing="6">${esc(kicker)}</text>
  ${titleSvg}
  ${subSvg}
</svg>`.trim()
}

const CARDS: Record<string, Parameters<typeof card>[0]> = {
  'og-image': { title: 'Software that runs itself', subtitle: 'An independent studio building antifragile AI systems', accent: '#5eead4' },
  'og/hire': { title: 'Hire the studio', subtitle: 'We build systems that run themselves — for you', accent: '#5eead4' },
  'og/pathcore': { title: 'PathCore', subtitle: 'Self-healing infrastructure', accent: '#5eead4' },
  'og/videolinker': { title: 'VideoLinker', subtitle: 'Autonomous video production', accent: '#ff6b35' },
  'og/frontdesk': { title: 'FrontDesk', subtitle: 'The price of record', accent: '#3ecf8e' },
  'og/relocating': { title: 'Relocating', subtitle: 'Relocation, as data', accent: '#7dd3fc' },
}

for (const [name, opts] of Object.entries(CARDS)) {
  const out = resolve(`public/${name}.png`)
  mkdirSync(dirname(out), { recursive: true })
  await sharp(Buffer.from(card(opts))).png().toFile(out)
  console.log(`✔ ${name}.png`)
}
