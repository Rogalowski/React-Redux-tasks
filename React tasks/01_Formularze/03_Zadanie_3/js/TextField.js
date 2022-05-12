import React, { useEffect, useState } from "react";

export const TextField = () => {
    const [choice, setChoice] = useState("mrs");

    const handleTitleChange = (e) => {
        setChoice(e.target.value);
    };

    return (
        <div>
            <p> {choice}</p> <span> {choice.length} </span>
            <select value={choice} onChange={handleTitleChange}>
                <option value="Cos tam coś">Cos tam coś</option>
                <option value="mrs">Mrs</option>
                <option value="Mr ASASAS">Mr ASASAS</option>
            </select>
        </div>
    );
};
