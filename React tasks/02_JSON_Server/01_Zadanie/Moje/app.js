import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CarsManager } from "./CarsManager";
import { AddCar } from "./AddCar";

const App = () => {
    const [data, setData] = useState(null);
    return (
        <>
            <CarsManager setData={setData} data={data} />
            <AddCar setData={setData} />
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);
// DATA cars.json
// {
//   "cars": [
//     {
//       "id": 1,
//       "name": "Gallardo",
//       "brand": "Lamborghini",
//       "engine": {
//         "type": "petrol",
//         "hp": 562
//       }
//     },
//     {
//       "id": 2,
//       "name": "Model S",
//       "brand": "Tesla",
//       "engine": {
//         "type": "electric",
//         "hp": 760
//       }
//     },
//     {
//       "id": 3,
//       "name": "Polonez Caro",
//       "brand": "Daewoo",
//       "engine": {
//         "type": "petrol",
//         "hp": 84
//       }
//     },
//     {
//       "id": 4,
//       "name": "i3",
//       "brand": "BMW",
//       "engine": {
//         "type": "electric",
//         "hp": 170
//       }
//     },
//     {
//       "id": 5,
//       "name": "X6 M",
//       "brand": "BMW",
//       "engine": {
//         "type": "petrol",
//         "hp": 575
//       }
//     },
//     {
//       "id": 6,
//       "name": "Model X",
//       "brand": "Tesla",
//       "engine": {
//         "type": "electric",
//         "hp": 762
//       }
//     },
//     {
//       "id": 7,
//       "name": "Matiz",
//       "brand": "Daewoo",
//       "engine": {
//         "type": "petrol",
//         "hp": 64
//       }
//     },
//     {
//       "id": 8,
//       "name": "XF",
//       "brand": "Jaguar",
//       "engine": {
//         "type": "petrol",
//         "hp": 520
//       }
//     },
//     {
//       "id": 9,
//       "name": "RX-7",
//       "brand": "Mazda",
//       "engine": {
//         "type": "petrol",
//         "hp": 280
//       }
//     },
//     {
//       "id": 10,
//       "name": "Model 3",
//       "brand": "Tesla",
//       "engine": {
//         "type": "electric",
//         "hp": 300
//       }
//     },
//     {
//       "id": 11,
//       "name": "Celica",
//       "brand": "Toyota",
//       "engine": {
//         "type": "petrol",
//         "hp": 120
//       }
//     },
//     {
//       "id": 12,
//       "name": "Tico",
//       "brand": "Daewoo",
//       "engine": {
//         "type": "petrol",
//         "hp": 41
//       }
//     },
//     {
//       "id": 13,
//       "name": "Roadster",
//       "brand": "Tesla",
//       "engine": {
//         "type": "electric",
//         "hp": 288
//       }
//     },
//     {
//       "id": 14,
//       "name": "Supra",
//       "brand": "Toyota",
//       "engine": {
//         "type": "petrol",
//         "hp": 276
//       }
//     },
//     {
//       "id": 15,
//       "name": "i8",
//       "brand": "BMW",
//       "engine": {
//         "type": "hybrid",
//         "hp": 362
//       }
//     },

//     {
//       "id": 21,
//       "name": "sds",
//       "brand": "sds",
//       "engine": {
//         "type": "",
//         "hp": 0
//       }
//     }
//   ]
// }
