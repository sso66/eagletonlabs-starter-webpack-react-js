// webpack.config.js
console.info( 'Mounting webpack.config.js...' );

const path = require('path');

module.exports = {
	entry: path.resolve(__dirname + '/public/index.js'),
	output: {
		path: __dirname + '/build',
        filename: 'bundle.js',
	},
	//watch: true,
	module: {
		rules: [
			{
				test: /\.jshint$/,
				exclude: /node_modules/,
				loader: 'jshint-loader',
				query: {
				    cacheDirectory: true,
				    presets: ['react', 'es2015']
				}
			},
			{
				test: [ /\.js$/, /\.es6$/, /\.jsx$/ ],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'react', 'es2015' ]
				}
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.es6', '.jsx' ]
	},
};

// eof
