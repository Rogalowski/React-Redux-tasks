import React, { Component, useState } from "react";
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
    const [style, setStyle] = useState(undefined);
    const handleStyle = (e) => {
        if (e) {
            setStyle({ color: "yellow" });
        }
    };
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
                        <NavLink
                            style={style}
                            onMouseOver={handleStyle}
                            to="/blog"
                        >
                            Go Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={style} onMouseOver={handleStyle} to="/">
                            Go Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={style}
                            onMouseOver={handleStyle}
                            to="/pricing"
                        >
                            Go Pricing
                        </NavLink>
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
