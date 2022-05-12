import { createStore } from "redux";
// import reducer from "./reducers";
import { rootReducer } from "./reducers/index";
// import { rootReducer } from "./reducers";

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
