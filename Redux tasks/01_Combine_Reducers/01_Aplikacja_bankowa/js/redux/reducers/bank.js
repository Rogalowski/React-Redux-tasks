/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */

import { WITHDRAW, DEPOSIT } from "../actions/bankActions";

const initialState = 0;

// export const bankReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case WITHDRAW:
//             // if (state <= 0) {
//             //     return state;
//             // } else
//             return state - action.payload;

//         case DEPOSIT:
//             return state + action.payload;

//         default:
//             return state;
//     }
// };

export function bankReducer(state = initialState, { type, payload }) {
    switch (type) {
        case WITHDRAW:
            if (state <= payload) {
                return state;
            } else return state - payload;

        case DEPOSIT:
            return state + payload;

        case WITHDRAW:
            return state - payload;

        default:
            return state;
    }
}

export default bankReducer;
