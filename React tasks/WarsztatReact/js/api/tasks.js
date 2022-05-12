// Elementy task składają się z kilku właściwości:

//     title - nazwa zadania, którą musimy przesłać podczas jego tworzenia.
//     description - opis zadania, który musimy przesłać podczas jego tworzenia.
//     status - w momencie tworzenia przesyłamy wartość open. Kiedy ktoś kliknie w przycisk Finish, aktualizujemy tę wartość na closed.
//     addedDate - data dodania zadania (generowana automatycznie przez serwer).
//     id - identyfikator zadania (generowany automatycznie przez serwer).

import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data from API
 */

export const getTasks = async (successCallback, Errors) => {
    try {
        const response = await fetch(API_URL + "/tasks", {
            method: "GET",
            headers: {
                Authorization: API_KEY,
            },
        });
        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
        console.log("fetchedTasks: ", data.data);
    } catch (err) {
        Errors(err);
        console.log(err);
    }
};

export const postNewTask = async (dataToPost) => {
    console.log("dataToPostdataToPost: ", dataToPost);
    try {
        const response = await fetch(API_URL + "/tasks/", {
            method: "POST",
            body: JSON.stringify(dataToPost),
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        // Errors(data);
    } catch (err) {
        // Errors(err);
        console.log(err);
    }
};

export const deleteTask = async (id) => {
    // console.log("id : ", id);
    try {
        const data = await fetch(`${API_URL}/tasks/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: API_KEY,
            },
        });
        const response = await data.json();
        // const lol = await fetchData();
        // console.log("in delete fetch: ", lol);
        // console.log("resp: ", response);
    } catch (err) {
        console.log("Error: ", err);
    }
};

// export const postData = async (carData) => {
//     try {
//         const data = await fetch(`${API}/cars/`, {
//             method: "POST",
//             body: JSON.stringify(carData),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         const response = await data.json();
//         console.log(response);
//     } catch (err) {
//         console.log("Error in post function: ", err);
//     }
// };
