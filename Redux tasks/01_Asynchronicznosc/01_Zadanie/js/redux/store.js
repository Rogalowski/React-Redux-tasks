import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import combineReducers from "./reducer"
import thunk from 'redux-thunk'
import logger from "redux-logger";

const middlewares = [logger, thunk];

export default createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
);
