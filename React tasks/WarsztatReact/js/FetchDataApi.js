import { API_KEY, API_URL } from "./api/constants";

export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(API_URL + "/tasks", {
            method: method,
            headers: {
                Authorization: API_KEY,
            },
        });
        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

// export const deleteData = async (id) => {
//     // console.log("id : ", id);
//     try {
//         const data = await fetch(`${API}/cars/${id}`, {
//             method: "DELETE",
//             // body:
//         });
//         const response = await data.json();
//         // const lol = await fetchData();
//         // console.log("in delete fetch: ", lol);
//         // console.log("resp: ", response);
//     } catch (err) {
//         console.log("Error: ", err);
//     }
// };

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
