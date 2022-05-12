import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BookInfo } from "./BookInfo";

function App() {
    return <BookInfo isbn={"9781471611452"} />;
}

ReactDOM.render(<App />, document.getElementById("app"));
