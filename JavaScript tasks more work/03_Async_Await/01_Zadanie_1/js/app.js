function timer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done!");
        }, 2500);
    });
}
async function runTimer() {
    const msg = await timer();
    console.log(msg);
}

runTimer();

// Zadanie 1 - do wykonania z wykładowcą
// Wykorzystując async/await i fetch wykonaj zapytanie na adres otwartego API:
// https://jsonplaceholder.typicode.com/todos/1

// W odpowiedzi otrzymasz obiekt zawierający klucze userId, id, title i completed.
// Na podstawie tej odpowiedzi i klucza userId pobierz wszystkie informacje o użytkowniku, który stworzył dane todo:
// https://jsonplaceholder.typicode.com/users/:userId

// Do odpowiednich elementów w HTML dodaj następujące informacje na podstawie pobranych danych:
//     title - dodaj jako tekst do $title
//     completed - na podstawie wartości (true/false) do elementu $completed wpisz tekst "Zrobione" lub "Nie zrobione" a także dodaj klasę badge-success lub badge-danger
//     name z obiektu użytkownika dodaj jako tekst elementu $author

const $title = document.getElementById("#title");
const $completed = document.getElementById("#completed");
const $author = document.getElementById("#author");

async function fetchUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const result = await fetch(url);
    const user = await result.json();
    return user;
}

async function fetchTodo(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const result = await fetch(url);
    const todo = await result.json();
    return todo;
}

async function renderData() {
    const todo = await fetchTodo(1);
    const user = await fetchUser(todo.userId);
    console.log(todo, user);

    // TODO: RENDER DATA
}

renderData();
