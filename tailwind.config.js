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
        serif: ['Libertinus', 'serif'],
      },
      backgroundImage: {
        'noise': "url('/noise.JPG')",
        'glow': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
      },
      colors: {
        cream: '#F5F5DC',
      },
    },
  },
  plugins: [],
}

