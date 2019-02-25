import React, { Component } from 'react';
import './OrgDetails.css';

// Shared UI Components
import {
    Heading,
    TextSection,
} from 'components/shared';

// TODO convert to functional component if not using state
export default class OrgDetails extends Component {

    render() {
        const {
            heading,
            mission,
            email
        } = this.props;

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
    }
}
