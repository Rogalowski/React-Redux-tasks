// Zadanie 3

// Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich. 
// Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.
// Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
//     Obie drużyny muszą być różne.
//     Liczba goli powinna być nieujemna.
// Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja 
// o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.


const buttonDodaj = document.querySelector(".btn-primary");

const team1Name = document.querySelector("#team1")
const team2Name = document.querySelector("#team2")

const team1Points = document.querySelector("#points1")
const team2Points = document.querySelector("#points2")

const tableResult = document.querySelector(".table")
const tableContentTR = tableResult.children[1]

console.log(tableContentTR)

// function checkGoals(team1Points, team2Points){
//     if (team1Points && team2Points > 0){
//         console.log("Hurra > 0")
//     }
//     else{
//         console.log("BAD < 0")
//     }
// }

// function checkScore(score){
//     if (parseInt(score)  > 0){
//         console.log("Hurra > 0")
//         return score
//     }
//     else{
//         console.log("BAD < 0")
//         return NaN
//     }
// }

 

// buttonDodaj.addEventListener('click', event => {
buttonDodaj.addEventListener("click", function (event) {
    event.preventDefault();

    const NewTR = document.createElement('tr');

    tableContentTR.append(NewTR);
    
    const NewTD1 = document.createElement('td');
    const NewTD2 = document.createElement('td');
    const NewTD3 = document.createElement('td');
    

    if ((team1Name.value  != team2Name.value) ){
        if (  parseInt(team1Points.value) && parseInt(team2Points.value) > 0 ) {

        NewTD1.appendChild(document.createTextNode( team1Name.value ));
        NewTR.appendChild(NewTD1);
        
        NewTD2.appendChild(document.createTextNode(team2Name.value));
        NewTR.appendChild(NewTD2);

        NewTD3.appendChild(document.createTextNode(  team1Points.value  + ' - ' + team2Points.value));
        NewTR.appendChild(NewTD3);
        }
        else{
        console.log("BAD < 0")
        }
    }
    else{
        console.log("BAD < 0")
    }

    
    
    






})
// for (let j = 0; j <= 2; j++) {
//     const NewTD = document.createElement('td');
 
//     NewTD.appendChild(document.createTextNode("Cell  "  + j));
//     NewTR.appendChild(NewTD);
//   }

  
