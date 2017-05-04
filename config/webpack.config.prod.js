const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../public'),
  static: path.join(__dirname, '../static'),
}

module.exports = {

  profile:true,

  entry: PATHS.src,

  output: {
    path: PATHS.dist,
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin([ PATHS.dist ], { root: process.cwd() }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.static, 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(svelte|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ]
      }
    ]
  },

  devtool: 'eval-cheap-source-map',
}