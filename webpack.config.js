var webpack = require('webpack');
var path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  context: ROOT_PATH,
  entry:  [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    ROOT_PATH + '/index.js'
  ],
  output: {
    path: ROOT_PATH + '/public',
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:8080/'
  },
  module: {
    loaders: [
      //Favor babel-loader
      {
        test: /\.js?$/, exclude:/node_modules/,
        loaders: ['react-hot','babel-loader']
      },
      {
        test: /\.(sass|scss)?$/,
        loaders: ['style','css','sass']
      }
    ]
  },
  plugins: [
    //extract inline css into a main style.css fil
    //new ExtractTextPlugin('public/styles.css', {
    //  allChunks: true
    //}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true
  }
};
