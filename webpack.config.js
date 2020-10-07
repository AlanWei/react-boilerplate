const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const postcssImport = require('postcss-import');
const pkg = require('./package.json');

const ENV = process.env.NODE_ENV || 'development';
const ASSET_PATH = process.env.ASSET_PATH || '/';
const VERSION = `v${pkg.version}`;
const IS_PROD = ENV === 'production';

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const CLIENT_DIR = path.join(OUTPUT_DIR, VERSION);

module.exports = {
  mode: ENV,
  target: 'web',
  context: SOURCE_DIR,
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: CLIENT_DIR,
    publicPath: ASSET_PATH,
    filename: 'assets/js/[id].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          IS_PROD
            ? MiniCssExtractPlugin.loader
            : {
                loader: 'style-loader',
                options: {
                  injectType: 'singletonStyleTag',
                },
              },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: (loader) => [
                  postcssImport({ root: loader.resourcePath }),
                ],
                sourceMap: false,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [SOURCE_DIR],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: (loader) => [
                  postcssImport({ root: loader.resourcePath }),
                ],
                sourceMap: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: IS_PROD
          ? {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/',
              },
            }
          : {
              loader: 'url-loader',
            },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[id].style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'favicon.ico' }],
    }),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: './index.html',
      template: './index.ejs',
    }),
  ],
  devtool: IS_PROD ? 'none' : 'eval-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/',
    contentBase: SOURCE_DIR,
    historyApiFallback: true,
    stats: 'minimal',
    hot: true,
  },
};
