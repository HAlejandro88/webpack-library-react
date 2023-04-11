const path = require("path");


module.exports = {
    entry: './src/index.ts',
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "once-lib"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            }
        ]
    },
    externals: {
        react: "react"
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    }

}