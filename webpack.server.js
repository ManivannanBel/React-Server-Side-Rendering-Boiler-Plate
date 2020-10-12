const path = require('path');
module.exports = {
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

    //Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env', {targets : { browsers : ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}