/**
 * English source copy for the system maps.
 *
 * data/systems.ts holds the topology — ids, types, edges, accents — and nothing
 * a reader sees. Every visible word (node label, node description) lives here,
 * one file per locale, so /es/work/relocating reads Spanish end to end.
 * Product names (PathCore, MindView, VideoLinker, FrontDesk, Relocating) and
 * technical acronyms stay untranslated everywhere.
 */

export const systemsEn = {
  pathcore: {
    core: { label: 'PathCore', desc: 'Self-healing hexagonal engine — Core, Uncore, Un-uncore' },
    mindview: { label: 'MindView', desc: 'A living map of the whole system, streamed in real time' },
    cog: { label: 'Cognitive Workers', desc: 'AI workers that diagnose failures and propose fixes' },
    chaos: { label: 'Chaos Engine', desc: 'Injects failure on purpose so recovery stays trained' },
    breakers: { label: 'Circuit Breakers', desc: 'Isolate a failing path before it can spread' },
    deploy: { label: 'Deploy Executor', desc: 'Failure-aware deploys with automatic rollback' },
    mergeq: { label: 'Merge Queue', desc: 'Routes and lands changes in safe order' },
    jobs: { label: 'Job Fleet', desc: 'Background jobs with priority scheduling' },
    queue: { label: 'Job Queue', desc: 'Durable queue layer keeping work replayable' },
    auth: { label: 'Auth', desc: 'Identity and access, one layer for every service' },
    storage: { label: 'Storage', desc: 'Object and state storage shared by the fleet' },
    events: { label: 'Event Stream', desc: 'Every state change published as a live event' },
    aigw: { label: 'AI Gateway', desc: 'One controlled door to language models' },
  },

  videolinker: {
    core: { label: 'VideoLinker', desc: 'AI-orchestrated video production platform' },
    canvas: { label: 'Canvas App', desc: 'Infinite-canvas studio with an AI intent bar' },
    api: { label: 'Core API', desc: '30 routers, multi-tenant, live progress streams' },
    fleet: { label: 'Task Fleet', desc: '38 background tasks: generate, render, publish' },
    pipeline: { label: 'Pipeline', desc: '11 ordered steps: series bible → final cut' },
    script: { label: 'Script Engine', desc: 'Series bible, episodes, scripts, shot decomposition' },
    qa: { label: 'QA Engine', desc: '60+ weighted rules score every episode 0–100' },
    keyframes: { label: 'Keyframe Gen', desc: 'Shot keyframes across multiple image models' },
    videogen: { label: 'Video Gen', desc: 'Image-to-video clips across providers' },
    tts: { label: 'Voice & TTS', desc: 'Narration with cloned voices and paced delivery' },
    captions: { label: 'Captions', desc: 'Word-level timings, styled burned-in subtitles' },
    compose: { label: 'Composition', desc: 'FFmpeg assembly: transitions, overlays, SFX mix' },
    gpu: { label: 'GPU Upscaler', desc: 'Dedicated GPU container for frame upscaling' },
    agent: { label: 'Agent Loop', desc: 'An autonomous agent plans and calls 59 tools' },
    tools: { label: 'Tool Layer', desc: '12 tool servers speaking one agent protocol' },
    store: { label: 'Artifact Store', desc: 'Content-addressed artifacts, deduped by hash' },
  },

  frontdesk: {
    core: { label: 'FrontDesk', desc: 'The price of record — sourced, dated, verifiable' },
    radar: { label: 'Discovery Radar', desc: 'Detects genuinely new products and demand' },
    harvest: { label: 'Harvest Agents', desc: 'Writer agents compile facts from published sources' },
    verifier: { label: 'Adversarial Verifier', desc: 'A second agent tries to refute every claim' },
    fidelity: { label: 'Fidelity Gate', desc: 'Re-fetches every source; unproven numbers never ship' },
    corpus: { label: 'Corpus', desc: '4,400+ entities; every price carries source + date' },
    truth: { label: 'Truth Core', desc: 'Event-sourced database spine behind the corpus' },
    pricescan: { label: 'Price Scan', desc: 'Daily AI-free scrape with four commit guards' },
    history: { label: 'Price History', desc: 'Append-only change-log with archival backfill' },
    ledger: { label: 'Hash Ledger', desc: 'SHA-256 chained log — history can’t be rewritten' },
    sitegen: { label: 'Site Generator', desc: '23,000+ citable static pages from the corpus' },
    index: { label: 'Index Engine', desc: 'Instant indexing, structured data, answer artifacts' },
    mcp: { label: 'MCP Server', desc: '19 tools serving AI agents the sourced record' },
    feeds: { label: 'Machine Feeds', desc: 'llms.txt, open dumps, verification receipts' },
    mirror: { label: 'Open Mirror', desc: 'CC-BY corpus mirrored to open datasets, with a DOI' },
    imgcdn: { label: 'Image CDN', desc: 'Licensed images from a private origin, edge-cached' },
    extension: { label: 'Extension', desc: 'The price of record overlaid on the store page' },
  },

  relocating: {
    core: { label: 'Relocating', desc: 'Open data turned into a relocation product' },
    etl: { label: 'Open-Data ETL', desc: 'World Bank, weather, geo — normalized per country' },
    datasets: { label: 'Dataset Core', desc: '30+ datasets covering 50 countries' },
    quality: { label: 'Quality Gate', desc: 'Bad data fails the build — literally' },
    pages: { label: 'Page Engine', desc: 'Programmatic corridor, compare and ranking pages' },
    tools: { label: 'Tool Suite', desc: '33 calculators, all running client-side' },
    build: { label: 'Static Build', desc: 'Fully prebuilt — no runtime servers to break' },
    i18n: { label: 'i18n Pipeline', desc: 'Mirrors the whole site into 22 languages' },
    tm: { label: 'Translation Memory', desc: 'Versioned cache — deploys never call live MT' },
    mt: { label: 'MT Engine', desc: 'Self-hosted translation models, GPU passes' },
    discovery: { label: 'AI Discovery', desc: 'llms.txt, structured data — built to be cited' },
    edge: { label: 'Edge Delivery', desc: 'Static edge, auto-TLS, immutable caching' },
    chat: { label: 'City Chat', desc: 'Realtime rooms with presence, seeded by data' },
    mod: { label: 'AI Moderation', desc: 'Every message reviewed by a model before it’s public' },
    safety: { label: 'Trust & Safety', desc: 'Bans, audit log, rate limits, GDPR retention' },
    db: { label: 'EU Postgres', desc: 'Row-level security everywhere, minimal PII' },
  },

  /** The ambient hero map: labels only — it has no tooltips. */
  studio: {
    core: 'Autofract',
    pathcore: 'PathCore',
    videolinker: 'VideoLinker',
    frontdesk: 'FrontDesk',
    relocating: 'Relocating',
    agents: 'AI Agents',
    gates: 'QA Gates',
    pipelines: 'Pipelines',
    edge: 'Edge',
    healing: 'Self-Healing',
    data: 'Open Data',
  },
}

export type SystemsContent = typeof systemsEn
