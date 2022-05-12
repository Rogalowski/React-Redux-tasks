export { ADD_ARTICLE, ADD_USER, addArticle, addUser };

const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_USER = "ADD_USER";

const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload,
});

const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});
