/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#171717',
        border: '#27272A',
        ink: '#FFFFFF',
        'ink-dim': '#A1A1AA',
        accent: '#6366F1',
        'accent-hover': '#818CF8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
