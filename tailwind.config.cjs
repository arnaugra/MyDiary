/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.vue",
    "./src/**/*.vue",
    "./src/**/**/*.vue",
    "./src/**/**/**/*.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
  variants: {
    rounded: ['first', 'last'],
  },
}
