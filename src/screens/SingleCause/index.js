import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCause, causeSelected } from '../../actions/actions';
import Banner from '../../components/Banner/Banner';
import ProgressBar from './components/ProgressBar';
import TileSection from './components/TileSection';
import AboutCause from './components/AboutCause';
import DonorComments from './components/DonorComments';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton';
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

  sharePage = () => {
    alert("Shared");
  }

  componentDidMount() {
    Utils.scrollTo('topnav');
  };

  render() {
    let { cause } = this.props;
    // fetch the current cause if undefined (Usually on refreshing the screen)
    if (!cause) {
      const id = this.props.match.params.id;
      this.props.getSingleCause(id);
    };

    return(
      <div className="SingleCause">

        {cause ?
        <Banner
         heading={cause.name}
         BGimage={cause.backgroundImage}
         mainImage={cause.mainImage}
         roundImage={cause.preferences.roundImage}/>
        : '' }

        <ProgressBar
          percentRaised={Math.floor(Math.random() * 100)}
          goal={cause.amount}/>

        <TileSection
          goal={cause.amount}
          tileIcon={cause.icon}/>

        <LinkButton
          href="/checkout"
          linkText="Donate"
          classname="donate-link"/>

        <div className="share-link" onClick={() => this.sharePage()}>
          <i className="fas fa-share-alt"></i>
          Or Share This Page
        </div>

        <AboutCause
         title={cause.name}
         aboutText={cause.description}
         usageText={cause.purpose}/>

        {cause ?
        <DonorComments
          donorData={cause.comments}/>
        : '' }

        <ActionButton
          actionText="Share this page"
          classname="share-page"
          action={this.sharePage}
          icon={"fas fa-share-alt"}/>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { cause: state.selectedCause }
};

const mapDispatchToProps = { causeSelected, getSingleCause };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCause);
