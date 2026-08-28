import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { LOCALES, type Locale } from '~/data/locales'
import { TOOLS, TOOL_META, PRODUCTS, PRODUCT_META, toolHref } from '~/data/tools'
import { OG_CARDS, ogPath, ogUrl } from '~/data/og'
import { INDEXNOW_KEY, SITE_URL, abs, canonicalizeSitemap } from '~/data/site'
import { toolsContent, toolsContentFor } from '~/content/tools'
import { toolsEn } from '~/content/tools/en'
import { breadcrumbList, faqPage, webApplication } from '~/composables/seo'
import { CASES } from '~/data/systems'
import { leaves, shape } from './helpers'

const root = resolve(__dirname, '../..')

describe('tools registry', () => {
  it('has unique slugs and a card for each', () => {
    expect(new Set(TOOLS).size).toBe(TOOLS.length)
    for (const slug of TOOLS) {
      const m = TOOL_META[slug]
      expect(m.url, slug).toMatch(/^https:\/\/[a-z0-9.-]+$/)
      expect(m.url.endsWith('/'), slug).toBe(false)
      expect(m.url).toContain(m.host)
      expect(m.accent, slug).toMatch(/^#[0-9a-f]{6}$/i)
      expect(m.locales.length, slug).toBeGreaterThan(0)
      expect(m.locales, slug).toContain('en')
    }
  })

  it('links each language at the tool, and never at a locale the tool lacks', () => {
    for (const slug of TOOLS) {
      const m = TOOL_META[slug]
      expect(toolHref(slug, 'en')).toBe(`${m.url}/`)
      for (const l of LOCALES) {
        const href = toolHref(slug, l)
        expect(href.startsWith(`${m.url}/`), `${slug} · ${l}`).toBe(true)
        expect(href, `${slug} · ${l}`).toBe(m.locales.includes(l) && l !== 'en' ? `${m.url}/${l}/` : `${m.url}/`)
      }
    }
  })

  it('every product points at its own domain and at a case study on this site', () => {
    for (const slug of PRODUCTS) {
      const m = PRODUCT_META[slug]
      expect(m.url).toMatch(/^https:\/\//)
      expect(m.accent).toMatch(/^#[0-9a-f]{6}$/i)
      expect(CASES).toContain(m.caseSlug as typeof CASES[number])
    }
  })
})

describe('tools copy', () => {
  it('every locale mirrors the English file, list for list', () => {
    const base = shape(toolsEn).sort()
    for (const l of LOCALES) expect(shape(toolsContent[l]).sort(), l).toEqual(base)
  })

  it('falls back to English for an unknown locale', () => {
    expect(toolsContentFor('zz')).toBe(toolsContent.en)
    expect(toolsContentFor('pt')).toBe(toolsContent.pt)
  })

  it('covers every tool and every product', () => {
    for (const l of LOCALES) {
      for (const slug of TOOLS) expect(toolsContent[l].tools[slug], `${l} · ${slug}`).toBeTruthy()
      for (const slug of PRODUCTS) expect(toolsContent[l].products[slug], `${l} · ${slug}`).toBeTruthy()
    }
  })

  it('keeps every title under 60 characters and every description 120–155', () => {
    for (const l of LOCALES) {
      const c = toolsContent[l]
      const metas = [c.hub.meta, ...TOOLS.map(s => c.tools[s].meta)]
      for (const m of metas) {
        expect(m.title.length, `${l}: ${m.title}`).toBeLessThanOrEqual(60)
        expect(m.description.length, `${l}: ${m.description.length} chars — ${m.title}`).toBeGreaterThanOrEqual(120)
        expect(m.description.length, `${l}: ${m.description.length} chars — ${m.title}`).toBeLessThanOrEqual(155)
      }
    }
  })

  it('carries a real FAQ, real use cases and real steps', () => {
    expect(toolsEn.hub.faq.items.length).toBeGreaterThanOrEqual(6)
    for (const slug of TOOLS) {
      const t = toolsEn.tools[slug]
      expect(t.faq.items.length, slug).toBeGreaterThanOrEqual(6)
      expect(t.useCases.items.length, slug).toBeGreaterThanOrEqual(3)
      expect(t.how.steps.length, slug).toBeGreaterThanOrEqual(3)
      for (const f of t.faq.items) expect(f.a.length, `${slug} · ${f.q}`).toBeGreaterThan(60)
    }
  })

  it('is long enough to be worth indexing', () => {
    const words = (obj: unknown) => Object.values(leaves(obj)).join(' ').split(/\s+/).length
    expect(words(toolsEn.hub)).toBeGreaterThan(400)
    for (const slug of TOOLS) expect(words(toolsEn.tools[slug]), slug).toBeGreaterThan(600)
  })

  it('leaves no value blank in any locale', () => {
    for (const l of LOCALES) {
      for (const [path, text] of Object.entries(leaves(toolsContent[l]))) {
        expect(text.trim(), `${l} · ${path}`).not.toBe('')
      }
    }
  })
})

describe('json-ld', () => {
  it('describes a free tool published by the studio', () => {
    for (const l of LOCALES) {
      const obj = webApplication({
        id: `${SITE_URL}/tools/overlap#app`,
        name: 'Overlap',
        url: TOOL_META.overlap.url,
        description: 'desc',
        category: TOOL_META.overlap.category,
        locale: l as Locale,
      }) as Record<string, any>
      expect(obj['@type']).toBe('WebApplication')
      expect(obj.url).toBe('https://overlap.autofract.com')
      expect(obj.inLanguage).toBe(l)
      expect(obj.offers.price).toBe('0')
      expect(obj.isAccessibleForFree).toBe(true)
    }
  })

  it('gives every breadcrumb level an absolute item URL', () => {
    const obj = breadcrumbList([
      { name: 'Autofract', path: '/fr' },
      { name: 'Tools', path: '/fr/tools' },
      { name: 'Overlap', path: '/fr/tools/overlap' },
    ]) as Record<string, any>
    expect(obj.itemListElement.map((i: any) => i.position)).toEqual([1, 2, 3])
    for (const item of obj.itemListElement) expect(item.item).toMatch(/^https:\/\/autofract\.com\//)
    expect(obj.itemListElement[2].item).toBe(`${SITE_URL}/fr/tools/overlap`)
  })

  it('carries every FAQ question and cannot break out of a script tag', () => {
    const obj = faqPage(`${SITE_URL}/tools#faq`, toolsEn.hub.faq.items) as Record<string, any>
    expect(obj.mainEntity).toHaveLength(toolsEn.hub.faq.items.length)
    expect(obj.mainEntity[0].name).toBe(toolsEn.hub.faq.items[0].q)
    expect(JSON.stringify(obj)).not.toContain('</script')
  })

  it('builds absolute urls', () => {
    expect(abs('/tools')).toBe(`${SITE_URL}/tools`)
    expect(abs('tools')).toBe(`${SITE_URL}/tools`)
  })
})

describe('social cards', () => {
  it('names one PNG per card per locale', () => {
    expect(ogPath('/og/tools', 'en')).toBe('/og/tools.png')
    expect(ogPath('/og/tools', 'ru')).toBe('/og/tools-ru.png')
    expect(ogUrl('/og/tools', 'de')).toBe(`${SITE_URL}/og/tools-de.png`)
  })

  it('has every one of those PNGs committed', () => {
    for (const card of OG_CARDS) {
      for (const l of LOCALES) {
        const file = resolve(root, `public${ogPath(card, l)}`)
        expect(existsSync(file), `missing public${ogPath(card, l)} — run npm run generate:og`).toBe(true)
      }
    }
  })
})

describe('crawler files', () => {
  it('robots.txt points at a sitemap on this host and hides the api', () => {
    const robots = readFileSync(resolve(root, 'public/robots.txt'), 'utf8')
    expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`)
    expect(robots).toContain('Disallow: /api/')
  })

  it('names the home page in the sitemap the way its canonical does', () => {
    const xml = [
      `<url><loc>${SITE_URL}/</loc>`,
      `<xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/" />`,
      `<xhtml:link rel="alternate" hreflang="ru" href="${SITE_URL}/ru" />`,
      `<loc>${SITE_URL}/tools</loc></url>`,
    ].join('')
    const out = canonicalizeSitemap(xml)
    expect(out).toContain(`<loc>${SITE_URL}</loc>`)
    expect(out).toContain(`hreflang="en" href="${SITE_URL}"`)
    expect(out).not.toContain(`${SITE_URL}/"`)
    // Everything below the root keeps its path untouched.
    expect(out).toContain(`<loc>${SITE_URL}/tools</loc>`)
    expect(out).toContain(`href="${SITE_URL}/ru"`)
  })

  it('serves the IndexNow key that the submit script uses', () => {
    const file = readFileSync(resolve(root, `public/${INDEXNOW_KEY}.txt`), 'utf8').trim()
    expect(file).toBe(INDEXNOW_KEY)
    const script = readFileSync(resolve(root, 'scripts/indexnow-submit.mjs'), 'utf8')
    expect(script).toContain(INDEXNOW_KEY)
  })
})
