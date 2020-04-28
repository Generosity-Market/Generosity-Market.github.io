import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/CauseDetail.css';

import {
    Button,
    Glyphicon,
    LinkButton,
} from '@jgordy24/stalls-ui';

import { useWebShareApi } from '@jgordy24/react-hooks-lib';

// Ducks
import { getSingleCause } from 'ducks/cause';
import { setPageData } from 'ducks/pageData';

// Shared UI Components
import {
    Banner,
    HeadContainer,
} from 'components/shared';

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
    setPageData,
    pageData,
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

    const [webShareIsSupported, share] = useWebShareApi(pageData);

    useEffect(() => {
        if (!cause) {
            const id = match.params.id;
            getSingleCause(id);
        }
        // eslint-disable-next-line
    }, [cause, match.params.id]);

    useEffect(() => {
        if (cause) {
            setPageData({
                pageName: 'causeDetail',
                title: `Generosity Market - ${name}`,
                image: cover_image,
                description,
                text: description,
            });
        }
    }, [cause, name, cover_image, description, setPageData]);

    let purchasedTiles = [];

    if (Donations) {
        purchasedTiles = Object.keys(Donations).map(index => Donations[index].amount);
    }

    return (
        <div className="CauseDetail">
            <HeadContainer />

            <Banner
                heading={name}
                cover_image={cover_image}
                profile_image={profile_image}
                round_image={Preferences ? Preferences[0].round_image : true}
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

                {webShareIsSupported &&
                    <div className="share-link" onClick={share}>
                        <Glyphicon icon={'share-alt'} />
                        Or Share This Page
                    </div>
                }

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

                {webShareIsSupported &&
                    <Button
                        bsStyle="success"
                        bsSize="long"
                        label="Share this page"
                        onClick={share}
                        icon="share-alt"
                    />
                }

            </div>
        </div>
    );
};

const mapStateToProps = ({ cause, user, pageData }) => {
    const { selectedCause } = cause;

    return {
        cause: selectedCause,
        pageData,
        user,
    };
};

const mapDispatchToProps = { getSingleCause, setPageData };

export default connect(mapStateToProps, mapDispatchToProps)(CauseDetail);
