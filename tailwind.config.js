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
        display: ['"Sedgwick Ave Display"', 'cursive'],
      },
      colors: {
        'cream': '#fcf0e4',
        'card-bg': '#f9f5f0',
      },
      backgroundImage: {
        'glow': 'radial-gradient(ellipse at bottom, #fb923c 0%, transparent 60%)',
        // ATUALIZADO: Referenciando o arquivo SVG externo
        'brick-wall': `linear-gradient(rgba(252, 240, 228, 0.95), rgba(252, 240, 228, 0.95)), url("/brick-texture.svg")`,
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.8)' },
          '50%': { opacity: '0.3', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}

