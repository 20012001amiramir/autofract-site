// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-23',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
  ],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  i18n: {
    // baseUrl feeds useLocaleHead(seo) — absolute canonical + hreflang alternates.
    // Must match site.url host exactly (no trailing slash).
    baseUrl: 'https://autofract.com',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    // Bare language codes (not region subtags): the site targets languages, not countries.
    locales: [
      { code: 'en', language: 'en', file: 'en.json', name: 'English' },
      { code: 'de', language: 'de', file: 'de.json', name: 'Deutsch' },
      { code: 'ru', language: 'ru', file: 'ru.json', name: 'Русский' },
      { code: 'fr', language: 'fr', file: 'fr.json', name: 'Français' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  fonts: {
    families: [
      { name: 'Fraunces', provider: 'google', weights: [400, 600, 900], styles: ['normal', 'italic'] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },

  site: {
    url: 'https://autofract.com',
    name: 'Autofract',
  },

  sitemap: {
    autoLastmod: true,
    // Динамические роуты не автообнаруживаются; _i18nTransform размножает их
    // по всем локалям с корректными hreflang-альтернативами.
    urls: [
      { loc: '/work/pathcore', _i18nTransform: true },
      { loc: '/work/videolinker', _i18nTransform: true },
      { loc: '/work/frontdesk', _i18nTransform: true },
      { loc: '/work/relocating', _i18nTransform: true },
    ],
  },

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Site is always dark graphite — one theme-color, no light variant.
        { name: 'theme-color', content: '#0c0c10' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
