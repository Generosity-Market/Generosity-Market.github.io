import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/CauseDetail.css';

import { useParams } from 'react-router-dom';

import {
    Button,
    Glyphicon,
    LinkButton,
} from '@jgordy24/stalls-ui';

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
    QrModalContainer,
} from 'components/containers/CauseDetail';

export const CauseDetail = ({
    cause,
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

    const { id } = useParams();

    useEffect(() => {
        if (!cause) {
            getSingleCause(id);
        }

        // eslint-disable-next-line
    }, [cause, id]);

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

    let total_raised = totalRaised || 0;
    let purchasedTiles = [];

    if (Donations) {
        // NOTE: Removes duplicates in case there are any
        const filteredDonations = Donations.filter((value, index, self) =>
            index === self.findIndex((t) => t.amount === value.amount)
        );

        purchasedTiles = filteredDonations.map(donation => {
            total_raised += donation.amount;
            return donation.amount;
        });
    }

    const webShareIsSupported = navigator.share;
    const handleWebShare = () => {
        if (webShareIsSupported) {
            const { title, description: text } = pageData;
            const _name = name.replace(/ /g, '-');

            const url = `${window.location.href}/?title=${_name}`;

            navigator.share({ title, text, url })
                .then((response) => {
                    // if (onShareSuccess) {
                    //     onShareSuccess(response);
                    // }
                }).catch(error => {
                    // console.log({ error });
                    // if (onShareError) {
                    //     onShareError(err);
                    // }
                });
        }
    };

    return (
        <div className="CauseDetail">
            <HeadContainer />

            <Banner
                heading={name}
                cover_image={cover_image}
                profile_image={profile_image}
                round_image={Preferences?.[0] ? Preferences[0].round_image : true}
            />

            <div className="wrapper">

                <ProgressBar
                    totalRaised={totalRaised || total_raised}
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
                    <div className="share-link" onClick={handleWebShare}>
                        <Glyphicon icon="share-alt" />
                        Or Share This Page
                    </div>
                }

                <QrModalContainer name={name} />

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
                        onClick={handleWebShare}
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
