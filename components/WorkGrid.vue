<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CASES, CASE_META, SYSTEMS } from '~/data/systems'

const { t } = useI18n()
const localePath = useLocalePath()

const cards = CASES.map((slug, i) => ({
  slug,
  index: String(i + 1).padStart(2, '0'),
  accent: CASE_META[slug].accent,
  nodeCount: SYSTEMS[slug].nodes.length,
}))
</script>

<template>
  <section id="work" class="px-6 md:px-16 py-32 md:py-44 scroll-mt-8" :aria-label="t('work.heading')">
    <p class="text-sm uppercase tracking-widest text-muted mb-4">{{ t('work.kicker') }}</p>
    <h2 class="font-display font-black text-chapter text-ink mb-6 max-w-4xl">{{ t('work.heading') }}</h2>
    <p class="text-lg md:text-xl text-muted max-w-2xl mb-16">{{ t('work.sub') }}</p>

    <div class="grid gap-6 md:grid-cols-2">
      <NuxtLink
        v-for="c in cards"
        :key="c.slug"
        :to="localePath(`/work/${c.slug}`)"
        class="work-card group relative overflow-hidden rounded-lg border border-ink/10 p-8 md:p-10 transition-colors duration-300"
        :style="{ '--card-accent': c.accent }"
      >
        <div class="flex items-baseline justify-between mb-10">
          <span class="font-mono text-sm text-muted">{{ c.index }}</span>
          <span class="font-mono text-[11px] uppercase tracking-wider text-muted">
            {{ c.nodeCount }} {{ t('work.systems') }}
          </span>
        </div>
        <h3
          class="font-display font-black text-4xl md:text-5xl text-ink transition-colors duration-300 group-hover:text-[var(--card-accent)]"
        >
          {{ t(`work.${c.slug}.name`) }}
        </h3>
        <p class="mt-3 text-base uppercase tracking-widest font-mono text-[12px]" :style="{ color: c.accent }">
          {{ t(`work.${c.slug}.tag`) }}
        </p>
        <p class="mt-6 text-ink/75 max-w-md leading-relaxed">
          {{ t(`work.${c.slug}.blurb`) }}
        </p>
        <p class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-[var(--card-accent)] transition-colors duration-300">
          {{ t('work.view') }}
          <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </p>
        <div
          class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
          :style="{ background: c.accent }"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.work-card:hover {
  border-color: color-mix(in srgb, var(--card-accent) 45%, transparent);
}
</style>
