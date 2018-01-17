import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [
      path.resolve(__dirname, 'src/index')
    ],
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [],
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
        {test: /\.css$/, loaders: ['style-loader','css-loader']}
      ]
    }
  }