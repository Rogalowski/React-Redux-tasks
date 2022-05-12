import {applyMiddleware, createStore} from "redux";
import combineReducers from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = [logger, thunk]

const store = createStore(combineReducers,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;
