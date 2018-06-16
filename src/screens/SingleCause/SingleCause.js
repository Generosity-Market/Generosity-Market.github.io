import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCause, causeSelected } from '../../actions/actions';
import Banner from '../../components/Banner/Banner';
import ProgressBar from './components/ProgressBar/ProgressBar';
import TileSection from './components/TileSection/TileSection';
import AboutCause from './components/AboutCause/AboutCause';
import DonorComments from './components/DonorComments/DonorComments';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import FontAwesome from '../../components/FontAwesome/FontAwesome';
import Utils from '../../utilities/utilities';
import './SingleCause.css';

class SingleCause extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     amountRaised: 0,
  //     cart: [],
  //     cartTotal: 0
  //   };
  // };

  componentDidMount() {
    Utils.scrollTo('topnav');

    // fetch the current cause if undefined (Usually on refreshing the screen)
    if (!this.props.cause) {
      const id = this.props.match.params.id;
      this.props.getSingleCause(id);
    };
  };

  render() {
    let { cause } = this.props;

    return(
      <div className="SingleCause">

        {cause &&
        <Banner
          heading={cause.name}
          BGimage={cause.backgroundImage}
          mainImage={cause.mainImage}
          roundImage={cause.Preferences[0].roundImage}/> }

        <div className="wrapper">

          <ProgressBar
            percentRaised={Math.floor(Math.random() * 100)}
            goal={cause.amount}/>

          <TileSection
            cause={cause.name}
            mainImage={cause.mainImage}
            goal={cause.amount}
            tileIcon={cause.icon}/>

          <LinkButton
            href="/checkout"
            linkText="Donate"
            classname="donate-link"/>

          <div className="share-link" onClick={() => Utils.sharePage()}>
            <FontAwesome classname={"fas fa-share-alt"} />
            Or Share This Page
          </div>

          <AboutCause
            title={cause.name}
            aboutText={cause.description}
            usageText={cause.purpose}/>

          {cause.Donations &&
           cause.Donations.length > 0 &&
          <DonorComments
            donorData={cause.Donations.Comments}/> }

          <ActionButton
            actionText="Share this page"
            classname="share-page"
            action={Utils.sharePage}
            icon={"fas fa-share-alt"}/>

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
