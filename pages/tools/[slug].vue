<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteFooter from '~/components/SiteFooter.vue'
import { TOOLS, TOOL_META, toolHref, type ToolSlug } from '~/data/tools'
import { toolsContentFor } from '~/content/tools'
import { asLocale } from '~/data/locales'
import { ogUrl } from '~/data/og'
import { useJsonLd } from '~/composables/useJsonLd'
import { breadcrumbList, faqPage, webApplication } from '~/composables/seo'
import { ORG_ID, SITE_NAME, TWITTER_HANDLE, abs } from '~/data/site'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const slug = route.params.slug as ToolSlug
if (!TOOLS.includes(slug)) {
  throw createError({ statusCode: 404, statusMessage: 'Tool not found' })
}

const meta = TOOL_META[slug]
const lang = computed(() => asLocale(locale.value))
const copy = computed(() => toolsContentFor(lang.value).tools[slug])
const href = computed(() => toolHref(slug, lang.value))
const nextSlug = TOOLS[(TOOLS.indexOf(slug) + 1) % TOOLS.length]

function hexToTriplet(hex: string): string {
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`
}
const accentVars = {
  '--color-accent': hexToTriplet(meta.accent),
  '--color-accent-secondary': hexToTriplet(meta.accent),
}

useSeoMeta({
  title: () => copy.value.meta.title,
  description: () => copy.value.meta.description,
  ogTitle: () => copy.value.meta.title,
  ogDescription: () => copy.value.meta.description,
  ogType: 'article',
  ogSiteName: SITE_NAME,
  ogImage: () => ({
    url: ogUrl(`/og/tools-${slug}`, lang.value),
    width: 1200,
    height: 630,
    type: 'image/png' as const,
    alt: `${copy.value.name} — ${copy.value.tagline}`,
  }),
  twitterCard: 'summary_large_image',
  twitterSite: TWITTER_HANDLE,
  twitterTitle: () => copy.value.meta.title,
  twitterDescription: () => copy.value.meta.description,
})

const pagePath = localePath(`/tools/${slug}`)

useJsonLd('tool', [
  breadcrumbList([
    { name: SITE_NAME, path: localePath('/') },
    { name: t('tools.breadcrumb'), path: localePath('/tools') },
    { name: copy.value.name, path: pagePath },
  ]),
  {
    ...webApplication({
      id: `${abs(pagePath)}#app`,
      name: copy.value.name,
      url: meta.url,
      description: copy.value.meta.description,
      category: meta.category,
      locale: lang.value,
    }),
    alternateName: copy.value.tagline,
    creator: { '@id': ORG_ID },
    subjectOf: { '@id': `${abs(pagePath)}#faq` },
  },
  faqPage(`${abs(pagePath)}#faq`, copy.value.faq.items),
])
</script>

<template>
  <div :style="accentVars">
    <main class="px-6 md:px-16 pt-28 md:pt-36">
      <nav class="flex items-center gap-2 text-sm text-muted" :aria-label="t('tools.breadcrumb')">
        <NuxtLink :to="localePath('/')" class="hover:text-accent transition-colors">Autofract</NuxtLink>
        <span aria-hidden="true">/</span>
        <NuxtLink :to="localePath('/tools')" class="hover:text-accent transition-colors">{{ t('tools.breadcrumb') }}</NuxtLink>
      </nav>

      <header class="mt-14 max-w-5xl">
        <p class="text-sm uppercase tracking-widest mb-5 font-mono" :style="{ color: meta.accent }">
          {{ copy.name }} — {{ copy.tagline }}
        </p>
        <h1 class="font-display font-black text-hero text-ink">{{ copy.h1 }}</h1>
        <p class="mt-8 max-w-2xl text-xl md:text-2xl text-muted leading-relaxed">{{ copy.lede }}</p>

        <div class="mt-10 flex flex-wrap items-center gap-6">
          <a
            :href="href"
            class="inline-flex items-center gap-3 rounded border-2 px-6 py-3 text-lg font-medium text-ink transition-colors"
            :style="{ borderColor: meta.accent }"
            rel="noopener"
          >
            {{ copy.cta.button }} <span aria-hidden="true">&nearr;</span>
          </a>
          <span class="font-mono text-[12px] uppercase tracking-wider text-muted">
            {{ t('tools.free') }} · {{ t('tools.opens', { host: meta.host }) }}
          </span>
        </div>
      </header>

      <section class="mt-28 max-w-6xl" :aria-label="copy.what.h2">
        <h2 class="font-display font-black text-chapter text-ink border-t border-ink/10 pt-10">{{ copy.what.h2 }}</h2>
        <div class="mt-10 grid gap-8 md:grid-cols-2">
          <p v-for="(p, i) in copy.what.body" :key="i" class="text-lg text-ink/85 leading-relaxed">{{ p }}</p>
        </div>
      </section>

      <section class="mt-28 max-w-6xl" :aria-label="copy.why.h2">
        <h2 class="font-display font-black text-chapter text-ink border-t border-ink/10 pt-10">{{ copy.why.h2 }}</h2>
        <div class="mt-10 grid gap-8 md:grid-cols-2">
          <p v-for="(p, i) in copy.why.body" :key="i" class="text-lg text-ink/85 leading-relaxed">{{ p }}</p>
        </div>
      </section>

      <section class="mt-28 max-w-5xl" :aria-label="copy.how.h2">
        <h2 class="font-display font-black text-chapter text-ink border-t border-ink/10 pt-10">{{ copy.how.h2 }}</h2>
        <ol class="mt-12 space-y-10">
          <li v-for="(s, i) in copy.how.steps" :key="i" class="border-l pl-6" :style="{ borderColor: `${meta.accent}55` }">
            <p class="font-mono text-[12px] mb-2" :style="{ color: meta.accent }">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="font-display font-bold text-2xl text-ink">{{ s.h3 }}</h3>
            <p class="mt-3 text-ink/75 leading-relaxed max-w-2xl">{{ s.body }}</p>
          </li>
        </ol>
      </section>

      <section class="mt-28" :aria-label="copy.useCases.h2">
        <h2 class="font-display font-black text-chapter text-ink border-t border-ink/10 pt-10">{{ copy.useCases.h2 }}</h2>
        <div class="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <div v-for="(u, i) in copy.useCases.items" :key="i">
            <h3 class="font-display font-bold text-xl text-ink">{{ u.h3 }}</h3>
            <p class="mt-3 text-ink/70 leading-relaxed">{{ u.body }}</p>
          </div>
        </div>
      </section>

      <section class="mt-28 max-w-3xl" :aria-label="copy.faq.h2">
        <h2 class="font-display font-black text-chapter text-ink border-t border-ink/10 pt-10">{{ copy.faq.h2 }}</h2>
        <dl class="mt-12 space-y-10">
          <div v-for="(f, i) in copy.faq.items" :key="i">
            <dt class="font-display font-bold text-xl text-ink">{{ f.q }}</dt>
            <dd class="mt-3 text-ink/75 leading-relaxed">{{ f.a }}</dd>
          </div>
        </dl>
      </section>

      <div class="mt-28 rounded-lg border px-8 py-12 md:px-12 max-w-6xl" :style="{ borderColor: `${meta.accent}40`, background: `${meta.accent}0d` }">
        <p class="font-display font-black text-3xl md:text-4xl text-ink mb-3">{{ copy.cta.title }}</p>
        <p class="text-ink/75 mb-8 max-w-xl">{{ copy.cta.body }}</p>
        <a
          :href="href"
          class="inline-flex items-center gap-3 rounded border px-6 py-3 text-lg font-medium text-ink transition-colors hover:bg-ink/5"
          :style="{ borderColor: meta.accent }"
          rel="noopener"
        >
          {{ copy.cta.button }} — {{ meta.host }} <span aria-hidden="true">&nearr;</span>
        </a>
      </div>

      <div class="mt-24 border-t border-ink/10 py-16 flex flex-wrap items-baseline justify-between gap-6">
        <NuxtLink
          :to="localePath(`/tools/${nextSlug}`)"
          class="font-display font-black text-chapter text-ink hover:text-accent transition-colors duration-300"
        >
          {{ toolsContentFor(lang).tools[nextSlug].name }} &rarr;
        </NuxtLink>
        <NuxtLink :to="localePath('/tools')" class="text-sm text-muted hover:text-ink transition-colors">
          {{ t('tools.backToHub') }}
        </NuxtLink>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
