// Zadanie 4
// Mając do dyspozycji tablicę z latami, stwórz nową tablicę, 
// która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę.
// const years = [1995, 1856, 2014, 1987];
const years = [1995, 1856, 2014, 1987];

const age = years.map(function(element, index, array) { 
    return 2022 - element ; 
    }); 

console.log(age)