import React from "react";
import Panel from "../Panel";

const AllRecipes = () => {
    return (
        <>
            <h1 className="title">Wszystkie przepisy</h1>
            <Panel
                iconName={"folder"}
                path={"recipes"}
                listElements={fakeRecipes}
                heading={false}
                footer={false}
            />
        </>
    );
};

export default AllRecipes;
