const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')


const config = {
  devtool: 'cheap-module-eval-source-map',
  // 使用 webpack-dev-server 时候应应用此类配置项
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: false,
    open: true,
    proxy: {},
    publicPath: '/',
    quiet: true, // necessary for FriendlyErrorsPlugin
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
  ],
};

module.exports = merge(common, config);