module.exports = {
    mode: 'none',
    entry: './assets/js/script.js',
    output:{
            filename: './public/js/bundle.js'
    },
    module:{

        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }


};