import React, { Component, Fragment } from 'react';
import './UserDetails.css';

// Shared UI Components
import {
    FontAwesome,
    // MiniButton,
    PhoneInput,
    TextInput,
} from 'components/shared';

class UserDetails extends Component {
    constructor(props) {
        super(props);

        // Can we do this any better than setting default state from props?
        this.state = {
            name: props.name || '',
            address: {
                city: props.address.city || '',
                state: props.address.state || '',
                street: props.address.street || '',
                zipcode: props.address.zipcode || '',
            },
            phone: props.phone || '',
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
                    <div className="edit-ctas" onClick={() => this.handleCancelEdit(this.props)}>
                        <FontAwesome
                            icon='times'
                            style={{
                                color: 'var(--danger)',
                                marginBottom: '0.5rem',
                            }}
                            size='2x'
                        />
                        <p>Cancel Editing</p>
                    </div>
                    <div className="edit-ctas" onClick={this.handleSubmit}>
                        <FontAwesome
                            icon='save'
                            style={{
                                color: 'var(--bright-green)',
                                marginBottom: '0.5rem',
                            }}
                            size='2x'
                        />
                        <p>Save Changes</p>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <div className="edit-ctas" onClick={handleEditProfile}>
                    <FontAwesome
                        icon='user-edit'
                        style={{
                            color: 'var(--light-green)',
                            marginBottom: '0.5rem',
                        }}
                        size='2x'
                    />
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
