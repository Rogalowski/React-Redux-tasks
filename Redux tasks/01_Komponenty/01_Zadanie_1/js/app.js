import React from "react";
import ReactDOM from "react-dom";
import { StopperWithTimer } from "./components/Stopper";
import Layout from "./components/Layout";

const App = () => (
  <Layout>
    <StopperWithTimer>
        <h1>Dupa</h1>
        <h2>To jest dupa h2</h2>
    </StopperWithTimer>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById("app"));
