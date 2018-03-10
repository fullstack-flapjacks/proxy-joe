const webpack = require('webpack');

module.exports = {
    entry: [
      './client/src/index.jsx'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        { 
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=100000' 
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/client/dist',
      // publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './client/dist'
    }
  };