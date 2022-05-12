// Zadanie 2
// Stwórz obiekt slider, taki jak poniżej:

// const slider = {
//   type: "infinite",
//   numberOfItems: 10,
//   center: true,
//   autoStart: true
// }

// Podstaw do zmiennych type oraz autoStart odpowiednie wartości z obiektu slider.

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true,
};

// slider = { newType: "dictionary", autoStart: false };
// let { type, autoStart = false } = slider;
// type = "as";
// autoStart = false;

let { type, autoStart } = slider;

type = "list";
autoStart = false;

console.log(type);
console.log(autoStart);
