/**
 * Site-wide constants. Values that must be identical in the head, the JSON-LD,
 * the sitemap and the build scripts live here and nowhere else.
 */

export const SITE_URL = 'https://autofract.com'
export const SITE_NAME = 'Autofract'
export const SITE_HOST = 'autofract.com'

/** schema.org @id anchors — every per-page node references these. */
export const ORG_ID = `${SITE_URL}/#identity`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const TWITTER_HANDLE = '@autofract'
export const CONTACT_EMAIL = 'info@autofract.com'

/** Cookieless page views, shared by every site in the family. */
export const ANALYTICS_SRC = 'https://analytics.autofract.com/script.js'
export const ANALYTICS_WEBSITE_ID = '989ebc73-ead0-458c-a97d-d525840b8d4b'

/** IndexNow key for this host; the same string is served at /<key>.txt. */
export const INDEXNOW_KEY = '71941287867c0501ef0bc910bd8b9926'

/** Absolute URL for a site-relative path. */
export function abs(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * The site serves and canonicalises every URL without a trailing slash, but the
 * sitemap generator writes the home page as `<origin>/`. One document should not
 * name the same page two ways, so the root is folded back to the canonical form
 * on the way out — in `<loc>` and in the hreflang alternates alike.
 */
export function canonicalizeSitemap(xml: string): string {
  return xml
    .split(`<loc>${SITE_URL}/</loc>`).join(`<loc>${SITE_URL}</loc>`)
    .split(`href="${SITE_URL}/"`).join(`href="${SITE_URL}"`)
}
