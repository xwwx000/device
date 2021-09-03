import React, {Component, Fragment} from 'react';
import {Button} from 'antd';
import "./index.scss"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <h1>Login</h1>
                <Button type="primary">Primary Button</Button>
            </Fragment>
        );
    }
}

export default Login;