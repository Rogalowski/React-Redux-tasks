// Zadanie 2
// Stwórz komponent o nazwie LikeBox.
// Powinien on składać się z licznika polubień oraz przycisku do kliknięcia,
// że użytkownikowi podoba się dana treść.
// Póki co, komponent ten ma nic więcej nie robić.
// Wyrenderuj go na stronie. Zadanie wykonaj w oparciu o komponent funkcyjny.
// Przykładowy wynik: 100 likes

import React, { useState } from "react";
import ReactDOM from "react-dom";

function LikeBox() {
    const [amount, setAmount] = useState(0);

    function handleClick() {
        setAmount((prev) => prev + 1);
    }

    return (
        <div>
            <p>{amount} likes</p>
            <button onClick={handleClick}>Lubię to</button>
        </div>
    );
}

ReactDOM.render(<LikeBox />, document.getElementById("app"));
