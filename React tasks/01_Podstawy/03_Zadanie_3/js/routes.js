import { v4 as uuidv4 } from "uuid";

export const routes = [
    {
        id: uuidv4(),
        name: "Strona główna",
        path: "/",
    },
    {
        id: uuidv4(),
        name: "Blog",
        path: "/blog",
    },
    {
        id: uuidv4(),
        name: "Cennik",
        path: "/cennik",
    },
    {
        id: uuidv4(),
        name: "Kontakt",
        path: "/kontakt",
    },
];
