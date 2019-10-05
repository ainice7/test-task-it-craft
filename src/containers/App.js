import React from 'react';
import { Layout, Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';

import MainContainer from './MainContainer';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App({ addedItems }) {

  return (
    <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'>Log In</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/market'>Market</Link></Menu.Item>
            <Menu.Item key="3">
              <Link to='/cart'>
                <Badge count={addedItems.length}>
                  <Icon type="shopping-cart" style={{ fontSize: 25, color: '#08c'}}  />
                </Badge>
              </Link>
              
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <MainContainer />
        </Content>
        <Footer style={{ textAlign: 'center', height: 80 }}>Test Task for IT-Craft ©2019 Created by Yurii Makarov</Footer>
      </Layout>
  );
}

const mapStateToProps = (state) => ({
  addedItems: state.data.addedItems
});

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;