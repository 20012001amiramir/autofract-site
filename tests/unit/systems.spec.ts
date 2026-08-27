import { describe, it, expect } from 'vitest'
import { CASES, CASE_META, SYSTEMS, STUDIO_MAP, TYPE_COLORS } from '~/data/systems'
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
