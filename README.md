# Autofract site

Editorial studio landing at `autofract.com`. Bold typography, per-chapter color swap, six languages.

**Stack:** Nuxt 3 (SSR) · Tailwind CSS · @nuxtjs/i18n v9 · @nuxtjs/sitemap · Fraunces + Inter · Vitest · Playwright

**Tagline:** Software that runs itself.

## Dev

```bash
npm install
npm run dev                       # http://localhost:3000
npm test                          # unit tests (locale parity, tools copy, system maps, lead)
npm run typecheck                 # vue-tsc over the whole app
npm run build && npm run test:e2e # Playwright against the built server (msedge channel)
npm run generate:og               # regenerate every social card (60 PNGs: 10 pages × 6 locales)
npm run indexnow                  # ping IndexNow with the live sitemap, after a deploy
```

`npm run generate:og` must run **locally** — the Docker image has no system fonts, so cards
generated there come out as tofu. The PNGs are committed.

## Deploy

Push to `main` → Coolify (OVH) auto-builds the Dockerfile and deploys. `autofract.com` DNS points at
the apps server, whose Caddy is a thin reverse proxy to OVH — so always verify against the public URL.

- Coolify application id `1`, uuid `sgevyf4ad0ca7w7q9o5slt3j`
- Runtime env the app needs: `RESEND_API_KEY`, `LEAD_TO`, `LEAD_FROM` (the `/hire` lead form)
- `deploy/` holds the legacy pre-Coolify systemd/Caddy configs, kept for reference only

## Structure

- `pages/index.vue` — studio home (hero + ambient graph, manifesto, work grid, tools strip, approach, studio, footer)
- `pages/work/[slug].vue` — case pages: pathcore / videolinker / frontdesk / relocating
- `pages/tools/index.vue`, `pages/tools/[slug].vue` — the tools hub and one long-form promo page per tool
- `error.vue` — 404/500 page, `noindex, follow`
- `components/graph/SystemGraph.vue` — dependency-free canvas force-graph (glow nodes, flowing particles, hover, drag)
- `data/locales.ts` — the six-locale registry: labels, og:locale tags, `localeHref`, `alternates`
- `data/site.ts` — canonical origin, schema.org @ids, analytics id, IndexNow key
- `data/tools.ts` — tool + product registry (subdomain URLs, accents, which locales each tool serves)
- `data/systems.ts` — curated system maps per case (logical architecture only, no infra details)
- `data/og.ts` — the social-card list; `ogPath()`/`ogUrl()` name one PNG per card per locale
- `composables/useJsonLd.ts`, `composables/seo.ts` — the JSON-LD emitter and its node builders
- `i18n/locales/` — UI + meta strings, one JSON per locale, all with the same key set
- `content/tools/` — the long-form `/tools` copy, one TS file per locale
- `assets/css/main.css` — paper+ink tokens; per-case accents are scoped inline on case pages
- `scripts/` — build-time generators (OG cards) and the IndexNow submitter

## SEO

- `app.vue` owns `<html lang>`, canonical and hreflang through `useLocaleHead` — **never** emit
  canonical or hreflang from a page, double emission breaks the pairing.
- `/sitemap.xml` is generated at request time by `@nuxtjs/sitemap` with `sitemaps: false`, so it is a
  single 200 (no index, no redirect) listing every page × every locale with `xhtml:link` alternates.
  Dynamic routes are not auto-discovered: new `/work/<slug>` or `/tools/<slug>` pages must be listed
  in `nuxt.config.ts` → `sitemap.urls` with `_i18nTransform: true`.
- Titles stay ≤ 60 characters with `— Autofract` appended, descriptions 120–155. Tests enforce both.
- IndexNow key is served from `public/<key>.txt`; `npm run indexnow` reads the live sitemap and submits.

## Adding a locale

1. `data/locales.ts` — add the code to `LOCALES`, `LOCALE_LABELS`, `LOCALE_SHORT`, `OG_LOCALE`.
   Everything else (i18n config, hreflang, sitemap, switcher, OG cards) is derived from that list.
2. `i18n/locales/<code>.json` — copy `en.json` and translate every value.
3. `content/tools/<code>.ts` — copy `en.ts` and translate every value; register it in `content/tools/index.ts`.
4. `npm test` fails on any missing key, lost placeholder, over-long title or blank value.
5. `npm run generate:og` and commit the new PNGs.

**Translation status:** `es` and `pt`, the `tools` and `error` namespaces in every non-English
JSON, and `content/tools/{ru,de,es,fr,pt}.ts` currently hold the English source text and are waiting
on a translation pass. Missing keys fall back to English through `i18n/i18n.config.ts`.
