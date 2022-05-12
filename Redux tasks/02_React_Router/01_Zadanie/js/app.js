import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./redux/store"
import Cart from "./containers/Cart";
import {Route, HashRouter as Router, Switch, Link} from "react-router-dom";

const App = () => <div>
    <Provider store={store}>
        <Router>
            <ul>
                <li><Link to={"/"}>wszystkie</Link></li>
                <li><Link to={"/10"}>do 10 zł</Link></li>
                <li><Link to={"/50"}>do 50 zł</Link></li>
                <li><Link to={"/75"}>do 75 zł</Link></li>
            </ul>
            <Switch>
                <Route component={Cart} path={"/:filter?"}/>
            </Switch>
        </Router>
    </Provider>
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
