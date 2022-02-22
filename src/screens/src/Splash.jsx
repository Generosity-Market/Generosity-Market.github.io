import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCauseList } from 'ducks/cause';
import { loadTokenFromCookie } from 'ducks/user';
import { resetPageData } from 'ducks/pageData';
import '../styles/Splash.css';

// Shared UI Components
import { LinkButton } from '@jgordy24/stalls-ui';
import { HeadContainer } from 'components/shared';

export const Splash = ({
    getCauseList,
    loadTokenFromCookie,
    resetPageData,
    isLoggedIn,
    user,
}) => {

    const navigate = useNavigate();

    useEffect(() => {
        getCauseList();
        resetPageData();
        if (!isLoggedIn) {
            loadTokenFromCookie();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            navigate(`/users/${user.id}/dashboard`, { replace: true });
        }
    }, [isLoggedIn]);

    return (
        <div className='Splash'>
            <HeadContainer />

            <div className='logo-container'>
                <img
                    className='Logo'
                    src={require('../../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png')}
                    alt="Generosity Market Logo"
                />
            </div>

            <div className='links'>
                <LinkButton
                    bsStyle='success'
                    bsSize='long'
                    label='Create a cause'
                    href='/causes/new'
                    transparent={true}
                />

                <LinkButton
                    bsStyle='active'
                    bsSize='long'
                    label='Find a cause'
                    href='/causes'
                    transparent={true}
                />

                <LinkButton
                    bsStyle='pale'
                    bsSize='long'
                    label='Sign in'
                    href='/login'
                    linkContext='login'
                    transparent={true}
                />
            </div>

            <Link
                to="/login"
                state={{ context: 'register' }}
                className='sign-up'
            >
                Not a member? Sign up here
            </Link>

        </div>
    );
};

const mapStateToProps = ({ user, token }) => {
    return {
        user,
        isLoggedIn: !!token && !!user,
    };
};

const mapDispatchToProps = {
    getCauseList,
    loadTokenFromCookie,
    resetPageData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
