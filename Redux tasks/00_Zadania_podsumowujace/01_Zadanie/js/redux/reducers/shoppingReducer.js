import { ADD_PRODUCT, CHANGE_ORDER } from "../actions/shoppingAction";

const initialState = [];

const moveInArray = (arr, from, to) => {
    // Make sure a valid array is provided
    if (Object.prototype.toString.call(arr) !== "[object Array]") {
        throw new Error("Please provide a valid array");
    }

    // Delete the item from it's current position
    const item = arr.splice(from, 1);

    // Make sure there's an item to move
    if (!item.length) {
        throw new Error("There is no item in the array at index " + from);
    }

    // Move the item to its new position
    arr.splice(to, 0, item[0]);
};

export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];

        case CHANGE_ORDER:
            //TODO: why this not work???
            // const productIndex=state.findIndex(action.payload.name)
            const productIndex = state.findIndex(
                (name) => name === action.payload.name
            );

            if (action.payload.flag === "UP") {
                moveInArray(state, productIndex, productIndex - 1);
                return state;
            } else {
                moveInArray(state, productIndex, productIndex + 1);
                return state;
            }

        default:
            return state;
    }
};
