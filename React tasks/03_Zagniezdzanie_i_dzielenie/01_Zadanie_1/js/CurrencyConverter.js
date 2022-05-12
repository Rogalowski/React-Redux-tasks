import React from "react";
export function CurrencyConverter({ from, to, value, rate }) {
    return (
        <div>
            <strong>{value} </strong> {from} => {""}
            <strong>{(rate * value).toFixed(4)}</strong> {to}
        </div>
    );
}
