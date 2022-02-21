import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import handleViewport from 'react-in-viewport';
import { handleViewport } from 'react-in-viewport';
import '../styles/Dashboard.css';

import {
    // Button,
    ImageUploader,
    LinkButton,
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
    user,
    userData, // NOTE: Cookie data?? I think
}) => {
    const navigate = useNavigate();

    // TODO: useReducer hook instead
    const [highlightedCause, setHighlightedCause] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [loadingCauses, setLoadingCauses] = useState(false);
    const [loadingReceipts, setLoadingReceipts] = useState(false);
    const [isUploading, setIsUploading] = useState({ status: false, message: null });

    useEffect(() => {
        // const idsDontMatch = (Number(match.params.id) !== Number(userData.id));

        if (!user && !userData) navigate('/');
        // if (idsDontMatch) history.push(`/users/${userData.id}/dashboard`);
    }, [navigate, user, userData]);

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
        if (!user.SupportedCauses) {
            setLoadingReceipts(true);
            getUserSupportedCauses(user.id).then(() => setLoadingReceipts(false));
        }
    };

    const getCauses = () => {
        if (!user.CreatedCauses) {
            setLoadingCauses(true);
            getUserCreatedCauses(user.id).then(() => setLoadingCauses(false));
        }
    };

    const handleSaveImage = async ({ profile_image, cover_image }) => {
        setIsUploading({ status: true, message: 'Uploading...' });

        const uploadData = {
            profile_image: profile_image.file,
            cover_image: cover_image.file,
            bucket: 'user',
        };

        const uploadFinished = (state) => {
            setIsUploading(state);
            setTimeout(() => setIsUploading({ status: false, message: null }), 3000);
        };

        try {
            const response = await submitUserImages(user, uploadData);

            if (response.error) {
                uploadFinished({ status: true, message: 'Upload Failed' });
            } else {
                uploadFinished({ status: true, message: 'Upload Successful' });
            }
        } catch (error) {
            uploadFinished({ status: true, message: 'Upload Failed' });
        }
    };

    return user && (
        <div className='Dashboard'>
            <ImageUploader
                coverImgSrc={user.cover_image}
                profileImgSrc={user.profile_image}
                onSubmit={handleSaveImage}
                round_image={user.round_image}
            />

            <div className='Wrapper'>
                {isUploading.status &&
                    <span className='upload_status'>
                        <Pill
                            label={isUploading.message}
                            bsStyle="info"
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

                <LinkButton
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
                    loading={loadingReceipts}
                    supportedCauses={user.SupportedCauses}
                    onEnterViewport={getReceipts}
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
    causeSelected,
    editUserData,
    getUserCreatedCauses,
    getUserSupportedCauses,
    getCauseList,
    submitUserImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
