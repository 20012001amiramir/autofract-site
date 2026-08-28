import { describe, it, expect } from 'vitest'
import { LOCALES, type Locale } from '~/data/locales'
import { TOOLS } from '~/data/tools'
import { CASES } from '~/data/systems'
import { toolsContent } from '~/content/tools'
import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'
import de from '~/i18n/locales/de.json'
import es from '~/i18n/locales/es.json'
import fr from '~/i18n/locales/fr.json'
import pt from '~/i18n/locales/pt.json'

const dicts: Record<Locale, any> = { en, ru, de, es, fr, pt }

/**
 * Display headings are set in Fraunces Black at a `clamp()` floor of 48px (hero)
 * and 36px (chapter). On a 320–360px phone the text column is ~272–312px wide,
 * which fits roughly twelve of those glyphs. A longer unbreakable run leaves the
 * browser two options: push the page sideways, or chop the word mid-syllable —
 * German did the latter on /de/tools/redline ("Kleingedruc / kte"). `hyphens:
 * auto` cannot be relied on (Chromium has no dictionary for every language), so
 * long compounds carry a soft hyphen (U+00AD) at a real syllable boundary.
 */
const MAX_RUN = 12

/** Anywhere a line can break: whitespace, hyphens, dashes, slashes, soft hyphens. */
const BREAKS = /[\s\u00ad\u2014\u2013/,-]+/

function longestRun(text: string): string {
  return text.split(BREAKS).filter(Boolean).sort((a, b) => b.length - a.length)[0] ?? ''
}

function displayStrings(l: Locale): Array<[string, string]> {
  const d = dicts[l]
  const c = toolsContent[l]
  const out: Array<[string, string]> = [
    ['hero.line1', d.hero.line1],
    ['hero.line2', d.hero.line2],
    ['work.heading', d.work.heading],
    ['approach.heading', d.approach.heading],
    ['hire.headline', d.hire.headline],
    ['hire.capsTitle', d.hire.capsTitle],
    ['hire.form.heading', d.hire.form.heading],
    ['studio.headline', d.studio.headline],
    ['tools.strip.heading', d.tools.strip.heading],
    ['error.title404', d.error.title404],
    ['error.titleGeneric', d.error.titleGeneric],
    ['tools.hub.h1', c.hub.h1],
    ['tools.hub.toolsHeading', c.hub.toolsHeading],
    ['tools.hub.productsHeading', c.hub.productsHeading],
    ['tools.hub.faq.h2', c.hub.faq.h2],
  ]
  for (const slug of CASES) {
    out.push([`work.${slug}.headline`, d.work[slug].headline])
    out.push([`work.${slug}.name`, d.work[slug].name])
  }
  for (const slug of TOOLS) {
    const t = c.tools[slug]
    out.push([`tools.${slug}.h1`, t.h1])
    out.push([`tools.${slug}.name`, t.name])
    for (const section of ['what', 'why', 'how', 'useCases', 'faq'] as const) {
      out.push([`tools.${slug}.${section}.h2`, t[section].h2])
    }
  }
  return out
}

describe('display headings fit a phone', () => {
  for (const l of LOCALES) {
    it(`${l} breaks every headline word within ${MAX_RUN} characters`, () => {
      for (const [path, text] of displayStrings(l)) {
        const run = longestRun(text)
        expect(run.length, `${l} · ${path}: "${run}" — add a soft hyphen (\\u00ad)`).toBeLessThanOrEqual(MAX_RUN)
      }
    })
  }

  it('never hides a soft hyphen in a title or a description', () => {
    for (const l of LOCALES) {
      const d = dicts[l]
      const c = toolsContent[l]
      const metas = [
        d.meta.title, d.meta.description, d.hire.metaTitle, d.hire.metaDesc,
        c.hub.meta.title, c.hub.meta.description,
        ...CASES.flatMap(s => [d.work[s].metaTitle, d.work[s].metaDesc]),
        ...TOOLS.flatMap(s => [c.tools[s].meta.title, c.tools[s].meta.description]),
      ]
      for (const text of metas) {
        expect(text.includes('\u00ad'), `${l}: "${text}"`).toBe(false)
      }
    }
  })
})
