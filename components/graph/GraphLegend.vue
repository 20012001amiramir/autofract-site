<script setup lang="ts">
import { TYPE_COLORS, TYPE_LABELS } from '~/data/systems'

defineProps<{ accent: string }>()
</script>

<template>
  <div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted">
    <span class="inline-flex items-center gap-2">
      <span class="h-2 w-2 rounded-full" :style="{ background: accent, boxShadow: `0 0 6px ${accent}` }" />
      Core
    </span>
    <span v-for="(color, key) in TYPE_COLORS" :key="key" class="inline-flex items-center gap-2">
      <span class="h-2 w-2 rounded-full" :style="{ background: color, boxShadow: `0 0 6px ${color}` }" />
      {{ TYPE_LABELS[key] }}
    </span>
  </div>
</template>
