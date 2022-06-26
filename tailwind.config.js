/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily:{
      rocks: ['Rubik Moonrocks','cursive' ],
      sans:['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
