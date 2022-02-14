"use strict"
{
    const path = require('path');
    const webpack = require('webpack');

    module.exports = {
        entry: './main.js',
        output: {
            filename: 'kendo-bundle.js',
            path: path.resolve(__dirname, 'wwwroot/libs/kendo/dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
                },
                {
                    test: /jquery.+\.js$/,
                    use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }, {
                        loader: 'expose-loader',
                        options: '$'
                    }]
                }
            ]
        },
        externals: {
            jquery: 'jQuery'
        }
    }
}