import React from "react";
import ReactDOM from "react-dom";
import { ParentComponent } from "./ParentComponent";

function App() {
    return (
        <ParentComponent>
            <h1>To działa!</h1>
            <h2>A może jednak nie?</h2>
        </ParentComponent>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
