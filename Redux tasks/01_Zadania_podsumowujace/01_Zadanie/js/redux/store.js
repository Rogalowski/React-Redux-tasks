import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer";

const middlewares = [logger, thunk];

const store = createStore(
    reducer,
    // applyMiddleware(thunk)
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
