import sharp from 'sharp'
import { resolve } from 'node:path'

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#0c0c10"/>
  <text x="80" y="140" font-family="serif" font-size="28" fill="#8c8680" letter-spacing="6">AUTOFRACT — A STUDIO</text>
  <text x="80" y="360" font-family="serif" font-weight="900" font-size="150" fill="#f5f1ea" letter-spacing="-4">Software that</text>
  <text x="80" y="520" font-family="serif" font-weight="900" font-size="150" fill="#f5f1ea" letter-spacing="-4">runs itself<tspan fill="#5eead4">.</tspan></text>
</svg>
`.trim()

const outPath = resolve('public/og-image.png')
await sharp(Buffer.from(svg)).png().toFile(outPath)
console.log(`✔ Wrote ${outPath}`)
