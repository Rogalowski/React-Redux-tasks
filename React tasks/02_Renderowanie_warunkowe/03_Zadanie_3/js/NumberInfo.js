import React, { useState } from "react";

export const NumberInfo = ({ number }) => {
    // const [state, setState] = useState(number);

    return (
        <>
            <ul>
                <li>
                    {Number.isInteger(number) ? number : "Nie jest liczbą :()"}
                </li>
                <li>{number % 2 == 0 ? "Parzysta" : "Nieparzysta"}</li>
            </ul>
        </>
    );
};
