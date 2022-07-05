module.exports = {
  purge: [],
  theme: {
    extend: {
      typography: ({theme}) => ({
        white: {
          css : {
            '--tw-prose-headings': theme('colors.white'),
          }
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/typography')
  ],
}