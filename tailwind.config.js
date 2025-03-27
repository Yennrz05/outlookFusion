/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // o 'media' según prefieras
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html" // Asegúrate de incluir todos los archivos relevantes
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards', // añadido 'forwards' aquí
      },
      keyframes: {
        fadeInUp: {
          'from': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        }
      }
    },
  },
  plugins: [],
}