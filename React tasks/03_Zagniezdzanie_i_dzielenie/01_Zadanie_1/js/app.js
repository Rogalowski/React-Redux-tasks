import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CurrencyConverter } from "./CurrencyConverter";

function App() {
    return <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />;
}

ReactDOM.render(<App />, document.getElementById("app"));
