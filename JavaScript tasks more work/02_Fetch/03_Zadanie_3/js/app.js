// Zadanie 3
// Pod adresem https://fer-api.coderslab.pl/v1/holidays jest przechowywana baza świąt państwowych różnych krajów. Aby z niej skorzystać, należy przesłać specjalny klucz (key): e92601251-c0a2-4s63-v73f-54041195480f. API wymaga również podania kodu kraju (country). Do dyspozycji mamy trzy:
//     Polska (PL)
//     Wielka Brytania (GB)
//     Stany Zjednoczone (US)

// Zasób 	Metoda 	Dane 	Opis
// /holidays 	GET 	key, country 	Pobranie świąt w danym kraju
// Za pomocą funkcji fetch() wczytaj do elementu ul wszystkie daty świąt (jako elementy li). Aby poprawnie wczytać dane w funkcji fetch() trzeba w odpowiedni sposób skonstruować adres URL naszego żądania, np.: https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL.
// Każdą nazwę święta wczytaj do elementu li jako element h3.holiday-name, a jego datę wczytaj do elementu li jako element div.holiday-date.

// Podpowiedzi:
//     Wczytaj dane i zobacz w konsoli jak wyglądają, pozwoli Ci to ustalić czego należy użyć, aby dostać się do nazw i dat świąt. Możesz tutaj wykorzystać też zakładkę Network.

// Dodatkowe
// Dorób na stronie formularz, który zawiera element select w którym będzie można wybrać, z którego kraju mają pojawiać się święta. Wybór jakiegoś elementu option ma spowodować ponowne wysłanie zapytania i utworzenie na nowo elementów listy. Domyślnie wybraną opcją ma być PL.
// Dane pochodzą z serwisu: https://holidayapi.com.

const KEY = "e92601251-c0a2-4s63-v73f-54041195480f";
const COUNTRY = ["PL", "GB", "US"];
const URL = "https://fer-api.coderslab.pl/v1/holidays";
// "https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL";

function holidayViewAPI(url, key, country) {
    const urlHolidayCountry = url + "?key=" + key + "&country=" + country;
    const ulList = document.querySelector(".list");

    fetch(urlHolidayCountry, {
        method: "GET",
        headers: {
            // "X-Auth-Token": KEY,
            "Content-Type": "application/json",
        },
    })
        // .then((response) => response.text())
        // .then((data) => console.log(`Dane Fetch: ${data}`));
        //-------------------------------------------------------------------
        // .then((resp) => resp.json())
        // .then(function (data) {
        //     console.log(data);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        //-------------------------------------------------------------------
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error("Błąd sieci!");
        })
        // .then((data) => console.log(data.results));
        .then((data) => {
            console.log(data);

            data.holidays.forEach((holiday, index) => {
                const newLi = document.createElement("li");
                const nameHoliLi = document.createElement("h3");
                nameHoliLi.className = "holiday-name";
                const dateHoliLi = document.createElement("div");
                dateHoliLi.className = "holiday-date";
                console.log(holiday.date + " -- " + holiday.name);
                nameHoliLi.innerText = holiday.name;
                dateHoliLi.innerText = holiday.date;
                // newLi.innerText = `${index + 1}) ${holiday.date}  --  ${
                //     holiday.name
                // }`;

                ulList.appendChild(newLi);
                newLi.appendChild(nameHoliLi);
                newLi.appendChild(dateHoliLi);
            });
        })
        .catch(function (error) {
            console.log("Błąd!", error);
        });
}

holidayViewAPI(URL, KEY, COUNTRY[0]);

const newSelector = document.querySelector("select");
const newSelectorPL = newSelector.value;

newSelector.addEventListener("change", function (event) {
    event.preventDefault();
    //usuwanie listy po nacisnieciu nowego kraju
    const list = document.querySelectorAll("li");
    if (document.querySelector("li")) {
        for (const element of list) {
            element.remove();
        }
    }

    if (newSelector.value === "PL") {
        holidayViewAPI(URL, KEY, COUNTRY[0]);
    }
    if (newSelector.value === "GB") {
        holidayViewAPI(URL, KEY, COUNTRY[1]);
    }
    if (newSelector.value === "US") {
        holidayViewAPI(URL, KEY, COUNTRY[2]);
    }
});
