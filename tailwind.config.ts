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
        /* Display type is sized so the longest word in any of the six languages
           still fits its column — a word wider than the column has to break, and
           outside English and German the browser has no hyphenation dictionary
           to break it politely. The budget these sizes buy (column ÷ font-size)
           is enforced by tests/unit/typography.spec.ts: 6.1em for hero, 7.2em
           for chapter. Change a number here and that test tells you which
           headline no longer fits. */
        hero: ['clamp(44px, 13vw, 168px)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        chapter: ['clamp(34px, 6.5vw, 88px)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
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
