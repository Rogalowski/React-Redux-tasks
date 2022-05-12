import React, { useState } from "react";

export const Notes = () => {
    const [text, setText] = useState("");

    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    const handleClickErase = (e) => {
        e.preventDefault();
        setText("");
    };
    return (
        <form>
            <textarea
                value={text}
                // id={"userInput"}
                onChange={handleChangeText}
            ></textarea>
            <br></br>
            <button onClick={handleClickErase}> Wyczyść</button>
            <br></br>
            <span>{text}</span>
        </form>
    );
};
