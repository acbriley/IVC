const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './app.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './'
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
             'style-loader',
             'css-loader'
           ]
         },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader'
            ]
        }
       ]
     }
};

