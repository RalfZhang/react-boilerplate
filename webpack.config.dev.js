const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = merge(common, config);