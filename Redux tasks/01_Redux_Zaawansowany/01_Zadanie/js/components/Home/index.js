import React from "react";
import LastRecipes from "../../containers/LastRecipes";
import LastProducts from "../../containers/LastProducts";

const Home = () => {
    return (
        <div className="columns">
            <div className="column is-one-third">
                <LastRecipes />
            </div>
            <div className="column is-one-third">
                <LastProducts />
            </div>
        </div>
    );
};

export default Home;
