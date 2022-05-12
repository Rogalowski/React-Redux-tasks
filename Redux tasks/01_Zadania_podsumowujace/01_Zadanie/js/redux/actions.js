// Tutaj zaimplementuj akcje
// import React, { useEffect } from "react";

// export const COUNTER = "COUNTER";
export const DEPLOY = "DEPLOY";
export const PENDING = "PENDING";
export const COUNT = "COUNT";
export const LAUNCH = "LAUNCH";

// export const counter = () => {
//     return {
//         type: COUNTER,
//     };
// };

export const setPending = () => ({
    type: PENDING,
});

export const setCount = () => ({
    type: COUNT,
});

export const deploy = () => {
    return {
        type: DEPLOY,
        // counter,
    };
};

export const setLan = () => ({
    type: LAUNCH,
});

// export const countLaunch = () => (dispatch, getState) => {
//     const state = getState();
//     dispatch(deploy(state.counter));
// };

const deployThunk = () => (dispatch) => {
    dispatch(deploy());

    setTimeout(() => {
        dispatch(setLan());
    }, 5000);
};

export const counterChanger = () => (dispatch, getState) => {
    dispatch(setPending());

    const timer = setInterval(() => {
        dispatch(setCount());

        if (getState().deploy.counter <= 0) {
            clearInterval(timer);
            dispatch(deployThunk());
        }
    }, 1000);
};

// export const counter = () => (dispatch, getState) => {
//     const state = getState();
//     dispatch(deploy(state.counter - 1));
// };
