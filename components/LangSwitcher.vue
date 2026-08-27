<script setup lang="ts">
import { ref } from 'vue'
import { useI18n, useSwitchLocalePath } from '#i18n'
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT, asLocale } from '~/data/locales'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// switchLocalePath keeps the current route, its params and its query, so the
// reader lands on the same page — not back on the home page.
const open = ref(false)
</script>

<template>
  <details
    class="lang relative"
    :open="open"
    @toggle="open = ($event.target as HTMLDetailsElement).open"
  >
    <summary
      class="flex cursor-pointer list-none items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      :aria-label="`Language — ${LOCALE_LABELS[asLocale(locale)]}`"
    >
      <span class="font-mono uppercase tracking-wide text-ink">{{ LOCALE_SHORT[asLocale(locale)] }}</span>
      <span aria-hidden="true" class="text-[10px]">&#9662;</span>
    </summary>

    <nav
      aria-label="Language"
      class="absolute bottom-full left-0 z-20 mb-3 min-w-[11rem] rounded-lg border border-ink/15 bg-paper p-1.5 shadow-xl md:left-1/2 md:-translate-x-1/2"
    >
      <NuxtLink
        v-for="l in LOCALES"
        :key="l"
        :to="switchLocalePath(l)"
        :hreflang="l"
        :lang="l"
        :aria-current="l === locale ? 'true' : undefined"
        class="flex items-center justify-between gap-6 rounded px-3 py-2 text-sm transition-colors"
        :class="l === locale ? 'bg-ink/5 text-ink font-semibold' : 'text-muted hover:bg-ink/5 hover:text-ink'"
        @click="open = false"
      >
        <span>{{ LOCALE_LABELS[l] }}</span>
        <span class="font-mono text-[11px] uppercase tracking-wider text-muted">{{ LOCALE_SHORT[l] }}</span>
      </NuxtLink>
    </nav>
  </details>
</template>

<style scoped>
/* Safari still paints the disclosure triangle without this. */
.lang summary::-webkit-details-marker {
  display: none;
}
</style>
