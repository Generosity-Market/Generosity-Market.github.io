import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register, login } from '../../ducks/user';
import './Login.css';

// Shared UI Components
// import LinkButton from 'components/LinkButton/LinkButton';
import ActionButton from 'components/ActionButton';
// import Modal from 'components/Modal/Modal';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loggingIn: false,
            error: null,
            context: 'login',
            // modalIsOpen: false,
        }
    }

    componentDidMount() {
        const { context } = this.props.location.state;
        if (context === 'register') this.setState({ context: context });
    }

    // handleOpenModal = () => {
    //     this.setState({ modalIsOpen: true });
    // }

    // handleCloseModal = () => {
    //     this.setState({ modalIsOpen: false });
    // }

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

    renderActionButton = (context) => {
        return (
            <ActionButton
                action={() => this.handleSubmit(this.props[context])}
                classname={context === 'register' ? 'sign-up-button' : 'log-in-button'}
                actionText={context === 'register' ? 'Sign up' : 'Log in'}
            />
        )
    }


    render() {
        const {
            email,
            password,
            error,
            context,
        } = this.state;

        const {
            location: {
                state: {
                    from,
                }
            }
        } = this.props;

        ; return (
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
                        <ActionButton
                            action={() => this.handleSubmit(this.props[context])}
                            classname={context === 'register' ? 'sign-up-button' : 'log-in-button'}
                            actionText={context === 'register' ? 'Sign up' : 'Log in'}
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

                {/*<LinkButton 
                    classname="facebook-login" 
                    href="/causes" 
                    linkText={'log in with facebook'}
                />*/}

                {/*<Modal
                    isOpen={this.state.modalIsOpen}
                    handleCloseModal={this.handleCloseModal}
                >
                    Modal!!
                </Modal>*/}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    register,
    login
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);
