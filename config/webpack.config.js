const path = require('path');

module.exports = {
    entry: [
        'index.js'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js", 
        publicPath: '/',
    },
    rules: [
        {
            test: /\.jsx?$/,
            /* fill this in to restrict webpack to specific locations
            include: <paths>|<conditions>
            fill this in to exclude certain things in those locations
            exclude: <conditions>
            */
            loader: "babel-loader"
        }
    ]
}