import React from 'react';

import { Button } from '@jgordy24/stalls-ui';

const Popup = ({ id }) => {

    return (
        <div className="Popup">
            <p>What would you like to do next?</p>

            <Button
                label='Create a cause'
                bsStyle='info'
                bsSize='sm'
                href="/causes/new"
            />

            <Button
                label='See my dashboard'
                bsStyle='info'
                bsSize='sm'
                href={`/users/${id}/dashboard`}
            />
        </div>
    );
};

export default Popup;