import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { track, trackHireClick, trackProductClick, trackToolClick } from '~/lib/track'
import { PRODUCTS, TOOLS } from '~/data/tools'

const root = resolve(__dirname, '../..')
const read = (p: string) => readFileSync(resolve(root, p), 'utf8')

type Sent = [string, Record<string, unknown> | undefined]

function capture(): Sent[] {
  const sent: Sent[] = []
  ;(globalThis as Record<string, unknown>).umami = {
    track: (name: string, data?: Record<string, unknown>) => { sent.push([name, data]) },
  }
  return sent
}

beforeEach(() => { delete (globalThis as Record<string, unknown>).umami })
afterEach(() => { delete (globalThis as Record<string, unknown>).umami })

describe('track', () => {
  it('is a no-op when the tracker never loaded', () => {
    expect(() => track('tool_click', { tool: 'redline', from: 'hub' })).not.toThrow()
  })

  it('survives a tracker that throws', () => {
    ;(globalThis as Record<string, unknown>).umami = {
      track: () => { throw new Error('blocked') },
    }
    expect(() => trackToolClick('redline', 'hub')).not.toThrow()
  })

  it('sends the slug and the surface, and nothing else', () => {
    const sent = capture()
    trackToolClick('overlap', 'promo')
    trackProductClick('relocating', 'case')
    trackHireClick('footer')
    expect(sent).toEqual([
      ['tool_click', { tool: 'overlap', from: 'promo' }],
      ['product_click', { product: 'relocating', from: 'case' }],
      ['hire_click', { from: 'footer' }],
    ])
    for (const [, data] of sent) expect(Object.keys(data ?? {}).length).toBeLessThanOrEqual(2)
  })

  it('only ever names a real tool or product', () => {
    const sent = capture()
    for (const t of TOOLS) trackToolClick(t, 'hub')
    for (const p of PRODUCTS) trackProductClick(p, 'hub')
    expect(sent.filter(([n]) => n === 'tool_click').map(([, d]) => d!.tool)).toEqual([...TOOLS])
    expect(sent.filter(([n]) => n === 'product_click').map(([, d]) => d!.product)).toEqual([...PRODUCTS])
  })
})

describe('the links that carry the events', () => {
  // The number that decides what gets built next only holds if no outbound link
  // to a tool or a product ever ships without its event attached.
  const OUTBOUND = [
    { file: 'pages/tools/index.vue', hrefs: [':href="c.href"', ':href="p.meta.url"'] },
    { file: 'pages/tools/[slug].vue', hrefs: [':href="href"'] },
    { file: 'pages/work/[slug].vue', hrefs: [':href="meta.link"'] },
  ]

  it('every outbound link to a tool or a product fires an event', () => {
    for (const { file, hrefs } of OUTBOUND) {
      const src = read(file)
      for (const href of hrefs) {
        const anchors = src.split(href).slice(1)
        expect(anchors.length, `${file} ${href}`).toBeGreaterThan(0)
        // The @click sits inside the same tag, i.e. before the tag closes.
        for (const tail of anchors) {
          const tag = tail.slice(0, tail.indexOf('>'))
          expect(tag, `${file} ${href}`).toMatch(/@click="[^"]*track(Tool|Product)Click\(/)
        }
      }
    }
  })

  it('every hire call to action fires an event', () => {
    for (const file of ['components/TheHero.vue', 'components/SiteFooter.vue', 'pages/tools/index.vue', 'pages/work/[slug].vue']) {
      const src = read(file)
      const anchors = src.split(`:to="localePath('/hire')"`).slice(1)
      expect(anchors.length, file).toBe(1)
      const tag = anchors[0].slice(0, anchors[0].indexOf('>'))
      expect(tag, file).toMatch(/@click="trackHireClick\('(home|hub|case|footer)'\)"/)
    }
  })

  it('never reads a form field or a typed value', () => {
    const src = read('lib/track.ts')
    expect(src).not.toMatch(/value|input|innerText|textContent|location\.(href|search)|document\./)
  })
})
