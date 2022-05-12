import React from "react";

export const SingleCar = ({ id, name, brand, engine, onSold }) => {
    const handleSoldClick = () => {
        if (typeof onSold === "function") {
            onSold(id);
        }
    };
    return (
        <>
            <li>
                {name} {brand} {engine.type} {engine.hp}
            </li>
            <button onClick={handleSoldClick}>Sold</button>
        </>
    );
};
