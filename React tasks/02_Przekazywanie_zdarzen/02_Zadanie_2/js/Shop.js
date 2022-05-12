import React, { useState } from "react";
import { ShopItem } from "./ShopItem";

export const Shop = () => {
    const [basket, setBasket] = useState([]);

    const addToList = (product) => {
        setBasket((state) => [...state, product]);
    };

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={addToList} />

            <ShopItem title="Dell X5500" onBuy={addToList} />

            <ShopItem title="Asus NT6000" onBuy={addToList} />

            <ul>
                {basket.map((pr, index) => (
                    <li key={index}>{pr}</li>
                ))}
            </ul>
        </div>
    );
};
