import React, {Component, Fragment} from 'react';
import {Form, Input, Button, Checkbox,Row, Col} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./index.scss"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div class="form-wrap">
                <div className="form-title">
                    中国*********************平台
                </div>
                <div className="form-wrap2">
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={this.onFinish}>
                            <Form.Item name="username" rules={[{required: true, message: '请输入用户名!'}]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                            </Form.Item>
                            <Form.Item name="password" rules={[{required: true, message: '请输入密码!'}]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                                       placeholder="密码"/>
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle><Checkbox><span
                                    className="span-rmname">记住用户名</span></Checkbox>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item name="">
                                <Row gutter={13}>
                                    <Col className="gutter-row" span={15}>
                                        <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder=""/>
                                    </Col>
                                    <Col className="gutter-row" span={9}>
                                        <Button type="danger" block>获取验证码</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        block> 登录 </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className="form-foot">
                    版权所有********************公司
                </div>
            </div>
        );
    }
}

export default Login;