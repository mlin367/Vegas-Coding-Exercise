const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
