<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from '#i18n'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav aria-label="Language" class="flex gap-3 text-sm">
    <NuxtLink
      v-for="l in (locales as { code: string; name: string }[])"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      :class="l.code === locale ? 'text-ink font-semibold' : 'text-muted hover:text-ink'"
      class="uppercase tracking-wide transition-colors"
      :hreflang="l.code"
    >
      {{ l.code }}
    </NuxtLink>
  </nav>
</template>
