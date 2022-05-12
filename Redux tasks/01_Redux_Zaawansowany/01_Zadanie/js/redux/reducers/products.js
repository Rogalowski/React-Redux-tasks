import { ADD_PRODUCT } from "../actions/products";
const init = [
    { id: 1, name: "Pomidory" },
    { id: 2, name: "Przyprawa curry" },
    { id: 3, name: "Olej" },
    { id: 4, name: "Wołowina 500g" },
    { id: 5, name: "Ziemniaki" },
];
export const products = (state = init, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;
    }
};
