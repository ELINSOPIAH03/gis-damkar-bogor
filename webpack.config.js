const path = require("path");

module.exports = {
    mode: "development",
    entry: ['./app/Views/webgis/js/main.js'], // Titik masuk aplikasi
    output: {
        // Konfigurasi output
        filename: "bundle.js", // Nama file output
        path: path.resolve(__dirname, "public/src/js"), // Direktori output
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.sass|scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: ['url-loader'],
            },
        ],
    },
};
