export const SAVE_TIME = "save_counter"
export const INCREMENT = "increment_counter"
export const SET_TIME = "set_time_counter"
export const SET_INTERVAL_ID = "set_interval"
export const RESET_TIMER = "reset_interval"

export const startCounter = () => dispatch => {
    const id = setInterval(() => {
        dispatch(increment())
    },1000)
    dispatch(setIntervalID(id))         //zapis interval ID w store
}
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const setStartTime = time => ({
    type: SET_TIME,
    time
})

export const setIntervalID = (id) => {
    return {
        type: SET_INTERVAL_ID,
        id
    }
}
export const stopCounter = () => (dispatch, getState) => {
    clearInterval(getState().counter.currentIntervalID)
    dispatch(setIntervalID(null))
}

export const resetTimer = () => {
    return {
        type: RESET_TIMER
    }
}
export const saveTimeToList = (currentTime) => {
    return {
        type: SAVE_TIME,
        currentTime
    }
}

// export const saveTime = () => (dispatch, getState) => {
//     dispatch(save(getState().counter.time))
// }
