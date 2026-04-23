import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'

const HOT_PATH = process.env.HOT_PATH || 'e:/main/ai/00-hot.md'
const OUT_PATH = resolve('public/build-log.json')
const MAX_ENTRIES = 5

interface Entry {
  date: string
  summary: string
}

function parseHot(md: string): Entry[] {
  const logIdx = md.indexOf('## Log')
  if (logIdx === -1) return []
  const logBody = md.slice(logIdx)
  const dateBlocks = [...logBody.matchAll(/^### (\d{4}-\d{2}-\d{2})\s*\n([\s\S]*?)(?=^### \d{4}|\Z)/gm)]
  const entries: Entry[] = []
  for (const [, date, body] of dateBlocks) {
    const firstBullet = body.split('\n').find(l => l.trimStart().startsWith('- '))
    if (!firstBullet) continue
    const clean = firstBullet
      .replace(/^\s*-\s*/, '')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1')
      .replace(/\(commit [^)]+\)/gi, '')
      .replace(/—\s*—/g, '—')
      .trim()
    const summary = clean.split(/[.—]/)[0].trim().slice(0, 160)
    entries.push({ date, summary })
    if (entries.length >= MAX_ENTRIES) break
  }
  return entries
}

function fallback(): Entry[] {
  return [
    { date: '2026-04-23', summary: 'Oyka MVP scaffolded (Flutter, 22 tests green)' },
    { date: '2026-04-16', summary: 'Bashka partner contracts shipped with e-sign via Telegram' },
    { date: '2026-04-15', summary: 'Bashka landing redesign complete' },
    { date: '2026-04-13', summary: 'Autofract vault migrated to Obsidian graph' },
  ]
}

const entries = existsSync(HOT_PATH)
  ? (() => {
      const md = readFileSync(HOT_PATH, 'utf8')
      const parsed = parseHot(md)
      return parsed.length > 0 ? parsed : fallback()
    })()
  : fallback()

mkdirSync(dirname(OUT_PATH), { recursive: true })
writeFileSync(OUT_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), entries }, null, 2))
console.log(`✔ Wrote ${entries.length} build-log entries to ${OUT_PATH}`)
