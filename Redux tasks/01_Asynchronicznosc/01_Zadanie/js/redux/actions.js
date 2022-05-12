import api from "../api";

const QUOTE_FETCHING = "fetching_started"
const QUOTE_FETCHED = "fetching_success"
const QUOTE_ERROR = "fetching_failed"
const ADD_FAV = "add_to_favorites"

const startFetching = () => (
    {type: QUOTE_FETCHING}
)
const quoteFetched = (quote) => (
    {type: QUOTE_FETCHED,
    quote}
)
const quoteError = (error) => (
    {type: QUOTE_ERROR,
    error}
)
const addFav = (favQuote) => (
    {type: ADD_FAV,
    payload: favQuote}
)

const fetchNewQuote = () => dispatch => {
    dispatch(startFetching())

    api.fetchQuote()
        .then(data => {dispatch(quoteFetched(data))})
        .catch(err => {dispatch(quoteError(err))})
}

const addFavThunk = () => (dispatch, getState) => {
    const state = getState();
    dispatch(addFav(state.quote.quote))
}

export {QUOTE_FETCHED,QUOTE_FETCHING,QUOTE_ERROR,ADD_FAV,addFav,startFetching,quoteFetched,quoteError, fetchNewQuote, addFavThunk}



