function rockPaperScissors(player1, player2){
    
    let sheet = "papier"
    let cutter = "nożyce"
    let stone = "kamień"

if (player1 && player2 === sheet || stone || cutter){
    if (player1 === player2){
        console.log("Remiss")
        
    } else if ((player1 === sheet && player2 === stone) || (player1 === cutter && player2 === sheet) || (player1 === stone && player2 === cutter)) {
        console.log("Gracz 1 wygrał")
    }
    else {
        console.log("Gracz 2 wygrał")
    }
}
else{
    console.log("Błędne informacje")
}

}

let player1 = prompt()
let player2 = prompt()

console.log(rockPaperScissors(player1, player2))