#!/usr/bin/env node
// Tells Bing/Yandex that the live URLs changed. It reads the LIVE sitemap, so it can only
// ever submit URLs the deploy actually serves.
// Usage: node scripts/indexnow-submit.mjs [base-url]

const HOST = 'autofract.com'
// Must match INDEXNOW_KEY in data/site.ts and the file served at /<key>.txt.
const KEY = '71941287867c0501ef0bc910bd8b9926'
const BATCH = 100

const base = (process.argv[2] ?? `https://${HOST}`).replace(/\/$/, '')
const keyLocation = `${base}/${KEY}.txt`

const res = await fetch(`${base}/sitemap.xml`, { headers: { accept: 'application/xml' } })
if (!res.ok) {
  console.error(`sitemap ${res.status} at ${base}/sitemap.xml`)
  process.exit(1)
}
const xml = await res.text()
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
if (!urls.length) {
  console.error('no <loc> entries in the sitemap')
  process.exit(1)
}
console.log(`sitemap: ${urls.length} urls`)

const keyRes = await fetch(keyLocation)
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : ''
if (keyBody !== KEY) {
  console.error(`key file ${keyRes.status} at ${keyLocation} — body ${JSON.stringify(keyBody.slice(0, 64))}`)
  process.exit(1)
}
console.log(`key file: 200 ${keyLocation}`)

let failed = false
for (let i = 0; i < urls.length; i += BATCH) {
  const urlList = urls.slice(i, i + BATCH)
  const r = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
  })
  const text = await r.text().catch(() => '')
  console.log(`batch ${i / BATCH + 1}: ${urlList.length} urls → HTTP ${r.status} ${text.slice(0, 200)}`)
  if (r.status !== 200 && r.status !== 202) failed = true
}
process.exit(failed ? 1 : 0)
