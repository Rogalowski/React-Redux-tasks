// Zadanie 2 - rozwiązywane z wykładowcą
// Stwórz dwie tablicę fruits i vegetables. Następnie stwórz trzecią
// tablicę mix, która będzie połączeniem obu poprzednich tablic. Użyj operator rozproszenia.

// Wypisz tablicę w konsoli.

const fruits = ["apple"];
const vegetables = ["tomato", "potato"];

const mix = [...fruits, ...vegetables];
console.log(mix);
