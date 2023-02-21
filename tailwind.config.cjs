/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "roboto":['Roboto'],
        "poppins":['Poppins'],
        "open-sans":['Open Sans'],
      }
    },
  },
  plugins: [],
}