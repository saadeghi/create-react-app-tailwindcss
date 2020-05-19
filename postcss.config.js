const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
  }]
})
module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss')('src/tailwind/tailwind.config.js'),
    ...process.env.NODE_ENV === 'production' ? [cssnano] : [],
    ...process.env.NODE_ENV === 'production' ? [autoprefixer] : [],
  ],
};
