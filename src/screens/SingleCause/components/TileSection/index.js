import React, { Component } from 'react';
import Tile from '../Tile';
import './TileSection.css';

class TileSection extends Component {

  render() {
    return(
      <div className="TileSection">
        <h2>Select Amount</h2>
        <div className="tile-wrapper">
          <Tile />
        </div>
      </div>
    );
  }
};

export default TileSection;
