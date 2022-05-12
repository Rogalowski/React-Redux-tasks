import React, { useState } from "react";

export const MyButton = () => {
    const [stateYesOrNo, setYesOrNo] = useState(false);

    const handleTurnOffClick = () => {
        setYesOrNo(false);
    };

    const handleTurnOnClick = () => {
        setYesOrNo(true);
    };

    // let yesOrNo;
    // if (stateYesOrNo) {
    //     yesOrNo = <SwitchYes onClick={handleTurnOffClick} />;
    // } else {
    //     yesOrNo = <SwitchNo onClick={handleTurnOnClick} />;
    // }

    return (
        <div>
            <h1>Tak, czy Nie</h1>
            {stateYesOrNo ? (
                <SwitchYes onClick={handleTurnOffClick} />
            ) : (
                <SwitchNo onClick={handleTurnOnClick} />
            )}
        </div>
    );
};

const SwitchYes = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick}>Aktywny TAK</button>
        </>
    );
};

const SwitchNo = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick}>Aktywny NIE</button>
        </>
    );
};

// -------------------------------------------------------------------
const MyButton1 = () => {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => setIsActive((state) => !state);
    return <button>{isActive ? "TAK" : "NIE"} </button>;
};
