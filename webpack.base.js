const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    // chunkFilename: '[name].[chunkhash].js',
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