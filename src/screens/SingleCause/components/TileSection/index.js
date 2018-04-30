import React, { Component } from 'react';
import Tile from '../Tile';
import './TileSection.css';

class TileSection extends Component {

  // TODO calculate the amount of tiles needed to raise the funding goal.
  calculateTiles = () => {
    return <Tile amount={50} tileIcon={'Africa.png'}/>;
  };

  render() {
    return(
      <div className="TileSection">
        <h2>Select Amount</h2>
        <div className="tile-wrapper">
          {this.calculateTiles()}
        </div>
      </div>
    );
  }
};

export default TileSection;
