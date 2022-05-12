import React, { Component } from "react";
import { HashRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import { Main } from "./Main";
import { AboutUs } from "./AboutUs";
import { AboutCompany } from "./AboutCompany";

const About = () => {
    return (
        <Routes>
            <>
                <Route path="/us" element={<AboutUs />} />
                <Route path="/company" element={<AboutCompany />} />
            </>
        </Routes>
    );
};
const App = () => {
    return (
        <>
            {/* basename="/some" */}
            <h1>Aplikacja React z React Router</h1>

            <HashRouter>
                <Routes>
                    <Route path="/" element={<Main />} />

                    <Route path="/about/*" index element={<About />} />
                </Routes>
            </HashRouter>
        </>
    );
};

ReactDOM.render(
    <App />,

    document.getElementById("app")
);
