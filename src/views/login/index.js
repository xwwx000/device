import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Input, Button, Checkbox,message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./index.scss"
//API
import {LoginInterface} from "../../api/account"
//方法
import {setToken} from "../../utils/session";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCode: "",
            userPwd: ""
        };
    }

    /**
     * 用户名输入
     * @param e
     */
    inputUserCodeChange = (e) => {
        let value = e.target.value;
        this.setState({
                userCode: value
            }
        )
    }
    /**
     * 密码输入
     * @param e
     */
    inputUserPwdChange = (e) => {
        let value = e.target.value;
        this.setState({
                userPwd: value
            }
        )
    }
    onFinish = (values) => {
        if(!this.state.userCode){
            message.warning('用户名不存在',1);
            return false;
        }
        if(!this.state.userPwd){
            message.warning('密码不存在',1);
            return false;
        }
        const requestData = {
            userCode: this.state.userCode,
            userPwd: this.state.userPwd
        };
        LoginInterface(requestData).then(response => {
            const data = response.data;
            console.log(data);
            if(data.code === 0){
                message.success('登录成功',1);
                console.log('登录成功 token=: ', data.data.token);
                setToken(data.data.token);
                this.props.history.push("/index")
            }else{
                message.error(data.msg,1);
                return false;
            }
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <div className="form-wrap">
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
                            <Form.Item name="userCode">
                                <Input value={this.state.userCode} onChange={this.inputUserCodeChange}
                                       prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                            </Form.Item>
                            <Form.Item name="userPwd" rules={

                                [
                                     //{required: true, message: '请输入密码!'}
                                    // ,{len: 6, message: '密码长度为6位!'},
                                    // ({getFieldValue})=>({
                                    //     validator(rule,value){
                                    //         //console.log(getFieldValue('password'));
                                    //         if(value.length<6){
                                    //             return Promise.reject('不能小于6位');
                                    //         }else{
                                    //             return Promise.resolve();
                                    //         }
                                    //     }
                                    // })
                                ]}>
                                <Input value={this.state.userPwd} onChange={this.inputUserPwdChange}
                                       prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                                       placeholder="密码"/>
                            </Form.Item>
                            {/*<Form.Item>*/}
                            {/*    <Form.Item name="remember" valuePropName="checked" noStyle><Checkbox><span*/}
                            {/*        className="span-rmname">记住用户名</span></Checkbox>*/}
                            {/*    </Form.Item>*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item>*/}
                            {/*    <Row gutter={13}>*/}
                            {/*        <Col className="gutter-row" span={15}>*/}
                            {/*            <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder=""/>*/}
                            {/*        </Col>*/}
                            {/*        <Col className="gutter-row" span={9}>*/}
                            {/*            <Button type="danger" block>获取验证码</Button>*/}
                            {/*        </Col>*/}
                            {/*    </Row>*/}
                            {/*</Form.Item>*/}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        block> 登录 </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className="form-foot">
                    {/*<Link target="_blank" to="/monitor">大屏幕</Link>*/}
                    版权所有********************公司
                </div>
            </div>
        );
    }
}

export default withRouter(Login);