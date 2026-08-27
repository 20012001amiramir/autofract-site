/**
 * JSON-LD builders. Each returns a plain node for the @graph that
 * useJsonLd() serialises into a single <script type="application/ld+json">.
 */

import { ORG_ID, abs } from '~/data/site'
import type { Locale } from '~/data/locales'

export interface Crumb {
  name: string
  /** Site-relative path, already localised. */
  path: string
}

/** Breadcrumbs with an `item` URL on every level, leaf included. */
export function breadcrumbList(crumbs: readonly Crumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

export interface FaqItem {
  q: string
  a: string
}

export function faqPage(id: string, items: readonly FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export interface WebApplicationInput {
  id: string
  name: string
  url: string
  description: string
  category: string
  locale: Locale
}

/** A free, browser-based tool published by the studio. */
export function webApplication(input: WebApplicationInput): Record<string, unknown> {
  return {
    '@type': 'WebApplication',
    '@id': input.id,
    name: input.name,
    url: input.url,
    description: input.description,
    applicationCategory: input.category,
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    inLanguage: input.locale,
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': ORG_ID },
  }
}
