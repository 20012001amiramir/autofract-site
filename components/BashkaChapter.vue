<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductChapter from './ProductChapter.vue'
import bashkaMockup from '~/assets/images/bashka-mockup.png'

const { t } = useI18n()
</script>

<template>
  <ProductChapter
    chapter="bashka"
    :headline="t('bashka.headline')"
    :body="t('bashka.body')"
    :cta="t('bashka.cta')"
    cta-href="https://ai.autofract.com"
    :chapter-label="t('bashka.label')"
  >
    <template #visual>
      <img
        :src="bashkaMockup"
        alt="Bashka product interface — dashboard and chat preview"
        class="w-full max-w-xl rounded-lg shadow-2xl shadow-accent/10"
        loading="lazy"
        decoding="async"
      />
    </template>
  </ProductChapter>
</template>
