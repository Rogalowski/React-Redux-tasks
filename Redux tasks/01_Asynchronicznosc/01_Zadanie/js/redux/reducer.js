import { combineReducers } from "redux";
import { ADD_FAV, QUOTE_ERROR, QUOTE_FETCHED, QUOTE_FETCHING } from "./actions";

const initialState = {
    loading: false,
    error: "",
    quote: null, // obiekt quote: {quote:..., author:....}
};

export function quote(state = initialState, action) {
    switch (action.type) {
        case QUOTE_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }
        case QUOTE_FETCHED: {
            return {
                ...initialState,
                quote: action.quote,
            };
        }
        case QUOTE_ERROR: {
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        }
        default:
            return state;
    }
}

export function favourites(state = [], action) {
    if (action.type === ADD_FAV) {
        return [...state, action.payload];
    } else {
        return state;
    }
}

export default combineReducers({
    quote,
    favourites,
});
