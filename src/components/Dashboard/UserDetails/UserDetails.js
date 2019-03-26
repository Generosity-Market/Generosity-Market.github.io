import React, { Component, Fragment } from 'react';
import './UserDetails.css';

// Shared UI Components
import {
    FontAwesome,
    MiniButton,
    PhoneInput,
    TextInput,
} from 'components/shared';

class UserDetails extends Component {
    constructor(props) {
        super(props);

        // Can we do this any better than setting default state from props?
        this.state = {
            name: this.props.name || '',
            address: {
                city: this.props.address.city || '',
                state: this.props.address.state || '',
                street: this.props.address.street || '',
                zipcode: this.props.address.zipcode || '',
            },
            phone: this.props.phone || '',
        };
    }

    changeHandler = ({
        target: {
            name,
            value,
        }
    }) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {

    }

    handleCancelEdit = ({
        address,
        handleEditProfile,
        name,
        phone,
    }) => {
        this.setState({
            name: name || '',
            address: {
                city: address.city || '',
                state: address.state || '',
                street: address.street || '',
                zipcode: address.zipcode || '',
            },
            phone: phone || '',
        });

        handleEditProfile();
    }

    renderProfileCTAs = () => {
        const { editProfile, handleEditProfile } = this.props;

        if (editProfile) {
            return (
                <Fragment>
                    <div className="edit-ctas">
                        <MiniButton className='danger' onClick={() => this.handleCancelEdit(this.props)}>
                            <FontAwesome icon='times' />
                        </MiniButton>
                        <p>Cancel Editing</p>
                    </div>
                    <div className="edit-ctas">
                        <MiniButton className='success' onClick={this.handleSubmit}>
                            <FontAwesome icon='save' />
                        </MiniButton>
                        <p>Save Changes</p>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <div className="edit-ctas">
                    <MiniButton className='info' onClick={handleEditProfile}>
                        <FontAwesome icon='user-edit' />
                    </MiniButton>
                    <p>Edit Profile</p>
                </div>
            );
        }
    }

    render() {
        const {
            address: {
                street,
                city,
                state,
                zipcode,
            },
            editProfile,
        } = this.props;

        return (
            <div className="profile-details UserDetails">

                <div className="user-details">
                    <TextInput
                        label="Name:"
                        name="name"
                        placeholder="Your name"
                        onChange={this.changeHandler}
                        value={this.state.name}
                        disabled={!editProfile}
                    />

                    <PhoneInput
                        label="Phone:"
                        name="phone"
                        placeholder="Phone number"
                        onChange={this.changeHandler}
                        value={this.state.phone}
                        disabled={!editProfile}
                    />

                    <p>
                        <span>Address: </span><br />
                        {street},<br />
                        {city}, {state} {zipcode}
                    </p>
                </div>

                <div className="edit-profile-ctas">
                    {this.renderProfileCTAs()}
                </div>

            </div>
        );
    }
}

export default UserDetails;
