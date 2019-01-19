import React from 'react';

import LinkButton from 'components/LinkButton/LinkButton';

const popup = ({ }) => {

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