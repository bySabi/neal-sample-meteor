var path = require('path');

var base_dir = path.resolve(__dirname, "./packages/neal-sample-static");

module.exports = {
  entry: [base_dir + "/js/app.jsx", base_dir + "/css/main.scss"],
  output: {
    path: base_dir + "/publish/js",
    publicPath: "/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?|\.js$/,
        exclude: /(node_modules|bower_components|neal-react)/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  }
};
