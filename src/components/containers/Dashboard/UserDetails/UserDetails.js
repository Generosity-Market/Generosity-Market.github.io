import React, { useState } from 'react';
import './UserDetails.css';

// Shared UI Components
import {
    AddressInputs,
    PhoneInput,
    Pill,
    TextInput,
} from 'components/shared';

import { isEqual } from 'utilities';

import EditProfileCTAs from '../EditProfileCTAs/EditProfileCTAs';

const UserDetails = ({
    editProfile,
    editUserData,
    handleEditProfile,
    user,
}) => {
    const [userState, setUserState] = useState({
        address: {
            city: user.city || '',
            state: user.state || '',
            street: user.street || '',
            zipcode: user.zipcode || '',
        },
        name: user.name || '',
        phone: user.phone || '',
    });
    const [formStatus, setFormStatus] = useState({
        isSaved: false,
    });

    const changeHandler = ({
        target: {
            name,
            value,
        }
    }) => {
        // const shouldOnlyAllowIntegers = ['phone', 'zipcode'].includes(name);
        // TODO add this as a validation instead of a check here, so that it can be used on all inputs that need it
        const isNotAddressField = ['name', 'phone'].includes(name);

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

    const handleFormStatus = () => {
        setFormStatus({
            ...formStatus,
            isSaved: !formStatus.isSaved,
        });
    };

    const usersInfoChanged = () => {
        const userInfo = {
            name: userState.name,
            address: userState.address,
            phone: userState.phone,
        };

        const userProps = {
            name: user.name,
            address: user.address,
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

        editUserData(user.id, userState)
            .then(success => {
                if (success) {
                    succesfulActions();
                }
            });
    };

    const handleUndoChanges = () => {
        setUserState({
            name: user.name || '',
            address: {
                city: user.city || '',
                state: user.state || '',
                street: user.street || '',
                zipcode: user.zipcode || '',
            },
            phone: user.phone || '',
        });
    };

    const handleCancelEdit = () => {
        handleUndoChanges();
        handleEditProfile();
    };

    const getInputProps = () => {
        return {
            className: editProfile ? 'active' : null,
            disabled: !editProfile,
            onChange: changeHandler,
        };
    };

    return (
        <div className="profile-details UserDetails">
            <div className={!formStatus.isSaved ? 'form-status fade-exit fade-exit-active' : 'form-status fade-enter fade-enter-active'}>
                <Pill
                    icon='check-circle'
                    uiContext='success'
                >
                    Profile Saved
                </Pill>
            </div>

            <div className="user-details">
                <TextInput
                    label="Name:"
                    name="name"
                    placeholder="Your name"
                    value={userState.name}
                    {...getInputProps()}
                />

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
