import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { shoppingReducer } from "./shoppingReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    products: shoppingReducer,
});
