import React, { useEffect, useState } from "react";

export const PESELInput = () => {
    const [inPesel, setInPesel] = useState(0);
    const [err, setErr] = useState("");

    const handlePeselNumber = (e) => {
        if (Number(e.target.value)) {
            setErr("");
            setInPesel(e.target.value);
            // setInPesel(e.target.value.length <= 11 ? e.target.value : "");
            if (e.target.value.length != 11) {
                setErr(
                    "Niepoprawny numer PESEL, prawidłowa długość to 11 znaków"
                );
            } else {
                setErr("");
            }
        } else {
            setInPesel("");
            setErr("Niedozwolone znaki!");
        }

        // if (Number(e.target.value) && e.target.value.length <= 10) {
        //     if (e.target.value.length == 11) {
        //         console.log("BINGO");
        //         setInPesel(e.target.value);
        //     }

        //     console.log("TAK");
        // } else {
        //     console.log("NIE");
        // }
    };

    return (
        <form>
            <input onChange={handlePeselNumber} />
            <div>
                <input
                    style={{ display: inPesel.length === 11 ? "" : "none" }}
                    type="submit"
                />
                {err}
            </div>
        </form>
    );
};
