import React from "react";

export const ButtonToClick = ({ onClick }) => {
    function handleClick() {
        if (typeof onClick === "function") {
            onClick();
        }
    }

    return <button onClick={handleClick}>Kliknij mnie!</button>;
};
