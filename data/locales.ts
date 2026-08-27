/**
 * Locale registry — the single source of truth for the six studio languages.
 *
 * nuxt.config.ts builds the @nuxtjs/i18n `locales` array from this file, so a
 * language is added in exactly one place: here, plus its dictionary in
 * i18n/locales/<code>.json and its long-form copy in content/tools/<code>.ts.
 */

export const LOCALES = ['en', 'ru', 'de', 'es', 'fr', 'pt'] as const
export type Locale = typeof LOCALES[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** Native name, shown in the language menu. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
}

/** Two-letter badge for the collapsed switcher. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  de: 'DE',
  es: 'ES',
  fr: 'FR',
  pt: 'PT',
}

/** og:locale wants a full territory tag; hreflang stays the bare language code. */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_BR',
}

export function isLocale(v: unknown): v is Locale {
  return typeof v === 'string' && (LOCALES as readonly string[]).includes(v)
}

/** Narrow an arbitrary i18n locale value to a known one (falls back to English). */
export function asLocale(v: unknown): Locale {
  return isLocale(v) ? v : DEFAULT_LOCALE
}

/**
 * Path for a locale under `prefix_except_default`: English at the root,
 * every other language behind its own prefix. No trailing slash — that is the
 * form the site serves without a redirect.
 */
export function localeHref(locale: Locale, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) return p
  return p === '/' ? `/${locale}` : `/${locale}${p}`
}

export interface Alternate {
  hreflang: string
  path: string
}

/** All six locales of `path` plus x-default → the English URL. Reciprocal everywhere. */
export function alternates(path = '/'): Alternate[] {
  return [
    ...LOCALES.map(l => ({ hreflang: l as string, path: localeHref(l, path) })),
    { hreflang: 'x-default', path: localeHref(DEFAULT_LOCALE, path) },
  ]
}
