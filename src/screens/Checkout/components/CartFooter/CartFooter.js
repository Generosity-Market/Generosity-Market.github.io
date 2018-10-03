import React from 'react';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import StripeWrapper from '../../../../containers/StripeWrapper/StripeWrapper';
import './CartFooter.css';

const CartFooter = ({total, cart, ...rest}) => {
  // console.log(rest);
  return(
    <div className="CartFooter">

      <div className="total-container">
        <h4>Total</h4>
        <h3 className='total'>${total}</h3>
      </div>

      <StripeWrapper
        amount={total}
        name={cart && cart[0] && cart[0].cause}
        image={'../../../../Assets/Logo/JPG/Artboard 1 copy 2Generosity - Logo.jpg'}
        description={``}
        disabled={total === 0}
      >
        <div className={total === 0 ? 'placeholder-btn disabled' : 'placeholder-btn'}>
          Checkout
          <FontAwesome classname={'far fa-credit-card'} />
        </div>
      </StripeWrapper>

    </div>
  );
};

export default CartFooter;