import React from 'react'
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';

const NavLink = (props) =>
    <div
      className='navLinks'
      onClick={() => props.handleNavigation(props.endpoint)}>

      <FontAwesome classname={props.icon} style={{color: props.color}} />

      {props.name}

    </div>;

export default NavLink;
