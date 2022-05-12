// Zadanie 1 - rozwiązywane z wykładowcą

// Stwórz komponent funkcyjny Counter. Ma on posiadać własny stan z ustawioną wartością początkową na 10.

// Ma on wyrenderować:

//     h2 z napisem: "Liczba kliknięć {tutaj wstaw wartość licznika}"
//     button "+" który ma zwiększać licznik o 1
//     button "-" który ma zmniejszać licznik o 1
//     button "Reset" - który ma przywracać wartość licznika do początkowej (10)

// Pamiętaj aby zbudować także główny komponent App, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent App.

import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";

const App = () => <Counter />;

ReactDOM.render(<App />, document.getElementById("app"));
