import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import {Layout, Menu, Icon, Dropdown, Button, Form} from 'antd';
import './home.css'
import DicList from '../../components/biz/system/dic/DicList'
import DicAdd from '../../components/biz/system/dic/DicAdd'
import DicUpdate from '../../components/biz/system/dic/DicUpdate'
import Menus from '../../Main/menu'
import Number from "../../components/Number";


const {Header, Content, Footer, Sider} = Layout;
const DicAddForm = Form.create()(DicAdd);
const DicUpdateForm = Form.create()(DicUpdate);
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo"/>
                    <Menus/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                    </Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            <Number/>
                            <Switch>
                                <Route path="/dic/list" exact component={DicList}/>
                                <Route path="/dic/add" component={DicAddForm}/>
                                <Route path="/dic/update/:id" component={DicUpdateForm}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>

        )
    }
}

export default Home;


