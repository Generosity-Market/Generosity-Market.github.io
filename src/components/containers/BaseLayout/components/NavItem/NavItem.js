import React from 'react';
import { NavLink } from 'react-router-dom';

import { Glyphicon } from '@jgordy24/stalls-ui';

const NavItem = ({
    color,
    endpoint,
    icon,
    name,
}) => {

    return (
        <NavLink
            exact
            className='navLinks'
            to={`${endpoint}`}
            activeStyle={{
                color: color,
                transform: 'scale(1.1)',
            }}
        >
            {icon && <Glyphicon icon={icon} />}
            {name}
        </NavLink>
    );
};

export default NavItem;
