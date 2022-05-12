// Miejsce na reducer
// import { COUNTER, DEPLOY } from "./actions";

import { COUNT, DEPLOY, PENDING, LAUNCH } from "./actions";
import { combineReducers } from "redux";

const initData = {
    launched: false,
    counter: 5,
    pending: false,
};

export function deploy(state = initData, action) {
    switch (action.type) {
        case DEPLOY:
            return {
                ...state,
                launched: true,
                counter: 5,
                pending: false,
            };
        case PENDING:
            return {
                ...state,
                pending: true,
            };
        case COUNT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case LAUNCH:
            return initData;
        default:
            return state;
    }
}

export default combineReducers({
    // rocket,
    deploy,
});
