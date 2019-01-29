import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCauseList } from 'ducks/cause';
import { loadTokenFromCookie } from 'ducks/user';
import './Splash.css';

// Shared UI Components
import {
  LinkButton,
} from 'components/shared';

class Splash extends Component {

  componentDidMount() {
    const { getCauseList, loadTokenFromCookie } = this.props;

    getCauseList();
    loadTokenFromCookie();
  };

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
          <LinkButton
            classname={'create-cause'}
            linkText={'Create a cause'}
            href={'/causes/new'}
          />
          <LinkButton
            classname={'find-cause'}
            linkText={'Find a cause'}
            href={'/causes'}
          />
          <LinkButton
            classname={'sign-in'}
            linkText={'Sign in'}
            href={'/login'}
            context={'login'}
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
    )
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
    state: state
  }
};

const mapDispatchToProps = {
  getCauseList,
  loadTokenFromCookie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
