/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        gray: {
          950: '#0a0a0a',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-cyan-400',
    'text-pink-400',
    'text-green-400',
    'text-yellow-400',
    'border-cyan-400',
    'border-pink-400',
    'border-green-400',
    'border-yellow-400',
    'bg-cyan-400/10',
    'bg-pink-400/10',
    'bg-green-400/10',
    'bg-yellow-400/10',
  ],
};