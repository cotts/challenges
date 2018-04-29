const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: path.resolve(__dirname, 'project/src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'project/dist/'),
    filename: 'assets/js/build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?url=false&minimize=true', 'sass-loader?sourceMap'] }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/app.css',
      disable: false,
      allChunks: true,
      publicPath: 'assets/css',
    }),
    new HtmlWebpackPlugin({
      title: 'My Challenge',
      filename: path.basename('project/dist/index.html'),
      hash: true,
      template: 'project/src/index.html',
    }),
    new CopyWebpackPlugin([{
      from: 'project/src/assets',
      to: 'assets',
    }]),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
