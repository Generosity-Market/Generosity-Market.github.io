import React, { Component, Fragment } from 'react';
import './UserDetails.css';

// Shared UI Components
import {
    AddressInputs,
    FontAwesome,
    // MiniButton,
    PhoneInput,
    TextInput,
} from 'components/shared';

class UserDetails extends Component {
    constructor(props) {
        super(props);

        // TODO Can we do this any better than setting default state from props?
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
        target: { // event.target
            name,
            value,
        }
    }) => {
        // const shouldOnlyAllowIntegers = ['phone', 'zipcode'].includes(name); // TODO add this as a validation instead of a check here, so that it can be used on all inputs that needit
        const isNotAddressField = ['name', 'phone'].includes(name);

        if (isNotAddressField) {
            this.setState({
                [name]: value
            });
        } else {
            this.setState({
                address: {
                    ...this.state.address,
                    [name]: value,
                }
            });
        }
    }

    handleSubmit = () => {
        // TODO here we want to call an action that sends the new user info to the server,
        // TODO then overwrite the user data in the redux store with the user info returned by the server.
        // TODO also have some verification checks on the inputs [minLength, isEmpty, isProfane, etc...]
    }

    handleUndoChanges = () => {
        const { address, name, phone } = this.props;

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
    };

    handleCancelEdit = () => {
        this.handleUndoChanges();
        this.props.handleEditProfile();
    }

    renderEditProfileCTAs = () => {
        const { editProfile, handleEditProfile } = this.props;

        if (editProfile) {
            return (
                <Fragment>
                    <div className="edit-ctas" onClick={this.handleSubmit}>
                        <FontAwesome
                            className='success'
                            icon='save'
                            size='2x'
                        />
                        <p>Save</p>
                    </div>
                    <div className="edit-ctas" onClick={this.handleUndoChanges}>
                        <FontAwesome
                            className='warning'
                            icon='undo-alt'
                            size='2x'
                        />
                        <p>Undo</p>
                    </div>
                    <div className="edit-ctas" onClick={this.handleCancelEdit}>
                        <FontAwesome
                            className='danger'
                            icon='times'
                            size='2x'
                        />
                        <p>Cancel</p>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <div className="edit-ctas" onClick={handleEditProfile}>
                    <FontAwesome
                        className='info'
                        icon='user-edit'
                        size='2x'
                    />
                    <p>Edit</p>
                </div>
            );
        }
    }

    render() {
        const {
            editProfile,
        } = this.props;

        const inputProps = {
            className: editProfile ? 'active' : null,
            disabled: !editProfile,
            onChange: this.changeHandler,
        };

        return (
            <div className="profile-details UserDetails">

                <div className="user-details">
                    <TextInput
                        label="Name:"
                        name="name"
                        placeholder="Your name"
                        value={this.state.name}
                        {...inputProps}
                    />

                    <PhoneInput
                        label="Phone:"
                        placeholder="Phone number"
                        value={this.state.phone}
                        {...inputProps}
                    />

                    <AddressInputs
                        {...this.state.address}
                        {...inputProps}
                    />

                </div>

                <div className="edit-profile-btns">
                    {this.renderEditProfileCTAs()}
                </div>

            </div>
        );
    }
}

export default UserDetails;
