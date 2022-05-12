import React, { Component } from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    Routes,
} from "react-router-dom";
import ReactDOM from "react-dom";
import { Blog } from "./Blog";
import { Home } from "./Home";
import { Pricing } from "./Pricing";

const App = () => {
    return (
        <>
            <h1>Aplikacja React z React Router</h1>

            <HashRouter>
                <Routes>
                    <Route path="/blog" element={<Blog />} />

                    <Route path="/" element={<Home />} />

                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
                <ul>
                    <li>
                        {" "}
                        <Link to="/blog">Go Blog</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/">Go Home</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/pricing">Go Pricing</Link>
                    </li>
                </ul>
            </HashRouter>
        </>
    );
};

ReactDOM.render(
    <App />,

    document.getElementById("app")
);
