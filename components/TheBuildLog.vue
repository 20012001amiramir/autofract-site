<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Entry { date: string; summary: string }
interface Log { generatedAt: string; entries: Entry[] }

const { t } = useI18n()
const { data } = await useFetch<Log>('/build-log.json', {
  default: () => ({ generatedAt: '', entries: [] }),
})
</script>

<template>
  <section class="px-6 md:px-16 py-32 max-w-3xl mx-auto border-t border-ink/10">
    <h3 class="text-sm uppercase tracking-widest text-muted mb-10">
      {{ t('log.heading') }}
    </h3>
    <ul class="space-y-4 font-mono text-sm md:text-base">
      <li
        v-for="e in data?.entries"
        :key="e.date"
        class="grid grid-cols-[auto_1fr] gap-6 items-baseline"
      >
        <time class="text-muted tabular-nums" :datetime="e.date">{{ e.date }}</time>
        <span class="text-ink">{{ e.summary }}</span>
      </li>
    </ul>
  </section>
</template>
