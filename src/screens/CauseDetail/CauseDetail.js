import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCause, causeSelected } from '../../ducks/cause';
import Utils from '../../utilities/utilities';
import './CauseDetail.css';

// Shared UI Components
import Banner from 'components/Banner/Banner';
import ActionButton from 'components/ActionButton';
import LinkButton from 'components/LinkButton/LinkButton';
import FontAwesome from 'components/FontAwesome/FontAwesome';

// Cause Detail Components
import ProgressBar from './components/ProgressBar/ProgressBar';
import TileSection from './components/TileSection/TileSection';
import AboutCause from './components/AboutCause/AboutCause';
import DonorComments from './components/DonorComments/DonorComments';

class CauseDetail extends Component {

  componentDidMount() {
    Utils.scrollTo('topnav');

    // fetch the current cause if undefined (Usually on refreshing the screen)
    if (!this.props.cause) {
      const id = this.props.match.params.id;
      this.props.getSingleCause(id);
    };
  };

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

          <div className="share-link" onClick={() => Utils.sharePage()}>
            <FontAwesome classname={"fas fa-share-alt"} />
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
            action={Utils.sharePage}
            icon={"fas fa-share-alt"}
          />

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    cause: { selectedCause },
    cart: { cart },
  } = state;

  return {
    cause: selectedCause,
    cart,
  }
};

const mapDispatchToProps = { causeSelected, getSingleCause };

export default connect(mapStateToProps, mapDispatchToProps)(CauseDetail);
