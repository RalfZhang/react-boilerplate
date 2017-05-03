var webpack = require('webpack');
const webpackMerge = require('webpack-merge');

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");



var baseWebpackConfig = require('./webpack.base.conf')


module.exports = function (env) {
  return  webpackMerge(baseWebpackConfig, {
    output: {
      filename: 'js/[name].[chunkhash].js',
    chunkFilename: "js/[name].[chunkhash].js",
      path: path.resolve(__dirname, 'dist'),
      // publicPath: publicPath,
      sourceMapFilename: '[name].map'
    },
    plugins: [
      
      new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
      }),
      
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('prod')
          }
      }),


      //压缩
      new webpack.optimize.UglifyJsPlugin({
        // http://www.css88.com/doc/webpack2/guides/production-build/
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                          warnings: false

            },
            comments: false,
        sourceMap: true
      }),

      //拆分css
      new ExtractTextPlugin({
        filename: 'css/[name].[contenthash].css'
      }),


      // 代码分割 lib 存在于 node_modules 中则包装到 vendor 里
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function(module) {
          return module.context && module.context.indexOf('node_modules')!==-1;
        }
      }),
      

      // 缓存优化 
      // http://www.css88.com/doc/webpack2/guides/caching/
      new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor', 'manifest'], // 指定公共 bundle 的名字。
                minChunks: Infinity,
      }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    })
    ]
  })
}