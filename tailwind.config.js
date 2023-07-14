/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        viga: ['Viga', 'sans-serif'],
      }
    },
  },
  plugins: [],
}