const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                        ],
                                    ],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ["absolute/path/a", "absolute/path/b"]
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/html', 'index.html'),
            minify: {
                collapseWhitespace: false
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/html', 'about.html'),
            minify: {
                collapseWhitespace: false
            },
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'contacts.html',
        //     template: path.resolve(__dirname, 'src/html', 'contacts.html.ejs'),
        //     minify: {
        //         collapseWhitespace: false
        //     },
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'work.html',
        //     template: path.resolve(__dirname, 'src/html', 'work.html.ejs'),
        //     minify: {
        //         collapseWhitespace: false
        //     },
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'project.html',
        //     template: path.resolve(__dirname, 'src/html', 'project.html.ejs'),
        //     minify: {
        //         collapseWhitespace: false
        //     },
        // }),
    ],
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        // minimize: true,
        // minimizer: [
        //     new CssMinimizerPlugin()
        // ]
    },
};