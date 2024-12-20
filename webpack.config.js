const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "public/js"),
  },
  mode: "development",
};