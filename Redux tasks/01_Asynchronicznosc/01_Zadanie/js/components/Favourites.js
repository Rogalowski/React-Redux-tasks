import PropTypes from "prop-types";
import React from "react";



const Favourites = ({quotes}) => {
    return (
        <>
            <h1> Ulubione cytaty </h1>
            <ul>
                {quotes.map((fav, index) => {
                    return <li key={index}> {fav.quote} author: {fav.author} </li>})
                }
            </ul>
        </>
    )
}

export default Favourites;

Favourites.propTypes = {
    quotes: PropTypes.array.isRequired
};
