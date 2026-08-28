/**
 * Localized copy for the system maps, one file per locale.
 *
 * The topology (data/systems.ts) carries no words; this module glues the two
 * together so every node label and tooltip is rendered in the reader's
 * language on /work/<slug> and in the ambient hero map.
 */

import { DEFAULT_LOCALE, type Locale } from '../../data/locales'
import { SYSTEMS, STUDIO_MAP, type CaseSlug, type SystemMapView } from '../../data/systems'
import { systemsEn, type SystemsContent } from './en'
import { systemsRu } from './ru'
import { systemsDe } from './de'
import { systemsEs } from './es'
import { systemsFr } from './fr'
import { systemsPt } from './pt'

export type { SystemsContent } from './en'

export const systemsContent: Record<Locale, SystemsContent> = {
  en: systemsEn,
  ru: systemsRu,
  de: systemsDe,
  es: systemsEs,
  fr: systemsFr,
  pt: systemsPt,
}

/** Copy for a locale, falling back to English for anything unknown. */
export function systemsContentFor(locale: string): SystemsContent {
  return systemsContent[locale as Locale] ?? systemsContent[DEFAULT_LOCALE]
}

/** A case map with every node label and description in the reader's language. */
export function localizedSystem(slug: CaseSlug, locale: string): SystemMapView {
  const copy = systemsContentFor(locale)[slug] as Record<string, { label: string, desc: string }>
  const map = SYSTEMS[slug]
  return {
    ...map,
    nodes: map.nodes.map(n => ({ ...n, label: copy[n.id].label, desc: copy[n.id].desc })),
  }
}

/** The ambient hero map, labelled in the reader's language. Nodes carry no tooltip. */
export function localizedStudioMap(locale: string): SystemMapView {
  const copy = systemsContentFor(locale).studio as Record<string, string>
  return {
    ...STUDIO_MAP,
    nodes: STUDIO_MAP.nodes.map(n => ({ ...n, label: copy[n.id] })),
  }
}
