import React from "react";
import MenuItem from "./MenuItem";

function Menu({ routes }) {
    return (
        <ul>
            {routes.map((route) => (
                <MenuItem key={route.id} {...route} />
            ))}
        </ul>
    );
}

export default Menu;
