import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from '../../actions/actions';
import EmptyCart from './components/EmptyCart/EmptyCart';
import Cart from './components/Cart/Cart';
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
    const { cart, user } = this.props;
    // console.log("User: ", user);

    return(
      <div className="Checkout">

          {!cart.length > 0 ?
          <EmptyCart /> : <Cart {...this.props} /> }

          <CartFooter total={Utils.getTotal(cart, 'amount')} {...this.props} />

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, cart: state.cart }
};

const mapDispatchToProps = { clearCart, removeFromCart };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
