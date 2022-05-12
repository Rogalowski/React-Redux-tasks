// Zadanie 4

// W pliku przygotowanym do zadania jest stworzony komponent Chat.
// Podziel go według tego schematu:
// Schemat dla zadania
// Zadanie wykonaj z komponentami w wersji funkcyjnej

import React, { Component } from "react";
import ReactDOM from "react-dom";
const data = {
    titleHead: "Chat prywatny",
    messeges: ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"],
};
const Chat = () => {
    return (
        <section className="chat">
            <ChatHeader titleHead={data.titleHead} />
            <ChatMessages messeges={data.messeges}>
                <ChatMessage />
            </ChatMessages>
            <NewChatMessage />

            <footer></footer>
        </section>
    );
};
const ChatHeader = ({ titleHead }) => {
    return (
        <header>
            <h1>{titleHead}</h1>
        </header>
    );
};
const ChatMessages = (messeges) => {
    //     return messeges.map(function (message, index) {
    //         return <div key={index}>{props.children}</div>;
    //     });
    // };
    return <div>{messeges.children}</div>;
};
const ChatMessage = (props) => {
    return (
        <ul>
            <li>Wpis z chatu 1</li>
            <li>Wpis z chatu 2</li>
            <li>Wpis z chatu 3</li>
        </ul>
    );
};
const NewChatMessage = () => {
    return (
        <form>
            <input type="text" />
            <button>Wyślij</button>
        </form>
    );
};
function App() {
    return <Chat />;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
