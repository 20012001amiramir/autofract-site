<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { TOOLS, TOOL_META } from '~/data/tools'
import { toolsContentFor } from '~/content/tools'
import { asLocale } from '~/data/locales'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const copy = computed(() => toolsContentFor(asLocale(locale.value)).tools)
</script>

<template>
  <section class="px-6 md:px-16 pb-32 md:pb-44" :aria-label="t('tools.strip.heading')">
    <div class="border-t border-ink/10 pt-14">
      <p class="text-sm uppercase tracking-widest text-muted mb-4">{{ t('tools.strip.kicker') }}</p>
      <h2 class="font-display font-black text-chapter text-ink mb-6 max-w-4xl">{{ t('tools.strip.heading') }}</h2>
      <p class="text-lg md:text-xl text-muted max-w-2xl mb-14">{{ t('tools.strip.sub') }}</p>

      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <li v-for="slug in TOOLS" :key="slug">
          <NuxtLink
            :to="localePath(`/tools/${slug}`)"
            class="strip-card group flex h-full flex-col rounded-lg border border-ink/10 p-6 transition-colors duration-300"
            :style="{ '--card-accent': TOOL_META[slug].accent }"
          >
            <span class="font-display font-black text-2xl text-ink transition-colors duration-300 group-hover:text-[var(--card-accent)]">
              {{ copy[slug].name }}
            </span>
            <span class="mt-2 text-sm text-muted leading-relaxed">{{ copy[slug].tagline }}</span>
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink
        :to="localePath('/tools')"
        class="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
      >
        {{ t('tools.strip.cta') }}
        <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.strip-card:hover {
  border-color: color-mix(in srgb, var(--card-accent) 45%, transparent);
}
</style>
