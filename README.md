# Autofract site

Editorial studio landing at `autofract.com`. Bold typography, per-chapter color swap, four languages.

**Stack:** Nuxt 3 (SSR) · Tailwind CSS · @nuxtjs/i18n v9 · Fraunces + Inter · Vitest · Playwright

**Tagline:** Software that runs itself.

## Dev

```bash
npm install
npm run dev                       # http://localhost:3000
npm test                          # unit tests (composables)
npm run test:e2e                  # Playwright e2e (builds first via webServer)
npm run generate:og               # regenerate public/og-image.png
```

## Deploy

Push to `main` → Coolify (OVH) auto-builds and deploys. `autofract.com` DNS points at the apps server, whose Caddy is a thin reverse proxy to OVH.

## Structure

- `pages/index.vue` — composes all sections
- `components/` — one file per section (Hero, Manifesto, ProductChapter base + PathCore/VideoLinker, Studio, Footer, LangSwitcher)
- `composables/` — `useChapterColors` (CSS var swap) + `useScrollChapter` (IntersectionObserver wrapper)
- `i18n/locales/` — EN/DE/RU/FR
- `assets/css/main.css` — paper+ink tokens + chapter accent classes
- `scripts/` — build-time generators (OG image)
- `deploy/` — legacy systemd/Caddy configs (pre-Coolify), kept for reference
