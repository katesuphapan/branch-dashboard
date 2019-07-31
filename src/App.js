import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import HeaderBar from './components/HeaderBar';
import MapBranch from './components/MapBranch';
import StatChart from './components/StatChart';

import { Layout, Menu, Row, Col, message } from 'antd';
import actions from './redux/actions';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';

const { Header, Content, Footer } = Layout;

class App extends Component {

  componentDidMount() {
    this.props.initData();
  }

  componentDidUpdate() {

    if (this.props.notification.isShow) {
      if (this.props.notification.isError) {
        message.error(this.props.notification.message);
      } else {
        message.success(this.props.notification.message);
      }
    }

  }

  render() {
    return (

      <div>
        <Layout className="layout">
          <HeaderBar />
          <Content style={{
            padding: '0 50px'
          }}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 280
              }}>
              <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/" exact component={LoginPage} />
              </Switch>
            </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>React Redux Workshop ©2012-2019 Created by Nextflow.in.th</Footer>
        </Layout>
      </div>

    );
  }
}

const mapStateToProps = (state) => {

  console.log(state)
  return {
    notification: state.dashboard.app.notification
  }

}

const mapDispatchToProps = dispatch => {
  return {
    initData: () => dispatch(actions.requestInitData())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);