import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/CauseDetail.css';

import {
    Button,
    Glyphicon,
    LinkButton,
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

export const CauseDetail = ({
    cause,
    match,
    getSingleCause,
}) => {
    const {
        Donations,
        name,
        cover_image,
        profile_image,
        Preferences,
        totalRaised,
        goal_amount,
        description,
        purpose,
    } = cause;

    useEffect(() => {
        if (!cause) {
            const id = match.params.id;
            getSingleCause(id);
        }
        // eslint-disable-next-line
    }, [cause, match.params.id]);

    let purchasedTiles = [];

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
                    goal_amount={goal_amount}
                />

                <TileSection
                    {...cause}
                    purchasedTiles={purchasedTiles}
                />

                <LinkButton
                    label='Donate'
                    bsStyle='active'
                    bsSize='long'
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
};

const mapStateToProps = ({ cause, user }) => {
    const { selectedCause } = cause;

    return {
        cause: selectedCause,
        user,
    };
};

const mapDispatchToProps = {
    causeSelected,
    getSingleCause
};

export default connect(mapStateToProps, mapDispatchToProps)(CauseDetail);
