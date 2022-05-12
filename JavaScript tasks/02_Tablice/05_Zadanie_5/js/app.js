// Zadanie 5
// Napisz funkcje getSecondMaxNumber(array), która jako argument przyjmuje tablicę. 
// Funkcja ma zwrócić drugą co do wielkości liczbę w tablicy.

// Przykład:
// const numbers = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

// console.log(getSecondMaxNumber(numbers));
// Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, 
// ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku

const numbers = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

function getSecondMaxNumber(array){
    const secondLastIndex = numbers.length - 2


const sortedArray =  array.sort((a, b) => {
    return a - b;
});


return sortedArray[secondLastIndex]
}


console.log(getSecondMaxNumber(numbers));