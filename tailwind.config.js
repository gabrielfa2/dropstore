/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adicionando suas cores personalizadas
      colors: {
        'cream': '#fcf0e4',
        'card-bg': '#f9f5f0',
      },
      // Efeito de luz adicionado aqui
      backgroundImage: {
        'glow': 'radial-gradient(ellipse at bottom, #fb923c 0%, transparent 60%)',
      },
      // Mantendo a animação existente
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}