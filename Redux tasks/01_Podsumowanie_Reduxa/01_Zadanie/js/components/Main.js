import React from "react";
import {Provider} from "react-redux";
import {HashRouter, Switch, Route} from "react-router-dom";
import Counter from "../containers/Counter";
import store from "../redux/store";

const Main = () => (
    <Provider store ={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/:defaultTime?" component={Counter}/>
            </Switch>
        </HashRouter>

    </Provider>
);

export default Main;
