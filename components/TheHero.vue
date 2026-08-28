<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SystemGraph from '~/components/graph/SystemGraph.vue'
import { localizedStudioMap } from '~/content/systems'

const { locale } = useI18n()
const localePath = useLocalePath()

const studioMap = computed(() => localizedStudioMap(locale.value))
</script>

<template>
  <section class="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 relative overflow-hidden">
    <!-- the studio's living graph, behind the text -->
    <ClientOnly>
      <div class="absolute inset-0 opacity-60 md:opacity-80" aria-hidden="true">
        <SystemGraph :map="studioMap" :height="0" ambient />
      </div>
    </ClientOnly>
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper via-paper/70 to-paper/20" aria-hidden="true" />

    <div class="relative">
      <p class="reveal r-kicker text-sm md:text-base uppercase tracking-widest text-muted mb-8">
        {{ $t('hero.kicker') }}
      </p>
      <h1 class="font-display font-black text-hero text-ink">
        <span class="block overflow-hidden">
          <span class="slide-up s-1 inline-block">{{ $t('hero.line1') }}</span>
        </span>
        <span class="block overflow-hidden">
          <span class="slide-up s-2 inline-block">
            {{ $t('hero.line2') }}<span class="text-accent animate-blink">.</span>
          </span>
        </span>
      </h1>
      <p class="reveal r-sub mt-10 max-w-xl text-lg md:text-xl text-muted">
        {{ $t('hero.sub') }}
      </p>
      <div class="reveal r-cta mt-10 flex flex-wrap items-center gap-6">
        <NuxtLink
          :to="localePath('/hire')"
          class="inline-flex items-center gap-3 rounded border border-accent/60 px-6 py-3 text-lg font-medium text-ink hover:bg-accent/10 transition-colors"
        >
          {{ $t('hero.hireCta') }} <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
        <a href="#work" class="text-muted hover:text-accent transition-colors text-lg">{{ $t('hero.workCta') }} &darr;</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Reveal is CSS-driven: content is visible without JS and animates on first paint. */
.reveal { opacity: 0; animation: fade-in 800ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.slide-up { transform: translateY(100%); animation: rise 800ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

.r-kicker { animation-delay: 0ms; }
.s-1 { animation-delay: 60ms; }
.s-2 { animation-delay: 210ms; }
.r-sub { animation-delay: 480ms; }
.r-cta { animation-delay: 640ms; }

@keyframes fade-in { to { opacity: 1; } }
@keyframes rise { to { transform: translateY(0); } }

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
  .reveal, .slide-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .animate-blink { animation: none; opacity: 1; }
}
</style>
