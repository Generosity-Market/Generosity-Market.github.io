import React from 'react';

import {
    LinkButton,
} from 'components/shared';

const Popup = ({ }) => {

    return (
        <div>
            <p>What would you like to do next?</p>

            <LinkButton
                href="/causes/new"
            />

            <LinkButton
                href={`/users/${id}/dashboard`}
            />
        </div>
    );
}