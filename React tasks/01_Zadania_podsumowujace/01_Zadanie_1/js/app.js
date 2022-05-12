import React, { Component } from "react";
import ReactDOM from "react-dom";
import { WhoIsPresent } from "./WhoIsPresent";
import { WhoIs } from "./WhoIs";
const data = [
    "Anna Kowalska",
    "Jan Kowalski",
    "Maciej von Handerburg",
    "Jurand ze Spychowa",
];
const App = () => {
    return (
        <>
            <WhoIs data={data} />
            <WhoIsPresent />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
