import React from "react";
import ReactDOM from "react-dom";
import { ToDoList } from "./ToDoList";

const App = () => {
    return <ToDoList />;
};

ReactDOM.render(<App />, document.getElementById("app"));
