// Zadanie 2
// W pliku jest stworzona funkcja asyncAction która zwraca obiekt typu Promise.
// Twoim zadaniem jest z użyciem async/await uruchomić tego Promisa i obsłużyć błędy,
// które może on generować.
// Wartość powinna zostać wpisana do elementu HTML #random-value a w przypadku błędu,
// informacja o tym ma zostać wpisana do elementu #message.

const asyncAction = () => {
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 100) + 1;

        setTimeout(() => {
            if (random <= 50) {
                resolve({
                    value: random,
                    status: "OK",
                });
            } else {
                reject({
                    value: random,
                    status: "ERROR",
                    errorMsg: "Value is greater then 50",
                });
            }
        }, 1250);
    });
};

const $randomValue = document.querySelector("#random-value");
const $message = document.querySelector("#message");

asyncAction()
    .then((response) => {
        if (response.status === "OK") {
            $randomValue.innerText = response.value;
        } else {
            throw new Error("error from else");
        }
    })
    .catch((err) => ($message.innerText = `${err.errorMsg}: ${err.value}`));

// --------------------------------------------------------------------------------
// Bez Then:

async function handlePromise() {
    try {
        const response = await asyncAction();
        if (response.status === "OK") {
            random_value.innerText = response.value;
        }
    } catch (err) {
        message.innerText = err.errorMsg;
    }
}

handlePromise();
