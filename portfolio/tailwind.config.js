/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0E1F23', 2: '#162E33' },
        bone: '#ECE7DC',
        signal: { DEFAULT: '#F3A712', dim: '#B57B0A' },
        teal: { DEFAULT: '#27474E', soft: '#3A6B73' },
        subtle: '#8FA1A4',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
