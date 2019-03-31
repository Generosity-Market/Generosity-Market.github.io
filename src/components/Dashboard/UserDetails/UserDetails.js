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

    changeHandler = (event) => {
        const {
            name,
            value,
        } = event.target;

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
        const { userId, editUserData } = this.props;

        // TODO also have some verification checks on the inputs [minLength, isEmpty, isProfane, etc...]

        editUserData(userId, this.state)
            .then(success => success && this.props.handleEditProfile());
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

    getInputProps = () => {
        const { editProfile } = this.props;

        return {
            className: editProfile ? 'active' : null,
            disabled: !editProfile,
            onChange: this.changeHandler,
        };
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

        return (
            <div className="profile-details UserDetails">

                <div className="user-details">
                    <TextInput
                        label="Name:"
                        name="name"
                        placeholder="Your name"
                        value={this.state.name}
                        {...this.getInputProps()}
                    />

                    <PhoneInput
                        label="Phone:"
                        placeholder="Phone number"
                        value={this.state.phone}
                        {...this.getInputProps()}
                    />

                    <AddressInputs
                        {...this.state.address}
                        {...this.getInputProps()}
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
