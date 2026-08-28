import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-secondary': 'rgb(var(--color-accent-secondary) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        /* Floors sized so a long word still fits a 360px screen; the vw term and
           the ceiling are unchanged, so desktop typography stays as designed. */
        hero: ['clamp(48px, 14vw, 200px)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        chapter: ['clamp(36px, 7vw, 96px)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        quote: ['clamp(28px, 4vw, 48px)', { lineHeight: '1.15' }],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        '800': '800ms',
      },
    },
  },
  plugins: [],
} satisfies Config
