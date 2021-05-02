const path = require("path");
const { default: merge } = require("webpack-merge");
const base = require("./base");

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 3000,
  },
});
