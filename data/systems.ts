/**
 * Curated system maps for the studio graphs.
 * Logical architecture only — no hosts, no vendors, no secrets.
 */

export type NodeType = 'ai' | 'worker' | 'data' | 'edge' | 'gate' | 'ui'

export interface SysNode {
  id: string
  label: string
  type: NodeType | 'core'
  r?: number
  desc?: string
}

export interface SysEdge {
  from: string
  to: string
  /** particles flowing along the edge (default true) */
  flow?: boolean
}

export interface SystemMap {
  accent: string
  nodes: SysNode[]
  edges: SysEdge[]
}

export const TYPE_COLORS: Record<NodeType, string> = {
  ai: '#cba6f7',
  worker: '#f9e2af',
  data: '#89b4fa',
  edge: '#94e2d5',
  gate: '#f38ba8',
  ui: '#f5f1ea',
}

export const TYPE_LABELS: Record<NodeType, string> = {
  ai: 'AI',
  worker: 'Workers',
  data: 'Data',
  edge: 'Delivery',
  gate: 'Gates',
  ui: 'Surface',
}

export const CASES = ['pathcore', 'videolinker', 'frontdesk', 'relocating'] as const
export type CaseSlug = typeof CASES[number]

export interface CaseMeta {
  accent: string
  link?: string
  linkLabel?: string
}

export const CASE_META: Record<CaseSlug, CaseMeta> = {
  pathcore: { accent: '#5eead4' },
  videolinker: { accent: '#ff6b35' },
  frontdesk: { accent: '#3ecf8e', link: 'https://frontdeskreview.com', linkLabel: 'frontdeskreview.com' },
  relocating: { accent: '#7dd3fc', link: 'https://relocating.app', linkLabel: 'relocating.app' },
}

export const SYSTEMS: Record<CaseSlug, SystemMap> = {
  pathcore: {
    accent: '#5eead4',
    nodes: [
      { id: 'core', label: 'PathCore', type: 'core', desc: 'Self-healing hexagonal engine — Core, Uncore, Un-uncore' },
      { id: 'mindview', label: 'MindView', type: 'ui', desc: 'A living map of the whole system, streamed in real time' },
      { id: 'cog', label: 'Cognitive Workers', type: 'ai', desc: 'AI workers that diagnose failures and propose fixes' },
      { id: 'chaos', label: 'Chaos Engine', type: 'gate', desc: 'Injects failure on purpose so recovery stays trained' },
      { id: 'breakers', label: 'Circuit Breakers', type: 'gate', desc: 'Isolate a failing path before it can spread' },
      { id: 'deploy', label: 'Deploy Executor', type: 'worker', desc: 'Failure-aware deploys with automatic rollback' },
      { id: 'mergeq', label: 'Merge Queue', type: 'worker', desc: 'Routes and lands changes in safe order' },
      { id: 'jobs', label: 'Job Fleet', type: 'worker', desc: 'Background jobs with priority scheduling' },
      { id: 'queue', label: 'Job Queue', type: 'data', desc: 'Durable queue layer keeping work replayable' },
      { id: 'auth', label: 'Auth', type: 'gate', desc: 'Identity and access, one layer for every service' },
      { id: 'storage', label: 'Storage', type: 'data', desc: 'Object and state storage shared by the fleet' },
      { id: 'events', label: 'Event Stream', type: 'data', desc: 'Every state change published as a live event' },
      { id: 'aigw', label: 'AI Gateway', type: 'ai', desc: 'One controlled door to language models' },
    ],
    edges: [
      { from: 'core', to: 'mindview' },
      { from: 'core', to: 'cog' },
      { from: 'core', to: 'chaos', flow: false },
      { from: 'core', to: 'breakers', flow: false },
      { from: 'core', to: 'deploy' },
      { from: 'core', to: 'mergeq' },
      { from: 'core', to: 'jobs' },
      { from: 'jobs', to: 'queue' },
      { from: 'core', to: 'auth', flow: false },
      { from: 'core', to: 'storage' },
      { from: 'core', to: 'events' },
      { from: 'events', to: 'mindview' },
      { from: 'cog', to: 'aigw' },
      { from: 'chaos', to: 'breakers', flow: false },
      { from: 'deploy', to: 'mergeq', flow: false },
    ],
  },

  videolinker: {
    accent: '#ff6b35',
    nodes: [
      { id: 'core', label: 'VideoLinker', type: 'core', desc: 'AI-orchestrated video production platform' },
      { id: 'canvas', label: 'Canvas App', type: 'ui', desc: 'Infinite-canvas studio with an AI intent bar' },
      { id: 'api', label: 'Core API', type: 'worker', desc: '30 routers, multi-tenant, live progress streams' },
      { id: 'fleet', label: 'Task Fleet', type: 'worker', desc: '38 background tasks: generate, render, publish' },
      { id: 'pipeline', label: 'Pipeline', type: 'worker', desc: '11 ordered steps: series bible → final cut' },
      { id: 'script', label: 'Script Engine', type: 'ai', desc: 'Series bible, episodes, scripts, shot decomposition' },
      { id: 'qa', label: 'QA Engine', type: 'gate', desc: '60+ weighted rules score every episode 0–100' },
      { id: 'keyframes', label: 'Keyframe Gen', type: 'ai', desc: 'Shot keyframes across multiple image models' },
      { id: 'videogen', label: 'Video Gen', type: 'ai', desc: 'Image-to-video clips across providers' },
      { id: 'tts', label: 'Voice & TTS', type: 'ai', desc: 'Narration with cloned voices and paced delivery' },
      { id: 'captions', label: 'Captions', type: 'worker', desc: 'Word-level timings, styled burned-in subtitles' },
      { id: 'compose', label: 'Composition', type: 'worker', desc: 'FFmpeg assembly: transitions, overlays, SFX mix' },
      { id: 'gpu', label: 'GPU Upscaler', type: 'worker', desc: 'Dedicated GPU container for frame upscaling' },
      { id: 'agent', label: 'Agent Loop', type: 'ai', desc: 'An autonomous agent plans and calls 59 tools' },
      { id: 'tools', label: 'Tool Layer', type: 'data', desc: '12 tool servers speaking one agent protocol' },
      { id: 'store', label: 'Artifact Store', type: 'data', desc: 'Content-addressed artifacts, deduped by hash' },
    ],
    edges: [
      { from: 'core', to: 'canvas' },
      { from: 'core', to: 'api' },
      { from: 'api', to: 'fleet' },
      { from: 'fleet', to: 'pipeline' },
      { from: 'pipeline', to: 'script' },
      { from: 'script', to: 'qa' },
      { from: 'qa', to: 'keyframes' },
      { from: 'keyframes', to: 'videogen' },
      { from: 'videogen', to: 'gpu' },
      { from: 'gpu', to: 'compose' },
      { from: 'script', to: 'tts' },
      { from: 'tts', to: 'captions' },
      { from: 'captions', to: 'compose' },
      { from: 'videogen', to: 'compose' },
      { from: 'compose', to: 'store' },
      { from: 'store', to: 'canvas' },
      { from: 'core', to: 'agent' },
      { from: 'agent', to: 'tools' },
      { from: 'tools', to: 'pipeline' },
    ],
  },

  frontdesk: {
    accent: '#3ecf8e',
    nodes: [
      { id: 'core', label: 'FrontDesk', type: 'core', desc: 'The price of record — sourced, dated, verifiable' },
      { id: 'radar', label: 'Discovery Radar', type: 'worker', desc: 'Detects genuinely new products and demand' },
      { id: 'harvest', label: 'Harvest Agents', type: 'ai', desc: 'Writer agents compile facts from published sources' },
      { id: 'verifier', label: 'Adversarial Verifier', type: 'gate', desc: 'A second agent tries to refute every claim' },
      { id: 'fidelity', label: 'Fidelity Gate', type: 'gate', desc: 'Re-fetches every source; unproven numbers never ship' },
      { id: 'corpus', label: 'Corpus', type: 'data', desc: '4,400+ entities; every price carries source + date' },
      { id: 'truth', label: 'Truth Core', type: 'data', desc: 'Event-sourced database spine behind the corpus' },
      { id: 'pricescan', label: 'Price Scan', type: 'worker', desc: 'Daily AI-free scrape with four commit guards' },
      { id: 'history', label: 'Price History', type: 'data', desc: 'Append-only change-log with archival backfill' },
      { id: 'ledger', label: 'Hash Ledger', type: 'gate', desc: 'SHA-256 chained log — history can’t be rewritten' },
      { id: 'sitegen', label: 'Site Generator', type: 'worker', desc: '23,000+ citable static pages from the corpus' },
      { id: 'index', label: 'Index Engine', type: 'edge', desc: 'Instant indexing, structured data, answer artifacts' },
      { id: 'mcp', label: 'MCP Server', type: 'edge', desc: '19 tools serving AI agents the sourced record' },
      { id: 'feeds', label: 'Machine Feeds', type: 'edge', desc: 'llms.txt, open dumps, verification receipts' },
      { id: 'mirror', label: 'Open Mirror', type: 'edge', desc: 'CC-BY corpus mirrored to open datasets, with a DOI' },
      { id: 'imgcdn', label: 'Image CDN', type: 'edge', desc: 'Licensed images from a private origin, edge-cached' },
      { id: 'extension', label: 'Extension', type: 'ui', desc: 'The price of record overlaid on the store page' },
    ],
    edges: [
      { from: 'radar', to: 'harvest' },
      { from: 'harvest', to: 'verifier' },
      { from: 'verifier', to: 'fidelity' },
      { from: 'fidelity', to: 'corpus' },
      { from: 'core', to: 'corpus' },
      { from: 'truth', to: 'corpus' },
      { from: 'corpus', to: 'pricescan' },
      { from: 'pricescan', to: 'history' },
      { from: 'history', to: 'ledger', flow: false },
      { from: 'corpus', to: 'sitegen' },
      { from: 'sitegen', to: 'index' },
      { from: 'corpus', to: 'mcp' },
      { from: 'corpus', to: 'feeds' },
      { from: 'feeds', to: 'mirror' },
      { from: 'imgcdn', to: 'sitegen' },
      { from: 'feeds', to: 'extension' },
      { from: 'history', to: 'mcp' },
      { from: 'core', to: 'extension', flow: false },
    ],
  },

  relocating: {
    accent: '#7dd3fc',
    nodes: [
      { id: 'core', label: 'Relocating', type: 'core', desc: 'Open data turned into a relocation product' },
      { id: 'etl', label: 'Open-Data ETL', type: 'worker', desc: 'World Bank, weather, geo — normalized per country' },
      { id: 'datasets', label: 'Dataset Core', type: 'data', desc: '30+ datasets covering 50 countries' },
      { id: 'quality', label: 'Quality Gate', type: 'gate', desc: 'Bad data fails the build — literally' },
      { id: 'pages', label: 'Page Engine', type: 'worker', desc: 'Programmatic corridor, compare and ranking pages' },
      { id: 'tools', label: 'Tool Suite', type: 'ui', desc: '33 calculators, all running client-side' },
      { id: 'build', label: 'Static Build', type: 'worker', desc: 'Fully prebuilt — no runtime servers to break' },
      { id: 'i18n', label: 'i18n Pipeline', type: 'worker', desc: 'Mirrors the whole site into 22 languages' },
      { id: 'tm', label: 'Translation Memory', type: 'data', desc: 'Versioned cache — deploys never call live MT' },
      { id: 'mt', label: 'MT Engine', type: 'ai', desc: 'Self-hosted translation models, GPU passes' },
      { id: 'discovery', label: 'AI Discovery', type: 'edge', desc: 'llms.txt, structured data — built to be cited' },
      { id: 'edge', label: 'Edge Delivery', type: 'edge', desc: 'Static edge, auto-TLS, immutable caching' },
      { id: 'chat', label: 'City Chat', type: 'ui', desc: 'Realtime rooms with presence, seeded by data' },
      { id: 'mod', label: 'AI Moderation', type: 'ai', desc: 'Every message reviewed by a model before it’s public' },
      { id: 'safety', label: 'Trust & Safety', type: 'gate', desc: 'Bans, audit log, rate limits, GDPR retention' },
      { id: 'db', label: 'EU Postgres', type: 'data', desc: 'Row-level security everywhere, minimal PII' },
    ],
    edges: [
      { from: 'etl', to: 'datasets' },
      { from: 'datasets', to: 'pages' },
      { from: 'datasets', to: 'tools' },
      { from: 'datasets', to: 'chat' },
      { from: 'quality', to: 'build', flow: false },
      { from: 'pages', to: 'build' },
      { from: 'tools', to: 'build' },
      { from: 'build', to: 'i18n' },
      { from: 'mt', to: 'tm' },
      { from: 'tm', to: 'i18n' },
      { from: 'i18n', to: 'edge' },
      { from: 'build', to: 'discovery' },
      { from: 'discovery', to: 'edge' },
      { from: 'chat', to: 'mod' },
      { from: 'mod', to: 'db' },
      { from: 'chat', to: 'db' },
      { from: 'safety', to: 'chat', flow: false },
      { from: 'core', to: 'datasets' },
      { from: 'core', to: 'build', flow: false },
      { from: 'core', to: 'chat', flow: false },
    ],
  },
}

/** ambient hero map — the studio as one organism */
export const STUDIO_MAP: SystemMap = {
  accent: '#5eead4',
  nodes: [
    { id: 'core', label: 'Autofract', type: 'core' },
    { id: 'pathcore', label: 'PathCore', type: 'data', r: 18 },
    { id: 'videolinker', label: 'VideoLinker', type: 'worker', r: 18 },
    { id: 'frontdesk', label: 'FrontDesk', type: 'edge', r: 18 },
    { id: 'relocating', label: 'Relocating', type: 'ui', r: 18 },
    { id: 'agents', label: 'AI Agents', type: 'ai' },
    { id: 'gates', label: 'QA Gates', type: 'gate' },
    { id: 'pipelines', label: 'Pipelines', type: 'worker' },
    { id: 'edge', label: 'Edge', type: 'edge' },
    { id: 'healing', label: 'Self-Healing', type: 'gate' },
    { id: 'data', label: 'Open Data', type: 'data' },
  ],
  edges: [
    { from: 'core', to: 'pathcore' },
    { from: 'core', to: 'videolinker' },
    { from: 'core', to: 'frontdesk' },
    { from: 'core', to: 'relocating' },
    { from: 'pathcore', to: 'healing' },
    { from: 'pathcore', to: 'agents' },
    { from: 'videolinker', to: 'agents' },
    { from: 'videolinker', to: 'pipelines' },
    { from: 'frontdesk', to: 'gates' },
    { from: 'frontdesk', to: 'data' },
    { from: 'relocating', to: 'data' },
    { from: 'relocating', to: 'edge' },
    { from: 'frontdesk', to: 'edge' },
    { from: 'videolinker', to: 'gates' },
    { from: 'relocating', to: 'agents' },
  ],
}
