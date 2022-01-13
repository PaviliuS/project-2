const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Require  html-webpack-plugin plugin
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

let mode = 'development'; // По умолчанию режим development
let target = 'web';
if (process.env.NODE_ENV === 'production') { // Режим production, если при запуске вебпака было указано --mode=production
  mode = 'production';
  target = 'browserlist';
}

module.exports = {
  mode,
  target,

  devtool: 'source-map',
  entry: __dirname + "/src/index.js", // webpack entry point. Module to start building dependency graph

  output: {
    path: path.resolve(__dirname, 'dist'), // Folder to store generated bundle
    assetModuleFilename: 'assets/images/[name][ext]', // Все ассеты будут
    clean: true,
    filename: 'js/bundle.js',  // Name of generated bundle after build
    //publicPath: mode == 'production' ? './' : '/', // public URL of the output directory when referenced in a browser
    publicPath: '/', // public URL of the output directory when referenced in a browser
  },

  module: {  // where we defined file patterns and their loaders
    rules: [
      //HTML
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      // PUG
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // IMAGES
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // FONTS and SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, SASS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ],
      },
    ]
  },

  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/template.pug",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/blog.pug",
      filename: "blog.html"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/works.pug",
      filename: "works.html"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/article.pug",
      filename: "article.html"
    }),
 
    new HtmlWebpackPugPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],

  devServer: {  // configuration for webpack-dev-server
    //static: './src/public',  //source of static assets
    //static: './src/public',  //source of static assets
    hot: true,
    port: 8080, // port to run dev-server
  }
};