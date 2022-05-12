require("./date.js");
console.log("Główny plik aplikacji!");

// Zadanie 1
// Stwórz tablicę z dowolnymi liczbami. Następnie oblicz średnią arytmetyczną z liczb znajdujących się w tej tablicy i wypisz ją w konsoli.
// const numbers = [4, 4, 1, 2, 5, 40];
// Wynik w konsoli: 9.333


const numbers = [4, 4, 1, 2, 5, 40];
let sumNumbers = 0
numbers.map(function(element, index, array) {
    sumNumbers += element 
    return sumNumbers 
    }); 

console.log((sumNumbers / numbers.length).toFixed(3)); 
