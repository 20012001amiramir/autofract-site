// https://nuxt.com/docs/api/configuration/nuxt-config
import { LOCALES, LOCALE_LABELS } from './data/locales'
import { ANALYTICS_SRC, ANALYTICS_WEBSITE_ID, SITE_NAME, SITE_URL } from './data/site'
import { TOOLS } from './data/tools'

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
    baseUrl: SITE_URL,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    // Bare language codes (not region subtags): the site targets languages, not countries.
    // One registry (data/locales.ts) feeds the head, the switcher and the sitemap.
    locales: LOCALES.map(code => ({
      code,
      language: code,
      file: `${code}.json`,
      name: LOCALE_LABELS[code],
    })),
    // Missing keys fall back to English instead of rendering a raw key path.
    vueI18n: './i18n.config.ts',
    // No Accept-Language redirect: `/` must answer 200 for everyone, crawlers
    // included, because it is the x-default of the hreflang cluster.
    detectBrowserLanguage: false,
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
    url: SITE_URL,
    name: SITE_NAME,
  },

  sitemap: {
    autoLastmod: true,
    // One /sitemap.xml that answers 200 directly: robots.txt may not point at a
    // redirect, and the i18n split would make /sitemap.xml a 307 to an index.
    sitemaps: false,
    // Динамические роуты не автообнаруживаются; _i18nTransform размножает их
    // по всем локалям с корректными hreflang-альтернативами.
    urls: [
      { loc: '/work/pathcore', _i18nTransform: true },
      { loc: '/work/videolinker', _i18nTransform: true },
      { loc: '/work/frontdesk', _i18nTransform: true },
      { loc: '/work/relocating', _i18nTransform: true },
      ...TOOLS.map(slug => ({ loc: `/tools/${slug}`, _i18nTransform: true })),
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
      // Cookieless page views. Declared here so every SSR page carries it.
      script: [
        { src: ANALYTICS_SRC, defer: true, 'data-website-id': ANALYTICS_WEBSITE_ID },
      ],
    },
  },
})
