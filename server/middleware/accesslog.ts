// One line per page request, on stdout.
//
// The site sits behind a proxy that keeps no log of its own, and the analytics tracker only sees a
// client that runs JavaScript — which an assistant fetching a page for someone does not. Without
// this there is no way to tell whether the machine-readable layer here is ever read, and that is
// the number the whole approach is judged on.
//
// Assets are left out on purpose: one line per page keeps the log a count of readers, not of files.
const ASSET = /^\/(?:_nuxt|_ipx|_fonts|assets)\/|\.(?:css|js|mjs|map|png|jpe?g|svg|webp|avif|ico|gif|woff2?|ttf)$/i

export default defineEventHandler((event) => {
  const path = (event.path || '/').split('?')[0]
  if (ASSET.test(path)) return
  const req = event.node.req
  const res = event.node.res
  // The status is only known once the response is done, so the line is written then.
  res.once('finish', () => {
    const forwarded = String(req.headers['x-forwarded-for'] ?? '')
    console.log(JSON.stringify({
      t: new Date().toISOString(),
      m: req.method,
      p: path,
      s: res.statusCode,
      ua: String(req.headers['user-agent'] ?? ''),
      ip: forwarded.split(',')[0]!.trim(),
    }))
  })
})
