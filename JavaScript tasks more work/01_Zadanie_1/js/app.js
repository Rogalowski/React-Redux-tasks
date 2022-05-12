// Zadanie 1 - Do wykonania z wykładowcą
// Napisz implementację metody reduce ale pod nazwą customReduce(). Zasada działania ma być taka sama jak metody reduce.
// Następnie wykorzystaj nową metodę i mając do dyspozycji tablicę z liczbami:

// const numbers = [4, 12, 23, 76, 4];

// Zwróć i wyświetl:
//     wynik dodawania wszystkich liczb z tablicy (suma liczb z tablicy: 119)
//     wynik mnożenia wszystkich liczb z tablicy (iloczyn liczb z tablicy: 335616)

const arr = [1, 2, 3];

Array.prototype.forEach = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("param is not a function");
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this); //wartosc, index, tablica
    }
};

function logNumber(elem, i, array) {
    console.log(i, elem, array);
}

arr.forEach(logNumber);
/* arr.forEach("Cokolwiek") */

// Sposoby zapisania funkcji normalnych i strzalkowych - skracanie zapisow
// const arr = [1, 2, 3]; zadeklarowana wyzej

const newArr = arr.map((a) => a * 2);

// const newArr2 = arr.map(function(a){return a *2})
// const newArr2 = arr.map((a)=>{return a *2})
// const newArr2 = arr.map((a)=> a *2)
// const newArr2 = arr.map(a=> a *2)

console.log(newArr); // [2, 4, 6]

console.log("ZADANIE 1 REDUCE:");
const numbers = [4, 12, 23, 76, 4];

Array.prototype.customReduce = function (callback) {
    if (typeof callback !== "function") {
        throw new Error("callback is not a function, found: ", callback);
    }

    //implementacja swojej metody reduce
    let result = this[0];

    for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i]);
    }

    return result;
};

// console.log(numbers.customReduce("paprochy")); // 119

console.log(
    numbers.customReduce(function (acc, curr) {
        return acc + curr;
    })
); // 119

console.log(
    numbers.customReduce(function (acc, curr) {
        return acc * curr;
    })
); // 335616

// const numbers = [4, 12, 23, 76, 4];

// Array.prototype.customReduce = function (callback, initialValue=null) {

//   if (typeof callback !== "function") {
//     throw new Error("callback is not a function, found: ", callback);
//   }
//   let accumulator;
//   let startingPoint;
//   if(initialValue){
//     accumulator = initialValue
//     startingPoint = 0
//   }else{
//     accumulator = this[0]
//     startingPoint = 1
//   }
//   for (let i = startingPoint; i < this.length; i++) {
//     // debugger;
//     accumulator = callback(accumulator,this[i],i,this)
//   }
//   return accumulator
// };
// // console.log(numbers.customReduce("paprochy")); // 119

// console.log(numbers.customReduce(function (acc, curr) {
//   return acc + curr;
// },100)); // 119

// console.log(numbers.customReduce(function (acc, curr) {
//   return acc * curr;
// },2)); // 335616
