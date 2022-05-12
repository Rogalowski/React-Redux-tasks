import { INCREMENT, DECREMENT } from "../actions/counterAction";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state ? state - 1 : state;
        default:
            return state;
    }
};
