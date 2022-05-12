import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import store from "../redux/store";

import Home from "./Home";
import Layout from "./Layout";
import ProductAdd from "../containers/AddProduct";
import SingleProduct from "../containers/SingleProduct";
import RecipeAdd from "../containers/RecipesAdd";

const Main = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products/add" component={ProductAdd} />
                    {/* <Route
                        exact
                        path="/products/:id"
                        component={SingleProduct}
                    /> */}
                    <Route exact path="/recipes/add" component={RecipeAdd} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default Main;
