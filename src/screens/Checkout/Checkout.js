import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from '../../actions/actions';
import EmptyCart from './components/EmptyCart/EmptyCart';
import CartItem from './components/CartItem/CartItem';
import CartFooter from './components/CartFooter/CartFooter';
import Utils from '../../utilities/utilities';
import './Checkout.css';

class Checkout extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     zipCode: '',
  //     public_comment: '',
  //     private_comment: '',
  //   };
  //
  // };

  render() {
    // console.log("Checkout Props::.. ", this.props);
    const { cart, user, removeFromCart, clearCart } = this.props;

    let cartItems = cart.map(item => {
      return(
        <CartItem key={item.cause + item.amount}
          amount={item.amount}
          cart={cart}
          cause={item.cause}
          tileIcon={item.tileIcon}
          mainImage={item.mainImage}
          removeFromCart={removeFromCart} />
      );
    });

    return(
      <div className="Checkout">

          {!cart.length > 0 ?
            <EmptyCart /> : <div className="cart-container"> {cartItems} </div> }

          <CartFooter total={ Utils.getTotal(cart, 'amount') } />

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, cart: state.cart }
};

const mapDispatchToProps = { clearCart, removeFromCart };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
