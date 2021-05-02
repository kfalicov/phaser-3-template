const { merge } = require("webpack-merge");
const path = require("path");
const base = require("./base");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: { minimize: true },
});
