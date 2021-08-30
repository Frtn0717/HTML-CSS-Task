const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    
  ],
  module: {
    rules: [
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

    ]    
  },
}