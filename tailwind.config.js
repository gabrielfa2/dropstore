/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adiciona a nova família de fontes
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
        // NOVO: Padrão de tijolos para a vibe de rua
        'brick-wall': `linear-gradient(rgba(252, 240, 228, 0.95), rgba(252, 240, 228, 0.95)), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e0d5c9' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        // NOVO: Animação de pulsar para os brilhos
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // NOVO: Keyframes para o efeito de pulsar
        'pulse-glow': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(0.8)' },
          '50%': { opacity: '0.3', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
