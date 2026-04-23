<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LangSwitcher from './LangSwitcher.vue'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="px-6 md:px-16 py-16 border-t border-ink/10 grid gap-8 md:grid-cols-3 items-center">
    <div>
      <p class="font-display text-xl font-black text-ink">Autofract</p>
      <p class="text-sm text-muted mt-1">{{ t('footer.tagline') }}</p>
    </div>
    <div class="flex justify-start md:justify-center">
      <LangSwitcher />
    </div>
    <div class="flex gap-4 text-sm md:justify-end">
      <a href="mailto:studio@autofract.com" class="text-ink hover:text-accent transition-colors">studio@autofract.com</a>
      <span class="text-muted">© {{ year }}</span>
    </div>
  </footer>
</template>
