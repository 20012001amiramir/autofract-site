/**
 * Social cards. One card per page, one PNG per locale — the same list drives
 * scripts/generate-og.ts, the pages that reference an image, and the unit test
 * that fails when a PNG is missing from public/.
 */

import { DEFAULT_LOCALE, type Locale } from './locales'
import { SITE_URL } from './site'
import { CASES } from './systems'
import { TOOLS } from './tools'

/** Public path of a card, without the locale suffix and without `.png`. */
export const OG_CARDS = [
  '/og-image',
  '/og/hire',
  '/og/tools',
  ...TOOLS.map(slug => `/og/tools-${slug}`),
  ...CASES.map(slug => `/og/${slug}`),
] as const

export type OgCard = typeof OG_CARDS[number]

export function ogPath(card: string, locale: Locale): string {
  return locale === DEFAULT_LOCALE ? `${card}.png` : `${card}-${locale}.png`
}

export function ogUrl(card: string, locale: Locale): string {
  return `${SITE_URL}${ogPath(card, locale)}`
}
