var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
                test: /\.jpe?g|png|ico|svg$/,
                exclude: /node_modules/,
                loader: ["url-loader", "file-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.s?css$/,
                include: [path.resolve(__dirname, "app")],
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};