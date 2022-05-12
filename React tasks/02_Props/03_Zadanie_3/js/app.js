// Zadanie 3

// Stwórz komponent o nazwie Sum. Do props przekaż mu tablicę liczb (numbers).
// Powinien on wyświetlać w elemencie h1 sumę wszystkich podanych liczb. Możesz do
// tego wykorzystać znany Ci reduce().
// Wyrenderuj go na stronie podając w atrybucie do props przykładową tablicę liczb.
// Należy wykonać to zadanie w oparciu o komponent funkcyjny.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SumF, SumC } from "./Sum";

const App = () => {
    const data = {
        numbers: [10, 20, 30, 40],
    };
    return (
        <>
            <h1>
                Function: <SumF {...data} />
            </h1>
            <h1>
                Class: <SumC {...data} />
            </h1>
        </>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));
