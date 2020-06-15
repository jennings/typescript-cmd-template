const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
  },

  plugins: [new NodemonPlugin()],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
