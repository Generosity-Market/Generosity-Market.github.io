import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCauseList } from 'ducks/cause';
import { loadTokenFromCookie } from 'ducks/user';
import '../styles/Splash.css';

// Shared UI Components
import { Button } from '@jgordy24/stalls-ui';

// TODO: Convert to functional component
export class Splash extends Component {

    componentDidMount() {
        const { getCauseList, loadTokenFromCookie } = this.props;

        getCauseList();
        loadTokenFromCookie();
    }

    render() {
        return (
            <div className='Splash'>

                <div className='logo-container'>
                    <img
                        className='Logo'
                        src={require('../../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png')}
                        alt="Generosity Market Logo"
                    />
                </div>

                <div className='links'>
                    <Button
                        bsStyle='success'
                        bsSize='full'
                        label='Create a cause'
                        href='/causes/new'
                        transparent={true}
                    />

                    <Button
                        bsStyle='active'
                        bsSize='full'
                        label='Find a cause'
                        href='/causes'
                        transparent={true}
                    />

                    <Button
                        bsStyle='pale'
                        bsSize='full'
                        label='Sign in'
                        href='/login'
                        linkContext='login'
                        transparent={true}
                    />
                </div>

                <Link
                    to={{
                        pathname: '/login',
                        state: { context: 'register' }
                    }}
                    className='sign-up'
                >
                    Not a member? Sign up here
                </Link>

            </div>
        );
    }
}
const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
    getCauseList,
    loadTokenFromCookie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
