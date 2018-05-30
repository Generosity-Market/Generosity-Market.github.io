import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import Tile from '../Tile';
import './TileSection.css';

class TileSection extends Component {

  createBlocks = (tiles) => {
    let blocks = [],
        totalBlocks = Math.ceil(tiles.length / 18);

    for (var i = 0; i < totalBlocks; i++) {
        blocks.push(
          <div key={i} className={`block${i} row`}>{this.addBlockContent(tiles, i + 1, totalBlocks)}</div>
        );
    }
    return blocks;
  }

  addBlockContent = (tiles, i, totalBlocks) => {
    let indexStart;
    let indexEnd;
    if (i === 1) {
      indexStart = 0;
      indexEnd = 18
    } else if (i === totalBlocks) {
      indexStart = (i * 18 - 18 );
      indexEnd = tiles.length;
    } else {
      indexStart = (i * 18 - 18 );
      indexEnd = i * 18;
    }
    let filteredData = tiles.filter((obj,index) => {
      if ((index >= indexStart) && (index < indexEnd)) {
        return index;
      }
    });

    if (indexStart === 0) {
        filteredData.unshift(tiles[0]);
    }

    return this.mapTiles(filteredData);
  }

  calculateTiles = () => {
    let tileArray = [],
        tileNumber = 1,
        amount = this.props.goal;
        let rando = Math.floor(Math.random() * 37);

    while (amount > 0) {
      if (tileNumber % rando === 1) {
        tileArray.push({tileNumber: tileNumber, isPurchased: true});
        amount = amount - tileNumber;
        tileNumber++;
      } else {
        tileArray.push({tileNumber: tileNumber, isPurchased: false});
        amount = amount - tileNumber;
        tileNumber++;
      }
    };
    return tileArray;
  };

  mapTiles = (tiles) => {
    return tiles.map((tile, index) => {
      return(
        <Tile key={index} amount={tile.tileNumber} tileIcon={this.props.tileIcon} isPurchased={tile.isPurchased}/>
      );
    });
  };

  render() {
    const tiles = this.calculateTiles();

    return(
      <div className="TileSection">
        <h2>Select Amount</h2>

        <div className="direction-arrows left">
          <FontAwesome classname={"fas fa-2x fa-chevron-left"} />
        </div>

        <div className="tile-wrapper">
          {this.createBlocks(tiles)}
        </div>

        <div className="direction-arrows right">
          <FontAwesome classname={"fas fa-2x fa-chevron-right"} />
        </div>
      </div>
    );
  }
};

export default TileSection;
