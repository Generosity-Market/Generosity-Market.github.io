import React from 'react';
import FontAwesome from 'components/FontAwesome/FontAwesome';
import './SlideMenu.css';

const SlideMenu = ({
  showMenu,
  navLinks,
  handleNavigation,
  closeMenu,
  logout,
}) => {

  const logoURL = require('Assets/Logo/PNG/Artboard-1Generosity-Logo.png');

  const renderLink = ({
    endpoint,
    icon,
    name
  }) => (
      <div
        key={name + icon}
        className='navLinks'
        onClick={() => handleNavigation(endpoint)}
      >
        <FontAwesome classname={icon} />
        {name}
      </div>
    );

  return (
    <nav
      className='SlideMenu'
      style={showMenu ? { left: '0%' } : { left: '-100%' }}
    >

      <div className="menuLogo navLinks">
        <img src={logoURL} alt="Generosity Market top menu logo" />
      </div>

      <div className="LinksContainer">
        {navLinks.map(link => renderLink(link))}

        <div className="logout navLinks" onClick={() => { logout(); handleNavigation('/'); }}>
          <FontAwesome classname={'fas fa-arrow-alt-circle-left'} style={{ color: 'var(--danger-65)' }} />
          Log Out
        </div>

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
