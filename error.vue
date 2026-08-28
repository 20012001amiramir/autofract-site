<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteFooter from '~/components/SiteFooter.vue'
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const localePath = useLocalePath()

const isNotFound = computed(() => props.error?.statusCode === 404)
const title = computed(() => (isNotFound.value ? t('error.title404') : t('error.titleGeneric')))
const body = computed(() => (isNotFound.value ? t('error.body404') : t('error.bodyGeneric')))

// Error pages must never enter the index, whatever a crawler was following.
useSeoMeta({
  title: () => `${props.error?.statusCode ?? 500} — Autofract`,
  robots: 'noindex, follow',
})
</script>

<template>
  <NuxtLayout>
    <main class="px-6 md:px-16 pt-28 md:pt-36 min-h-[60vh]">
      <p class="font-mono text-sm uppercase tracking-widest text-accent mb-6">
        {{ t('error.kicker') }} — {{ error?.statusCode ?? 500 }}
      </p>
      <h1 class="font-display font-black text-hero text-ink max-w-5xl">{{ title }}</h1>
      <p class="mt-8 max-w-xl text-xl text-muted leading-relaxed">{{ body }}</p>

      <div class="mt-12 flex flex-wrap gap-6 text-lg">
        <NuxtLink
          :to="localePath('/')"
          class="inline-flex items-center gap-3 border-b-2 border-accent pb-1 font-medium text-ink hover:text-accent transition-colors"
        >
          {{ t('error.home') }} <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
        <NuxtLink :to="localePath('/tools')" class="inline-flex items-center gap-3 pb-1 text-muted hover:text-ink transition-colors">
          {{ t('error.tools') }} <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>

      <div class="h-24" />
    </main>
    <SiteFooter />
  </NuxtLayout>
</template>
