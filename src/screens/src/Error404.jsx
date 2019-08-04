import React from 'react';
import '../styles/Error404.css';

import {
    ActionButton,
    TexturedCircle,
} from 'components/shared';

export const Error404 = ({
    history,
}) => {

    return (
        <div className="Error404">

            <TexturedCircle colorMask="rgba(255,185,92,0.25)">
                <img
                    src={require('Assets/icons/PNG/icons8-road-closure-100.png')}
                    alt="broken link"
                />
            </TexturedCircle>

            <h1>404 Page Not Found</h1>
            <h2>
                <span>Oops!</span> This is awkward...
                <p>{'You are looking for something that doesn\'t actually exist.'}</p>
            </h2>

            <ActionButton
                action={history.goBack}
                actionText="Go back my friend, go back"
                classname={'go_back'}
            />
        </div>
    );
};

export default Error404;