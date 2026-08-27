import { defineConfig } from '@playwright/test'

// Port 3000 is the default for half the tools on a dev machine; pick one that
// belongs to this project so a stray server elsewhere cannot be tested by mistake.
const PORT = Number(process.env.E2E_PORT ?? 3117)

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Drive the browser the machine already has instead of a downloaded bundle.
    channel: process.env.E2E_CHANNEL ?? 'msedge',
    trace: 'on-first-retry',
  },
  webServer: {
    command: `node .output/server/index.mjs`,
    env: { PORT: String(PORT) },
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
