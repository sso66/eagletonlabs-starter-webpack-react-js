// webpack-production.config.js
console.info('webpack-production.config.js');

var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

const stripLoader = {
  test: [/\js$/, /\es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log')
};

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;
// eof
