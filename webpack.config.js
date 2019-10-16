
const path = require('path');
const config = {
  // Entry
  entry: {'./js/main.js'},

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
