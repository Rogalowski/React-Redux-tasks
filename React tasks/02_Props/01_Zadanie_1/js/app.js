// Zadanie 1 - rozwiązywane z wykładowcą

// Stwórz komponent Hello. Do props przekazuje mu się imię (name) oraz nazwisko (surname).
// Powinien on wyświetlać w elemencie h1 napis "Hello, name surname" z odpowiednimi danymi.
//  Wyrenderuj go na stronie podając w atrybutach do props swoje dane.
// Zadanie wykonaj w dwóch wersjach:

//     Najpierw komponentem w wersji funkcyjnej,
//     Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HelloC, HelloF } from "./Hello";

const App = () => {
    const user = {
        name: "Yanush",
        surname: "Programowania",
    };

    return (
        <>
            <HelloF {...user} />
            <HelloC name={user.name} surname={user.surname} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
