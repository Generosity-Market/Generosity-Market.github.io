import React, { Component } from 'react';
import Tile from '../Tile';
import './TileSection.css';

class TileSection extends Component {

  // TODO calculate the amount of tiles needed to raise the funding goal.
  calculateTiles = () => {
    // return <Tile amount={50} tileIcon={'Africa.png'}/>;
    let tileNumber = 1,
        amount = this.props.goal;

    while (amount > 0) {
      if (tileNumber % 21 === 0) {
        amount = amount - tileNumber;
        tileNumber++;
        console.log("--------------------");
        console.log("amount:: ", amount);
        console.log("Tile::: ", tileNumber);
      } else if ((tileNumber === 1) || (tileNumber % 21 === 1)) {
        amount = amount - tileNumber;
        tileNumber++;
        console.log("--------------------");
        console.log("amount:: ", amount);
        console.log("Tile::: ", tileNumber);
      } else {
        amount = amount - tileNumber;
        tileNumber++;
        console.log("--------------------");
        console.log("amount:: ", amount);
        console.log("Tile::: ", tileNumber);
      }
    };
    console.log("End Amount: ", amount);
    console.log("Total Tiles:: ", tileNumber);
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
