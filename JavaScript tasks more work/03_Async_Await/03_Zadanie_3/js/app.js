// Zadanie 3
// Skorzystaj z API:
// https://randomuser.me/api/
// i na podstawie jego wyniku wypisz kilka informacji o danej osobie:

//     Zdjęcie (.card-img-top)
//     Imię i Nazwisko (.card-title)
//     Email (.card-text)

const URL = "https://randomuser.me/api/";

async function getUserAsync(url) {
    try {
        const result = await fetch(url);
        const user = await result.json();
        return user;
    } catch (err) {
        console.log("Błąd: " + err);
    }
}

async function renderData(url) {
    const randomUser = await getUserAsync(url);
    console.log(randomUser.results[0].name.first);

    // TODO: RENDER DATA
}

renderData(URL);
//-----------------------------------------------------------------

// function getUser(url) {
//     fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else throw new Error("Błąd sieci!");
//         })
//         // .then((data) => console.log(data.results));
//         .then((data) => {
//             console.log(data);
//             console.log(data.results[0].name.first);
//             const $name = document.querySelector(".card-title");
//             $name.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

//             const $email = document.querySelector(".card-text");
//             $email.innerText = ` ${data.results[0].email}`;

//             const $image = document.querySelector(".card-img-top");
//             $image.src = data.results[0].picture.large;
//             // data.results.forEach((result, index) => {
//             //     console.log(result.name.first);
//             // });
//         });
// }

// getUser(URL);
