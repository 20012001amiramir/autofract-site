export interface LeadPayload {
  name: string
  email: string
  company?: string
  interest: 'build' | 'run' | 'rescue' | 'other'
  budget: 'lt4k' | '4-10k' | '10-25k' | '25k+' | 'unsure'
  message: string
  /** honeypot — people neither see nor fill this field */
  website?: string
  /** ms since the form mounted — bots submit instantly */
  elapsed?: number
}

const INTERESTS = new Set(['build', 'run', 'rescue', 'other'])
const BUDGETS = new Set(['lt4k', '4-10k', '10-25k', '25k+', 'unsure'])
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MIN_FILL_MS = 2000

export interface CleanLead {
  name: string
  email: string
  company: string
  interest: LeadPayload['interest']
  budget: LeadPayload['budget']
  message: string
}

export interface LeadValidation {
  ok: boolean
  /** true = accept silently and discard (a filled honeypot means a bot) */
  silentDrop?: boolean
  /** suspicious (submitted too fast), but the lead is still delivered, flagged — hot enquiries are never dropped */
  suspect?: boolean
  error?: string
  lead?: CleanLead
}

export function validateLead(body: unknown): LeadValidation {
  if (typeof body !== 'object' || body === null) return { ok: false, error: 'bad payload' }
  const b = body as Record<string, unknown>

  // honeypot: a hidden field only bots fill — discard quietly
  if (typeof b.website === 'string' && b.website.trim() !== '') return { ok: false, silentDrop: true }

  const name = typeof b.name === 'string' ? b.name.trim() : ''
  const email = typeof b.email === 'string' ? b.email.trim() : ''
  const company = typeof b.company === 'string' ? b.company.trim() : ''
  const interest = typeof b.interest === 'string' ? b.interest : ''
  const budget = typeof b.budget === 'string' ? b.budget : ''
  const message = typeof b.message === 'string' ? b.message.trim() : ''

  if (!name || name.length > 120) return { ok: false, error: 'name' }
  if (!EMAIL_RE.test(email) || email.length > 200) return { ok: false, error: 'email' }
  if (company.length > 200) return { ok: false, error: 'company' }
  if (!INTERESTS.has(interest)) return { ok: false, error: 'interest' }
  if (!BUDGETS.has(budget)) return { ok: false, error: 'budget' }
  if (message.length < 20 || message.length > 5000) return { ok: false, error: 'message' }

  // submitted too fast (or no timer at all) — flag the lead instead of dropping it
  const suspect = typeof b.elapsed !== 'number' || b.elapsed < MIN_FILL_MS

  return {
    ok: true,
    suspect,
    lead: { name, email, company, interest: interest as LeadPayload['interest'], budget: budget as LeadPayload['budget'], message },
  }
}
