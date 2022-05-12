import React, { useState } from "react";

export const CountThings = ({ age }) => {
    const [money, setMoney] = useState(10000);
    const [ageUSer, setAgeUser] = useState(age);
    const handleClickAddMoney = () => {
        setMoney((prevState) => prevState + 1000);
    };
    const handleClickAddAge = () => {
        setAgeUser((prevState) => prevState + 1);
    };
    return (
        <>
            <p>💰 so much money: {money}</p>
            <button onClick={handleClickAddMoney}>Get rich!</button>
            <p>Age: {ageUSer}</p>
            <button onClick={handleClickAddAge}>Get older:(</button>
        </>
    );
};
