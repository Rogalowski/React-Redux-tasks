import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Holidays } from "./Holidays";

const App = () => {
    return <Holidays />;
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
