/**
 * Product events for the shared analytics. Two rules hold everywhere this is
 * called from:
 *
 * 1. The tracker is loaded with `defer` and is blocked outright for a good
 *    share of readers, so every call has to survive its absence without taking
 *    the page down with it.
 * 2. Nothing a reader typed or pasted is ever sent. The lead form's own answers
 *    already land in our database; the analytics has no business seeing them a
 *    second time, and nothing here reads a field.
 *
 * What we send is what the database cannot see: which way people went, and from
 * which surface they went there. Every property below is a slug from a closed
 * set the compiler enforces — never free text, never a path, never a title.
 */

import type { ProductSlug, ToolSlug } from '~/data/tools'

type EventData = Record<string, string | number | boolean>

interface Tracker {
  track: (name: string, data?: EventData) => void
}

export function track(name: string, data?: EventData): void {
  try {
    (window as unknown as { umami?: Tracker }).umami?.track(name, data)
  }
  catch {
    /* analytics must never break the page */
  }
}

/**
 * Surfaces that send a reader out to a tool's own domain: the /tools hub card
 * and the /tools/<slug> promo page. The home strip and the hub headline lead to
 * the promo page instead, and a page view already counts those.
 */
export type ToolSource = 'hub' | 'promo'

/** Surfaces that send a reader out to a product: the hub card, the case page. */
export type ProductSource = 'hub' | 'case'

/** Surfaces carrying a link to /hire. */
export type HireSource = 'home' | 'hub' | 'case' | 'footer'

/**
 * A reader left for the tool itself. The one number that says which tool the
 * studio should build on next.
 */
export function trackToolClick(tool: ToolSlug, from: ToolSource): void {
  track('tool_click', { tool, from })
}

/** A reader left for one of the two products that are not tools. */
export function trackProductClick(product: ProductSlug, from: ProductSource): void {
  track('product_click', { product, from })
}

/** A reader took the studio up on the offer to hire it. */
export function trackHireClick(from: HireSource): void {
  track('hire_click', { from })
}
