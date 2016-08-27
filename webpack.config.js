const webpack = require('webpack');

module.exports = {
    entry    : './js/app/index.js',
    output   : {
        path    : './js/bundles',
        filename: 'bundle.js'
    },

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 9090
    },

    module: {
        loaders: [
        {
            test   : /\.js$/,
            exclude: /node_modules/,
            loader : 'react-hot'
        },
        {
            test   : /\.js$/,
            exclude: /node_modules/,
            loader : 'babel-loader',
            query  : {
                presets: ['es2015', 'react']
            }
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};