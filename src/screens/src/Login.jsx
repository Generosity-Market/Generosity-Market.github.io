import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../styles/Login.css';

import {
    login,
    register,
} from 'ducks/user';

// Shared UI Components
import { Button } from '@jgordy24/stalls-ui';
import { ActionButton } from 'components/shared';

// TODO: Break up some of the components in this page...
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggingIn: false,
            error: null,
            context: 'login',
        };
    }

    componentDidMount() {
        const { context } = this.props.location.state;
        if (context === 'register') this.setState({ context: context });
    }

    handleState = field => {
        return (event) => {
            this.handleError(null);
            this.setState({
                [field]: event.target.value
            });
        };
    };

    handleError = error => {
        this.setState({ error });
    }

    handleSubmit = async (action) => {
        const { history } = this.props;
        const { email, password } = this.state;
        this.setState({ loggingIn: true });

        const { user, error } = await action({ email, password });

        if (error) this.handleError(error); this.setState({ loggingIn: false });
        // TODO Use location state to determine what page navigated to the login page... redirect there...
        if (user) history.push(`/users/${user.id}/dashboard`);
    }

    render() {
        const {
            email,
            password,
            error,
            context,
        } = this.state;

        return (
            <div className="Login">
                <div className="sign-in">
                    <p
                        className="error-message"
                        style={{
                            backgroundColor: `${error ? 'var(--danger)' : 'transparent'}`,
                        }}
                    >
                        {error}
                    </p>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleState('email')}
                        value={email}
                        autoFocus
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleState('password')}
                        value={password}
                    />

                    <div className="submit-buttons">
                        <Button
                            bsStyle={context === 'register' ? 'active' : 'pale'}
                            bsSize='long'
                            onClick={() => this.handleSubmit(this.props[context])}
                            label={context === 'register' ? 'Sign up' : 'Log in'}
                        />
                    </div>

                    {/*<a 
                        href="/causes" 
                        className="forgot-password"
                    >
                        Forgot your password? Reset It Here
                    </a>*/}
                </div>

                <ActionButton
                    action={() => this.setState({
                        context: context === 'register' ? 'login' : 'register',
                    })}
                    classname={context === 'register' ? 'sign-up-link' : 'log-in-link'}
                    actionText={context === 'register' ? 'Already a member? Log in here' : 'Not a member? Sign up here'}
                />

                {/*<h3>OR</h3>*/}

                {/* <Button
                        label='log in with facebook'
                        href='/causes'
                        bsStyle='info'
                        bsSize='full'
                /> */}
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    login,
    register,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);
