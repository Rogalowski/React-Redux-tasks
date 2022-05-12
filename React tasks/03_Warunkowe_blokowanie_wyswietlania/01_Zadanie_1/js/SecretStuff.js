import React, { useState } from "react";

export const SecretStuff = ({ password, correctPassword, secret }) => {
    if (password !== correctPassword) {
        return null;
    } else {
        return <div>{secret}</div>;
    }
};
