<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TheHero from '~/components/TheHero.vue'
import TheManifesto from '~/components/TheManifesto.vue'
import WorkGrid from '~/components/WorkGrid.vue'
import TheApproach from '~/components/TheApproach.vue'
import TheStudio from '~/components/TheStudio.vue'
import SiteFooter from '~/components/SiteFooter.vue'

const { t, locale } = useI18n()

useHead({
  htmlAttrs: { lang: locale.value },
  title: () => `${t('meta.title')} — Autofract`,
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:image', content: 'https://autofract.com/og-image.png' },
    { property: 'og:url', content: 'https://autofract.com' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Autofract',
        url: 'https://autofract.com',
        email: 'info@autofract.com',
        slogan: 'Software that runs itself.',
        sameAs: [
          'https://x.com/autofract',
          'https://t.me/autofract',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <TheHero />
    <TheManifesto />
    <WorkGrid />
    <TheApproach />
    <TheStudio />
    <SiteFooter />
  </div>
</template>
