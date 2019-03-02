import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CauseDetail.css';

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
import {
    ActionButton,
    Banner,
    FontAwesome,
    LinkButton,
} from 'components/shared';

// Cause Detail Components
import {
    AboutCause,
    DonorComments,
    ProgressBar,
    TileSection,
} from 'components/CauseDetail';

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
                backgroundImage,
                mainImage,
                Preferences,
                totalRaised,
                amount,
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
                    BGimage={backgroundImage}
                    mainImage={mainImage}
                    roundImage={Preferences ? Preferences[0].roundImage : {}}
                />

                <div className="wrapper">

                    <ProgressBar
                        totalRaised={totalRaised}
                        goal={amount}
                    />

                    <TileSection
                        {...cause}
                        purchasedTiles={purchasedTiles}
                    />

                    <LinkButton
                        href="/checkout"
                        linkText="Donate"
                        classname="donate-link"
                    />

                    <div className="share-link" onClick={() => sharePage()}>
                        <FontAwesome icon={'share-alt'} />
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

                    <ActionButton
                        actionText="Share this page"
                        classname="share-page"
                        action={sharePage}
                        icon={'fas fa-share-alt'}
                    />

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        cause: {
            selectedCause,
        },
        cart: {
            cart,
        },
    } = state;

    return {
        cause: selectedCause,
        cart,
    };
};

const mapDispatchToProps = {
    causeSelected,
    getSingleCause
};

export default connect(mapStateToProps, mapDispatchToProps)(CauseDetail);
