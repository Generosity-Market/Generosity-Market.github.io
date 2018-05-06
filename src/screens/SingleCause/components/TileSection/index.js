import React, { Component } from 'react';
import Tile from '../Tile';
import './TileSection.css';

class TileSection extends Component {

  // TODO calculate the amount of tiles needed to raise the funding goal.
  calculateTiles = () => {
    // return <Tile amount={50} tileIcon={'Africa.png'} isPurchased={false}/>;
    let tileArray = [];
    let tileNumber = 1,
        amount = this.props.goal;

    while (amount > 0) {
      if (tileNumber % 18 === 0) {
        tileArray.push({tileNumber: tileNumber, isPurchased: false});
        amount = amount - tileNumber;
        tileNumber++;
      } else if ((tileNumber === 1) || (tileNumber % 18 === 1)) {
        tileArray.push({tileNumber: tileNumber, isPurchased: true});
        amount = amount - tileNumber;
        tileNumber++;
      } else {
        tileArray.push({tileNumber: tileNumber, isPurchased: false});
        amount = amount - tileNumber;
        tileNumber++;
      }
    };

    return this.mapTiles(tileArray);
  };

  mapTiles = (tiles) => {
    return tiles.map((tile, index) => {
      return(
        <Tile key={index} amount={tile.tileNumber} tileIcon={this.props.tileIcon} isPurchased={tile.isPurchased}/>
      );
    });
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
