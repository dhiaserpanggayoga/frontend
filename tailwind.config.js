/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media', // atau 'class' jika ingin toggle manual
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Tambahkan font Inter
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
      animation: {
  'fade-in': 'fadeIn 0.7s ease-out both',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: 0, transform: 'scale(0.95)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  },
},

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
