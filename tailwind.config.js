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
        // ATUALIZADO (de 10s para 40s)
        marquee: 'marquee 40s linear infinite', 
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        // NOTA: Não precisamos adicionar 'scroll' aqui porque 
        // o ProductShowcase.tsx já usa a sintaxe de valor arbitrário 
        // que define a duração (5s) diretamente no HTML.
      },
      keyframes: {
        // ANIMAÇÃO DO BRANDCAROUSEL (INTOCADA)
        // Esta animação permanece como está e alimenta o 'animate-marquee'
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.8)' },
          '50%': { opacity: '0.3', transform: 'scale(1.2)' },
        },
        
        // CORREÇÃO (ADICIONADO):
        // Adicionamos a definição de keyframe 'scroll' que estava faltando.
        // O componente ProductShowcase.tsx (em animate-[scroll_5s_...]) estava chamando esta animação, mas ela não existia.
        // A lógica é idêntica à do 'marquee' (tradução de -50%), 
        // pois o ProductShowcase também duplica seu conteúdo 2x para o loop.
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      // ADICIONADO
      animationPlayState: {
        'pause-animation': 'paused',
      }
    },
  },
  // ADICIONADO
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