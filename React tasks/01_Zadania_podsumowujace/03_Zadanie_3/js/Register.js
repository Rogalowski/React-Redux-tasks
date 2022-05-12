import React, { useState } from "react";

export const Register = () => {
    const genderOptions = ["Wybierz płeć", "Kobieta", "Mężczyzna"];

    const [form, setForm] = useState({
        username: "Ja Testowy",
        email: "ada@o2.pl",
        password: "1234",
        confirm_pass: "1234",
        gender: "2",
        address: "Krzyw 90/7",
        post_num: "23-234",
        town: "SZZ1",
        // username: "",
        // email: "",
        // password: "",
        // confirm_pass: "",
        // gender: "",
        // address: "",
        // post_num: "",
        // town: "",
    });
    const [isValidForm, setValidForm] = useState({
        errUsername: "",
        isValUsername: false,
        errEmail: "",
        isValEmail: false,
        errPassword: "",
        isValPassword: false,
        errConfirm_pass: "",
        isValConfirm_pass: false,
        errGender: "",
        isValGender: false,
        errAddress: "",
        isValAddress: false,
        errPost_num: "",
        isValPost_num: false,
        errTown: "",
        isValTown: false,
        isValAll: false,

        // errUsername: "",
        // isValUsername: true,
        // errEmail: "",
        // isValEmail: true,
        // errPassword: "",
        // isValPassword: true,
        // errConfirm_pass: "",
        // isValConfirm_pass: true,
        // errGender: "",
        // isValGender: true,
        // errAddress: "",
        // isValAddress: true,
        // errPost_num: "",
        // isValPost_num: true,
        // errTown: "",
        // isValTown: true,
        // isValAll: true,
    });
    const [isSubmitValid, setSubmitValid] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.username);

        return handleValidationForms(e);
    };
    const handleValidationForms = () => {
        const validZipCode = RegExp("^[0-9]{2}-[0-9]{3}$");
        const validEmail =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // -----------------------------------------------------------

        if (form.username.length <= 5) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errUsername: "Za mało znaków",
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errUsername: "",
                    isValUsername: true,
                };
            });
        }

        // -----------------------------------------------------------

        if (form.email.length <= 4) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errEmail: "Za mało znaków jak na email",
                };
            });
        } else if (!form.email.match(validEmail)) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errEmail: `Zły format maila`,
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errEmail: "",
                    isValEmail: true,
                };
            });
        }

        // -----------------------------------------------------------

        if (form.password.length <= 4 || form.confirm_pass.length <= 4) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errPassword: `Zbyt krótkie hasło`,
                    errConfirm_pass: `Zbyt krótkie hasło`,
                    isValPassword: false,
                };
            });
        } else if (form.password === form.confirm_pass) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errPassword: ``,
                    errConfirm_pass: ``,
                    isValPassword: true,
                    isValConfirm_pass: true,
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errPassword: `Hasła nie pasują`,
                    errConfirm_pass: `Hasła nie pasują`,
                    isValPassword: false,
                    isValConfirm_pass: false,
                };
            });
        }

        // ---------------------GENDER------------------------------

        if (form.gender == "1" || form.gender == "2") {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errGender: ``,
                    isValGender: true,
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errGender: `Nie wybrałeś płci`,
                    isValGender: false,
                };
            });
        }

        // ----------------------ADDRESS-------------------------------

        if (form.address.length <= 2) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errAddress: `Za mało znaków`,
                    isValAddress: false,
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errAddress: ``,
                    isValAddress: true,
                };
            });
        }

        // -----------------------ZIP CODE-------------------------------

        if (!form.post_num.match(validZipCode)) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errPost_num: `Zły kod pocztowy`,
                    isValPost_num: false,
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errPost_num: ``,
                    isValPost_num: true,
                };
            });
        }

        if (form.town.length <= 1) {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errTown: `Za mało znaków`,
                    isValTown: false,
                };
            });
        } else {
            setValidForm((prev) => {
                return {
                    ...prev,
                    errTown: ``,
                    isValTown: true,
                };
            });
        }

        // ------------------BUTTON SUBMIT-------------------------------------
        if (
            isValidForm.isValUsername &&
            isValidForm.isValEmail &&
            isValidForm.isValPassword &&
            isValidForm.isValConfirm_pass &&
            isValidForm.isValGender &&
            isValidForm.isValAddress &&
            isValidForm.isValPost_num &&
            isValidForm.isValTown
        ) {
            setSubmitValid(true);
        } else {
            setSubmitValid(false);
        }
        // -----------------------------------------------------------
        console.log(form);
    };
    // -----------------------------------------------------------

    const handleChangeForm = (e) => {
        const { name, value } = e.target;

        console.log(isValidForm);
        setForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <b>Dane osobowe: </b> <br></br>
                Imię i Nazwisko:{" "}
                <input
                    name="username"
                    value={form.username}
                    type="text"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errUsername}
                <br></br>
                Email:{" "}
                <input
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder="jakis@tam.mail"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errEmail}
                <br></br>
                Hasło:{" "}
                <input
                    name="password"
                    value={form.password}
                    type="password"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errPassword}
                <br></br>
                Powtórz hasło:{" "}
                <input
                    name="confirm_pass"
                    value={form.confirm_pass}
                    type="password"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errConfirm_pass}
                <br></br>
                Płeć:{" "}
                <select
                    name="gender"
                    // defaultValue={form.gender}
                    // defaultValue={genderOptions[1]}
                    value={form.gender}
                    onChange={handleChangeForm}
                >
                    {/* <option value="" label="Wybierz płeć"></option>
                    <option value="Female" label="Kobieta">
                        {" "}
                        Kobieta
                    </option>
                    <option value="Male" label="Mężczyzna">
                        {" "}
                        Mężczyzna
                    </option> */}
                    {Object.keys(genderOptions).map((option, index) => (
                        <option key={index} value={option}>
                            {genderOptions[option]}
                        </option>
                    ))}
                </select>
                {isValidForm.errGender}
                <br></br>
                <b>Dane do wysyłki:</b> <br></br>
                Adres:
                <input
                    name="address"
                    value={form.address}
                    type="text"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errAddress}
                <br></br>
                Kod pocztowy:
                <input
                    name="post_num"
                    value={form.post_num}
                    type="text"
                    placeholder="12-345"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errPost_num}
                <br></br>
                Miasto:{" "}
                <input
                    name="town"
                    value={form.town}
                    type="text"
                    onChange={handleChangeForm}
                ></input>
                {isValidForm.errTown}
                <br></br>
                {/* <button disabled={!isValidForm.isValAll}>Zapisz</button> */}
                <button>Zapisz</button>
            </form>
            {!isSubmitValid && (
                <ResultForm {...form} genderOptions={genderOptions} />
            )}
        </div>
    );
};

const ResultForm = ({
    username,
    email,
    gender,
    address,
    post_num,
    town,
    genderOptions,
}) => {
    return (
        <>
            <h2>{username}</h2>
            <h3>{email}</h3>

            <h4>{genderOptions[gender]}</h4>
            <h5>
                {address}, {post_num}, {town}
            </h5>
        </>
    );
};

// const handleValidationForms = (e) => {
//     const validZipCode = RegExp("^[0-9]{2}-[0-9]{3}$");
//     const validEmail =
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     // -----------------------------------------------------------
//     if (e.target.name == "username") {
//         if (e.target.value.length <= 5) {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errUsername: "Za mało znaków",
//                 };
//             });
//         } else {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errUsername: "",
//                     isValUsername: true,
//                 };
//             });
//         }
//     }
//     // -----------------------------------------------------------
//     if (e.target.name == "email") {
//         if (e.target.value.length <= 4) {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errEmail: "Za mało znaków jak na email",
//                 };
//             });
//         } else if (!e.target.value.match(validEmail)) {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errEmail: `Zły format maila`,
//                 };
//             });
//         } else {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errEmail: "",
//                     isValEmail: true,
//                 };
//             });
//         }
//     }
//     // -----------------------------------------------------------
//     if (e.target.name == "password" || e.target.name == "confirm_pass") {
//         if (e.target.name == "password") {
//             if (e.target.value.length <= 4) {
//                 setValidForm((prev) => {
//                     return {
//                         ...prev,
//                         errPassword: `Zbyt krótkie hasło 1`,
//                         isValPassword: false,
//                     };
//                 });
//             } else {
//                 setValidForm((prev) => {
//                     return {
//                         ...prev,
//                         // isValPassword: true,
//                         errPassword: ``,
//                     };
//                 });
//             }
//         }
//         if (e.target.name == "confirm_pass") {
//             if (e.target.value.length <= 4) {
//                 setValidForm((prev) => {
//                     return {
//                         ...prev,
//                         errConfirm_pass: `Zbyt krótkie hasło 2`,
//                         isValConfirm_pass: false,
//                     };
//                 });
//             } else {
//                 setValidForm((prev) => {
//                     return {
//                         ...prev,
//                         // isValConfirm_pass: true,
//                         errConfirm_pass: ``,
//                     };
//                 });
//             }
//         }
//         //---------------------ZAPYTAC CZEMU JEDNEk ZNAK HASLA JEST DO TYLU---------------------------------
//         if (form.password.length >= 5 && form.confirm_pass.length >= 5) {
//             if (form.password === form.confirm_pass) {
//                 setValidForm((prev) => {
//                     return {
//                         ...prev,
//                         errPassword: ``,
//                         errConfirm_pass: ``,
//                         isValPassword: true,
//                         isValConfirm_pass: true,
//                     };
//                 });
//             } else {
//                 setValidForm((prev) => {
//                     return {
//                         ...prev,
//                         errPassword: `Hasło nie pasuje do 2`,
//                         errConfirm_pass: `Hasło nie pasuje do 1`,
//                         isValPassword: false,
//                         isValConfirm_pass: false,
//                     };
//                 });
//             }
//         }
//         // -----------------------------------------------------------
//     }
//     // ---------------------GENDER------------------------------
//     if (e.target.name == "gender") {
//         if (e.target.value == "1" || e.target.value == "2") {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errGender: ``,
//                     isValGender: true,
//                 };
//             });
//         } else {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errGender: `Nie wybrałeś płci`,
//                     isValGender: false,
//                 };
//             });
//         }
//     }
//     // ----------------------ADDRESS-------------------------------
//     if (e.target.name == "address") {
//         if (e.target.value.length <= 2) {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errAddress: `Za mało znaków`,
//                     isValAddress: false,
//                 };
//             });
//         } else {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errAddress: ``,
//                     isValAddress: true,
//                 };
//             });
//         }
//     }
//     // -----------------------ZIP CODE-------------------------------
//     if (e.target.name == "post_num") {
//         if (!e.target.value.match(validZipCode)) {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errPost_num: `Zły kod pocztowy`,
//                     isValPost_num: false,
//                 };
//             });
//         } else {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errPost_num: ``,
//                     isValPost_num: true,
//                 };
//             });
//         }
//     }
//     // -----------------------CITY-----------------------------
//     if (e.target.name == "town") {
//         if (e.target.value.length <= 1) {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errTown: `Za mało znaków`,
//                     isValTown: false,
//                 };
//             });
//         } else {
//             setValidForm((prev) => {
//                 return {
//                     ...prev,
//                     errTown: ``,
//                     isValTown: true,
//                 };
//             });
//         }
//     }
//     // ------------------BUTTON SUBMIT-------------------------------------
//     if (
//         isValidForm.isValUsername &&
//         isValidForm.isValEmail &&
//         isValidForm.isValPassword &&
//         isValidForm.isValConfirm_pass &&
//         isValidForm.isValGender &&
//         isValidForm.isValAddress &&
//         isValidForm.isValPost_num &&
//         isValidForm.isValTown
//     ) {
//         setValidForm((prev) => {
//             return {
//                 ...prev,
//                 isValAll: true,
//             };
//         });
//     } else {
//         setValidForm((prev) => {
//             return {
//                 ...prev,
//                 isValAll: false,
//             };
//         });
//     }
//     // -----------------------------------------------------------
//     console.log(form);
// };
// // -----------------------------------------------------------

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form.username);

//     return setSubmitValid(false);
// };
