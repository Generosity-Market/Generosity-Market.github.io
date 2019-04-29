import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import handleViewport from 'react-in-viewport';
import './dashboard.css';

import {
    appendFormData,
    // getImageUrl,
} from 'utilities';

import {
    getCauseList,
    causeSelected
} from 'ducks/cause';

import {
    editUserData,
    getUserCreatedCauses,
    getUserSupportedCauses,
} from 'ducks/user';

// Shared UI Components
import {
    // Banner,
    LinkButton,
    ImageUploader,
} from 'components/shared';

// Dashboard Components
import {
    DonorInfo,
    Receipts,
    UserCauses,
    UserDetails,
} from 'components/containers/Dashboard';

const InViewportUserCauses = handleViewport(UserCauses);
const InViewportReceipts = handleViewport(Receipts);

export class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: false,
            highlightedCause: null,
            loadingCauses: false,
            cover_image: '',
            coverURL: '',
            profile_image: '',
            profileURL: '',
            roundImage: true,
        };
    }

    componentDidMount() {
        const {
            history,
            // match,
            user,
            userData,
        } = this.props;

        // const idsDontMatch = (Number(match.params.id) !== Number(userData.id));

        if (!user && !userData) history.push('/');
        // if (idsDontMatch) history.push(`/users/${userData.id}/dashboard`);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        const previousUserWithoutCauses = (prevProps.user && !prevProps.user.Causes);
        const userCurrentlyHasCauses = (this.props.user && this.props.user.Causes);

        if (previousUserWithoutCauses && userCurrentlyHasCauses) {
            this.setState({ loadingCauses: false });
        }
    }

    handleEditProfile = () => this.setState({ editProfile: !this.state.editProfile });

    returnAddressInfo = ({ street, city, state, zipcode }) => {
        return {
            street,
            city,
            state,
            zipcode
        };
    };

    selectCauseToHighlight = causeId => {
        const { highlightedCause } = this.state;

        switch (highlightedCause) {
            case null:
            case !causeId:
                this.setState({ highlightedCause: causeId });
                break;
            // If the cause that is already highlighted is selected, set state to null??
            case causeId:
                this.setState({ highlightedCause: null });
                break;
            default:
                break;
        }
    };

    getHighlightedCause = () => {
        const { user } = this.props;
        const { highlightedCause } = this.state;

        return user.CreatedCauses.filter(cause => cause.id === highlightedCause)[0];
    };

    getReceipts = (id) => {
        const {
            getUserSupportedCauses,
            user: {
                SupportedCauses,
            },
        } = this.props;

        if (!SupportedCauses) getUserSupportedCauses(id);
    }

    getCauses = (id) => {
        const {
            getUserCreatedCauses,
            user: {
                CreatedCauses,
            },
        } = this.props;

        if (!CreatedCauses) {
            this.setState({ loadingCauses: true });
            getUserCreatedCauses(id).then(() => this.setState({ loadingCauses: false }));
        }
    }

    handleUpdateState = (field) => {
        return (event) => {
            if (field === 'roundImage') {
                this.setState({ [field]: !this.state[field] });
            } else {
                this.setState({ [field]: event.target.value });
            }
        };
    };

    handleImageChange = (event, field, url) => {
        event.preventDefault();
        if (event.target.files) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                this.setState({
                    [field]: file,
                    [url]: reader.result
                });
            };
            reader.readAsDataURL(file);
        } else {
            this.setState({
                [field]: '',
                [url]: ''
            });
        }
    };

    handleSaveImage = () => {
        const {
            cover_image,
            coverURL,
            profile_image,
            profileURL,
            roundImage,
        } = this.state;
        // console.log('handle uploading-', this.state);
        this.setState({ status: 'loading' });

        const userData = {
            cover_image,
            coverURL,
            profile_image,
            profileURL,
            roundImage,
            bucket: 'user',
            id: this.props.user.id,
        };

        const formData = appendFormData(userData);
        /* eslint-disable-next-line no-console */
        console.log('User FormData: ', formData);

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

    render() {
        const {
            user,
            causeSelected,
            editUserData,
        } = this.props;

        const {
            highlightedCause,
            editProfile,
            loadingCauses,
        } = this.state;

        // console.warn("User -> Dashboard: ", user);
        // console.warn('Dashboard Props: ', this.props);

        return user && (
            <div className='Dashboard'>

                <ImageUploader
                    handleImageChange={this.handleImageChange}
                    handleUpdateState={this.handleUpdateState}
                    profileURL={this.state.profileURL || user.mainImage}
                    coverURL={this.state.coverURL || user.backgroundImage}
                    roundImage={this.state.roundImage}
                    whiteText={this.state.whiteText}
                />

                <div className='Wrapper'>
                    <UserDetails
                        userId={user.id}
                        name={user.name}
                        phone={user.phone}
                        address={this.returnAddressInfo(user)}
                        editProfile={editProfile}
                        handleEditProfile={this.handleEditProfile}
                        editUserData={editUserData}
                    />

                    <InViewportUserCauses
                        loading={loadingCauses}
                        causes={user.CreatedCauses}
                        causeSelected={causeSelected}
                        selectCauseToHighlight={this.selectCauseToHighlight}
                        highlightedCause={highlightedCause}
                        onEnterViewport={() => this.getCauses(user.id)}
                    />

                    <LinkButton
                        href={'/causes/new'}
                        classname={'create-cause'}
                        linkText={'Create a cause'}
                    />

                    {(user.CreatedCauses && !!user.CreatedCauses.length) &&
                        <DonorInfo
                            cause={{ ...this.getHighlightedCause() }}
                        />
                    }

                    <InViewportReceipts
                        supportedCauses={user.SupportedCauses}
                        onEnterViewport={() => this.getReceipts(user.id)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        user: { user }
    } = state;

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
