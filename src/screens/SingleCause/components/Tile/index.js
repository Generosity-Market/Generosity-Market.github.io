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

  // TODO need to receive the type of icon and the tile amount from props
  // NOTE Need to add a 'isPurchased'class to the element if its purchased.
  // NOTE It's already created in the css.
  render() {
    const tileImage = require(`../../../../Assets/icons/PNG/${this.props.tileIcon}`);
    
    return(
      <div className="Tile" onClick={() => this.setState({ isSelected: !this.state.isSelected })}>
        <p className={this.state.isSelected ? 'tile-amount isSelected' : 'tile-amount'}>${this.props.amount}</p>
        <img src={tileImage} alt='Tile Icon'/>
      </div>
    );
  }
};

export default Tile;
