// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV == "production";

// const entryPath = "01_Dzien_1/01_Zadania/01_Zadanie_1";
// const entryPath = "02_Dzien_2-3/03_Destrukturyzacja/02_Zadanie_2";
// const entryPath = "02_Dzien_2-3/04_Export_i_import/01_Zadanie_1";
// const entryPath = "02_Dzien_2-3/05_Obiektowosc/01_Zadanie_1";
// const entryPath = "02_Dzien_2-3/01_Operatory_rest_i_spread/02_Zadanie_2";
// const entryPath =
//     "02_Dzien_2-3/02_Lancuchy_szablonow_i_interpolacja_stringow/02_Zadanie_2";
// const entryPath = "05_Konfiguracja_srodowiska/01_Projekt_testowy";
// const entryPath = "/03_Dzien_4/02_Fetch/01_Zadanie_1";
// const entryPath = "/03_Dzien_4/02_Fetch/03_Zadanie_3";
// const entryPath = "03_Dzien_4/03_Async_Await/03_Zadanie_3";
const entryPath = "03_Dzien_4/02_Fetch/03_Zadanie_3";

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";

const config = {
    entry: [`./${entryPath}/js/app.js`],
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${entryPath}/index.html`,
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = "development";
    }
    return config;
};
