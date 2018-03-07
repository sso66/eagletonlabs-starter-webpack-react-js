// webpack.config.js
console.info('Mounting webpack.config.js...');

// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  // template: __dirname + '/public/templates/index.html',
  // filename: 'index.html',
  // inject: 'body',
// });

module.exports = {
  entry: __dirname + '/public/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
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
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
    resolve: {
    extensions: ['.js', '.es6']
  },
  //plugins: [HTMLWebpackPluginConfig] 
};
// eof
