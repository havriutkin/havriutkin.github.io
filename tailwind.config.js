/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blush-pink': {
          '50': '#fff3ff',
          '100': '#ffe7ff',
          '200': '#feceff',
          '300': '#ffa7fc',
          '400': '#ff78fa',
          '500': '#f73ef0',
          '600': '#db1ed0',
          '700': '#b615a9',
          '800': '#951389',
          '900': '#79166d',
          '950': '#510147',
        },
      },
      boxShadow:{
        neon: '0 0 .5rem #fff, 0 0 .5rem #fff, 0 0 .5rem #fff, 0 0 .5rem #fff, 0 0 .5rem #fff, 0 0 .5rem #fff', 
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
      },
      fontFamily: {
        'orbitron': ['Orbitron']
      }
    },
  },
  plugins: [],
}