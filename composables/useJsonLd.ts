/**
 * Emit a schema.org @graph as a JSON-LD script tag.
 * Hand-rolled (the nuxt-schema-org module conflicts with sitemap v6's
 * site-config), so we own @id wiring and absolute URLs directly.
 *
 * Rendered at SSR with the request's resolved locale — which is exactly
 * what crawlers read. `key` dedupes across hydration.
 */
export function useJsonLd(key: string, graph: Record<string, unknown>[]): void {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    // prevent a stray "</script>" in data from closing the tag early
    .replace(/</g, '\\u003c')
  useHead({
    script: [{ key: `ld-${key}`, type: 'application/ld+json', innerHTML: json }],
  })
}

export { SITE_URL, ORG_ID, WEBSITE_ID } from '~/data/site'
