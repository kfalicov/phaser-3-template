const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: { import: "./src/index.js", dependOn: "vendor" },
    vendor: ["phaser"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: [/\.vert$/, /\.frag$/],
        exclude: /node_modules/,
        use: "raw-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        loader: "file-loader",
        include: path.resolve(__dirname, "../assets"),
        exclude: /node_modules/,
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
