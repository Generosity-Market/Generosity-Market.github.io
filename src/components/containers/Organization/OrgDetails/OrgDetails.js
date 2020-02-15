import React from 'react';
import './OrgDetails.css';

// Shared UI Components
import {
    Heading,
    TextSection,
} from 'components/shared';

const OrgDetails = ({
    heading,
    mission,
    email
}) => {
    return (
        <div className="OrgDetails">

            <TextSection
                heading={'Our Motto'}
                text={heading}
            />

            <TextSection
                heading={'Our Mission'}
                text={mission}
            />

            <div className="contact-us">
                <Heading text={'For More Info'} />
                <a href={`mailTo:${email}`}>Contact us at: {email}</a>
            </div>

        </div>
    );
};

export default OrgDetails;
