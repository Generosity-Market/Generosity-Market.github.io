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
            className={(navData) => navData.isActive ? 'navLinks active' : 'navLinks'}
            to={`${endpoint}`}
        >
            {icon && <Glyphicon icon={icon} />}
            {name}
        </NavLink>
    );
};

export default NavItem;
