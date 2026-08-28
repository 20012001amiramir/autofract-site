import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  APPLE_TOUCH_PATH,
  APPLE_TOUCH_SIZE,
  CRAWLER_SIZES,
  FAVICON_ICO_PATH,
  FAVICON_SVG_PATH,
  ICON_BACKGROUND,
  ICON_FILES,
  ICON_LINKS,
  ICON_SIZES,
  ICO_SIZES,
  MANIFEST_PATH,
  MANIFEST_SIZES,
  iconPath,
} from '~/data/icons'
import { SITE_NAME, THEME_COLOR } from '~/data/site'

const root = resolve(__dirname, '../..')
const pub = (p: string) => resolve(root, `public${p}`)

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])

/** Width, height and whether the colour type carries alpha, straight from IHDR. */
function png(path: string) {
  const buf = readFileSync(path)
  expect(buf.subarray(0, 8), `${path} is not a PNG`).toEqual(PNG_MAGIC)
  expect(buf.subarray(12, 16).toString('ascii')).toBe('IHDR')
  const colourType = buf.readUInt8(25)
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
    // Colour types 4 and 6 are the two that carry an alpha channel.
    hasAlpha: (colourType & 4) !== 0,
    bytes: buf.length,
  }
}

/** The sizes packed into an .ico, read out of its directory. */
function icoSizes(path: string): number[] {
  const buf = readFileSync(path)
  expect(buf.readUInt16LE(0), 'ICONDIR reserved field').toBe(0)
  expect(buf.readUInt16LE(2), 'ICONDIR type — 1 is an icon').toBe(1)
  const count = buf.readUInt16LE(4)
  return Array.from({ length: count }, (_, i) => {
    const e = 6 + i * 16
    const width = buf.readUInt8(e)
    expect(buf.readUInt8(e + 1), 'entries must be square').toBe(width)
    expect(buf.readUInt16LE(e + 6), 'true colour, so the mark keeps its edges').toBe(32)
    // The directory must actually point inside the file.
    expect(buf.readUInt32LE(e + 12) + buf.readUInt32LE(e + 8)).toBeLessThanOrEqual(buf.length)
    return width === 0 ? 256 : width // 0 is how an .ico spells 256
  })
}

describe('search-result icons', () => {
  it('ships every file the head and the manifest name', () => {
    for (const file of ICON_FILES) {
      expect(existsSync(pub(file)), `missing public${file} — run npm run generate:icons`).toBe(true)
    }
  })

  it('renders every PNG at exactly the size its name claims', () => {
    for (const size of ICON_SIZES) {
      const { width, height } = png(pub(iconPath(size)))
      expect([width, height], iconPath(size)).toEqual([size, size])
    }
  })

  it('offers a crawler only squares Google accepts — a multiple of 48 a side', () => {
    for (const size of CRAWLER_SIZES) {
      expect(size % 48, `${size}px is not a multiple of 48`).toBe(0)
      expect(ICON_SIZES, `${size}px is declared but never generated`).toContain(size)
    }
  })

  it('gives iOS an opaque tile, because it rounds the corners itself', () => {
    const { width, height, hasAlpha } = png(pub(APPLE_TOUCH_PATH))
    expect([width, height]).toEqual([APPLE_TOUCH_SIZE, APPLE_TOUCH_SIZE])
    expect(hasAlpha, 'a transparent corner turns black on a home screen').toBe(false)
  })

  it('packs the classic sizes into the .ico Google fetches blind', () => {
    expect(icoSizes(pub(FAVICON_ICO_PATH))).toEqual([...ICO_SIZES])
  })

  it('flattens onto the tile the mark itself paints', () => {
    const svg = readFileSync(pub(FAVICON_SVG_PATH), 'utf8')
    const fill = svg.match(/<rect[^>]*\bfill="([^"]+)"/)?.[1]
    expect(fill, 'favicon.svg no longer opens with a filled rect').toBeDefined()
    expect(ICON_BACKGROUND.toLowerCase()).toBe(fill!.toLowerCase())
  })
})

describe('icon head links', () => {
  it('puts the SVG first, so a modern browser stops there', () => {
    expect(ICON_LINKS[0]).toMatchObject({ rel: 'icon', type: 'image/svg+xml', href: FAVICON_SVG_PATH })
  })

  it('points every link at a file that exists', () => {
    for (const link of ICON_LINKS) {
      expect(link.href.startsWith('/'), link.href).toBe(true)
      expect(existsSync(pub(link.href)), `public${link.href}`).toBe(true)
    }
  })

  it('declares the size of every raster it offers', () => {
    for (const link of ICON_LINKS) {
      if (link.href.endsWith('.png') || link.href.endsWith('.ico')) {
        expect(link.sizes, link.href).toMatch(/^\d+x\d+( \d+x\d+)*$/)
      }
    }
  })

  it('is the list nuxt.config actually renders', () => {
    const config = readFileSync(resolve(root, 'nuxt.config.ts'), 'utf8')
    expect(config).toContain('link: ICON_LINKS')
  })
})

describe('web manifest', () => {
  const manifest = JSON.parse(readFileSync(pub(MANIFEST_PATH), 'utf8'))

  it('names the site and paints it the colour the head declares', () => {
    expect(manifest.name).toBe(SITE_NAME)
    expect(manifest.short_name).toBe(SITE_NAME)
    expect(manifest.theme_color).toBe(THEME_COLOR)
    expect(manifest.background_color).toBe(THEME_COLOR)
    expect(manifest.start_url).toBe('/')
  })

  it('references the two installable sizes, and they are committed', () => {
    expect(manifest.icons.map((i: { src: string }) => i.src)).toEqual(MANIFEST_SIZES.map(iconPath))
    for (const icon of manifest.icons) {
      expect(icon.type).toBe('image/png')
      const { width } = png(pub(icon.src))
      expect(icon.sizes).toBe(`${width}x${width}`)
    }
  })
})

describe('crawler reach', () => {
  it('leaves every icon path crawlable', () => {
    const robots = readFileSync(pub('/robots.txt'), 'utf8')
    const blocked = [...robots.matchAll(/^\s*Disallow:\s*(\S+)\s*$/gim)].map(m => m[1])
    for (const file of ICON_FILES) {
      for (const rule of blocked) {
        expect(file.startsWith(rule), `${file} is blocked by "Disallow: ${rule}"`).toBe(false)
      }
    }
  })
})
