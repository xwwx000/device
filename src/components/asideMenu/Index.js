import React, {Component, Fragment} from 'react';
import {Link}  from "react-router-dom";
//antd
import {Menu} from 'antd';
import { UserOutlined} from '@ant-design/icons';
//路由
import Router from "../../router/index"
const {SubMenu} = Menu;

class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(Router);
    }
    //根据后台角色后处理Router 匹配菜单

    //无子级菜单处理
    renderMenu = ({title,key}) =>{
        return (
            <Menu.Item key={key}>
                <Link to={key}>{title}</Link>
            </Menu.Item>
        )
    }
    //子级菜单处理
    renderSubMenu = (data) =>{
        return(
            <SubMenu key={data.key} icon={<UserOutlined/>} title={data.title}>
                {
                    data.child && data.child.map(item =>{
                        return item.child && item.child.length>0 ? this.renderSubMenu(item) : this.renderMenu(item);
                    })
                }
            </SubMenu>
        )
    }
    render() {
        return (
            <Fragment>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    //defaultOpenKeys={['/user/index']}
                    defaultOpenKeys={[Router[1].key && Router[1].child ? Router[1].key : 0]}
                    style={{height: '100%'}}
                >
                    {
                        Router && Router.map(firstItem =>{
                            return firstItem.child && firstItem.child.length>0 ? this.renderSubMenu(firstItem):this.renderMenu(firstItem);
                        })
                    }
                    {/*<Menu.Item key="0">控制台</Menu.Item>*/}
                    {/*<SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">*/}
                    {/*    <Menu.Item key="1">option1</Menu.Item>*/}
                    {/*    <Menu.Item key="2">option2</Menu.Item>*/}
                    {/*    <Menu.Item key="3">option3</Menu.Item>*/}
                    {/*    <Menu.Item key="4">option4</Menu.Item>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </Fragment>
        )
    }
}

export default AsideMenu;