import { describe, it, expect } from 'vitest'
import { LOCALES, type Locale } from '~/data/locales'
import { TOOLS } from '~/data/tools'
import { CASES } from '~/data/systems'
import { toolsContent } from '~/content/tools'
import widths from '~/tests/fixtures/display-widths.json'
import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'
import de from '~/i18n/locales/de.json'
import es from '~/i18n/locales/es.json'
import fr from '~/i18n/locales/fr.json'
import pt from '~/i18n/locales/pt.json'

const dicts: Record<Locale, any> = { en, ru, de, es, fr, pt }

/**
 * Display headings are Fraunces Black sized in `vw`, so a word stays about as
 * wide relative to its column at every viewport. When one word is wider than
 * the column the browser must either push the page sideways or break the word.
 * `overflow-wrap: break-word` picks the second, and it chops mid-syllable with
 * no hyphen unless `hyphens: auto` has a dictionary for the language — Chromium
 * ships one for English and German but not for Spanish, Portuguese, French or
 * Russian, which is how "Ferramentas" came out as "Ferramenta / s".
 *
 * So headline copy carries its own break opportunities: a soft hyphen (U+00AD)
 * at a real syllable boundary. Where that is needed is decided by measuring,
 * not by counting characters — "Illinois" and "Herramientas" are the same
 * length and nowhere near the same width. `tests/fixtures/display-widths.json`
 * holds the advance width of every character at 1em, measured from the real
 * face by `scripts/measure-type.mjs`.
 *
 * A budget below is `column ÷ font-size` at the tightest viewport that role
 * reaches, read off tailwind.config.ts and the containers each string renders
 * in. Lower a font size or widen a container and the budget goes up; the
 * numbers here are the contract between the two.
 */
const BUDGET_EM = {
  /** h1 `text-hero` clamp(44px, 13vw, 168px) in max-w-5xl → 1024 ÷ 168 */
  hero: 6.1,
  /** h2 `text-chapter` clamp(34px, 6.5vw, 88px) in max-w-3xl → 640 ÷ 88 */
  chapter: 7.2,
  /** case-card h3 `text-3xl` at 320px, and tier cards → 208 ÷ 30 */
  card: 6.7,
  /** tool-card h3 `text-4xl` at 320px → 208 ÷ 36 */
  toolcard: 5.7,
  /** case-page stat `text-3xl` in a half-width cell at 320px → 120 ÷ 30 */
  stat: 4,
  /** process h3 `text-2xl` in the four-column step grid at 1024px → 194 ÷ 24 */
  quarter: 8,
  /** section h3 `text-xl`/`text-2xl` in the narrowest grid → 247 ÷ 24 */
  sub: 10,
  /** blockquote `text-quote` clamp(28px, 4vw, 48px) at 320px → 272 ÷ 28 */
  quote: 9.5,
} as const
type Role = keyof typeof BUDGET_EM

/** Two display roles set negative tracking, which makes a long word narrower. */
const TRACKING_EM: Record<Role, number> = {
  hero: -0.02, chapter: -0.01, card: 0, toolcard: 0, stat: 0, quarter: 0, sub: 0, quote: 0,
}

const FALLBACK_EM = 0.6

/**
 * Anywhere a line can break: whitespace, a soft hyphen, a real hyphen, a dash,
 * a slash. Not a comma or a full stop — those cannot start a line, so they ride
 * along with the word before them and count towards its width.
 */
const BREAKS = /[\s­—–/-]+/

function emWidth(segment: string, role: Role): number {
  const chars = [...segment]
  const glyphs = chars.reduce((sum, ch) => sum + ((widths as Record<string, number>)[ch] ?? FALLBACK_EM), 0)
  return glyphs + TRACKING_EM[role] * chars.length
}

function displayStrings(l: Locale): Array<[string, string, Role]> {
  const d = dicts[l]
  const c = toolsContent[l]
  const out: Array<[string, string, Role]> = [
    ['hero.line1', d.hero.line1, 'hero'],
    ['hero.line2', d.hero.line2, 'hero'],
    ['hire.headline', d.hire.headline, 'hero'],
    ['error.title404', d.error.title404, 'hero'],
    ['error.titleGeneric', d.error.titleGeneric, 'hero'],
    ['tools.hub.h1', c.hub.h1, 'hero'],
    ['manifesto.body', d.manifesto.body, 'quote'],
    ['work.heading', d.work.heading, 'chapter'],
    ['approach.heading', d.approach.heading, 'chapter'],
    ['hire.capsTitle', d.hire.capsTitle, 'chapter'],
    ['hire.form.heading', d.hire.form.heading, 'chapter'],
    ['studio.headline', d.studio.headline, 'chapter'],
    ['tools.strip.heading', d.tools.strip.heading, 'chapter'],
    ['casepage.hireTitle', d.casepage.hireTitle, 'chapter'],
    ['tools.hub.toolsHeading', c.hub.toolsHeading, 'chapter'],
    ['tools.hub.productsHeading', c.hub.productsHeading, 'chapter'],
    ['tools.hub.faq.h2', c.hub.faq.h2, 'chapter'],
    ['tools.hub.cta.title', c.hub.cta.title, 'chapter'],
    ['hire.form.sentTitle', d.hire.form.sentTitle, 'sub'],
  ]
  for (const key of ['a1', 'a2', 'a3', 'a4'] as const) {
    if (d.approach[`${key}t`]) out.push([`approach.${key}t`, d.approach[`${key}t`], 'sub'])
  }
  for (const key of ['build', 'run', 'rescue'] as const) {
    out.push([`hire.offers.${key}.title`, d.hire.offers[key].title, 'card'])
    out.push([`hire.offers.${key}.label`, d.hire.offers[key].label, 'sub'])
    out.push([`hire.offers.${key}.price`, d.hire.offers[key].price, 'sub'])
  }
  for (const key of ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'] as const) {
    out.push([`hire.caps.${key}.t`, d.hire.caps[key].t, 'sub'])
  }
  for (const key of ['s1', 's2', 's3', 's4'] as const) {
    out.push([`hire.process.${key}t`, d.hire.process[`${key}t`], 'quarter'])
  }
  for (const key of ['f1', 'f2', 'f3', 'f4'] as const) {
    out.push([`hire.faq.${key}q`, d.hire.faq[`${key}q`], 'sub'])
  }
  for (const [i, item] of c.hub.faq.items.entries()) {
    out.push([`tools.hub.faq.items[${i}].q`, item.q, 'sub'])
  }
  for (const slug of CASES) {
    out.push([`work.${slug}.headline`, d.work[slug].headline, 'hero'])
    out.push([`work.${slug}.name`, d.work[slug].name, 'card'])
    for (const n of [1, 2, 3, 4]) {
      out.push([`work.${slug}.s${n}v`, d.work[slug][`s${n}v`], 'stat'])
    }
  }
  for (const slug of TOOLS) {
    const t = c.tools[slug]
    out.push([`tools.${slug}.h1`, t.h1, 'hero'])
    out.push([`tools.${slug}.name`, t.name, 'toolcard'])
    out.push([`tools.${slug}.cta.title`, t.cta.title, 'chapter'])
    for (const section of ['what', 'why', 'how', 'useCases', 'faq'] as const) {
      out.push([`tools.${slug}.${section}.h2`, t[section].h2, 'chapter'])
    }
    for (const [i, s] of t.how.steps.entries()) out.push([`tools.${slug}.how.steps[${i}].h3`, s.h3, 'sub'])
    for (const [i, u] of t.useCases.items.entries()) out.push([`tools.${slug}.useCases[${i}].h3`, u.h3, 'sub'])
    for (const [i, f] of t.faq.items.entries()) out.push([`tools.${slug}.faq[${i}].q`, f.q, 'sub'])
  }
  return out
}

describe('display headings fit their column', () => {
  it('measures the characters headlines are actually set in', () => {
    // A missing table would silently pass every word at the fallback width.
    expect(Object.keys(widths).length).toBeGreaterThan(200)
    expect(widths['H']).toBeGreaterThan(0.5)
  })

  for (const l of LOCALES) {
    it(`${l} can break every headline word inside its column`, () => {
      const tooWide: string[] = []
      for (const [path, text, role] of displayStrings(l)) {
        for (const segment of text.split(BREAKS).filter(Boolean)) {
          const w = emWidth(segment, role)
          if (w > BUDGET_EM[role]) {
            tooWide.push(`${path} (${role}): "${segment}" is ${w.toFixed(2)}em, column is ${BUDGET_EM[role]}em`)
          }
        }
      }
      expect(tooWide, `${l}: add a soft hyphen (\\u00ad) at a syllable boundary in each`).toEqual([])
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
        expect(text.includes('­'), `${l}: "${text}"`).toBe(false)
      }
    }
  })
})
