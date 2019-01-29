import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import handleViewport from 'react-in-viewport';
import Utils from "utilities/utilities";
import "./dashboard.css";

import {
    getCauseList,
    causeSelected
} from "ducks/cause";

import {
    getUserCreatedCauses,
    getUserSupportedCauses,
} from "ducks/user";

// Shared UI Components
import {
    Banner,
    LinkButton,
} from 'components/shared';

// Dashboard Components
import UserDetails from "./components/UserDetails/UserDetails";
import UserCauses from "./components/UserCauses/UserCauses";
import DonorInfo from "./components/DonorInfo/DonorInfo";
import Receipts from "./components/Receipts/Receipts";

const InViewportUserCauses = handleViewport(UserCauses);
const InViewportReceipts = handleViewport(Receipts);

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: false,
            highlightedCause: null,
            loadingCauses: false,
        };
    }

    componentDidMount() {
        const {
            history,
            match,
            user,
            userData,
        } = this.props;

        const idsDontMatch = (Number(match.params.id) !== Number(userData.id));

        if (!user && !userData) history.push("/");
        if (idsDontMatch) history.push(`/users/${userData.id}/dashboard`);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        const previousUserWithoutCauses = (prevProps.user && !prevProps.user.Causes);
        const userCurrentlyHasCauses = (this.props.user && this.props.user.Causes);

        if (previousUserWithoutCauses && userCurrentlyHasCauses) {
            this.setState({ loadingCauses: false });
        };
    }

    getFirstName = name => {
        let index = name.indexOf(" ");
        let firstName = name.substring(0, index);
        return firstName || name;
    };

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

        switch (true) {
            case highlightedCause === null:
            case highlightedCause !== causeId:
                this.setState({ highlightedCause: causeId });
                break;
            // If the cause that is already highlighted is selected, set state to null??
            case highlightedCause === causeId:
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
            getUserCreatedCauses(id).then(() => this.setState({ loadingCauses: false }))
        }
    }

    render() {
        const {
            user,
            causeSelected,
        } = this.props;

        const {
            highlightedCause,
            editProfile,
            loadingCauses,
        } = this.state;

        return user && (
            <div className='Dashboard'>
                {/* TODO Once we have a user bucket in Amazon S3 and a create user
                        page we need to remove the getImageURL Utility function */}

                <Banner
                    BGimage={
                        user.backgroundImage &&
                        Utils.getImageURL(user.backgroundImage)
                    }
                    mainImage={
                        user.mainImage && Utils.getImageURL(user.mainImage)
                    }
                    roundImage={
                        user.Preferences[0]
                            ? !!user.Preferences[0].roundImage
                            : false
                    }
                />

                <div className='Wrapper'>
                    <UserDetails
                        name={user.name}
                        phone={user.phone}
                        address={this.returnAddressInfo(user)}
                        editProfile={editProfile}
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
                        href={"/causes/new"}
                        classname={"create-cause"}
                        linkText={"Create a cause"}
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
        user
    };
};

const mapDispatchToProps = {
    causeSelected,
    getUserCreatedCauses,
    getUserSupportedCauses,
    getCauseList,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
