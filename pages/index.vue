<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { asLocale } from '~/data/locales'
import { ogUrl } from '~/data/og'
import { SITE_NAME, TWITTER_HANDLE } from '~/data/site'
import TheHero from '~/components/TheHero.vue'
import TheManifesto from '~/components/TheManifesto.vue'
import WorkGrid from '~/components/WorkGrid.vue'
import ToolsStrip from '~/components/ToolsStrip.vue'
import TheApproach from '~/components/TheApproach.vue'
import TheStudio from '~/components/TheStudio.vue'
import SiteFooter from '~/components/SiteFooter.vue'

const { t, locale } = useI18n()
const lang = computed(() => asLocale(locale.value))

useSeoMeta({
  title: () => `${t('meta.title')} — Autofract`,
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: () => ({
    url: ogUrl('/og-image', lang.value),
    width: 1200,
    height: 630,
    type: 'image/png' as const,
    alt: `Autofract — ${t('meta.title')}`,
  }),
  twitterCard: 'summary_large_image',
  twitterSite: TWITTER_HANDLE,
  twitterTitle: () => t('meta.title'),
  twitterDescription: () => t('meta.description'),
})
</script>

<template>
  <div>
    <TheHero />
    <TheManifesto />
    <WorkGrid />
    <ToolsStrip />
    <TheApproach />
    <TheStudio />
    <SiteFooter />
  </div>
</template>
