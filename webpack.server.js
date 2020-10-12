const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //Inform the webpack that we are building bundle for node.js, rathen than for browser
    target: 'node',

    //Tell webpack the root file of our
    //server application
    entry: './src/index.js',

    //Tell the webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build")
    },
    
    //Telling webpack to not bundle any libraries into output bundle of server if that library exists inside node_modules directory
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);