import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/CauseDetail.css';

import {
    Button,
    Glyphicon,
} from '@jgordy24/stalls-ui';

// Ducks
import {
    causeSelected,
    getSingleCause,
} from 'ducks/cause';

// Utilities
import {
    // scrollTo,
    sharePage,
} from 'utilities';

// Shared UI Components
import { Banner } from 'components/shared';

// Cause Detail Components
import {
    AboutCause,
    DonorComments,
    ProgressBar,
    TileSection,
} from 'components/containers/CauseDetail';

export class CauseDetail extends Component {

    componentDidMount() {
        // scrollTo('topnav');

        // fetch the current cause if undefined (Usually on refreshing the screen)
        if (!this.props.cause) {
            const id = this.props.match.params.id;
            this.props.getSingleCause(id);
        }
    }

    render() {
        const {
            cause,
            cause: {
                Donations,
                name,
                cover_image,
                profile_image,
                Preferences,
                totalRaised,
                goal_amount,
                description,
                purpose,
            },
        } = this.props;

        let purchasedTiles;

        if (Donations) {
            purchasedTiles = Object.keys(Donations).map(index => Donations[index].amount);
        }

        return (
            <div className="CauseDetail">

                <Banner
                    heading={name}
                    cover_image={cover_image}
                    profile_image={profile_image}
                    round_image={Preferences ? Preferences[0].round_image : {}}
                />

                <div className="wrapper">

                    <ProgressBar
                        totalRaised={totalRaised}
                        goal={goal_amount}
                    />

                    <TileSection
                        {...cause}
                        purchasedTiles={purchasedTiles || []}
                    />

                    <Button
                        label='Donate'
                        bsStyle='active'
                        bsSize='full'
                        href='/checkout'
                    />

                    <div className="share-link" onClick={() => sharePage()}>
                        <Glyphicon icon={'share-alt'} />
                        Or Share This Page
                    </div>

                    <AboutCause
                        title={name}
                        aboutText={description}
                        usageText={purpose}
                    />

                    {Donations && Donations.length > 0 &&
                        <DonorComments
                            donations={Donations}
                        />
                    }

                    <Button
                        bsStyle="success"
                        bsSize="long"
                        label="Share this page"
                        onClick={sharePage}
                        icon="share-alt"
                    />

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cause, user }) => {
    const { selectedCause } = cause;

    return {
        cause: selectedCause,
        user
    };
};

const mapDispatchToProps = {
    causeSelected,
    getSingleCause
};

export default connect(mapStateToProps, mapDispatchToProps)(CauseDetail);
