<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SystemGraph from '~/components/graph/SystemGraph.vue'
import GraphLegend from '~/components/graph/GraphLegend.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import { CASES, CASE_META, TYPE_COLORS, type CaseSlug } from '~/data/systems'
import { localizedSystem } from '~/content/systems'
import { useJsonLd, ORG_ID } from '~/composables/useJsonLd'
import { breadcrumbList } from '~/composables/seo'
import { asLocale } from '~/data/locales'
import { ogUrl } from '~/data/og'
import { SITE_NAME, TWITTER_HANDLE, abs } from '~/data/site'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const slug = route.params.slug as CaseSlug
if (!CASES.includes(slug)) {
  throw createError({ statusCode: 404, statusMessage: 'Case not found' })
}

const meta = CASE_META[slug]
// The topology is language-free; labels and tooltips come from the locale copy.
const map = computed(() => localizedSystem(slug, locale.value))
const nextSlug = CASES[(CASES.indexOf(slug) + 1) % CASES.length]

function hexToTriplet(hex: string): string {
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`
}
const accentVars = {
  '--color-accent': hexToTriplet(meta.accent),
  '--color-accent-secondary': hexToTriplet(meta.accent),
}

const stats = computed(() => (['s1', 's2', 's3', 's4'] as const).map(k => ({
  value: t(`work.${slug}.${k}v`),
  label: t(`work.${slug}.${k}l`),
})))

const detailNodes = computed(() => map.value.nodes.filter(n => n.desc))

function nodeColor(type: string): string {
  return type === 'core' ? meta.accent : TYPE_COLORS[type as keyof typeof TYPE_COLORS]
}

// `metaTitle` leads with what the system is, not just its name: the product
// name alone is identical in every language and carries no keyword.
useSeoMeta({
  title: () => `${t(`work.${slug}.metaTitle`)} — Autofract`,
  description: () => t(`work.${slug}.metaDesc`),
  ogTitle: () => `${t(`work.${slug}.metaTitle`)} — Autofract`,
  ogDescription: () => t(`work.${slug}.metaDesc`),
  ogType: 'article',
  ogSiteName: SITE_NAME,
  ogImage: () => ({
    url: ogUrl(`/og/${slug}`, asLocale(locale.value)),
    width: 1200,
    height: 630,
    type: 'image/png' as const,
    alt: `${t(`work.${slug}.name`)} — ${t(`work.${slug}.tag`)}`,
  }),
  twitterCard: 'summary_large_image',
  twitterSite: TWITTER_HANDLE,
  twitterTitle: () => `${t(`work.${slug}.metaTitle`)} — Autofract`,
  twitterDescription: () => t(`work.${slug}.metaDesc`),
})

useJsonLd('case', [
  breadcrumbList([
    { name: SITE_NAME, path: localePath('/') },
    { name: t(`work.${slug}.name`), path: localePath(`/work/${slug}`) },
  ]),
  {
    '@type': 'CreativeWork',
    '@id': `${abs(localePath(`/work/${slug}`))}#case`,
    name: t(`work.${slug}.name`),
    headline: t(`work.${slug}.headline`),
    description: t(`work.${slug}.metaDesc`),
    creator: { '@id': ORG_ID },
    ...(meta.link ? { about: { '@type': 'SoftwareApplication', name: t(`work.${slug}.name`), applicationCategory: 'BusinessApplication', url: meta.link } } : {}),
  },
])
</script>

<template>
  <div :style="accentVars">
    <main class="px-6 md:px-16 pt-28 md:pt-36">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
      >
        <span aria-hidden="true">&larr;</span> Autofract
      </NuxtLink>

      <header class="mt-14 max-w-5xl">
        <p class="text-sm uppercase tracking-widest mb-5 font-mono" :style="{ color: meta.accent }">
          {{ t('casepage.kicker') }}
        </p>
        <h1 class="font-display font-black text-hero text-ink">{{ t(`work.${slug}.headline`) }}</h1>
        <p class="mt-8 max-w-2xl text-xl md:text-2xl text-muted leading-relaxed">
          {{ t(`work.${slug}.tagline`) }}
        </p>
      </header>

      <div class="mt-20 grid grid-cols-2 gap-y-10 md:grid-cols-4 border-y border-ink/10 py-10">
        <div v-for="s in stats" :key="s.label" class="pr-6">
          <p class="font-display font-black text-4xl md:text-5xl" :style="{ color: meta.accent }">{{ s.value }}</p>
          <p class="mt-2 text-sm text-muted leading-snug">{{ s.label }}</p>
        </div>
      </div>

      <div class="mt-20 grid gap-10 md:grid-cols-2 max-w-6xl">
        <p class="text-lg md:text-xl text-ink/85 leading-relaxed">{{ t(`work.${slug}.body1`) }}</p>
        <p class="text-lg md:text-xl text-ink/85 leading-relaxed">{{ t(`work.${slug}.body2`) }}</p>
      </div>

      <section class="mt-28" :aria-label="t('casepage.map')">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <p class="text-sm uppercase tracking-widest text-muted mb-2">{{ t('casepage.map') }}</p>
            <p class="text-sm text-muted/80 font-mono">{{ t('casepage.hint') }}</p>
          </div>
          <GraphLegend :accent="meta.accent" />
        </div>
        <div class="rounded-lg border border-ink/10 bg-paper overflow-hidden">
          <ClientOnly>
            <SystemGraph :map="map" :height="620" />
            <template #fallback>
              <div :style="{ height: '620px' }" />
            </template>
          </ClientOnly>
        </div>
      </section>

      <section class="mt-28 max-w-6xl" :aria-label="t('casepage.inside')">
        <p class="text-sm uppercase tracking-widest text-muted mb-10">{{ t('casepage.inside') }}</p>
        <div class="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="n in detailNodes" :key="n.id" class="border-l pl-4" :style="{ borderColor: `${nodeColor(n.type)}55` }">
            <p class="font-mono text-[12px] uppercase tracking-wider mb-1.5" :style="{ color: nodeColor(n.type) }">
              {{ n.label }}
            </p>
            <p class="text-sm text-ink/70 leading-relaxed">{{ n.desc }}</p>
          </div>
        </div>
      </section>

      <div v-if="meta.link" class="mt-24">
        <a
          :href="meta.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 border-b-2 border-accent pb-1 text-lg font-medium text-ink hover:text-accent transition-colors"
        >
          {{ t('casepage.visit') }} — {{ meta.linkLabel }}
          <span aria-hidden="true">&nearr;</span>
        </a>
      </div>

      <div class="mt-28 rounded-lg border border-accent/25 bg-accent/5 px-6 sm:px-8 py-12 md:px-12 max-w-6xl">
        <p class="font-display font-black text-3xl md:text-4xl text-ink mb-3">{{ t('casepage.hireTitle') }}</p>
        <p class="text-ink/75 mb-8 max-w-xl">{{ t('casepage.hireBody') }}</p>
        <NuxtLink
          :to="localePath('/hire')"
          class="inline-flex items-center gap-3 rounded border border-accent/60 px-6 py-3 text-lg font-medium text-ink hover:bg-accent/10 transition-colors"
        >
          {{ t('casepage.hireCta') }} <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>

      <div class="mt-24 border-t border-ink/10 py-16">
        <p class="text-sm uppercase tracking-widest text-muted mb-4">{{ t('casepage.next') }}</p>
        <NuxtLink
          :to="localePath(`/work/${nextSlug}`)"
          class="font-display font-black text-chapter text-ink hover:text-accent transition-colors duration-300"
        >
          {{ t(`work.${nextSlug}.name`) }} &rarr;
        </NuxtLink>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
