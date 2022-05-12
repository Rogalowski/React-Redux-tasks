// Zadanie 3

// Stwórz komponent Menu. Powinien on składać się z pojedynczego elementu listy ul,
// a w niej powinny się pojawić elementy li, w których będą odpowiednie odnośniki a.

// Lista: nazwa - odnośnik
//     Strona główna - /
//     Blog - /blog
//     Cennik - /cennik
//     Kontakt - /kontakt

// Wyrenderuj komponent na stronie. Zadanie wykonaj w oparciu o komponent klasowy.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Menu from "./Menu";
import { routes } from "./routes";

ReactDOM.render(<Menu routes={routes} />, document.getElementById("app"));
