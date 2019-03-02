import React, { Component } from 'react';
import './UserDetails.css';

// Shared UI Components
import {
    FontAwesome,
} from 'components/shared';

const photoUploadSection = (
    <div className="photo-upload">
        <FontAwesome icon={['far', 'image']} />
        <div>
            <FontAwesome icon={'plus'} />
            <p>Profile</p>
        </div>
    </div>
);

// TODO turn this into function component if we aren't using state
// TODO Enable editing of the users information here...
// TODO methods may need to be in the parent so it can handle submitting this info and any user images changes
class UserDetails extends Component {

    render() {
        const {
            name,
            address: {
                street,
                city,
                state,
                zipcode,
            },
            phone,
        } = this.props;

        return (
            <div className="profile-details UserDetails">

                <div className="user-details">
                    <p>
                        <span>Name: </span>{name}
                    </p>

                    <p>
                        <span>Address: </span><br />
                        {street},<br />
                        {city}, {state} {zipcode}
                    </p>

                    <p>
                        <span>Phone: </span>{phone}
                    </p>

                    <div className="edit-button">
                        <FontAwesome icon={'plus'} />
                        <p>edit profile</p>
                    </div>
                </div>

                {photoUploadSection}

            </div>
        );
    }
}

export default UserDetails;
