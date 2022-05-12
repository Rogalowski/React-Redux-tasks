// Zadanie 1

//     Stwórz funkcję getTags(elements), do której przekaż jako argument zmienną childElements (pamiętaj o tym, że jest to pseudotablica)
//     stwórz w funkcji nową tablicę i wypełnij ją nazwami tagów pobranymi z elementów znajdujących się w childElements
//     zwróć tę tablicę.


const childElements = document.querySelector("article").children;

function getTags(elements){
    const newArray = [];

    Array.from(elements).forEach(function(element) {
        newArray.push(element)
      });

return newArray
}

console.log(getTags(childElements))

