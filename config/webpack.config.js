var LiveReloadPlugin = require('webpack-livereload-plugin'),
    env = process.env.NODE_ENV;
var webpack = require('webpack');

 
module.exports = {
  entry: './public/source/index.js',
  output: {
    path: 'public/build',
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('develop')
        }
      }),
      new LiveReloadPlugin(),
      new webpack.optimize.DedupePlugin()
    ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
}
