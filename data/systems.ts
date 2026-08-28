/**
 * Curated system maps for the studio graphs — topology only.
 * Logical architecture, no hosts, no vendors, no secrets.
 *
 * Deliberately wordless: every label and tooltip a reader sees lives in
 * content/systems/<locale>.ts, keyed by node id, so a case page reads in the
 * reader's language instead of falling back to English mid-page.
 */

export type NodeType = 'ai' | 'worker' | 'data' | 'edge' | 'gate' | 'ui'

export interface SysNode {
  id: string
  type: NodeType | 'core'
  r?: number
}

/** A node once the locale copy has been applied — this is what the UI renders. */
export interface SysNodeView extends SysNode {
  label: string
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

export interface SystemMapView extends SystemMap {
  nodes: SysNodeView[]
}

export const TYPE_COLORS: Record<NodeType, string> = {
  ai: '#cba6f7',
  worker: '#f9e2af',
  data: '#89b4fa',
  edge: '#94e2d5',
  gate: '#f38ba8',
  ui: '#f5f1ea',
}

/** Legend wording for these types lives in i18n under `casepage.legend`. */

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
      { id: 'core', type: 'core' },
      { id: 'mindview', type: 'ui' },
      { id: 'cog', type: 'ai' },
      { id: 'chaos', type: 'gate' },
      { id: 'breakers', type: 'gate' },
      { id: 'deploy', type: 'worker' },
      { id: 'mergeq', type: 'worker' },
      { id: 'jobs', type: 'worker' },
      { id: 'queue', type: 'data' },
      { id: 'auth', type: 'gate' },
      { id: 'storage', type: 'data' },
      { id: 'events', type: 'data' },
      { id: 'aigw', type: 'ai' },
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
      { id: 'core', type: 'core' },
      { id: 'canvas', type: 'ui' },
      { id: 'api', type: 'worker' },
      { id: 'fleet', type: 'worker' },
      { id: 'pipeline', type: 'worker' },
      { id: 'script', type: 'ai' },
      { id: 'qa', type: 'gate' },
      { id: 'keyframes', type: 'ai' },
      { id: 'videogen', type: 'ai' },
      { id: 'tts', type: 'ai' },
      { id: 'captions', type: 'worker' },
      { id: 'compose', type: 'worker' },
      { id: 'gpu', type: 'worker' },
      { id: 'agent', type: 'ai' },
      { id: 'tools', type: 'data' },
      { id: 'store', type: 'data' },
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
      { id: 'core', type: 'core' },
      { id: 'radar', type: 'worker' },
      { id: 'harvest', type: 'ai' },
      { id: 'verifier', type: 'gate' },
      { id: 'fidelity', type: 'gate' },
      { id: 'corpus', type: 'data' },
      { id: 'truth', type: 'data' },
      { id: 'pricescan', type: 'worker' },
      { id: 'history', type: 'data' },
      { id: 'ledger', type: 'gate' },
      { id: 'sitegen', type: 'worker' },
      { id: 'index', type: 'edge' },
      { id: 'mcp', type: 'edge' },
      { id: 'feeds', type: 'edge' },
      { id: 'mirror', type: 'edge' },
      { id: 'imgcdn', type: 'edge' },
      { id: 'extension', type: 'ui' },
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
      { id: 'core', type: 'core' },
      { id: 'etl', type: 'worker' },
      { id: 'datasets', type: 'data' },
      { id: 'quality', type: 'gate' },
      { id: 'pages', type: 'worker' },
      { id: 'tools', type: 'ui' },
      { id: 'build', type: 'worker' },
      { id: 'i18n', type: 'worker' },
      { id: 'tm', type: 'data' },
      { id: 'mt', type: 'ai' },
      { id: 'discovery', type: 'edge' },
      { id: 'edge', type: 'edge' },
      { id: 'chat', type: 'ui' },
      { id: 'mod', type: 'ai' },
      { id: 'safety', type: 'gate' },
      { id: 'db', type: 'data' },
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
    { id: 'core', type: 'core' },
    { id: 'pathcore', type: 'data', r: 18 },
    { id: 'videolinker', type: 'worker', r: 18 },
    { id: 'frontdesk', type: 'edge', r: 18 },
    { id: 'relocating', type: 'ui', r: 18 },
    { id: 'agents', type: 'ai' },
    { id: 'gates', type: 'gate' },
    { id: 'pipelines', type: 'worker' },
    { id: 'edge', type: 'edge' },
    { id: 'healing', type: 'gate' },
    { id: 'data', type: 'data' },
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
