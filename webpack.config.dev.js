const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


const config = {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // output: {
  //   publicPath: '/',
  // }
};

module.exports = merge(common, config);