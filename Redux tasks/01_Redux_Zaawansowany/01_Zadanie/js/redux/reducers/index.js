import { combineReducers } from "redux";
import { products } from "./products";
import { recipes } from "./recipes";

export default combineReducers({
    products,
    recipes,
});
