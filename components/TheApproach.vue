<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = ['i1', 'i2', 'i3', 'i4']
</script>

<template>
  <section class="px-6 md:px-16 py-32 md:py-44 border-t border-ink/10" :aria-label="t('approach.heading')">
    <p class="text-sm uppercase tracking-widest text-muted mb-4">{{ t('approach.kicker') }}</p>
    <h2 class="font-display font-black text-chapter text-ink mb-16 max-w-4xl">{{ t('approach.heading') }}</h2>

    <div class="grid gap-x-12 gap-y-14 md:grid-cols-2">
      <div v-for="(key, i) in items" :key="key" class="max-w-lg">
        <p class="font-mono text-sm text-accent mb-3">0{{ i + 1 }}</p>
        <h3 class="font-display font-bold text-2xl md:text-3xl text-ink mb-4">{{ t(`approach.${key}t`) }}</h3>
        <p class="text-ink/75 leading-relaxed">{{ t(`approach.${key}b`) }}</p>
      </div>
    </div>
  </section>
</template>
