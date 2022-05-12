import React, { Component } from "react";
import { HashRouter, Route, Link, NavLink, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

import { HelloYou } from "./HelloYou";
import { CheckAge } from "./CheckAge";

const App = () => {
    return (
        <>
            <h1>Aplikacja React z React Router</h1>

            <HashRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Witaj na stronie </h1>
                            </>
                        }
                    />
                    <Route path="/hello/:name" element={<HelloYou />} />
                    <Route path="/checkage/:age" element={<CheckAge />} />
                </Routes>
            </HashRouter>
        </>
    );
};

ReactDOM.render(
    <App />,

    document.getElementById("app")
);
