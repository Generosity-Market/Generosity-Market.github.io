import React, { Component } from 'react';
import Header from '../../components/Header';
import ProgressBar from './components/ProgressBar';
import TileSection from './components/TileSection';
import AboutCause from './components/AboutCause';
import DonorComments from './components/DonorComments';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton';
import './SingleCause.css';

// NOTE sample data to be removed when api is live
import causes from '../../data/sampleData.js';

export default class SingleCause extends Component {
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
    console.log("Causes::::", causes[this.props.match.params.id]);
    let index = this.props.match.params.id;
    return(
      <div className="SingleCause">

        {/* TODO change to the cause title */}
        <Header
         heading={causes[index].name} BGimage={causes[index].backgroundImage} mainImage={causes[index].mainImage}/>

        <ProgressBar percentRaised={24}/>

        <TileSection />

        <LinkButton href="/checkout" linkText="Donate" classname="donate-link"/>

        <div className="share-link" onClick={() => this.sharePage()}>Or Share This Page</div>

        {/* TODO pass in this data from the api */}
        <AboutCause
         title={causes[index].name}

         aboutText={causes[index].description}

         usageText={causes[index].purpose}
        />

        <DonorComments />

        <ActionButton actionText="Share this page" classname="share-page" action={this.sharePage}/>

      </div>
    );
  }
}
