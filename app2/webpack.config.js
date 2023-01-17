const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: { main: "./src/index", app2: "./config/setPublicPath" },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, "dist"),
    port: 3010,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "/remote/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
        "./Header": "./src/Header",
        "./setPublicPath": "./config/setPublicPath",
      },
      shared: {
        react: { singleton: true },
        "react-dom/client": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
