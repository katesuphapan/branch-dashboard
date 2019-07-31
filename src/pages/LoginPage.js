import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';


export class LoginPage extends Component {
    
    state = {
        username: '',
        password: ''
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Loggin in with U:${this.state.username} P:${this.state.password}`)
    }

    setUsername = (value) => {
        this.setState({
            ...this.state,
            username: value
        })
        // console.log(this.state);
    }
    setPassword = (value) => {
        this.setState({
            ...this.state,
            password: value
        })
        // console.log(this.state);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        value={this.state.username} 
                        onInput={e => this.setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        value={this.state.password} 
                        onInput={e => this.setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                </Form.Item>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)