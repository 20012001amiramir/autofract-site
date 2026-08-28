/**
 * Rasterise public/favicon.svg into the icon ladder in data/icons.ts.
 *
 * The mark is drawn in the generic `serif` family, and every rasteriser
 * resolves that name differently — the SVG library bundled with sharp picks a
 * grotesque, a browser picks a true serif. A browser is what a visitor sees in
 * the tab, so a browser is what rasterises here: one high-resolution master
 * screenshot, then every size is a downscale of that master. Rendering each
 * size separately would let per-size hinting change the letterform.
 *
 * Run locally (`npm run generate:icons`) and commit the output — the build
 * image has no browser and no fonts, exactly like the OG cards.
 */

import { chromium } from '@playwright/test'
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  APPLE_TOUCH_PATH,
  APPLE_TOUCH_SIZE,
  FAVICON_ICO_PATH,
  ICON_BACKGROUND,
  ICON_SIZES,
  ICO_SIZES,
  iconPath,
} from '../data/icons'

const root = resolve(import.meta.dirname, '..')
const pub = (p: string) => resolve(root, `public${p}`)

/** Master render size. A power-of-two multiple of every target below it. */
const MASTER = 1024

/**
 * The file declares width/height="32" so a bare <img> gets an intrinsic box.
 * Only the viewBox matters for scaling, so the opening tag loses both — the
 * inner <rect width="32"> must keep its own, hence the tag-scoped replace.
 */
function scalable(svg: string): string {
  return svg.replace(/<svg\b[^>]*>/, tag => tag.replace(/\s(?:width|height)="[^"]*"/g, ''))
}

async function renderMaster(): Promise<Buffer> {
  const svg = scalable(readFileSync(pub('/favicon.svg'), 'utf8'))
  const browser = await chromium.launch({ channel: process.env.E2E_CHANNEL ?? 'msedge' })
  try {
    const page = await browser.newPage({
      viewport: { width: MASTER, height: MASTER },
      deviceScaleFactor: 1,
    })
    await page.setContent(
      `<style>html,body{margin:0;padding:0;background:transparent}`
      + `svg{display:block;width:${MASTER}px;height:${MASTER}px}</style>${svg}`,
      { waitUntil: 'load' },
    )
    // Transparent outside the mark's rounded corners; the rest is the tile.
    return await page.screenshot({ omitBackground: true })
  }
  finally {
    await browser.close()
  }
}

/** One 32-bit bottom-up DIB, the shape an .ico entry holds. */
function dib(size: number, rgba: Buffer): Buffer {
  const header = Buffer.alloc(40)
  const xor = Buffer.alloc(size * size * 4)
  // 1bpp transparency mask, rows padded to a 4-byte boundary. Left at zero:
  // every pixel is opaque, because the source was flattened first.
  const maskStride = ((size + 31) >> 5) << 2
  const and = Buffer.alloc(maskStride * size)

  for (let y = 0; y < size; y++) {
    const src = (size - 1 - y) * size * 4 // DIB rows run bottom-up
    const dst = y * size * 4
    for (let x = 0; x < size; x++) {
      const s = src + x * 4
      const d = dst + x * 4
      xor[d] = rgba[s + 2] // B
      xor[d + 1] = rgba[s + 1] // G
      xor[d + 2] = rgba[s] // R
      xor[d + 3] = rgba[s + 3] // A
    }
  }

  header.writeUInt32LE(40, 0) // biSize
  header.writeInt32LE(size, 4) // biWidth
  header.writeInt32LE(size * 2, 8) // biHeight — colour rows plus mask rows
  header.writeUInt16LE(1, 12) // biPlanes
  header.writeUInt16LE(32, 14) // biBitCount
  header.writeUInt32LE(0, 16) // biCompression = BI_RGB
  header.writeUInt32LE(xor.length + and.length, 20) // biSizeImage
  return Buffer.concat([header, xor, and])
}

/** ICONDIR + one ICONDIRENTRY per image + the DIBs they point at. */
function ico(images: { size: number; rgba: Buffer }[]): Buffer {
  const dir = Buffer.alloc(6 + images.length * 16)
  dir.writeUInt16LE(0, 0) // reserved
  dir.writeUInt16LE(1, 2) // type: icon
  dir.writeUInt16LE(images.length, 4)

  const bodies: Buffer[] = []
  let offset = dir.length
  images.forEach(({ size, rgba }, i) => {
    const body = dib(size, rgba)
    const e = 6 + i * 16
    dir.writeUInt8(size >= 256 ? 0 : size, e) // 0 means 256
    dir.writeUInt8(size >= 256 ? 0 : size, e + 1)
    dir.writeUInt8(0, e + 2) // palette entries — none, it is true colour
    dir.writeUInt8(0, e + 3) // reserved
    dir.writeUInt16LE(1, e + 4) // planes
    dir.writeUInt16LE(32, e + 6) // bits per pixel
    dir.writeUInt32LE(body.length, e + 8)
    dir.writeUInt32LE(offset, e + 12)
    offset += body.length
    bodies.push(body)
  })
  return Buffer.concat([dir, ...bodies])
}

const master = await renderMaster()

// Transparent PNGs: a rounded tile that sits on any surface.
for (const size of ICON_SIZES) {
  await sharp(master)
    .resize(size, size, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(pub(iconPath(size)))
}

// iOS squares the icon off and rounds it itself, so it needs no alpha at all.
await sharp(master)
  .resize(APPLE_TOUCH_SIZE, APPLE_TOUCH_SIZE, { kernel: 'lanczos3' })
  .flatten({ background: ICON_BACKGROUND })
  .removeAlpha()
  .png({ compressionLevel: 9 })
  .toFile(pub(APPLE_TOUCH_PATH))

const entries = []
for (const size of ICO_SIZES) {
  const rgba = await sharp(master)
    .resize(size, size, { kernel: 'lanczos3' })
    .flatten({ background: ICON_BACKGROUND })
    .ensureAlpha()
    .raw()
    .toBuffer()
  entries.push({ size, rgba })
}
writeFileSync(pub(FAVICON_ICO_PATH), ico(entries))

console.log(`${ICON_SIZES.length} PNGs + apple-touch-icon + ${ICO_SIZES.join('/')} .ico → public/`)
