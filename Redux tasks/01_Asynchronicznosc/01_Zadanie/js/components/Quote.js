import React from "react";

const Quote = ({quote, loading, error, fetchQuote, addFav}) => (
    <div>
        <button disabled={loading} onClick={fetchQuote}> Pobierz cytat</button>

        { quote &&
        <p> {quote.quote} / {quote.author}
            <span>
            <button onClick={() => addFav(quote)}> Dodaj do ulubionych </button>
            </span>
        </p> }

        { loading && "Ładuję cytat..." }

        { error && error }
    </div>
);

export default Quote;
