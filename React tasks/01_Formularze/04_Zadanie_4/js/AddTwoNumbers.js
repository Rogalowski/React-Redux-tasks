import React, { useState } from "react";

export const AddTwoNumbers = () => {
    const [form, setForm] = useState({ value1: "", value2: "" });
    const [result, setResult] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        return setResult(Number(form.value1) + Number(form.value2));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Dodawanie: {result}</h2>
            Pierwsza Liczba{" "}
            <input
                type="text"
                name="value1"
                value={form.value1}
                onChange={handleChange}
            />
            <br></br> Druga Liczba{" "}
            <input
                type="text"
                name="value2"
                value={form.value2}
                onChange={handleChange}
            />
            <input type="submit" value="Dodaj" />
        </form>
    );
};
