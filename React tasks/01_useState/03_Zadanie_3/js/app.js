import React from "react";
import ReactDOM from "react-dom";
import { CountThings } from "./CountThings";

const App = () => {
    return <CountThings age={18} />;
};

ReactDOM.render(<App />, document.getElementById("app"));
