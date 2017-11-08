const path = require('path');
const webpack = require('webpack');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      title: 'Production'
    }),
    // 提取 vendor
    // https://doc.webpack-china.org/guides/caching/#-extracting-boilerplate-
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 稳定 vendor chunkhash
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, "src"),
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, "src"),
        use: ['file-loader']
      }
    ],
  }
};