import React, { useEffect, StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { CarsManager } from "./CarsManager";
import { AddCar } from "./AddCar";
import { fetchData } from "./Car";

const App = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        console.log("fetch: ", fetchData());
        fetchData().then((d) => {
            // console.log("d: ", d);
            setData(d);
        });
    }, []);

    return (
        <>
            <CarsManager data={data} setData={setData} />
            <AddCar setData={setData} />
        </>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("app")
);
