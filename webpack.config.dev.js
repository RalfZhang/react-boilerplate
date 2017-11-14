const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


const config = {
  devtool: 'cheap-module-eval-source-map',
  // 使用 webpack-dev-server 时候应应用此类配置项
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  // },
  // output: {
  //   publicPath: '/',
  // },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, config);