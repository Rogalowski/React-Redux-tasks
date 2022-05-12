import {combineReducers} from "redux";
import {INCREMENT, SET_TIME, RESET_TIMER, SAVE_TIME, SET_INTERVAL_ID} from "./actions";

const initState = {
    currentIntervalID: null,
    time: 0,
}

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                time: state.time + 1}

        case SET_INTERVAL_ID:
            return {
                ...state,
                currentIntervalID: action.id}

        case RESET_TIMER:
            return {...state, time: 0}
        case SET_TIME:
            return {...state, time: action.time}

        default:
            return state;
    }
}
const listReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_TIME:
            return [...state, action.currentTime]
        default:
            return state
    }
}

export default combineReducers({
  counter: counterReducer,
  list: listReducer
})
