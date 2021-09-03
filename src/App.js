import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={About} path="/about" />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
