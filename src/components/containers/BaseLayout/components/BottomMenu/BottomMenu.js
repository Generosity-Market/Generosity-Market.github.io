import React from 'react';
import NavItem from '../NavItem/NavItem';
import './BottomMenu.css';

import { useSelector } from 'react-redux';

const BottomMenu = ({
    handleNavigation,
    navLinks,
    user,
}) => {
    const cart = useSelector(state => state.cart);

    return (
        <div className="BottomMenu">
            {navLinks.map((link, index) =>
                <div key={index} className='navlink-wrapper'>
                    <NavItem
                        icon={link.icon}
                        name={link.name}
                        endpoint={link.endpoint(user && user.id)}
                        handleNavigation={handleNavigation}
                    />
                    {(link.withIndicator && !!cart?.length) && (
                        <span className="indicator">•</span>
                    )}
                </div>
            )}
        </div>
    );
};

BottomMenu.displayName = 'BottomMenu';

export default React.memo(BottomMenu);