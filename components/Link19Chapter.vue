<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductChapter from './ProductChapter.vue'

const { t } = useI18n()
</script>

<template>
  <ProductChapter
    chapter="link19"
    :headline="t('link19.headline')"
    :body="t('link19.body')"
    :cta="t('link19.cta')"
    cta-href="https://link19.ru"
    :chapter-label="t('link19.label')"
  >
    <template #visual>
      <div class="l19-card w-full max-w-md font-mono text-sm">
        <div class="l19-url">
          <span class="l19-host">link19.ru/</span><span class="l19-slug">a9f2</span>
        </div>
        <div class="l19-arrow">↓ resolves in 24ms</div>
        <div class="l19-dest">https://example.com/product/ref?utm=tg</div>
        <div class="l19-stats">
          <div><span class="l19-stat-v">1,247</span><span class="l19-stat-l">clicks</span></div>
          <div><span class="l19-stat-v">42</span><span class="l19-stat-l">countries</span></div>
          <div><span class="l19-stat-v">✓</span><span class="l19-stat-l">phishing clean</span></div>
        </div>
      </div>
    </template>
  </ProductChapter>
</template>

<style scoped>
.l19-card {
  padding: 1.75rem;
  border-radius: 10px;
  border: 1px solid rgba(62, 207, 142, 0.25);
  background: rgba(62, 207, 142, 0.03);
}
.l19-url {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.l19-host { color: rgba(245, 241, 234, 0.55); }
.l19-slug { color: rgb(62 207 142); }
.l19-arrow {
  color: rgba(245, 241, 234, 0.45);
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
}
.l19-dest {
  color: rgba(245, 241, 234, 0.85);
  font-size: 0.85rem;
  word-break: break-all;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(245, 241, 234, 0.08);
}
.l19-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.l19-stats > div {
  display: flex;
  flex-direction: column;
}
.l19-stat-v {
  color: rgb(62 207 142);
  font-size: 1.125rem;
  font-weight: 600;
}
.l19-stat-l {
  color: rgba(245, 241, 234, 0.45);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
