import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

import {
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
    submitUserImages,
} from 'ducks/user';

// Dashboard Components
import {
    DonorInfo,
    Receipts,
    UserCauses,
    UserDetails,
} from 'components/containers/Dashboard';

const placeholderCoverImage = 'https://generosity-market-user-images.s3.amazonaws.com/coverImages/placeholder_image.png';

export const Dashboard = ({
    editUserData,
    user,
    // userData, // NOTE: Cookie data?? I think
}) => {
    // const navigate = useNavigate();

    const [highlightedCause, setHighlightedCause] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [isUploading, setIsUploading] = useState({ status: false, message: null });

    // useEffect(() => {
    //     // const idsDontMatch = (Number(match.params.id) !== Number(userData.id));

    //     if (!user && !userData) navigate('/');
    //     // if (idsDontMatch) navigate(`/users/${userData.id}/dashboard`);
    // }, [navigate, user, userData]);

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
                coverImgSrc={user.cover_image || placeholderCoverImage}
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

                <UserCauses
                    selectCauseToHighlight={selectCauseToHighlight}
                    highlightedCause={highlightedCause}
                />

                {(user.CreatedCauses && !!user.CreatedCauses.length) &&
                    <DonorInfo
                        cause={{ ...getHighlightedCause() }}
                    />
                }

                <LinkButton
                    bsStyle='success'
                    bsSize='long'
                    label='Create a cause'
                    href='/causes/new'
                />

                <Receipts />
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
    causeSelected,
    editUserData,
    getCauseList,
    submitUserImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
