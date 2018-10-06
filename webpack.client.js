const path = require('path');
//const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    // Tell webpack to run babel on every file it runs through

    entry: './src/client/client.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'public')
        //path: '../../build'
    },
    //externals: [webpackNodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    },
    mode: 'development'
};
