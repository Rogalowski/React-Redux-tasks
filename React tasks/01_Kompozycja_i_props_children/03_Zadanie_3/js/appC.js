// Zadanie 3
// Wykorzystaj zadanie zrobione z wykładowcą.
// Stwórz komponent o nazwie ShopList. Niech przyjmuje on w props
// tablicę obiektów z elementami koszyka.
// Obiekty mają być w takiej formie:

// {
//   title: "nazwa przedmiotu",
//   image: "url_do_obrazu_przedmiotu"
// }

// Powinien on wyświetlać w divie o klasie CSS shoplist same komponenty
// ShopItemHeader z odpowiednimi danymi. Wykorzystaj map().
// Wyrenderuj go na stronie, podając w atrybucie do props następujący atrybut items:

// [
//   {
//     title: "Mysz komputerowa",
//     image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
//   },

//   {
//     title: "Klawiatura",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"

//   },

//   {
//     title: "Laptop programisty",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
//   }
// ]
// Pamiętaj aby zbudować jeszcze główny komponent App, a w nim wykorzystywać komponenty budowane w ćwiczeniach.
// Renderuj na stronie główny komponent App.
// Zadanie wykonaj tylko z komponentami w wersji zbudowanej z klas ES6.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
// console.log(
//     itemss.forEach(function (it) {
//         return console.log(it);
//     })
// );

// console.log(
//     itemss.map(function (item, i) {
//         return { item };

//         //      <>
//         //      <h1>{item.title}</h1>
//         //      <img src={item.image} />
//         //  </>
//     })
// );

// const App = () => {

//     <ShopList items={items} />;
// };

class App extends Component {
    render() {
        const items = [
            {
                title: "Mysz komputerowa",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg",
            },
            {
                title: "Klawiatura",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png",
            },
            {
                title: "Laptop programisty",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg",
            },
        ];
        // const { items } = this.props;
        return <ShopList items={items} />;
    }
}

class ShopList extends Component {
    render() {
        const { items } = this.props;
        // console.log(items);
        return items.map(function (item, index) {
            return <ShopItemHeader key={index} item={item} />;
        });
    }
}

class ShopItemHeader extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="shoplist">
                <header>
                    <h1>{item.title}</h1>
                    <img src={item.image} />
                </header>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
