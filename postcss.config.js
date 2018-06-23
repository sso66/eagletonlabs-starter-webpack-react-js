// postcss.config.js
console.info('Mounting postcss.config.js...');

module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ],
};
// eof 