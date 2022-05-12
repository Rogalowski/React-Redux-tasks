// Zadanie 2

// Zadanie polega na wczytaniu danych z adresu: https://pokeapi.co/api/v2/pokemon i wyświetlenie ich nazw w kolejnych li.list-group-item.

// Przydatne informacje:

//     użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
//     użyj odpowiednich metod informujących użytkownika o statusie żądania (metody then(), catch()),
//     sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
//     jeśli dane zostaną poprawnie wczytane, w pętli utwórz elementy li do którego wstawisz nazwę pokemona i li wstawisz do ul.list-group

// Dla chętnych

// API zwraca nam tylko określoną ilość pokemonów + linki do API aby pobrać poprzednią / następną pulę. Dorób paginację i pobieranie kolejnych pokemonów.

const ulList = document.querySelector(".list-group");
const url = "https://pokeapi.co/api/v2/pokemon";
const paragrafPageElem = document.createElement("p");

function nextPagePokemons(url) {
    if (document.querySelector(".previousPage")) {
        document.querySelector(".previousPage").remove();
    }

    document.querySelectorAll("li").forEach((pokemon, index) => {
        pokemon.remove();
    });

    //SAM Tekst:
    // fetch(url)
    //     .then((response) => response.text())
    //     .then((data) => console.log(`Dane Fetch Pokemon: ${data}`));
    //Dane JSON ktore mozna obrobic:
    fetch(url)
        .then((response) => response.json())
        // .then((data) => console.log(data.results));
        .then((data) => console.log(data));

    console.log("DANE POKEMONÓW:");

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((pokemon, index) => {
                // console.log(pokemon.name);

                const newPokemonLine = document.createElement("li");
                newPokemonLine.id = "pokeName";
                newPokemonLine.innerText = `${index + 1}) ${pokemon.name}`;

                ulList.appendChild(newPokemonLine);
            });
            //PRZYCISKI NEXT PREV
            //Dodanie paragrafu p po main

            document.querySelector("main").appendChild(paragrafPageElem);
            const previousPageElem = document.createElement("a");

            previousPageElem.classList.add("previousPage");
            previousPageElem.innerText = " Previous Page ";
            previousPageElem.href = data.previous;

            if (data.previous !== null) {
                if (!document.querySelector(".previousPage")) {
                    paragrafPageElem.appendChild(previousPageElem);
                    // document.querySelector("main").appendChild(previousPageElem);

                    previousPageElem.addEventListener(
                        "click",
                        function (event) {
                            event.preventDefault();

                            nextPagePokemons(data.previous);
                        }
                    );
                }
            }
            // else {
            //     document.querySelector(".previousPage").remove();
            // }
            //dodanie atrybutu a do p
            const nextPageElem = document.createElement("a");

            nextPageElem.classList.add("nextPage");
            nextPageElem.innerText = " Next page ";
            nextPageElem.href = data.next; // dodanie linku do Next page napisu
            // nextPageElem.href = nextPagePokemons(data.next);
            // console.log(data.next);

            if (data.next !== null) {
                if (document.querySelector(".nextPage")) {
                    document.querySelector(".nextPage").remove();
                }
                paragrafPageElem.appendChild(nextPageElem);

                nextPageElem.addEventListener("click", function (event) {
                    event.preventDefault();
                    nextPagePokemons(data.next);
                });
            }
            // else {
            //     document.querySelector(".nextPage").remove();
            // }
        });
}

nextPagePokemons(url);

// document.querySelector("ul").remove();
