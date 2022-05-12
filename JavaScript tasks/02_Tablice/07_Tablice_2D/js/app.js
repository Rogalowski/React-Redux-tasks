// Zadanie 7: Tablice 2D
// Część 1

// Utwórzcie tablicę dwuwymiarową - 3 wiersze na 4 kolumny (w zmiennej arrayOfNumbers).

// W kolejnych kolumnach mają wystąpić kolejne liczby całkowite, czyli powinno to wyglądać następująco:

// 1,2,3,4

// 5,6,7,8

// 9,10,11,12

// Wyświetlcie:

//     drugi element z pierwszego wiersza
//     drugi wiersz (drugi element z pierwszego wymiaru)
//     długość trzeciego elementu z pierwszego wymiaru

// Część 2

// Utwórzcie tablicę dwuwymiarową (w zmiennej mixedArray) odpowiednio składającą się z:

//     tablicy z imionami: Maria, Jan, Piotr
//     tablicy z wartościami liczbowymi: 1, 2, 3, 4, 5, 6

// Wyświetlcie:

//     trzeci element z pierwszego wiersza
//     piąty element z pierwszego wiersza   ---> błąd? piąty element z drugiego wiersza?
//     długość drugiego elementu z pierwszego wymiaru

const arrayOfNumbers = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

console.log(arrayOfNumbers[0][1])
console.log(arrayOfNumbers[1][1])
console.log(arrayOfNumbers[2].length)

const mixedArray = [
    ['Maria', 'Jan', 'Piotr'],
    [1, 2, 3 ,4 , 5 , 6]
]


console.log(mixedArray[0][2])
console.log(mixedArray[1][4])
console.log(mixedArray[1].length)