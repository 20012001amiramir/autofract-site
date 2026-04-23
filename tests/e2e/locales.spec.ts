import { test, expect } from '@playwright/test'

const LOCALES = [
  { path: '/', code: 'en', manifesto: 'companion-software' },
  { path: '/de', code: 'de', manifesto: 'Companion-Software' },
  { path: '/ru', code: 'ru', manifesto: 'companion-software' },
  { path: '/fr', code: 'fr', manifesto: 'companion-software' },
]

for (const l of LOCALES) {
  test(`locale ${l.code} renders all sections`, async ({ page }) => {
    await page.goto(l.path)
    await expect(page.locator('html')).toHaveAttribute('lang', l.code)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('not tools')
    await expect(page.getByText(l.manifesto).first()).toBeVisible()
    await expect(page.locator('a[href="https://ai.autofract.com"]')).toBeVisible()
    await expect(page.locator('a[href="https://oyka.app"]')).toBeVisible()
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
  await page.locator('section[aria-label="Bashka"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(900)
  const hasBashkaClass = await page.evaluate(() =>
    document.documentElement.classList.contains('chapter-bashka'),
  )
  expect(hasBashkaClass).toBe(true)
})
