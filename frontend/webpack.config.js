/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    user: ['./client/index.js', 'webpack-hot-middleware/client'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|otf|woff2)$/,
        loader: 'url-loader'
      }

    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

}