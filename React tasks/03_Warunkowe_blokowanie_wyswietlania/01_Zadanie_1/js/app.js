import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SecretStuff } from "./SecretStuff";

const App = () => {
    return (
        <SecretStuff
            password={"zaq1"}
            correctPassword={"zaq1"}
            secret="S#CR#T"
        />
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
