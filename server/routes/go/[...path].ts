import { mailLinkTarget } from '~/data/mailLinks'

// The buyer's link, forwarded from the domain that reaches inboxes to the product that serves it.
// See data/mailLinks.ts for why the hop exists and why the destination is never taken from the URL.
//
// The path is read from the raw URL rather than the router param, which normalises away a trailing
// slash — the products' own routes keep theirs, and an extra redirect on the way to a paid thing is
// one more chance for it not to arrive.
export default defineEventHandler((event) => {
  const raw = event.node.req.url ?? '/'
  const cut = raw.indexOf('?')
  const target = mailLinkTarget(
    (cut === -1 ? raw : raw.slice(0, cut)).replace(/^\/go\b/, ''),
    cut === -1 ? '' : raw.slice(cut),
  )
  if (!target) throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  // A one-time token must not be cached, and these URLs are not pages anyone should find in search.
  setResponseHeader(event, 'Cache-Control', 'no-store')
  setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
  return sendRedirect(event, target, 302)
})
