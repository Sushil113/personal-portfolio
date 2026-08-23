/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: 'rgba(var(--color-background), <alpha-value>)',
        surface: 'rgba(var(--color-surface), <alpha-value>)',
        'surface-raised': 'rgba(var(--color-surface-raised), <alpha-value>)',
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        'on-surface': 'rgba(var(--color-on-surface), <alpha-value>)',
        'on-surface-muted': 'rgba(var(--color-on-surface-muted), <alpha-value>)',
        border: 'rgba(var(--color-border), <alpha-value>)',
        error: 'rgba(var(--color-error), <alpha-value>)',
      }
    },
  },
  plugins: [],
}
