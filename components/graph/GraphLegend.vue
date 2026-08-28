<script setup lang="ts">
import { TYPE_COLORS, type NodeType } from '~/data/systems'

defineProps<{ accent: string }>()

const { t } = useI18n()

/** Legend wording is UI chrome, so it lives in i18n rather than data/systems.ts. */
const label = (key: NodeType) => t(`casepage.legend.${key}`)
</script>

<template>
  <div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted">
    <span class="inline-flex items-center gap-2">
      <span class="h-2 w-2 rounded-full" :style="{ background: accent, boxShadow: `0 0 6px ${accent}` }" />
      {{ t('casepage.legend.core') }}
    </span>
    <span v-for="(color, key) in TYPE_COLORS" :key="key" class="inline-flex items-center gap-2">
      <span class="h-2 w-2 rounded-full" :style="{ background: color, boxShadow: `0 0 6px ${color}` }" />
      {{ label(key) }}
    </span>
  </div>
</template>
