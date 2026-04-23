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
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'de', language: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'ru', language: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json', name: 'Français' },
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
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#faf8f3' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
