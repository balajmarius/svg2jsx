const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../public'),
  static: path.join(__dirname, '../static'),
}

module.exports = {
  entry: PATHS.src,

  output: {
    path: PATHS.dist,
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.static, 'index.html'),
    }),
  ],

  devServer: {
    contentBase: PATHS.dist,
    stats: 'errors-only',
    inline: true,
    port: 9000,
  },

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

  devtool: 'inline-source-map',
}
