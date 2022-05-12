// Zadanie 2

// W pliku do zadania znajduje się komponent Header wyświetlający nagłówek strony internetowej.
// Jest on napisany w sposób klasowy. Przepisz go oraz komponent App na działające funkcje.

import React, { Component } from "react";
import ReactDOM from "react-dom";

const HeaderF = ({ logo, searchPlaceholder }) => {
    return (
        <header>
            <a href="#">{logo}</a>
            <form>
                <input placeholder={searchPlaceholder} name="s" />
                <button>Search</button>
            </form>
        </header>
    );
};
function AppF() {
    return (
        <HeaderF
            logo="Function company!"
            searchPlaceholder="Type some function words..."
        />
    );
}
// ------------------------------------------------------------------------
class Header extends Component {
    render() {
        const { logo, searchPlaceholder } = this.props;

        return (
            <header>
                <a href="#">{logo}</a>
                <form>
                    <input placeholder={searchPlaceholder} name="s" />
                    <button>Search</button>
                </form>
            </header>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Header
                logo="Class company!"
                searchPlaceholder="Type some class words..."
            />
        );
    }
}

ReactDOM.render(
    <>
        <App />
        <AppF />
    </>,
    document.getElementById("app")
);
