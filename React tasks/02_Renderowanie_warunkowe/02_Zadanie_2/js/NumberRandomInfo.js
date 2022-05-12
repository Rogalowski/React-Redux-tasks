import React, { useState } from "react";

export const NumberRandomInfo = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    if (randomNumber === null) {
        setInterval(() => {
            setRandomNumber(Math.ceil(Math.random() * 5));
        }, 1000);
    }

    return (
        <>
            <h3>Wylosowana: {randomNumber}</h3>
            <h3> {randomNumber >= 3 ? "Większy równy 3" : "Mniejszy od 3"} </h3>
        </>
    );
};
