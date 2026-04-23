<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductChapter from './ProductChapter.vue'

const { t } = useI18n()
</script>

<template>
  <ProductChapter
    chapter="pathcore"
    :headline="t('pathcore.headline')"
    :body="t('pathcore.body')"
    :cta="t('pathcore.cta')"
    cta-href="https://pathcore.autofract.com"
    :chapter-label="t('pathcore.label')"
  >
    <template #visual>
      <div class="pathcore-grid w-full max-w-xl aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" class="w-full h-full" role="img" aria-label="PathCore architecture diagram — core, uncore, un-uncore layers">
          <defs>
            <linearGradient id="pc-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="rgb(94 234 212)" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="rgb(94 234 212)" stop-opacity="0.3"/>
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(245,241,234,0.08)" stroke-width="1"/>
          <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(245,241,234,0.12)" stroke-width="1"/>
          <circle cx="200" cy="200" r="70" fill="none" stroke="url(#pc-ring)" stroke-width="2"/>
          <text x="200" y="204" text-anchor="middle" fill="rgb(245,241,234)" font-family="ui-monospace, monospace" font-size="14" letter-spacing="2">CORE</text>
          <g fill="rgb(94 234 212)">
            <circle cx="200" cy="30" r="4"/>
            <circle cx="370" cy="200" r="4"/>
            <circle cx="200" cy="370" r="4"/>
            <circle cx="30" cy="200" r="4"/>
          </g>
          <g fill="rgba(245,241,234,0.5)" font-family="ui-monospace, monospace" font-size="11" letter-spacing="1">
            <text x="200" y="18" text-anchor="middle">api</text>
            <text x="396" y="204" text-anchor="end">workers</text>
            <text x="200" y="392" text-anchor="middle">mindview</text>
            <text x="5" y="204" text-anchor="start">chaos</text>
          </g>
          <g stroke="rgba(94,234,212,0.2)" stroke-width="1" stroke-dasharray="2 4">
            <line x1="200" y1="30" x2="200" y2="130"/>
            <line x1="370" y1="200" x2="270" y2="200"/>
            <line x1="200" y1="370" x2="200" y2="270"/>
            <line x1="30" y1="200" x2="130" y2="200"/>
          </g>
        </svg>
      </div>
    </template>
  </ProductChapter>
</template>

<style scoped>
.pathcore-grid {
  background:
    linear-gradient(rgba(94,234,212,0.04) 1px, transparent 1px) 0 0 / 40px 40px,
    linear-gradient(90deg, rgba(94,234,212,0.04) 1px, transparent 1px) 0 0 / 40px 40px;
  border-radius: 8px;
}
</style>
