import React, { useState } from 'react';
import './UserDetails.css';

// Shared UI Components
import { Pill } from '@jgordy24/stalls-ui';
import {
    AddressInputs,
    PhoneInput,
    TextInput,
} from 'components/shared';

import { isEqual } from 'utilities';

import EditProfileCTAs from '../EditProfileCTAs/EditProfileCTAs';

const userInitialState = (user) => ({
    address: {
        city: user.city || '',
        state: user.state || '',
        address_1: user.address_1 || '',
        address_2: user.address_2 || '',
        zipcode: user.zipcode || '',
    },
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    phone: user.phone || '',
});

const UserDetails = ({
    editProfile,
    editUserData,
    handleEditProfile,
    user,
}) => {
    const [userState, setUserState] = useState(userInitialState(user));
    const [formSaved, setFormSaved] = useState(false);

    const changeHandler = ({ target }) => {
        const { name, value } = target;
        // const shouldOnlyAllowIntegers = ['phone', 'zipcode'].includes(name);
        // TODO: add this as a validation instead of a check here, so that it can be used on all inputs that need it
        const isNotAddressField = ['first_name', 'last_name', 'phone'].includes(name);

        if (isNotAddressField) {
            setUserState({
                ...userState,
                [name]: value
            });
        } else {
            setUserState({
                ...userState,
                address: {
                    ...userState.address,
                    [name]: value,
                }
            });
        }
    };

    const handleFormStatus = () => setFormSaved(state => !state);

    const usersInfoChanged = () => {
        const userInfo = {
            first_name: userState.first_name,
            last_name: userState.last_name,
            address: userState.address,
            phone: userState.phone,
        };

        const userProps = {
            first_name: user.first_name,
            last_name: userState.last_name,
            address: {
                city: user.city,
                state: user.state,
                street: user.street,
                zipcode: user.zipcode,
            },
            phone: user.phone,
        };

        return !isEqual(userInfo, userProps);
    };

    const succesfulActions = () => {
        handleEditProfile();
        handleFormStatus();
        setTimeout(() => handleFormStatus(), 3000);
    };

    const handleSubmit = () => {
        // TODO: also have some verification checks on the inputs [minLength, isEmpty, isProfane, etc...]

        // Check to see if the user actually edited the info
        if (!usersInfoChanged()) {
            return succesfulActions();
        }

        editUserData(user.id, { ...userState, ...userState.address })
            .then(success => {
                if (success) {
                    succesfulActions();
                }
            });
    };

    const handleUndoChanges = () => {
        setUserState(userInitialState(user));
    };

    const handleCancelEdit = () => {
        handleUndoChanges();
        handleEditProfile();
    };

    const getInputProps = () => {
        return {
            className: editProfile ? 'active' : '',
            disabled: !editProfile,
            onChange: changeHandler,
        };
    };

    return (
        <div className="profile-details UserDetails">
            <div
                className={formSaved
                    ? 'form-status fade-enter fade-enter-active'
                    : 'form-status fade-exit fade-exit-active'
                }
            >
                <Pill
                    icon='check-circle'
                    bsStyle='success'
                    label='Profile Saved'
                />
            </div>

            <div className="user-details">
                <p>Name</p>
                <div className="flex">
                    <TextInput
                        label="First:"
                        name="first_name"
                        placeholder="Ex: John"
                        value={userState.first_name}
                        inputStyle={{ width: '40%' }}
                        {...getInputProps()}
                    />

                    <TextInput
                        label="Last:"
                        name="last_name"
                        placeholder="Ex: Doe"
                        value={userState.last_name}
                        inputStyle={{ width: '40%' }}
                        {...getInputProps()}
                    />
                </div>

                <PhoneInput
                    label="Phone:"
                    placeholder="Phone number"
                    value={userState.phone}
                    {...getInputProps()}
                />

                <AddressInputs
                    {...userState.address}
                    {...getInputProps()}
                />
            </div>

            <div className="edit-profile-btns">
                <EditProfileCTAs
                    editProfile={editProfile}
                    handleEditProfile={handleEditProfile}
                    handleCancelEdit={handleCancelEdit}
                    handleSubmit={handleSubmit}
                    handleUndoChanges={handleUndoChanges}
                />
            </div>
        </div>
    );
};

export default UserDetails;
