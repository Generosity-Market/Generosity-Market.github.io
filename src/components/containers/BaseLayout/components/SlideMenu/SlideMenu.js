import React from 'react';
import './SlideMenu.css';

import { Glyphicon } from '@jgordy24/stalls-ui';

const SlideMenu = ({
    showMenu = false,
    navLinks,
    handleNavigation,
    closeMenu,
    logout,
}) => {

    const logoURL = require('Assets/Logo/PNG/Artboard-1Generosity-Logo.png');

    const renderLink = ({
        // color,
        devModeOnly,
        endpoint,
        icon,
        name,
    }) => {
        const isDev = process.env.NODE_ENV === 'development';
        const shouldRender = !devModeOnly || (devModeOnly && isDev);
        const navigate = () => handleNavigation(endpoint);

        return shouldRender && (
            <div
                key={name + icon}
                className='navLinks'
                onClick={navigate}
            >
                {icon && <Glyphicon icon={icon} fixedWidth />}
                {name}
            </div>
        );
    };

    const handleLogout = () => {
        logout();
        handleNavigation('/');
    };

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

                <div className="logout navLinks" onClick={handleLogout}>
                    <Glyphicon
                        icon={'arrow-alt-circle-left'}
                        style={{ color: 'var(--danger-65)' }}
                    />
                    Log Out
                </div>

            </div>

            <div
                className='closeMenu'
                onClick={() => closeMenu()}
            >
                <Glyphicon icon={'times'} />
            </div>

        </nav>
    );
};

export default SlideMenu;
