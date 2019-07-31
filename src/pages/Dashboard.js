//snipped rcredux
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MapBranch from '../components/MapBranch';
import StatChart from '../components/StatChart';

import { Layout, Row, Col } from 'antd';
import actions from '../redux/actions';

const { Header, Content, Footer } = Layout;

export class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Row gutter={16}>
                <Col span={12}><MapBranch /></Col>
                <Col span={12}><StatChart /></Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
