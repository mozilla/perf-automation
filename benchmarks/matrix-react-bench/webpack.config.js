const path = require("path");

module.exports = {
    mode: "production",
    devtool: false,

    module: {
        rules: [
            {
                test: /RecorderWorklet\.ts$/,
                loader: "null-loader",
            },
            {
                test: /\.worker\.ts$/,
                loader: "null-loader",
            },
            {
                test: /Worker.min.js$/,
                loader: "null-loader",
            },
            {
                test: /PosthogAnalytics\.ts$/,
                loader: "null-loader",
            },
            {
                test: /BlurhashEncoder\.ts$/,
                loader: "null-loader",
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|svg|woff2)$/,
                loader: "null-loader",
            },
            {
                test: /\.(wasm)$/,
                type: "javascript/auto",
                loader: "null-loader",
            },
        ]
    },

    node: {
        fs: "empty",
    },

    output: {
        globalObject: "globalThis"
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        mainFields: ['matrix_src_browser', 'matrix_src_main', 'browser', 'main'],

        alias: {
            "$webapp": path.resolve(__dirname, 'webapp'),
        }
    }
};
