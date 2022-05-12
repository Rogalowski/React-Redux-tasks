import React from "react";
// import { deploy } from "../redux/actions";
import { counterChanger } from "../redux/actions";
import { connect } from "react-redux";
import Platform from "../components/Platform";

const mapDispatchToProps = (dispatch) => {
    return {
        deploy: () => dispatch(counterChanger()),
        // deploy: () => dispatch(deploy()),
    };
};
// const mapStateToProps = ({ counter, launched }) => ({
//     counter,
//     launched,
// });
const mapStateToProps = ({ deploy }) => ({
    counter: deploy.counter,
    launched: deploy.launched,
    pending: deploy.pending,
});
export default connect(mapStateToProps, mapDispatchToProps)(Platform);
