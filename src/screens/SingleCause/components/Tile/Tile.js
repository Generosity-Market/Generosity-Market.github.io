import React, { Component } from 'react';
import Utils from '../../../../utilities/utilities';
import './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false,
      isPurchased: false
    };
  };

  render() {
    return(
      <div className={this.props.isPurchased ? 'Tile isPurchased' : "Tile"} onClick={this.props.isPurchased ? () => console.log('Already Purchased') : () => this.setState({ isSelected: !this.state.isSelected })}>

        <p className={this.state.isSelected ? 'tile-amount isSelected' : 'tile-amount'}>${this.props.amount}</p>

        <img src={Utils.getIconURL(this.props.tileIcon)} alt='Tile Icon'/>

      </div>
    );
  }
};

export default Tile;
