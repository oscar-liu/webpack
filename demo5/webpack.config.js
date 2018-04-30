const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      main: './src/index.js',
      vendor: [
        'lodash'
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
       title: 'Caching',
       template: './src/index.html'
      }),
      
    ],
    output: {
     filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    }
  };