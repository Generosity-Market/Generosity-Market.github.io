import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../actions/actions';
import Utils from '../../../../utilities/utilities';
import './Tile.css';

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false
    };
  };

  addTileToCart = (amount, cause, tileIcon, mainImage, orgID, userID, featured, type) => {
    this.props.addToCart({ amount, cause, tileIcon, mainImage, orgID, userID, featured, type });
    this.setState({ isSelected: true });
  };

  removeTileFromCart = () => {
    const { cart, amount, cause } = this.props;
    let indexToRemove;

    for (var i = 0; i < cart.length; i++) {
      if ((cart[i].amount === amount) && (cart[i].cause === cause)) {
        indexToRemove = i;
      }
    };

    let updatedCart = Utils.removeIndexFromArray(indexToRemove, cart);

    this.props.removeFromCart(updatedCart);

    this.setState({ isSelected: false});
  };

  componentDidMount() {
    // if this tile is in the cart, we want to select it again open reopening the page
    this.props.cart.forEach(index => {
      if( (index.amount === this.props.amount) && (this.props.cause === index.cause) ) {
        this.setState({ isSelected: true });
      };
    });
  };

  render() {
    const { cause, amount, mainImage, isPurchased, tileIcon, orgID, userID, featured, type } = this.props;
    const { isSelected } = this.state;

    return(
      <div className={isPurchased ? 'Tile isPurchased' : "Tile"}
           onClick={isSelected ? () => this.removeTileFromCart() :
             () => this.addTileToCart(amount, cause, tileIcon, mainImage, orgID, userID, featured, type)}>

        <p className={isSelected ? 'tile-amount isSelected' : 'tile-amount'}>${amount}</p>

        <img src={ Utils.getIconURL(tileIcon) } alt='Tile Icon'/>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { cart: state.cart }
};

const mapDispatchToProps = { addToCart, removeFromCart };


export default connect(mapStateToProps, mapDispatchToProps)(Tile);
