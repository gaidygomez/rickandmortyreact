module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'rickMorty': '#85fe68',
        'inputRM': '#081f32'
      },
      ringColor: {
        'rickMorty': '#85fe68'
      },
      borderColor: {
        'rickMorty': '#85fe68'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
