import { describe, it, expect } from 'vitest'
import {
  LOCALES,
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  LOCALE_SHORT,
  OG_LOCALE,
  isLocale,
  asLocale,
  localeHref,
  alternates,
  type Locale,
} from '~/data/locales'
import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'
import de from '~/i18n/locales/de.json'
import es from '~/i18n/locales/es.json'
import fr from '~/i18n/locales/fr.json'
import pt from '~/i18n/locales/pt.json'
import { leaves, placeholders, shape } from './helpers'

const dicts: Record<Locale, Record<string, any>> = { en, ru, de, es, fr, pt }

/**
 * A locale joins this list once its dictionary has actually been translated.
 * Until then it ships the English source, which reads worse than a translation
 * but far better than a raw key path.
 */
const TRANSLATED: Locale[] = ['ru', 'de', 'es', 'fr', 'pt']

const BRAND_SUFFIX = ' — Autofract'

describe('locale registry', () => {
  it('has the six studio locales in order, English first', () => {
    expect(LOCALES).toEqual(['en', 'ru', 'de', 'es', 'fr', 'pt'])
    expect(DEFAULT_LOCALE).toBe('en')
  })

  it('labels every locale', () => {
    for (const l of LOCALES) {
      expect(LOCALE_LABELS[l], l).toBeTruthy()
      expect(LOCALE_SHORT[l], l).toMatch(/^[A-Z]{2}$/)
      expect(OG_LOCALE[l], l).toMatch(/^[a-z]{2}_[A-Z]{2}$/)
    }
  })

  it('isLocale accepts every locale and nothing else', () => {
    for (const l of LOCALES) expect(isLocale(l)).toBe(true)
    for (const v of ['zz', '', 'EN', undefined, null, 7]) expect(isLocale(v)).toBe(false)
    expect(asLocale('zz')).toBe('en')
    expect(asLocale('pt')).toBe('pt')
  })

  it('puts English at the root and every other locale under its prefix', () => {
    expect(localeHref('en', '/')).toBe('/')
    expect(localeHref('en', '/tools')).toBe('/tools')
    for (const l of LOCALES.filter(x => x !== 'en')) {
      expect(localeHref(l, '/')).toBe(`/${l}`)
      expect(localeHref(l, '/tools/overlap')).toBe(`/${l}/tools/overlap`)
    }
  })

  it('alternates cover all six locales plus x-default → English', () => {
    const alts = alternates('/tools')
    expect(alts).toHaveLength(LOCALES.length + 1)
    expect(alts.map(a => a.hreflang)).toEqual([...LOCALES, 'x-default'])
    expect(alts.at(-1)!.path).toBe('/tools')
    expect(alts.find(a => a.hreflang === 'pt')!.path).toBe('/pt/tools')
  })
})

describe('dictionaries', () => {
  it('every locale has a dictionary', () => {
    for (const l of LOCALES) expect(dicts[l], l).toBeTruthy()
  })

  it('every locale has exactly the key set of en', () => {
    const base = shape(en).sort()
    for (const l of LOCALES) expect(shape(dicts[l]).sort(), l).toEqual(base)
  })

  it('every locale keeps every placeholder', () => {
    const source = leaves(en)
    for (const l of LOCALES) {
      const target = leaves(dicts[l])
      for (const [path, text] of Object.entries(source)) {
        expect(placeholders(target[path] ?? ''), `${l} · ${path}`).toEqual(placeholders(text))
      }
    }
  })

  it('no value is left blank', () => {
    for (const l of LOCALES) {
      for (const [path, text] of Object.entries(leaves(dicts[l]))) {
        expect(text.trim(), `${l} · ${path}`).not.toBe('')
      }
    }
  })

  it('page titles stay under 60 characters with the brand appended', () => {
    for (const l of LOCALES) {
      const d = dicts[l]
      const titles = [
        d.meta.title,
        d.hire.metaTitle,
        ...Object.values(d.work).filter((v: any) => v && typeof v === 'object' && 'name' in v).map((v: any) => v.name),
      ]
      for (const title of titles) {
        expect(`${title}${BRAND_SUFFIX}`.length, `${l}: ${title}`).toBeLessThanOrEqual(60)
      }
    }
  })

  it('meta descriptions are 120–155 characters', () => {
    for (const l of LOCALES) {
      for (const [key, text] of [['meta.description', dicts[l].meta.description], ['hire.metaDesc', dicts[l].hire.metaDesc]] as const) {
        expect(text.length, `${l} · ${key}: ${text.length} chars`).toBeGreaterThanOrEqual(120)
        expect(text.length, `${l} · ${key}: ${text.length} chars`).toBeLessThanOrEqual(155)
      }
    }
  })

  it('no description anywhere exceeds 155 characters', () => {
    for (const l of LOCALES) {
      for (const slug of Object.keys(dicts[l].work)) {
        const entry = dicts[l].work[slug]
        if (entry && typeof entry === 'object' && 'tagline' in entry) {
          expect(entry.tagline.length, `${l} · work.${slug}.tagline`).toBeLessThanOrEqual(155)
        }
      }
    }
  })

  it('translated locales are actually translated (spot check)', () => {
    for (const l of TRANSLATED) {
      expect(dicts[l].meta.title, l).not.toBe(en.meta.title)
      expect(dicts[l].meta.description, l).not.toBe(en.meta.description)
      expect(dicts[l].hire.metaDesc, l).not.toBe(en.hire.metaDesc)
    }
  })
})
