const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
    popup: './src/popup/main.js',
    content_scripts: './src/content_scripts/main.js',
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('popup.css'),
  ]
};