// Zadanie 2 - rozwiązywane z wykładowcą
// Stwórz komponent ShopItem z odpowiednimi props, które wynikają z dalszej części
// zadania. Ma mieć on następującą strukturę:

// <section>
//   <header>
//     <h1>{title z props}</h1>
//     <img src="{image z props}"/>
//   </header>
//   <article>
//     <p>{description z props}</p>
//   </article>
//   <footer>
//     Cena: {price z props} zł
//     <button>Kup!</button>
//   </footer>
// </section>

// Następnie podziel go na 4 komponenty:
//     ShopItemHeader
//     ShopItemDescription
//     ShopItemPricing
//     ShopItem - ma podstawową strukturę i korzysta z powyższych.

// Wyrenderuj na stronie komponent ShopItem używając kompozycji, podając
// w props konkretnych komponentów przykładowe dane:
// {
//   title: "MacBook Pro",
//   image: "https://bit.ly/2EEtduD",
//   description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
//   price: 9999
// }

// Pamiętaj aby zbudować także główny komponent App, a w nim wykorzystywać
// komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent App.
// Zadanie wykonaj tylko z komponentami w wersji zbudowanej z funkcji.
const data = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description:
        "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999,
};

import React, { Component } from "react";
import ReactDOM from "react-dom";

const ShopItem = () => {
    return (
        <section>
            <ShopItemHeader props={data} />
            <ShopItemDescription props={data} />
            <ShopItemPricing props={data} />
        </section>
    );
};

const ShopItemHeader = ({ props }) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <img src={props.image} />
        </header>
    );
};
const ShopItemDescription = ({ props }) => {
    return (
        <article>
            <p>{props.description}</p>
        </article>
    );
};
const ShopItemPricing = ({ props }) => {
    return (
        <footer>
            Cena: {props.price} zł
            <button>Kup!</button>
        </footer>
    );
};

ReactDOM.render(<ShopItem />, document.getElementById("app"));
