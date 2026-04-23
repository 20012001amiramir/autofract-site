<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="px-6 md:px-16 py-40 md:py-56 max-w-3xl mx-auto">
    <h2 class="font-display font-black text-chapter text-ink mb-10">
      {{ t('studio.headline') }}
    </h2>
    <div class="space-y-6 text-lg md:text-xl text-ink/80">
      <p>{{ t('studio.p1') }}</p>
      <p>{{ t('studio.p2') }}</p>
    </div>
    <div class="mt-12 flex gap-8 text-base">
      <a href="https://x.com/autofract" class="text-ink hover:text-accent transition-colors" rel="noopener noreferrer" target="_blank">X</a>
      <a href="https://github.com/20012001amiramir" class="text-ink hover:text-accent transition-colors" rel="noopener noreferrer" target="_blank">GitHub</a>
      <a href="https://t.me/autofract" class="text-ink hover:text-accent transition-colors" rel="noopener noreferrer" target="_blank">Telegram</a>
    </div>
  </section>
</template>
