<script setup lang="ts">
import { useJsonLd, SITE_URL, ORG_ID, WEBSITE_ID } from '~/composables/useJsonLd'

// i18n owns hreflang + self-canonical + og:locale for every route.
// Do NOT also emit canonical/hreflang from pages — double-emit breaks the pairing.
const head = useLocaleHead({ seo: true, lang: true, dir: true })
useHead(head)

// Site-wide entity graph — the identity every per-page node references by @id.
useJsonLd('identity', [
  {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Autofract',
    url: SITE_URL,
    description: 'An independent studio building antifragile AI systems.',
    email: 'info@autofract.com',
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: ['https://x.com/autofract', 'https://t.me/autofract'],
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Autofract',
    url: SITE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'de', 'ru', 'fr'],
  },
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
