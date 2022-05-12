// Zadanie 4

// Zmodyfikuj komponent LikeBox z poprzedniego tematu (01_Podstawy/02_Zadanie_2).
//  Niech przyjmuje w props początkową liczbę polubień (likes). Wyrenderuj go na
//  stronie podając w atrybucie do props przykładową liczbę polubień.

import React, { useState } from "react";
import ReactDOM from "react-dom";
let likesCount = 0;
function handleCLick() {
    return (likesCount = likesCount + 1);
}
function LikeBox({ likesCount }) {
    return (
        <>
            <label>{likesCount} likes</label>
            <button> Lubię to</button>
        </>
    );
}

// function LikeBox() {
//     const [amount, setAmount] = useState(0);

//     function handleClick() {
//         setAmount((prev) => prev + 1);
//     }

//     return (
//         <div>
//             <p>{amount} likes</p>
//             <button onClick={handleClick}>Lubię to</button>
//         </div>
//     );
// }

ReactDOM.render(<LikeBox likesCount={12} />, document.getElementById("app"));
