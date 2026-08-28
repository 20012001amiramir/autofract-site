import sharp from 'sharp'
import { resolve, dirname } from 'node:path'
import { mkdirSync } from 'node:fs'
import { LOCALES, type Locale } from '../data/locales'
import { ogPath } from '../data/og'
import { CASES, CASE_META } from '../data/systems'
import { TOOLS, TOOL_META } from '../data/tools'
import { toolsContent } from '../content/tools'
import enJson from '../i18n/locales/en.json' with { type: 'json' }
import ruJson from '../i18n/locales/ru.json' with { type: 'json' }
import deJson from '../i18n/locales/de.json' with { type: 'json' }
import esJson from '../i18n/locales/es.json' with { type: 'json' }
import frJson from '../i18n/locales/fr.json' with { type: 'json' }
import ptJson from '../i18n/locales/pt.json' with { type: 'json' }

const BG = '#0c0c10'
const INK = '#f5f1ea'
const MUTED = '#8c8680'
const X = 80
const MAX_W = 1060 // 1200 - X - right margin

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * A soft hyphen is a line-break hint for the browser. A card wraps itself and
 * some renderers would draw the character, so headlines are flattened first.
 */
function plain(s: string): string {
  return s.replace(/\u00ad/g, '')
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
  const { accent, kicker = 'AUTOFRACT — A STUDIO' } = opts
  const title = plain(opts.title)
  const subtitle = plain(opts.subtitle)
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

  // The subtitle renders in the monospace fallback face, so it needs a wider
  // per-glyph ratio than the display title or it overflows the card.
  const allSubLines = wrap(subtitle, 34, 0.62)
  const subLines = allSubLines.slice(0, 2)
  if (allSubLines.length > 2) subLines[1] = `${subLines[1].replace(/[.,;:—-]+$/, '')}…`
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

// One card per page × per locale. The titles come from the same copy the page renders,
// so a translated page never ships an English social image.
const dicts: Record<Locale, Record<string, any>> = {
  en: enJson, ru: ruJson, de: deJson, es: esJson, fr: frJson, pt: ptJson,
}

const KICKER: Record<Locale, string> = {
  en: 'AUTOFRACT — A STUDIO',
  ru: 'AUTOFRACT — СТУДИЯ',
  de: 'AUTOFRACT — EIN STUDIO',
  es: 'AUTOFRACT — UN ESTUDIO',
  fr: 'AUTOFRACT — UN STUDIO',
  pt: 'AUTOFRACT — UM ESTÚDIO',
}

function cardsFor(locale: Locale): Record<string, Parameters<typeof card>[0]> {
  const j = dicts[locale]
  const c = toolsContent[locale]
  const kicker = KICKER[locale]
  const out: Record<string, Parameters<typeof card>[0]> = {
    '/og-image': { title: j.meta.title, subtitle: j.hero.sub, accent: '#5eead4', kicker },
    '/og/hire': { title: j.hire.metaTitle, subtitle: j.hire.headline, accent: '#5eead4', kicker },
    '/og/tools': { title: c.hub.h1, subtitle: c.hub.lede, accent: '#5eead4', kicker },
  }
  for (const slug of CASES) {
    out[`/og/${slug}`] = {
      title: j.work[slug].name,
      subtitle: j.work[slug].tag,
      accent: CASE_META[slug].accent,
      kicker,
    }
  }
  for (const slug of TOOLS) {
    out[`/og/tools-${slug}`] = {
      title: c.tools[slug].name,
      subtitle: c.tools[slug].tagline,
      accent: TOOL_META[slug].accent,
      kicker,
    }
  }
  return out
}

let written = 0
for (const locale of LOCALES) {
  for (const [name, opts] of Object.entries(cardsFor(locale))) {
    const out = resolve(`public${ogPath(name, locale)}`)
    mkdirSync(dirname(out), { recursive: true })
    // Flat colour on a flat background: an indexed palette is a third of the size
    // with no visible difference.
    await sharp(Buffer.from(card(opts))).png({ palette: true, colours: 32 }).toFile(out)
    written++
  }
  console.log(`✔ ${locale}`)
}
console.log(`${written} cards → public/`)
