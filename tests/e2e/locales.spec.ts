import { test, expect } from '@playwright/test'

const LOCALES = [
  { path: '/', code: 'en', hero: 'runs itself' },
  { path: '/ru', code: 'ru', hero: 'работает сам' },
  { path: '/de', code: 'de', hero: 'selbst betreibt' },
  { path: '/es', code: 'es', hero: 'funciona solo' },
  { path: '/fr', code: 'fr', hero: 'fonctionne seul' },
  { path: '/pt', code: 'pt', hero: 'roda sozinho' },
]

// Mirrors data/tools.ts — four subdomains and one tool on its own domain.
const TOOL_HOSTS: Record<string, string> = {
  redline: 'redline.autofract.com',
  overlap: 'overlap.autofract.com',
  costof: 'costof.autofract.com',
  whatsthisletter: 'whatsthisletter.com',
  revive: 'revive.autofract.com',
}

// Locales a tool does not serve link to its English root (data/tools.ts `locales`).
const TOOL_MISSING_LOCALES: Record<string, string[]> = {
  revive: ['ru', 'fr'],
}

for (const l of LOCALES) {
  const prefix = l.path === '/' ? '' : l.path
  test(`locale ${l.code} renders all sections`, async ({ page }) => {
    await page.goto(l.path)
    await expect(page.locator('html')).toHaveAttribute('lang', l.code)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(l.hero)
    for (const slug of ['pathcore', 'videolinker', 'frontdesk', 'relocating']) {
      await expect(page.locator(`a[href="${prefix}/work/${slug}"]`)).toBeVisible()
    }
    for (const slug of Object.keys(TOOL_HOSTS)) {
      await expect(page.locator(`a[href="${prefix}/tools/${slug}"]`)).toBeVisible()
    }
    await expect(page.getByRole('link', { name: 'info@autofract.com' })).toBeVisible()
  })
}

test('every page carries the full hreflang cluster and the analytics tag', async ({ page }) => {
  for (const path of ['/', '/ru/tools', '/de/tools/overlap']) {
    await page.goto(path)
    for (const code of ['en', 'ru', 'de', 'es', 'fr', 'pt', 'x-default']) {
      await expect(page.locator(`link[rel="alternate"][hreflang="${code}"]`), `${path} · ${code}`).toHaveCount(1)
    }
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1)
    await expect(page.locator('script[data-website-id]')).toHaveCount(1)
  }
})

test('lang switcher navigates between locales without losing the page', async ({ page }) => {
  await page.goto('/tools')
  const nav = page.getByRole('navigation', { name: 'Language' })
  await page.getByRole('group').first().locator('summary').click()
  await nav.getByRole('link', { name: /Deutsch/ }).click()
  await expect(page).toHaveURL(/\/de\/tools$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
})

test('case page renders headline, stats and graph canvas', async ({ page }) => {
  await page.goto('/work/frontdesk')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('receipt')
  await expect(page.locator('canvas')).toBeVisible()
  await expect(page.getByText('SHA-256').first()).toBeVisible()
  await expect(page.locator('a[href="https://frontdeskreview.com"]')).toBeVisible()
})

/**
 * The "Inside the system" grid used to render English on every translated
 * locale — 62 descriptions were hard-coded in the topology file.
 */
test('case pages read in the reader\'s language, head and body alike', async ({ page }) => {
  const cases = [
    { path: '/es/work/relocating', native: 'Datos abiertos convertidos', english: 'Open data turned into' },
    { path: '/de/work/pathcore', native: 'Selbstheilender hexagonaler Kern', english: 'Self-healing hexagonal engine' },
    { path: '/pt/work/frontdesk', native: 'tenta refutar cada afirmação', english: 'tries to refute every claim' },
    { path: '/ru/work/videolinker', native: 'Автономный агент планирует', english: 'An autonomous agent plans' },
  ]
  for (const c of cases) {
    await page.goto(c.path)
    const inside = page.locator('section[aria-label]').last()
    await expect(inside, c.path).toContainText(c.native)
    await expect(page.locator('body'), c.path).not.toContainText(c.english)

    const desc = await page.locator('meta[name="description"]').getAttribute('content')
    expect(desc!.length, `${c.path} description ${desc!.length} chars`).toBeGreaterThanOrEqual(120)
    expect(desc!.length, `${c.path} description ${desc!.length} chars`).toBeLessThanOrEqual(155)
    await expect(page).not.toHaveTitle(/^(PathCore|VideoLinker|FrontDesk|Relocating) — Autofract$/)
  }
})

/** Every route, in the widest-copy locales, at the three narrowest phone sizes. */
const NARROW_PATHS = [
  ...LOCALES.map(l => `${l.path === '/' ? '' : l.path}/tools/overlap`),
  '/de/tools/redline', '/pt/tools/costof', '/pt/tools', '/es/tools',
  '/es/work/relocating', '/de/work/frontdesk', '/fr/hire', '/es/hire', '/de',
]

test('no page pushes a narrow screen sideways', async ({ page }) => {
  for (const width of [320, 360, 414]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of NARROW_PATHS) {
      await page.goto(path)
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
      expect(over, `${path} at ${width}px overflows by ${over}px`).toBeLessThanOrEqual(0)
    }
  }
})

/**
 * `overflow-wrap: break-word` is the guard that stops a long word pushing the
 * page sideways, but on its own it chops a word bare — "Ferramenta / s". Words
 * that long are meant to break at a hyphen instead: the browser's own for the
 * languages it has a dictionary for, a soft hyphen in the copy for the rest.
 *
 * Which of the two happened is measured, not assumed. A Range rect per
 * character gives the index each visual line starts at; the same measurement
 * with `overflow-wrap: normal` gives the indices that survive without the
 * guard. A break that only exists with the guard on, and that the source has no
 * break opportunity at, is a bare chop.
 */
test('no display heading chops a word without a hyphen', async ({ page }) => {
  for (const width of [320, 360, 414]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of NARROW_PATHS) {
      await page.goto(path)
      await page.evaluate(() => document.fonts.ready)
      const chopped = await page.evaluate(() => {
        const BREAKS = /[\s­‐–—/-]/
        const lineStarts = (node: Text) => {
          const text = node.textContent!
          const starts: number[] = []
          let top: number | null = null
          for (let i = 0; i < text.length; i++) {
            const r = document.createRange()
            r.setStart(node, i)
            r.setEnd(node, i + 1)
            const rect = r.getBoundingClientRect()
            if (rect.width === 0 && rect.height === 0) continue
            const t = Math.round(rect.top)
            if (top === null) top = t
            else if (Math.abs(t - top) > 3) { starts.push(i); top = t }
          }
          return starts
        }
        /** True when the source itself offers a break at this index. */
        const authored = (text: string, i: number) => {
          let j = i
          while (j > 0 && /\s/.test(text[j - 1])) j--
          return j < i || BREAKS.test(text[i - 1] ?? '') || /\s/.test(text[i] ?? '')
        }
        const out: string[] = []
        for (const el of document.querySelectorAll<HTMLElement>('.font-display')) {
          if (el.querySelector('.font-display')) continue
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
            acceptNode: n => (n.textContent!.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
          })
          const nodes: Text[] = []
          let n: Node | null
          while ((n = walker.nextNode())) nodes.push(n as Text)
          if (!nodes.length) continue

          const withGuard = nodes.map(lineStarts)
          el.style.overflowWrap = 'normal'
          el.style.wordBreak = 'normal'
          void el.offsetHeight
          const withoutGuard = nodes.map(lineStarts)
          el.style.overflowWrap = ''
          el.style.wordBreak = ''

          nodes.forEach((node, k) => {
            const text = node.textContent!
            const survives = new Set(withoutGuard[k])
            for (const i of withGuard[k]) {
              if (authored(text, i) || survives.has(i)) continue
              out.push(`<${el.tagName.toLowerCase()}> "${text.slice(Math.max(0, i - 12), i)}" / "${text.slice(i, i + 12)}"`)
            }
          })
        }
        return out
      })
      expect(chopped, `${path} at ${width}px`).toEqual([])
    }
  }
})

/**
 * The three tier prices used to be literals in the page component, so every
 * locale rendered "from $4,000". The amount is the same everywhere — the
 * currency is USD — but the wording around it belongs to the dictionary.
 */
test('hire tiers quote their price in the reader\'s language', async ({ page }) => {
  const expected = [
    { path: '/hire', has: ['from $4,000', 'from $1,500/mo', 'from $2,000'] },
    { path: '/ru/hire', has: ['от $4 000', 'от $1 500/мес', 'от $2 000'] },
    { path: '/de/hire', has: ['ab 4.000 $', 'ab 1.500 $/Mon.', 'ab 2.000 $'] },
    { path: '/es/hire', has: ['desde 4.000 $', 'desde 1.500 $/mes', 'desde 2.000 $'] },
    { path: '/fr/hire', has: ['dès 4 000 $', 'dès 1 500 $/mois', 'dès 2 000 $'] },
    { path: '/pt/hire', has: ['a partir de US$ 4.000', 'a partir de US$ 1.500/mês', 'a partir de US$ 2.000'] },
  ]
  for (const { path, has } of expected) {
    await page.goto(path)
    for (const price of has) {
      await expect(page.getByText(price, { exact: true }), `${path} · ${price}`).toBeVisible()
    }
    if (path !== '/hire') {
      await expect(page.locator('main'), path).not.toContainText('from $4,000')
    }
  }
})

test('tools hub lists every tool and product', async ({ page }) => {
  await page.goto('/tools')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Small tools')
  for (const host of Object.values(TOOL_HOSTS)) {
    await expect(page.locator(`a[href^="https://${host}"]`).first()).toBeVisible()
  }
  await expect(page.locator('a[href="https://relocating.app"]')).toBeVisible()
  await expect(page.locator('a[href="https://frontdeskreview.com"]')).toBeVisible()
})

test('a tool page carries long-form copy, FAQ structured data and a deep link', async ({ page }) => {
  await page.goto('/ru/tools/overlap')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('a[href="https://overlap.autofract.com/ru/"]').first()).toBeVisible()
  const ld = await page.locator('script[type="application/ld+json"]').last().textContent()
  expect(ld).toContain('FAQPage')
  expect(ld).toContain('WebApplication')
  expect(ld).toContain('BreadcrumbList')
})

/**
 * A tool that serves the reader's language is deep-linked into it; English is
 * the root. `data/tools.ts` decides which, so this walks the whole matrix — the
 * pair drifted apart once already when Redline gained its five translations.
 */
test('every tool links into the language the reader is already in', async ({ page }) => {
  for (const [slug, host] of Object.entries(TOOL_HOSTS)) {
    for (const l of LOCALES) {
      const prefix = l.path === '/' ? '' : l.path
      const expected = l.code === 'en' || TOOL_MISSING_LOCALES[slug]?.includes(l.code)
        ? `https://${host}/`
        : `https://${host}/${l.code}/`
      await page.goto(`${prefix}/tools/${slug}`)
      await expect(page.locator(`a[href="${expected}"]`).first(), `${prefix}/tools/${slug}`).toBeVisible()
    }
  }
})

test('unknown slugs 404 with a noindex error page', async ({ page }) => {
  for (const path of ['/work/nope', '/tools/nope']) {
    const resp = await page.goto(path)
    expect(resp?.status(), path).toBe(404)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
  }
})

test('sitemap answers 200 directly and covers every locale', async ({ request }) => {
  const res = await request.get('/sitemap.xml', { maxRedirects: 0 })
  expect(res.status()).toBe(200)
  const xml = await res.text()
  for (const code of ['en', 'ru', 'de', 'es', 'fr', 'pt', 'x-default']) {
    expect(xml, code).toContain(`hreflang="${code}"`)
  }
  for (const path of ['/tools', '/tools/overlap', '/pt/tools/costof']) {
    expect(xml, path).toContain(`<loc>https://autofract.com${path}</loc>`)
  }
  // The home page canonical has no trailing slash; the sitemap must agree.
  expect(xml).toContain('<loc>https://autofract.com</loc>')
  expect(xml).not.toContain('https://autofract.com/"')
  expect(xml).not.toContain('<loc>https://autofract.com/</loc>')
})

test('robots.txt is served and points at the sitemap', async ({ request }) => {
  const res = await request.get('/robots.txt')
  expect(res.status()).toBe(200)
  expect(await res.text()).toContain('Sitemap: https://autofract.com/sitemap.xml')
})
