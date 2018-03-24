import React, { Component } from 'react';
import './Splash.css';
// import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton';

class Splash extends Component {
  render() {
    return(
      <div className='Splash'>
        <div className='logo-container'>
          <img className='Logo' src={require('../../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png')} alt=""/>
        </div>
        <div className='links'>
          <LinkButton classname={'create-cause'} linkText={'Create a cause'} href={'/'}/>
          <LinkButton classname={'find-cause'} linkText={'Find a cause'} href={'/'}/>
          <LinkButton classname={'sign-in'} linkText={'Sign in'} href={'/'}/>
        </div>
        <a href='/' className='sign-up'>Not a member? Sign up here</a>
      </div>
    )
  }
};

export default Splash;
