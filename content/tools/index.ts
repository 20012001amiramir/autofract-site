/**
 * Long-form copy for the tools hub and the per-tool pages, one file per locale.
 * The UI chrome lives in i18n/locales/<code>.json; this is the indexable prose.
 */

import { DEFAULT_LOCALE, type Locale } from '../../data/locales'
import { toolsEn, type ToolsContent } from './en'
import { toolsRu } from './ru'
import { toolsDe } from './de'
import { toolsEs } from './es'
import { toolsFr } from './fr'
import { toolsPt } from './pt'

export type { ToolsContent } from './en'

export const toolsContent: Record<Locale, ToolsContent> = {
  en: toolsEn,
  ru: toolsRu,
  de: toolsDe,
  es: toolsEs,
  fr: toolsFr,
  pt: toolsPt,
}

/** Copy for a locale, falling back to English for anything unknown. */
export function toolsContentFor(locale: string): ToolsContent {
  return toolsContent[locale as Locale] ?? toolsContent[DEFAULT_LOCALE]
}
