import React, { useState, useEffect } from "react";
import FakeAPI from "./data/fakeAPI";

export const Form = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        lastLogin: "",
    });
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        FakeAPI.login({
            username: form.username,
            password: form.password,
        })
            .then((user) => {
                // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
                console.log(user.lastLogin);
                setErr("");
                setUserData({
                    name: "Cześć " + user.name,
                    surname: user.surname,
                    lastLogin: "user.lastLogin",
                });
            })

            .catch((err) => {
                setUserData({
                    name: "",
                    surname: "",
                    lastLogin: "",
                });

                if (form.username.length <= 2) {
                    setErr("Za krótki login");
                } else if (form.password.length <= 4) {
                    setErr("Za krótkie hasło ");
                } else {
                    setErr(err);
                }

                console.log(err);
                // pod zmienną err mamy dostęp do informacji o błędzie
            });

        console.log(form.username, form.password);
        console.log(form);
        return;
    };
    const handleChangeForm = (e) => {
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
            <div>
                <p>
                    Login:
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChangeForm}
                    />
                </p>
                <p>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChangeForm}
                    />
                </p>

                <button>Zaloguj!</button>
            </div>
            {userData.name} {userData.surname}
            {err}
        </form>
    );
};
