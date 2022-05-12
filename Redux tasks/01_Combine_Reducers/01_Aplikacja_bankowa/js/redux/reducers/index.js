/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */

import { combineReducers } from "redux";
import { counterReducer } from "./counter";
// import counter from "./counter";
import { bankReducer } from "./bank";

const allReducers = combineReducers({
    // counter,

    counter: counterReducer,
    balance: bankReducer,
});

export default allReducers;

// const allReducers = combineReducers({
//     // counter,

//     counter: counterReducer,
//     balance: bankReducer,
// });

// export default allReducers;
