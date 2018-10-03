import React, { Component } from 'react'
import NavLink from '../NavLink/NavLink';

export default class BottomMenu extends Component {

    render() {
        const { navLinks, handleNavigation } = this.props;

        return (
            <div className="BottomMenu">
                {navLinks.map((link, index) =>
                    <NavLink 
                        key={index}
                        icon={link.icon}
                        name={link.name}
                        color={link.color}
                        endpoint={link.endpoint}
                        handleNavigation={handleNavigation} 
                    />
                )}
            </div>
        )
    };
};
