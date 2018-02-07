const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');

module.exports = {
  context: SOURCE_DIR,
  entry: {
    vendor: [
      'react',
      'react-dom',
      'classnames',
      'prop-types',
      'redux',
      'react-redux',
      'redux-thunk',
      'reselect',
      'axios',
    ],
    client: './index.js',
  },

  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    libraryTarget: 'umd',
    filename: 'assets/[name].[chunkhash:8].js',
    chunkFilename: 'assets/[id].[name].[chunkhash:8].js',
  },

  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            singleton: true,
          },
        },
        use: [{
          loader: 'css-loader',
          options: {
            minimize: ENV === 'production',
            sourceMap: ENV === 'development',
            importLoaders: 1,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({ browsers: 'last 5 versions' }),
            ],
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: ENV === 'development',
          },
        }],
      }),
    }, {
      test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
      use: ENV === 'production' ? {
        loader: 'file-loader?name=[path][name]_[hash].[ext]',
        options: {
          name: '[hash:8].[ext]',
          outputPath: 'assets/images/',
        },
      } : {
        loader: 'url-loader',
      },
    }],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/vendor.[hash:8].js',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/style.[hash].css',
      allChunks: true,
      disable: ENV !== 'production',
    }),
    new CopyWebpackPlugin([
      { from: 'favicon.ico' },
    ]),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: './index.html',
      template: './index.ejs',
    }),
  ].concat(ENV === 'production' ?
    [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ]
    :
    []),

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
    modules: [
      SOURCE_DIR,
      'node_modules',
    ],
    alias: {},
  },

  stats: { colors: true },
  devtool: ENV === 'production' ? 'source-map' : 'eval-source-map',
  target: 'web',
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
  },
};
