/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    user: ['./client/index.js'],
  },

  output: {
    path: __dirname + '/dist/bundle/',
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
        test: /\.(png|jpg|otf|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]

}

