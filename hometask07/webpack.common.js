// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    'script/index.js': './src/index.js',
    // 'style/style.css': './src/style/style.scss',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    
  ],
  module: {
    rules: [
      // images
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

      },
      // icons 
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash][ext]'
        }
      },
      // fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ]    
  },
}