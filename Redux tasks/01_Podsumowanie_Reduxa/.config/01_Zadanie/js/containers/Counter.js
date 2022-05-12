import Counter from "../components/Counter";
import {connect} from "react-redux";
import {resetTimer, startCounter, stopCounter, setStartTime} from "../redux/actions";

const mapState = (state) => {
    return {
        time: state.counter.time,
        isRunning: state.counter.currentIntervalID != null
    }
}
const mapDispatch = (dispatch, ownProps) => {
    const value = ownProps.match.params?.defaultTime || null;
    if (value) dispatch(setStartTime(+value))
    return {
        start: () => dispatch(startCounter()),
        stop: () => dispatch(stopCounter()),
        reset: () => dispatch(resetTimer())

    }
}


export default connect(mapState, mapDispatch)(Counter)
