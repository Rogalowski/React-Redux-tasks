import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const URL = "https://pokeapi.co/api/v2/pokemon";
// class PokeAPI {
//   constructor() {
//     this.
//   }
//
//   async getPokemon(id) {
//     const response = fetch(this.url + "/" + id);
//     return await response.json();
//   }
// }
// const API = new PokeAPI();
async function getPokemon(id) {
    const response = await fetch(URL + "/" + id);
    return await response.json();
}

function Pokemon({ defaultPokemon }) {
    const [pokemon, setPokemon] = useState(false);

    useEffect(() => {
        console.log("???");
        getPokemon(3).then((data) => {
            setPokemon(data);
            console.log(data);
        });
    }, []);
    //
    // if (pokemon === false) {
    //     return <p>Searching Pokemon...</p>;
    // }
    console.log(pokemon);
    return (
        <div>
            <h2>
                {pokemon ? `Name: ${pokemon.name}` : `Searching Pokemon...`}
            </h2>
        </div>
    );
}

function App() {
    return <Pokemon />;
}

ReactDOM.render(<App />, document.getElementById("app"));
