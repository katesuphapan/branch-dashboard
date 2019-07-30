import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import HeaderBar from './components/HeaderBar';
import { Layout, Menu, Row, Col } from 'antd';
import MapBranch from './components/MapBranch';
import StatChart from './components/StatChart';
const { Header, Content, Footer } = Layout;

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout className="layout">
          <HeaderBar />
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Row gutter={16}>
                <Col span={12}><MapBranch /></Col>
                <Col span={12}><StatChart /></Col>
              </Row>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
