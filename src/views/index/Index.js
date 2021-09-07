import React, {Component} from 'react';
import {Layout} from 'antd';
import "./layout.scss"
import LayerAside from "./componments/Aside"
import LayerHeader from "./componments/Header";
import ContainerMain from "../../components/containerMain/Index";
const {Sider, Header, Content} = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout className="layout-wrap">
                <Header className="layout-header"><LayerHeader/></Header>
                <Layout>
                    <Sider style={{overflowY: 'auto'}} width="250px"><LayerAside></LayerAside></Sider>
                    <Content className="layout-main">
                        <ContainerMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;