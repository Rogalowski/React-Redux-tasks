import React from "react";
import withTimer from "../hoc/withTimer";

// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
const Stopper = ({ time, handleStart, handleStop, handleClear, children }) => (
    <>
        <p>{time}</p>
        {children}
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleClear}>clear</button>
    </>
);

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
const StopperWithTimer = withTimer(Stopper);

export { Stopper, StopperWithTimer };
