import React, { Component } from "react";

export function HelloF({ name, surname }) {
    return (
        <h1>
            {name} {surname}
        </h1>
    );
}

export class HelloC extends Component {
    render() {
        const { name, surname } = this.props;
        return (
            <h1>
                {name} {surname}
            </h1>
        );
    }
}
