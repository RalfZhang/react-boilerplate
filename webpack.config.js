// http://www.css88.com/doc/webpack2/guides/production-build/
// function buildConfig(env) {
//   return require('./config/' + env + '.js')({ env: env })
// }

// module.exports = buildConfig(env);


var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',

  output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    
    //压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
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
    
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
    })
  ]
}

