import * as webpack from 'webpack'
import * as helpers from './helpers';

const config = {
    // devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'null-loader'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: 'null-loader'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        )
    ]
};

export = config;


