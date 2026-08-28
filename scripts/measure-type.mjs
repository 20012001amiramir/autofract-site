/**
 * Measure Fraunces Black advance widths, once, and commit the table.
 *
 * `tests/unit/typography.spec.ts` needs to know how wide a headline word will be
 * before the browser draws it. Character counting is not enough — "Illinois" and
 * "Herramientas" are the same length and nowhere near the same width. So we ask
 * a real browser for the advance width of every character we set headlines in,
 * at 1em, and check words against that table in a plain unit test.
 *
 *   node scripts/measure-type.mjs [origin]   # default http://localhost:3117
 *
 * Re-run it only when the display face changes.
 */
import { writeFileSync } from 'node:fs'
import { chromium } from 'playwright'

const ORIGIN = process.argv[2] ?? 'http://localhost:3117'
const OUT = new URL('../tests/fixtures/display-widths.json', import.meta.url)

const RANGES = [
  [0x20, 0x7e], // ASCII
  [0xa0, 0xff], // Latin-1 supplement (accents)
  [0x100, 0x17f], // Latin Extended-A
  [0x400, 0x45f], // Cyrillic
]
const EXTRA = ['‐', '–', '—', '‘', '’', '“', '”', '…', '→']

const chars = []
for (const [lo, hi] of RANGES) for (let c = lo; c <= hi; c++) chars.push(String.fromCharCode(c))
chars.push(...EXTRA)

const browser = await chromium.launch({ channel: process.env.E2E_CHANNEL ?? 'msedge' })
const page = await browser.newPage()
await page.goto(ORIGIN, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)

const widths = await page.evaluate((list) => {
  const cx = document.createElement('canvas').getContext('2d')
  cx.font = '900 100px Fraunces'
  const out = {}
  for (const ch of list) {
    const w = cx.measureText(ch).width / 100
    if (w > 0) out[ch] = Math.round(w * 1000) / 1000
  }
  return out
}, chars)

await browser.close()

if (Object.keys(widths).length < 200) {
  throw new Error(`only ${Object.keys(widths).length} glyphs measured — is Fraunces actually loaded?`)
}
writeFileSync(OUT, `${JSON.stringify(widths, null, 0)}\n`)
console.log(`wrote ${Object.keys(widths).length} advance widths to tests/fixtures/display-widths.json`)
