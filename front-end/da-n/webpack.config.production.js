const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // Webpack configuration goes here
  mode: 'production',
  entry: {
    vendor: ['semantic-ui-react'],
    app: './src/index.js'
  },
  output: {
    filename: 'static/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'source-map',

  module: {
    rules: [

      // First Rule
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          } 
        ]
      },
      //Third Rule - images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, 
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
};