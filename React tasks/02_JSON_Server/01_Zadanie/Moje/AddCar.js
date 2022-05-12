import React, { useState, useEffect } from "react";
import { ConnectAPIFetch, URL_API } from "./ConnectAPIFetch";

export const AddCar = ({ setData }) => {
    // const [engine, setCarEngineForm] = useState({
    //     engine: {
    //         type: "",
    //         hp: 0,
    //     },
    // });
    // const [carForm, setCarForm] = useState({
    //     name: "",
    //     brand: "",
    // });
    // const [carForm, setCarForm] = useState({
    //     id: 222,
    //     name: "sdf",
    //     brand: "sdfds",
    //     engine: {
    //         type: "vv",
    //         hp: 345,
    //     },
    // });
    const [error, setError] = useState("");
    // const peopleWithImages = data.map((person, index) => {
    //     return {
    //       ...person,
    //       image: `https://robohash.org/?set=set${index + 1}`,
    //     };
    //   });
    const [engineProp, setEngineProp] = useState({
        type: "vv",
        hp: 345,
    });
    const [carForm, setCarForm] = useState({
        //TO ASK jesli nie podamy id, to poajawia sie warning ze
        //  element  listy nie ma klucza (po odswiezeniu jest ok
        // lub po dodaniu id z marszu). Ale id samo sie dodaje
        // i nie ma potrzeby go dodawac do formularza? Przy key={index} jest ok
        // id: {},
        name: "sdf",
        brand: "sdfds",
        engine: {
            type: "vv",
            hp: 345,
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.value);
        console.log("carForm Przed: ", `carForm`);

        console.log("carForm Po: ", carForm);

        setData((state) => {
            return [...state, carForm];
        });

        ConnectAPIFetch(URL_API, "POST", carForm)
            .then(() => {
                console.log("New car added: ", { carForm });
            })
            .catch((err) => {
                console.log("Error, Can not add Car: ", err.message);
                setError(err.message);
            });
    };

    const handleChangeForm = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // setCarForm((prev) => {
        //     if (name.split(".").length > 1) {
        //         const splitName = name.split(".");
        //         prev[splitName[0]][splitName[1]] = value;
        //         return { ...prev };
        //     } else {
        //         return { ...prev, [name]: value };
        //     }
        // });
        setEngineProp((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        setCarForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add Car Form:</h2>
                <br /> Name:{" "}
                <input
                    type="text"
                    name="name"
                    value={carForm.name}
                    onChange={handleChangeForm}
                />
                <br /> Brand:{" "}
                <input
                    type="text"
                    name="brand"
                    value={carForm.brand}
                    onChange={handleChangeForm}
                />
                <br /> Engine Type:{" "}
                <input
                    type="text"
                    name="type"
                    value={engineProp.engine}
                    onChange={handleChangeForm}
                />
                <br />
                Engine Horse Power:{" "}
                <input
                    type="number"
                    name="hp"
                    value={engineProp.engine}
                    onChange={handleChangeForm}
                />
                <br />
                <input type="submit" />
            </form>
        </>
    );
};

// const {
//     defaultValue: {
//         id = "",
//         name = "",
//         brand = "",
//         engine: { type = "", hp = "" },
//     },
//     register,
//     // setValue,
//     handleSubmit,
//     formState: { errors },
// } = useForm();
// const onSubmit = (data) => console.log(data);
// // e.preventDefault();
// console.log(errors);

// <input
// type="number"
// placeholder="id"
// {...register("id", { required: true })}
// />
// <input
// type="text"
// placeholder="Name"
// {...register("Name", { required: true, min: 3 })}
// />
// <input
// type="text"
// placeholder="Brand"
// {...register("Brand", { required: true, min: 2 })}
// />
