import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Notes } from "./Notes";

const App = () => {
    return <Notes />;
};

ReactDOM.render(
    <React.StrictMode>
        <App />{" "}
    </React.StrictMode>,
    document.getElementById("app")
);
