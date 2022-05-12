// Zadanie 6: Tablice z imionami
// Część 1

// Zdefiniujcie tablicę w zmiennej names1 zawierającą kolejne imiona: Jan, Maria, Kasia, Wojtek, Zosia

// Na koniec wypiszcie w terminalu w kolejnych liniach:

//     drugi element
//     piąty element
//     długość tablicy

// Część 2

// Zdefiniujcie pustą tablicę w zmiennej names2, a następnie pojedynczo dodajcie do niej następujące imiona:

// Jan, Maria, Kasia, Wojtek, Zosia, Grzesiek

// Na koniec wypiszcie w terminalu:

//     pierwszy element
//     trzeci element
//     długość tablicy

names1 = ['Jan', 'Maria', 'Kasia', 'Wojtek', 'Zosia']
console.log(names1[1])
console.log(names1[4])
console.log(names1.length)

names2 = []

names1.forEach(function(element, index, array) { 
    names2.push(element)
    }); 
names2.push('Grzesiek')
console.log(names2[0])
console.log(names2[2])
console.log(names2.length)