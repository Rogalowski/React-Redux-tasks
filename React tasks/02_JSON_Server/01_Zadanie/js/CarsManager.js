import React from "react";
import { useEffect, useState } from "react";
import { SingleCar } from "./SingleCar";
import { fetchData, deleteData } from "./Car";

export const CarsManager = (props) => {
    const { data, setData } = props;
    // const [data, setData] = useState(false);

    // useEffect(() => {
    //     console.log("fetch: ", fetchData());
    //     fetchData().then((d) => {
    //         // console.log("d: ", d);
    //         setData(d);
    //     });
    // }, []);

    // console.log("data: ", data);

    const handleSoldButton = (id) => {
        setData((state) => {
            return state.filter((car) => {
                return car.id !== id;
            });
        });
        deleteData(id);
    };

    console.log("data: ", data);

    let listOfCars;
    if (!data) {
        listOfCars = <p>Fetching data...</p>;
    } else {
        listOfCars = (
            <ul>
                {data.map((car) => {
                    return (
                        <SingleCar
                            key={car.id}
                            onSold={handleSoldButton}
                            {...car}
                        />
                    );
                })}
            </ul>
        );
    }

    return <div>{listOfCars}</div>;
};
