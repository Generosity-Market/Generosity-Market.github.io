import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

import {
    FontAwesome,
} from 'components/shared';

class TopMenu extends Component {

    render() {
        return (
            <div className='topnav TopMenu' id='topnav'>

                <div className='links'>
                    <Link to="/causes">
                        <FontAwesome icon={'home'} />
                    </Link>
                </div>

                <div className="menuLogo links">
                    <img
                        src={require('Assets/Logo/PNG/Artboard-1-copy-4Generosity-Logo.png')}
                        alt="Generosity Market top menu logo"
                    />
                </div>

                <div className='links'>
                    <div onClick={() => this.props.openMenu()}>
                        <FontAwesome icon={'bars'} />
                    </div>
                </div>

            </div>
        );
    }
}

export default TopMenu;
