const path = require('path')
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: publicPath,
    sourceMapFilename: '[name].map'
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
      }, {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader'
      }, {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
      }
    ]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 9000
  // },

  // devtool: "source-map",

  plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //     names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
      // }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    
  ]
}