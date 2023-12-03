const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv')

module.exports = (env, argv) => {

  const envfile = '.env' + (argv.mode ? '.' + argv.mode: '')
  const denv = dotenv.config({path: envfile}).parsed
  // .envの中身を展開
  const envKeys = Object.keys(denv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(denv[next])
    return prev
  }, {})

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env','@babel/preset-react'
            ],
            targets: "defaults"
          }
        }
      }, {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
    // devtool: 'cheap-module-source-map'
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      compress: true,
      port: 8080,
    },
    performance: {
      maxEntrypointSize: 500000,
    },
  }
};

