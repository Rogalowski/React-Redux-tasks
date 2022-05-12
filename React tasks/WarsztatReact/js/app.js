// Etapy życia operacji

// W snippetach kodzie macie przygotowane kawałki kodu dla poszczególnych
// elementów aplikacji - wykorzystajcie je jako wzorzec do tworzenia elementów za pomocą React.

//     Pierwszy element to formularz do dodawania nowego zadania (task).
//     Po kliknięciu Add task pojawia się nowa sekcja z danym zadaniem.
//     W każdym zadaniu musi być możliwość dodawania operacji (operation).
//     Formularz ma się pojawiać po kliknięciu Add operation i znikać po jego ponownym kliknięciu.
//     Po dodaniu operacji, ma ona się pojawić w danej sekcji a formularz
//     ma zniknąć. Każda operacja ma mieć możliwość:
//         Add time - wpisanie ręcznie czasu w minutach,
//         usunięcie operacji.
//     Zadanie ma też opcję Finish - powoduje to, że znikają wszystkie przyciski
//     z tego zadania i jego operacji (oprócz usuwania).
//     Mamy też mieć możliwość usunięcia całego zadania. Przycisk do usuwania
//     zadania ma się pojawić dopiero wtedy kiedy usuniemy z zadania wszystkie operacje.

// /api/tasks 	GET 	Pobieranie zadań
// /api/tasks 	POST 	Dodawanie zadania do wykonania 	{title: "", description: "", status: ""}
// /api/tasks/:id 	PUT 	Aktualizowanie zadania do wykonania 	{title: "", description: "", status: ""}
// /api/tasks/:id 	DELETE 	Usuwanie zadania
// /api/tasks/:id/operations 	GET 	Pobieranie operacji przypisanych do zadania
// /api/tasks/:id/operations 	POST 	Dodawanie operacji do zadania 	{description: "", timeSpent: 0}
// /api/operations/:id 	GET 	Pobieranie pojedynczej operacji
// /api/operations/:id 	PUT 	Aktualizowanie pojedynczej operacji 	{description: "", timeSpent: 0}
// /api/operations/:id 	DELETE 	Usuwanie operacji

// Podsumowując, nasz komponent App powinien:
//     utworzyć stan dla tasków,
//     pobrać wszystkie zadnia przy pomocy metody getTasks,
//     którą stworzyliśmy wcześniej,
//     zapisać pobrane zadania do stanu,
//     wyrenderować dwie rzeczy:
//         komponent odpowiedzialny za dodawanie zadań (NewTask)
//         listę zadań pobranych z serwera (komponenty Task)

// Dodatkowo w komponencie powinny znaleźć się dwie metody obsługujące:

//     dodawanie nowego zadania do stanu lokalnego
//     usuwania zadania ze stanu lokalnego

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react/cjs/react.production.min";
import { getTasks } from "./api/tasks";
import { ListTask } from "./ListTask";
import { getOperations } from "./api/operations";
import { AddFormNewTask } from "./AddFormNewTask";

function App() {
    const [fetchedTasks, setFetchedTasks] = useState(null);
    const [fetchedOperations, setFetchedOperations] = useState(null);
    const [error, setError] = useState();
    console.log(fetchedOperations);
    // console.log(fetchedTasks);
    useEffect(() => {
        getTasks(setFetchedTasks, setError);
        // getOperations(setFetchedOperations, fetchedOperations);
        // if (fetchedTasks) {
        //     fetchedTasks.forEach((task, index) => {
        //         getOperations(task, setFetchedOperations, fetchedOperations);
        //     });
        // }
        // getOperations(
        //     "0ee94009-973d-483b-bd98-d5ee6387ba17",
        //     setFetchedOperations
        // );
    }, []);

    return (
        <>
            <h3> ToDo App with TimeTracker</h3>
            {error}
            <AddFormNewTask
                fetchedTasks={fetchedTasks}
                setFetchedTasks={setFetchedTasks}
            />
            <ListTask
                fetchedTasks={fetchedTasks}
                setFetchedTasks={setFetchedTasks}
                error={error}
                setFetchedOperations={setFetchedOperations}
                fetchedOperations={fetchedOperations}
            />
        </>
    );
}

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.querySelector("#app")
);
