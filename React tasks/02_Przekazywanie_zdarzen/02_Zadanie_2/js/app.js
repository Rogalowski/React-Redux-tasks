import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom";
import { Shop } from "./Shop";

const App = () => <Shop />;

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("app")
);
