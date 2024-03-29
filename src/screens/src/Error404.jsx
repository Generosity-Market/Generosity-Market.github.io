import React from 'react';
import '../styles/Error404.css';

import { useLocation } from 'react-router-dom';

// import { Button } from '@jgordy24/stalls-ui';

import {
    TexturedCircle,
} from 'components/shared';

export const Error404 = () => {

    const location = useLocation();

    return (
        <div className="Error404">

            <TexturedCircle colorMask="rgba(255,185,92,0.25)">
                <img
                    src={require('Assets/icons/PNG/icons8-road-closure-100.png')}
                    alt="broken link"
                />
            </TexturedCircle>

            <h1>
                <span className="header-404">404</span>
                {`"${location.pathname}"`}
                <span style={{ display: 'block' }}>Not Found</span>
            </h1>

            <div className="message">
                <p className="oops">Oops!</p>
                <p>{'This is awkward... \nYou are looking for something that doesn\'t actually exist.'}</p>
            </div>

            {/* <Button
                bsStyle="warning"
                bsSize='long'
                label="Go back my friend, go back"
                onClick={history.goBack}
            /> */}
        </div>
    );
};

export default Error404;