/**
 * Site icons — the mark a search engine draws next to every result.
 *
 * Google renders a favicon in the result row and only accepts a square whose
 * side is a multiple of 48, so the PNG ladder starts at 48 rather than at the
 * 16/32 a browser tab would happily settle for. It also fetches /favicon.ico
 * blind, without reading the head, which is why the .ico ships even though no
 * modern browser needs it.
 *
 * One list here drives scripts/generate-icons.ts, the <link> tags in
 * nuxt.config, public/site.webmanifest and the unit test that fails when a
 * file is missing or the wrong size.
 */

/**
 * The ladder a crawler picks from. Every side is a multiple of 48 because
 * Google discards a favicon that is not — which is the whole reason 512 is not
 * in this list: it is a manifest size, not a search size.
 */
export const CRAWLER_SIZES = [48, 96, 144, 192] as const

/** The pair a web manifest is expected to carry for installation. */
export const MANIFEST_SIZES = [192, 512] as const

/** Every PNG generated into public/ — the two ladders, deduplicated. */
export const ICON_SIZES = [...new Set([...CRAWLER_SIZES, ...MANIFEST_SIZES])].sort((a, b) => a - b)

/** Sizes packed into the multi-resolution favicon.ico. */
export const ICO_SIZES = [16, 32, 48] as const

/** iOS home screen. One size, and it is composited on an opaque tile. */
export const APPLE_TOUCH_SIZE = 180

export const FAVICON_SVG_PATH = '/favicon.svg'
export const FAVICON_ICO_PATH = '/favicon.ico'
export const APPLE_TOUCH_PATH = '/apple-touch-icon.png'
export const MANIFEST_PATH = '/site.webmanifest'

export function iconPath(size: number): string {
  return `/favicon-${size}.png`
}

/**
 * The mark paints its own tile — a cream square the SVG draws before the
 * letter. Formats that cannot hold transparency are flattened onto it, so the
 * rounded corners fill with the tile colour instead of going black. The unit
 * test pins this to the fill the SVG actually uses.
 */
export const ICON_BACKGROUND = '#faf8f3'

/**
 * Head links, in the order a browser should read them: the SVG first, because
 * it is the only lossless one and the only one that stays sharp at any size.
 * The raster ladder below it is what crawlers take.
 */
export const ICON_LINKS = [
  { rel: 'icon', type: 'image/svg+xml', href: FAVICON_SVG_PATH },
  ...ICON_SIZES.map(size => ({
    rel: 'icon',
    type: 'image/png',
    sizes: `${size}x${size}`,
    href: iconPath(size),
  })),
  { rel: 'icon', type: 'image/x-icon', sizes: ICO_SIZES.map(s => `${s}x${s}`).join(' '), href: FAVICON_ICO_PATH },
  { rel: 'apple-touch-icon', sizes: `${APPLE_TOUCH_SIZE}x${APPLE_TOUCH_SIZE}`, href: APPLE_TOUCH_PATH },
  { rel: 'manifest', href: MANIFEST_PATH },
]

/** Every icon file that must exist in public/, as a site-relative path. */
export const ICON_FILES = [
  FAVICON_SVG_PATH,
  FAVICON_ICO_PATH,
  APPLE_TOUCH_PATH,
  MANIFEST_PATH,
  ...ICON_SIZES.map(iconPath),
]
