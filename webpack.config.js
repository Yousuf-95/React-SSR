const path = require('path');

module.exports = {
    entry: './server.js',
    output: {
        filename: 'server.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    target: 'node',
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
            serveIndex: true,
            watch: true,
          }
    }
}