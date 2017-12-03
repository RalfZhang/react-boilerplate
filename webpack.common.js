const path = require('path');
const webpack = require('webpack');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
    // another: './src/another-module.js',
  },
  plugins: [
    new ClearWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // 提取 vendor
    // https://doc.webpack-china.org/guides/caching/#-extracting-boilerplate-
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 稳定 vendor hash
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'),
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        include: resolve('src'),
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        include: resolve('src'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: resolve('src'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }
      }
    ],
  }
};