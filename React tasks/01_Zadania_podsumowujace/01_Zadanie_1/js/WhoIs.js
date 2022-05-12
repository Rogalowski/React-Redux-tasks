import React, { useState } from "react";

export const WhoIs = ({ data }) => {
    const [present, setPresent] = useState(data);
    const [selected, setSelected] = useState([]);

    const handleSelect = (e) => {
        console.log(e.target.value, present);
        const chosen = e.target.value;
        setPresent((state) => [
            ...state.filter((el) => {
                return el !== chosen;
            }),
        ]);
        setSelected((state) => [...state, chosen]);
    };

    return (
        <>
            <form>
                <select>
                    {present.map((el, index) => {
                        return (
                            <option onClick={handleSelect} key={index}>
                                {el}
                            </option>
                        );
                    })}
                </select>
            </form>
            <ul>
                {selected.map((el, index) => {
                    return <li key={index}>{el}</li>;
                })}
            </ul>
        </>
    );
};
