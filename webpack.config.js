const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Rules for Css
const rulesForCss = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

// Rules for HTML
const rulesForHtml = {
  test: /\.html$/i,
  loader: 'html-loader',
}

// Rules for files
const rulesForFiles = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}


const rules = [rulesForCss, rulesForHtml, rulesForFiles];


module.exports = (env, argv) => {
  const {mode} = argv;
  const isProduction = mode === 'production';

  return {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
    },
    module: {
      rules
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Halo App',
        filename: 'index.html',
        template: './index.html',
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      })
    ],
    devServer: {
      // static: {
      //   name: 'build',
      //   path: path.resolve(__dirname, 'build')
      // },
      open: true,
      port: 3000,
      compress: true, // enable gzip compression
      client: {
        overlay: { // show errors in browser
          errors: true,
          warnings: false,
        },
      },
    }
  }
}
