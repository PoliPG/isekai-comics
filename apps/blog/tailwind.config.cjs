/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f9fa',
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
