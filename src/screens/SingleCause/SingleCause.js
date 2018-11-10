import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCause, causeSelected } from '../../actions/actions';
import Utils from '../../utilities/utilities';
import './SingleCause.css';

// Components
import Banner from '../../components/Banner/Banner';
import ProgressBar from './components/ProgressBar/ProgressBar';
import TileSection from './components/TileSection/TileSection';
import AboutCause from './components/AboutCause/AboutCause';
import DonorComments from './components/DonorComments/DonorComments';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import FontAwesome from '../../components/FontAwesome/FontAwesome';

class SingleCause extends Component {

  componentDidMount() {
    Utils.scrollTo('topnav');

    // fetch the current cause if undefined (Usually on refreshing the screen)
    if (!this.props.cause) {
      const id = this.props.match.params.id;
      this.props.getSingleCause(id);
    };
  };

  render() {
    const { cause } = this.props;
    let purchasedTiles;

    if (cause.Donations) {
      purchasedTiles = Object.keys(cause.Donations).map(index => cause.Donations[index].amount);
    }

    return(
      <div className="SingleCause">

        <Banner
          heading={cause.name}
          BGimage={cause.backgroundImage}
          mainImage={cause.mainImage}
          roundImage={cause.Preferences ? cause.Preferences[0].roundImage : {} }
        />

        <div className="wrapper">

          <ProgressBar
            totalRaised={cause.totalRaised}
            goal={cause.amount}
          />

          <TileSection {...cause} purchasedTiles={purchasedTiles} />

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
            title={cause.name}
            aboutText={cause.description}
            usageText={cause.purpose}
          />

          {cause.Donations && cause.Donations.length > 0 &&
            <DonorComments
              donations={cause.Donations}
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
  return { cause: state.selectedCause, cart: state.cart }
};

const mapDispatchToProps = { causeSelected, getSingleCause };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCause);
