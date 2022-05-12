// Zadanie 1
// Podstaw pod zmienne pierwszą i ostatnią wartość następującej tablicy:

// ["snow", "rain", "sun"]

// Wypisz zmienne w konsoli.

const array = ["snow", "rain", "sun"];
const [first, , third] = array;
console.log(`${first}, ${third}`);
