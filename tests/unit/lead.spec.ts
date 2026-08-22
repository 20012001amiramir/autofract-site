import { describe, it, expect } from 'vitest'
import { validateLead } from '~/server/utils/lead'
import en from '~/i18n/locales/en.json'
import ru from '~/i18n/locales/ru.json'
import de from '~/i18n/locales/de.json'
import fr from '~/i18n/locales/fr.json'

const valid = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  company: 'Acme',
  interest: 'build',
  budget: '4-10k',
  message: 'We need an autonomous pipeline that publishes reports daily.',
  website: '',
  elapsed: 15000,
}

describe('validateLead', () => {
  it('accepts a valid lead', () => {
    const v = validateLead(valid)
    expect(v.ok).toBe(true)
    expect(v.lead?.email).toBe('jane@example.com')
  })

  it('silently drops honeypot submissions', () => {
    const v = validateLead({ ...valid, website: 'http://spam.example' })
    expect(v.ok).toBe(false)
    expect(v.silentDrop).toBe(true)
  })

  it('flags fast submissions as suspect but still accepts them', () => {
    const v = validateLead({ ...valid, elapsed: 500 })
    expect(v.ok).toBe(true)
    expect(v.suspect).toBe(true)
    expect(v.silentDrop).toBeUndefined()
  })

  it('flags missing timer as suspect', () => {
    const { elapsed, ...noTimer } = valid
    const v = validateLead(noTimer)
    expect(v.ok).toBe(true)
    expect(v.suspect).toBe(true)
  })

  it('does not flag a normal-speed submission', () => {
    const v = validateLead(valid)
    expect(v.ok).toBe(true)
    expect(v.suspect).toBe(false)
  })

  it('rejects bad email', () => {
    expect(validateLead({ ...valid, email: 'not-an-email' }).error).toBe('email')
  })

  it('rejects short message', () => {
    expect(validateLead({ ...valid, message: 'hi' }).error).toBe('message')
  })

  it('rejects unknown interest and budget', () => {
    expect(validateLead({ ...valid, interest: 'hack' }).error).toBe('interest')
    expect(validateLead({ ...valid, budget: '1e9' }).error).toBe('budget')
  })

  it('rejects oversized fields', () => {
    expect(validateLead({ ...valid, name: 'x'.repeat(200) }).error).toBe('name')
    expect(validateLead({ ...valid, message: 'x'.repeat(6000) }).error).toBe('message')
  })

  it('rejects non-object payloads', () => {
    expect(validateLead(null).ok).toBe(false)
    expect(validateLead('str').ok).toBe(false)
  })
})

describe('hire copy coverage', () => {
  const locales = { en, ru, de, fr }
  for (const [code, m] of Object.entries(locales)) {
    it(`${code} has the hire namespace complete`, () => {
      const h = (m as Record<string, any>).hire
      expect(h, `${code}: hire`).toBeDefined()
      for (const key of ['metaTitle', 'kicker', 'headline', 'sub', 'cta', 'offersNote', 'capsTitle', 'g1', 'g2', 'g3', 'g4']) {
        expect(h[key], `${code}: hire.${key}`).toBeTruthy()
      }
      for (const offer of ['build', 'run', 'rescue']) {
        for (const k of ['label', 'title', 'desc', 'b1', 'b2', 'b3']) {
          expect(h.offers[offer][k], `${code}: hire.offers.${offer}.${k}`).toBeTruthy()
        }
      }
      for (const c of ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']) {
        expect(h.caps[c].t, `${code}: hire.caps.${c}.t`).toBeTruthy()
        expect(h.caps[c].b, `${code}: hire.caps.${c}.b`).toBeTruthy()
      }
      for (const s of ['s1', 's2', 's3', 's4']) {
        expect(h.process[`${s}t`], `${code}: hire.process.${s}t`).toBeTruthy()
        expect(h.process[`${s}b`], `${code}: hire.process.${s}b`).toBeTruthy()
      }
      for (const f of ['f1', 'f2', 'f3', 'f4']) {
        expect(h.faq[`${f}q`], `${code}: hire.faq.${f}q`).toBeTruthy()
        expect(h.faq[`${f}a`], `${code}: hire.faq.${f}a`).toBeTruthy()
      }
      for (const k of ['heading', 'sub', 'name', 'company', 'interest', 'budget', 'message', 'submit', 'sending', 'sentTitle', 'sentBody', 'i_build', 'i_run', 'i_rescue', 'i_other', 'b_unsure']) {
        expect(h.form[k], `${code}: hire.form.${k}`).toBeTruthy()
      }
      const root = m as Record<string, any>
      expect(root.hero.hireCta, `${code}: hero.hireCta`).toBeTruthy()
      expect(root.casepage.hireCta, `${code}: casepage.hireCta`).toBeTruthy()
      expect(root.footer.hire, `${code}: footer.hire`).toBeTruthy()
    })
  }
})
