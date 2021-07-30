const path = require("path");

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'www'),
        compress: false,
        port: 8080,
        publicPath: "/guoqq"
    }
};