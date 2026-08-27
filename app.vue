<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useJsonLd } from '~/composables/useJsonLd'
import { CONTACT_EMAIL, ORG_ID, SITE_NAME, SITE_URL, WEBSITE_ID } from '~/data/site'
import { LOCALES, OG_LOCALE, asLocale } from '~/data/locales'

// i18n owns hreflang + self-canonical + og:locale for every route.
// Do NOT also emit canonical/hreflang from pages — double-emit breaks the pairing.
const head = useLocaleHead({ seo: true, lang: true, dir: true })
useHead(head)

// useLocaleHead emits the bare language code; Open Graph wants a territory tag.
const { locale } = useI18n()
useSeoMeta({ ogLocale: computed(() => OG_LOCALE[asLocale(locale.value)]) })

// Site-wide entity graph — the identity every per-page node references by @id.
useJsonLd('identity', [
  {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: 'An independent studio building antifragile AI systems.',
    email: CONTACT_EMAIL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: ['https://x.com/autofract', 'https://t.me/autofract'],
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: [...LOCALES],
  },
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
