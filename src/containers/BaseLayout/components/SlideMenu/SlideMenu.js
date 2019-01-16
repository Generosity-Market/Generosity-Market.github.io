import React from 'react';
import NavItem from '../NavItem/NavItem';
import { Link } from 'react-router-dom';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import './SlideMenu.css';

const SlideMenu = ({ 
  showMenu, 
  navLinks, 
  handleNavigation, 
  closeMenu,
}) => {

  const logoURL = require('../../../../Assets/Logo/PNG/Artboard-1Generosity-Logo.png');

  const renderLink = ({ endpoint, icon, color, name }) => (
    <div
      key={name + icon}
      className='navLinks'
      onClick={() => handleNavigation(endpoint)}
    >
      <FontAwesome classname={icon} style={{ color: color }} />
      {name}
    </div>
  );

  return(
    <nav 
      className='SlideMenu'
      style={showMenu ? {left: '0%'} : {left: '-100%'}}
    >

      <div className="menuLogo navLinks">
        <img src={logoURL} alt="Generosity Market top menu logo"/>
      </div>

      <div className="LinksContainer">
        {navLinks.map(link => renderLink(link))}
      </div>

      <div 
        className='closeMenu'
        onClick={() => closeMenu()}
      >
        <FontAwesome classname={'fas fa-times'} />
      </div>

    </nav>
  );
};

export default SlideMenu;
