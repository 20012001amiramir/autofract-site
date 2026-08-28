/**
 * The studio's public surface: small free tools that live on their own
 * subdomains, and the two products with their own domains.
 *
 * Every promo page under /tools/<slug> is driven from here; long-form copy
 * lives in content/tools/<locale>.ts.
 */

import { DEFAULT_LOCALE, type Locale } from './locales'

export const TOOLS = ['redline', 'overlap', 'costof'] as const
export type ToolSlug = typeof TOOLS[number]

export interface ToolMeta {
  /** Canonical origin of the tool, no trailing slash. */
  url: string
  /** Shown as the visible link label. */
  host: string
  accent: string
  /** schema.org applicationCategory. */
  category: 'BusinessApplication' | 'UtilityApplication' | 'FinanceApplication'
  /**
   * Locales the tool itself serves. A language that is not listed gets the
   * tool's English root instead of a URL that would 404.
   */
  locales: readonly Locale[]
}

const ALL_LOCALES: readonly Locale[] = ['en', 'ru', 'de', 'es', 'fr', 'pt']

export const TOOL_META: Record<ToolSlug, ToolMeta> = {
  redline: {
    url: 'https://redline.autofract.com',
    host: 'redline.autofract.com',
    accent: '#f38ba8',
    category: 'BusinessApplication',
    // Extend as the tool ships more languages — an unlisted locale links to the root.
    locales: ALL_LOCALES,
  },
  overlap: {
    url: 'https://overlap.autofract.com',
    host: 'overlap.autofract.com',
    accent: '#94e2d5',
    category: 'UtilityApplication',
    locales: ALL_LOCALES,
  },
  costof: {
    url: 'https://costof.autofract.com',
    host: 'costof.autofract.com',
    accent: '#f9e2af',
    category: 'FinanceApplication',
    locales: ALL_LOCALES,
  },
}

/** Deep link into a tool in the reader's own language, when the tool has it. */
export function toolHref(slug: ToolSlug, locale: Locale): string {
  const meta = TOOL_META[slug]
  if (locale === DEFAULT_LOCALE || !meta.locales.includes(locale)) return `${meta.url}/`
  return `${meta.url}/${locale}/`
}

export const PRODUCTS = ['relocating', 'frontdesk'] as const
export type ProductSlug = typeof PRODUCTS[number]

export interface ProductMeta {
  url: string
  host: string
  accent: string
  /** The case study already on this site — an internal link for every product card. */
  caseSlug: string
}

export const PRODUCT_META: Record<ProductSlug, ProductMeta> = {
  relocating: {
    url: 'https://relocating.app',
    host: 'relocating.app',
    accent: '#7dd3fc',
    caseSlug: 'relocating',
  },
  frontdesk: {
    url: 'https://frontdeskreview.com',
    host: 'frontdeskreview.com',
    accent: '#3ecf8e',
    caseSlug: 'frontdesk',
  },
}
