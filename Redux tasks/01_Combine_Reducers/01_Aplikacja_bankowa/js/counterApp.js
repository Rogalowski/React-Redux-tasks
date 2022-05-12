import { createStore } from "redux";
import { increment, decrement } from "./redux/actions/counterActions";
// import counter from "./redux/reducers/counter";
// import counterReducer from "./redux/reducers/counter";
import allReducers from "./redux/reducers";

export default function () {
    const { dispatch, subscribe, getState } = createStore(allReducers);

    const unsubscribe = subscribe(() => {
        console.log(`from subscribe ${getState().counter}`);
    });

    dispatch(increment(5));
    dispatch(decrement(2));

    unsubscribe();

    dispatch(decrement(2));
    console.log(getState());
}
