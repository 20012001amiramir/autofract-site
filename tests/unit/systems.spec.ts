import { describe, it, expect } from 'vitest'
import { CASES, CASE_META, SYSTEMS, STUDIO_MAP, TYPE_COLORS } from '~/data/systems'
import { LOCALES, type Locale } from '~/data/locales'
import { systemsContent, systemsContentFor, localizedSystem, localizedStudioMap } from '~/content/systems'
import { systemsEn } from '~/content/systems/en'
import { shape } from './helpers'
import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'
import de from '~/i18n/locales/de.json'
import es from '~/i18n/locales/es.json'
import fr from '~/i18n/locales/fr.json'
import pt from '~/i18n/locales/pt.json'

const ALL_MAPS = [...CASES.map(slug => ({ name: slug, map: SYSTEMS[slug] })), { name: 'studio', map: STUDIO_MAP }]

describe('system maps', () => {
  for (const { name, map } of ALL_MAPS) {
    describe(name, () => {
      it('has unique node ids', () => {
        const ids = map.nodes.map(n => n.id)
        expect(new Set(ids).size).toBe(ids.length)
      })

      it('has exactly one core node', () => {
        expect(map.nodes.filter(n => n.type === 'core')).toHaveLength(1)
      })

      it('edges reference existing nodes', () => {
        const ids = new Set(map.nodes.map(n => n.id))
        for (const e of map.edges) {
          expect(ids.has(e.from), `edge from "${e.from}"`).toBe(true)
          expect(ids.has(e.to), `edge to "${e.to}"`).toBe(true)
        }
      })

      it('non-core node types have colors', () => {
        for (const n of map.nodes) {
          if (n.type === 'core') continue
          expect(TYPE_COLORS[n.type], `color for type "${n.type}"`).toMatch(/^#[0-9a-f]{6}$/i)
        }
      })
    })
  }

  it('every case has meta with a hex accent', () => {
    for (const slug of CASES) {
      expect(CASE_META[slug].accent).toMatch(/^#[0-9a-f]{6}$/i)
      expect(SYSTEMS[slug].accent).toBe(CASE_META[slug].accent)
    }
  })
})

/**
 * The maps used to carry English labels and descriptions inline, so the
 * "Inside the system" grid stayed English on all five translated locales.
 * The topology is wordless now; these tests keep it that way.
 */
describe('system map copy', () => {
  it('keeps the topology free of words', () => {
    for (const { name, map } of ALL_MAPS) {
      for (const n of map.nodes) {
        expect(Object.keys(n).sort(), `${name} · ${n.id}`).toEqual(
          n.r === undefined ? ['id', 'type'] : ['id', 'r', 'type'],
        )
      }
    }
  })

  it('every locale mirrors the English copy, key for key', () => {
    const base = shape(systemsEn).sort()
    for (const l of LOCALES) expect(shape(systemsContent[l]).sort(), l).toEqual(base)
  })

  it('names and describes every node of every map', () => {
    for (const l of LOCALES) {
      const copy = systemsContent[l] as unknown as Record<string, Record<string, { label: string, desc: string }>>
      for (const slug of CASES) {
        for (const n of SYSTEMS[slug].nodes) {
          const c = copy[slug][n.id]
          expect(c, `${l} · ${slug}.${n.id}`).toBeTruthy()
          expect(c.label.trim(), `${l} · ${slug}.${n.id}.label`).not.toBe('')
          expect(c.desc.trim(), `${l} · ${slug}.${n.id}.desc`).not.toBe('')
        }
      }
      const studio = systemsContent[l].studio as Record<string, string>
      for (const n of STUDIO_MAP.nodes) {
        expect(studio[n.id]?.trim(), `${l} · studio.${n.id}`).toBeTruthy()
      }
    }
  })

  it('actually translates every description outside English', () => {
    for (const l of LOCALES.filter(x => x !== 'en')) {
      for (const slug of CASES) {
        for (const n of SYSTEMS[slug].nodes) {
          const mine = (systemsContent[l] as any)[slug][n.id].desc as string
          const source = (systemsEn as any)[slug][n.id].desc as string
          expect(mine, `${l} · ${slug}.${n.id}.desc is still English`).not.toBe(source)
        }
      }
    }
  })

  it('applies the copy to the rendered map and falls back to English', () => {
    const es = localizedSystem('relocating', 'es')
    expect(es.nodes.every(n => n.label && n.desc)).toBe(true)
    expect(es.nodes.find(n => n.id === 'core')!.desc).toBe(systemsContent.es.relocating.core.desc)
    expect(es.edges).toEqual(SYSTEMS.relocating.edges)
    expect(localizedSystem('relocating', 'zz').nodes[0].desc).toBe(systemsEn.relocating.core.desc)
    expect(systemsContentFor('zz')).toBe(systemsEn)
    expect(localizedStudioMap('pt' as Locale).nodes.every(n => n.label)).toBe(true)
  })
})

describe('locales cover every case', () => {
  const locales = { en, ru, de, es, fr, pt }
  const requiredKeys = ['name', 'tag', 'blurb', 'headline', 'tagline', 'body1', 'body2', 's1v', 's1l', 's2v', 's2l', 's3v', 's3l', 's4v', 's4l']

  for (const [code, messages] of Object.entries(locales)) {
    it(`${code} has full copy for all cases`, () => {
      for (const slug of CASES) {
        const entry = (messages.work as Record<string, unknown>)[slug] as Record<string, string>
        expect(entry, `${code}: work.${slug}`).toBeDefined()
        for (const key of requiredKeys) {
          expect(entry[key], `${code}: work.${slug}.${key}`).toBeTruthy()
        }
      }
    })
  }
})
