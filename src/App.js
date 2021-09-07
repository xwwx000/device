import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from "./views/login/index";
import Index from "./views/index/Index";
import Monitor from "./views/report/monitor";
//引用私有组件
import PrivateRouter from "./components/privateRouter/Indes";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    {/*同:<Route component={Login} exact path="/"/>*/}
                    <Route exact render={() => <Login />} path="/"/>
                    <PrivateRouter component={Index} path="/index"/>
                    <Route component={Monitor} exact path="/monitor"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
