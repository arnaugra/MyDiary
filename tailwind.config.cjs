/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.vue",
    "./src/**/*.vue",
    "./src/**/**/*.vue",
    "./src/**/**/**/*.vue"
  ],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
  theme: {
    extend: {},
  },
}
