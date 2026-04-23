<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TheHero from '~/components/TheHero.vue'
import TheManifesto from '~/components/TheManifesto.vue'
import PathCoreChapter from '~/components/PathCoreChapter.vue'
import BashkaChapter from '~/components/BashkaChapter.vue'
import OykaChapter from '~/components/OykaChapter.vue'
import VideoLinkerChapter from '~/components/VideoLinkerChapter.vue'
import Link19Chapter from '~/components/Link19Chapter.vue'
import TheStudio from '~/components/TheStudio.vue'
import TheBuildLog from '~/components/TheBuildLog.vue'
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
        slogan: 'Companions, not tools.',
        sameAs: [
          'https://x.com/autofract',
          'https://github.com/20012001amiramir',
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
    <PathCoreChapter />
    <BashkaChapter />
    <VideoLinkerChapter />
    <Link19Chapter />
    <OykaChapter />
    <TheStudio />
    <TheBuildLog />
    <SiteFooter />
  </div>
</template>
