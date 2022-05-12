import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NumberInfo } from "./NumberInfo";

const App = () => {
    return <NumberInfo number={1} />;
};

ReactDOM.render(<App />, document.getElementById("app"));
