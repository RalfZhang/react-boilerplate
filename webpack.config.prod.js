const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const config = {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  plugins: [
    new ClearWebpackPlugin(['dist']),
    // 提取 vendor
    // https://doc.webpack-china.org/guides/caching/#-extracting-boilerplate-
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules')!==-1;
      }
    }),
    // 稳定 vendor hash
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      chunks: ['vendor']
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};

module.exports = merge(baseConfig, config);