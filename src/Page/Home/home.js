import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import { Layout, Menu, Icon ,Dropdown,Button} from 'antd';
import './home.css'
import tables from '../../Page/Tables/tables'
import Menus from '../../Main/menu'

const { Header, Content, Footer, Sider } = Layout;

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
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
                <div className="logo" />
                <Menus/>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >

                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Switch>
                            <Route path="/tables" exact component={tables} />
                        </Switch>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>

        )
    }
}

export default Home;


