import React, { useState, useEffect } from "react";

export const Hello = () => {
    const [name, setName] = useState("Ty");
    const handleText = (e) => {
        setName(e.target.value);
    };

    return (
        <form>
            <input onChange={handleText} type="text" value={name} />
            <h1>Hello, {name}</h1>
        </form>
    );
};
