const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';
const OUTPUT = path.resolve('public');

module.exports = {
  mode: PROD ? 'production' : 'development',
  devtool: PROD ? 'none' : 'inline-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'babel-polyfill',
    ],
    index: ['./src/index.js'],
  },
  output: {
    path: OUTPUT,
    filename: '[name].js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@assets': path.resolve('@assets'),
      '@config': path.resolve('@config'),
      '@src': path.resolve('src'),
      '@services': path.resolve('src', 'services'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-react-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'templates', 'index.html'),
      filename: path.resolve('public', 'index.html'),
      minify: true,
      hash: true,
      inject: 'body',
      title: 'SSR',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
  devServer: {
    port: 4000,
    publicPath: '/public/',
    contentBase: path.resolve('public'),
  },
};
