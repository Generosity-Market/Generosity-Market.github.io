import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from 'ducks/cart';
import Tile from '../Tile/Tile';
import './TileSection.css';

// Shared UI Components
import { Glyphicon } from '@jgordy24/stalls-ui';

// TODO: convert to functional component if not using state
export class TileSection extends Component {

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
        }
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
            indexEnd = 18;
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
            return null;
        });

        if (indexStart === 0) {
            filteredData.unshift(tiles[0]);
        }

        return this.mapTiles(filteredData);
    };

    mapTiles = (tiles) => {
        const { id, name, icon, profile_image } = this.props;
        return tiles.map(tile => {
            return (
                <Tile
                    key={name + tile.tileNumber}
                    cause_id={id}
                    cause={name}
                    amount={tile.tileNumber}
                    tileIcon={icon}
                    profile_image={profile_image}
                    isPurchased={tile.isPurchased}
                />
            );
        });
    };

    render() {
        const tiles = this.calculateTiles();
        return (
            <div className="TileSection">
                <h2>Select Amount</h2>

                <div className="direction-arrows left">
                    <Glyphicon
                        icon={'chevron-left'}
                        size={'2x'}
                    />
                </div>

                <div className="tile-wrapper">
                    {this.createBlocks(tiles)}
                </div>

                <div className="direction-arrows right">
                    <Glyphicon
                        icon={'chevron-right'}
                        size={'2x'}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => cart;

const mapDispatchToProps = { clearCart };


export default connect(mapStateToProps, mapDispatchToProps)(TileSection);
