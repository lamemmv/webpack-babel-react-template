// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'), // source folder path 
    JS: path.resolve(__dirname, 'src/js'),
};

module.exports = {
    entry: {
        app: path.join(paths.JS, 'app.jsx')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // Tell webpack to use html plugin 
        // index.html is used as a template in which it'll inject bundled app. 
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],
    output: {
        filename: '[name].bundle.js',
        path: paths.DIST
    },
    // Loaders configuration 
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            // CSS loader to CSS files 
            // Files will get handled by css loader and then passed to the extract text plugin
            // which will write it to the file we defined above
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: ['style-loader',
                        'css-loader'
                    ],
                }),
            },
            // File loader for image assets 
            // We'll add only image extensions, but you can things like svgs, fonts and videos
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    // Enable importing JS files without specifying their's extenstion 
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};