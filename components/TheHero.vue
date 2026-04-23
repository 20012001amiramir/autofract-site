<script setup lang="ts">
import { ref, onMounted } from 'vue'

const reveal = ref(false)
onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    reveal.value = true
    return
  }
  requestAnimationFrame(() => { reveal.value = true })
})
</script>

<template>
  <section class="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 relative">
    <p
      class="text-sm md:text-base uppercase tracking-widest text-muted mb-8 transition-opacity duration-800 ease-editorial"
      :class="reveal ? 'opacity-100' : 'opacity-0'"
    >
      {{ $t('hero.kicker') }}
    </p>
    <h1 class="font-display font-black text-hero text-ink">
      <span class="block overflow-hidden">
        <span
          class="inline-block transition-transform duration-800 ease-editorial"
          :class="reveal ? 'translate-y-0' : 'translate-y-full'"
        >
          {{ $t('hero.line1') }}
        </span>
      </span>
      <span class="block overflow-hidden">
        <span
          class="inline-block transition-transform duration-800 ease-editorial delay-150"
          :class="reveal ? 'translate-y-0' : 'translate-y-full'"
        >
          {{ $t('hero.line2') }}<span class="text-accent animate-blink">_</span>
        </span>
      </span>
    </h1>
    <p
      class="mt-10 max-w-xl text-lg md:text-xl text-muted transition-opacity duration-800 ease-editorial delay-500"
      :class="reveal ? 'opacity-100' : 'opacity-0'"
    >
      {{ $t('hero.sub') }}
    </p>
  </section>
</template>

<style>
@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}
.animate-blink {
  display: inline-block;
  animation: blink 1s step-end infinite;
  margin-left: 0.05em;
}
@media (prefers-reduced-motion: reduce) {
  .animate-blink { animation: none; opacity: 1; }
}
</style>
