<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductChapter from './ProductChapter.vue'

const { t } = useI18n()
</script>

<template>
  <ProductChapter
    chapter="videolinker"
    :headline="t('videolinker.headline')"
    :body="t('videolinker.body')"
    :cta="t('videolinker.cta')"
    cta-href="https://video.autofract.com"
    :chapter-label="t('videolinker.label')"
  >
    <template #visual>
      <div class="vl-pipeline w-full max-w-xl font-mono text-sm space-y-2">
        <div class="vl-row"><span class="vl-step">01</span> script.json</div>
        <div class="vl-row"><span class="vl-step">02</span> image-gen <span class="vl-arrow">→</span></div>
        <div class="vl-row vl-active"><span class="vl-step">03</span> video-gen <span class="vl-arrow">→</span></div>
        <div class="vl-row"><span class="vl-step">04</span> tts + captions</div>
        <div class="vl-row"><span class="vl-step">05</span> qa (52 rules)</div>
        <div class="vl-row"><span class="vl-step">06</span> ffmpeg composition</div>
        <div class="vl-row vl-done"><span class="vl-step">◆</span> episode.mp4</div>
      </div>
    </template>
  </ProductChapter>
</template>

<style scoped>
.vl-pipeline {
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(245, 241, 234, 0.08);
  background: rgba(255, 107, 53, 0.03);
}
.vl-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.75rem;
  align-items: center;
  padding: 0.4rem 0;
  color: rgba(245, 241, 234, 0.6);
  border-bottom: 1px dashed rgba(245, 241, 234, 0.05);
}
.vl-row:last-child { border-bottom: none; }
.vl-step {
  color: rgba(245, 241, 234, 0.4);
  font-size: 0.75rem;
}
.vl-arrow {
  color: rgb(255 107 53);
  opacity: 0.7;
}
.vl-active {
  color: rgb(245 241 234);
}
.vl-active .vl-step {
  color: rgb(255 107 53);
}
.vl-done {
  color: rgb(255 107 53);
  font-weight: 500;
}
</style>
