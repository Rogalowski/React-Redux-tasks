import React from "react";
import {addFav, fetchNewQuote} from "../redux/actions";
import {connect} from "react-redux";
import Quote from "../components/Quote";

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuote: () => dispatch(fetchNewQuote()),
        addFav: (q) => dispatch(addFav(q))
    })
}
const mapStateToProps = ({ quote }) => ({
    loading: quote.loading,
    quote: quote.quote,
    error: quote.error
})
export default connect(mapStateToProps, mapDispatchToProps)(Quote)

//export default () => <div/>
// quote, loading, error, fetchQuote, addFav