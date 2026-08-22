/** @type {import('tailwindcss').Config} */
export default {
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
        background: '#12151a',
        surface: '#12151a',
        'surface-raised': '#1a1e26',
        primary: '#5b8c5a',
        accent: '#e8a33d',
        'on-surface': '#e4e6eb',
        'on-surface-muted': '#8b93a3',
        border: '#262b35',
        error: '#e0654f',
      }
    },
  },
  plugins: [],
}
