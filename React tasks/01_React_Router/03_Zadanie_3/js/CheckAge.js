import React from "react";
import { useParams } from "react-router-dom";
export const CheckAge = () => {
    let { age } = useParams();

    return (
        <>
            <h1>{age >= 18 ? "Pełnoletni " : "Nie pełnoletni"}</h1>
        </>
    );
};
