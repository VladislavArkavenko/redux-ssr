let path = require('path')
let webpack = require('webpack')
let nodeExternals = require('webpack-node-externals')

let clientConfig = {
    entry: './src/client',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}

let serverConfig = {
    entry: './src/server',
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ]
}

module.exports = [clientConfig, serverConfig ]