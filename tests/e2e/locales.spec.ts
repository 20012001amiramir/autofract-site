import { test, expect } from '@playwright/test'

const LOCALES = [
  { path: '/', code: 'en', hero: 'runs itself' },
  { path: '/de', code: 'de', hero: 'selbst betreibt' },
  { path: '/ru', code: 'ru', hero: 'работает сам' },
  { path: '/fr', code: 'fr', hero: 'fonctionne seul' },
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
    await expect(page.getByRole('link', { name: 'info@autofract.com' })).toBeVisible()
  })
}

test('lang switcher navigates between locales', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Language' })
  await nav.getByRole('link', { name: 'de' }).click()
  await expect(page).toHaveURL(/\/de$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
})

test('case page renders headline, stats and graph canvas', async ({ page }) => {
  await page.goto('/work/frontdesk')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('receipt')
  await expect(page.locator('canvas')).toBeVisible()
  await expect(page.getByText('SHA-256').first()).toBeVisible()
  await expect(page.locator('a[href="https://frontdeskreview.com"]')).toBeVisible()
})

test('unknown case slug 404s', async ({ page }) => {
  const resp = await page.goto('/work/nope')
  expect(resp?.status()).toBe(404)
})
