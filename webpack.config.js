const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CopyPlugin = require('copy-webpack-plugin');
const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

if (NODE_ENV !== 'development' && NODE_ENV !== 'production')
  throw new Error("'NODE_ENV' must be either 'development' or 'production'");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.ts',
  mode: isDev ? 'development' : 'production',
  devServer: !isDev
    ? undefined
    : {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        open: true,
        hot: true,
        inline: true,
        compress: true,
        watchContentBase: true,
      },
  optimization: isDev
    ? undefined
    : {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
      },
  devtool: isDev ? 'source-map' : undefined,
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.s(c|a)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: isDev },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './static/assets/images',
            },
          },
        ],
      },
      {
        test: /\.(mp3|ogg|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './static/assets/audios',
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx'] },
  output: {
    filename: './static/js/main.[hash].js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './static/css/main.[hash].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'public', 'robots.txt'),
          to: 'robots.txt',
        },
      ],
    }),
  ],
};
