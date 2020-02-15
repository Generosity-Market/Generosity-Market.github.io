import React from 'react';
import './AboutCause.css';

// Shared UI Components
import { TextSection } from 'components/shared';

const AboutCause = ({
    title,
    aboutText,
    usageText,
}) => {
    return (
        <div className="AboutCause">

            <TextSection
                heading={`About the ${title} Cause`}
                text={aboutText}
            />

            <TextSection
                heading={'How your gift will be used'}
                text={usageText}
            />

        </div>
    );
};

export default AboutCause;
