import React, { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(10);

    const handleClickAdd = () => {
        setCounter((prevState) => prevState + 1);
    };
    const handleClickMinus = () => {
        setCounter((prevState) => prevState - 1);
    };
    const handleClickReset = () => {
        setCounter((prevState) => (prevState = 10));
    };
    return (
        <>
            <h1>Liczba kliknięć: {counter}</h1>

            <button onClick={handleClickAdd}>+</button>
            <button onClick={handleClickMinus}>-</button>
            <button onClick={handleClickReset}>Reset</button>
        </>
    );
};

// Użycie bez funkcji
// const TurnOff = () => {
//   const [state, setState] = useState(true);
//   const handleClick = () => {
//     setState(false);
//   }
//   return (
//     <button onClick={handleClick}>
//       Turn Off!
//     </button>
//   );
// };

// Użycie z funkcją
// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const handleClick = () => {
//     setCounter(prevState => prevState + 1);
//   }
//   return (
//     <>
//       <h1>Liczba kliknięć: {counter}</h1>
//       <button onClick={handleClick}>
//         Kliknij!
//       </button>
//     </>
//   );
// };

// const User = () => {
//   const [user, setUser] = useState({
//     name: "John",
//     surname: "Doe",
//     age: 20
//   });

//   handleChange = () => {
//     setUser(prevState => {
//       return {
//         ...prevState,
//         name: "Mark"
//       }
//     });
//   };

//   // reszta logiki komponentu
// };

// Musimy rozproszyć obiekt ze stanem a następnie nadpisać wartości które chcemy zmodyfikować.
