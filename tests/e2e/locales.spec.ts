import { test, expect } from '@playwright/test'

const LOCALES = [
  { path: '/', code: 'en', hero: 'runs itself' },
  { path: '/ru', code: 'ru', hero: 'работает сам' },
  { path: '/de', code: 'de', hero: 'selbst betreibt' },
  { path: '/es', code: 'es', hero: 'funciona solo' },
  { path: '/fr', code: 'fr', hero: 'fonctionne seul' },
  { path: '/pt', code: 'pt', hero: 'roda sozinho' },
]

for (const l of LOCALES) {
  const prefix = l.path === '/' ? '' : l.path
  test(`locale ${l.code} renders all sections`, async ({ page }) => {
    await page.goto(l.path)
    await expect(page.locator('html')).toHaveAttribute('lang', l.code)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(l.hero)
    for (const slug of ['pathcore', 'videolinker', 'frontdesk', 'relocating']) {
      await expect(page.locator(`a[href="${prefix}/work/${slug}"]`)).toBeVisible()
    }
    for (const slug of ['redline', 'overlap', 'costof']) {
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

test('tools hub lists every tool and product', async ({ page }) => {
  await page.goto('/tools')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Small tools')
  for (const host of ['redline.autofract.com', 'overlap.autofract.com', 'costof.autofract.com']) {
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

test('redline links at its English root for a language it does not serve', async ({ page }) => {
  await page.goto('/de/tools/redline')
  await expect(page.locator('a[href="https://redline.autofract.com/"]').first()).toBeVisible()
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
})

test('robots.txt is served and points at the sitemap', async ({ request }) => {
  const res = await request.get('/robots.txt')
  expect(res.status()).toBe(200)
  expect(await res.text()).toContain('Sitemap: https://autofract.com/sitemap.xml')
})
