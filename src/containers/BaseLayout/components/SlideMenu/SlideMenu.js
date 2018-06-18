import React from 'react';
import NavLink from '../NavLink/NavLink';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';

const SlideMenu = (props) => {

  const { showMenu, navLinks, handleNavigation, closeMenu } = props;
  const logoURL = require('../../../../Assets/Logo/PNG/Artboard-1Generosity-Logo.png');

  return(
    <nav style={showMenu ? {left: '0%'} : {left: '-100%'}}>

      <div className="menuLogo navLinks">
        <img src={logoURL} alt="Generosity Market top menu logo"/>
      </div>

      { navLinks.map( (link, index) =>
          <NavLink key={index}
            icon={link.icon}
            name={link.name}
            color={link.color}
            endpoint={link.endpoint}
            handleNavigation={handleNavigation} />
      ) }

      <div className='closeMenu'
        onClick={() => closeMenu()}>
        <FontAwesome classname={"fas fa-times"} />
      </div>

    </nav>
  );
};

export default SlideMenu;
