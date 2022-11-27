/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        veryDarkGreen: 'hsla(177, 100%, 9%, 1)',
        veryDarkBlue: '#0B0D17',
        brightBrown: 'hsla(32, 61%, 71%, 1)',
        brighterBrown: 'hsla(32, 88%, 86%, 1)',
        veryLightGrey: 'hsla(0, 0%, 100%, 0.74)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
