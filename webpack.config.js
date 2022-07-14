const path = require('path');
const MinifyHtmlWebpackPlugin = require('minify-html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MinifyHtmlWebpackPlugin({
            src: './src',
            dest: './dist',
            ignoreFileNameRegex: /.*(?<!\.html)$/,
            rules: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                minifyJS: false,
            }
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/img", to: "img" },
                { from: "src/resume-web.pdf" }
            ],
            options: {
                concurrency: 100,
            },
        }),
    ],
};