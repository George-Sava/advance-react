const path = require('path');

const config = {
    entry : ['babel-polyfill','./lib/renderers/dom.js'],
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'
            }
        ]
    }
};

module.exports = config;