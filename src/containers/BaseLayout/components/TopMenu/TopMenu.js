import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'components/FontAwesome/FontAwesome';
import './TopMenu.css';

class TopMenu extends Component {

  render() {
    return (
      <div className='topnav TopMenu' id='topnav'>

        <div className='links'>
          <Link to="/causes">
            <FontAwesome classname={"fas fa-home"} />
          </Link>
        </div>

        <div className="menuLogo links">
          <img
            src={require('Assets/Logo/PNG/Artboard-1-copy-4Generosity-Logo.png')}
            alt="Generosity Market top menu logo"
          />
        </div>

        <div className='links'>
          <div onClick={() => this.props.openMenu()}>
            <FontAwesome classname={"fas fa-bars"} />
          </div>
        </div>

      </div>
    );
  };
};

export default TopMenu;
