import React from "react"
import List from "../containers/List";

const Counter = ({time, start, stop, reset, isRunning}) => {
    return (
        <>
            <h1>Time: {time} </h1>
            <button disabled={isRunning} onClick={start}>START</button>
            <button disabled={!isRunning} onClick={stop}>STOP</button>
            <button onClick={reset}>RESET</button>
            <List/>
        </>
    )
}
export default Counter;