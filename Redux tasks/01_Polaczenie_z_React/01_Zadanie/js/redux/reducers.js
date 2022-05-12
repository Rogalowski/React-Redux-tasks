import { ADD_ARTICLE, ADD_USER } from "./actions";
import { combineReducers } from "redux";

const initUser = {
    jan: 0,
    gosia: 0,
};
function users(state = initUser, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                [action.payload]: 0,
            };
        case ADD_ARTICLE:
            return {
                ...state,
                [action.payload.userId]: state[action.payload.userId] + 1,
            };

        default:
            return state;
    }
}

function articles(state = [], action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload.title];

        default:
            return state;
    }
}

export default combineReducers({
    articles,
    users,
});
