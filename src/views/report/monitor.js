import React, {Component, Fragment} from 'react';
import {Form, Input, Button, Checkbox, Row, Col} from 'antd';
import {LoginInterface} from "../../api/account";

class Monitor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onFinish = (values) => {
        //console.log('Received values of form: ', values);
        LoginInterface(values).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <div className="form-wrap">aaaaaa</div>
        );
    }
}
export default Monitor;