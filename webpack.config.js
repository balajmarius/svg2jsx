const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'public'),
  static: path.join(__dirname, 'static'),
}

module.exports = {
  entry: PATHS.src,

  output: {
    path: PATHS.dist,
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.static, 'index.html')
    })
  ],

  devServer: {
    contentBase: PATHS.dist,
    clientLogLevel: 'error',
    inline: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
    ]
  },

  devtool: 'inline-source-map',
}
