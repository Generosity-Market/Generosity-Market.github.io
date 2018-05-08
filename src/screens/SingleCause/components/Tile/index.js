import React, { Component } from 'react';
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
    const tileImage = require(`../../../../Assets/icons/PNG/${this.props.tileIcon}`);

    return(
      <div className={this.props.isPurchased ? 'Tile isPurchased' : "Tile"} onClick={this.props.isPurchased ? () => console.log('Already Purchased') : () => this.setState({ isSelected: !this.state.isSelected })}>

        <p className={this.state.isSelected ? 'tile-amount isSelected' : 'tile-amount'}>${this.props.amount}</p>

        <img src={tileImage} alt='Tile Icon'/>
        
      </div>
    );
  }
};

export default Tile;
