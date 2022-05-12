import React from "react";

const MenuItem = ({ name, path }) => {
    return (
        <li>
            <a href={path}>{name}</a>
        </li>
    );
};

export default MenuItem;
