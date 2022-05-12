import React, { useState } from "react";

export const Numbers = () => {
    const initialState = [
        54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40,
    ];
    const [state, setState] = useState(initialState);
    const handleClickOddNumbers = () => {
        setState(
            (prevState) =>
                (prevState = prevState.filter(function (element, index) {
                    return element % 2 === 0;
                }))
        );
    };
    const handleClickEvenNumbers = () => {
        setState(
            (prevState) =>
                (prevState = prevState.filter(function (element, index) {
                    return element % 2 === 1;
                }))
        );
    };
    const handleClickAllNumbers = () => {
        // setState(initialState);
        setState((prevState) => initialState);
    };

    return (
        <>
            {state.map((number, index) => {
                // console.log(number);

                return <RenderNumbers key={index} number={number} />;
            })}
            <button onClick={handleClickOddNumbers}>
                Pokaż tylko parzyste
            </button>
            <button onClick={handleClickEvenNumbers}>
                Pokaż tylko nieparzyste
            </button>
            <button onClick={handleClickAllNumbers}>Pokaż wszystkie</button>
        </>
    );
};

const RenderNumbers = ({ number }) => {
    return <li>{number}</li>;
};
