import React, { Component } from "react";

export function SearchF() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FUNKCYJNY");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Szukaj...." />
            <button>Szukaj</button>
        </form>
    );
}

export class SearchC extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log("KLASOWY");
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Szukaj...." />
                <button>Szukaj</button>
            </form>
        );
    }
}
const components = {
    SearchF,
    SearchC,
};

export default components;
