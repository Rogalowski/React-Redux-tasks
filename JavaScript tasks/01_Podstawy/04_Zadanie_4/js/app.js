let min = 1
let max = 10
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
// console.log("Random number:", randomNumber)

let typeNumber = parseInt(prompt("Type number: "))

if (typeNumber === randomNumber){
    console.log("Brawo!")
} else {
    console.log("Spróbuj jeszcze raz!")
}