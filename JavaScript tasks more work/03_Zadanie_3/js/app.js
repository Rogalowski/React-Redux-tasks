
console.log("-------------------------------------------------------------------------")


// Stwórz funkcję strzałkową randomize, która jako parametry przyjmuje:

// Dowolne dwie liczby (param1, param2) - określające przedział między jakim będziemy losować liczbę
// funkcje anonimową (callback, której zadaniem jest wypisanie wylosowanej liczby.
// niech funkcja randomize() sprawdza przed wywołaniem czy callback rzeczywiście jest funkcją.


const randomize = (param1, param2, callback) => {

    if(typeof callback !== "function"){
        throw new Error("param is not a function")
    }
    callback(Math.floor(Math.random() * (param2 - param1 + 1) + param1))
}


function callback(e) {

    console.log(e)

    }


randomize(1, 10, callback)
