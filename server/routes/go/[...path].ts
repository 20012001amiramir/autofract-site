import { mailLinkTarget } from '~/data/mailLinks'

// The buyer's link, forwarded from the domain that reaches inboxes to the product that serves it.
// See data/mailLinks.ts for why the hop exists and why the destination is never taken from the URL.
export default defineEventHandler((event) => {
  const path = getRouterParam(event, 'path') ?? ''
  const query = new URL(event.node.req.url ?? '/', 'http://localhost').search
  const target = mailLinkTarget(path, query)
  if (!target) throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  // A one-time token must not be cached, and these URLs are not pages anyone should find in search.
  setResponseHeader(event, 'Cache-Control', 'no-store')
  setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
  return sendRedirect(event, target, 302)
})
