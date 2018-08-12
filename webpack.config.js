// webpack.config.js
console.info( 'Mounting webpack.config.js...' );

module.exports = {
	entry: __dirname + '/public/root.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build'
	},
	//watch: true,
	module: {
		rules: [
			{
				// test: /\.jshint$/,
				// exclude: /node_modules/,
				// loader: 'jshint-loader',
				// query: {
				// cacheDirectory: true,
				// presets: ['react', 'es2015']
				// }
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
