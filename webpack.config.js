const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/script.js'),
    },

    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'main.js',
    },
    mode: "development",
    module: {rules:[
        {
            test: /\.jsx?$/,
            use: "babel-loader"
        }
    ]},
    devtool: "inline-source-map"
}

