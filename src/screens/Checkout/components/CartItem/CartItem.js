import React, { Component } from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import MainImage from '../../../../components/MainImage/MainImage';
import Utils from '../../../../utilities/utilities';
import './CartItem.css';

class CartItem extends Component {

  removeItemFromCart = () => {
      const { cart, amount, cause, removeFromCart } = this.props;
      let indexToRemove;

      for (var i = 0; i < cart.length; i++) {
          if ((cart[i].amount === amount) && (cart[i].cause === cause)) {
              indexToRemove = i;
          }
      };
      let updatedCart = Utils.removeIndexFromArray(indexToRemove, cart);
      removeFromCart(updatedCart);
  };

  render() {
    const { amount, cause, tileIcon, mainImage } = this.props;

    return(
      <div className="CartItem">
        <MainImage roundImage={false} mainImage={mainImage}/>

        <div className="itemInfo">
          <h3>{cause}</h3>
          <p>${amount}</p>
        </div>

        <div className="clear" onClick={() => this.removeItemFromCart()}>
          <FontAwesome classname={'fas fa-times'} />
        </div>
      </div>
    );
  };
};

export default CartItem;
