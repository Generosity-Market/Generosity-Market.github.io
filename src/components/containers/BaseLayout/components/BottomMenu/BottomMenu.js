import React from 'react'
import NavItem from '../NavItem/NavItem';
import './BottomMenu.css';

const BottomMenu = ({
    handleNavigation,
    navLinks,
    user,
}) => (
        <div className="BottomMenu">
            {navLinks.map((link, index) =>
                <NavItem
                    key={index}
                    icon={link.icon}
                    name={link.name}
                    color={'var(--medium-green)'}
                    endpoint={link.endpoint(user && user.id)}
                    handleNavigation={handleNavigation}
                />
            )}
        </div>
    );

export default BottomMenu;