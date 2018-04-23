const path = require('path');
const merge = require('webpack-merge');
const webpackExt = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
    //Inform webpack to build a bundle for NodeJS and not the browser
    target: 'node',
    //The root file of our server application(entry point)
    entry: './src/index.js',
    //Tell webpack where to put the bundled output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackExt()]
};

module.exports = merge(baseConfig, config);