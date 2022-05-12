const path = require("path");
// const entryPath = "01_Dzien_1/01_Podstawy_zdarzen/01_Zadanie_1";
// const entryPath = "03_Dzien_4/01_Podstawy/02_Zadanie_2";
// const entryPath = "03_Dzien_4/03_Zagniezdzanie_i_dzielenie/01_Zadanie_1";
// const entryPath = "04_Dzien_5-7/01_Kompozycja_i_props_children/03_Zadanie_3";
// const entryPath = "05_Dzien_8/02_Stan_aplikacji/04_Zadanie_4";
// const entryPath = "04_Dzien_5-7/01_Kompozycja_i_props_children/04_Zadanie_4";
// const entryPath = "03_Dzien_4/03_Zagniezdzanie_i_dzielenie/02_Zadanie_2";
// const entryPath = "02_Dzien_2-3/02_Zagniezdzanie_i_klucze/03_Zadanie_3";
// const entryPath = "02_Dzien_2-3/01_Atrybuty_elmentow/04_Zadanie_4";
// const entryPath = "01_Dzien_1/03_Wyrazenia/06_Zadanie_6";
// const entryPath = "06_Dzien_9-10/01_useState/06_Zadanie_6";
// const entryPath = "06_Dzien_9-10/02_Renderowanie_warunkowe/03_Zadanie_3";
// const entryPath =
// "06_Dzien_9-10/03_Warunkowe_blokowanie_wyswietlania/02_Zadanie_2";
// "07_Dzien_11/01_Metody_cyklu_zycia_komponentu/06_Zadanie_6";
// "07_Dzien_11/02_useEffect/05_Zadanie_5";
// "08_Dzien_12-14/01_useEffect_-_ciag_dalszy_zadan/02_Zadanie_2";
// "08_Dzien_12-14/02_Zadania_podsumowujace/02_Zadanie_2";
// "09_Dzien_15/01_Przekazywanie_parametrow/01_Zadanie_1";
<<<<<<< HEAD
// const entryPath = "09_Dzien_15/01_Przekazywanie_parametrow/03_Zadanie_3";
// const entryPath = "09_Dzien_15/01_Przekazywanie_parametrow/04_Zadanie_4";
// const entryPath = "09_Dzien_15/01_Przekazywanie_parametrow/05_Zadanie_5";
const entryPath = "09_Dzien_15/02_Przekazywanie_zdarzen/02_Zadanie_2";
=======
// const entryPath = "09_Dzien_15/01_Przekazywanie_parametrow/05_Zadanie_5";
// const entryPath = "09_Dzien_15/02_Przekazywanie_zdarzen/02_Zadanie_2";
// const entryPath = "10_Dzien_16-17/01_Formularze/06_Zadanie_6";
// const entryPath = "11_Dzien_18/02_Formularze_-_ciag_dalszy_zadan/03_Zadanie_3";
// const entryPath = "12_Dzien_19-21/01_Zadania_podsumowujace/01_Zadanie_1";
// const entryPath = "13_Dzien_22/01_Fetch_a_React/03_Zadanie_3";
const entryPath = "13_Dzien_22/02_JSON_Server/01_Zadanie";
// const entryPath = "14_Dzien_23-24/01_React_Router/01_Zadanie_1";
>>>>>>> 72b39fb06b830a18eb801a74dae357e0d1b2fbce

module.exports = {
    entry: `./${entryPath}/js/app.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};
