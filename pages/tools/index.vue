<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteFooter from '~/components/SiteFooter.vue'
import { TOOLS, TOOL_META, PRODUCTS, PRODUCT_META, toolHref } from '~/data/tools'
import { toolsContentFor } from '~/content/tools'
import { asLocale } from '~/data/locales'
import { ogUrl } from '~/data/og'
import { useJsonLd } from '~/composables/useJsonLd'
import { breadcrumbList, faqPage, webApplication } from '~/composables/seo'
import { ORG_ID, SITE_NAME, TWITTER_HANDLE, WEBSITE_ID, abs } from '~/data/site'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const lang = computed(() => asLocale(locale.value))
const copy = computed(() => toolsContentFor(lang.value))
const hub = computed(() => copy.value.hub)

const toolCards = computed(() => TOOLS.map((slug, i) => ({
  slug,
  index: String(i + 1).padStart(2, '0'),
  meta: TOOL_META[slug],
  copy: copy.value.tools[slug],
  href: toolHref(slug, lang.value),
  page: localePath(`/tools/${slug}`),
})))

const productCards = computed(() => PRODUCTS.map(slug => ({
  slug,
  meta: PRODUCT_META[slug],
  copy: copy.value.products[slug],
  page: localePath(`/work/${PRODUCT_META[slug].caseSlug}`),
})))

useSeoMeta({
  title: () => hub.value.meta.title,
  description: () => hub.value.meta.description,
  ogTitle: () => hub.value.meta.title,
  ogDescription: () => hub.value.meta.description,
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: () => ({
    url: ogUrl('/og/tools', lang.value),
    width: 1200,
    height: 630,
    type: 'image/png' as const,
    alt: hub.value.meta.title,
  }),
  twitterCard: 'summary_large_image',
  twitterSite: TWITTER_HANDLE,
  twitterTitle: () => hub.value.meta.title,
  twitterDescription: () => hub.value.meta.description,
})

const hubPath = localePath('/tools')

useJsonLd('tools', [
  breadcrumbList([
    { name: SITE_NAME, path: localePath('/') },
    { name: t('tools.breadcrumb'), path: hubPath },
  ]),
  {
    '@type': 'CollectionPage',
    '@id': `${abs(hubPath)}#page`,
    name: hub.value.meta.title,
    description: hub.value.meta.description,
    url: abs(hubPath),
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: TOOLS.map((slug, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: webApplication({
          id: `${abs(localePath(`/tools/${slug}`))}#app`,
          name: copy.value.tools[slug].name,
          url: TOOL_META[slug].url,
          description: copy.value.tools[slug].tagline,
          category: TOOL_META[slug].category,
          locale: lang.value,
        }),
      })),
    },
  },
  faqPage(`${abs(hubPath)}#faq`, hub.value.faq.items),
])
</script>

<template>
  <div>
    <main class="px-6 md:px-16 pt-28 md:pt-36">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
      >
        <span aria-hidden="true">&larr;</span> Autofract
      </NuxtLink>

      <header class="mt-14 max-w-5xl">
        <p class="text-sm uppercase tracking-widest text-muted mb-5 font-mono">{{ hub.kicker }}</p>
        <h1 class="font-display font-black text-hero text-ink">{{ hub.h1 }}</h1>
        <p class="mt-8 max-w-2xl text-xl md:text-2xl text-muted leading-relaxed">{{ hub.lede }}</p>
      </header>

      <div class="mt-16 grid gap-10 md:grid-cols-2 max-w-6xl">
        <p v-for="(p, i) in hub.intro" :key="i" class="text-lg text-ink/85 leading-relaxed">{{ p }}</p>
      </div>

      <section class="mt-28" :aria-label="hub.toolsHeading">
        <div class="border-t border-ink/10 pt-10">
          <h2 class="font-display font-black text-chapter text-ink">{{ hub.toolsHeading }}</h2>
          <p class="mt-4 text-lg text-muted max-w-2xl">{{ hub.toolsSub }}</p>
        </div>

        <!-- Two columns: four cards make an even 2x2, and a third of the page
             is narrower than the tool name set in text-4xl. -->
        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <article
            v-for="c in toolCards"
            :key="c.slug"
            class="tool-card group relative flex flex-col overflow-hidden rounded-lg border border-ink/10 p-8 transition-colors duration-300"
            :style="{ '--card-accent': c.meta.accent }"
          >
            <div class="flex items-baseline justify-between mb-8">
              <span class="font-mono text-sm text-muted">{{ c.index }}</span>
              <span class="font-mono text-[11px] uppercase tracking-wider text-muted">{{ c.copy.category }}</span>
            </div>

            <h3 class="font-display font-black text-4xl text-ink transition-colors duration-300 group-hover:text-[var(--card-accent)]">
              <NuxtLink :to="c.page" class="after:absolute after:inset-0 after:content-['']">{{ c.copy.name }}</NuxtLink>
            </h3>
            <p class="mt-3 text-[12px] uppercase tracking-widest font-mono" :style="{ color: c.meta.accent }">
              {{ c.copy.tagline }}
            </p>
            <p class="mt-6 text-ink/75 leading-relaxed flex-1">{{ c.copy.lede }}</p>

            <p class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-[var(--card-accent)] transition-colors">
              {{ t('tools.read') }}
              <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </p>
            <a
              :href="c.href"
              class="relative z-10 mt-3 inline-flex max-w-full items-center gap-2 text-sm text-muted hover:text-ink transition-colors w-fit break-words"
              rel="noopener"
            >
              {{ t('tools.open') }} — {{ c.meta.host }} <span aria-hidden="true">&nearr;</span>
            </a>
          </article>
        </div>
      </section>

      <section class="mt-28" :aria-label="hub.productsHeading">
        <div class="border-t border-ink/10 pt-10">
          <h2 class="font-display font-black text-chapter text-ink">{{ hub.productsHeading }}</h2>
          <p class="mt-4 text-lg text-muted max-w-2xl">{{ hub.productsSub }}</p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 max-w-6xl">
          <article
            v-for="p in productCards"
            :key="p.slug"
            class="tool-card rounded-lg border border-ink/10 p-8 transition-colors duration-300"
            :style="{ '--card-accent': p.meta.accent }"
          >
            <h3 class="font-display font-black text-4xl text-ink">{{ p.copy.name }}</h3>
            <p class="mt-3 text-[12px] uppercase tracking-widest font-mono" :style="{ color: p.meta.accent }">
              {{ p.copy.tagline }}
            </p>
            <p class="mt-6 text-ink/75 leading-relaxed">{{ p.copy.blurb }}</p>
            <div class="mt-8 flex flex-wrap gap-6 text-sm">
              <a
                :href="p.meta.url"
                class="inline-flex max-w-full items-center gap-2 border-b border-ink/30 pb-0.5 font-medium text-ink hover:text-[var(--card-accent)] hover:border-[var(--card-accent)] transition-colors break-words"
                rel="noopener"
              >
                {{ p.meta.host }} <span aria-hidden="true">&nearr;</span>
              </a>
              <NuxtLink :to="p.page" class="inline-flex items-center gap-2 text-muted hover:text-ink transition-colors">
                {{ t('tools.case') }} <span aria-hidden="true">&rarr;</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <section class="mt-28 max-w-3xl" :aria-label="hub.faq.h2">
        <h2 class="font-display font-black text-chapter text-ink border-t border-ink/10 pt-10">{{ hub.faq.h2 }}</h2>
        <dl class="mt-12 space-y-10">
          <div v-for="(f, i) in hub.faq.items" :key="i">
            <dt class="font-display font-bold text-xl text-ink">{{ f.q }}</dt>
            <dd class="mt-3 text-ink/75 leading-relaxed">{{ f.a }}</dd>
          </div>
        </dl>
      </section>

      <div class="mt-28 rounded-lg border border-accent/25 bg-accent/5 px-6 sm:px-8 py-12 md:px-12 max-w-6xl">
        <p class="font-display font-black text-3xl md:text-4xl text-ink mb-3">{{ hub.cta.title }}</p>
        <p class="text-ink/75 mb-8 max-w-xl">{{ hub.cta.body }}</p>
        <NuxtLink
          :to="localePath('/hire')"
          class="inline-flex items-center gap-3 rounded border border-accent/60 px-6 py-3 text-lg font-medium text-ink hover:bg-accent/10 transition-colors"
        >
          {{ hub.cta.button }} <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>

      <div class="h-24" />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.tool-card:hover {
  border-color: color-mix(in srgb, var(--card-accent) 45%, transparent);
}
</style>
