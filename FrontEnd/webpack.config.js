const path = require('path');
const DIST_PATH = path.resolve(__dirname, './dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    home: './src/js/home.js',
    blog: './src/js/blog.js',
    post: './src/js/postPage.js',
    form: './src/js/form.js',
    view: './src/pages/mvc/js/portfolio.js'
  },
  output: {
    path: DIST_PATH,
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './img/',
            publicPath: '../img/'
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './fonts/',
            publicPath: '../fonts/'
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: DIST_PATH + '/css/'
            }
          },
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'eval-sourcemap',
  plugins: [
    new WebpackCleanPlugin(
      'dist'
    ),
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
      chunkFilename: './css/styles.css'
    }),
    new HtmlWebpackPlugin({
      filename: './pages/home.html',
      template: './src/pages/home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      filename: './pages/blog.html',
      template: './src/pages/blog.html',
      chunks: ['blog']
    }),
    new HtmlWebpackPlugin({
      filename: './pages/post.html',
      template: './src/pages/post.html',
      chunks: ['post']
    }),
    new HtmlWebpackPlugin({
      filename: './pages/form.html',
      template: './src/pages/form.html',
      chunks: ['form']
    }),
    new HtmlWebpackPlugin({
      filename: './pages/mvc/portfolio.html',
      template: './src/pages/mvc/portfolio.html',
      chunks: ['view']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: []
    }),
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: './img'
      }
    ])
  ],
  devServer: {
    contentBase: DIST_PATH,
    port: 9000,
    compress: true,
    open: true
  }
};
