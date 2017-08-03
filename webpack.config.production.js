const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const {
  addLibEntriesToTopOfEntries,
  output
} = require('./webpack.config.common')


/*
 * 純粋なentryにpolyfillの必要なものを設定する
 *
 * before: {app: ['./src/js/index.js']}
 * after: {app: ['babel-polyfill', './src/js/index.js']}
 */
const productionEntry = addLibEntriesToTopOfEntries(['babel-polyfill'])


module.exports = {
  entry: productionEntry,
  output: output,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  devtool: 'source-map',
}
