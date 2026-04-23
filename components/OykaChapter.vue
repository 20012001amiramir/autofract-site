<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductChapter from './ProductChapter.vue'

const { t } = useI18n()
</script>

<template>
  <ProductChapter
    chapter="oyka"
    :headline="t('oyka.headline')"
    :body="t('oyka.body')"
    :cta="t('oyka.cta')"
    cta-href="https://oyka.app"
    :chapter-label="t('oyka.label')"
  >
    <template #visual>
      <div class="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center animate-float">
        <img
          src="~/assets/images/oyka-placeholder.svg"
          alt="Oyka — a small sleepy creature with lavender body"
          class="w-full h-full"
        />
      </div>
    </template>
  </ProductChapter>
</template>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .animate-float { animation: none; }
}
</style>
