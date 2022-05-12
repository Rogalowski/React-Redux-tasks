import {connect} from "react-redux";
import {saveTimeToList} from "../redux/actions";
import List from '../components/List'

const mapState = (state) => {
    return{
        timeList: state.list,
        time: state.counter.time,
    }
}
const mapDispatch = (dispatch) => {
    return {
        save: (time) => dispatch(saveTimeToList(time))
    }
}

export default connect(mapState, mapDispatch)(List);
