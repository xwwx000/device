import React, {Component, Fragment} from 'react';
import {Layout} from 'antd';
import "./layout.scss"
const {Sider, Header, Content} = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout className="layout-wrap">
                <Sider width="250px">Sider</Sider>
                <Layout>
                    <Header className="layout-header">头部</Header>
                    <Content>内容</Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;