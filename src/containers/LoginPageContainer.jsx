import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';

import { logIn } from '../actions/index';

class LoginForm extends React.Component {
    state = {
        userName: '',
        password: '',
        redirect: false
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.logIn(values.userName);
                this.setState({ redirect: true });
            }
        });
    };

    onChangeUsername = (e) => {
        const { value } = e.target;
        this.setState({
            userName: value
        });
    }

    onChangePassword = (e) => {
        const { value } = e.target;
        this.setState({
            password: value
        });
    }

    render() {
        const user = this.props.profile.userName;
        
        if(this.state.redirect === true) {
            return <Redirect to='/market' />
        } else if(user) {
            return <div style={{ fontWeight: 700, fontSize: 64 }}>{`You have been already logged ${user}`}</div>
        }

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ min: 8, required: true, message: 'Username must be at least 8 characters' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            onChange={this.onChangeUsername}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ min: 8, required: true, message: 'Password must be at least 8 characters' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            onChange={this.onChangePassword}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.logIn
});

const mapDispatchToProps = {
    logIn
}

const LoginPage = Form.create({ name: 'normal_login' })(LoginForm);
export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);