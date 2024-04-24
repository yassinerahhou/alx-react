// task_5/dashboard/config/webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Update entry point to point to index.js in src directory
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      // Add rules for handling CSS files, image files, etc. as needed
    ],
  },
  devtool: "inline-source-map",
};
