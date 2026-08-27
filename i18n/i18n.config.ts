// A key that is missing from a locale must never reach a reader as "hire.faq.f1q".
export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  fallbackWarn: false,
  missingWarn: false,
}))
