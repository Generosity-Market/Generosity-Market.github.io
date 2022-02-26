import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

import { Glyphicon } from '@jgordy24/stalls-ui';

const TopMenu = ({ openMenu }) => {
    return (
        <div className='topnav TopMenu' id='topnav'>

            {/* <div className='links'>
                <Link to="/causes">
                    <Glyphicon icon={'home'} />
                </Link>
            </div> */}

            <div className="menuLogo links">
                <img
                    src={require('Assets/Logo/PNG/Artboard-1-copy-4Generosity-Logo.png')}
                    alt="Generosity Market top menu logo"
                />
            </div>

            {process.env.NODE_ENV === 'development' && (
                <div className='links menuButton'>
                    <div onClick={openMenu}>
                        <Glyphicon icon={'bars'} />
                    </div>
                </div>
            )}

        </div>
    );
};

export default TopMenu;
