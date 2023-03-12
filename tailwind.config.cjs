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
    require('@tailwindcss/line-clamp'),
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
  theme: {
    extend: {},
  },
}
