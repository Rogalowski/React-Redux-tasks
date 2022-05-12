// Zadanie 2 - rozwiązywane z wykładowcą
// Stwórz komponent o nazwie AddNumbers. Do props przekaż mu liczbę A
// (numberA) oraz liczbę B (numberB).
// Powinien on wyświetlać w elemencie h1 sumę tych dwóch liczb.
// Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.

// Zadanie wykonaj w dwóch wersjach:
//     Najpierw komponentem w wersji funkcyjnej,
//     Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AddNumbersC, AddNumbersF } from "./AddNumbers";

const App = () => {
    const data = {
        numberA: 10,
        numberB: 32,
    };
    return (
        <>
            <AddNumbersF {...data} />
            <AddNumbersC {...data} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
