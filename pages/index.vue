<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TheHero from '~/components/TheHero.vue'
import TheManifesto from '~/components/TheManifesto.vue'
import WorkGrid from '~/components/WorkGrid.vue'
import TheApproach from '~/components/TheApproach.vue'
import TheStudio from '~/components/TheStudio.vue'
import SiteFooter from '~/components/SiteFooter.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('meta.title')} — Autofract`,
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  ogSiteName: 'Autofract',
  ogImage: { url: 'https://autofract.com/og-image.png', width: 1200, height: 630, type: 'image/png', alt: 'Autofract — software that runs itself' },
  twitterCard: 'summary_large_image',
  twitterSite: '@autofract',
  twitterTitle: () => t('meta.title'),
  twitterDescription: () => t('meta.description'),
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
