/**
 * Where a link inside a buyer's email is allowed to point.
 *
 * Measured on 11 Sep 2026: the same transactional mail, to a mailbox that has never heard from the
 * studio, lands in the inbox when its link is on autofract.com or any subdomain of it, and in spam
 * when the link is on one of the standalone product domains. Since the link in such a mail *is* the
 * thing that was paid for — a pass, a pack, a record — it has to travel on the domain that arrives.
 *
 * So the mail links here, and this sends the buyer on. The map is fixed on purpose: a name resolves
 * to a hard-coded origin and to nothing else. A redirect that took its destination from the request
 * would be an open redirect on a domain with standing — the one thing that would destroy it.
 */

export const MAIL_LINK_ORIGINS = {
  letter: 'https://whatsthisletter.com',
  record: 'https://weatherreceipt.com',
} as const

export type MailLinkProduct = keyof typeof MAIL_LINK_ORIGINS

/**
 * The absolute URL that `/go/<name>/<rest>` forwards to, or null when the name is not one of ours.
 * Everything after the name rides along untouched — the access token is in there.
 */
export function mailLinkTarget(path: string, query = ''): string | null {
  const clean = path.replace(/^\/+/, '')
  const cut = clean.indexOf('/')
  const name = cut === -1 ? clean : clean.slice(0, cut)
  const rest = cut === -1 ? '' : clean.slice(cut + 1).replace(/^\/+/, '')
  const origin = MAIL_LINK_ORIGINS[name as MailLinkProduct]
  if (!origin) return null
  // A newline in a Location header splits the response; nothing legitimate carries one.
  if (/[\r\n]/.test(rest) || /[\r\n]/.test(query)) return null
  const q = query && !query.startsWith('?') ? `?${query}` : query
  return `${origin}/${rest}${q}`
}
