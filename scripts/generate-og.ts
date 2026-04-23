import sharp from 'sharp'
import { resolve } from 'node:path'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#faf8f3"/>
  <text x="80" y="140" font-family="serif" font-size="28" fill="#6b6560" letter-spacing="6">AUTOFRACT — A STUDIO</text>
  <text x="80" y="360" font-family="serif" font-weight="900" font-size="180" fill="#0a0a0a" letter-spacing="-4">Companions,</text>
  <text x="80" y="540" font-family="serif" font-weight="900" font-size="180" fill="#0a0a0a" letter-spacing="-4">not tools.</text>
</svg>
`.trim()

const outPath = resolve('public/og-image.png')
await sharp(Buffer.from(svg)).png().toFile(outPath)
console.log(`✔ Wrote ${outPath}`)
