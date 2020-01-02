import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import handleViewport from 'react-in-viewport';
import '../styles/Dashboard.css';

import {
    Button,
    ImageUploader,
    Pill,
} from '@jgordy24/stalls-ui';

import {
    getCauseList,
    causeSelected,
} from 'ducks/cause';

import {
    editUserData,
    getUserCreatedCauses,
    getUserSupportedCauses,
    submitUserImages,
} from 'ducks/user';

// Dashboard Components
import {
    DonorInfo,
    Receipts,
    UserCauses,
    UserDetails,
} from 'components/containers/Dashboard';

const InViewportUserCauses = handleViewport(UserCauses);
const InViewportReceipts = handleViewport(Receipts);

export const Dashboard = ({
    causeSelected,
    editUserData,
    getUserCreatedCauses,
    getUserSupportedCauses,
    history,
    user,
    userData, // NOTE: Cookie data?? I think
}) => {

    // TODO: useReducer hook instead
    const [highlightedCause, setHighlightedCause] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [loadingCauses, setLoadingCauses] = useState(false);
    const [isUploading, setIsUploading] = useState({ status: false, message: null });

    useEffect(() => {
        // const idsDontMatch = (Number(match.params.id) !== Number(userData.id));

        if (!user && !userData) history.push('/');
        // if (idsDontMatch) history.push(`/users/${userData.id}/dashboard`);
    }, [history, user, userData]);

    // TODO: Convert this to hooks???
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     const previousUserWithoutCauses = (prevProps.user && !prevProps.user.Causes);
    //     const userCurrentlyHasCauses = (this.props.user && this.props.user.Causes);

    //     if (previousUserWithoutCauses && userCurrentlyHasCauses) {
    //         this.setState({ loadingCauses: false });
    //     }
    // }

    const handleEditProfile = () => setEditProfile(!editProfile);

    const selectCauseToHighlight = causeId => {
        switch (true) {
            case null:
            case (highlightedCause !== causeId):
                setHighlightedCause(causeId);
                break;
            // If the cause that is already highlighted is selected, set state to null??
            case (highlightedCause === causeId):
                setHighlightedCause(null);
                break;
            default:
                break;
        }
    };

    const getHighlightedCause = () => {
        return user.CreatedCauses.filter(cause => cause.id === highlightedCause)[0];
    };

    const getReceipts = () => {
        if (!user.SupportedCauses) getUserSupportedCauses(user.id);
    };

    const getCauses = () => {
        if (!user.CreatedCauses) {
            setLoadingCauses(true);
            getUserCreatedCauses(user.id).then(() => setLoadingCauses(false));
        }
    };

    const handleSaveImage = (imageData) => {
        setIsUploading({ status: true, message: 'Uploading...' });

        const uploadData = {
            profile_image: imageData.profileImage.file,
            cover_image: imageData.coverImage.file,
            bucket: 'user',
        };

        submitUserImages(user, uploadData)
            .then(res => {
                if (res.error) {
                    setIsUploading({ status: true, message: 'Upload Failed' });
                    setTimeout(() => setIsUploading({ status: false, message: null }), 3000);
                }

                setIsUploading({ status: true, message: 'Upload Successful √' });
                setTimeout(() => setIsUploading({ status: false, message: null }), 3000);
            });
    };

    return user && (
        <div className='Dashboard'>
            <ImageUploader
                coverImgSrc={user.backgroundImage}
                profileImgSrc={user.mainImage}
                onSubmit={handleSaveImage}
                roundImage={user.roundImage}
            />

            <div className='Wrapper'>
                {isUploading.status &&
                    <span className='upload_status'>
                        <Pill
                            label={isUploading.message}
                            bsStyle="default"
                            active
                        />
                    </span>
                }

                <UserDetails
                    user={user}
                    editProfile={editProfile}
                    handleEditProfile={handleEditProfile}
                    editUserData={editUserData}
                />

                <InViewportUserCauses
                    loading={loadingCauses}
                    causes={user.CreatedCauses}
                    causeSelected={causeSelected}
                    selectCauseToHighlight={selectCauseToHighlight}
                    highlightedCause={highlightedCause}
                    onEnterViewport={getCauses}
                />

                <Button
                    bsStyle='success'
                    bsSize='long'
                    label='Create a cause'
                    href='/causes/new'
                />

                {(user.CreatedCauses && !!user.CreatedCauses.length) &&
                    <DonorInfo
                        cause={{ ...getHighlightedCause() }}
                    />
                }

                <InViewportReceipts
                    supportedCauses={user.SupportedCauses}
                    onEnterViewport={getReceipts}
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({
    user: {
        user,
    },
}) => {
    return {
        user,
    };
};

const mapDispatchToProps = {
    causeSelected,
    editUserData,
    getUserCreatedCauses,
    getUserSupportedCauses,
    getCauseList,
    submitUserImages,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
