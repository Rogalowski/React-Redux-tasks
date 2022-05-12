export const URL_API = "http://localhost:3000/cars/";
export const ConnectAPIFetch = async (url, method, data) => {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw Error("Can not load data from that url ");
    }
    return await response.json();
};
