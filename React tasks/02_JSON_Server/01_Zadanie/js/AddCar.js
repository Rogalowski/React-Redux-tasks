import React, { useState } from "react";
import { postData } from "./Car";

export const AddCar = ({ data, setData }) => {
    const initialData = {
        // id: "",
        name: "",
        brand: "",
        engine: {
            type: "",
            hp: "",
        },
    };
    const [form, setForm] = useState(initialData);

    const handleFormChange = (e) => {
        // TODO: da się inaczej aktualizować zagnieżdżone obiekty???
        const { name, value } = e.target;
        setForm((state) => {
            if (name.split(".").length > 1) {
                const splitName = name.split(".");
                state[splitName[0]][splitName[1]] = value;
                return { ...state };
            } else {
                return { ...state, [name]: value };
            }
        });

        console.log("form: ", form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(form);
        if (typeof setData === "function") {
            setData((state) => {
                return [...state, form];
            });
        }
        setForm(initialData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input
                type="number"
                name="id"
                value={form.id}
                onChange={handleFormChange}
                placeholder="id"
            /> */}
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                placeholder="name"
            />
            <input
                type="text"
                name="brand"
                value={form.brand}
                onChange={handleFormChange}
                placeholder="brand"
            />
            <input
                type="text"
                name="engine.type"
                value={form.engine.type}
                onChange={handleFormChange}
                placeholder="type of engine"
            />
            <input
                type="number"
                name="engine.hp"
                value={form.engine.hp}
                onChange={handleFormChange}
                placeholder="power (hp)"
            />
            <button>Add</button>
        </form>
    );
};
