const path = require('path')
const packageJson = require('./package.json')

const outputFileName = packageJson.name

module.exports = {
  entry: './src/index.js',
  output: {
    library: outputFileName.replace(/-(\w)/, (_, char) => char.toUpperCase()),
    libraryTarget: 'assign',
    filename: `${outputFileName}.js`,
    path: path.join(__dirname, 'bundle')
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: [['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: 3 }]]
        }
      }
    ]
  }
}
