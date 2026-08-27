/** Shared shape helpers for the locale-parity tests. */

type Json = string | number | boolean | null | Json[] | { [k: string]: Json }

/** Every leaf path → its string value, arrays indexed by position. */
export function leaves(value: unknown, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {}
  if (Array.isArray(value)) {
    value.forEach((v, i) => Object.assign(out, leaves(v, `${prefix}[${i}]`)))
  }
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value as Record<string, Json>)) {
      Object.assign(out, leaves(v, prefix ? `${prefix}.${k}` : k))
    }
  }
  else {
    out[prefix] = String(value)
  }
  return out
}

/** The set of leaf paths — the structure, without the words. */
export function shape(value: unknown): string[] {
  return Object.keys(leaves(value))
}

/** {placeholders} used in a message, sorted. */
export function placeholders(text: string): string[] {
  return [...text.matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort()
}
