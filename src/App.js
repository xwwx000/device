import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from "./views/login/index";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route component={Login} exact path="/"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
