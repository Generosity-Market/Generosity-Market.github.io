import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../../../actions/actions';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import Tile from '../Tile/Tile';
import './TileSection.css';

// TODO convert to functional component if not using state
class TileSection extends Component {

  isTilePurchased = (tileNumber) => {
    return this.props.purchasedTiles.includes(tileNumber);
  };

  calculateTiles = () => {
    let tileArray = [];
    let tileNumber = 1;
    let amount = this.props.amount;

    while (amount > 0) {
      tileArray.push({
        tileNumber: tileNumber, 
        isPurchased: this.isTilePurchased(tileNumber),
      });
      amount = amount - tileNumber;
      tileNumber++;
    };
    return tileArray;
  };

  createBlocks = (tiles) => {
    let blocks = [];
    let totalBlocks = Math.ceil(tiles.length / 18);

    for (var i = 0; i < totalBlocks; i++) {
      blocks.push(
        <div key={i} className={`block${i} row`}>{this.addBlockContent(tiles, i + 1, totalBlocks)}</div>
      );
    }
    return blocks;
  };

  addBlockContent = (tiles, i, totalBlocks) => {
    let indexStart;
    let indexEnd;
    if (i === 1) {
      indexStart = 0;
      indexEnd = 18
    } else if (i === totalBlocks) {
      indexStart = (i * 18 - 18);
      indexEnd = tiles.length;
    } else {
      indexStart = (i * 18 - 18);
      indexEnd = i * 18;
    }
    let filteredData = tiles.filter((obj, index) => {
      if ((index >= indexStart) && (index < indexEnd)) {
        return index;
      }
    });

    if (indexStart === 0) {
      filteredData.unshift(tiles[0]);
    }

    return this.mapTiles(filteredData);
  };

  mapTiles = (tiles) => {
    const { id, name, icon, mainImage } = this.props;
    return tiles.map(tile => {
      return (
        <Tile 
          key={name + tile.tileNumber}
          causeID={id}
          cause={name}
          amount={tile.tileNumber}
          tileIcon={icon}
          mainImage={mainImage}
          isPurchased={tile.isPurchased}
        />
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

const mapStateToProps = (state) => {
  return { cart: state.cart }
};

const mapDispatchToProps = { clearCart };


export default connect(mapStateToProps, mapDispatchToProps)(TileSection);
