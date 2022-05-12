import React, { Component } from "react";
import ReactDOM from "react-dom";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div>
        <User firstName="Jan" lastName="Kowalski" age={44} onClick={() => {}} />
        <hr />
        <User firstName="Bożena" lastName="Kowalska" onClick={() => {}} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
