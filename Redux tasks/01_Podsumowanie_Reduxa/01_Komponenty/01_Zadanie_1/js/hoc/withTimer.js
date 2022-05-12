/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */
import React, {useState} from "react";


export default (WrappedComponent) => props => {
    const [time, setTime] = useState(0);
    const [interID, setInterID] = useState(null);

    const handleStart = () => {
        if (!interID) {
            const id = setInterval(() => {
                setTime(prev => prev +1)
            }, 1000)

            setInterID(id)
        }
    }

    const handleStop = () => {
        clearInterval(interID)
        setInterID(null)
    }

    const handleClear = () => {
      setTime(0)
    }

    return <WrappedComponent
        time={time}
        handleStart={handleStart}
        handleStop={handleStop}
        handleClear={handleClear}
        {...props}
    />
}
