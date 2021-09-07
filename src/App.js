import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from "./views/login/index";
import Index from "./views/index/Index";
import Monitor from "./views/report/monitor"
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
                    <Route component={Index} exact path="/index"/>
                    <Route component={Monitor} exact path="/monitor"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
