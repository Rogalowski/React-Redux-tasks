export const ADD_PRODUCT = "ADD_PRODUCT";
// export const
export const addNewProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload,
});

export const addProduct = (product, history) => (dispatch) => {
    dispatch(addNewProduct(product));
    history.push("/");
};
