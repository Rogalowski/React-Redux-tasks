import React, { useEffect, useState } from "react";

export const PassParameter = () => {
    const [text, SetText] = useState("Jakiś String");
    const handleClickButton = ({ event, text }) => {
        event.preventDefault();
        return console.log(text);
    };
    return <a onClick={(event) => handleClickButton({ text, event })}>LINK</a>;
};
