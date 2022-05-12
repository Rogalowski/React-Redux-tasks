import React, { Component } from "react";

export const AddNumbersF = ({ numberA, numberB }) => {
    return <div>{numberA + numberB}</div>;
};

export class AddNumbersC extends Component {
    render() {
        return <div></div>;
    }
}
