import React, { Component } from "react";
import ReactDOM from "react-dom";

import { AccountData } from "./AccountData";

const App = () => {
    return <AccountData />;
};
ReactDOM.render(<App />, document.getElementById("app"));
