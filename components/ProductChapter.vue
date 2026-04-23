<script setup lang="ts">
import { ref } from 'vue'
import type { Chapter } from '~/composables/useChapterColors'
import { setChapter, clearChapter } from '~/composables/useChapterColors'
import { useScrollChapter } from '~/composables/useScrollChapter'

const props = defineProps<{
  chapter: Chapter
  headline: string
  body: string
  cta: string
  ctaHref: string
  chapterLabel: string
}>()

const section = ref<HTMLElement | null>(null)
useScrollChapter(section, {
  onEnter: () => setChapter(props.chapter),
  onExit: () => clearChapter(),
  threshold: 0.4,
})
</script>

<template>
  <section
    ref="section"
    class="min-h-[90vh] px-6 md:px-16 py-32 md:py-48 grid md:grid-cols-12 gap-8 items-center bg-paper"
    :aria-label="chapterLabel"
  >
    <div class="md:col-span-6">
      <h2 class="font-display font-black text-chapter text-ink mb-8">
        {{ headline }}
      </h2>
      <p class="text-lg md:text-xl text-ink/80 mb-10 max-w-md">
        {{ body }}
      </p>
      <a
        :href="ctaHref"
        class="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-lg font-medium text-ink hover:text-accent transition-colors duration-300"
      >
        {{ cta }}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <div class="md:col-span-6 flex justify-center md:justify-end">
      <slot name="visual" />
    </div>
  </section>
</template>
