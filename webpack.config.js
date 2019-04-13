// webpack.config.js
console.info( 'Mounting webpack.config.js...' );

const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: path.resolve( __dirname + '/src/Index.jsx' ),
    //entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    //watch: true,
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [ ':data-src' ],
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true
                    }
                }
            },
            {
                test: [ /\.json$/ ],
                exclude: /node_modules/,
                loader: 'json-loader',
                type: 'javascript/auto'

            },
            {
                test: [ /\.js$/, /\.es6$/, /\.jsx$/ ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            },
            {
                test: /\.jshint$/,
                exclude: /node_modules/,
                loader: 'jshint-loader',
                query: {
                    cacheDirectory: true,
                    presets: [ 'react', 'es2015' ]
                }
            },
            {
                test: [ /\.css$/, /\.sass$/ ],
                loader: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=100000"   // the urlloader uses data urls.
           },
           // {
                // test: /\.(ttf|eot|svg|woff|woff2)(\?[\s\S]+)$/,
                // use: {
                    // loader: 'file-loader',  // the file loader emits files.
                    // options: {
                        // emitFile: false
                    // }
                // }
            // },
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/i,
                loader: 'file-loader?name=[name].[ext]',
                
           },
           {
                test: /\.(gif|png|jpe|icon?g|svg|ico)$/i,
                use: [
                    // {
                        // loader: 'file-loader',  
                        // options: {
                            // emitFile: true
                        // }
                    // },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,    // webpack@1.x
                            disable: true,           // webpack@2.x and newer
                           
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.es6', '.jsx', 'json' ]
    },
    plugins: [
       HtmlWebpackPluginConfig = new HtmlWebpackPlugin( {
          template: path.resolve( __dirname + '/index.tpl.html' ),
          favicon: 'src/assets/images/favicon.ico'
       } ),
       new webpack.LoaderOptionsPlugin( {
         options: {
             postcss: [ 'autoprefixer' ]
         }
       } ),
       new webpack.BannerPlugin( "Eagleton Web Designs Production\n" + new Date() ),
       new webpack.HotModuleReplacementPlugin()
    ],
    watch: false,
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};

// eof
