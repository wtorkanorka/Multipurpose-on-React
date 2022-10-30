module.exports = {
  plugins: [require('postcss-nested'), require('autoprefixer')],
  plugins: postcss([require('postcss-nested')({ unwrap: ['phone'] })]),
}
