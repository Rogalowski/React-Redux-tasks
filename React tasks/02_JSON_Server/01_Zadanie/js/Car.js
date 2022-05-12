const API = "http://localhost:3000";

// const data = {
//     name: "Polonez",
//     brand: "Daewoo",
// };

// fetch(`${API}/cars/1`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-Type": "application/json",
//     },
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

export const fetchData = async () => {
    try {
        const result = await fetch(API + "/cars");
        return await result.json();
    } catch (err) {
        console.log("Error: ", err);
    }
};

export const deleteData = async (id) => {
    // console.log("id : ", id);
    try {
        const data = await fetch(`${API}/cars/${id}`, {
            method: "DELETE",
            // body:
        });
        const response = await data.json();
        // const lol = await fetchData();
        // console.log("in delete fetch: ", lol);
        // console.log("resp: ", response);
    } catch (err) {
        console.log("Error: ", err);
    }
};

export const postData = async (carData) => {
    try {
        const data = await fetch(`${API}/cars/`, {
            method: "POST",
            body: JSON.stringify(carData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await data.json();
        console.log(response);
    } catch (err) {
        console.log("Error in post function: ", err);
    }
};
