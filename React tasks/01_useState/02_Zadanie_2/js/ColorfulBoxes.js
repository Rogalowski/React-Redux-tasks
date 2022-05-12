import React, { useState } from "react";

export const ColorfulBoxes = () => {
    const [actualColor, setColor] = useState([]);

    const handleClickAddBox = () => {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor((arrayOfColors) => [...arrayOfColors, randomColor]);
        console.log(randomColor);
    };

    return (
        <>
            <button onClick={handleClickAddBox}>Dodaj Boxa!</button>

            {actualColor.map((props, index) => {
                return <CreateBox key={index} color={props} />;
            })}
        </>
    );
};

function CreateBox(props) {
    console.log(props);
    return (
        <div
            style={{
                height: 200,
                width: 200,
                backgroundColor: props.color,
            }}
        >
            box
        </div>
    );
}
