
const path = require('path');
module.exports = {
  // Entry
  entry: './src/js/main.js',
  // Output
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
