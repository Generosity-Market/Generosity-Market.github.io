import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Login.css';

import {
    login,
    register,
} from 'ducks/user';

// Shared UI Components
import { Button } from '@jgordy24/stalls-ui';
import { ActionButton } from 'components/shared';

// TODO: Break up some of the components in this page...
export const Login = React.memo(({
    isLoggedIn,
    user,
    ...props
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [userState, setUserState] = useState({ email: '', password: '' });
    const [status, setStatus] = useState({ error: null, submitting: false });
    const [context, setContext] = useState('login');

    const handleState = field => {
        return (event) => {
            event.persist();

            handleError(null);
            setUserState(prevState => ({
                ...prevState,
                [field]: event.target.value
            }));
        };
    };

    const handleError = error => {
        setStatus(prevState => ({ ...prevState, error }));
    };

    const handleSubmit = async (event, action) => {
        event.preventDefault();
        const { email, password } = userState;
        setStatus(prevState => ({
            ...prevState,
            submitting: true,
        }));

        const { user, error } = await action({ email, password });

        if (error) {
            handleError(error);
            setStatus(prevState => ({ ...prevState, submitting: false }));
        }

        const from = location.state?.from?.pathname;

        // Use location state to determine what page navigated to the login page... redirect there...
        if (from) {
            navigate(from, { replace: 'true' });
        } else if (user) {
            navigate(`/users/${user.id}/dashboard`, { replace: 'true' });
        }
    };

    return (
        <div className="Login">
            <div className="sign-in">
                <p
                    className="error-message"
                    style={{
                        backgroundColor: `${status.error ? 'var(--danger)' : 'transparent'}`,
                    }}
                >
                    {status.error}
                </p>

                <form onSubmit={(event) => handleSubmit(event, props[context])}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleState('email')}
                        value={userState.email}
                        autoFocus
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleState('password')}
                        value={userState.password}
                    />

                    <div className="submit-buttons">
                        <Button
                            bsStyle={context === 'register' ? 'active' : 'pale'}
                            bsSize='long'
                            type="submit"
                            // onClick={(event) => handleSubmit(event, props[context])}
                            label={context === 'register' ? 'Sign up' : 'Log in'}
                        />
                    </div>
                </form>


                {/*<a 
                        href="/causes" 
                        className="forgot-password"
                    >
                        Forgot your password? Reset It Here
                    </a>*/}
            </div>

            <ActionButton
                action={() => setContext(state => state === 'register' ? 'login' : 'register')}
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
});

Login.displayName = 'Login';

const mapStateToProps = ({ user, token }) => {
    return {
        user,
        isLoggedIn: !!user && !!token,
    };
};

const mapDispatchToProps = {
    login,
    register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
