<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteFooter from '~/components/SiteFooter.vue'
import { useJsonLd, SITE_URL, ORG_ID } from '~/composables/useJsonLd'
import { breadcrumbList } from '~/composables/seo'
import { asLocale } from '~/data/locales'
import { ogUrl } from '~/data/og'
import { SITE_NAME, TWITTER_HANDLE } from '~/data/site'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const OFFERS = [
  { key: 'build', price: 'from $4,000', accent: '#5eead4', minPrice: 4000, recurring: false },
  { key: 'run', price: 'from $1,500/mo', accent: '#ff6b35', minPrice: 1500, recurring: true },
  { key: 'rescue', price: 'from $2,000', accent: '#f38ba8', minPrice: 2000, recurring: false },
] as const

const CAPS = [
  { key: 'c1', proof: 'videolinker' },
  { key: 'c2', proof: 'videolinker' },
  { key: 'c3', proof: 'pathcore' },
  { key: 'c4', proof: 'frontdesk' },
  { key: 'c5', proof: 'relocating' },
  { key: 'c6', proof: 'frontdesk' },
] as const

const STEPS = ['s1', 's2', 's3', 's4'] as const
const FAQS = ['f1', 'f2', 'f3', 'f4'] as const

// --- форма ---
const name = ref('')
const email = ref('')
const company = ref('')
const interest = ref<'build' | 'run' | 'rescue' | 'other'>('build')
const budget = ref('unsure')
const message = ref('')
const website = ref('') // honeypot
const state = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorText = ref('')
const sentHeading = ref<HTMLElement | null>(null)
let mountedAt = 0
onMounted(() => { mountedAt = Date.now() })

const BUDGETS = [
  { value: 'lt4k', label: '< $4k' },
  { value: '4-10k', label: '$4–10k' },
  { value: '10-25k', label: '$10–25k' },
  { value: '25k+', label: '$25k+' },
  { value: 'unsure', label: '?' },
]

async function submit() {
  if (state.value === 'sending') return
  state.value = 'sending'
  errorText.value = ''
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        company: company.value,
        interest: interest.value,
        budget: budget.value,
        message: message.value,
        website: website.value,
        elapsed: Date.now() - mountedAt,
      },
    })
    state.value = 'sent'
    await nextTick()
    sentHeading.value?.focus()
  } catch (e: unknown) {
    state.value = 'error'
    const status = (e as { statusCode?: number })?.statusCode
    errorText.value = status === 429 ? t('hire.form.err429') : t('hire.form.errGeneric')
  }
}

useSeoMeta({
  title: () => `${t('hire.metaTitle')} — Autofract`,
  description: () => t('hire.metaDesc'),
  ogTitle: () => `${t('hire.metaTitle')} — Autofract`,
  ogDescription: () => t('hire.metaDesc'),
  ogType: 'website',
  ogSiteName: SITE_NAME,
  ogImage: () => ({
    url: ogUrl('/og/hire', asLocale(locale.value)),
    width: 1200,
    height: 630,
    type: 'image/png' as const,
    alt: `Autofract — ${t('hire.metaTitle')}`,
  }),
  twitterCard: 'summary_large_image',
  twitterSite: TWITTER_HANDLE,
  twitterTitle: () => `${t('hire.metaTitle')} — Autofract`,
  twitterDescription: () => t('hire.metaDesc'),
})

// Entity graph: breadcrumb (still a visible SERP enhancement in 2026),
// one Service+Offer per priced tier, and FAQPage (AI-ingestion value; Google
// retired FAQ rich results May 2026, so no stars expected).
useJsonLd('hire', [
  breadcrumbList([
    { name: SITE_NAME, path: localePath('/') },
    { name: t('hire.metaTitle'), path: localePath('/hire') },
  ]),
  ...OFFERS.map(o => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/hire#service-${o.key}`,
    name: `${t(`hire.offers.${o.key}.title`)} — Autofract`,
    serviceType: t(`hire.offers.${o.key}.label`),
    description: t(`hire.offers.${o.key}.desc`),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Worldwide' },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': o.recurring ? 'UnitPriceSpecification' : 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: o.minPrice,
        ...(o.recurring ? { unitCode: 'MON' } : {}),
      },
    },
  })),
  {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/hire#faq`,
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: t(`hire.faq.${f}q`),
      acceptedAnswer: { '@type': 'Answer', text: t(`hire.faq.${f}a`) },
    })),
  },
])
</script>

<template>
  <div>
    <main class="px-6 md:px-16 pt-28 md:pt-36">
      <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
        <span aria-hidden="true">&larr;</span> Autofract
      </NuxtLink>

      <!-- Pitch -->
      <header class="mt-14 max-w-5xl">
        <p class="text-sm uppercase tracking-widest text-accent mb-5 font-mono">{{ t('hire.kicker') }}</p>
        <h1 class="font-display font-black text-hero text-ink">{{ t('hire.headline') }}</h1>
        <p class="mt-8 max-w-2xl text-xl md:text-2xl text-muted leading-relaxed">{{ t('hire.sub') }}</p>
        <a
          href="#lead-form"
          class="mt-10 inline-flex items-center gap-3 rounded border border-accent/60 px-6 py-3 text-lg font-medium text-ink hover:bg-accent/10 transition-colors"
        >
          {{ t('hire.cta') }} <span aria-hidden="true">&darr;</span>
        </a>
      </header>

      <!-- Offers -->
      <section class="mt-28" :aria-label="t('hire.offersHeading')">
        <p class="text-sm uppercase tracking-widest text-muted mb-10">{{ t('hire.offersHeading') }}</p>
        <div class="grid gap-6 lg:grid-cols-3">
          <div
            v-for="o in OFFERS"
            :key="o.key"
            class="rounded-lg border border-ink/10 p-8 flex flex-col"
            :style="{ '--card-accent': o.accent }"
          >
            <p class="font-mono text-[12px] uppercase tracking-widest mb-4" :style="{ color: o.accent }">
              {{ t(`hire.offers.${o.key}.label`) }}
            </p>
            <h3 class="font-display font-black text-3xl text-ink">{{ t(`hire.offers.${o.key}.title`) }}</h3>
            <p class="mt-2 font-display font-bold text-xl" :style="{ color: o.accent }">{{ o.price }}</p>
            <p class="mt-5 text-ink/75 leading-relaxed">{{ t(`hire.offers.${o.key}.desc`) }}</p>
            <ul class="mt-6 space-y-2.5 text-sm text-ink/70">
              <li v-for="n in 3" :key="n" class="flex gap-2.5">
                <span class="mt-0.5" :style="{ color: o.accent }" aria-hidden="true">&#9642;</span>
                {{ t(`hire.offers.${o.key}.b${n}`) }}
              </li>
            </ul>
          </div>
        </div>
        <p class="mt-6 text-sm text-muted">{{ t('hire.offersNote') }}</p>
      </section>

      <!-- What we take on -->
      <section class="mt-28 max-w-6xl" :aria-label="t('hire.capsHeading')">
        <p class="text-sm uppercase tracking-widest text-muted mb-4">{{ t('hire.capsHeading') }}</p>
        <h2 class="font-display font-black text-chapter text-ink mb-14 max-w-3xl">{{ t('hire.capsTitle') }}</h2>
        <div class="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="c in CAPS" :key="c.key" class="border-l border-ink/15 pl-4">
            <h3 class="font-display font-bold text-xl text-ink mb-2">{{ t(`hire.caps.${c.key}.t`) }}</h3>
            <p class="text-sm text-ink/70 leading-relaxed mb-3">{{ t(`hire.caps.${c.key}.b`) }}</p>
            <NuxtLink
              :to="localePath(`/work/${c.proof}`)"
              class="font-mono text-[11px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              {{ t('hire.proven') }}: {{ t(`work.${c.proof}.name`) }} &rarr;
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section class="mt-28 border-t border-ink/10 pt-20" :aria-label="t('hire.processHeading')">
        <p class="text-sm uppercase tracking-widest text-muted mb-14">{{ t('hire.processHeading') }}</p>
        <div class="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(s, i) in STEPS" :key="s">
            <p class="font-mono text-sm text-accent mb-3">0{{ i + 1 }}</p>
            <h3 class="font-display font-bold text-2xl text-ink mb-3">{{ t(`hire.process.${s}t`) }}</h3>
            <p class="text-sm text-ink/70 leading-relaxed">{{ t(`hire.process.${s}b`) }}</p>
          </div>
        </div>
      </section>

      <!-- Guarantees strip -->
      <section class="mt-24 rounded-lg border border-accent/25 bg-accent/5 px-8 py-10 max-w-6xl" :aria-label="t('hire.gHeading')">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <p v-for="n in 4" :key="n" class="text-sm text-ink/85 leading-relaxed">
            <span class="text-accent" aria-hidden="true">&#10003;&nbsp;</span>{{ t(`hire.g${n}`) }}
          </p>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mt-28 max-w-4xl" :aria-label="t('hire.faqHeading')">
        <p class="text-sm uppercase tracking-widest text-muted mb-12">{{ t('hire.faqHeading') }}</p>
        <div class="space-y-10">
          <div v-for="f in FAQS" :key="f">
            <h3 class="font-display font-bold text-xl text-ink mb-2.5">{{ t(`hire.faq.${f}q`) }}</h3>
            <p class="text-ink/70 leading-relaxed">{{ t(`hire.faq.${f}a`) }}</p>
          </div>
        </div>
      </section>

      <!-- Form -->
      <section id="lead-form" class="mt-32 border-t border-ink/10 pt-20 pb-28 max-w-3xl scroll-mt-16" :aria-label="t('hire.form.heading')">
        <h2 class="font-display font-black text-chapter text-ink mb-4">{{ t('hire.form.heading') }}</h2>
        <p class="text-muted mb-12 text-lg">{{ t('hire.form.sub') }}</p>

        <div v-if="state === 'sent'" class="rounded-lg border border-accent/40 bg-accent/5 p-8" role="status">
          <p ref="sentHeading" tabindex="-1" class="font-display font-bold text-2xl text-ink mb-2 outline-none">{{ t('hire.form.sentTitle') }}</p>
          <p class="text-ink/75">{{ t('hire.form.sentBody') }}</p>
        </div>

        <form v-else class="space-y-7" @submit.prevent="submit">
          <div class="grid gap-7 sm:grid-cols-2">
            <label class="block">
              <span class="mb-2 block text-sm text-muted">{{ t('hire.form.name') }} *</span>
              <input v-model="name" type="text" name="name" required maxlength="120" class="field" autocomplete="name" />
            </label>
            <label class="block">
              <span class="mb-2 block text-sm text-muted">Email *</span>
              <input v-model="email" type="email" name="email" required maxlength="200" class="field" autocomplete="email" />
            </label>
          </div>
          <label class="block">
            <span class="mb-2 block text-sm text-muted">{{ t('hire.form.company') }}</span>
            <input v-model="company" type="text" name="company" maxlength="200" class="field" autocomplete="organization" />
          </label>

          <fieldset>
            <legend class="mb-3 text-sm text-muted">{{ t('hire.form.interest') }}</legend>
            <div class="flex flex-wrap gap-2.5">
              <label
                v-for="o in ['build', 'run', 'rescue', 'other']"
                :key="o"
                class="chip cursor-pointer rounded border px-4 py-2 text-sm transition-colors"
                :class="interest === o ? 'border-accent text-accent' : 'border-ink/15 text-ink/70 hover:border-ink/30'"
              >
                <input v-model="interest" type="radio" name="interest" :value="o" class="sr-only" />
                {{ t(`hire.form.i_${o}`) }}
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend class="mb-3 text-sm text-muted">{{ t('hire.form.budget') }}</legend>
            <div class="flex flex-wrap gap-2.5">
              <label
                v-for="b in BUDGETS"
                :key="b.value"
                class="chip cursor-pointer rounded border px-4 py-2 text-sm font-mono transition-colors"
                :class="budget === b.value ? 'border-accent text-accent' : 'border-ink/15 text-ink/70 hover:border-ink/30'"
              >
                <input v-model="budget" type="radio" name="budget" :value="b.value" class="sr-only" />
                {{ b.value === 'unsure' ? t('hire.form.b_unsure') : b.label }}
              </label>
            </div>
          </fieldset>

          <label class="block">
            <span class="mb-2 block text-sm text-muted">{{ t('hire.form.message') }} *</span>
            <textarea
              v-model="message" name="message" required minlength="20" maxlength="5000" rows="6"
              class="field resize-y" :placeholder="t('hire.form.placeholder')"
            />
          </label>

          <!-- honeypot -->
          <label class="hp-field" aria-hidden="true">
            Website
            <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off" />
          </label>

          <p v-if="state === 'error'" role="alert" class="text-sm" style="color: #f38ba8">
            {{ errorText }}
            <a class="underline hover:text-accent" href="mailto:info@autofract.com">info@autofract.com</a>
          </p>

          <button
            type="submit"
            :disabled="state === 'sending'"
            class="inline-flex items-center gap-3 rounded bg-accent px-8 py-3.5 text-lg font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {{ state === 'sending' ? t('hire.form.sending') : t('hire.form.submit') }}
            <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.field {
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid rgb(var(--color-ink) / 0.15);
  background: rgb(var(--color-ink) / 0.04);
  padding: 0.7rem 0.9rem;
  color: rgb(var(--color-ink));
  outline: none;
  transition: border-color 200ms ease;
}
.field:focus {
  border-color: rgb(var(--color-accent));
}
.hp-field {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
/* видимый фокус на радио-чипсах (сам input — sr-only) */
.chip:focus-within {
  outline: 2px solid rgb(var(--color-accent));
  outline-offset: 2px;
}
</style>
