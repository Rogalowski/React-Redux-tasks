import React, { useState } from "react";
import { ButtonToClick } from "./ButtonToClick";

export const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick onClick={() => setCounter((state) => state + 1)} />
            <ButtonToClick onClick={() => setCounter((state) => state + 2)} />
        </div>
    );
};

// import React from "react";

// export const ButtonToClick = ({ onClick }) => {
//     function handleClick() {
//         if (typeof onClick === "function") {
//             onClick();
//         }
//     }

//     return <button onClick={handleClick}>Kliknij mnie!</button>;
// };
