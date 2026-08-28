import { validateLead } from '../utils/lead'

const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_IP = 5
const MAX_KEYS = 2000 // hard ceiling on the map — memory-DoS guard
const MAX_BODY_BYTES = 64 * 1024 // a legitimate lead is < ~6KB
const GLOBAL_MAX_PER_HOUR = 80 // backstop: mails per hour for the whole site, IP or not

/**
 * Per-IP counter with built-in LRU eviction: a Map keeps insertion order, so
 * the oldest key goes first once it is full. The size is capped hard, which is
 * why a spoofed X-Forwarded-For cannot inflate memory.
 */
const hits = new Map<string, number[]>()

function ipLimited(ip: string): boolean {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  if (list.length >= MAX_PER_IP) {
    hits.delete(ip); hits.set(ip, list) // refresh the LRU position
    return true
  }
  list.push(now)
  hits.delete(ip); hits.set(ip, list)
  while (hits.size > MAX_KEYS) {
    const oldest = hits.keys().next().value
    if (oldest === undefined) break
    hits.delete(oldest)
  }
  return false
}

// Global backstop: a ring of outgoing-mail timestamps. Spoofing an IP does not bypass it.
let globalSends: number[] = []
function globalLimited(): boolean {
  const now = Date.now()
  globalSends = globalSends.filter(t => now - t < WINDOW_MS)
  if (globalSends.length >= GLOBAL_MAX_PER_HOUR) return true
  globalSends.push(now)
  return false
}

const INTEREST_LABEL: Record<string, string> = {
  build: 'BUILD — fixed-scope system',
  run: 'RUN — monthly retainer',
  rescue: 'RESCUE — audit & hardening',
  other: 'Other',
}

const BUDGET_LABEL: Record<string, string> = {
  'lt4k': 'under $4k',
  '4-10k': '$4–10k',
  '10-25k': '$10–25k',
  '25k+': '$25k+',
  'unsure': 'not sure yet',
}

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  if (ipLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  // Reject large bodies BEFORE parsing (Content-Length can lie, so the raw size is checked too)
  const declared = Number(getRequestHeader(event, 'content-length') ?? 0)
  if (declared > MAX_BODY_BYTES) {
    throw createError({ statusCode: 413, statusMessage: 'Payload too large' })
  }
  const raw = await readRawBody(event, 'utf8').catch(() => null)
  if (raw && Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
    throw createError({ statusCode: 413, statusMessage: 'Payload too large' })
  }
  let body: unknown = null
  try { body = raw ? JSON.parse(raw) : null } catch { body = null }

  const v = validateLead(body)
  if (v.silentDrop) return { ok: true } // honeypot — never tell the bot
  if (!v.ok || !v.lead) {
    throw createError({ statusCode: 400, statusMessage: `Invalid field: ${v.error ?? 'payload'}` })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_TO || 'info@autofract.com'
  const from = process.env.LEAD_FROM || 'noreply@autofract.com'
  if (!apiKey) {
    throw createError({ statusCode: 503, statusMessage: 'Lead delivery not configured' })
  }

  if (globalLimited()) {
    // the global mail budget is spent — stop burning quota, but do not drop the lead silently
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const { lead } = v
  const tag = v.suspect ? '[suspect] ' : ''
  const text = [
    v.suspect ? '⚠ Flagged suspect (fast submit / no timer) — verify before replying.' : null,
    v.suspect ? '' : null,
    `Interest: ${INTEREST_LABEL[lead.interest]}`,
    `Budget:   ${BUDGET_LABEL[lead.budget]}`,
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    lead.company ? `Company:  ${lead.company}` : null,
    ``,
    `--- What should run itself ---`,
    lead.message,
    ``,
    `— autofract.com/hire`,
  ].filter(l => l !== null).join('\n')

  const resp = await $fetch.raw('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: {
      from: `Autofract <${from}>`,
      to: [to],
      reply_to: lead.email,
      subject: `${tag}Lead [${lead.interest.toUpperCase()}] ${lead.name} — ${BUDGET_LABEL[lead.budget]}`,
      text,
    },
  }).catch((e) => {
    console.error('lead: resend send failed', e?.statusCode ?? e)
    return null
  })

  if (!resp || resp.status >= 400) {
    throw createError({ statusCode: 502, statusMessage: 'Delivery failed' })
  }

  return { ok: true }
})
