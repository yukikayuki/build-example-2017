const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'app': [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 8000
  }
}
