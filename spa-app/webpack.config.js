const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv')

module.exports = (env) => {
  const denv = dotenv.config().parsed

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    mode: 'development',
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
      new webpack.DefinePlugin({
        'process.env.REACT_APP_DATA_URL': JSON.stringify(denv.REACT_APP_DATA_URL),
        'process.env.REACT_APP_CONTACT_FORM': JSON.stringify(denv.REACT_APP_CONTACT_FORM),
      }),
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
  }
};

