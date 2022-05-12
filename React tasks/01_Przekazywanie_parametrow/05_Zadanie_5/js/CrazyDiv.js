import React, { useState } from "react";

export const CrazyDiv = () => {
    const [currentStyle, setStyle] = useState({
        background: "red",
        width: 100,
        height: 100,
        position: "absolute",
        left: 0,
        top: 0,
    });
    // const [min, setMin] = useState(0);
    // const [max, setMax] = useState(0);

    const handleHover = (min, max) => {
        setStyle({
            background: "red",
            width: 100,
            height: 100,
            position: "absolute",
            left: min,
            top: max,
        });
    };

    return (
        <>
            <button onMouseOver={() => handleHover(300, 600)}>
                Change style Top and Left
            </button>
            <div style={currentStyle}></div>
        </>
    );
};
