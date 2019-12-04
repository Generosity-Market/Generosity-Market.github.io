import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import handleViewport from 'react-in-viewport';
import '../styles/Dashboard.css';

import {
    Button,
    ImageUploader,
} from '@jgordy24/stalls-ui';

import {
    getCauseList,
    causeSelected,
} from 'ducks/cause';

import {
    editUserData,
    getUserCreatedCauses,
    getUserSupportedCauses,
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

    const getReceipts = (id) => {
        if (!user.SupportedCauses) getUserSupportedCauses(id);
    };

    const getCauses = (id) => {
        if (!user.CreatedCauses) {
            setLoadingCauses(true);
            getUserCreatedCauses(id).then(() => setLoadingCauses(false));
        }
    };

    const handleSaveImage = (imageData) => {
        /* eslint-disable-next-line no-console */
        console.log('ImageData: ', imageData);
        // console.log('handle uploading-', this.state);
        // this.setState({ status: 'loading' });

        // const userData = {
        //     ...images,
        //     bucket: 'user',
        //     id: user.id,
        // };

        // const formData = appendFormData(userData);
        /* eslint-disable-next-line no-console */
        // console.log('User FormData: ', formData);

        // submitCauseFormData(formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(res => {
        //         // TODO look for the response to see if errors come here....
        //         /* eslint-disable-next-line no-console */
        //         console.log('Response: ', res);
        //         if (res.errors) {
        //             // return // handle error...
        //         }

        //         this.setState({ status: 'success' });
        //         this.props.addCause(res.Cause);
        //         // BUG FIX -> Navigating to previously created page instead of the newly created one...
        //         setTimeout(() => this.props.history.push(`/cause/${res.Cause.id}`), 1000);
        //     })
        //     .catch(err => {
        //         // handle your error
        //         /* eslint-disable-next-line no-console */
        //         console.log('Error: ', err);
        //     });
    };

    return user && (
        <div className='Dashboard'>
            <ImageUploader
                coverImgSrc={user.mainImage}
                heading={''}
                profileImgSrc={user.backgroundImage}
                /* eslint-disable-next-line no-console */
                onSubmit={handleSaveImage}
                roundImage={user.roundImage}
            />

            <div className='Wrapper'>
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
                    onEnterViewport={() => getCauses(user.id)}
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
                    onEnterViewport={() => getReceipts(user.id)}
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
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
