import { describe, it, expect } from 'vitest'
import { MAIL_LINK_ORIGINS, mailLinkTarget } from '~/data/mailLinks'

describe('mail links', () => {
  it('sends each name to its own product, token and all', () => {
    expect(mailLinkTarget('letter/pass/2f9c41a8e07b')).toBe('https://whatsthisletter.com/pass/2f9c41a8e07b')
    expect(mailLinkTarget('record/r/7b3e10c4a92f')).toBe('https://weatherreceipt.com/r/7b3e10c4a92f')
  })

  it('keeps a trailing slash, which the products route on', () => {
    expect(mailLinkTarget('/record/check/')).toBe('https://weatherreceipt.com/check/')
    expect(mailLinkTarget('/letter/')).toBe('https://whatsthisletter.com/')
  })

  it('carries the query along', () => {
    expect(mailLinkTarget('record/check/', 'a=Berlin&d=2026-08-15')).toBe('https://weatherreceipt.com/check/?a=Berlin&d=2026-08-15')
    expect(mailLinkTarget('letter/pass/abc', '?lang=de')).toBe('https://whatsthisletter.com/pass/abc?lang=de')
  })

  it('refuses a name that is not ours', () => {
    expect(mailLinkTarget('evil.com/steal')).toBeNull()
    expect(mailLinkTarget('')).toBeNull()
    expect(mailLinkTarget('/')).toBeNull()
  })

  // The whole point of the hop is that autofract.com keeps its standing. Nothing in the request may
  // move the destination off the product it names.
  it('cannot be pointed at another host', () => {
    for (const input of ['letter//evil.com/x', 'letter/../../evil.com', 'letter/https://evil.com', 'letter/@evil.com', 'letter/%2F%2Fevil.com']) {
      const out = mailLinkTarget(input)
      expect(out, input).not.toBeNull()
      expect(new URL(out!).host, input).toBe('whatsthisletter.com')
    }
  })

  it('refuses a newline that would split the response', () => {
    expect(mailLinkTarget('letter/pass\r\nLocation: https://evil.com')).toBeNull()
    expect(mailLinkTarget('letter/pass', 'a=1\r\nX: y')).toBeNull()
  })

  it('points only at the studio own domains', () => {
    for (const origin of Object.values(MAIL_LINK_ORIGINS)) {
      expect(origin).toMatch(/^https:\/\/[a-z0-9.-]+$/)
      expect(origin.endsWith('/')).toBe(false)
    }
  })
})
