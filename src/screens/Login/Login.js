import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register, login } from '../../actions/actions';
import './Login.css';


// import LinkButton from '../../components/LinkButton/LinkButton';
import ActionButton from '../../components/ActionButton';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loggingIn: false
        }
    }

    handleState = field => {
        return (event) => {
            this.setState({
                [field]: event.target.value
            });
        };
    };

    handleSubmit = () => {
        const { login, history } = this.props;
        const { email, password } = this.state;
        
        console.log(this.state);
        login({ email, password })
            .then(user => {
                if (user) history.push(`/users/${user.id}/dashboard`);
            });
    }

    render() {
        return (
            <div className="Login">

                <div className="sign-in">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        onChange={this.handleState('email')} 
                        value={this.state.email}
                        autoFocus
                    />

                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={this.handleState('password')} 
                        value={this.state.password}
                    />

                    <div className="submit-buttons">
                        <ActionButton 
                            action={this.handleSubmit}
                            classname='log-in-button' 
                            actionText='Log In'
                        />
                        <ActionButton 
                            action={this.handleSubmit}
                            classname='sign-up-button' 
                            actionText='Sign up'
                        />
                    </div>
                    {/*<a 
                        href="/causes" 
                        className="forgot-password"
                    >
                        Forgot your password? Reset It Here
                    </a>*/}
                </div>

                {/*<h3>OR</h3>*/}

                {/*<LinkButton 
                    classname="facebook-login" 
                    href="/causes" 
                    linkText={'log in with facebook'}
                />*/}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = { register, login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
