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
        display: ['Sedgwick Ave Display', 'cursive'],
        features: ['Sedgwick Ave Display', 'cursive'],
        price: ['Libertinus', 'serif'],
      },
      colors: {
        'cream': '#fcf0e4',
        'card-bg': '#f9f5f0',
      },
      backgroundImage: {
        'glow': 'radial-gradient(ellipse at bottom, #fb923c 0%, transparent 60%)',
        'brick-wall': `linear-gradient(rgba(252, 240, 228, 0.95), rgba(252, 240, 228, 0.95)), url("/brick-texture.SVG")`,
      },
      animation: {
        // Mantive a sua duração de 50s, mas você pode ajustar para 30s se quiser mais rápido
        marquee: 'marquee 50s linear infinite', 
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
      keyframes: {
        // Removi a animação 'scroll' que era duplicada para limpar o código
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          // ALTERAÇÃO PRINCIPAL AQUI: de -50% para -100%
          '100%': { transform: 'translateX(-100%)' }, 
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.8)' },
          '50%': { opacity: '0.3', transform: 'scale(1.2)' },
        },
      },
      // Sua configuração de plugin para pausar a animação está correta e foi mantida
      animationPlayState: {
        'pause-animation': 'paused',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.pause-animation': {
          'animation-play-state': theme('animationPlayState.pause-animation', 'paused'),
        },
      }
      addUtilities(newUtilities)
    }
  ],
}