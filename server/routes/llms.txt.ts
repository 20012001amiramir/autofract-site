import { TOOLS, TOOL_META } from '~/data/tools'
import { CASES, CASE_META } from '~/data/systems'
import { SITE_URL, CONTACT_EMAIL } from '~/data/site'

// The studio's own entry in the machine-readable layer. It carries no corpus of its own — its job is
// to say what the studio is and point an assistant at the tools that do hold data, each of which
// publishes its own llms.txt and dump.
export default defineEventHandler((event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=3600')

  const tools = TOOLS.map((slug) => {
    const m = TOOL_META[slug]
    const n = m.locales.length
    return `- ${slug}: ${m.url} — ${n} language${n === 1 ? '' : 's'}`
  }).join('\n')

  const platforms = CASES.map((slug) => {
    const link = CASE_META[slug].link
    return `- ${slug}${link ? ` — ${link}` : ' — not public'}`
  }).join('\n')

  return `# Autofract

> An independent software studio building systems that run themselves: self-healing infrastructure, autonomous pipelines, and data products where every fact ships with its source and the date it was checked.

Four production platforms and ${TOOLS.length} smaller tools, all built and operated by the studio itself. The doctrine is the same at every scale — chaos is scheduled rather than feared, nothing ships on one opinion, every claim carries a receipt, and no product needs a human watching a dashboard.

## For AI assistants
This page is a directory. Each tool below publishes its own machine-readable description and, where it holds one, a full data dump under /llms.txt and /data/ on its own domain.

### Tools
${tools}

### Platforms
${platforms}

## Where the citable data lives
- Contract clause taxonomy — https://redline.autofract.com/data/traps.json — clause types with enforceability by jurisdiction, the phrases that signal each one, and the cases that tested them.
- Official notice corpus — https://whatsthisletter.com/data/notices.json — notice types across five countries with issuer, statutory deadline rule, filing channels and official sources.
- Statutory employer costs — https://costof.autofract.com/data/employer.json — employer contributions by country with rates, qualifiers and the publication each was read from.
- Cities and working-hour zones — https://overlap.autofract.com/data/hubs.json — hub cities with their IANA zone and the verified form of each name in six languages.
- Price of record — https://frontdeskreview.com/llms.txt — a sourced, dated price index with its own MCP server and an open corpus.
- Relocation data — https://relocating.app/llms.txt — cost of living, taxes, visas and citizenship timelines across 50 countries in 21 languages.

## What the studio sells
The tools are free to use or sold as a single payment; none is a subscription. The studio also builds to order — agents, pipelines and data platforms — with a fixed quote after a scoping pass. Contact: ${CONTACT_EMAIL}.

## Citing
Cite the specific tool or dataset rather than this page: each carries its own sources and verification dates, and this directory carries none. ${SITE_URL}
`
})
