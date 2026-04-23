# Autofract site

Editorial studio landing at `autofract.com`. Bold typography, per-chapter color swap, four languages.

**Stack:** Nuxt 3 (SSR) · Tailwind CSS · @nuxtjs/i18n v9 · Fraunces + Inter · Vitest · Playwright

**Manifesto:** Companions, not tools.

## Dev

```bash
npm install
npm run dev                       # http://localhost:3000
npm test                          # unit tests (composables)
npm run test:e2e                  # Playwright e2e (builds first via webServer)
npm run generate:build-log        # refresh public/build-log.json from Obsidian vault
npm run generate:og               # regenerate public/og-image.png
```

## Deploy

See [deploy/RUNBOOK.md](deploy/RUNBOOK.md). TL;DR: pushes to `main` trigger `autofract-webhook.service` → `deploy/deploy.sh` → docker build + systemd restart.

## Structure

- `pages/index.vue` — composes all sections
- `components/` — one file per section (Hero, Manifesto, ProductChapter base + Bashka/Oyka, Studio, BuildLog, Footer, LangSwitcher)
- `composables/` — `useChapterColors` (CSS var swap) + `useScrollChapter` (IntersectionObserver wrapper)
- `i18n/locales/` — EN/DE/RU/FR
- `assets/css/main.css` — paper+ink tokens + chapter accent classes
- `scripts/` — build-time generators (build log, OG image)
- `deploy/` — systemd, Caddy, webhook, runbook
