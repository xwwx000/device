import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import User from "../../views/user/Index";
import UserAdd from "../../views/user/Add";
import Home from "../../views/index/Home";
import PrivateRouter from "../privateRouter/Indes";
class ContainerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <switch>
                <PrivateRouter exact path="/index" component={Home}/>
                <PrivateRouter exact path="/index/user/list" component={User}/>
                <PrivateRouter exact path="/index/user/add" component={UserAdd}/>
            </switch>
        );
    }
}

export default ContainerMain;
