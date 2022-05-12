import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NumberRandomInfo } from "./NumberRandomInfo";

const App = () => {
    return <NumberRandomInfo />;
};

ReactDOM.render(<App />, document.getElementById("app"));
