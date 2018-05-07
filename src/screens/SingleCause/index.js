import React, { Component } from 'react';
import { connect } from 'react-redux';
import { causeSelected } from '../../actions/actions';
import Header from '../../components/Header';
import ProgressBar from './components/ProgressBar';
import TileSection from './components/TileSection';
import AboutCause from './components/AboutCause';
import DonorComments from './components/DonorComments';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton';
import services from '../../services/services';
import './SingleCause.css';

class SingleCause extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //     name: '',
  //     amountToRaise: 0,
  //     amountRaised: 0,
  //     cart: [],
  //     cartTotal: 0
  //   };
  // };

  sharePage = () => {
    alert("Shared");
  }

  render() {
    let { cause } = this.props;
    // fetch the current cause if undefined (Usually on refreshing the screen)
    if (!cause) {
      const id = this.props.match.params.id;
      services.fetchSingleCause(id)
      .then(cause => {
        this.props.causeSelected(cause[0]);
      });
    };

    return(
      <div className="SingleCause">

        {cause ? <Header
         heading={cause.name}
         BGimage={cause.backgroundImage} mainImage={cause.mainImage}
        /> : '' }

        <ProgressBar
          percentRaised={24}
        />

        <TileSection
          goal={cause.amount}
          tileIcon={cause.icon}
        />

        <LinkButton
          href="/checkout"
          linkText="Donate"
          classname="donate-link"
        />

        <div className="share-link" onClick={() => this.sharePage()}>
          <i className="fas fa-share-alt"></i>
          Or Share This Page
        </div>

        <AboutCause
         title={cause.name}
         aboutText={cause.description}
         usageText={cause.purpose}
        />

        {cause ? <DonorComments
          donorData={cause.comments}
        /> : '' }

        <ActionButton
          actionText="Share this page"
          classname="share-page"
          action={this.sharePage}
          icon={"fas fa-share-alt"}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cause: state.selectedCause }
}

const mapDispatchToProps = (dispatch) => {
    return {
        causeSelected: (payload) => dispatch(causeSelected(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCause);
