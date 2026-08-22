import { test, expect } from '@playwright/test'

const LOCALES = [
  { path: '/', code: 'en', hero: 'runs itself' },
  { path: '/de', code: 'de', hero: 'selbst betreibt' },
  { path: '/ru', code: 'ru', hero: 'работает сам' },
  { path: '/fr', code: 'fr', hero: 'fonctionne seul' },
]

for (const l of LOCALES) {
  test(`locale ${l.code} renders all sections`, async ({ page }) => {
    await page.goto(l.path)
    await expect(page.locator('html')).toHaveAttribute('lang', l.code)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(l.hero)
    await expect(page.locator('a[href="https://pathcore.autofract.com"]')).toBeVisible()
    await expect(page.locator('a[href="https://video.autofract.com"]')).toBeVisible()
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

test('chapter color swap triggers on scroll', async ({ page }) => {
  await page.goto('/')
  await page.locator('section[aria-label="VideoLinker"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(900)
  const hasVideolinkerClass = await page.evaluate(() =>
    document.documentElement.classList.contains('chapter-videolinker'),
  )
  expect(hasVideolinkerClass).toBe(true)
})
