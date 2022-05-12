// Zadanie 4

// W pliku przygotowanym do zadania jest stworzony komponent Chat.
// Podziel go według tego schematu:
// Schemat dla zadania
// Zadanie wykonaj z komponentami w wersji funkcyjnej

import React, { Component } from "react";
import ReactDOM from "react-dom";
const dataChat = {
    titleHead: "Chat prywatny",
    messegesEntries: [
        "Wpis z chatu 1 sadsad sadsad sad afdssadsad sa dsad sad sadsadsad sad",
        "Wpis z chatu 2",
        "Wpis z chatu 3",
    ],
};
const Chat = () => {
    return (
        <section className="chat">
            <ChatHeader titleHead={dataChat.titleHead} />
            <ChatMessages messegesEntries={dataChat.messegesEntries}>
                {/* <ChatMessages props={dataChat}> */}
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

const ChatMessages = (messegesEntries) => {
    // console.log([{ ...messages }]);
    console.log([{ ...messegesEntries }]);
    console.log({ ...messegesEntries });

    return messegesEntries.messegesEntries.map(function (message, index) {
        console.log(message);
        return (
            // <ul>
            <ChatMessage key={index} message={message} />

            //   </ul>
        );
    });
};
//-------------------------------------------------------------
//     return messeges.map(function (message, index) {
//         return <div key={index}>{message.children}</div>;
//     });
// };
//-------------------------------------------------------------
//     return <div>{messeges.children}</div>;
// };
//-------------------------------------------------------------

const ChatMessage = ({ index, message }) => {
    // console.log({ index }); undefined
    return (
        // <ul>
        <ul key={index}>
            <li>{message}</li>
        </ul>
        // </ul>
    );
    {
        /* <li key={index}>{message.messegesEntries}</li> */
    }
    {
        /* <li>Wpis z chatu 2</li> */
    }
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
