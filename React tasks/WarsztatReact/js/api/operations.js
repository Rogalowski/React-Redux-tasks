// Elementy operation składają się z kilku właściwości:

//     description - opis operacji, którą musimy przesłać podczas jej tworzenia.
//     timeSpent - czas spędzony na wykonywaniu operacji. Podczas tworzenia przesyłamy 0. Kiedy będziemy dodawać czas do operacji, wartość ta będzie odpowiednio zmieniana.
//     addedDate - data dodania zadania (generowana automatycznie przez serwer).
//     id - identyfikator zadania (generowany automatycznie przez serwer).
//     task - obiekt z zadaniem, do którego przypisana jest dana operacja.
import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data from API
 */
const array = [];
export const getOperations = async (id, successCallback, fetchedOperations) => {
    try {
        // tasks/${task.id}
        console.log("taskIDDIIDI", id);
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            method: "GET",
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();
        console.log("fetchedOperations: ", data.data);
        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }
        array.push(data.data);
        console.log("array :", array);
        successCallback(array);
        console.log("fetchedOperations :", data.data);
    } catch (err) {
        console.log(err);
    }

    console.log("fetchedOperations: ", fetchedOperations);
};
