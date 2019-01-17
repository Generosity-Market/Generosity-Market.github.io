import React, { Component } from 'react'
import NavItem from '../NavItem/NavItem';
import './BottomMenu.css';

export default class BottomMenu extends Component {

    render() {
        const { navLinks, handleNavigation } = this.props;

        return (
            <div className="BottomMenu">
                {navLinks.map((link, index) =>
                    <NavItem 
                        key={index}
                        icon={link.icon}
                        name={link.name}
                        color={'var(--medium-green)'}
                        endpoint={link.endpoint}
                        handleNavigation={handleNavigation} 
                    />
                )}
            </div>
        )
    };
};
