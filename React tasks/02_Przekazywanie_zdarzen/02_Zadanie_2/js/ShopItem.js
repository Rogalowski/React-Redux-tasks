import React, { useEffect, useState } from "react";

export const ShopItem = ({ title, onBuy }) => {
    function onBuy(e, onClick) {
        console.log(e);
        if (typeof onClick === "function") {
            setItem((prev) => [...prev, title]);
        }
    }
    return (
        <div>
            <h1>{title}</h1>
            <button
                onClick={(e) => {
                    e, onBuy;
                }}
            >
                Kup
            </button>
        </div>
    );
};
