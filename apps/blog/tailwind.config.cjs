/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f9fa',
        red: {
          50: '#fee7e7',
          100: '#ffd9d7',
          200: '#ffbfbd',
          300: '#fe9b9a',
          400: '#fb6565',
          500: '#f33538',
          600: '#e11920',
          700: '#af282e',
          800: '#3c2022',
          900: '#2c1b1d',
          950: '#000000',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fill, minmax(400px, max-content))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
