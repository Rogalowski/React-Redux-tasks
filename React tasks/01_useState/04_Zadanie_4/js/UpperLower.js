import React, { useState } from "react";

export const UpperLower = () => {
    const [state, setState] = useState("Jakiś Napis");

    const handleClickUppercase = () => {
        setState((prevState) => prevState.toUpperCase());
    };

    const handleClickLowercase = () => {
        setState((prevState) => prevState.toLowerCase());
    };
    return (
        <>
            {console.log(state)}
            <h2>{state}</h2>
            <button onClick={handleClickUppercase}>Uppercase</button>
            <button onClick={handleClickLowercase}>Lowercase</button>
        </>
    );
};
