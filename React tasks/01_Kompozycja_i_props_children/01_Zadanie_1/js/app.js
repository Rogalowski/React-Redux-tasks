// Zadanie 1 - rozwiązywane z wykładowcą
// Stwórz komponenty ParentComponent, ChildComponent oraz GrandchildComponent.
//     Niech ParentComponent renderuje ChildComponent, przekazując mu jako dzieci swoje dzieci.
//     ChildComponent renderuje GrandchildComponent, przekazując mu jako dzieci swoje dzieci.
//     GrandchildComponent po prostu wyświetla swoje dzieci.
// Wyrenderuj i przetestuj swój komponent za pomocą takiej konstrukcji:

// <ParentComponent>
//   <h1>To działa!</h1>
// </ParentComponent>

// Kod ten powinien wyświetlić taką strukturę:
// -- ParentComponent
//     |-- ChildComponent
//           |-- GrandchildComponent
//                 |-- <h1>To działa!</h1>

import React, { Component } from "react";
import ReactDOM from "react-dom";

function ParentComponent() {
    return (
        <ChildComponent>
            <GrandchildComponent props="To działa!"></GrandchildComponent>
        </ChildComponent>
    );
}
const ChildComponent = (props) => {
    {
        return props.children;
    }
};

const GrandchildComponent = (props) => {
    return <h1>{props.props}</h1>;
};
// ------------------------------------------------------------------------------
const App = () => {
    return (
        <Wrapper title="I am the wrapper">
            <Child body="Child component" />
        </Wrapper>
    );
};

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
};

const Child = (props) => {
    return <p>{props.body}</p>;
};

ReactDOM.render(
    <React.StrictMode>
        <ParentComponent />
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
