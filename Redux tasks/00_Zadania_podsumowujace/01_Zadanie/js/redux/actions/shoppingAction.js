export const ADD_PRODUCT = "ADD_PRODUCT";
export const CHANGE_ORDER = "CHANGE_ORDER";

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload,
    };
};

export const changeOrder = (flag, name) => {
    // console.log("flag in action: ", flag);
    // console.log("name in action: ", name);
    return {
        type: CHANGE_ORDER,
        payload: { flag, name },
    };
};
