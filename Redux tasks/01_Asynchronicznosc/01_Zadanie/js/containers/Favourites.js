import React from "react";
import {connect} from "react-redux"
import Favourites from "../components/Favourites"

const mapStateToProps = ({favourites}) => ({
    quotes: favourites
})
export default connect(mapStateToProps)(Favourites)

//export default () => <div/>
