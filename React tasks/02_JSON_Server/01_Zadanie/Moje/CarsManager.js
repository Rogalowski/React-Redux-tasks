import React, { useState, useEffect } from "react";
import { ConnectAPIFetch, URL_API } from "./ConnectAPIFetch";

export const CarsManager = ({ data, setData }) => {
    const [error, setError] = useState("");

    useEffect(() => {
        ConnectAPIFetch(URL_API, "GET")
            .then((data) => {
                console.log(data);
                setError("");
                setData(data);
            })
            .catch((err) => {
                console.log("Error connection: ", err.message);
                setError(err.message);
            });
        // setData((prev) => [...prev, carForm]);
    }, []);

    if (!data) {
        return <h1> LOADING CARS... {error}</h1>;
    } else
        return (
            <>
                <h1>API CARs:</h1>
                <div>
                    <ul>
                        {data.map((car, index) => {
                            return (
                                <CarObject
                                    {...car}
                                    index={index}
                                    key={car.id}
                                    // key={index}
                                    car={car}
                                    data={data}
                                    setData={setData}
                                    setError={setError}
                                    URL_API={URL_API}
                                />
                            );
                        })}
                    </ul>
                    <h3 style={{ color: "red" }}> {error}</h3>
                </div>
            </>
        );
};

const CarObject = ({ car, index, data, setData, setError, URL_API }) => {
    const [sold, setSold] = useState(false);
    const soldCarButton = (e) => {
        const selectedCar = e.target.value;
        console.log("selectedCar: ", selectedCar);
        ConnectAPIFetch(URL_API + selectedCar, "DELETE")
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Error connection: ", err.message);
                setError(err.message);
            });
        //------------------------------------------------------------
        let arrayOfCarsDeletion = [...data];
        console.log(
            "selectedCar: ",
            selectedCar,
            " ",
            "arrayOfCarsDeletion: ",
            arrayOfCarsDeletion
        );

        if (index !== -1) {
            arrayOfCarsDeletion.splice(index, 1);
            setData(arrayOfCarsDeletion);
        }
        console.log("arrayOfCarsDeletion: ", arrayOfCarsDeletion);
        console.log("selectedCar.id: ", car.id);
        // //------------------------------------------------------------

        return setSold(true);
    };
    return (
        <>
            <li key={car.id}>
                {car.name}: {car.brand}, drive on: {car.engine.type}
                <button value={car.id} disabled={sold} onClick={soldCarButton}>
                    Buy {/* {sold ? "Sold" : "Buy"} */}
                </button>
            </li>
        </>
    );
};

// import React, { useState, useEffect } from "react";

// const API = "http://localhost:3000/cars";
// const ConnectAPIFetch = async () => {
//     const response = await fetch(API);
//     return await response.json();
// };

// export const CarsManager = () => {
//     const [data, setData] = useState([]);
//     const [sold, setSold] = useState(false);
//     useEffect(() => {
//         ConnectAPIFetch().then((data) => {
//             console.log(data);
//             setData(data);
//         });
//     }, []);

//     const handleSoldCarButton = (e) => {
//         const selectedCar = e.target.value;
//         const arrayOfCarsDeletion = [...data];
//         console.log(
//             "selectedCar: ",
//             selectedCar,

//             " ",
//             "arrayOfCarsDeletion: ",
//             arrayOfCarsDeletion
//         );

//         console.log("arrayOfCarsDeletion: ", arrayOfCarsDeletion);
//         return setSold(true);
//     };

//     if (data.length < 1) {
//         return <h1> LOADING CARS...</h1>;
//     } else
//         return (
//             <>
//                 <h1>API CARs:</h1>
//                 <div>
//                     <ul>
//                         {data.map((car, index) => {
//                             return (
//                                 <>
//                                     <CarObject key={car.id} car={car} />
//                                     <button
//                                         value={index}
//                                         disabled={sold}
//                                         onClick={handleSoldCarButton}
//                                     >
//                                         {sold ? "Sold" : "Buy"}
//                                     </button>
//                                 </>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             </>
//         );
// };

// const CarObject = ({ car }) => {
//     return (
//         <>
//             <li>
//                 {car.name}: {car.brand}, drive on: {car.engine.type}
//             </li>
//         </>
//     );
// };
