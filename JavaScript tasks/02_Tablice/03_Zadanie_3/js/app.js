// Zadanie 3
// Napisz funkcje getNegativeNumbers(array), która jako argument przyjmuje tablicę. Tablica może zawierać liczby ujemne. 
// Funkcja ma zwrócić nową tablicę wypełnioną tylko ujemnymi liczbami.
// Przykład:
// const numbers = [4, -5, 0, 2, -67, 8, 10, -34 ];
// console.log(getNegativeNumbers(numbers));
// Wynik w consoli: [-5, -67, -34]

const numbers = [4, -5, 0, 2, -67, 8, 10, -34 ];

function minusNumbers(array){
     const newNumbers = array.filter(function(element, index, array) { 
        return element < 0; 
        }); 
    return newNumbers
}
console.log(minusNumbers(numbers))