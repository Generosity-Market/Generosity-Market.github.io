import React, { Component } from 'react';
import './Splash.css';
import { Link } from 'react-router-dom';

class Splash extends Component {
  render() {
    return(
      <div className='Splash'>
        <div className='logo-container'>
          <img className='Logo' src={require('../../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png')} alt=""/>
        </div>
        <div className='links'>
          <a className='create-cause'>Create a cause</a>
          <a className='find-cause'>Find a cause</a>
          <a className='sign-in'>Sign in</a>
        </div>
        <a href='#' className='sign-up'>Not a member? Sign up here</a>
      </div>
    )
  }
};

export default Splash;
