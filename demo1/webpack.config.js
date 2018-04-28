const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.xml/,
                use: [ 'xml-loader' ]
            }
        ]
    }
};