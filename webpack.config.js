const webpack = require( 'webpack' );
// const autoprefixer = require( 'autoprefixer' );
// const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
// const path = require( 'path' );

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  // where do you want to start your app
  entry: {
    filename: './src/app.js',
  },
  // where do you want it to go?
  output: {
    filename: '_build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/', '_build'],
        loader: 'babel-loader',
        query: {
          presets: [
              ['es2015', { modules: false }],
          ],
        },
      },
      {
        test: /\.scss$/,
        loader: 'css-loader!sass-loader',
      },
    ],
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin( {
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    } ),
    // env plugin
    new webpack.DefinePlugin( {
      'process.env': { NODE_ENV: JSON.stringify( nodeEnv ) },
    } ),
  ],
};
