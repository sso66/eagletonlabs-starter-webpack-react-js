// webpack-production.config.js
console.info( 'webpack-production.config.js' );

const WebpackStripLoader = require( 'strip-loader' );
const devConfig = require( './webpack.config.js' );

const stripLoader = {
	test: [ /\js$/, /\es6$/ ],
	exclude: /node_modules/,
	loader: WebpackStripLoader.loader( 'console.log' ) // remove logging statements
};

devConfig.module.rules.push( stripLoader );

module.exports = devConfig;

// eof
