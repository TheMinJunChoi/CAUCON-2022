module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {},
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
