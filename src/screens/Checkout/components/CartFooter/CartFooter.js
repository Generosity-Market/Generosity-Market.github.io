import React from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import './CartFooter.css';

const CartFooter = ({ total, cart, toggleCheckoutForm, ...rest}) => {

  return(
    <div className="CartFooter">

      <div className="total-container">
        <h4>Total</h4>
        <h3 className='total'>${total}</h3>
      </div>

      <div 
        className={total === 0 ? 'placeholder-btn disabled' : 'placeholder-btn'}
        onClick={toggleCheckoutForm}
      >
        Checkout
        <FontAwesome classname={'far fa-credit-card'} />
      </div>

    </div>
  );
};

export default CartFooter;