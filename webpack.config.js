const webpack = require('webpack')
const path = require('path')
const {
  addLibEntriesToTopOfEntries,
  output
} = require('./webpack.config.common')


/*
 * 純粋なentryにpolyfillとhot-loader用の必要なものを設定する
 *
 * before: {app: ['./src/js/index.js']}
 * after: {app: ['babel-polyfill', 'react-hot-loader/patch', './src/js/index.js']}
 */
const devEntries = addLibEntriesToTopOfEntries(['babel-polyfill', 'react-hot-loader/patch'])


module.exports = {
  entry: devEntries,
  output: output,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          "react-hot-loader/webpack",
          "babel-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
    compress: true,
    port: 8000
  }
}
