import React, { Component } from 'react';
import Header from '../../components/Header';
import ProgressBar from './components/ProgressBar';
import TileSection from './components/TileSection';
import AboutCause from './components/AboutCause';
import DonorComments from './components/DonorComments';
import './SingleCause.css';

export default class SingleCause extends Component {

  render() {
    console.log(this.props.match.params.id);
    return(
      <div className="SingleCause">

        {/* TODO change to the cause title */}
        <Header heading={`Cause #${this.props.match.params.id}`} BGimage={'jessica-castro-516921.jpg'} mainImage={'madi-robson-113926.jpg'}/>

        <p>Cause id: {this.props.match.params.id}</p>
        <br/>

        <ProgressBar />

        <TileSection />

        <AboutCause />

        <DonorComments />

      </div>
    );
  }
}
